# KI-Automatisierung Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship `/ki-automatisierung` as a third equal service offering on orangize.de, with full landing page, homepage integration (hero, services showcase, pricing, bio), and a Leistungen dropdown across all main navigations.

**Architecture:** New page `pages/ki-automatisierung.vue` cloning the structural pattern of `/google-ads` (hero → tools → lösung → leistungen → use cases → prozess → dsgvo → pricing → keywords → regionale → cta → faq → kontakt). New components folder `components/ki-automatisierung/` for page-local components (Navigation, RegionalePraesenz). Homepage and existing service-navigation components get additive edits only; no refactor of existing service pages.

**Tech Stack:** Nuxt 3, Vue 3 (`<script setup>`), Tailwind CSS, DaisyUI 3.x, AOS (animate-on-scroll). No new dependencies.

**Source spec:** `docs/superpowers/specs/2026-05-31-ki-automatisierung-design.md`

**Conventions for this plan:**
- No test framework exists in the repo (per `CLAUDE.md`). "Verify" steps run `npm run dev` and open the affected route, then `npm run build` for the final task.
- All commit messages use plain subject + body, **no Co-Authored-By trailer**.
- Commit identity: keep prior repo convention by overriding inline: `git -c user.email=info@orangize.de -c user.name=orangize-digital commit ...`. **Never** edit the global or local `git config` file.
- Color token `#f60` (not `text-primary` alone) per existing CLAUDE.md guidance.
- When a step says "open <url>", open `http://localhost:3000<path>` in a browser and confirm the section renders without console errors.

---

## File Structure

### New files

| Path | Responsibility |
|------|----------------|
| `pages/ki-automatisierung.vue` | Main service landing page (file-routed to `/ki-automatisierung`) |
| `components/ki-automatisierung/Navigation.vue` | Service-page top nav with Leistungen-Dropdown and KI sections |
| `components/ki-automatisierung/RegionalePraesenz.vue` | OWL trust-signal section, parallel to `google-ads/RegionalePraesenzGoogleAds.vue` |

### Modified files

| Path | Change |
|------|--------|
| `pages/index.vue` | Hero subtitle + 4th bullet; bio card title + 3rd paragraph + 2 new badges |
| `components/Navigation.vue` | Replace flat Service-section links with Leistungen-Dropdown (Desktop + Mobile); drop "Ablauf" link |
| `components/ServicesShowcase.vue` | Add 3rd card (KI-Automation); switch grid from 2 to 3 cols on `lg` |
| `components/Pricing.vue` | Replace 2-tab toggle (`web`/`ads`) with 3-card service-entry layout |
| `components/google-ads/Navigation.vue` | Add Leistungen-Dropdown alongside existing section links |
| `components/webseite/Navigation.vue` | Add Leistungen-Dropdown alongside existing section links |

### Asset placeholder

`assets/images/ki-automatisierung-hero.jpeg` is **not committed by this plan**. The page references it; until a real asset exists, Task 4 uses a fallback to the existing `assets/images/google-ads-hero.jpeg` so dev/build don't break. Final asset can drop in later without code change.

---

## Task 1: Scaffold `components/ki-automatisierung/Navigation.vue`

**Files:**
- Create: `components/ki-automatisierung/Navigation.vue`

This is the per-page nav used by `/ki-automatisierung`. It must mirror the look/behavior of `components/google-ads/Navigation.vue` but with KI section IDs and the new Leistungen-Dropdown that future tasks also retrofit into the other navis.

- [ ] **Step 1: Create the file with the exact content below**

```vue
<template>
  <nav
    class="navbar fixed top-0 z-50 transition-all border-none duration-500 ease-out"
    :class="{
      'max-w-[85rem] bg-base-100 rounded-xl mt-4 left-0 right-0 mx-auto translate-x-[-50%]':
        !isScrolled,
      'bg-base-100 border-none w-full shadow-md left-0 translate-x-0':
        isScrolled,
    }"
    :style="{
      transform: `translateY(${isScrolled ? '0px' : '10px'})`,
      transition: 'transform 0.4s ease-out, opacity 0.2s ease-in',
    }"
  >
    <div class="container mx-auto px-4">
      <!-- Logo -->
      <div class="flex-1 lg:flex-none">
        <router-link to="/">
          <img :src="logoSrc" alt="Orangize Logo" class="h-12" />
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex-none lg:hidden">
        <button class="btn btn-square btn-ghost" @click="isMenuOpen = !isMenuOpen">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Desktop Menu -->
      <div class="flex-none hidden lg:flex lg:flex-1 lg:justify-center">
        <ul class="menu menu-horizontal px-1 gap-8 items-center">
          <!-- Leistungen Dropdown -->
          <li>
            <details class="dropdown">
              <summary class="hover:text-[#f60] text-base-content transition-colors duration-300 font-bold navi-items cursor-pointer">
                Leistungen
              </summary>
              <ul class="menu dropdown-content bg-base-100 rounded-box z-[60] w-60 p-2 shadow mt-2">
                <li><router-link to="/google-ads" class="text-base-content hover:text-[#f60]">Google Ads</router-link></li>
                <li><router-link to="/website-erstellen-lassen" class="text-base-content hover:text-[#f60]">Webdesign</router-link></li>
                <li><router-link to="/ki-automatisierung" class="text-[#f60] font-semibold">KI-Automatisierung</router-link></li>
              </ul>
            </details>
          </li>

          <li v-for="section in sections" :key="section.id">
            <a
              :href="'#' + section.id"
              class="hover:text-[#f60] text-base-content transition-colors duration-300 font-bold navi-items"
              @click.prevent="scrollToSection(section.id)"
            >
              {{ section.name }}
            </a>
          </li>
          <li>
            <router-link to="/blog" class="hover:text-[#f60] text-base-content transition-colors duration-300 font-bold navi-items">
              Blog
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Theme Switcher & CTA Button -->
      <div class="flex-none hidden lg:flex lg:items-center lg:gap-4">
        <ThemeSwitcher />
        <button
          class="btn btn-primary bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90"
          @click="scrollToContact"
        >
          Beratung vereinbaren
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="lg:hidden absolute top-full left-0 right-0 bg-base-100/95 backdrop-blur-md shadow-md transition-opacity duration-500 ease-out"
    >
      <ul class="menu menu-vertical px-4 py-2">
        <li>
          <details>
            <summary class="text-base-content hover:text-[#f60] font-semibold">Leistungen</summary>
            <ul>
              <li><router-link to="/google-ads" class="text-base-content hover:text-[#f60]" @click="isMenuOpen = false">Google Ads</router-link></li>
              <li><router-link to="/website-erstellen-lassen" class="text-base-content hover:text-[#f60]" @click="isMenuOpen = false">Webdesign</router-link></li>
              <li><router-link to="/ki-automatisierung" class="text-[#f60] font-semibold" @click="isMenuOpen = false">KI-Automatisierung</router-link></li>
            </ul>
          </details>
        </li>
        <li v-for="section in sections" :key="section.id">
          <a
            :href="'#' + section.id"
            class="text-base-content hover:text-[#f60] transition-colors duration-300"
            @click.prevent="scrollToSection(section.id); isMenuOpen = false"
          >
            {{ section.name }}
          </a>
        </li>
        <li>
          <router-link to="/blog" class="text-base-content hover:text-[#f60] transition-colors duration-300" @click="isMenuOpen = false">
            Blog
          </router-link>
        </li>
        <li class="mt-4">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
            <ThemeSwitcher />
            <button
              class="btn btn-primary bg-[#f60] border-none hover:bg-[#f60]/90 w-full flex items-center justify-center sm:w-auto"
              @click="scrollToContact"
            >
              Beratung vereinbaren
            </button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import ThemeSwitcher from "../ThemeSwitcher.vue";

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const currentTheme = ref("light");
let ticking = false;

const logoSrc = computed(() =>
  currentTheme.value === "dark"
    ? "/images/logo/orangize-white.svg"
    : "/images/logo/orangize-black.svg"
);

const updateTheme = () => {
  if (typeof window !== "undefined") {
    const theme = document.documentElement.getAttribute("data-theme") || "light";
    currentTheme.value = theme;
  }
};

const sections = [
  { id: "losung", name: "Lösung" },
  { id: "leistungen", name: "Leistungen" },
  { id: "prozess", name: "Prozess" },
  { id: "dsgvo", name: "DSGVO" },
  { id: "pricing", name: "Pakete" },
  { id: "faq", name: "FAQ" },
];

const updateNavbar = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      isScrolled.value = window.scrollY > 200;
      ticking = false;
    });
    ticking = true;
  }
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
};

const scrollToContact = () => {
  const kontaktSection = document.getElementById("kontakt");
  if (kontaktSection) kontaktSection.scrollIntoView({ behavior: "smooth", block: "start" });
  else window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", updateNavbar);
  updateTheme();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
        updateTheme();
      }
    });
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateNavbar);
});
</script>

<style>
.navi-items {
  letter-spacing: 1px !important;
}
</style>
```

