# Blockchain Uniport Website

Multi-page community website for **Blockchain Uniport** (University of Port Harcourt) — built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Description |
| ----- | ----------- |
| `/` | Home — hero, community preview, stats, testimonials, next workshop |
| `/about` | Community story, vision & mission, founder profile, values, stats |
| `/workshops` | Upcoming and past workshops/events with images |
| `/community` | Testimonials, photo gallery, partners, social links |
| `/contact` | Join form and contact details |

## Edit Content & Branding

All content lives in [`data/site.ts`](data/site.ts):

| Content | Constant |
| ------- | -------- |
| Mission & vision | `MISSION_STATEMENT`, `VISION_STATEMENT` |
| Founder details | `FOUNDER` |
| Community story & stats | `COMMUNITY` |
| Workshops & events | `WORKSHOPS` |
| Testimonials | `TESTIMONIALS` |
| Gallery photos | `GALLERY` |
| Brand colors | `BRAND_COLORS` |
| Navigation | `NAV_LINKS` |

## Image Assets

Replace placeholder files in `public/images/`:

```
public/images/
  logo.png
  mission-card.png
  founder/placeholder.svg      → swap for founder photo
  testimonials/member-*.svg    → member headshots
  workshops/workshop-*.svg     → workshop cover images
  gallery/photo-*.svg          → event/community photos
```

After replacing images, update the matching paths in `data/site.ts`.

## Project Structure

```
app/
  layout.tsx
  (site)/
    layout.tsx          # Navbar, Footer, Telegram CTA
    page.tsx            # Home
    about/page.tsx
    workshops/page.tsx
    community/page.tsx
    contact/page.tsx
components/             # Reusable UI components
data/
  site.ts               # All site content
  metadata.ts           # Page title helper
public/images/          # Logos, photos, placeholders
```

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |
