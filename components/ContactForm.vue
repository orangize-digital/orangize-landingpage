<template>
  <section id="kontakt" class="py-20 bg-base-200">
    <div class="container mx-auto px-4 text-center">
      <h3
        class="text-lg text-[#f60] font-semibold text-center"
        data-aos="fade-up"
      >
        Sag uns, worum es geht – wir melden uns schnellstmöglich!
      </h3>
      <h2
        class="text-4xl font-bold mb-4 text-base-content"
        data-text="Kostenlose Beratung"
      >
        Kostenlose Beratung
      </h2>
      <div
        class="max-w-lg mx-auto bg-base-100 backdrop-blur-md p-8 border border-[#f60] rounded-xl shadow-lg"
      >
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label
              class="text-left block text-sm font-semibold mb-2 text-base-content"
              for="name"
              >Dein Name</label
            >
            <input
              v-model="form.name"
              type="text"
              id="name"
              placeholder="Max Mustermann"
              class="input input-bordered w-full bg-base-200 text-base-content focus:ring-[#f60]"
              required
            />
          </div>

          <div>
            <label
              class="block text-left text-sm font-semibold mb-2 text-base-content"
              for="email"
              >E-Mail</label
            >
            <input
              v-model="form.email"
              type="email"
              id="email"
              placeholder="max@example.com"
              class="input input-bordered w-full bg-base-200 text-base-content focus:ring-[#f60]"
              required
            />
          </div>

          <div>
            <label
              class="block text-left text-sm font-semibold mb-2 text-base-content"
              >Interessiert an</label
            >
            <div class="flex flex-wrap gap-4">
              <label
                v-for="option in options"
                :key="option"
                class="flex items-center gap-2 cursor-pointer text-base-content"
              >
                <input
                  type="radio"
                  v-model="form.interest"
                  :value="option"
                  class="radio checked:bg-[#f60]"
                  required
                />
                <span>{{ option }}</span>
              </label>
            </div>
          </div>

          <div>
            <label
              class="block text-left text-sm font-semibold mb-2 text-base-content"
              for="message"
              >Deine Nachricht</label
            >
            <textarea
              v-model="form.message"
              id="message"
              placeholder="Erzähl uns mehr über dein Projekt..."
              class="textarea textarea-bordered w-full bg-base-200 text-base-content focus:ring-[#f60]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn btn-primary w-full flex items-center text-white justify-center"
            :disabled="loading"
          >
            <span v-if="!loading">Jetzt anfragen</span>
            <span v-else class="loading loading-spinner"></span>
          </button>

          <div v-if="errorMessage" class="alert alert-error mt-4 text-sm text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ errorMessage }}</span>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  email: "",
  interest: "",
  message: ""
});

const loading = ref(false);
const errorMessage = ref('');
const options = ["Web-Project", "Google Ads", "Nur Frage"];

const handleSubmit = async () => {
  loading.value = true;

  try {
    const subject = `Neue Anfrage: ${form.interest} - ${form.name}`;

    const htmlBody = `
      <h2>Neue Anfrage von Orangize Website</h2>
      <h3>Kontaktdaten:</h3>
      <p><strong>Name:</strong> ${form.name}</p>
      <p><strong>E-Mail:</strong> ${form.email}</p>

      <h3>Interessiert an:</h3>
      <p><strong>Service:</strong> ${form.interest}</p>

      <h3>Nachricht:</h3>
      <p>${form.message || 'Keine zusätzlichen Informationen'}</p>
    `;

    const textBody = `
Neue Anfrage von Orangize Website

Kontaktdaten:
Name: ${form.name}
E-Mail: ${form.email}

Interessiert an:
Service: ${form.interest}

Nachricht:
${form.message || 'Keine zusätzlichen Informationen'}
    `.trim();

    // Use server API route to avoid CORS issues
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        subject: subject,
        html: htmlBody,
        text: textBody
      }
    });

    if (response.success) {
      // Reset form
      form.name = "";
      form.email = "";
      form.interest = "";
      form.message = "";

      // Redirect to thank you page
      await navigateTo('/danke');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    errorMessage.value = 'Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.';
    setTimeout(() => { errorMessage.value = ''; }, 6000);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
