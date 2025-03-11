<template>
  <section id="kontakt" class="py-20 bg-orange-500 bg-opacity-20 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2
        class="text-4xl font-bold mb-4 text-black neon-text"
        data-text="Kostenlose Beratung"
      >
        Kostenlose Beratung
      </h2>
      <p class="mb-8">
        Sag uns, worum es geht – wir melden uns schnellstmöglich!
      </p>

      <div
        class="max-w-lg mx-auto bg-black backdrop-blur-md p-8 rounded-xl shadow-lg"
      >
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="text-left block text-sm font-semibold mb-2" for="name"
              >Dein Name</label
            >
            <input
              v-model="form.name"
              type="text"
              id="name"
              placeholder="Max Mustermann"
              class="input input-bordered w-full text-white bg-white/10 focus:ring-[#f60]"
              required
            />
          </div>

          <div>
            <label
              class="block text-left text-sm font-semibold mb-2"
              for="email"
              >E-Mail</label
            >
            <input
              v-model="form.email"
              type="email"
              id="email"
              placeholder="max@example.com"
              class="input input-bordered w-full text-white bg-white/10 focus:ring-[#f60]"
              required
            />
          </div>

          <div>
            <label class="block text-left text-sm font-semibold mb-2"
              >Interessiert an</label
            >
            <div class="flex flex-wrap gap-4">
              <label
                v-for="option in options"
                :key="option"
                class="flex items-center gap-2 cursor-pointer"
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
              class="block text-left text-sm font-semibold mb-2"
              for="message"
              >Deine Nachricht</label
            >
            <textarea
              v-model="form.message"
              id="message"
              placeholder="Erzähl uns mehr über dein Projekt..."
              class="textarea textarea-bordered w-full text-white bg-white/10 focus:ring-[#f60]"
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
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"; // Importiere den Router

const form = ref({ name: "", email: "", interest: "", message: "" });
const loading = ref(false);
const options = ["Web-Project", "Google Ads", "Nur Frage"];
const router = useRouter(); // Router-Instance nutzen

const handleSubmit = async () => {
  loading.value = true;

  try {
    const response = await fetch(
      "https://hook.eu2.make.com/zezuj4yw8redktbai0gmujpgco2ltb7h",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form.value),
      }
    );

    if (!response.ok) {
      throw new Error("Fehler beim Senden der Nachricht.");
    }

    // Formular zurücksetzen
    form.value = { name: "", email: "", interest: "", message: "" };

    // Nach erfolgreichem Absenden weiterleiten
    router.push("/danke");
  } catch (error) {
    alert("Fehler: " + error.message);
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
