<template>
  <!-- CTA Section -->
  <section class="py-20 relative cta-section">
    <!-- Theme-aware overlay -->
    <div class="absolute inset-0 cta-overlay transition-colors duration-300"></div>
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md opacity-50"
      :style="`background-image: url('${ctaImage}')`"
    ></div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <h2 class="text-4xl font-bold cta-text mb-6 drop-shadow-lg">
        Bereit für Ihre neue Website?
      </h2>
      <p class="cta-text text-xl mb-8 drop-shadow-lg">
        Lassen Sie uns gemeinsam Ihre perfekte Website erstellen!
      </p>
      <div class="flex flex-col items-center gap-4">
        <button
          class="btn btn-lg bg-[#f60] text-white border-none hover:bg-[#ff751a] shadow-lg animate-bounce"
          @click="openBookingLink"
        >
          Kostenloses Erstgespräch vereinbaren
        </button>
        <p class="cta-text opacity-90">Unverbindlich & kostenlos</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import ctaImage from "~/assets/images/cta.jpg";

const openBookingLink = () => {
  window.open("https://zeeg.me/orangize", "_blank");
};
</script>
