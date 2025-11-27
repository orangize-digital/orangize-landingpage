# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

German digital marketing agency (Orangize Digital) landing page built with Nuxt 3, TailwindCSS, and DaisyUI. Focuses on Google Ads services, website creation, and includes a blog system.

## Commands

```bash
npm run dev      # Start Nuxt development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run generate # Generate static site
```

## Tech Stack

- Nuxt 3 with Vue 3 Composition API and `<script setup>` syntax
- TailwindCSS + DaisyUI (primary color: `#f60` orange)
- Auto-imported components and composables (useHead, useRoute, etc.)
- AOS (Animate On Scroll) for animations
- Hosted on Netlify

## Architecture

### File-Based Routing

Nuxt uses file-based routing. Pages are in the `pages/` directory:
- `pages/index.vue` → `/`
- `pages/google-ads.vue` → `/google-ads`
- `pages/website-erstellen-lassen.vue` → `/website-erstellen-lassen`
- `pages/blog/index.vue` → `/blog`
- `pages/blog/[slug].vue` → `/blog/:slug`

### Blog System

Blog posts use a dual-file system:

1. **`blog-meta.js`** - Minimal metadata (slug, title, date) used by sitemap generator
2. **`blog-registry.js`** - Full post data + Vue component mapping

Adding a new blog post:
1. Add metadata to `blog-meta.js`
2. Create Vue component in `components/blog-posts/`
3. Register component in `blogComponents` object in `blog-registry.js`
4. Add full post data in `getAllPosts()` function

### Key Pages

- German URLs: `/website-erstellen-lassen`, `/google-ads`
- Blog URLs: `/blog/:slug` pattern
- City-specific landing pages for regional SEO (Herford, Minden, Bünde, Bielefeld, Bad Oeynhausen, Porta Westfalica)
- Industry pages: `/google-ads-branchen`, `/google-ads-handwerker`

### Component Patterns

- Components are auto-imported from `components/` directory
- **Navigation**: Uses reactive `isScrolled` state for scroll-based styling
- **Hero Sections**: Background images with overlay, AOS animations
- **Meta Tags**: Use Nuxt's auto-imported `useHead` composable (NOT @vueuse/head)
- **Forms**: ContactForm, HeroContactForm, NewsletterForm components

### File Structure

```
├── pages/              # File-based routing (page components)
├── components/
│   ├── blog-posts/     # Individual blog post Vue components
│   ├── google-ads/     # Service-specific components
│   └── webseite/       # Website service components
├── layouts/            # Nuxt layouts
├── server/             # Nitro server API routes
├── assets/             # CSS, images, fonts
├── public/             # Static files (favicon, robots.txt)
├── blog-meta.js        # Blog metadata for sitemap
├── blog-registry.js    # Full blog data + component mapping
├── nuxt.config.ts      # Nuxt configuration
└── tailwind.config.js  # Tailwind + DaisyUI config
```

## Styling

- DaisyUI themes with custom orange primary color (`#f60`) in `tailwind.config.js`
- **Important**: Use explicit colors like `bg-[#f60]` and `text-[#f60]` for consistent theming
- Global styles in `assets/css/app.css`
- Component-specific styles use Tailwind classes
- Roboto font family loaded via @font-face

## Build Notes

- Static assets (robots.txt, _redirects, favicon.png) in `public/`
- Server API routes in `server/api/`
- No ESLint or testing framework currently configured
