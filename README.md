# Benedict Rejones — AI/ML Engineer Portfolio

A production-ready personal portfolio for **W. Benedict Rejones**, an AI/ML Engineer specializing in computer vision, hybrid CNN-ViT architectures, and retrieval-augmented generation systems.

## Overview

Built with **Next.js (App Router)** and **Tailwind CSS**, this is a fully responsive, dark-mode-first site designed around the vocabulary of applied machine learning: an "About" section styled as a real ML **model card**, a hero portrait annotated like a computer-vision **object detection** frame, and project cards laid out like dataset entries — all grounded in the candidate's actual CV/RAG project work rather than generic template copy.

**Sections:** Hero · About (Model Card) · Featured Work (3 flagship projects + 4 additional) · Experience (Education & Certifications) · Skills · Achievements · Contact

**Design system:**
- Palette: near-black base (`#0A0C10`), slate surfaces, amber accent (`#F2B84B`) for primary emphasis, teal accent (`#4FD1C5`) for secondary/data labels
- Typography: system sans-serif for display headings, Inter-first stack for body copy, monospace stack for labels/metadata (mirrors code/terminal aesthetics relevant to an ML engineer)
- Signature element: the hero photo carries a live "object detection" bounding-box overlay with a confidence score and scanning animation — a direct nod to the candidate's computer-vision project work

No external font fetching, no environment variables, and no third-party API keys are required — everything renders using safe system font fallbacks and static local content.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/) (custom design tokens, dark mode)
- No external services, databases, or API keys required

## Project Structure

```
benedict-rejones-portfolio/
├── app/
│   ├── layout.tsx        # Root layout, metadata, global font/body setup
│   ├── page.tsx           # Assembles all sections
│   └── globals.css        # Global styles, custom utility classes
├── components/
│   ├── Nav.tsx             # Sticky nav bar
│   ├── Hero.tsx            # Hero with annotated portrait
│   ├── About.tsx           # "Model card" about section
│   ├── Projects.tsx        # Featured + secondary project grid
│   ├── Experience.tsx      # Education + certifications
│   ├── Skills.tsx          # Skill stack grouped by category
│   ├── Achievements.tsx    # Hackathons, LeetCode, etc.
│   ├── Contact.tsx         # Contact links (email, GitHub, LinkedIn, LeetCode)
│   └── Footer.tsx
├── lib/
│   └── data.ts             # All portfolio content (single source of truth)
├── public/
│   └── profile.jpg         # Profile portrait used in the hero section
├── tailwind.config.ts       # Design tokens (colors, fonts, keyframes)
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Local Setup

Requires Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Contact form (optional, for real email delivery)

The Contact section posts to a server-side API route (`app/api/contact/route.ts`) that sends email via [Resend](https://resend.com). Credentials are read from environment variables and are **never exposed to the frontend**.

1. Copy `.env.example` to `.env.local`.
2. Sign up at resend.com and create an API key.
3. Fill in `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` in `.env.local`.

Without these variables set, the form still validates and submits, but returns a friendly "not configured yet" message instead of sending — the rest of the site works fully either way.

### Production build

```bash
npm run build
npm run start
```

## Editing Content

All resume-derived content (name, projects, skills, certifications, achievements, contact links) lives in a single file: `lib/data.ts`. Update that file to change any text on the site — no need to touch component markup for routine content edits.

To swap the profile photo, replace `public/profile.jpg` with a new image (any name works, just update the `src` in `components/Hero.tsx` if you rename it).
