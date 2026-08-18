# Al-Fky Center — مركز الفقي

> Bilingual (Arabic 🇪🇬 / English 🇬🇧) smartphone repair workshop website for **Mahmoud Elfky** (محمود الفقي), a Smart Device Maintenance Engineer specializing in iPhone repairs.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev        # → http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

> **Note:** Node.js must be in PATH. If freshly installed, you may need:
> `$env:PATH = "C:\Program Files\nodejs;" + $env:PATH` before running npm commands.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | Next.js (App Router) | 15.x |
| **Language** | TypeScript | 5.x |
| **React** | React | 19.x |
| **i18n** | next-intl | 3.x |
| **Animations** | framer-motion | 11.x |
| **Icons** | lucide-react | 0.468+ |
| **Styling** | Vanilla CSS + CSS Modules | — |
| **Font (EN)** | Inter (Google Fonts via next/font) | — |
| **Font (AR)** | Noto Kufi Arabic (Google Fonts via next/font) | — |

---

## Business Context & Contact Info

| Field | Value |
|---|---|
| **Shop Name (AR)** | مركز الفقي (Al-Fky Center) |
| **Shop Name (EN)** | Al-Fky Center |
| **Owner** | Mahmoud Elfky / محمود الفقي |
| **Title** | Smart Device Maintenance Engineer / مهندس صيانة أجهزة ذكية |
| **Specialty** | Repairing all smartphone malfunctions, especially iPhones of all versions |
| **Phone Number** | `010004442488` |
| **WhatsApp** | `+2010004442488` (https://wa.me/2010004442488) |
| **Facebook** | https://www.facebook.com/mahmoud.elfeky.779 |
| **Working Hours** | Daily from 1:00 PM to 12:00 Midnight (يومياً من ١:٠٠ م حتى ١٢:٠٠ منتصف الليل) |
| **Address (AR)** | ش أحمد حسن، وراق العرب، الوراق، قسم الوراق، محافظة الجيزة |
| **Address (EN)** | Ahmed Hassan St., Al Warraq, Al Warraq District, Giza Governorate |
| **Google Maps** | https://maps.app.goo.gl/CPBq9qsUmzgoJRjs7 |
| **Coordinates** | 30.11806° N, 31.18417° E |
| **Domain (planned)** | elfky.com |

---

## Brand Assets

| Asset | Path | Description |
|---|---|---|
| **Logo** | `/images/logo.jpg` | Illustrated mascot logo (technician with tools & "ALFKY MOBILE PHONE REPAIR") |
| **Owner Portrait** | `/images/mahmoud-elfky.jpg` | High-quality portrait photo of Engineer Mahmoud Elfky |

---

## Project Structure

```
elfky/
├── package.json                          # Dependencies & scripts
├── tsconfig.json                         # TypeScript config (path alias: @/* → src/*)
├── next.config.ts                        # Next.js config + next-intl plugin
├── eslint.config.mjs                     # ESLint config (next/core-web-vitals)
│
├── public/                               # Static assets
│   └── images/
│       ├── logo.jpg                      # Shop logo
│       └── mahmoud-elfky.jpg             # Portrait of Mahmoud Elfky
│
└── src/
    ├── middleware.ts                      # Locale detection & redirect middleware
    │
    ├── i18n/
    │   ├── routing.ts                    # Locale config: ['ar', 'en'], default: 'ar'
    │   ├── request.ts                    # Server-side request config for next-intl
    │   └── navigation.ts                 # Locale-aware Link, useRouter, usePathname
    │
    ├── messages/
    │   ├── en.json                       # English translations (all pages & components)
    │   └── ar.json                       # Arabic translations (all pages & components)
    │
    ├── app/
    │   ├── globals.css                   # Design system: tokens, reset, utilities
    │   ├── layout.tsx                    # Root layout (minimal, renders children)
    │   ├── sitemap.ts                    # Dynamic sitemap for all locales
    │   ├── robots.ts                     # Robots.txt config
    │   │
    │   └── [locale]/                     # Dynamic locale segment (ar | en)
    │       ├── layout.tsx                # Locale layout: fonts, dir, metadata, providers
    │       ├── not-found.tsx             # 404 page
    │       │
    │       ├── page.tsx                  # HOME PAGE
    │       ├── Home.module.css
    │       │
    │       ├── about/
    │       │   ├── page.tsx              # ABOUT PAGE
    │       │   └── About.module.css
    │       │
    │       ├── services/
    │       │   ├── page.tsx              # SERVICES PAGE
    │       │   └── Services.module.css
    │       │
    │       └── contact/
    │           ├── page.tsx              # CONTACT PAGE
    │           └── Contact.module.css
    │
    └── components/
        ├── Navbar/
        │   ├── Navbar.tsx                # Sticky navbar, logo, quick WhatsApp, mobile menu
        │   └── Navbar.module.css
        │
        ├── Footer/
        │   ├── Footer.tsx                # Footer with logo, phone, WhatsApp, Facebook, map
        │   └── Footer.module.css
        │
        ├── LanguageSwitcher/
        │   ├── LanguageSwitcher.tsx       # AR ↔ EN toggle button
        │   └── LanguageSwitcher.module.css
        │
        ├── FloatingWhatsApp/
        │   ├── FloatingWhatsApp.tsx       # Floating WhatsApp & Call speed-dial button with pulse ring
        │   └── FloatingWhatsApp.module.css
        │
        ├── AnimatedSection/
        │   └── AnimatedSection.tsx        # Scroll-triggered fade-in wrapper (framer-motion)
        │
        ├── ServiceCard/
        │   ├── ServiceCard.tsx            # Glassmorphism card with icon, title, description
        │   └── ServiceCard.module.css
        │
        ├── SectionTitle/
        │   ├── SectionTitle.tsx           # Section heading with gradient accent underline
        │   └── SectionTitle.module.css
        │
        └── JsonLd/
            └── JsonLd.tsx                 # JSON-LD structured data (LocalBusiness schema)
```

---

## Architecture Overview

### Routing & i18n

The app uses **next-intl** with the App Router `[locale]` dynamic segment pattern.

- **Supported Locales:** `ar` (Arabic, default), `en` (English)
- **Locale Prefix:** `always` — every URL starts with `/ar` or `/en`
- **Default Locale:** `ar` — root `/` redirects to `/ar`
- **RTL/LTR:** Set dynamically on `<html dir="rtl|ltr">` in `src/app/[locale]/layout.tsx`

**Key files:**
- `src/i18n/routing.ts` — defines locales, default, prefix strategy
- `src/i18n/request.ts` — server-side locale resolution
- `src/i18n/navigation.ts` — locale-aware `Link`, `useRouter`, `usePathname` (use these instead of Next.js's)
- `src/middleware.ts` — auto-redirects to correct locale based on `Accept-Language`

**Translation files:** `src/messages/en.json` and `src/messages/ar.json`

Translation namespaces:
- `common` — shared strings (brand, nav, footer, CTAs)
- `home` — home page content (hero, stats, featured services, why us, CTA)
- `about` — about page content (bio, skills, experience timeline)
- `services` — services page content (10 repair service items)
- `contact` — contact page content (info cards, map, WhatsApp form)

Each namespace also has a `meta` sub-key with `title` and `description` for SEO.

### Rendering Strategy

All pages use **Static Site Generation (SSG)** via `generateStaticParams()`:
- Pages are pre-rendered at build time for both `ar` and `en` locales
- 13 total static pages generated (including sitemap, robots, 404)
- All page components are marked `'use client'` for framer-motion animations

### Styling Architecture

- **Design Tokens:** All colors, spacing, typography, shadows, transitions defined as CSS custom properties in `src/app/globals.css`
- **CSS Modules:** Each component/page has a co-located `.module.css` file for scoped styles
- **Utility Classes:** Global `.container`, `.section`, `.glass-card`, `.btn-primary`, `.btn-outline`, `.gradient-text` available everywhere
- **RTL Support:** Uses CSS logical properties (`inset-inline-start`, `margin-inline`, `padding-inline-end`, etc.) so layouts automatically mirror for Arabic
- **Responsive:** 3 breakpoints — mobile (<768px), tablet (<1024px), desktop

### Fonts

Loaded via `next/font/google` in `src/app/[locale]/layout.tsx`:
- **English:** Inter (`--font-inter`)
- **Arabic:** Noto Kufi Arabic (`--font-noto-kufi`)

Applied via `[dir="ltr"]` / `[dir="rtl"]` selectors in `globals.css`.

---

## Pages Detail

### Home (`/[locale]`)
**File:** `src/app/[locale]/page.tsx`

Sections (top to bottom):
1. **Hero** — Full-viewport with animated gradient orbs, grid background, badge ("iPhone Specialist"), greeting, title (gradient text), subtitle, description, 2 CTA buttons (Services, Contact)
2. **Stats** — 4 animated counters (years experience: 6+, devices repaired: 3000+, happy customers: 2500+, iPhone models: 15+)
3. **Featured Services** — 4 `ServiceCard` components showing top services (iPhone Screen, Battery, Motherboard, Water Damage)
4. **Why Choose Us** — 4 trust-signal cards (Certified, Fast, Warranty, Quality Parts)
5. **CTA Banner** — "Need Your Device Fixed?" with gradient background overlay and contact button

### About (`/[locale]/about`)
**File:** `src/app/[locale]/about/page.tsx`

Sections:
1. **Hero** — Section title with gradient orb background
2. **Bio** — 2-column grid:
   - **Left:** Real portrait photo of Mahmoud Elfky (`/images/mahmoud-elfky.jpg`) with floating "iPhone Expert" badge and ambient glow
   - **Right:** Name, role, description paragraphs, and direct WhatsApp, Phone (`010004442488`), and Facebook buttons
3. **Skills** — 6 skill bars with percentages (iPhone: 95%, Micro-Soldering: 90%, Software: 85%, Android: 80%, Data Recovery: 75%, Motherboard: 88%)
4. **Experience Timeline** — Vertical timeline with 4 milestones (2018, 2020, 2022, 2024)

### Services (`/[locale]/services`)
**File:** `src/app/[locale]/services/page.tsx`

Sections:
1. **Hero** — Section title
2. **Services Grid** — 10 `ServiceCard` components in a 3-column grid:
   - iPhone Screen Repair, iPhone Battery Replacement, Motherboard Repair, Water Damage Recovery, Software & iOS Recovery, Android Phone Repair, Tablet & iPad Repair, Data Recovery, Phone Unlocking, Accessories & Parts

### Contact (`/[locale]/contact`)
**File:** `src/app/[locale]/contact/page.tsx`

Sections:
1. **Hero** — Section title
2. **Contact Info Cards** — 5 interactive cards:
   - **Phone** (`010004442488`) — direct click-to-call
   - **WhatsApp** (`010004442488`) — direct click-to-chat
   - **Facebook** (`Mahmoud Elfky`) — link to profile
   - **Address** (Warraq, Giza) — opens Google Maps
   - **Working Hours** (Daily 1:00 PM – 12:00 Midnight)
3. **Map + Form Grid** — 2-column layout:
   - **Left:** Google Maps embed iframe (coordinates: 30.11806, 31.18417 — Al Warraq, Giza) with a direct link button
   - **Right:** Contact form connected directly to WhatsApp (pre-fills message with name, phone, and issue details)

---

## Components Detail

### `Navbar` (client component)
- Fixed position, transparent by default, glassmorphism on scroll
- Contains: circular logo (`/images/logo.jpg`), brand name, nav links with active dot indicator, quick WhatsApp button (`010004442488`), language switcher
- Mobile: hamburger menu → slide-in panel with mobile call/chat button and language switcher

### `Footer` (server component)
- 3-column grid: brand + description + social buttons (Facebook & WhatsApp) | quick links | clickable contact info (phone, address, hours)
- Gradient top border accent (3px)
- Copyright with dynamic year

### `FloatingWhatsApp` (client component)
- Fixed at the bottom corner with glowing pulse animation
- Includes quick-call (`tel:010004442488`) and WhatsApp button (`https://wa.me/2010004442488`)

### `LanguageSwitcher` (client component)
- Button with flag emoji (🇬🇧/🇪🇬) and label
- Uses `useRouter().replace(pathname, { locale: nextLocale })` to switch locale while preserving current path

### `AnimatedSection` (client component)
- Wraps children in a `motion.div` with scroll-triggered animation
- Props: `direction` (up/down/left/right), `delay`, `duration`, `className`

### `ServiceCard` (server component)
- Glassmorphism card: glass background, border, backdrop-filter
- Props: `icon` (ReactNode), `title`, `description`
- Hover: translateY(-8px), glow border, icon scale+rotate, gradient bottom bar scales in

### `SectionTitle` (server component)
- Props: `title`, `subtitle`, `align` ('center' | 'start')
- Gradient accent bar under the title

### `JsonLd` (server component)
- Outputs `<script type="application/ld+json">` with `LocalBusiness` schema
- Includes: name, telephone (`+2010004442488`), Facebook profile, address, geo coordinates, opening hours, founder (Person) with portrait photo, services catalog

---

## Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-bg-primary` | `#0A0F1C` | Main page background |
| `--color-bg-secondary` | `#141B2D` | Card backgrounds, alternate sections |
| `--color-bg-tertiary` | `#1A2332` | Tertiary surfaces |
| `--color-accent` | `#00D4FF` | Electric cyan — primary accent |
| `--color-accent-alt` | `#7C3AED` | Violet — secondary accent |
| `--color-accent-gradient` | `135deg, #00D4FF → #7C3AED` | CTAs, highlights, gradient text |
| `--color-text-primary` | `#FFFFFF` | Headings, primary text |
| `--color-text-secondary` | `#94A3B8` | Body text, descriptions |
| `--color-text-muted` | `#64748B` | Labels, hints |
| `--color-border` | `rgba(255,255,255,0.08)` | Card/component borders |
| `--color-glass` | `rgba(255,255,255,0.04)` | Glassmorphism backgrounds |

---

## How to Add / Modify Content

### Add a new translation string
1. Add the key to both `src/messages/en.json` and `src/messages/ar.json`
2. Use it in a component via `const t = useTranslations('namespace'); t('key')`

### Add a new page
1. Create `src/app/[locale]/pagename/page.tsx` and `PageName.module.css`
2. Add translations under a new namespace in both JSON files
3. Add nav link in `src/components/Navbar/Navbar.tsx` → `navLinks` array
4. Add route to `src/app/sitemap.ts` → `routes` array

---

## Build Output

```
Route (app)                          Size      First Load JS
○ /_not-found                        995 B     104 kB
● /[locale]                          7.75 kB   166 kB
● /[locale]/about                    2.68 kB   157 kB
● /[locale]/contact                  2.34 kB   157 kB
● /[locale]/services                 2.25 kB   157 kB
○ /robots.txt                        130 B     103 kB
○ /sitemap.xml                       130 B     103 kB
```
