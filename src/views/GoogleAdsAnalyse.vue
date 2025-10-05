<template>
  <div>
    <LandingPageNavigation />

    <!-- Hero Section -->
    <div
      class="hero min-h-[110vh] relative bg-[url('@/assets/images/google-ads-hero.jpeg')]"
    >
      <div class="hero-overlay bg-black bg-opacity-80"></div>
      <div
        class="hero-content relative z-10 w-full lg:py-0 py-[120px] max-w-7xl mx-auto px-4"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Side - Pain Points & Problem -->
          <div class="text-left text-white" data-aos="fade-right">
            <div class="mb-4">
              <span class="text-primary font-semibold text-lg">
                Kostenlose Google Ads Analyse
              </span>
            </div>
            <h1
              class="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Deine Google Ads Performance
              <span class="text-primary">kann besser werden</span>
            </h1>
            <p class="text-xl lg:text-2xl mb-6 text-white">
              Entdecke verborgene Optimierungen in deinem Google Ads Konto, die
              dir mehr Leads bei geringeren Kosten bringen.
            </p>

            <div class="space-y-4 mb-8">
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
                  >Keyword-Potentiale identifizieren</span
                >
              </div>
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
                  >Budget-Verschwendung stoppen</span
                >
              </div>
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
                  >Conversion-Raten optimieren</span
                >
              </div>
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
                <span class="text-lg text-white">ROI nachhaltig steigern</span>
              </div>
            </div>

            <div
              class="bg-primary/20 border border-white/30 rounded-lg p-6 mb-8"
            >
              <div class="flex items-start gap-3 mb-2">
                <svg
                  class="w-6 h-6 text-white mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <p class="text-lg font-semibold text-white">
                  Proven: Unsere Google Ads Optimierungen
                </p>
              </div>
              <p class="text-base ml-9 text-white">
                Durchschnittlich reduzieren wir die
                <strong class="text-primary">Werbekosten um 30%</strong>
                und steigern die Conversion-Rate um das Doppelte.
              </p>
            </div>
          </div>

          <!-- Right Side - Contact Form -->
          <div
            class="flex justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <HeroContactForm />
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 w-full flex justify-center">
        <a
          href="#"
          @click.prevent="scrollToSection('benefits')"
          class="text-white animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ffffff"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Trust Indicators -->
    <section class="py-12 bg-base-200">
      <div class="container mx-auto px-4">
        <ClientCarousel />
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-base-content mb-4">
            Deine persönliche Google Ads Optimierung
          </h2>
          <p class="text-xl text-base-content/80 max-w-3xl mx-auto">
            Profitiere von unserer jahrelangen Expertise und erhalte eine
            maßgeschneiderte Analyse deiner Google Ads Performance
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div
            class="card bg-base-200 shadow-xl border-none transition-all duration-300"
            data-aos="fade-up"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                Umfassende Performance-Analyse
              </h3>
              <p class="text-base-content/80">
                Systematische Bewertung deiner Kampagnenstruktur,
                Keyword-Performance und Anzeigenqualität mit professionellen
                Analyse-Tools
              </p>
            </div>
          </div>

          <div
            class="card bg-base-200 shadow-xl border-none transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.897-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                Präzise Einsparberechnung
              </h3>
              <p class="text-base-content/80">
                Datenbasierte Berechnung deines monatlichen
                Optimierungspotentials mit konkreten Euro-Beträgen und
                ROI-Prognosen
              </p>
            </div>
          </div>

          <div
            class="card bg-base-200 shadow-xl border-none transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                Prioritäts-Roadmap
              </h3>
              <p class="text-base-content/80">
                Strukturierter Umsetzungsplan mit den 5 wichtigsten
                Optimierungsmaßnahmen, sortiert nach Wirkungsgrad und
                Umsetzungsaufwand
              </p>
            </div>
          </div>

          <div
            class="card bg-base-200 shadow-xl border-none transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                KPI-Forecast
              </h3>
              <p class="text-base-content/80">
                Datengestützte Prognose für CTR, CPC, Conversion Rate und ROAS
                basierend auf vergleichbaren Optimierungsprojekten
              </p>
            </div>
          </div>

          <div
            class="card bg-base-200 shadow-xl border-none transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                Keyword-Gap-Analyse
              </h3>
              <p class="text-base-content/80">
                Identifikation ungenutzter Suchbegriffe mit hohem Potenzial
                durch Wettbewerbsanalyse und Suchvolumen-Research
              </p>
            </div>
          </div>

          <div
            class="card bg-base-200 shadow-xl border-none transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                Experten-Consultation
              </h3>
              <p class="text-base-content/80">
                Optionales 30-minütiges Strategiegespräch zur Erklärung der
                Analyseergebnisse und Diskussion des Optimierungsplans
              </p>
            </div>
          </div>
        </div>

        <!-- Performance Stats -->
        <div
          class="bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl p-8"
          data-aos="fade-up"
        >
          <h3 class="text-2xl font-bold text-center text-base-content mb-8">
            Unsere Google Ads Performance
          </h3>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">850.000€</div>
              <div class="text-base-content/80">verwaltetes Budget</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">12.5k</div>
              <div class="text-base-content/80">Impressionen</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">2.8k</div>
              <div class="text-base-content/80">Klicks generiert</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">450k€</div>
              <div class="text-base-content/80">Umsatz generiert</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-up">
            <img
              src="@/assets/images/Naumche.jpg"
              alt="Google Ads Experte"
              class="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          <div data-aos="fade-right">
            <h3 class="text-lg text-primary font-semibold mb-4">
              Über Performance Manager Orangize
            </h3>
            <h2 class="text-4xl font-bold text-base-content mb-6">
              Maximiere deine Google Ads Performance!
            </h2>
            <p class="text-lg text-base-content/80 mb-6">
              Mit über 4 Jahren Spezialisierung auf Google Ads Optimierung habe
              ich bereits über 850.000€ Euro Werbebudget erfolgreich verwaltet.
              Meine Expertise liegt in der systematischen Performance-Steigerung
              durch datengetriebene Optimierungen.
            </p>
            <p class="text-lg text-base-content/80 mb-8">
              Mein Ansatz: Durch präzise Analyse und gezielte
              Optimierungsmaßnahmen erreiche ich nachhaltige Kostensenkungen bei
              gleichzeitiger Steigerung der Lead-Qualität.
            </p>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
                <span class="text-base-content"
                  >4+ Jahre Google Ads Expertise</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
                <span class="text-base-content"
                  >Über 850.000€ verwaltetes Werbebudget</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
                <span class="text-base-content"
                  >100+ erfolgreiche Kampagnen</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
                <span class="text-base-content"
                  >Durchschnittlich 30% Kosteneinsparung</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-base-content mb-4">
            Häufig gestellte Fragen zum Google Ads Audit
          </h2>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" checked="checked" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Wie läuft die Analyse meines Google Ads Kontos ab?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Nach deiner Anfrage kontaktiere ich dich persönlich für ein
                  erstes Gespräch über deine aktuellen Herausforderungen und
                  Ziele. Anschließend erhältst du Lesezugriff für dein Google
                  Ads Konto, damit ich eine detaillierte Analyse durchführen
                  kann. Nach 1-2 Werktagen besprechen wir in einem zweiten
                  Termin die gefundenen Probleme und konkreten
                  Optimierungspotentiale.
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Was passiert mit meinen Google Ads Daten?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Deine Daten werden streng vertraulich behandelt und nur für
                  die Analyse verwendet. Wir benötigen lediglich Lesezugriff auf
                  dein Google Ads Konto, um eine fundierte Analyse durchführen
                  zu können. Alle Daten werden nach der Analyse wieder gelöscht.
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Ist die Google Ads Analyse wirklich kostenlos?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Ja, die Analyse ist 100% kostenlos und unverbindlich. Du gehst
                  keinerlei Verpflichtungen ein. Unser Ziel ist es, dir echten
                  Mehrwert zu bieten und zu zeigen, wie wir dir bei der
                  Optimierung helfen können.
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Für welche Branchen eignet sich Google Ads?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Google Ads funktioniert in nahezu allen Branchen - von
                  Handwerkern über E-Commerce bis hin zu B2B-Dienstleistern.
                  Besonders erfolgreich sind lokale Unternehmen, da hier die
                  Konkurrenz oft geringer und die Conversion-Rate höher ist.
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Wie viel Budget brauche ich mindestens für Google Ads?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Ein sinnvolles Mindestbudget liegt bei etwa 500€ pro Monat. Ab
                  diesem Budget können wir ausreichend Daten sammeln und
                  effektive Optimierungen durchführen. Bei kleineren Budgets ist
                  oft keine sinnvolle Optimierung möglich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-20 relative bg-neutral">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md opacity-50 bg-[url('@/assets/images/google-ads-hero.jpeg')]"
      ></div>

      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-4xl font-bold text-neutral-content mb-6 drop-shadow-lg">
          Starte jetzt deine Google Ads Optimierung
        </h2>
        <p
          class="text-neutral-content text-xl mb-8 drop-shadow-lg max-w-2xl mx-auto"
        >
          Die Anfrage dauert nur 1 Minute. Unsere detaillierte Analyse erhältst
          du innerhalb von 24-48 Stunden.
        </p>
        <div class="flex flex-col items-center gap-4">
          <button
            class="btn btn-lg bg-[#f60] text-white border-none hover:bg-[#ff751a] shadow-lg animate-bounce"
            @click="scrollToSection('hero')"
          >
            Kostenlose Google Ads Analyse anfordern
          </button>
          <p
            class="text-neutral-content opacity-90 flex items-center gap-4 text-sm"
          >
            <span class="flex items-center gap-1">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Kostenlos
            </span>
            <span class="flex items-center gap-1">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Unverbindlich
            </span>
            <span class="flex items-center gap-1">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Ergebnis in 24-48h
            </span>
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router";
import LandingPageNavigation from "../components/LandingPageNavigation.vue";
import Footer from "../components/Footer.vue";
import HeroContactForm from "../components/HeroContactForm.vue";
import ClientCarousel from "../components/ClientCarousel.vue";

