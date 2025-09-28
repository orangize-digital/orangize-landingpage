# Orangize Digital Landing Page - AI Coding Instructions

## Project Overview

This is a German digital marketing agency landing page built with Vue 3, Vite, TailwindCSS, and DaisyUI. The site focuses on Google Ads services, website creation, and includes a content-managed blog system.

## Architecture & Key Patterns

### Tech Stack

- **Vue 3** with Composition API and `<script setup>` syntax
- **Vite** for development and building (`npm run dev`, `npm run build`)
- **TailwindCSS + DaisyUI** for styling (primary color: `#f60` orange)
- **Vue Router 4** with history mode
- **AOS** (Animate On Scroll) for animations
- **@vueuse/head** for dynamic meta tag management

### Build & Deploy Workflow

- Build command: `vite build && node generate-sitemap.mjs`
- Sitemap is auto-generated from `src/blog-meta.js` metadata
- Static assets in `public/` (includes `_redirects` for Netlify)

## Component Architecture

### File Organization

```
src/
├── views/           # Page-level components (Home, GoogleAds, WebsiteErstellen)
├── components/      # Reusable UI components
│   ├── blog-posts/  # Individual blog post components
│   ├── google-ads/  # Service-specific navigation
│   └── webseite/    # Website creation specific components
└── assets/images/   # All images organized by type
```

### Blog System Architecture

**Critical Pattern**: Blog posts use a dual-file system:

1. **`src/blog-meta.js`** - Minimal metadata (slug, title, date) for sitemap generation
2. **`src/blog-registry.js`** - Full post data + Vue component mapping

```javascript
// Adding a new blog post requires:
// 1. Add metadata to blog-meta.js
// 2. Create Vue component in components/blog-posts/
// 3. Register component in blogComponents object in blog-registry.js
// 4. Add full post data in getAllPosts() function
```

### Component Patterns

- **Navigation**: Uses reactive scroll detection (`isScrolled`) for styling changes
- **AOS Integration**: All pages initialize AOS in mounted lifecycle
- **Meta Management**: Blog posts use `@vueuse/head` for dynamic SEO meta tags
- **Routing**: Lazy loading for legal pages (`() => import("@/views/Danke.vue")`)

## Styling Conventions

### DaisyUI + Tailwind

- Primary brand color: `#f60` (orange) defined in `tailwind.config.js`
- DaisyUI themes with custom primary color override
- Responsive design with mobile-first approach
- Dark theme with `bg-base-100`, `bg-base-200` backgrounds

### Common Patterns

```vue
<!-- Hero sections with overlay -->
<div class="hero min-h-[60vh] relative" :style="`background-image: url('${image}')`">
  <div class="hero-overlay bg-black bg-opacity-80"></div>
  <!-- content -->
</div>

<!-- Cards with hover effects -->
<div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px]">
```

## Development Guidelines

### Vue 3 Composition API

- Always use `<script setup>` syntax
- Prefer `ref()` for reactive data, `computed()` for derived values
- Use `onMounted()` for initialization (especially AOS and scrollTo)

### Routing & Navigation

- German URLs: `/website-erstellen-lassen`, `/google-ads`
- Blog URLs: `/blog/:slug` pattern
- 404s redirect to homepage via catch-all route

### Image Management

- Assets in `src/assets/images/` with organized subfolders
- Blog post images in `assets/images/blog-posts/`
- Favicon and icons in respective folders

### Forms & Components

- Contact forms use DaisyUI form classes
- Newsletter signup component (`NewsletterForm.vue`) used across pages
- Floating call button (`FloatingCallButton.vue`) as CTA component

## Testing & Quality

- No test files present - add tests in `__tests__/` or `tests/` directories
- Use Vue Test Utils for component testing
- Consider E2E tests for critical user journeys (contact forms, blog navigation)

## SEO & Performance

- Meta tags managed via `@vueuse/head` in each page/blog post
- Automatic sitemap generation includes blog posts
- AOS animations with performance-conscious settings (once: true)
- Image optimization and lazy loading recommended for blog images

## Common Tasks

### Adding a Blog Post

1. Add entry to `src/blog-meta.js`
2. Create component in `src/components/blog-posts/YourPost.vue`
3. Register in `src/blog-registry.js` (both component and full data)
4. Images should be imported and referenced in registry

### Adding a Service Page

1. Create view component in `src/views/`
2. Add route to `src/router.js`
3. Create service-specific navigation if needed in `src/components/[service]/`

### Modifying Styles

- Global styles in `src/app.css`
- DaisyUI theme customization in `tailwind.config.js`
- Component-specific styles use Tailwind classes primarily