- [ ] **Step 2: Commit**

```bash
git add components/ki-automatisierung/Navigation.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add Navigation component for KI-Automatisierung service page"
```

---

## Task 2: Scaffold `components/ki-automatisierung/RegionalePraesenz.vue`

**Files:**
- Create: `components/ki-automatisierung/RegionalePraesenz.vue`

Trust-signal section listing OWL cities served, parallel to `RegionalePraesenzGoogleAds`. Stays standalone so it can later be reused / restyled without touching the page.

- [ ] **Step 1: Create the file**

```vue
<template>
  <section class="py-20 bg-base-200">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
          Regionale Präsenz
        </h3>
        <h2
          class="text-4xl text-base-content font-bold mt-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          KI-Automatisierung in ganz Ostwestfalen
        </h2>
        <p
          class="text-lg text-base-content/80 max-w-2xl mx-auto mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Wir arbeiten mit Unternehmen in der gesamten Region OWL — persönlich
          erreichbar, vor Ort wenn nötig, immer pragmatisch.
        </p>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
      >
        <div
          v-for="(city, idx) in cities"
          :key="city"
          class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center hover:border-[#f60] transition-colors duration-300"
          data-aos="fade-up"
          :data-aos-delay="idx * 75"
        >
          <p class="text-base-content font-medium">{{ city }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cities = [
  "Herford",
  "Bielefeld",
  "Minden",
  "Bünde",
  "Bad Oeynhausen",
  "Porta Westfalica",
];
</script>
```

- [ ] **Step 2: Commit**

```bash
git add components/ki-automatisierung/RegionalePraesenz.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add RegionalePraesenz component for KI-Automatisierung page"
```

---

## Task 3: Create skeleton `pages/ki-automatisierung.vue` (renders, Nav + Hero + Footer only)

**Files:**
- Create: `pages/ki-automatisierung.vue`

A minimal but routable page first, so we can verify the route works before piling sections in. Reuses `google-ads-hero.jpeg` as a placeholder background until a KI-specific image exists.

- [ ] **Step 1: Create the file**

```vue
<template>
  <div>
    <Navigation />

    <!-- Hero -->
    <div
      class="hero min-h-[110vh] relative bg-[url('@/assets/images/google-ads-hero.jpeg')] lg:mt-0"
    >
      <div class="hero-overlay bg-black bg-opacity-80"></div>
      <div class="hero-content relative z-10 w-full lg:py-0 py-[150px]">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div data-aos="fade-right">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                KI-Automatisierung &
                <span class="text-[#f60]">KI-Agenten</span>
              </h1>
              <p class="text-xl text-white mb-8 leading-relaxed">
                Workflows automatisieren, KI-Agenten einsetzen, Prozesse verschlanken
                — DSGVO-konform und ohne zusätzliches Personal.
              </p>

              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  <span class="text-white">Zeit sparen, Personalkosten senken</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  <span class="text-white">DSGVO-konform, EU-Hosting möglich</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  <span class="text-white">Maßgeschneidert für deine Prozesse</span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <button
                  class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 text-lg px-8"
                  @click="scrollToSection('kontakt')"
                >
                  Kostenlose Beratung
                </button>
                <button
                  class="btn btn-outline border-white text-white hover:bg-white hover:text-black text-lg px-8"
                  @click="scrollToSection('losung')"
                >
                  Mehr erfahren
                </button>
              </div>
            </div>

            <div data-aos="fade-up" class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl"></div>
              <div class="relative">
                <HeroContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-8 w-full flex justify-center">
        <a href="#" @click.prevent="scrollToSection('losung')" class="text-white animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#fff">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Kontaktformular -->
    <ContactForm />

    <FloatingCallButton />
    <Footer />

    <PricingModal ref="pricingModal" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import Navigation from "../components/ki-automatisierung/Navigation.vue";
import Footer from "../components/Footer.vue";
import ContactForm from "../components/ContactForm.vue";
import FloatingCallButton from "../components/FloatingCallButton.vue";
import PricingModal from "../components/PricingModal.vue";
import HeroContactForm from "../components/HeroContactForm.vue";

const route = useRoute();

useHead({
  title: "KI-Automatisierung & KI-Agenten für KMU in OWL | Orangize Digital",
  meta: [
    { name: "description", content: "Workflow-Automatisierung, maßgeschneiderte KI-Agenten, Prozessautomatisierung mit n8n / Make / Zapier. DSGVO-konform, persönliche Betreuung aus Ostwestfalen." },
    { name: "keywords", content: "ki-automatisierung, ki-agenten, workflow-automatisierung, prozessautomatisierung, n8n agentur, make.com beratung, dsgvo ki, ai agents deutschland, automatisierung owl" },
    { property: "og:title", content: "KI-Automatisierung & KI-Agenten für KMU in OWL | Orangize Digital" },
    { property: "og:description", content: "Workflows, KI-Agenten und Prozessautomatisierung für den deutschen Mittelstand. DSGVO-konform, persönlich, aus OWL." },
    { property: "og:type", content: "website" },
  ],
  link: [{ rel: "canonical", href: `https://orangize.de${route.path}` }],
});

const pricingModal = ref(null);

const openPricingModal = (interest) => {
  pricingModal.value.openModal(interest);
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
};

let ticking = false;
const updateNavbar = () => {
  if (!ticking) {
    requestAnimationFrame(() => { ticking = false; });
    ticking = true;
  }
};

onMounted(() => { window.addEventListener("scroll", updateNavbar); });
onUnmounted(() => { window.removeEventListener("scroll", updateNavbar); });
</script>
```

- [ ] **Step 2: Verify route renders**

Run: `npm run dev`
Open: `http://localhost:3000/ki-automatisierung`
Expected: Page loads, fixed navbar visible at top, hero with KI headline + 3 bullets + 2 buttons + HeroContactForm visible, ContactForm renders below, footer visible. No console errors.

- [ ] **Step 3: Commit**

```bash
git add pages/ki-automatisierung.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add scaffold /ki-automatisierung page with hero + contact + footer"
```

---

## Task 4: Add Tools & Stack section

**Files:**
- Modify: `pages/ki-automatisierung.vue` — insert section directly after the closing `</div>` of the Hero (i.e. after the scroll-indicator div closes, before `<ContactForm />`)

- [ ] **Step 1: Insert the section**

Locate the closing of the hero block (ends with the scroll-indicator `</a></div></div>` closing tags). Insert immediately after, **before** `<!-- Kontaktformular -->`:

