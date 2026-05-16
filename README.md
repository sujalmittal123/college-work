# JG University Landing Page

A modern, production-ready university landing page for **JG University** built with **Next.js App Router**, **Tailwind CSS**, and **framer-motion**. The experience is designed to feel premium, editorial, and globally competitive — inspired by top-tier university websites while staying grounded in the JG University brand, programs, and Ahmedabad campus context.

This project is intentionally crafted as a polished landing page rather than a generic template. It focuses on strong storytelling, admissions conversion, visual hierarchy, mobile-first responsiveness, and accessible interactions.

## Project Purpose

The goal of this build is to completely reimagine the JG University homepage as a world-class digital admissions and brand experience.

It highlights:

- JG University as a tech-driven institution in Ahmedabad, Gujarat
- Academic breadth across management, commerce, computing, engineering, law, and science
- Real-world, industry-aligned education
- Social proof, alumni outcomes, and partner ecosystem
- A clear admissions call-to-action for the 2026–27 intake

## Live Experience Overview

The homepage is composed of a full narrative flow:

1. **Sticky announcement + navbar** with scroll-aware styling and mobile drawer
2. **Hero section** with a cinematic split layout and strong calls to action
3. **Stats strip** with animated count-up metrics
4. **About section** describing the university’s mission and foundations
5. **Programs section** with animated category tabs and program cards
6. **Strengths section** with a bento-grid of differentiators
7. **Partners marquee** with an infinite scrolling ecosystem strip
8. **Testimonials carousel** for alumni stories and social proof
9. **Admissions CTA** with a bold conversion-focused banner
10. **Footer** with brand, navigation, programs, contact, and policy links
11. **Scroll-to-top button** for long-page usability

## Tech Stack

### Core

- **Next.js** `^16.2.6`
- **React** `^19.2.6`
- **React DOM** `^19.2.6`
- **TypeScript** `^5.8.3`
- **Tailwind CSS** `^4.3.0`

### Motion / UI Utilities

- **framer-motion** `^12.23.24` for entrance animations, transitions, mobile drawer motion, count-up behavior, marquee polish, and carousel interactions
- **lucide-react** `^1.16.0` for lightweight iconography

### Styling Tooling

- **postcss** `^8.5.14`
- **autoprefixer** `^10.5.0`
- **@tailwindcss/postcss** `^4.3.0`

### Fonts

- **Inter** loaded through `next/font/google`

## Design System

The visual language follows the brief’s premium university aesthetic.

### Color Palette

- **Primary / Navy:** `#0B1F3A`
- **Accent / Gold:** `#F5A623`
- **Secondary Accent / Teal:** `#00B8A9`
- **Background / Off-white:** `#F8F9FB`
- **Dark Section Background:** `#0F172A`
- **Text Primary:** `#1A1A2E`
- **Text Muted:** `#64748B`
- **White:** `#FFFFFF`

### Typography

- Headings use **Inter** with bold weight and tight tracking
- Body text is clean and highly readable
- Accent labels are styled as uppercase, small, and widely tracked

### Layout, Spacing, and Shape

- Large, generous vertical rhythm throughout
- Section padding is roomy and editorial
- Cards rely on **rounded-2xl** and **rounded-3xl** surfaces
- Shadows are soft and layered, typically with subtle border/ring support

### Visual Direction

- Navy-and-gold premium academic identity
- High-contrast hero with photographic campus imagery
- Soft surfaces for content cards and stats
- Strong conversion accents for admissions CTAs

## Implemented Sections and Features

### 1. Navbar

File: `components/Navbar.tsx`

Features:

- Sticky top navigation
- Transparent over the hero, then transitions to a white background with shadow on scroll
- JG badge logo + University wordmark
- Center navigation links:
  - Home
  - Programs
  - About
  - Campus
  - Admissions
  - Contact
- Gold **Apply Now** button
- Mobile hamburger menu with animated full-screen drawer
- Dismissible announcement bar:
  - `🎓 Admissions Open 2026-27 — Apply Before June 30th`

### 2. Hero Section

File: `components/HeroSection.tsx`

Features:

- Full-screen split hero with dark navy left side and campus photography on the right
- Animated text reveal and staggered entrance
- Gold pill badge for approval/establishment messaging
- Two primary CTAs:
  - Explore Programs
  - Take a Virtual Tour
- Social proof area with alumni count
- Floating info card with intake message and program count
- Framer Motion entrance transitions and floating card animation

### 3. Stats Bar

File: `components/StatsSection.tsx`

Features:

- Gold full-width strip
- Four key metrics:
  - 10,000+ Alumni Worldwide
  - 17+ Partner Colleges
  - 50+ Programs Offered
  - 60+ Years of Excellence
- Count-up animation when scrolled into view

### 4. About Section

File: `components/AboutSection.tsx`

Features:

- Mission-focused storytelling block
- Two-column composition with text and visual stack
- Four highlight bullets
- Campus imagery with floating info badges
- Anchored for campus/about navigation

### 5. Programs Section

File: `components/ProgramsSection.tsx`

Features:

- Tabbed academic categories:
  - Undergraduate
  - Postgraduate
  - Doctoral
  - Certificate
- Program cards with duration badges and hover lift
- AnimatePresence transitions between tabs
- Responsive card grid

### 6. Strengths Section

File: `components/StrengthsSection.tsx`

Features:

- Deep navy background for contrast
- Bento-style grid of six differentiators
- Highlights:
  - Experiential learning
  - Interdisciplinary approach
  - Whole brain pedagogy
  - Industry-expert faculty
  - State-of-the-art labs
  - Global opportunities

### 7. Partners Strip

File: `components/PartnersSection.tsx`

Features:

