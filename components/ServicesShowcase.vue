<template>
  <section class="py-20 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
          Unsere Kernkompetenzen
        </h3>
        <h2
          class="text-4xl text-base-content font-bold mt-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Digitale Lösungen für Ihren Erfolg
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <!-- Website erstellen Card -->
        <NuxtLink
          to="/website-erstellen-lassen"
          class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-base-200 to-base-300 p-1 transition-all duration-300 hover:shadow-xl hover:shadow-[#f60]/10"
          data-aos="fade-up"
        >
          <div class="relative overflow-hidden rounded-xl bg-base-100 p-6 h-full">
            <!-- Background gradient on hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#f60]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div class="relative z-10 flex flex-col h-full">
              <!-- Icon and Title Row -->
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
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-base-content group-hover:text-[#f60] transition-colors duration-300">
                    Website erstellen lassen
                  </h3>
                  <p class="text-base-content/60 text-sm mt-1">
                    Professionelle Websiten die konvertieren
                  </p>
                </div>
              </div>

              <!-- Features -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 text-xs font-medium bg-[#f60]/10 text-[#f60] rounded-full">
                  Responsive
                </span>
                <span class="px-3 py-1 text-xs font-medium bg-[#f60]/10 text-[#f60] rounded-full">
                  SEO-Optimiert
                </span>
                <span class="px-3 py-1 text-xs font-medium bg-[#f60]/10 text-[#f60] rounded-full">
                  Conversion-stark
                </span>
              </div>

              <!-- Arrow -->
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
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Google Ads Card -->
        <NuxtLink
          to="/google-ads"
          class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-base-200 to-base-300 p-1 transition-all duration-300 hover:shadow-xl hover:shadow-[#f60]/10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="relative overflow-hidden rounded-xl bg-base-100 p-6 h-full">
            <!-- Background gradient on hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#f60]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div class="relative z-10 flex flex-col h-full">
              <!-- Icon and Title Row -->
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
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="m16 6-4 4-4-4" />
                    <path d="M16 18a4 4 0 0 0-8 0" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold text-base-content group-hover:text-[#f60] transition-colors duration-300">
                    Google Ads Kampagnen
                  </h3>
                  <p class="text-base-content/60 text-sm mt-1">
                    Maximaler ROI für Ihr Werbebudget
                  </p>
                </div>
              </div>

              <!-- Features -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 text-xs font-medium bg-[#f60]/10 text-[#f60] rounded-full">
                  Sofort sichtbar
                </span>
                <span class="px-3 py-1 text-xs font-medium bg-[#f60]/10 text-[#f60] rounded-full">
                  Messbar
                </span>
                <span class="px-3 py-1 text-xs font-medium bg-[#f60]/10 text-[#f60] rounded-full">
                  Kostenkontrolle
                </span>
              </div>

              <!-- Arrow -->
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
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- CTA Button -->
      <div class="text-center mt-10" data-aos="fade-up">
        <button
          class="btn btn-md text-white border-none bg-[#f60] hover:bg-[#ff751a] shadow-lg transition-all duration-300 hover:scale-105"
          onclick="window.open('https://zeeg.me/orangize', '_blank')"
        >
          Kostenlose Beratung vereinbaren
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  if (window.AOS) {
    window.AOS.refresh();
  }
});
</script>