```vue
    <!-- Tools & Stack -->
    <section class="py-12 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-8">
          <p class="text-base-content/60 text-sm uppercase tracking-wider">
            Unser Stack
          </p>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up">n8n</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="60">Make</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="120">Zapier</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="180">OpenAI</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="240">Anthropic</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="300">Slack</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="360">HubSpot</span>
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Verify**

Refresh `http://localhost:3000/ki-automatisierung`. Stack pills visible just below hero. No console errors.

- [ ] **Step 3: Commit**

```bash
git add pages/ki-automatisierung.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add Tools & Stack section to KI-Automatisierung page"
```

---

## Task 5: Add Lösung section

**Files:**
- Modify: `pages/ki-automatisierung.vue` — insert directly after the Tools & Stack `</section>`

- [ ] **Step 1: Insert**

```vue
    <!-- Lösung -->
    <section id="losung" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Warum jetzt KI-Automation?
          </h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            Operative Entlastung. Ohne neues Personal.
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <p class="text-lg text-base-content leading-relaxed">
              Die meisten Engpässe in kleinen und mittleren Betrieben sind nicht
              Personalmangel — sondern dieselben fünf manuellen Schritte, die
              jeden Tag aufs Neue Zeit fressen: Anfragen sortieren, Daten von
              A nach B übertragen, Termine bestätigen, Angebote tippen, im CRM
              hinterlegen.
              <br /><br />
              Mit modernen Automatisierungs-Werkzeugen
              (<strong>n8n, Make, Zapier</strong>) und KI-Modellen
              (<strong>OpenAI, Anthropic, Mistral</strong>) lassen sich genau
              diese Schritte abnehmen — zuverlässig, nachvollziehbar, DSGVO-konform.
              <br /><br />
              Wir bauen die Workflows, hosten sie wenn nötig auf deinem eigenen
              Server, und schulen dein Team. Du behältst die Kontrolle, gewinnst
              aber Stunden pro Woche zurück.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="flex items-start space-x-4" data-aos="fade-up">
              <div class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">Zeit zurückgewinnen</h4>
                <p class="text-base-content">5–20 Stunden pro Woche, die du wieder für Kunden hast.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="100">
              <div class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">Kein zusätzliches Personal</h4>
                <p class="text-base-content">Wachstum ohne Einstellungs-Runde — Automation skaliert mit dir.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="200">
              <div class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">DSGVO-konform</h4>
                <p class="text-base-content">EU-Hosting, AVV, on-prem Optionen — passend für den deutschen Mittelstand.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="300">
              <div class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">Planbar skalierbar</h4>
                <p class="text-base-content">Klein anfangen, modular ausbauen — kein Big-Bang-Risiko.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Verify**

Refresh page; click "Mehr erfahren" in hero — should scroll to Lösung section.

- [ ] **Step 3: Commit**

```bash
git add pages/ki-automatisierung.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add Lösung section to KI-Automatisierung page"
```

---

## Task 6: Add Leistungen section (3 cards with PricingModal wiring)

**Files:**
- Modify: `pages/ki-automatisierung.vue` — insert after Lösung `</section>`

- [ ] **Step 1: Insert**

```vue
    <!-- Leistungen -->
    <section id="leistungen" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Unsere KI-Leistungen
          </h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            Drei Schubladen, ein Ziel: weniger manuelle Arbeit
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Karte 1: Workflow-Automatisierung -->
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20 hover:border-[#f60] transition-all duration-300" data-aos="fade-up">
            <div class="card-body">
              <div class="w-16 h-16 bg-[#f60]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-2">Workflow-Automatisierung</h3>
              <p class="text-[#f60] font-semibold mb-4">Manuelle Klick-Arbeit eliminieren — ohne neues Personal</p>
              <p class="text-base-content mb-6">
                Wir verbinden deine bestehenden Tools (CRM, E-Mail, Kalender, Buchhaltung, Webshop) zu reibungslosen Abläufen. Daten fließen automatisch dort hin, wo sie gebraucht werden.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  n8n / Make / Zapier
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  API-Integrationen
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Fehler-Monitoring
                </li>
              </ul>
              <p class="text-sm text-base-content/70 italic mb-6">
                Beispiel: "Neue Anfrage → CRM-Eintrag + Slack-Benachrichtigung + Angebots-Entwurf"
              </p>
              <button class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 w-full" @click="openPricingModal('KI-Workflow Setup')">
                Angebot anfordern
              </button>
            </div>
          </div>

          <!-- Karte 2: KI-Agenten -->
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20 hover:border-[#f60] transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <div class="card-body">
              <div class="w-16 h-16 bg-[#f60]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-2">KI-Agenten (maßgeschneidert)</h3>
              <p class="text-[#f60] font-semibold mb-4">Ein Mitarbeiter, der nie schläft — und nur Bruchteile kostet</p>
              <p class="text-base-content mb-6">
                Individuelle KI-Agenten für Recherche, E-Mail-Bearbeitung, Lead-Qualifizierung oder Datenanalyse. Trainiert auf deine Tonalität, dein Wissen, deine Prozesse.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  OpenAI / Anthropic / Mistral
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Wissensbasis-Anbindung
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Mensch-im-Loop wenn nötig
                </li>
              </ul>
              <p class="text-sm text-base-content/70 italic mb-6">
                Beispiele: "Recherche-Agent erstellt Konkurrenz-Briefings", "Inbox-Agent priorisiert &amp; schlägt Antworten vor"
              </p>
              <button class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 w-full" @click="openPricingModal('KI-Agent maßgeschneidert')">
                Angebot anfordern
              </button>
            </div>
          </div>

          <!-- Karte 3: Prozess-Beratung -->
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20 hover:border-[#f60] transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body">
              <div class="w-16 h-16 bg-[#f60]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-2">Prozess-Automatisierung &amp; Beratung</h3>
              <p class="text-[#f60] font-semibold mb-4">Erst verstehen, dann automatisieren — sonst skaliert ihr Chaos</p>
              <p class="text-base-content mb-6">
                Wir analysieren deine Prozesse, identifizieren die teuersten manuellen Schritte und bauen einen Automation-Fahrplan. Inklusive Aufwands-/ROI-Schätzung pro Prozess.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Prozess-Audit
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  ROI-Bewertung
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  DSGVO-Check &amp; Schulung
                </li>
              </ul>
              <p class="text-sm text-base-content/70 italic mb-6">
                Beispiel: "2-Tages-Audit identifiziert 12h/Woche Sparpotenzial im Vertrieb"
              </p>
              <button class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 w-full" @click="openPricingModal('KI-Automation Beratung &amp; Audit')">
                Audit anfordern
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Verify**

Refresh; scroll to Leistungen. Click each card's CTA — PricingModal should open with the correct interest text.

- [ ] **Step 3: Commit**

```bash
git add pages/ki-automatisierung.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add Leistungen section with 3 service cards to KI-Automatisierung page"
```

---

## Task 7: Add Use Cases section

**Files:**
- Modify: `pages/ki-automatisierung.vue` — insert after Leistungen `</section>`

- [ ] **Step 1: Insert**

```vue
    <!-- Use Cases -->
    <section id="usecases" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Konkrete Anwendungsfälle
          </h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            Was wir typischerweise automatisieren
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">Lead-Qualifizierungs-Agent</h3>
              <p class="text-base-content mb-4">Eingehende Anfragen werden automatisch nach Fit, Budget und Dringlichkeit bewertet und priorisiert.</p>
              <p class="text-sm text-[#f60] font-semibold">Vorher: 30 Min/Lead manuell · Nachher: 2 Min Review</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up" data-aos-delay="80">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">E-Mail-Sortierung &amp; Antwort-Vorschläge</h3>
              <p class="text-base-content mb-4">Inbox wird kategorisiert, dringende Mails markiert, Standard-Antworten als Entwurf vorbereitet.</p>
              <p class="text-sm text-[#f60] font-semibold">Spart 5–10 Stunden pro Woche</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up" data-aos-delay="160">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">Recherche-Agent</h3>
              <p class="text-base-content mb-4">Konkurrenz-Briefings, Markt-Updates, Lead-Recherche — auf Knopfdruck als strukturiertes PDF.</p>
              <p class="text-sm text-[#f60] font-semibold">Aus 2 Stunden Recherche werden 5 Minuten</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">Angebots-Automatisierung</h3>
              <p class="text-base-content mb-4">Anfrage → standardisiertes Angebot mit individuellen Positionen → PDF → E-Mail-Versand.</p>
              <p class="text-sm text-[#f60] font-semibold">Angebot in 10 Min statt 1 Stunde</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up" data-aos-delay="80">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">CRM-Sync</h3>
              <p class="text-base-content mb-4">Kontakte, Aktivitäten und Notizen zwischen E-Mail, CRM, Kalender und Buchhaltung synchron halten.</p>
              <p class="text-sm text-[#f60] font-semibold">Schluss mit Daten-Insellage</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up" data-aos-delay="160">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">WhatsApp- &amp; Anruf-Triage</h3>
              <p class="text-base-content mb-4">Eingehende Nachrichten und Anruf-Notizen werden ins CRM überführt und an die richtige Person geroutet.</p>
              <p class="text-sm text-[#f60] font-semibold">Kein verlorener Lead mehr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Verify**

Refresh; scroll to Use Cases. 6 cards visible in 1/2/3-col responsive grid.

- [ ] **Step 3: Commit**

```bash
git add pages/ki-automatisierung.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add Use Cases section to KI-Automatisierung page"
```

---

## Task 8: Add Prozess section

**Files:**
- Modify: `pages/ki-automatisierung.vue` — insert after Use Cases `</section>`

- [ ] **Step 1: Insert**

```vue
    <!-- Prozess -->
    <section id="prozess" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Unser Prozess
          </h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            Vom Audit bis zum laufenden Workflow
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20" data-aos="fade-up">
            <div class="card-body text-center">
              <div class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 class="text-xl font-bold text-base-content mb-4">Discovery &amp; Audit</h3>
              <p class="text-base-content">Wir schauen uns deine Prozesse an, identifizieren die teuersten manuellen Schritte und priorisieren nach ROI.</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20" data-aos="fade-up" data-aos-delay="100">
            <div class="card-body text-center">
              <div class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 class="text-xl font-bold text-base-content mb-4">Workflow-Design</h3>
              <p class="text-base-content">Wir entwerfen die Automation, prüfen DSGVO-Anforderungen und stimmen das Design mit dir ab.</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body text-center">
              <div class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 class="text-xl font-bold text-base-content mb-4">Implementierung</h3>
              <p class="text-base-content">Wir bauen, testen, dokumentieren — und schulen dein Team bei der Übergabe.</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20" data-aos="fade-up" data-aos-delay="300">
            <div class="card-body text-center">
              <div class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 class="text-xl font-bold text-base-content mb-4">Betrieb &amp; Optimierung</h3>
              <p class="text-base-content">Monitoring, Fehler-Alerts, regelmäßige Reviews — und Anpassungen wenn sich Tools oder Prozesse ändern.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Verify**

Refresh; Prozess section renders with 4 numbered cards.

- [ ] **Step 3: Commit**

```bash
git add pages/ki-automatisierung.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add Prozess section to KI-Automatisierung page"
```

---

## Task 9: Add DSGVO & Datensicherheit section

**Files:**
- Modify: `pages/ki-automatisierung.vue` — insert after Prozess `</section>`

- [ ] **Step 1: Insert**

```vue
    <!-- DSGVO -->
    <section id="dsgvo" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 class="text-lg text-[#f60] font-semibold mb-4">DSGVO &amp; Datensicherheit</h3>
            <h2 class="text-4xl text-base-content font-bold mb-6">Compliance ist kein Add-on — sondern Voraussetzung</h2>
            <p class="text-lg text-base-content mb-6">
              Für den deutschen Mittelstand ist die Frage nicht "Können wir KI?", sondern "Können wir KI rechtssicher?". Wir bauen Automatisierungen so, dass sie von Anfang an DSGVO-konform sind.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <div class="p-2 bg-[#f60] text-white rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content">EU-Hosting &amp; on-prem Optionen</h4>
                  <p class="text-base-content">n8n self-hosted auf deinem Server, EU-Region für Cloud-Tools, lokale Modelle wenn nötig.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="p-2 bg-[#f60] text-white rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content">Auftragsverarbeitungs-Verträge (AVV)</h4>
                  <p class="text-base-content">Vorbereitete AVVs mit allen relevanten Subunternehmern — sauber dokumentiert.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="p-2 bg-[#f60] text-white rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content">Modellauswahl mit Bedacht</h4>
                  <p class="text-base-content">Für sensible Daten: Anthropic (EU), Mistral oder lokale Modelle. Klar dokumentiert, welcher Datenfluss wohin geht.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="p-2 bg-[#f60] text-white rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content">Audit-Logs &amp; Nachvollziehbarkeit</h4>
                  <p class="text-base-content">Jede Automation protokolliert, welche Daten sie verarbeitet hat. Bei Bedarf jederzeit prüfbar.</p>
                </div>
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" class="bg-base-200 rounded-lg p-8 border border-[#f60]/20">
            <h3 class="text-2xl font-bold text-base-content mb-6">Unsere DSGVO-Checklist</h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-base-content"><span class="text-[#f60] font-bold">✓</span> Datenfluss-Diagramm pro Automation</li>
              <li class="flex items-center gap-3 text-base-content"><span class="text-[#f60] font-bold">✓</span> Hosting-Region dokumentiert</li>
              <li class="flex items-center gap-3 text-base-content"><span class="text-[#f60] font-bold">✓</span> Subunternehmer-Verzeichnis</li>
              <li class="flex items-center gap-3 text-base-content"><span class="text-[#f60] font-bold">✓</span> Löschkonzept inkl. KI-Modell-Daten</li>
              <li class="flex items-center gap-3 text-base-content"><span class="text-[#f60] font-bold">✓</span> Technische &amp; organisatorische Maßnahmen (TOMs)</li>
              <li class="flex items-center gap-3 text-base-content"><span class="text-[#f60] font-bold">✓</span> Schulung der Mitarbeitenden</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Verify**

Refresh; DSGVO section renders with 2-column layout.

- [ ] **Step 3: Commit**

```bash
git add pages/ki-automatisierung.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add DSGVO & Datensicherheit section to KI-Automatisierung page"
```

---

## Task 10: Add Pricing section (3 packages)

**Files:**
- Modify: `pages/ki-automatisierung.vue` — insert after DSGVO `</section>`

- [ ] **Step 1: Insert**

```vue
    <!-- Pricing -->
    <section id="pricing" class="py-24 bg-gradient-to-b from-base-200 to-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold mb-2" data-aos="fade-up">Transparente Pakete</h3>
          <h2 class="text-5xl text-base-content font-bold mb-6" data-aos="fade-up" data-aos-delay="100">Pakete für KI-Automation</h2>
          <p class="text-xl text-base-content max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Klein anfangen oder direkt skalieren — alle Pakete inklusive DSGVO-Setup und Schulung.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          <!-- Starter -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300" data-aos="fade-up">
            <div class="card-body">
              <h3 class="card-title text-2xl font-bold mb-2 text-base-content">Starter</h3>
              <p class="text-sm text-base-content/70 mb-4">Erster Workflow live in 2 Wochen</p>
              <p class="text-4xl font-bold mb-1 text-base-content">ab 1.490 €</p>
              <p class="text-sm text-base-content/70 mb-6">einmalig + 99 €/Mo Wartung</p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>1 Workflow (bis 3 Tools)</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Zapier oder Make</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>1 Discovery-Call + 30-Min Übergabe</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>E-Mail-Support, 48h Reaktion</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>DSGVO-AVV inklusive</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Basis-Alerts</li>
              </ul>
              <button class="btn btn-outline hover:bg-[#f60] hover:border-[#f60] w-full" @click="openPricingModal('KI Starter')">Starter wählen</button>
            </div>
          </div>

          <!-- Business (Beliebt) -->
          <div class="card bg-base-100 shadow-xl border-4 border-[#f60] relative transform scale-105 z-10 bg-gradient-to-b from-base-100 to-[#f60]/5" data-aos="fade-up" data-aos-delay="100">
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div class="badge badge-lg bg-[#f60] border-[#f60] text-white font-bold px-4 py-3 text-sm shadow-lg">⭐ BELIEBT ⭐</div>
            </div>
            <div class="card-body pt-8">
              <h3 class="card-title text-2xl font-bold mb-2 text-base-content">Business</h3>
              <p class="text-sm text-base-content/70 mb-4">Mehrere Automationen + dein erster KI-Agent</p>
              <p class="text-4xl font-bold mb-1 text-[#f60]">ab 3.900 €</p>
              <p class="text-sm text-base-content mb-6">einmalig + 249 €/Mo Wartung</p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>bis 3 Workflows + 1 KI-Agent</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>n8n (self-host möglich) oder Make</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>OpenAI / Anthropic Standard</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>2 Workshops + Doku + 90-Min Team-Training</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>E-Mail + Chat, 24h Reaktion</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Dashboard + Alerts</li>
              </ul>
              <button class="btn btn-primary bg-[#f60] border-none hover:bg-[#ff751a] text-white w-full" @click="openPricingModal('KI Business')">Business wählen</button>
            </div>
          </div>

          <!-- Enterprise -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body">
              <h3 class="card-title text-2xl font-bold mb-2 text-base-content">Enterprise</h3>
              <p class="text-sm text-base-content/70 mb-4">Maßgeschneidert für komplexe Anforderungen</p>
              <p class="text-4xl font-bold mb-1 text-base-content">auf Anfrage</p>
              <p class="text-sm text-base-content/70 mb-6">SLA &amp; Scope individuell</p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>unbegrenzte Workflows + Agenten</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>n8n self-hosted / API custom</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>on-prem / EU-Hosting für Modelle</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Discovery-Sprint + Inhouse-Workshop</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>SLA nach Vereinbarung</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>DPA + TOMs + Custom-Monitoring</li>
              </ul>
              <button class="btn btn-outline hover:bg-[#f60] hover:border-[#f60] w-full" @click="openPricingModal('KI Enterprise')">Beratung anfragen</button>
            </div>
          </div>
        </div>

        <p class="text-center text-sm text-base-content/60 max-w-3xl mx-auto mt-10 italic">
          Einmalige Preise als Richtwert. Exakter Aufwand wird nach Discovery-Call angeboten.
          API-/Tool-Lizenzkosten (z.B. OpenAI-Tokens, Make-Operations) werden separat ausgewiesen.
        </p>
      </div>
    </section>
```

- [ ] **Step 2: Verify**

Refresh; Pricing renders with 3 cards, middle scaled+orange-bordered. Click each CTA — PricingModal opens with correct interest name.

- [ ] **Step 3: Commit**

```bash
git add pages/ki-automatisierung.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add Pricing section with 3 packages to KI-Automatisierung page"
```

---

## Task 11: Add Keywords-Grid, RegionalePraesenz, CTA, FAQ

**Files:**
- Modify: `pages/ki-automatisierung.vue` — insert all four blocks in order after Pricing `</section>`, before `<!-- Kontaktformular -->`
- Modify: `<script setup>` of the same file — add CTA import

- [ ] **Step 1: In `<script setup>`, add the CTA import**

Add this line to the existing import block:

```js
import CTA from "../components/CTA.vue";
```

- [ ] **Step 2: Insert template blocks (in order)**

```vue
    <!-- Keywords-Grid -->
    <section class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">Unsere Expertise</h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            KI-Automatisierung für deutsche Anforderungen
          </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">KI-Agenten erstellen</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">n8n Agentur</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Make.com Beratung</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Zapier Setup</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Workflow-Automatisierung</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Prozessautomatisierung KMU</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">DSGVO KI</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">E-Mail-Automatisierung</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Recherche-Agent</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">API-Integration</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">CRM-Automatisierung</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Automatisierung Ostwestfalen</p></div>
        </div>
      </div>
    </section>

    <!-- Regionale Präsenz -->
    <KiAutomatisierungRegionalePraesenz />

    <!-- CTA -->
    <CTA />

    <!-- FAQ -->
    <section id="faq" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">Häufig gestellte Fragen</h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">Alles Wichtige zu KI-Automatisierung</h2>
        </div>
        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="ki-faq" checked="checked" />
              <div class="collapse-title text-xl font-medium text-base-content">Was kostet eine KI-Automatisierung?</div>
              <div class="collapse-content text-base-content">
                <p>Einfache Workflows starten ab 1.490 € einmalig (Starter-Paket). Maßgeschneiderte Agenten und mehrere verbundene Workflows liegen ab 3.900 € (Business). Komplexe Enterprise-Setups individuell. Hinzu kommen monatliche Wartung und ggf. API-/Tool-Lizenzkosten — wir weisen die immer separat aus.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="ki-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Wie lange dauert die Umsetzung?</div>
              <div class="collapse-content text-base-content">
                <p>Ein einzelner Workflow ist meist in 2 Wochen live. Komplexere Setups mit mehreren Automationen und KI-Agenten brauchen 4–8 Wochen. Discovery + Audit machen wir vorab in 1–2 Wochen.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="ki-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Was darf KI eigentlich DSGVO-mäßig?</div>
              <div class="collapse-content text-base-content">
                <p>Viel — wenn man es richtig macht. Wir nutzen Modelle mit EU-Hosting oder lokale Modelle für sensible Daten, schließen Auftragsverarbeitungs-Verträge mit allen Beteiligten, dokumentieren den Datenfluss und nutzen wo möglich pseudonymisierte Eingaben. Jede Automation ist auditierbar.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="ki-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Was ist der Unterschied zwischen n8n, Make und Zapier?</div>
              <div class="collapse-content text-base-content">
                <p>Zapier ist am einfachsten und teuersten pro Operation — gut für simple Sachen. Make bietet mehr Logik fürs gleiche Geld und ist unsere Standard-Wahl für mittlere Komplexität. n8n ist Open Source und kann auf deinem eigenen Server laufen — ideal wenn DSGVO oder Kostenkontrolle wichtig ist.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="ki-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Was passiert wenn ein Tool sich ändert oder ein Workflow bricht?</div>
              <div class="collapse-content text-base-content">
                <p>Genau dafür ist die monatliche Wartung. Wir überwachen die Workflows, bekommen Fehler-Alerts und passen an, wenn APIs sich ändern. Du musst dich um nichts kümmern.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="ki-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Was, wenn ich gar kein IT-Mensch bin?</div>
              <div class="collapse-content text-base-content">
                <p>Genau dann ist das der richtige Service. Wir übersetzen deine Prozesse in Automationen, du musst nur sagen "Wenn das passiert, soll das passieren". Den Rest — Tools wählen, einrichten, betreiben — machen wir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
```

- [ ] **Step 3: Verify**

Refresh page. Scroll through entire page top-to-bottom: every section in order (Nav, Hero, Stack, Lösung, Leistungen, UseCases, Prozess, DSGVO, Pricing, Keywords, Regionale, CTA, FAQ, Contact, Footer). Click "Pakete" in nav — should scroll to Pricing. Click each FAQ — accordion opens.

- [ ] **Step 4: Commit**

```bash
git add pages/ki-automatisierung.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add Keywords, RegionalePraesenz, CTA and FAQ sections to KI-Automatisierung page"
```

---

## Task 12: Update `components/ServicesShowcase.vue` — add 3rd card

**Files:**
- Modify: `components/ServicesShowcase.vue`

- [ ] **Step 1: Change the grid class**

Find:
```vue
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
```

Replace with:
```vue
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
```

- [ ] **Step 2: Add 3rd `<NuxtLink>` card immediately before the closing `</div>` of the grid (after the Google Ads card's closing `</NuxtLink>`)**

```vue
        <!-- KI-Automatisierung Card -->
        <NuxtLink
          to="/ki-automatisierung"
          class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-base-200 to-base-300 p-1 transition-all duration-300 hover:shadow-xl hover:shadow-[#f60]/10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="relative overflow-hidden rounded-xl bg-base-100 p-6 h-full">
            <div class="absolute inset-0 bg-gradient-to-br from-[#f60]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div class="relative z-10 flex flex-col h-full">
              <div class="flex items-start gap-4 mb-4">
                <div class="flex-shrink-0 w-12 h-12 bg-[#f60]/10 rounded-xl flex items-center justify-center group-hover:bg-[#f60] group-hover:scale-110 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-[#f60] group-hover:text-white transition-colors duration-300"
                  >
                    <rect x="3" y="11" width="18" height="10" rx="2"/>
                    <circle cx="12" cy="5" r="2"/>
                    <path d="M12 7v4"/>
                    <line x1="8" y1="16" x2="8" y2="16"/>
                    <line x1="16" y1="16" x2="16" y2="16"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-base-content group-hover:text-[#f60] transition-colors duration-300">
                    KI-Automatisierung
                  </h3>
                  <p class="text-base-content/60 text-sm mt-1">
                    Workflows &amp; KI-Agenten, die für dich arbeiten
                  </p>
                </div>
              </div>

              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 text-xs font-medium bg-[#f60]/10 text-[#f60] rounded-full">n8n / Make / Zapier</span>
                <span class="px-3 py-1 text-xs font-medium bg-[#f60]/10 text-[#f60] rounded-full">DSGVO-konform</span>
                <span class="px-3 py-1 text-xs font-medium bg-[#f60]/10 text-[#f60] rounded-full">Personal sparen</span>
              </div>

              <div class="mt-auto flex items-center text-[#f60] font-medium text-sm">
                <span class="group-hover:mr-2 transition-all duration-300">Mehr erfahren</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="transform group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </NuxtLink>
```

- [ ] **Step 3: Verify**

Open `http://localhost:3000/` — ServicesShowcase shows 3 cards. On `lg` viewport: 3 columns. On `md`: 2+1. On mobile: stacked.

- [ ] **Step 4: Commit**

```bash
git add components/ServicesShowcase.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add KI-Automatisierung card to ServicesShowcase, expand grid to 3 columns"
```

---

## Task 13: Update `components/Pricing.vue` — replace toggle with 3 service-entry cards

**Files:**
- Modify: `components/Pricing.vue` (full replacement of the file)

This task does **not** preserve the previous web/ads toggle; per the spec, the homepage Pricing becomes three service-entry cards that link to the respective service-page pricing. The detailed packages keep living on each service page. CTAs link to: `/google-ads`, `/website-erstellen-lassen`, `/ki-automatisierung#pricing` (only the KI page currently has a `#pricing` anchor — the other two scroll to top and let the user explore).

- [ ] **Step 1: Replace the file entirely with this content**

```vue
<template>
  <section
    id="pricing"
    class="py-24 bg-gradient-to-b from-base-200 to-base-100"
  >
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h3 class="text-lg text-[#f60] font-semibold mb-2" data-aos="fade-up">
          Transparente Preise
        </h3>
        <h2
          class="text-5xl text-base-content font-bold mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Unsere Pakete
        </h2>
        <p
          class="text-xl text-base-content max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Drei Standbeine, jedes mit eigenen Paketen. Wähle den Bereich, der dich
          interessiert — die Details findest du auf der jeweiligen Service-Seite.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <NuxtLink
          v-for="(svc, idx) in services"
          :key="svc.slug"
          :to="svc.href"
          class="card bg-base-100 shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 border border-[#f60]/20 hover:border-[#f60]"
          data-aos="fade-up"
          :data-aos-delay="idx * 100"
        >
          <div class="card-body">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-[#f60]/10 rounded-xl flex items-center justify-center">
                <span class="text-[#f60] text-2xl">{{ svc.emoji }}</span>
              </div>
              <h3 class="text-2xl font-bold text-base-content">{{ svc.title }}</h3>
            </div>
            <p class="text-base-content/70 mb-4">{{ svc.tagline }}</p>
            <p class="text-3xl font-bold text-[#f60] mb-1">{{ svc.priceFrom }}</p>
            <p class="text-sm text-base-content/60 mb-6">{{ svc.priceNote }}</p>
            <ul class="space-y-2 mb-6">
              <li v-for="(bullet, i) in svc.bullets" :key="i" class="flex items-center gap-2 text-base-content">
                <svg class="w-5 h-5 text-[#f60] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                {{ bullet }}
              </li>
            </ul>
            <div class="mt-auto flex items-center text-[#f60] font-semibold">
              <span>Pakete ansehen</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    slug: "websites",
    title: "Webdesign",
    href: "/website-erstellen-lassen",
    emoji: "🌐",
    tagline: "Conversion-starke Websites & Landingpages",
    priceFrom: "ab 499 €",
    priceNote: "pro Projekt",
    bullets: [
      "Landingpage, Firmen-Website, Enterprise",
      "Responsive & SEO-optimiert",
      "Hosting & Wartung optional",
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    href: "/google-ads",
    emoji: "🎯",
    tagline: "Performance-Kampagnen mit messbarem ROI",
    priceFrom: "ab 199 €",
    priceNote: "pro Monat",
    bullets: [
      "Starter, Professional, Enterprise",
      "Setup + monatliche Optimierung",
      "Transparente Reports",
    ],
  },
  {
    slug: "ki-automatisierung",
    title: "KI-Automatisierung",
    href: "/ki-automatisierung#pricing",
    emoji: "🤖",
    tagline: "Workflows & KI-Agenten ohne neues Personal",
    priceFrom: "ab 1.490 €",
    priceNote: "einmalig + Wartung",
    bullets: [
      "Starter, Business, Enterprise",
      "n8n / Make / Zapier · OpenAI / Anthropic",
      "DSGVO-konform",
    ],
  },
];
</script>
```

- [ ] **Step 2: Verify**

Open `http://localhost:3000/` and scroll to Pricing. 3 cards visible. Hover scales the card. Clicking each card navigates to the respective service. The 3rd card scrolls to the `#pricing` anchor on the KI page.

- [ ] **Step 3: Commit**

```bash
git add components/Pricing.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Replace homepage Pricing toggle with 3 service-entry cards"
```

---

## Task 14: Update `pages/index.vue` — Hero subtitle, 4th bullet, Bio updates

**Files:**
- Modify: `pages/index.vue`

- [ ] **Step 1: Update hero paragraph**

Find (around line 26–29):
```vue
          <p class="text-xl lg:text-2xl mb-6 text-white">
            Wir bauen Websites, die verkaufen und schalten Google Ads, die sich
            rechnen. Alles aus einer Hand.
          </p>
```

Replace with:
```vue
          <p class="text-xl lg:text-2xl mb-6 text-white">
            Wir bauen Websites, die verkaufen, schalten Google Ads, die sich
            rechnen, und automatisieren Prozesse mit KI. Alles aus einer Hand.
          </p>
```

- [ ] **Step 2: Add 4th bullet between "Transparentes Reporting & Tracking" and "Persönliche Betreuung statt Agentur-Fließband"**

Locate the bullet block (around lines 86–103). Insert a new bullet block immediately after the "Transparentes Reporting & Tracking" `</div>` and immediately before the "Persönliche Betreuung…" `<div class="flex items-center gap-3">`:

```vue
            <div class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4"
                ></path>
              </svg>
              <span class="text-lg text-white"
                >KI-Automationen, die Zeit &amp; Personal sparen</span
              >
            </div>
```

- [ ] **Step 3: Update Naumche-bio card title**

Find (around line 676):
```vue
            <h3 class="text-3xl font-bold text-[#f60] mb-4">
              Webentwickler & Google Ads Spezialist
            </h3>
```

Replace with:
```vue
            <h3 class="text-3xl font-bold text-[#f60] mb-4">
              Webentwickler, Google Ads Spezialist &amp; Automation Engineer
            </h3>
```

- [ ] **Step 4: Replace the third bio paragraph**

Find (around lines 691–696):
```vue
            <p class="text-lg text-white mb-4">
              Unterstützt werde ich von einem Netzwerk aus Freelancern, die mich
              je nach Projekt in verschiedenen Bereichen ergänzen. So bekommst
              du die beste Kombination aus fundierter Expertise, Flexibilität
              und praxisnahen Lösungen.
            </p>
```

Replace with:
```vue
            <p class="text-lg text-white mb-4">
              Seit Jahren baue ich nicht nur Websites und Kampagnen, sondern
              auch die Workflows dahinter — von Lead-Routing bis KI-Agenten.
              Diese drei Bereiche wachsen zusammen, und genau diese Verbindung
              ist das, was meinen Kunden den größten Hebel bringt.
            </p>
```

- [ ] **Step 5: Add two new badges**

Find the badges block (around lines 697–707):
```vue
            <div class="flex flex-wrap gap-3">
              <div class="badge badge-lg border-none bg-[#f60] text-white">
                Google Ads zertifiziert
              </div>
              <div class="badge badge-lg border-none bg-[#f60] text-white">
                Analytics Experte
              </div>
              <div class="badge badge-lg border-none bg-[#f60] text-white">
                Performance Marketing
              </div>
            </div>
```

Replace with:
```vue
            <div class="flex flex-wrap gap-3">
              <div class="badge badge-lg border-none bg-[#f60] text-white">
                Google Ads zertifiziert
              </div>
              <div class="badge badge-lg border-none bg-[#f60] text-white">
                Analytics Experte
              </div>
              <div class="badge badge-lg border-none bg-[#f60] text-white">
                Performance Marketing
              </div>
              <div class="badge badge-lg border-none bg-[#f60] text-white">
                Workflow-Automatisierung
              </div>
              <div class="badge badge-lg border-none bg-[#f60] text-white">
                KI-Agenten / LLM-Integration
              </div>
            </div>
```

- [ ] **Step 6: Verify**

Open `http://localhost:3000/`. Hero shows updated subtitle and 5 bullets (4th = "KI-Automationen…"). Scroll to Über-Mich: title is "Webentwickler, Google Ads Spezialist & Automation Engineer", third bio paragraph is the new wording, 5 badges visible.

- [ ] **Step 7: Commit**

```bash
git add pages/index.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Update homepage hero and Naumche bio for KI-Automatisierung pillar"
```

---

## Task 15: Update `components/Navigation.vue` — add Leistungen dropdown, drop "Ablauf"

**Files:**
- Modify: `components/Navigation.vue`

- [ ] **Step 1: Update the `sections` array**

Find (around line 148):
```js
const sections = [
  { id: "losung", name: "Lösung" },
  { id: "fakten", name: "Fakten" },
  { id: "ablauf", name: "Ablauf" },
  { id: "uber-mich", name: "Über uns" },
  { id: "faq", name: "FAQ" },
];
```

Replace with:
```js
const sections = [
  { id: "losung", name: "Lösung" },
  { id: "fakten", name: "Fakten" },
  { id: "uber-mich", name: "Über uns" },
  { id: "faq", name: "FAQ" },
];
```

- [ ] **Step 2: Add Leistungen-Dropdown as the first item in the Desktop menu**

Find the desktop `<ul class="menu menu-horizontal px-1 gap-8">` block (around line 47). Insert this `<li>` **immediately** after the opening `<ul …>` tag, so the Dropdown is the first item:

```vue
          <li>
            <details class="dropdown">
              <summary class="hover:text-[#f60] text-base-content transition-colors duration-300 font-bold navi-items cursor-pointer">
                Leistungen
              </summary>
              <ul class="menu dropdown-content bg-base-100 rounded-box z-[60] w-60 p-2 shadow mt-2">
                <li><NuxtLink to="/google-ads" class="text-base-content hover:text-[#f60]">Google Ads</NuxtLink></li>
                <li><NuxtLink to="/website-erstellen-lassen" class="text-base-content hover:text-[#f60]">Webdesign</NuxtLink></li>
                <li><NuxtLink to="/ki-automatisierung" class="text-base-content hover:text-[#f60]">KI-Automatisierung</NuxtLink></li>
              </ul>
            </details>
          </li>
```

- [ ] **Step 3: Add Leistungen sub-menu to the Mobile menu**

Find the mobile menu `<ul class="menu menu-vertical px-4 py-2">` block (around line 86). Insert this `<li>` immediately after the opening `<ul …>` tag:

```vue
        <li>
          <details>
            <summary class="text-white hover:text-[#f60] font-semibold">Leistungen</summary>
            <ul>
              <li><NuxtLink to="/google-ads" class="text-white hover:text-[#f60]" @click="isMenuOpen = false">Google Ads</NuxtLink></li>
              <li><NuxtLink to="/website-erstellen-lassen" class="text-white hover:text-[#f60]" @click="isMenuOpen = false">Webdesign</NuxtLink></li>
              <li><NuxtLink to="/ki-automatisierung" class="text-white hover:text-[#f60]" @click="isMenuOpen = false">KI-Automatisierung</NuxtLink></li>
            </ul>
          </details>
        </li>
```

- [ ] **Step 4: Verify**

Open `http://localhost:3000/`. Desktop nav: Leistungen dropdown is first, Lösung/Fakten/Über uns/FAQ/Blog follow. No "Ablauf" link. Click Leistungen → 3 entries appear. Click each → navigates to the right page. Mobile: burger menu shows Leistungen as collapsible block.

- [ ] **Step 5: Commit**

```bash
git add components/Navigation.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add Leistungen dropdown to main Navigation, drop Ablauf link"
```

---

## Task 16: Update `components/google-ads/Navigation.vue` — add Leistungen dropdown

**Files:**
- Modify: `components/google-ads/Navigation.vue`

- [ ] **Step 1: Add Leistungen-Dropdown as the first item in the Desktop menu**

Find the desktop `<ul class="menu menu-horizontal px-1 gap-8">` block. Insert this `<li>` **immediately after** the opening `<ul …>` tag:

```vue
          <li>
            <details class="dropdown">
              <summary class="hover:text-[#f60] text-base-content transition-colors duration-300 font-bold navi-items cursor-pointer">
                Leistungen
              </summary>
              <ul class="menu dropdown-content bg-base-100 rounded-box z-[60] w-60 p-2 shadow mt-2">
                <li><router-link to="/google-ads" class="text-[#f60] font-semibold">Google Ads</router-link></li>
                <li><router-link to="/website-erstellen-lassen" class="text-base-content hover:text-[#f60]">Webdesign</router-link></li>
                <li><router-link to="/ki-automatisierung" class="text-base-content hover:text-[#f60]">KI-Automatisierung</router-link></li>
              </ul>
            </details>
          </li>
```

- [ ] **Step 2: Add Leistungen to Mobile menu**

Find the mobile `<ul class="menu menu-vertical px-4 py-2">` block. Insert immediately after opening `<ul …>` tag:

```vue
        <li>
          <details>
            <summary class="text-base-content hover:text-[#f60] font-semibold">Leistungen</summary>
            <ul>
              <li><router-link to="/google-ads" class="text-[#f60] font-semibold" @click="isMenuOpen = false">Google Ads</router-link></li>
              <li><router-link to="/website-erstellen-lassen" class="text-base-content hover:text-[#f60]" @click="isMenuOpen = false">Webdesign</router-link></li>
              <li><router-link to="/ki-automatisierung" class="text-base-content hover:text-[#f60]" @click="isMenuOpen = false">KI-Automatisierung</router-link></li>
            </ul>
          </details>
        </li>
```

- [ ] **Step 3: Verify**

Open `http://localhost:3000/google-ads`. Leistungen dropdown is first item; "Google Ads" inside dropdown is highlighted orange. Switching from `/google-ads` to `/ki-automatisierung` via the dropdown works.

- [ ] **Step 4: Commit**

```bash
git add components/google-ads/Navigation.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add Leistungen dropdown to google-ads Navigation"
```

---

## Task 17: Update `components/webseite/Navigation.vue` — add Leistungen dropdown

**Files:**
- Modify: `components/webseite/Navigation.vue`

Apply the exact same pattern as Task 16, but with "Webdesign" highlighted instead of "Google Ads".

- [ ] **Step 1: Read the file first to confirm structure**

Open `components/webseite/Navigation.vue` and confirm it follows the same layout as `components/google-ads/Navigation.vue` (logo + horizontal menu + theme switcher + CTA on desktop; collapsible mobile menu).

- [ ] **Step 2: Add Leistungen-Dropdown as the first item in the Desktop menu**

Insert this `<li>` immediately after the opening `<ul …>` tag of the desktop horizontal menu:

```vue
          <li>
            <details class="dropdown">
              <summary class="hover:text-[#f60] text-base-content transition-colors duration-300 font-bold navi-items cursor-pointer">
                Leistungen
              </summary>
              <ul class="menu dropdown-content bg-base-100 rounded-box z-[60] w-60 p-2 shadow mt-2">
                <li><router-link to="/google-ads" class="text-base-content hover:text-[#f60]">Google Ads</router-link></li>
                <li><router-link to="/website-erstellen-lassen" class="text-[#f60] font-semibold">Webdesign</router-link></li>
                <li><router-link to="/ki-automatisierung" class="text-base-content hover:text-[#f60]">KI-Automatisierung</router-link></li>
              </ul>
            </details>
          </li>
```

- [ ] **Step 3: Add the same dropdown to the Mobile menu's opening `<ul …>`**

```vue
        <li>
          <details>
            <summary class="text-base-content hover:text-[#f60] font-semibold">Leistungen</summary>
            <ul>
              <li><router-link to="/google-ads" class="text-base-content hover:text-[#f60]" @click="isMenuOpen = false">Google Ads</router-link></li>
              <li><router-link to="/website-erstellen-lassen" class="text-[#f60] font-semibold" @click="isMenuOpen = false">Webdesign</router-link></li>
              <li><router-link to="/ki-automatisierung" class="text-base-content hover:text-[#f60]" @click="isMenuOpen = false">KI-Automatisierung</router-link></li>
            </ul>
          </details>
        </li>
```

If the existing file uses `text-white` for mobile menu items (older google-ads pattern), keep that class for the mobile sub-items to stay visually consistent within that nav.

- [ ] **Step 4: Verify**

Open `http://localhost:3000/website-erstellen-lassen`. Leistungen dropdown present; "Webdesign" inside dropdown is highlighted.

- [ ] **Step 5: Commit**

```bash
git add components/webseite/Navigation.vue
git -c user.email=info@orangize.de -c user.name=orangize-digital commit -m "Add Leistungen dropdown to webseite Navigation"
```

---

## Task 18: Full build + generate verification

**Files:** none

- [ ] **Step 1: Run production build**

```bash
npm run build
```
Expected: completes without errors. Watch for any "Cannot find module" warnings related to the new files.

- [ ] **Step 2: Run static generation (Netlify target)**

```bash
npm run generate
```
Expected: completes; `.output/public/ki-automatisierung/index.html` exists.

- [ ] **Step 3: Verify generated file exists**

```bash
ls .output/public/ki-automatisierung/
```
Expected: `index.html` listed.

- [ ] **Step 4: Spot-check generated HTML contains key content**

```bash
grep -c "KI-Automatisierung" .output/public/ki-automatisierung/index.html
grep -c "Workflow-Automatisierung" .output/public/ki-automatisierung/index.html
grep -c "ab 1.490" .output/public/ki-automatisierung/index.html
```
Expected: each grep returns at least `1`.

- [ ] **Step 5: If everything passed, no commit needed (no file changes). If build/generate produced any new generated files that landed in tracked dirs, do NOT commit them — `.gitignore` should already cover `.output/` and `.nuxt/`. Confirm `git status` is clean.**

```bash
git status
```
Expected: "nothing to commit, working tree clean".

---

## Self-Review

**Spec coverage:**

- ✅ Architektur & Dateilayout → Tasks 1–3
- ✅ Page Sektionen 1 (Hero), 2 (Tools), 3 (Lösung), 4 (Leistungen), 5 (UseCases), 6 (Prozess), 7 (DSGVO), 8 (Pricing), 9 (Keywords), 10 (Regionale), 11 (CTA), 12 (FAQ), 13 (Kontakt), 14 (Footer) → Tasks 3, 4, 5, 6, 7, 8, 9, 10, 11
- ✅ Leistungen-Karten (3 cards w/ PricingModal) → Task 6
- ✅ Pricing (Starter/Business/Enterprise + Disclaimer) → Task 10
- ✅ Homepage Hero (subtitle + bullet) → Task 14
- ✅ ServicesShowcase (3rd card + grid) → Task 12
- ✅ Homepage Pricing redesign (3 service-entry cards) → Task 13
- ✅ Naumche-Bio (title + para + badges) → Task 14
- ✅ Hauptnavigation Leistungen-Dropdown + Ablauf entfernt → Task 15
- ✅ Service-Page Navis Leistungen-Dropdown → Tasks 16, 17 (google-ads, webseite); KI-page itself includes it via Task 1
- ✅ SEO/Meta useHead → Task 3
- ✅ Build verification → Task 18

**Not in tasks (intentionally per spec's "Out of Scope"):** Stadt-Pages, Branchen-Pages, Audit-Form, Blog-Posts, Analytics events, A/B-Tests, Backend changes, KI-Hero-Image.

**Placeholder scan:** None — every step contains executable content. Asset placeholder for hero image is handled by reusing `google-ads-hero.jpeg` until a real asset is provided (documented in File Structure section).

**Type/name consistency:**
- `PricingModal` interest strings used in Task 6 (`KI-Workflow Setup`, `KI-Agent maßgeschneidert`, `KI-Automation Beratung & Audit`) and Task 10 (`KI Starter`, `KI Business`, `KI Enterprise`) — all 6 are distinct intentionally (Leistungen-cards and Pricing-cards trigger different modal contexts).
- Section IDs (`losung`, `leistungen`, `prozess`, `dsgvo`, `pricing`, `faq`, `kontakt`) match between Task 1 (Navigation sections array) and the section IDs introduced in Tasks 5/6/8/9/10/11.
- Auto-import: `<KiAutomatisierungRegionalePraesenz />` in Task 11 → Nuxt auto-imports from `components/ki-automatisierung/RegionalePraesenz.vue` as `KiAutomatisierungRegionalePraesenz`. Confirmed naming convention.
- Component import paths in `pages/ki-automatisierung.vue` (Task 3) all use relative paths from `pages/`, matching `pages/google-ads.vue`'s style.

---

## Execution Handoff

**Plan complete and saved to `docs/superpowers/plans/2026-05-31-ki-automatisierung.md`. Two execution options:**

**1. Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration.

**2. Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints.

**Which approach?**