- Infinite marquee-style scroll of partner names
- Subtle pill styling and gold hover state
- Lightweight ecosystem credibility strip

### 8. Testimonials Section

File: `components/TestimonialsSection.tsx`

Features:

- Alumni story carousel
- Six testimonials from notable alumni and professionals
- Scroll-snap / auto-scrolling presentation
- Previous and next controls
- Pagination dots
- Star ratings and avatar treatment

### 9. CTA Section

File: `components/CTASection.tsx`

Features:

- Bold gold-to-amber conversion banner
- High-emphasis admissions message
- Apply Now and Download Brochure buttons
- Contact help line
- Decorative floating background particles

### 10. Footer

File: `components/Footer.tsx`

Features:

- Four-column desktop footer
- Brand summary and social links
- Quick links and program links
- Contact details
- Static map placeholder area
- Legal links in the bottom bar

### 11. Scroll-to-Top Button

File: `components/ScrollToTopButton.tsx`

Features:

- Appears after scrolling
- Fixed bottom-right positioning
- Gold circular button
- Improves long-page navigation

## Animations and Interactions

Implemented using **framer-motion** and lightweight CSS transitions.

- Section entrance animations with fade-up and stagger
- Navbar scroll state change
- Mobile menu open/close animation
- Hero headline reveal
- Count-up stats on intersection
- Tab transitions with AnimatePresence
- Hover lift on cards
- Button scale and press feedback
- Carousel controls and auto-scroll behavior
- Marquee animation for partner logos
- Scroll-to-top visibility logic

## File Structure

```text
app/
  layout.tsx
  globals.css
  page.tsx

components/
  AboutSection.tsx
  CTASection.tsx
  Footer.tsx
  HeroSection.tsx
  Navbar.tsx
  PartnersSection.tsx
  ProgramsSection.tsx
  ScrollToTopButton.tsx
  StatsSection.tsx
  StrengthsSection.tsx
  TestimonialsSection.tsx

public/
  brochure.pdf
  map-placeholder.svg

next.config.mjs
package.json
```

## Getting Started

### Prerequisites

- **Node.js 18+** recommended
- **npm** (included with Node.js)

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open the app at:

```text
http://localhost:3000
```

### Production Build

```bash
npm run build
```

### Production Start

```bash
npm run start
```

## Image Configuration

The project uses the Next.js `Image` component with remote campus imagery from Unsplash.

`next.config.mjs` is configured with:

- `images.remotePatterns` allowing `https://images.unsplash.com`

That means the external placeholder imagery used in the hero and content sections will work with Next Image optimization without extra changes.

If you replace the images with another host, update `next.config.mjs` accordingly.

## Customization Guide

### Update Content

The page is built from modular sections in `components/`.

Common places to edit:

- `components/Navbar.tsx` — navigation labels and CTA text
- `components/HeroSection.tsx` — headline, subheadline, and hero imagery
- `components/ProgramsSection.tsx` — program lists and categories
- `components/TestimonialsSection.tsx` — alumni quotes and names
- `components/Footer.tsx` — contact info and links

### Update Theme

Global theme values are centralized in the app styling layer.

To change the brand feel:

- Modify the navy/gold palette in the global styles
- Adjust rounded corners, shadows, and spacing scale
- Swap the accent colors for alternate institutional branding

### Update Images

- Replace Unsplash URLs in the relevant components
- Keep aspect ratios and `alt` text descriptive
- Ensure any new domain is added to `next.config.mjs`

### Update Documents

- `public/brochure.pdf` can be replaced with a real admissions brochure
- `public/map-placeholder.svg` can be replaced with a proper embed, screenshot, or custom map asset

## Accessibility Notes

This landing page is built with accessibility in mind:

- Semantic structure using `header`, `main`, `section`, and `footer`
- Keyboard-friendly links and buttons
- `aria-label` used for icon-only controls
- Strong color contrast between text and backgrounds
- Visible focus states inherited from browser/Tailwind defaults
- Smooth but non-essential motion that can be reduced at the OS/browser level

## Performance Notes

- Next.js App Router for efficient route rendering
- Static generation for the homepage
- `next/image` for optimized image delivery
- Minimal dependencies outside core animation and icon utilities
- Reusable section components keep the page easy to maintain
- CSS-based marquee avoids heavy third-party carousel packages

## Known Limitations

This implementation is a polished frontend landing page, not a full admissions system.

Current limitations:

- Admission forms are not wired to a backend
- The map area is a static placeholder
- Some visuals use placeholder imagery rather than institution-owned media
- Testimonials and partner logos are curated frontend content
- Carousel behavior is presentational rather than a data-driven CMS feed

## Future Improvements

Potential next steps:

- Connect application forms to a CRM or admissions backend
- Add real campus photography and video tour assets
- Replace static brochure/map placeholders with live assets
- Add CMS support for programs, testimonials, and announcements
- Create route-level pages for each program and department
- Add analytics, event tracking, and conversion funnels
- Support multilingual content for broader reach

## Deployment

This project is compatible with any Next.js-friendly host.

### Recommended: Vercel

Vercel is the easiest deployment path for Next.js App Router projects.

Typical workflow:

1. Push the repository to GitHub
2. Import the repo into Vercel
3. Let Vercel detect the Next.js build settings automatically
4. Deploy the production build

### Other Compatible Hosts

- Netlify
- Cloudflare Pages with Next support
- Self-hosted Node.js environments

Use the following production commands where needed:

```bash
npm run build
npm run start
```

## Git Notes

- `.worktrees/` is ignored to prevent accidental local worktree metadata from being tracked
- The repository is intended to stay clean and source-only

## License

No explicit license has been added yet. If this project will be shared publicly, add an appropriate license file before release.
