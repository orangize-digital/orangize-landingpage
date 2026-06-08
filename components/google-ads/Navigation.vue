<template>
  <nav
    class="navbar fixed top-0 z-50 transition-all border-none duration-500 ease-out"
    :class="{
      'max-w-[85rem] bg-base-100 rounded-xl mt-4 left-0 right-0 mx-auto translate-x-[-50%]':
        !isScrolled,
      'bg-base-100 border-none w-full shadow-md left-0 translate-x-0':
        isScrolled,
    }"
    :style="{
      transform: `translateY(${isScrolled ? '0px' : '10px'})`,
      transition: 'transform 0.4s ease-out, opacity 0.2s ease-in',
    }"
  >
    <div class="container mx-auto px-4">
      <!-- Logo -->
      <div class="flex-1 lg:flex-none">
        <router-link to="/">
          <img :src="logoSrc" alt="Orangize Logo" class="h-12" />
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex-none lg:hidden">
        <button
          class="btn btn-square btn-ghost"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Desktop Menu -->
      <div class="flex-none hidden lg:flex lg:flex-1 lg:justify-center">
        <ul class="menu menu-horizontal px-1 gap-8">
          <li>
            <details class="dropdown">
              <summary class="hover:text-[#f60] text-base-content transition-colors duration-300 font-bold navi-items cursor-pointer">
                Leistungen
              </summary>
              <ul class="menu dropdown-content bg-base-100 rounded-box z-[60] w-60 p-3 space-y-1 shadow mt-2">
                <li><router-link to="/google-ads" class="!bg-transparent hover:!bg-[#f60]/10 text-[#f60] font-semibold py-2">Google Ads</router-link></li>
                <li><router-link to="/website-erstellen-lassen" class="!bg-transparent hover:!bg-[#f60]/10 text-base-content hover:text-[#f60] py-2">Webdesign</router-link></li>
                <li><router-link to="/ki-automatisierung" class="!bg-transparent hover:!bg-[#f60]/10 text-base-content hover:text-[#f60] py-2">KI-Automatisierung</router-link></li>
                <li><router-link to="/social-media-betreuung" class="!bg-transparent hover:!bg-[#f60]/10 text-base-content hover:text-[#f60] py-2">Social Media</router-link></li>
              </ul>
            </details>
          </li>
          <li v-for="section in sections" :key="section.id">
            <a
              :href="'#' + section.id"
              class="hover:text-[#f60] text-base-content transition-colors duration-300 font-bold navi-items"
              @click.prevent="scrollToSection(section.id)"
            >
              {{ section.name }}
            </a>
          </li>
          <li>
            <router-link
              to="/blog"
              class="hover:text-[#f60] text-base-content transition-colors duration-300 font-bold navi-items"
            >
              Blog
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Theme Switcher & CTA Button -->
      <div class="flex-none hidden lg:flex lg:items-center lg:gap-4">
        <button
          class="btn btn-primary bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90"
          @click="scrollToContact"
        >
          Beratung vereinbaren
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="lg:hidden absolute top-full left-0 right-0 bg-base-100 backdrop-blur-md shadow-md transition-opacity duration-500 ease-out"
    >
      <ul class="menu menu-vertical px-4 py-2">
        <li>
          <details>
            <summary class="text-base-content hover:text-[#f60] font-semibold">Leistungen</summary>
            <ul>
              <li><router-link to="/google-ads" class="text-[#f60] font-semibold" @click="isMenuOpen = false">Google Ads</router-link></li>
              <li><router-link to="/website-erstellen-lassen" class="text-base-content hover:text-[#f60]" @click="isMenuOpen = false">Webdesign</router-link></li>
              <li><router-link to="/ki-automatisierung" class="text-base-content hover:text-[#f60]" @click="isMenuOpen = false">KI-Automatisierung</router-link></li>
              <li><router-link to="/social-media-betreuung" class="text-base-content hover:text-[#f60]" @click="isMenuOpen = false">Social Media</router-link></li>
            </ul>
          </details>
        </li>
        <li v-for="section in sections" :key="section.id">
          <a
            :href="'#' + section.id"
            class="text-base-content hover:text-[#f60] transition-colors duration-300"
            @click.prevent="
              scrollToSection(section.id);
              isMenuOpen = false;
            "
          >
            {{ section.name }}
          </a>
        </li>
        <li>
          <router-link
            to="/blog"
            class="text-base-content hover:text-[#f60] transition-colors duration-300"
            @click="isMenuOpen = false"
          >
            Blog
          </router-link>
        </li>
        <li class="mt-4">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              class="btn btn-primary bg-[#f60] border-none hover:bg-[#f60]/90 w-full flex items-center justify-center sm:w-auto"
              @click="scrollToContact"
            >
              Beratung vereinbaren
            </button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const isScrolled = ref(true);
const activeSection = ref(null);
const currentTheme = ref("light");
let ticking = false;

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

// Angepasste Sektionen für die Google Ads Seite
const sections = [
  { id: "losung", name: "Lösung" },
  { id: "leistungen", name: "Leistungen" },
  { id: "prozess", name: "Prozess" },
  { id: "regionen", name: "Regionen" },
  { id: "faq", name: "FAQ" },
];

const updateNavbar = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateActiveSection();
      ticking = false;
    });
    ticking = true;
  }
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const updateActiveSection = () => {
  let currentSection = null;
  sections.forEach((section) => {
    const el = document.getElementById(section.id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSection = section.id;
      }
    }
  });
  activeSection.value = currentSection;
};

const scrollToContact = () => {
  const kontaktSection = document.getElementById("kontakt");
  if (kontaktSection) {
    kontaktSection.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateNavbar);
  updateActiveSection();
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

onUnmounted(() => {
  window.removeEventListener("scroll", updateNavbar);
});
</script>

<style>
.navi-items {
  letter-spacing: 1px !important;
}
</style>
