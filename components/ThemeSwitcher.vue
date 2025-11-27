<template>
  <div class="theme-controller">
    <label class="flex cursor-pointer gap-2 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-base-content"
      >
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        />
      </svg>
      <input
        type="checkbox"
        :checked="isDarkTheme"
        @change="toggleTheme"
        class="toggle theme-controller"
        aria-label="Toggle theme"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-base-content"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </label>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDarkTheme = ref(false);

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  const theme = isDarkTheme.value ? "dark" : "light";

  // Apply theme to document
  document.documentElement.setAttribute("data-theme", theme);

  // Store theme preference in localStorage
  localStorage.setItem("theme", theme);
};

// Initialize theme on component mount
onMounted(() => {
  // Check for saved theme preference or default to 'light'
  const savedTheme = localStorage.getItem("theme") || "light";
  isDarkTheme.value = savedTheme === "dark";

  // Apply the theme immediately
  document.documentElement.setAttribute("data-theme", savedTheme);
});
</script>

<style scoped>
/* Toggle styling is handled in app.css for consistency */
</style>
