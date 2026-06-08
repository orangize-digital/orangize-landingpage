<template>
  <section id="pricing" class="pricing-section">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h3 class="pricing-eyebrow" data-aos="fade-up">
          Transparente Preise
        </h3>
        <h2 class="pricing-headline" data-aos="fade-up" data-aos-delay="100">
          Für jeden Service ein klares Paket
        </h2>
        <p
          class="pricing-sub"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Vier Standbeine, jedes mit eigenen Paketen. Such dir den Bereich raus —
          die Details findest du auf der Service-Seite.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
        <NuxtLink
          v-for="(svc, idx) in services"
          :key="svc.slug"
          :to="svc.href"
          class="price-card group"
          data-aos="fade-up"
          :data-aos-delay="idx * 100"
        >
          <div class="price-card__head">
            <div class="price-card__icon" v-html="svc.icon"></div>
            <h3 class="price-card__title">{{ svc.title }}</h3>
          </div>
          <p class="price-card__tagline">{{ svc.tagline }}</p>
          <div class="price-card__price">
            <span class="price-card__from">ab</span>
            <span class="price-card__amount">{{ svc.priceFrom }}</span>
            <span class="price-card__note">{{ svc.priceNote }}</span>
          </div>
          <ul class="price-card__bullets">
            <li v-for="(bullet, i) in svc.bullets" :key="i">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="price-card__check"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {{ bullet }}
            </li>
          </ul>
          <div class="price-card__cta">
            <span>Pakete ansehen</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="price-card__arrow"
            >
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const ICON_WEBDESIGN = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="0"/>
  <path d="M3 8h18"/>
  <path d="M7 5.5h.01"/>
  <path d="M10 5.5h.01"/>
</svg>`;

const ICON_ADS = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <circle cx="12" cy="12" r="6"/>
  <circle cx="12" cy="12" r="2"/>
</svg>`;

const ICON_KI = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="11" width="18" height="10"/>
  <circle cx="12" cy="5" r="2"/>
  <path d="M12 7v4"/>
  <line x1="9" y1="16" x2="9" y2="16"/>
  <line x1="15" y1="16" x2="15" y2="16"/>
</svg>`;

const ICON_SOCIAL = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18" cy="5" r="3"/>
  <circle cx="6" cy="12" r="3"/>
  <circle cx="18" cy="19" r="3"/>
  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
</svg>`;

const services = [
  {
    slug: "websites",
    title: "Webdesign",
    href: "/website-erstellen-lassen",
    icon: ICON_WEBDESIGN,
    tagline: "Conversion-starke Websites & Landingpages",
    priceFrom: "499 €",
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
    icon: ICON_ADS,
    tagline: "Performance-Kampagnen mit messbarem ROI",
    priceFrom: "199 €",
    priceNote: "pro Monat",
    bullets: [
      "Starter, Professional, Enterprise",
      "Setup + monatliche Optimierung",
      "Transparente Reports",
    ],
  },
  {
    slug: "ki-automatisierung",
    title: "KI-Automation",
    href: "/ki-automatisierung#pricing",
    icon: ICON_KI,
    tagline: "Workflows & KI-Agenten ohne neues Personal",
    priceFrom: "1.490 €",
    priceNote: "einmalig + Wartung",
    bullets: [
      "Starter, Business, Enterprise",
      "n8n / Make / Zapier · OpenAI / Anthropic",
      "DSGVO-konform",
    ],
  },
  {
    slug: "social-media",
    title: "Social Media",
    href: "/social-media-betreuung#pricing",
    icon: ICON_SOCIAL,
    tagline: "Content & Betreuung, die sichtbar macht",
    priceFrom: "490 €",
    priceNote: "pro Monat",
    bullets: [
      "Starter, Wachstum, Premium",
      "Content, Community & Reporting",
      "Instagram · Facebook · LinkedIn · TikTok",
    ],
  },
];
</script>

<style scoped>
.pricing-section {
  padding: 6rem 0;
  background: linear-gradient(180deg, hsl(var(--b2)) 0%, hsl(var(--b1)) 100%);
}

.pricing-eyebrow {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #f60 !important;
  margin-bottom: 1rem;
}

.pricing-headline {
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: clamp(2.25rem, 4.5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.05;
  color: hsl(var(--bc)) !important;
}

.pricing-sub {
  margin-top: 1.5rem;
  font-size: 1.125rem;
  color: hsl(var(--bc) / 0.7) !important;
  line-height: 1.5;
}

.price-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: hsl(var(--b1));
  padding: 2.5rem 2rem;
  text-decoration: none;
  transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1),
    box-shadow 0.35s ease;
  box-shadow: 0 4px 20px -10px rgba(0, 0, 0, 0.15);
  isolation: isolate;
  overflow: hidden;
}

.price-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 102, 0, 0.05) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 0;
}

.price-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 60px -25px rgba(255, 102, 0, 0.4),
    0 4px 20px -10px rgba(0, 0, 0, 0.2);
}

.price-card:hover::before {
  opacity: 1;
}

.price-card > * {
  position: relative;
  z-index: 1;
}

.price-card__head {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.price-card__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f60;
  color: #ffffff !important;
  flex-shrink: 0;
}

.price-card__icon :deep(svg) {
  width: 26px;
  height: 26px;
  color: #ffffff !important;
  stroke: #ffffff !important;
}

.price-card__title {
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: hsl(var(--bc)) !important;
}

.price-card__tagline {
  color: hsl(var(--bc) / 0.65) !important;
  font-size: 0.95rem;
  margin-bottom: 1.75rem;
  line-height: 1.45;
}

.price-card__price {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-bottom: 1.75rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.price-card__from {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: hsl(var(--bc) / 0.5) !important;
}

.price-card__amount {
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 2.75rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #f60 !important;
  line-height: 1;
}

.price-card__note {
  font-size: 0.85rem;
  color: hsl(var(--bc) / 0.6) !important;
  font-weight: 500;
}

.price-card__bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex: 1;
}

.price-card__bullets li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.4rem 0;
  font-size: 0.95rem;
  color: hsl(var(--bc) / 0.85) !important;
  line-height: 1.4;
}

.price-card__check {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #f60 !important;
  stroke: #f60 !important;
  margin-top: 3px;
}

.price-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: #f60 !important;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.price-card__cta span {
  color: #f60 !important;
}

.price-card__arrow {
  width: 18px;
  height: 18px;
  color: #f60 !important;
  stroke: #f60 !important;
  transition: transform 0.3s ease;
}

.price-card:hover .price-card__arrow {
  transform: translateX(8px);
}

@media (max-width: 767px) {
  .pricing-section {
    padding: 4rem 0;
  }
  .price-card {
    padding: 2rem 1.5rem;
  }
}
</style>
