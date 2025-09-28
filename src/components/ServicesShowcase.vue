<template>
  <section class="py-20 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
          Unsere Kernkompetenzen
        </h3>
        <h2
          class="text-4xl text-base-content font-bold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Digitale Lösungen für Ihren Erfolg
        </h2>
        <p
          class="mt-4 text-lg text-base-content max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Wir bieten maßgeschneiderte Strategien für Ihren Online-Erfolg - von
          der professionellen Webseite bis zur erfolgreichen Google Ads
          Kampagne.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Website erstellen Card -->
        <div
          class="card bg-base-200 shadow-xl border border-[#f60]/20 hover:border-[#f60] transition-all duration-300 overflow-hidden group"
          data-aos="fade-up"
        >
          <figure class="relative h-64 overflow-hidden">
            <img
              src="@/assets/images/website-erstellen-hero.jpg"
              alt="Webseite erstellen"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60"></div>
            <div class="absolute top-6 left-6">
              <div class="p-3 bg-[#f60] text-white rounded-full">
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
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h10" />
                  <path d="M7 12h10" />
                  <path d="M7 17h10" />
                </svg>
              </div>
            </div>
          </figure>
          <div class="card-body bg-base-100">
            <h3 class="text-2xl font-bold text-base-content mb-4">
              Webseite erstellen lassen
            </h3>
            <p class="text-base-content mb-6">
              Professionelle, maßgeschneiderte Webseiten, die nicht nur gut
              aussehen, sondern auch konvertieren und bei Google optimal ranken.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-base-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f60"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Responsive Design
              </li>
              <li class="flex items-center text-base-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f60"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                SEO-Optimierung
              </li>
              <li class="flex items-center text-base-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f60"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Conversion-Optimierung
              </li>
            </ul>
            <router-link
              to="/website-erstellen-lassen"
              class="btn bg-[#f60] text-white border-none hover:bg-[#ff751a] w-full"
            >
              Mehr erfahren
            </router-link>
          </div>
        </div>

        <!-- Google Ads Card -->
        <div
          class="card bg-base-200 shadow-xl border border-[#f60]/20 hover:border-[#f60] transition-all duration-300 overflow-hidden group"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <figure class="relative h-64 overflow-hidden">
            <img
              src="@/assets/images/google-ads-hero.png"
              alt="Google Ads"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-black bg-opacity-60"></div>
            <div class="absolute top-6 left-6">
              <div class="p-3 bg-[#f60] text-white rounded-full">
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
            </div>
          </figure>
          <div class="card-body bg-base-100">
            <h3 class="text-2xl font-bold text-base-content mb-4">
              Google Ads einrichten & optimieren
            </h3>
            <p class="text-base-content mb-6">
              Professionelle Google Ads Kampagnen, die Ihren ROI maximieren und
              gezielt neue Kunden für Ihr Unternehmen gewinnen.
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-base-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f60"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Sofortige Sichtbarkeit
              </li>
              <li class="flex items-center text-base-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f60"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Messbare Ergebnisse
              </li>
              <li class="flex items-center text-base-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f60"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-2"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Volle Kostenkontrolle
              </li>
            </ul>
            <router-link
              to="/google-ads"
              class="btn bg-[#f60] text-white border-none hover:bg-[#ff751a] w-full"
            >
              Mehr erfahren
            </router-link>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center mt-12" data-aos="fade-up">
        <button
          class="btn btn-md text-base-100 border-none bg-[#f60] hover:bg-[#ff751a] hover:text-white shadow-lg transition-colors duration-300"
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

// Wenn Sie AOS (Animate on Scroll) verwenden, können Sie es hier initialisieren
// Falls nicht, können Sie die data-aos Attribute entfernen
onMounted(() => {
  if (window.AOS) {
    window.AOS.refresh();
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
</style>
