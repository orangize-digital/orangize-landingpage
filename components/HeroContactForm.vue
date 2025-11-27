<template>
  <div
    class="bg-black-900/95 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-orange-500/30 max-w-lg w-full"
  >
    <div class="text-center mb-6">
      <h3 class="text-xl font-bold text-white mb-2">Kostenlose Beratung</h3>
      <p class="text-sm text-gray-200">
        Wir melden uns schnellstmöglich bei Ihnen!
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label
          class="block text-left text-sm font-semibold mb-2 text-white"
          for="hero-name"
        >
          Ihr Name
        </label>
        <input
          v-model="form.name"
          type="text"
          id="hero-name"
          placeholder="Max Mustermann"
          class="input input-bordered w-full bg-gray-800 text-black border-gray-600 focus:border-orange-500 placeholder-gray-400"
          required
        />
      </div>

      <div>
        <label
          class="block text-left text-sm font-semibold mb-2 text-white"
          for="hero-email"
        >
          E-Mail
        </label>
        <input
          v-model="form.email"
          type="email"
          id="hero-email"
          placeholder="max@example.com"
          class="input input-bordered w-full bg-gray-800 text-black border-gray-600 focus:border-orange-500 placeholder-gray-400"
          required
        />
      </div>

      <div>
        <label class="block text-left text-sm font-semibold mb-2 text-white">
          Interesse
        </label>
        <select
          v-model="form.interest"
          class="select select-bordered w-full text-gray bg-gray-800 text-white border-gray-600 focus:border-orange-500"
          style="color: gray !important"
          required
        >
          <option value="" disabled style="color: gray !important">
            Bitte wählen
          </option>
          <option v-for="option in options" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>

      <div>
        <label
          class="block text-left text-sm font-semibold mb-2 text-white"
          for="hero-message"
        >
          Kurze Nachricht
        </label>
        <textarea
          v-model="form.message"
          id="hero-message"
          placeholder="Beschreiben Sie kurz Ihr Projekt..."
          class="textarea textarea-bordered w-full bg-gray-800 text-black border-gray-600 placeholder-gray-400 h-20"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="kostenlose btn btn-primary w-full bg-[#f60] border-none hover:bg-[#f60]/90 text-white"
        :disabled="loading"
      >
        <span v-if="!loading" class="kostenlose-btn"
          >Kostenlose Beratung anfragen</span
        >
        <span v-else class="loading loading-spinner loading-sm"></span>
      </button>

      <!-- Privacy Notice -->
      <p class="text-xs text-gray-300 text-center mt-3">
        Mit Absenden des Formulars stimmen Sie unseren
        <router-link
          to="/datenschutz"
          class="text-[#f60] hover:text-[#f60]/80 underline"
        >
          Datenschutzbestimmungen
        </router-link>
        zu.
      </p>
    </form>
  </div>
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
const options = [
  "Website erstellen",
  "Google Ads",
  "SEO-Beratung",
  "Komplettpaket",
];

const handleSubmit = async () => {
  loading.value = true;

  try {
    const subject = `Neue Anfrage (Hero Form): ${form.interest} - ${form.name}`;

    const htmlBody = `
      <h2>Neue Anfrage von Orangize Website (Hero Form)</h2>
      <h3>Kontaktdaten:</h3>
      <p><strong>Name:</strong> ${form.name}</p>
      <p><strong>E-Mail:</strong> ${form.email}</p>

      <h3>Interessiert an:</h3>
      <p><strong>Service:</strong> ${form.interest}</p>

      <h3>Nachricht:</h3>
      <p>${form.message || 'Keine zusätzlichen Informationen'}</p>
    `;

    const textBody = `
Neue Anfrage von Orangize Website (Hero Form)

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
    alert('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.input:focus,
.select:focus,
.textarea:focus {
  outline: none;
  border-color: #f60 !important;
  box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.2) !important;
}

.select option {
  background-color: #1f2937;
  color: white;
}
</style>
