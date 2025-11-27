<template>
  <div>
    <Navigation />
    <main
      class="min-h-screen flex flex-col items-center justify-center text-center p-6"
    >
      <div class="mt-[200px]">
        <h1 class="text-4xl text-white font-bold mb-4">Datenschutz</h1>
        <p class="text-lg">Ihre Privatsphäre bei Orangize Digital</p>
      </div>

      <section
        id="datenschutz-content"
        class="text-left max-w-3xl mx-auto mt-6"
      >
        <div id="lc-text" class="break-words break-all overflow-hidden w-full">
          <p class="text-orange-500">Lade Datenschutz...</p>
        </div>
      </section>

      <router-link to="/" class="mt-6 btn btn-primary">
        Zurück zur Startseite
      </router-link>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";

onMounted(() => {
  fetch(
    `https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/8477755ff48ecca580777fc5810930b3/document/render/html?language=de`
  )
    .then((result) => {
      return result.text();
    })
    .then((content) => {
      document.getElementById("lc-text").innerHTML = content;
    });
});
</script>

<style>
h2 {
  font-size: 2rem !important;
  color: white;
  margin: 1rem 0 !important;
}
</style>
