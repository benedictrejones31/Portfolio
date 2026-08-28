import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function validate(body: ContactPayload) {
  const errors: string[] = [];
  if (!body.name || body.name.trim().length < 2) errors.push("name");
  if (!body.email || !EMAIL_RE.test(body.email.trim())) errors.push("email");
  if (!body.subject || body.subject.trim().length < 3) errors.push("subject");
  if (!body.message || body.message.trim().length < 10) errors.push("message");
  return errors;
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const invalidFields = validate(body);
  if (invalidFields.length > 0) {
    return NextResponse.json(
      { error: `Please fill out all fields correctly (${invalidFields.join(", ")}).` },
      { status: 400 }
    );
  }

  const name = body.name!.trim();
  const email = body.email!.trim();
  const subject = body.subject!.trim();
  const message = body.message!.trim();

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  // Credentials live only in server-side environment variables — never sent to the client.
  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      "Contact form is not configured: missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL."
    );
    return NextResponse.json(
      {
        error:
          "The contact form isn't fully configured yet. Please reach out directly by email in the meantime.",
      },
      { status: 503 }
    );
  }

  try {
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html: `
          <div style="font-family: sans-serif; font-size: 14px; color: #111;">
            <p><strong>New portfolio contact form submission</strong></p>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        `,
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text().catch(() => "");
      console.error("Resend API error:", emailRes.status, errText);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send error:", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again shortly." },
      { status: 500 }
    );
  }
}
