"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState) {
  const errors: Partial<FormState> = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!form.email.trim() || !EMAIL_RE.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject.trim() || form.subject.trim().length < 3) {
    errors.subject = "Please enter a subject.";
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  function handleChange(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setServerMessage(data?.error || "Something went wrong. Please try again in a moment.");
        return;
      }

      setStatus("success");
      setServerMessage("Message sent — thanks for reaching out! I'll get back to you soon.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setServerMessage("Network error — please check your connection and try again.");
    }
  }

  const fieldClass =
    "w-full rounded-md border border-border bg-surface2 px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-colors focus:border-amber";

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-border bg-surface p-8">
      <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
        <span className="font-mono text-xs uppercase tracking-widest text-teal">contact_form.tsx</span>
        <span className="font-mono text-[10px] uppercase text-faint">encrypted delivery</span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-faint">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={fieldClass}
            placeholder="Your name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-faint">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={fieldClass}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="subject" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-faint">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={form.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            className={fieldClass}
            placeholder="Freelance project / Job opportunity / etc."
            aria-invalid={!!errors.subject}
          />
          {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-faint">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className={`${fieldClass} resize-none`}
            placeholder="Tell me a bit about the role or project..."
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-amber px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-bg transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="mt-4 rounded-md border border-teal/40 bg-teal-soft px-4 py-3 text-sm text-teal">
          {serverMessage}
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {serverMessage}
        </p>
      )}
    </form>
  );
}
