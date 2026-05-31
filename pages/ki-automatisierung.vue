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
