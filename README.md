# charlesoconnor.ai

Personal landing page for Charles O'Connor.
Built with Next.js (App Router), TypeScript, Tailwind CSS and shadcn/ui.
It builds to plain static files, so it hosts for free.

## Edit the content

Names, email, and the copy for every section live in one file:

    src/lib/site.ts

Colors (navy and coral, light and dark) live at the top of:

    src/app/globals.css

Page sections are components in `src/components/site/`.
The shadcn/ui components (Button, Card, Badge) are in `src/components/ui/`.
`components.json` is configured, so `npx shadcn@latest add <component>` works.

## Run it on your computer

Requires Node 20 or newer.

    npm install
    npm run dev        # http://localhost:3000
    npm run build      # writes the finished site to the "out" folder

## Deploy on Netlify

`netlify.toml` already sets the build command (`npm run build`) and the
publish folder (`out`). Import this repository in Netlify
(Add new project, Import an existing project, GitHub) and every push to
the main branch publishes automatically.

## Search and AI visibility

- Title, description, canonical link and social preview: `src/app/layout.tsx`
- Structured data (Person, Organization, WebSite): `src/components/site/json-ld.tsx`
- `public/robots.txt` and `public/sitemap.xml`
