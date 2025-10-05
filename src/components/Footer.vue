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
            <router-link
              to="/google-ads"
              class="py-2 text-base-content hover:text-[#f60] transition-colors text-sm"
            >
              Google Ads
            </router-link>
            <router-link
              to="/website-erstellen-lassen"
              class="py-2 text-base-content hover:text-[#f60] transition-colors text-sm"
            >
              Website erstellen
            </router-link>
            <router-link
              to="/blog"
              class="py-2 text-base-content hover:text-[#f60] transition-colors text-sm"
            >
              Blog
            </router-link>
            <router-link
              to="/google-ads-analyse"
              class="py-2 text-base-content hover:text-[#f60] transition-colors text-sm"
            >
              Google Ads Analyse
            </router-link>
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
          <router-link
            to="/impressum"
            class="text-base-content hover:text-[#f60] transition-colors"
          >
            Impressum
          </router-link>
          <router-link
            to="/datenschutz"
            class="text-base-content hover:text-[#f60] transition-colors"
          >
            Datenschutz
          </router-link>
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
              <router-link
                to="/google-ads"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Google Ads
              </router-link>
            </div>
            <div>
              <router-link
                to="/website-erstellen-lassen"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Website erstellen
              </router-link>
            </div>
            <div>
              <router-link
                to="/blog"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Blog
              </router-link>
            </div>
            <div>
              <router-link
                to="/google-ads-analyse"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Google Ads Analyse
              </router-link>
            </div>
          </div>
        </div>

        <!-- Legal & Copyright -->
        <div class="flex-1 text-right">
          <div class="space-y-2 mb-4">
            <div>
              <router-link
                to="/impressum"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Impressum
              </router-link>
            </div>
            <div>
              <router-link
                to="/datenschutz"
                class="text-base-content hover:text-[#f60] transition-colors block py-1"
              >
                Datenschutz
              </router-link>
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
import { ref, computed, onMounted } from "vue";

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
