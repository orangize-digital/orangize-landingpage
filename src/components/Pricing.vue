<template>
  <section id="pricing" class="py-20 bg-base-200">
    <div class="container mx-auto px-4">
      <h2
        class="text-4xl text-white font-bold text-center mb-6"
        data-aos="fade-up"
      >
        Unsere Pakete
      </h2>

      <!-- Toggle Switch -->
      <div class="flex justify-center mb-12">
        <button
          @click="activeCategory = 'web'"
          :class="
            activeCategory === 'web'
              ? 'bg-[#f60] text-white'
              : 'bg-white text-[#f608]'
          "
          class="px-6 py-2 rounded-l-lg text-lg font-semibold transition-all duration-300"
        >
          Web-Projekte
        </button>
        <button
          @click="activeCategory = 'ads'"
          :class="
            activeCategory === 'ads'
              ? 'bg-[#f60] text-white'
              : 'bg-white text-[#f608]'
          "
          class="px-6 py-2 rounded-r-lg text-lg font-semibold transition-all duration-300"
        >
          Google Ads
        </button>
      </div>

      <!-- Pricing Plans -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(plan, index) in pricingPlans[activeCategory]"
          :key="index"
          class="card bg-base-100 shadow-xl"
          :class="{ 'border-2 border-[#f60] relative': plan.popular }"
          data-aos="fade-up"
          :data-aos-delay="plan.delay"
        >
          <div
            v-if="plan.popular"
            class="absolute -top-4 left-1/2 transform -translate-x-1/2"
          >
            <div class="badge badge-primary bg-[#f60] border-[#f60]">
              Beliebt
            </div>
          </div>
          <div
            class="card-body rounded-3xl hover:scale-x-10 bg-black overflow-hidden"
          >
            <h3 class="card-title text-2xl font-bold mb-4">{{ plan.name }}</h3>
            <p class="text-4xl font-bold mb-6">
              {{ plan.price }}
              <span class="text-base font-normal">{{ plan.period }}</span>
            </p>
            <ul class="space-y-3 mb-8">
              <li
                v-for="(feature, i) in plan.features"
                :key="i"
                class="flex items-center gap-2"
              >
                <svg
                  class="w-5 h-5 text-[#f60]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
                {{ feature }}
              </li>
            </ul>
            <button
              :class="plan.buttonClass"
              class="btn text-white w-full"
              @click="$refs.pricingModal.openModal(plan.name)"
            >
              {{ plan.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <PricingModal ref="pricingModal" />
  </section>
</template>

<script>
import PricingModal from "./PricingModal.vue";
export default {
  components: { PricingModal },
  data() {
    return {
      activeCategory: "web",
      pricingPlans: {
        web: [
          {
            name: "Landingpage",
            price: "ab €499",
            period: "/Projekt",
            features: [
              "1 Seite",
              "Responsive Design",
              "SEO-Grundoptimierung",
              "Plus 100 EUR für Extra-Seiten wie Impressum oder Datenschutz",
            ],
            buttonText: "Jetzt starten",
            buttonClass: "btn-outline hover:bg-[#f60] hover:border-[#f60]",
            delay: 0,
          },
          {
            name: "Firmen Webseite",
            price: "ab €799",
            period: "/Projekt",
            features: [
              "Bis zu 5 Seiten",
              "Responsive Design",
              "SEO-Optimierung",
              "Kontaktformular",
              "Plus 100 EUR für zusätzliche Seiten",
            ],
            buttonText: "Jetzt starten",
            buttonClass: "btn-primary bg-[#f60] border-none hover:bg-[#ff751a]",
            delay: 200,
            popular: true,
          },
          {
            name: "Enterprise",
            price: "Individuell",
            period: "",
            features: [
              "Unbegrenzte Seiten",
              "Individuelles Design",
              "24/7 Support",
              "SEO-Optimierung",
              "Integration von externen Systemen",
              "Performance-Analyse",
              "A/B-Testing & Experimente",
              "Zielgruppen-Optimierung",
            ],
            buttonText: "Kontakt aufnehmen",
            buttonClass: "btn-outline hover:bg-[#f60] hover:border-[#f60]",
            delay: 400,
          },
        ],
        ads: [
          {
            name: "Starter",
            price: "ab €300",
            period: "/Monat",
            features: [
              "Setup-Gebühr: 300 EUR",
              "Optimierung: ab 300 EUR monatlich",
              "Grund-Setup: Einrichtung und erste Konfiguration",
              "Performance-Analyse für kontinuierliche Verbesserung",
            ],
            buttonText: "Jetzt starten",
            buttonClass: "btn-outline hover:bg-[#f60] hover:border-[#f60]",
            delay: 0,
          },
          {
            name: "Professional",
            price: "ab €500",
            period: "/Monat",
            features: [
              "Setup-Gebühr: 500 EUR",
              "Optimierung: ab 500 EUR monatlich",
              "Erweitertes Setup: Detaillierte Anpassungen & Optimierungen",
              "Monatliche Analyse & Optimierung für nachhaltiges Wachstum",
              "Zugriff auf Performance-Dashboard",
            ],
            buttonText: "Jetzt starten",
            buttonClass: "btn-primary bg-[#f60] border-none hover:bg-[#ff751a]",
            delay: 200,
            popular: true,
          },
          {
            name: "Enterprise",
            price: "Individuell",
            period: "",
            features: [
              "Setup-Gebühr",
              "Optimierung",
              "Komplettes Setup: Umfassende technische & strategische Optimierung",
              "A/B-Testing & Experimente",
              "Zielgruppen-Optimierung: Dynamic Remarketing & Lookalike Audiences",
              "Detailliertes Reporting mit Handlungsempfehlungen",
            ],
            buttonText: "Kontakt aufnehmen",
            buttonClass: "btn-outline hover:bg-[#f60] hover:border-[#f60]",
            delay: 400,
          },
        ],
      },
    };
  },
};
</script>
