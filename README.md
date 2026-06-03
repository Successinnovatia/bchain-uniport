# Blockchain Uniport Website

Modern one-page website for **Blockchain Uniport** (University of Port Harcourt) — built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Run production server    |
| `npm run lint`  | Run ESLint               |

## Edit Content & Branding

| What to change        | File                          |
| --------------------- | ----------------------------- |
| Mission & vision text | `data/site.ts`                |
| Brand colors          | `data/site.ts` → `BRAND_COLORS` |
| Programs, events, etc.| `data/site.ts`                |
| Logo                  | `public/images/logo.png`      |
| Hero image            | `public/images/mission-card.png` |
| Global CSS variables  | `app/globals.css`             |

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Landing page (all sections)
  globals.css         # Theme variables & utilities
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  VisionMission.tsx
  Programs.tsx
  Resources.tsx
  Events.tsx
  CommunityPartners.tsx
  ContactForm.tsx
  Footer.tsx
  SectionHeading.tsx
  Reveal.tsx
data/
  site.ts             # All site content & constants
hooks/
  useActiveSection.ts # Active nav link on scroll
public/
  images/
    logo.png
    mission-card.png
```

## Sections

1. Navbar (sticky, mobile menu, theme toggle)
2. Hero
3. About
4. Vision & Mission
5. Programs
6. Resources
7. Events
8. Community & Partners
9. Contact / Join Form
10. Footer
