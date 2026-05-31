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
