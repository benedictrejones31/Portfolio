import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-faint sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
