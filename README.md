# Desmond Didacus — Portfolio

A premium, production-ready personal portfolio built with React, TypeScript,
Tailwind CSS and Vite.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/` — deployable to Vercel, Netlify,
Cloudflare Pages, GitHub Pages, or any static host.

```bash
npm run preview   # preview the production build locally
```

## Where things live (edit these first)

- **Contact info, WhatsApp number, social links** → `src/data/config.ts`.
  The WhatsApp number is stored once here and every "Book me" / "Let's Work
  Together" / "Chat on WhatsApp" button reads from it — change the number in
  one place and it updates everywhere.
- **Projects** → `src/data/projects.ts`. Each project is a plain object —
  add, remove or edit projects here without touching any component.
- **Project screenshots** → drop images into `public/projects/` and set the
  `coverImage` field on the matching project (e.g. `/projects/ictresults.jpg`).
  Projects without a `coverImage` render a clean placeholder instead of a
  fake screenshot.
- **Profile photo** → replace the placeholder block in
  `src/components/About.tsx` with an `<img>` once you have a photo.
- **Contact form backend** → `src/components/Contact.tsx` currently shows a
  confirmation state on submit with no email delivery wired up. Connect a
  service (e.g. Formspree, Resend, or your own API route) inside the
  `handleSubmit` function.

## Structure

```
src/
  components/   Navbar, Hero, ProjectGrid, ProjectCard, ProjectModal,
                Services, Process, About, Experience, TechStack,
                FunnelSection, CTASection, Contact, Footer, WhatsAppButton
  data/         config.ts (contact/social/WhatsApp), projects.ts (portfolio data)
  index.css     Tailwind layers + base styles
  App.tsx       Page assembly
```

## Notes

- No fabricated statistics, testimonials or client logos are included —
  only what was provided as real project information.
- Respects `prefers-reduced-motion`.
- Project data, social links and contact details are all centralized and
  configurable, per the brief.
