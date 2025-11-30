<template>
  <div>
    <Navigation />
    <!-- Hero Section -->
    <div
      class="hero min-h-[70vh] relative bg-[url('@/assets/images/google-ads-hero.jpeg')] lg:mt-0"
    >
      <div class="hero-overlay bg-black bg-opacity-80"></div>
      <div class="hero-content relative z-10 w-full lg:py-0 py-[100px]">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-4xl mx-auto">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              data-aos="fade-up"
            >
              Google Ads für
              <span class="text-[#f60]">Ihre Branche</span>
            </h1>
            <p
              class="text-xl text-white mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Branchenspezifische Google Ads Kampagnen, die genau auf die
              Bedürfnisse Ihres Geschäfts zugeschnitten sind. Maximaler ROI
              durch Expertise in Ihrer Branche.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <button
                class="btn bg-[#f60] text-white border-none hover:bg-[#f60]/90 text-lg px-8"
                @click="scrollToSection('kontakt')"
              >
                Kostenlose Beratung
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Google Certifications -->
    <GoogleCertifications />

    <!-- Branchen Overview Section -->
    <section class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Unsere Branchenexpertise
          </h3>
          <h2
            class="text-4xl text-base-content font-bold mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Google Ads Lösungen für jede Branche
          </h2>
          <p
            class="text-base-content/70 mt-4 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Jede Branche hat ihre eigenen Herausforderungen. Wir kennen sie und
            entwickeln maßgeschneiderte Google Ads Strategien für Ihren Erfolg.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Handwerk -->
          <NuxtLink
            to="/google-ads-handwerker"
            class="group card bg-base-100 shadow-xl border border-[#f60]/20 hover:border-[#f60] transition-all duration-300 hover:shadow-2xl hover:shadow-[#f60]/10"
            data-aos="fade-up"
          >
            <div class="card-body">
              <div
                class="w-16 h-16 bg-[#f60]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#f60] transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-[#f60] group-hover:text-white transition-colors duration-300"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                  <circle cx="12" cy="8" r="6" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-2 group-hover:text-[#f60] transition-colors">
                Handwerk
              </h3>
              <p class="text-base-content/70 mb-4">
                Elektriker, Maler, Dachdecker, Installateure und mehr. Lokale
                Sichtbarkeit für Handwerksbetriebe.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 text-xs font-medium bg-[#f60]/10 text-[#f60] rounded-full">
                  Lokale Suche
                </span>
                <span class="px-3 py-1 text-xs font-medium bg-[#f60]/10 text-[#f60] rounded-full">
                  Notdienst-Ads
                </span>
              </div>
              <div class="flex items-center text-[#f60] font-medium text-sm mt-auto">
                <span class="group-hover:mr-2 transition-all duration-300">Mehr erfahren</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </div>
            </div>
          </NuxtLink>

          <!-- Ärzte & Praxen -->
          <div
            class="card bg-base-100 shadow-xl border border-base-300 opacity-60"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="card-body">
              <div
                class="w-16 h-16 bg-base-200 rounded-xl flex items-center justify-center mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-base-content/50"
                >
                  <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content/50 mb-2">
                Ärzte & Praxen
              </h3>
              <p class="text-base-content/40 mb-4">
                Zahnärzte, Hausärzte, Fachärzte. Mehr Patienten durch gezielte
                Online-Werbung.
              </p>
              <span class="px-3 py-1 text-xs font-medium bg-base-200 text-base-content/50 rounded-full w-fit">
                Demnächst verfügbar
              </span>
            </div>
          </div>

          <!-- Rechtsanwälte -->
          <div
            class="card bg-base-100 shadow-xl border border-base-300 opacity-60"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="card-body">
              <div
                class="w-16 h-16 bg-base-200 rounded-xl flex items-center justify-center mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-base-content/50"
                >
                  <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content/50 mb-2">
                Rechtsanwälte
              </h3>
              <p class="text-base-content/40 mb-4">
                Kanzleien aller Fachrichtungen. Qualifizierte Mandanten durch
                Google Ads.
              </p>
              <span class="px-3 py-1 text-xs font-medium bg-base-200 text-base-content/50 rounded-full w-fit">
                Demnächst verfügbar
              </span>
            </div>
          </div>

          <!-- Immobilien -->
          <div
            class="card bg-base-100 shadow-xl border border-base-300 opacity-60"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="card-body">
              <div
                class="w-16 h-16 bg-base-200 rounded-xl flex items-center justify-center mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-base-content/50"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content/50 mb-2">
                Immobilien
              </h3>
              <p class="text-base-content/40 mb-4">
                Makler und Hausverwaltungen. Mehr Leads für Ihre Immobilien.
              </p>
              <span class="px-3 py-1 text-xs font-medium bg-base-200 text-base-content/50 rounded-full w-fit">
                Demnächst verfügbar
              </span>
            </div>
          </div>

          <!-- E-Commerce -->
          <div
            class="card bg-base-100 shadow-xl border border-base-300 opacity-60"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="card-body">
              <div
                class="w-16 h-16 bg-base-200 rounded-xl flex items-center justify-center mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-base-content/50"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content/50 mb-2">
                E-Commerce
              </h3>
              <p class="text-base-content/40 mb-4">
                Online-Shops und Händler. Google Shopping und Performance Max
                Kampagnen.
              </p>
              <span class="px-3 py-1 text-xs font-medium bg-base-200 text-base-content/50 rounded-full w-fit">
                Demnächst verfügbar
              </span>
            </div>
          </div>

          <!-- Ihre Branche -->
          <div
            class="card bg-gradient-to-br from-[#f60]/10 to-[#f60]/5 shadow-xl border border-[#f60]/30"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="card-body">
              <div
                class="w-16 h-16 bg-[#f60]/20 rounded-xl flex items-center justify-center mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f60"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-2">
                Ihre Branche?
              </h3>
              <p class="text-base-content/70 mb-4">
                Sie finden Ihre Branche nicht? Kein Problem! Kontaktieren Sie
                uns für eine individuelle Beratung.
              </p>
              <button
                class="btn bg-[#f60] text-white border-none hover:bg-[#f60]/90 w-full"
                @click="scrollToSection('kontakt')"
              >
                Jetzt anfragen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Warum Branchenexpertise Section -->
    <section class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Warum Branchenexpertise?
          </h3>
          <h2
            class="text-4xl text-base-content font-bold mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ihr Vorteil durch spezialisiertes Wissen
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="text-center" data-aos="fade-up">
            <div class="w-16 h-16 bg-[#f60]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8" /><path d="m4.93 10.93 1.41 1.41" /><path d="M2 18h2" /><path d="M20 18h2" /><path d="m19.07 10.93-1.41 1.41" /><path d="M22 22H2" /><path d="m16 6-4 4-4-4" /><path d="M16 18a4 4 0 0 0-8 0" /></svg>
            </div>
            <h4 class="text-xl font-bold text-base-content mb-2">Branchenspezifische Keywords</h4>
            <p class="text-base-content/70">
              Wir kennen die Suchbegriffe, die Ihre Zielgruppe wirklich verwendet.
            </p>
          </div>

          <div class="text-center" data-aos="fade-up" data-aos-delay="100">
            <div class="w-16 h-16 bg-[#f60]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
            </div>
            <h4 class="text-xl font-bold text-base-content mb-2">Optimierte Conversion</h4>
            <p class="text-base-content/70">
              Anzeigen und Landingpages, die in Ihrer Branche nachweislich funktionieren.
            </p>
          </div>

          <div class="text-center" data-aos="fade-up" data-aos-delay="200">
            <div class="w-16 h-16 bg-[#f60]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
            </div>
            <h4 class="text-xl font-bold text-base-content mb-2">Zielgenaues Targeting</h4>
            <p class="text-base-content/70">
              Erreichen Sie genau die Kunden, die Ihre Dienstleistungen suchen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTA />

    <!-- Kontaktformular Section -->
    <ContactForm />

    <!-- Floating Buttons -->
    <CTAFloatingButtons />

    <!-- Footer Section -->
    <Footer />
  </div>
</template>

<script setup>
// useHead is auto-imported by Nuxt
import { useRoute } from "vue-router";
import Navigation from "../components/google-ads/Navigation.vue";
import Footer from "../components/Footer.vue";
import ContactForm from "../components/ContactForm.vue";
import CTAFloatingButtons from "../components/FloatingCallButton.vue";
import CTA from "../components/CTA.vue";

const route = useRoute();

useHead({
  title: "Google Ads für Branchen | Handwerk, Ärzte, Anwälte & mehr | Orangize",
  meta: [
    {
      name: "description",
      content:
        "Branchenspezifische Google Ads Kampagnen für Handwerker, Ärzte, Rechtsanwälte, Immobilien und E-Commerce. Maximaler ROI durch Branchenexpertise. Kostenlose Beratung!",
    },
    {
      name: "keywords",
      content:
        "google ads branchen, google ads handwerker, google ads ärzte, google ads anwälte, google ads immobilien, google ads e-commerce, branchenspezifische werbung",
    },
    {
      property: "og:title",
      content: "Google Ads für Branchen | Handwerk, Ärzte, Anwälte & mehr | Orangize",
    },
    {
      property: "og:description",
      content:
        "Branchenspezifische Google Ads Kampagnen für maximalen ROI. Wir kennen die Herausforderungen Ihrer Branche.",
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
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
