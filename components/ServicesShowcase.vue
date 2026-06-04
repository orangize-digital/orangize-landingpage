<template>
  <section class="py-20 bg-base-100">
    <!-- Heading (contained) -->
    <div class="container mx-auto px-4 mb-16">
      <div class="text-center">
        <h3
          class="text-sm text-[#f60] font-bold uppercase tracking-[0.3em] mb-4"
          data-aos="fade-up"
        >
          Unsere Kernkompetenzen
        </h3>
        <h2
          class="text-4xl lg:text-5xl text-base-content font-black"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Digitale Lösungen für Ihren Erfolg
        </h2>
      </div>
    </div>

    <!-- Full-bleed orange triptych — edge to edge, no container -->
    <div class="grid grid-cols-1 lg:grid-cols-3 w-full">
      <!-- Card 1 — Webdesign -->
      <NuxtLink
        to="/website-erstellen-lassen"
        class="service-tile group"
        data-aos="fade-up"
      >
        <span class="service-tile__num">01</span>
        <div class="service-tile__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M7 6.5h.01" />
            <path d="M10 6.5h.01" />
          </svg>
        </div>
        <div class="service-tile__body">
          <h3 class="service-tile__title">Webdesign</h3>
          <p class="service-tile__lead">Websites, die verkaufen.</p>
          <div class="service-tile__cta">
            <span>Mehr erfahren</span>
            <svg
              class="service-tile__arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </NuxtLink>

      <!-- Card 2 — Google Ads -->
      <NuxtLink
        to="/google-ads"
        class="service-tile service-tile--alt group"
        data-aos="fade-up"
        data-aos-delay="120"
      >
        <span class="service-tile__num">02</span>
        <div class="service-tile__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>
        <div class="service-tile__body">
          <h3 class="service-tile__title">Google Ads</h3>
          <p class="service-tile__lead">Werbung, die sich rechnet.</p>
          <div class="service-tile__cta">
            <span>Mehr erfahren</span>
            <svg
              class="service-tile__arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </NuxtLink>

      <!-- Card 3 — KI-Automatisierung -->
      <NuxtLink
        to="/ki-automatisierung"
        class="service-tile group"
        data-aos="fade-up"
        data-aos-delay="240"
      >
        <span class="service-tile__num">03</span>
        <div class="service-tile__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" y1="16" x2="8" y2="16" />
            <line x1="16" y1="16" x2="16" y2="16" />
          </svg>
        </div>
        <div class="service-tile__body">
          <h3 class="service-tile__title">KI-Automation</h3>
          <p class="service-tile__lead">Workflows, die für dich arbeiten.</p>
          <div class="service-tile__cta">
            <span>Mehr erfahren</span>
            <svg
              class="service-tile__arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- Sekundärer CTA-Button -->
    <div class="container mx-auto px-4 mt-16 text-center" data-aos="fade-up">
      <button
        class="btn btn-md text-base-content border-2 border-[#f60] bg-transparent hover:bg-[#f60] hover:text-white transition-all duration-300 px-10 font-bold tracking-wide"
        @click="scrollToContact"
      >
        Kostenlose Beratung vereinbaren
      </button>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

const scrollToContact = () => {
  const kontaktSection = document.getElementById("kontakt");
  if (kontaktSection) {
    kontaktSection.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
};

onMounted(() => {
  if (window.AOS) {
    window.AOS.refresh();
  }
});
</script>

<style scoped>
.service-tile {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 480px;
  padding: 3rem;
  background-color: #f60;
  color: #ffffff !important;
  overflow: hidden;
  transition: background-color 0.5s ease;
  isolation: isolate;
  text-decoration: none;
}

/* Alternierende mittlere Karte: leicht hellerer Orange-Ton für Rhythmus */
.service-tile--alt {
  background-color: #ff7a1f;
}

.service-tile:hover {
  background-color: #e55300;
}

.service-tile--alt:hover {
  background-color: #ff6608;
}

/* Subtle diagonal stripe overlay — keeps it from feeling flat */
.service-tile::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0) 28px,
    rgba(255, 255, 255, 0.04) 28px,
    rgba(255, 255, 255, 0.04) 29px
  );
  pointer-events: none;
  z-index: 0;
}

/* Huge number watermark */
.service-tile__num {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  font-size: clamp(7rem, 14vw, 12rem);
  font-weight: 900;
  line-height: 0.85;
  color: rgba(255, 255, 255, 0.12);
  letter-spacing: -0.05em;
  user-select: none;
  z-index: 1;
  transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1),
    color 0.5s ease;
}

.service-tile:hover .service-tile__num {
  transform: translate(-4px, 4px);
  color: rgba(255, 255, 255, 0.18);
}

.service-tile__icon {
  position: relative;
  z-index: 2;
  width: 64px;
  height: 64px;
  color: #ffffff !important;
}

.service-tile__icon svg {
  color: #ffffff !important;
  stroke: #ffffff !important;
}

.service-tile__icon > svg {
  width: 100%;
  height: 100%;
}

.service-tile__body {
  position: relative;
  z-index: 2;
  transform: translateY(0);
  transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.service-tile:hover .service-tile__body {
  transform: translateY(-6px);
}

.service-tile__title {
  font-size: clamp(2.5rem, 4.5vw, 3.75rem);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.02em;
  color: #ffffff !important;
  margin-bottom: 0.75rem;
}

.service-tile__lead {
  font-size: 1.125rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.92) !important;
  margin-bottom: 2rem;
  max-width: 22ch;
}

.service-tile__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #ffffff !important;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

.service-tile__cta span {
  color: #ffffff !important;
}

.service-tile__arrow {
  width: 1.5rem;
  height: 1.5rem;
  color: #ffffff !important;
  stroke: #ffffff !important;
  transform: translateX(0);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-tile:hover .service-tile__arrow {
  transform: translateX(10px);
}

/* On mobile keep the section breathing — full-width still but with a hint of separation */
@media (max-width: 1023px) {
  .service-tile {
    min-height: 360px;
    padding: 2.5rem 1.5rem;
  }
  .service-tile__num {
    font-size: clamp(6rem, 22vw, 10rem);
    top: 1rem;
    right: 1rem;
  }
}
</style>
