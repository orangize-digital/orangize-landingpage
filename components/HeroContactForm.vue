<template>
  <div class="hero-form max-w-lg w-full">
    <div class="text-center mb-6">
      <h3 class="hero-form__title">Kostenlose Beratung</h3>
      <p class="hero-form__sub">
        Wir melden uns schnellstmöglich bei Ihnen.
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label
          class="hero-form__label"
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
          class="hero-form__label"
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
        <label class="hero-form__label">
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
          class="hero-form__label"
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

      <div v-if="errorMessage" class="alert alert-error mt-4 text-sm text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{{ errorMessage }}</span>
      </div>

      <!-- Privacy Notice -->
      <p class="hero-form__policy">
        Mit Absenden des Formulars stimmen Sie unseren
        <router-link to="/datenschutz" class="hero-form__policy-link">
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
const errorMessage = ref('');
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

    const response = await fetch('https://www.joshevski.com/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Form-Key': 'pk_mRHFApc83lpCwcx1BX5X5g'
      },
      body: JSON.stringify({
        to: ['info@orangize.de'],
        subject: subject,
        html: htmlBody,
        text: textBody
      })
    });

    if (response.ok) {
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
.hero-form {
  background: rgba(10, 10, 10, 0.78);
  backdrop-filter: blur(14px);
  padding: 2rem;
  box-shadow:
    0 30px 80px -20px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 102, 0, 0.18);
}

.hero-form__title {
  font-family: "Bricolage Grotesque", sans-serif !important;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #f60 !important;
  margin-bottom: 0.5rem;
}

.hero-form__sub {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75) !important;
}

.hero-form__label {
  display: block;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9) !important;
}

.hero-form__policy {
  font-size: 0.75rem;
  text-align: center;
  margin-top: 0.75rem;
  color: rgba(255, 255, 255, 0.6) !important;
  line-height: 1.5;
}

.hero-form__policy-link {
  color: #f60 !important;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.hero-form__policy-link:hover {
  color: #ff7a1f !important;
}

.input,
.select,
.textarea {
  background-color: #ffffff !important;
  color: #0a0a0a !important;
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
}

.input:focus,
.select:focus,
.textarea:focus {
  outline: none !important;
  border-color: #f60 !important;
  box-shadow: 0 0 0 3px rgba(255, 102, 0, 0.25) !important;
}

.select {
  color: #0a0a0a !important;
}

.select option {
  background-color: #ffffff;
  color: #0a0a0a;
}

.select option[disabled] {
  color: #9ca3af;
}

.kostenlose {
  background: var(--brand-gradient) !important;
  background-size: 200% 200% !important;
  border: none !important;
  color: #ffffff !important;
  font-weight: 700 !important;
  letter-spacing: 0.06em !important;
  text-transform: uppercase !important;
  transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.3s ease !important;
}

.kostenlose:hover {
  background-position: 100% 0 !important;
  transform: translateY(-1px);
  box-shadow: 0 18px 36px -12px rgba(255, 102, 0, 0.55) !important;
}

.kostenlose-btn,
.kostenlose-btn * {
  color: #ffffff !important;
}
</style>
