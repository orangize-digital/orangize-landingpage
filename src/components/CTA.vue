<template>
  <!-- CTA Section -->
  <section class="py-20 relative bg-neutral">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md opacity-50 bg-[url('@/assets/images/cta.jpg')]"
    ></div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <h2 class="text-4xl font-bold text-neutral-content mb-6 drop-shadow-lg">
        Bereit für Ihre neue Website?
      </h2>
      <p class="text-neutral-content text-xl mb-8 drop-shadow-lg">
        Lassen Sie uns gemeinsam Ihre perfekte Website erstellen!
      </p>
      <div class="flex flex-col items-center gap-4">
        <button
          class="btn btn-lg bg-[#f60] text-white border-none hover:bg-[#ff751a] shadow-lg animate-bounce"
          @click="openBookingLink"
        >
          Kostenloses Erstgespräch vereinbaren
        </button>
        <p class="text-neutral-content opacity-90">Unverbindlich & kostenlos</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const openBookingLink = () => {
  window.open("https://zeeg.me/orangize", "_blank");
};
</script>
