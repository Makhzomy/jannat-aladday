# Jannat Al Adday General Trading — Website

A small, bilingual (Arabic / English) brochure site for a stationery wholesaler in Basra, Iraq. Next.js App Router, static export, no backend.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- `output: "export"` — builds to a fully static `out/` folder that can be hosted anywhere (Vercel, Nginx, S3, GitHub Pages, ...)
- Self-hosted IBM Plex Sans / IBM Plex Sans Arabic via `next/font/local` — no external font requests
- No CMS, no database, no client-side JS framework beyond what Next.js itself ships

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/ar` (the primary locale). Visit `/en` for English.

## Building the static export

```bash
npm run build
```

This produces a static site in `out/`. Deploy that folder's contents to any static host. On Vercel, just connect the repo — the `output: "export"` config is picked up automatically.

## Where to edit copy

All page copy lives in two typed content files, checked against the same interface so the two languages can't structurally drift apart:

- `content/ar.ts` — Arabic copy (primary)
- `content/en.ts` — English copy
- `content/types.ts` — the shared shape both files must satisfy

Editing a heading, paragraph, category description, or nav label is just editing a string in one (or both) of those two files. No JSX changes needed for copy edits.

Contact facts (phone numbers, email, map link, geo coordinates) are centralized in `lib/site.ts`, not duplicated per locale.

**Business hours** are intentionally left out of the Contact page — see the `TODO` comment in `app/[locale]/contact/page.tsx`. Add them to `content/ar.ts` / `content/en.ts` and render them once the client supplies real hours.

## Swapping the logo files

The logos were prepared from the client's source lockups (`assets-source/`) — background removed, cropped, and exported at 1×/2× PNG + WebP:

- `public/logo/logo-ar@1x.png` / `@2x.png` / `.webp` — Arabic lockup (used on `/ar`)
- `public/logo/logo-en@1x.png` / `@2x.png` / `.webp` — English lockup (used on `/en`)
- `public/logo/shield.png` / `.webp` — shield-only mark (footer, watermarks)
- `app/favicon.ico`, `app/apple-icon.png`, `app/opengraph-image.png` — generated from the shield mark

To swap in updated artwork, replace these files keeping the same names and aspect ratios, or re-run the export scripts in `scripts/` (`trim_logo.py`, `crop_shield.py`) against new source files in `assets-source/` if you need to regenerate transparency-trimmed versions from scratch. The scripts need Python with `Pillow`, `numpy`, and `scipy` installed.

`components/Header.tsx` maps locale → logo file if you ever need to point at different filenames.

## Design system

Palette, type scale, and the signature "globe grid" motif (extracted from the logo's shield) are defined as Tailwind v4 theme tokens in `app/globals.css` and as components in `components/motifs/`. See that file's `@theme` block for the five brand colors (`ink`, `steel`, `haze`, `paper`, `date`) and heading size tokens.
