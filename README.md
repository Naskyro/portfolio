# Nathan Reyna — Portfolio

Personal portfolio site built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**. Single-page layout with sections for About, Experience, Projects, Leadership, and Contact, plus a downloadable résumé.

## Run it locally

```bash
npm install    # first time only
npm run dev    # starts the dev server
```

Open http://localhost:3000 — edits hot-reload automatically.

To test the production build:

```bash
npm run build
npm start
```

## Editing the content

**Everything you need to change is in one file:**

```
src/content/portfolio.ts
```

Your name, tagline, about paragraphs, jobs, projects, leadership roles, skills, email, and social links all live in that single object. It's typed (`as const`), so if you mistype a field name TypeScript will flag it. Text marked `[like this]` is a placeholder for you to fill in.

### Common edits

| What | Where |
|---|---|
| Résumé PDF | Replace the file `public/resume.pdf` (keep the name, or update `resumeFile` in `portfolio.ts`) |
| Your headshot | Drop a photo in `public/images/`, set `headshot` in `portfolio.ts` |
| Project cover image | Drop an image in `public/images/`, set the project's `image` field |
| Project demo videos | Drop `.mp4` files in `public/videos/`, add their paths to the project's `videos` list (YouTube links also work) |
| Project screenshots | Drop images in `public/images/`, add their paths to the project's `screenshots` list |
| LinkedIn / GitHub | `links` in `portfolio.ts` |
| Add a job or project | Copy an existing entry in `experience` / `projects` and edit it |
| Accent color | `--color-ut` at the top of `src/app/globals.css` (currently UT burnt orange) |

**Tip on videos:** keep `.mp4` files reasonably small (under ~50 MB) since they're
uploaded with the site. For big walkthroughs, upload to YouTube as *unlisted*
and paste the link in `video` instead.

### Site structure (for reference)

```
src/
  content/portfolio.ts   <- ALL site text lives here
  app/page.tsx           <- assembles the sections
  app/layout.tsx         <- page metadata + font
  app/globals.css        <- theme colors & fonts
  components/            <- one file per section (Navbar, Hero, About, ...)
public/
  resume.pdf             <- your downloadable resume
  images/                <- headshot & project images
scripts/extract-resume.mjs  <- one-off helper I used to read your PDF; safe to delete
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Next.js — just click **Deploy**. No config needed.

Every push to `main` afterwards redeploys automatically.
