<template>
  <section id="projekte" class="py-20 bg-base-100">
    <div class="container mx-auto px-6 lg:px-12">
      <h2 class="text-4xl font-bold text-center mb-12 text-white">
        Web Projekte
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow"
          data-aos="fade-up"
        >
          <figure class="px-10 pt-10">
            <img :src="project.image" :alt="project.title" class="rounded-xl" />
          </figure>
          <div class="card-body text-center">
            <h3 class="card-title justify-center text-[#f60]">
              {{ project.title }}
            </h3>
            <p class="text-white">{{ project.description }}</p>
            <div class="card-actions justify-center mt-4">
              <a :href="project.link" class="btn text-white btn-primary"
                >Mehr Erfahren</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import masterSolarImage from "@/assets/images/Photovoltaikanlagen.png";
import wiwilaImage from "@/assets/images/wiwila.png";
import wfmInkassoImage from "@/assets/images/wfm-inkasso.png";

const projects = [
  {
    title: "Master-Solar GmbH",
    description: "Optimierung der Online-Präsenz für ein Start-up.",
    image: masterSolarImage,
    link: "https://master-solar.de",
  },
  {
    title: "Wiwila - Energie Arbeit",
    description: "Steigerung der Conversion-Rate durch gezieltes PPC.",
    image: wiwilaImage,
    link: "#",
  },
  {
    title: "WFM - Inkasso",
    description: "Datengetriebene Analyse zur Skalierung von Werbekampagnen.",
    image: wfmInkassoImage,
    link: "https://wfm-inkasso.de",
  },
];
</script>
