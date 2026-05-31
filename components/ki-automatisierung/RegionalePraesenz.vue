<template>
  <section class="py-20 bg-base-200">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
          Regionale Präsenz
        </h3>
        <h2
          class="text-4xl text-base-content font-bold mt-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          KI-Automatisierung in ganz Ostwestfalen
        </h2>
        <p
          class="text-lg text-base-content/80 max-w-2xl mx-auto mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Wir arbeiten mit Unternehmen in der gesamten Region OWL — persönlich
          erreichbar, vor Ort wenn nötig, immer pragmatisch.
        </p>
      </div>

      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
      >
        <div
          v-for="(city, idx) in cities"
          :key="city"
          class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center hover:border-[#f60] transition-colors duration-300"
          data-aos="fade-up"
          :data-aos-delay="idx * 75"
        >
          <p class="text-base-content font-medium">{{ city }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cities = [
  "Herford",
  "Bielefeld",
  "Minden",
  "Bünde",
  "Bad Oeynhausen",
  "Porta Westfalica",
];
</script>
