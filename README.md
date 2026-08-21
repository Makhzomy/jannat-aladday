# Jannat Al Adday General Trading — Website

A small, bilingual (Arabic / English) brochure site for a stationery wholesaler in Basra, Iraq, plus a password-protected admin dashboard for uploading product photos. Next.js App Router, deployed as a standard Vercel app (not a static export, since uploads need a backend).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Vercel Blob for uploaded product photos and the item catalog (`data/items.json`, stored as a Blob file — no separate database)
- Self-hosted IBM Plex Sans / IBM Plex Sans Arabic via `next/font/local` — no external font requests
- No CMS, no traditional database — a single admin dashboard behind a password, backed by Blob storage

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/ar` (the primary locale). Visit `/en` for English.

The public pages (home, services, gallery, contact) work without any env vars — the item catalog just renders empty until Blob is configured. The `/admin` dashboard needs env vars; see below.

## Admin dashboard

`/admin` — upload product photos with an English + Arabic name (description optional), mark a photo "featured" to show it on the homepage (first 6 featured items), or delete/unfeature existing ones. Everything else — the full catalog — shows on `/[locale]/gallery`.

Copy `.env.local.example` to `.env.local` and fill in:

- `ADMIN_PASSWORD` — the dashboard password
- `ADMIN_SESSION_SECRET` — random string signing the login cookie (generate with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)
- `BLOB_READ_WRITE_TOKEN` — auto-injected by Vercel once a Blob store is linked to the project; for local dev, run `vercel link` then `vercel env pull .env.local` after the store exists

Without `BLOB_READ_WRITE_TOKEN`, login/logout and the public pages still work, but uploads fail with a clear on-screen error rather than crashing.

## Deploying

This is a standard Next.js app on Vercel (import the repo, no special config needed). It is **not** a static export — the admin dashboard and photo catalog need Vercel's server runtime plus a Blob store, so it can't be hosted as plain static files anymore.

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
