<template>
  <div>
    <Navigation />
    <main
      class="min-h-screen flex flex-col items-center justify-center text-center p-6"
    >
      <h1 class="text-4xl text-white font-bold mb-4">🎉 Danke für deine Nachricht!</h1>
      <p class="text-lg">Wir melden uns so schnell wie möglich bei dir.</p>
      <router-link to="/" class="mt-6 btn btn-primary"
        >Zurück zur Startseite</router-link
      >
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
</script>