const route = useRoute();

// SEO Meta Tags
useHead({
  title: "Google Ads Analyse kostenlos - Orangize Digital Marketing",
  meta: [
    {
      name: "description",
      content:
        "Kostenlose Google Ads Analyse ✓ Sparen Sie 30-50% Ihrer Werbekosten ✓ Detaillierte Auswertung in 24h ✓ Konkrete Optimierungsempfehlungen ✓ Unverbindlich & kostenfrei",
    },
    {
      name: "keywords",
      content:
        "google ads analyse, google ads audit, google ads optimierung, google ads kosten sparen, google ads beratung, sea analyse, adwords optimierung",
    },
    {
      property: "og:title",
      content:
        "Kostenlose Google Ads Analyse - Sparen Sie bis zu 50% Werbekosten",
    },
    {
      property: "og:description",
      content:
        "Erfahren Sie in 24h, wie Sie Ihre Google Ads Kosten um 30-50% reduzieren können. Kostenlose, unverbindliche Analyse mit konkreten Handlungsempfehlungen.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://orangize.de${route.path}`,
    },
  ],
});

// Scroll functionality

const scrollToSection = (id) => {
  const element =
    document.getElementById(id) || document.querySelector(".hero");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

onMounted(() => {
  // Initialize AOS if available
  if (window.AOS) {
    window.AOS.init({
      duration: 800,
      once: true,
    });
  }
});
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 102, 0, 0.2);
}

/* Custom form styling */
input:focus,
select:focus,
textarea:focus {
  border-color: #f60 !important;
  box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.1) !important;
}

/* Custom checkbox styling */
input[type="checkbox"]:checked {
  background-color: #f60 !important;
  border-color: #f60 !important;
}
</style>
