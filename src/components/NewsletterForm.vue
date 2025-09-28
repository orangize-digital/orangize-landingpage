<template>
  <!-- Newsletter Section -->
  <section class="py-20 bg-base-200">
    <div class="container mx-auto px-4 max-w-4xl">
      <div
        class="card bg-base-300 border border-[#f60] shadow-xl p-8"
        data-aos="fade-up"
      >
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-base-content mb-4">
            Bleib auf dem Laufenden
          </h2>
          <p class="text-base-content">
            Abonniere unseren Newsletter für die neuesten Artikel, Tipps und
            Strategien.
          </p>
        </div>
        <form
          @submit.prevent="subscribeToNewsletter"
          class="flex flex-col md:flex-row gap-4"
        >
          <input
            v-model="newsletterEmail"
            type="email"
            placeholder="Deine E-Mail-Adresse"
            class="input-newsletter input input-bordered flex-1 bg-base-100 text-base-content border-[#f60]"
            required
          />
          <button
            type="submit"
            class="btn btn-primary bg-[#f60] border-none hover:bg-[#ff751a]"
            :class="{ loading: isNewsletterLoading }"
          >
            Abonnieren
          </button>
        </form>
        <p class="text-sm text-base-content opacity-75 mt-4 text-center">
          Wir respektieren deine Privatsphäre. Du kannst dich jederzeit
          abmelden.
        </p>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      >
        <div
          class="bg-base-200 border p-6 rounded-xl max-w-md w-full text-center shadow-xl"
          :class="modalType === 'success' ? 'border-[#0f0]' : 'border-red-500'"
        >
          <p class="text-base-content text-lg mb-4">{{ modalMessage }}</p>
          <button
            class="btn bg-[#f60] text-white hover:bg-[#ff751a] border-none"
            @click="showModal = false"
          >
            Schließen
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from "vue";

const newsletterEmail = ref("");
const isNewsletterLoading = ref(false);

const showModal = ref(false);
const modalMessage = ref("");
const modalType = ref("success");

const apiKey = import.meta.env.VITE_BREVO_API_KEY;

const subscribeToNewsletter = async () => {
  isNewsletterLoading.value = true;

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: newsletterEmail.value,
        listIds: [3],
        updateEnabled: false,
      }),
    });

    if (!response.ok) throw new Error("Subscription failed");

    modalMessage.value = `Danke für deine Anmeldung mit ${newsletterEmail.value}!`;
    modalType.value = "success";
    newsletterEmail.value = "";
  } catch (error) {
    console.error(error);
    modalMessage.value =
      "Ein Fehler ist aufgetreten. Bitte versuch es später erneut.";
    modalType.value = "error";
  } finally {
    showModal.value = true;
    isNewsletterLoading.value = false;
  }
};
</script>
