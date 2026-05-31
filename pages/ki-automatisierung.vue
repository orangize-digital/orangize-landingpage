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
