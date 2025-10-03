<template>
  <section id="projekte" class="py-20 bg-base-100">
    <div class="container mx-auto px-6 lg:px-12">
      <h2 class="text-4xl font-bold text-center mb-12 text-base-content">
        Web Projekte
      </h2>

      <!-- Responsive Carousel Container -->
      <div class="relative max-w-7xl mx-auto">
        <!-- Navigation arrows -->
        <div class="absolute inset-y-0 left-0 z-20 flex items-center">
          <button
            @click="goToPrevSlide()"
            class="btn btn-circle bg-[#f60] border-none text-white hover:bg-[#f60]/80 ml-2 shadow-lg"
          >
            ❮
          </button>
        </div>
        <div class="absolute inset-y-0 right-0 z-20 flex items-center">
          <button
            @click="goToNextSlide()"
            class="btn btn-circle bg-[#f60] border-none text-white hover:bg-[#f60]/80 mr-2 shadow-lg"
          >
            ❯
          </button>
        </div>

        <!-- Carousel wrapper -->
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlideOffset}%)` }"
          >
            <div
              v-for="(project, index) in projects"
              :key="index"
              class="flex-none w-full sm:w-1/2 lg:w-1/3 px-4"
            >
              <div
                class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full"
                data-aos="fade-up"
                :data-aos-delay="index * 100"
              >
                <figure class="px-6 pt-6">
                  <img
                    :src="project.image"
                    :alt="project.title"
                    class="rounded-xl w-full h-48 object-cover"
                  />
                </figure>
                <div class="card-body text-center bg-base-100">
                  <h3 class="card-title justify-center text-[#f60] text-lg">
                    {{ project.title }}
                  </h3>
                  <p class="text-base-content text-sm flex-grow">
                    {{ project.description }}
                  </p>
                  <div class="card-actions justify-center mt-4">
                    <a
                      :href="project.link"
                      class="btn text-white btn-primary btn-sm"
                      target="_blank"
                      >Mehr Erfahren</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dot indicators -->
      <div class="flex justify-center w-full py-6 gap-2 flex-wrap">
        <button
          v-for="(project, index) in projects"
          :key="`dot-${index}`"
          @click="goToSlide(index)"
          :class="[
            'btn btn-xs border-none transition-all duration-300',
            activeSlide === index
              ? 'bg-[#f60] text-white'
              : 'bg-base-300 hover:bg-[#f60] hover:text-white',
          ]"
        >
          {{ index + 1 }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import masterSolarImage from "@/assets/images/Photovoltaikanlagen.png";
import wiwilaImage from "@/assets/images/wiwila.png";
import wfmInkassoImage from "@/assets/images/wfm-inkasso.png";
import albrechtImage from "@/assets/images/metallbaumeister-albrecht.png";
import glueckUmzuegeImage from "@/assets/images/glueck-umzuege.png";

const activeSlide = ref(0);
const currentSlideOffset = ref(0);

// Responsive slides per view
const getSlidesPerView = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth >= 1024) return 3; // lg and up: 3 slides
    if (window.innerWidth >= 640) return 2; // sm and up: 2 slides
    return 1; // mobile: 1 slide
  }
  return 1;
};

const updateSlideOffset = () => {
  const slidesPerView = getSlidesPerView();
  const slideWidth = 100 / slidesPerView;
  currentSlideOffset.value = activeSlide.value * slideWidth;
};

const goToSlide = (slideNumber) => {
  const slidesPerView = getSlidesPerView();
  const maxSlide = Math.max(0, projects.length - slidesPerView);
  activeSlide.value = Math.max(0, Math.min(slideNumber, maxSlide));
  updateSlideOffset();
};

const goToPrevSlide = () => {
  if (activeSlide.value > 0) {
    activeSlide.value -= 1;
  } else {
    const slidesPerView = getSlidesPerView();
    activeSlide.value = Math.max(0, projects.length - slidesPerView);
  }
  updateSlideOffset();
};

const goToNextSlide = () => {
  const slidesPerView = getSlidesPerView();
  const maxSlide = Math.max(0, projects.length - slidesPerView);
  if (activeSlide.value < maxSlide) {
    activeSlide.value += 1;
  } else {
    activeSlide.value = 0;
  }
  updateSlideOffset();
};

onMounted(() => {
  activeSlide.value = 0;
  updateSlideOffset();

  // Handle window resize for responsive behavior
  window.addEventListener("resize", updateSlideOffset);
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateSlideOffset);
  }
});

const projects = [
  {
    title: "Glück Umzüge",
    description:
      "Komplettes Webdesign, professionelle Webentwicklung und individuelles Logo-Design für ein Umzugsunternehmen – für einen vertrauensvollen und professionellen Auftritt.",
    image: glueckUmzuegeImage,
    link: "https://glueckumzuge.netlify.app/",
  },
  {
    title: "Metallbaumeister Albrecht",
    description:
      "Webdesign, Entwicklung und Google Ads für ein wachsendes Handwerksunternehmen.",
    image: albrechtImage,
    link: "https://metallbaumeister-albrecht.de",
  },
  {
    title: "Master-Solar GmbH",
    description: "Optimierung der Online-Präsenz für ein Start-up.",
    image: masterSolarImage,
    link: "https://master-solar.de",
  },
  {
    title: "Wiwila - Energie Arbeit",
    description:
      "Individuelles Webdesign, performante Webentwicklung und kreatives Logo-Design – alles für einen starken digitalen Auftritt.",
    image: wiwilaImage,
    link: "https://wiwila.netlify.app",
  },
  {
    title: "WFM - Inkasso",
    description:
      "Datengetriebene Analyse zur Skalierung von Werbekampagnen – kombiniert mit einer Conversion-starken Website für maximale Ergebnisse.",
    image: wfmInkassoImage,
    link: "https://wfm-inkasso.netlify.app/",
  },
];
</script>
