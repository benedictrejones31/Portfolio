import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Benedict Rejones — AI/ML Engineer",
  description:
    "AI/ML Engineer specializing in computer vision, deep learning pipelines, and applied model deployment. Portfolio of Benedict Rejones.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-body bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
