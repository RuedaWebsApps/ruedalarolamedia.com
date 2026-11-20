# Rueda La Rola Media LLC — Static Edge Web Application (0-CPU Vercel)

Bilingual (`/` English default, `/es` Spanish) creative agency & vehicle wrap platform built with **React 19 + Vite 8 + Tailwind CSS 4 + TypeScript**.

## Features
- **22 Pre-rendered Static Routes (SSG):** Home (`/` & `/es`), Contact (`/contact` & `/contacto`), Blog (`/blog` & `/es/blog`), 4 Portfolio Case Studies (`/portfolio/*` & `/es/portfolio/*`), and 8 US/Texas Legal Compliance pages (`/privacy`, `/terms`, `/cookies`, `/accessibility` + Spanish equivalents).
- **Zero-CPU Contact Form:** Decoupled Web3Forms adapter (`src/adapters/contactAdapter.ts`) with honeypot (`website_hp`) and TCPA consent disclosure.
- **Classic SEO & AI Search (GEO/AEO):** Full JSON-LD (`ProfessionalService`), paired `hreflang`, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt` (AI crawlers enabled), and `llms.txt`.
- **A+ Security Headers:** Configured in `vercel.json` (HSTS, CSP, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, immutable asset caching).

## Scripts
```bash
npm install
npm run dev        # Local development server
npm run typecheck  # TypeScript check (tsc --noEmit)
npm run build      # Client build + SSR bundle + 22-route static HTML prerender
npm run preview    # Preview production build locally
```
