<template>
  <footer class="bg-base-200 text-base-content py-8">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Mobile Layout -->
      <div class="block lg:hidden">
        <!-- Logo & Slogan -->
        <div class="text-center mb-6">
          <a href="/" class="inline-block">
            <img :src="logoSrc" alt="Orangize Logo" class="h-10 mx-auto" />
          </a>
          <p class="mt-2 text-base-content text-sm">Orangize deine Business</p>
        </div>

        <!-- Services Section -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-base-content mb-3 text-center">
            Services
          </h3>
          <div class="grid grid-cols-2 gap-2 text-center">
            <NuxtLink
              to="/google-ads"
              class="py-2 text-base-content hover:text-[#f60] transition-colors text-sm"
            >
              Google Ads
            </NuxtLink>
            <NuxtLink
              to="/website-erstellen-lassen"
              class="py-2 text-base-content hover:text-[#f60] transition-colors text-sm"
            >
              Website erstellen
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="py-2 text-base-content hover:text-[#f60] transition-colors text-sm"
            >
              Blog
            </NuxtLink>
            <NuxtLink
              to="/google-ads-analyse"
              class="py-2 text-base-content hover:text-[#f60] transition-colors text-sm"
            >
              Google Ads Analyse
            </NuxtLink>
          </div>
        </div>

        <!-- Branchen Section -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-base-content mb-3 text-center">
            Branchen
          </h3>
          <div class="grid grid-cols-2 gap-2 text-center">
            <NuxtLink
              to="/google-ads-branchen"
              class="py-2 text-base-content hover:text-[#f60] transition-colors text-sm"
            >
              Alle Branchen
            </NuxtLink>
            <NuxtLink
              to="/google-ads-handwerker"
              class="py-2 text-base-content hover:text-[#f60] transition-colors text-sm"
            >
              Handwerker
            </NuxtLink>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-base-content mb-3 text-center">
            Kontakt
          </h3>
          <div class="space-y-2">
            <p
              class="text-base-content flex items-center justify-center gap-2 text-sm"
            >
              <svg
                class="w-4 h-4 text-primary flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <a
                href="mailto:info@orangize.de"
                class="hover:text-[#f60] transition-colors"
              >
                info@orangize.de
              </a>
            </p>
            <p
              class="text-base-content flex items-center justify-center gap-2 text-sm"
            >
              <svg
                class="w-4 h-4 text-primary flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <a
                href="tel:015122031093"
                class="hover:text-[#f60] transition-colors"
              >
                0151 22031093
              </a>
            </p>
          </div>
        </div>

        <!-- Legal Links -->
        <div class="flex justify-center gap-6 mb-4 text-sm">
          <NuxtLink
            to="/impressum"
            class="text-base-content hover:text-[#f60] transition-colors"
          >
            Impressum
          </NuxtLink>
          <NuxtLink
            to="/datenschutz"
            class="text-base-content hover:text-[#f60] transition-colors"
          >
            Datenschutz
          </NuxtLink>
        </div>

        <!-- Copyright -->
        <p class="text-center text-base-content text-xs opacity-80">
          &copy; 2025 - Alle Rechte vorbehalten
        </p>
      </div>

      <!-- Desktop Layout -->
      <div class="hidden lg:flex justify-between items-start">
        <!-- Logo & Contact -->
        <div class="flex-1">
          <a href="/" class="inline-block">
            <img :src="logoSrc" alt="Orangize Logo" class="h-12" />
          </a>
          <p class="mt-3 text-base-content">Orangize deine Business</p>

          <!-- Contact Information -->
          <div class="mt-4 space-y-2">
            <p class="text-base-content flex items-center gap-2">
              <svg
                class="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <a
                href="mailto:info@orangize.de"
                class="hover:text-[#f60] transition-colors"
              >
                info@orangize.de
              </a>
            </p>
            <p class="text-base-content flex items-center gap-2">
              <svg
                class="w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <a
                href="tel:015122031093"
                class="hover:text-[#f60] transition-colors"
              >
                0151 22031093
              </a>
            </p>
          </div>
        </div>

        <!-- Services Navigation -->
        <div class="flex-1 text-center">
          <h3 class="text-lg font-semibold text-base-content mb-4">Services</h3>
          <div class="space-y-2">
            <div>
              <NuxtLink
                to="/google-ads"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Google Ads
              </NuxtLink>
            </div>
            <div>
              <NuxtLink
                to="/website-erstellen-lassen"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Website erstellen
              </NuxtLink>
            </div>
            <div>
              <NuxtLink
                to="/blog"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Blog
              </NuxtLink>
            </div>
            <div>
              <NuxtLink
                to="/google-ads-analyse"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Google Ads Analyse
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Branchen Navigation -->
        <div class="flex-1 text-center">
          <h3 class="text-lg font-semibold text-base-content mb-4">Branchen</h3>
          <div class="space-y-2">
            <div>
              <NuxtLink
                to="/google-ads-branchen"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Alle Branchen
              </NuxtLink>
            </div>
            <div>
              <NuxtLink
                to="/google-ads-handwerker"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Handwerker
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Legal & Copyright -->
        <div class="flex-1 text-right">
          <div class="space-y-2 mb-4">
            <div>
              <NuxtLink
                to="/impressum"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Impressum
              </NuxtLink>
            </div>
            <div>
              <NuxtLink
                to="/datenschutz"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Datenschutz
              </NuxtLink>
            </div>
          </div>
          <p class="text-base-content text-sm opacity-80">
            &copy; 2025 - Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Nuxt auto-imports ref, computed, onMounted

const currentTheme = ref("light");

const logoSrc = computed(() => {
  return currentTheme.value === "dark"
    ? "/images/logo/orangize-white.svg"
    : "/images/logo/orangize-black.svg";
});

const updateTheme = () => {
  if (typeof window !== "undefined") {
    const theme =
      document.documentElement.getAttribute("data-theme") || "light";
    currentTheme.value = theme;
  }
};

onMounted(() => {
  updateTheme();

  // Watch for theme changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "data-theme"
      ) {
        updateTheme();
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
});
</script>
