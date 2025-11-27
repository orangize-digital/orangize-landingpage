<template>
  <div
    v-if="show"
    class="fixed inset-0 flex items-center justify-center bg-base-300 bg-opacity-80 backdrop-blur-sm"
    @click.self="closeModal"
  >
    <div
      class="bg-base-100 border-2 p-8 rounded-xl shadow-lg w-96 relative border-[#f60]"
    >
      <button
        class="absolute top-4 right-4 text-base-content hover:text-[#f60]"
        @click="closeModal"
      >
        &times;
      </button>
      <input type="hidden" v-model="form.interest" />
      <p class="mb-4 text-left text-base-content">
        Interessiert an: <strong>{{ form.interest }}</strong>
      </p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label
            class="block text-sm font-semibold mb-2 text-base-content"
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
            class="block text-sm font-semibold mb-2 text-base-content"
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
          <label class="block text-sm font-semibold mb-2 text-base-content"
            >Interessiert an</label
          >
          <div class="flex flex-wrap gap-4">
            <label
              class="flex items-center gap-2 cursor-pointer text-base-content"
            >
              <input
                type="radio"
                v-model="form.interest"
                :value="form.interest"
                class="radio checked:bg-[#f60]"
                required
              />
              <span>{{ form.interest }}</span>
            </label>
          </div>
        </div>

        <div>
          <label
            class="block text-sm font-semibold mb-2 text-base-content"
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
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const show = ref(false);
const router = useRouter();
const loading = ref(false);
const selectedPlan = ref("");

const openModal = (interestOption = "") => {
  selectedPlan.value = interestOption;
  form.value.interest = interestOption;
  show.value = true;
};
const form = ref({
  name: "",
  email: "",
  interest: "",
  message: "",
});

const closeModal = () => {
  show.value = false;
};

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

    if (!response.ok) throw new Error("Fehler beim Senden der Nachricht.");

    form.value = {
      name: "",
      email: "",
      interest: "",
      message: "",
    };

    closeModal();
    router.push("/danke");
  } catch (error) {
    alert("Fehler: " + error.message);
  } finally {
    loading.value = false;
  }
};

// 💡 Expose this so it can be used via $refs in parent
defineExpose({ openModal });
</script>
