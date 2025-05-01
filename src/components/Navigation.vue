<template>
  <nav
    class="navbar fixed top-0 z-50 transition-all border-none duration-500 ease-out"
    :class="{
      'max-w-[75rem] bg-base-100 rounded-xl mt-4 left-0 right-0 mx-auto translate-x-[-50%]':
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
        <a href="/">
          <img
            src="/src/assets/images/logo/logo-new.svg"
            alt="Orangize Logo"
            class="h-14"
          />
        </a>
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
          <li v-for="section in sections" :key="section.id">
            <a
              :href="'#' + section.id"
              :class="{ 'text-[#f60] font-bold': activeSection === section.id }"
              class="hover:text-[#f60] text-white transition-colors duration-300 font-bold navi-items"
              @click.prevent="scrollToSection(section.id)"
            >
              {{ section.name }}
            </a>
          </li>
          <!-- Add Blog Link -->
          <li>
            <router-link
              to="/blog"
              class="hover:text-[#f60] text-white transition-colors duration-300 font-bold navi-items"
              :class="{
                'text-[#f60] font-bold': $route.path.includes('/blog'),
              }"
            >
              Blog
            </router-link>
          </li>
        </ul>
      </div>

      <!-- CTA Button -->
      <div class="flex-none hidden lg:block">
        <button
          class="btn btn-primary bg-[#f60] text-white border-none hover:bg-[#ff751a]"
          @click.prevent="scrollToSection('kontakt')"
        >
          Beratung vereinbaren
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="lg:hidden absolute top-full left-0 right-0 bg-base-100/80 backdrop-blur-md shadow-md transition-opacity duration-500 ease-out"
    >
      <ul class="menu menu-vertical px-4 py-2">
        <li v-for="section in sections" :key="section.id">
          <a
            :href="'#' + section.id"
            :class="{ 'text-[#f60] font-bold': activeSection === section.id }"
            class="hover:text-[#f60] transition-colors duration-300"
            @click.prevent="
              scrollToSection(section.id);
              isMenuOpen = false;
            "
          >
            {{ section.name }}
          </a>
        </li>
        <!-- Add Blog Link for Mobile -->
        <li>
          <router-link
            to="/blog"
            class="hover:text-[#f60] transition-colors duration-300"
            :class="{ 'text-[#f60] font-bold': $route.path.includes('/blog') }"
            @click="isMenuOpen = false"
          >
            Blog
          </router-link>
        </li>
        <li class="mt-4">
          <button
            class="btn btn-primary bg-[#f60] border-none hover:bg-[#ff751a] w-full flex items-center justify-center sm:w-auto"
            style="align-content: center !important"
          >
            Beratung vereinbaren
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref(null);
let ticking = false;

const sections = [
  { id: "losung", name: "Lösung" },
  { id: "fakten", name: "Fakten" },
  { id: "ablauf", name: "Ablauf" },
  { id: "uber-mich", name: "Über uns" },
  { id: "faq", name: "FAQ" },
];

const updateNavbar = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      isScrolled.value = window.scrollY > 200;
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

onMounted(() => {
  window.addEventListener("scroll", updateNavbar);
  updateActiveSection();
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
