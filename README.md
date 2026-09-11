# Portfolio

A personal portfolio website for a backend software engineer.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · dark theme · static rendering

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add your content

All personal content lives in a single file: **`src/data/portfolio.ts`**.

## Project structure

```
src/
  app/            # layout, page, global styles, favicon
  components/     # one component per section (hero, about, skills, ...)
  data/
    portfolio.ts  # all personal content 
```

## Deploy (GitHub + Vercel)

1. Create a repository on GitHub and push this project:

   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git add .
   git commit -m "Initial portfolio"
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new), import the GitHub repository
   and click **Deploy**. Vercel auto-detects Next.js — no configuration needed.

Every push to `main` redeploys the site automatically.
