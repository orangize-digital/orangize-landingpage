<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Light theme only — set data-theme attribute on the root element
// so DaisyUI variables resolve consistently from first paint.
useHead({
  htmlAttrs: {
    "data-theme": "light",
  },
});

onMounted(() => {
  document.documentElement.setAttribute("data-theme", "light");
  try {
    localStorage.removeItem("theme");
  } catch (_) {
    /* ignore */
  }
});
</script>
