<template>
  <section id="fakten" class="facts-section">
    <div class="container mx-auto px-4 mb-16">
      <div class="text-center" data-aos="fade-up">
        <h3 class="facts-eyebrow">Zahlen statt Behauptungen</h3>
        <h2 class="facts-headline">Fakten, die nichts zu verstecken haben</h2>
      </div>
    </div>

    <div class="facts-grid">
      <div
        v-for="(stat, idx) in stats"
        :key="stat.label"
        class="stat-tile"
        data-aos="fade-up"
        :data-aos-delay="idx * 80"
      >
        <div class="stat-tile__num">{{ stat.num }}</div>
        <div class="stat-tile__label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { num: "850.000€", label: "Verwaltetes Werbebudget" },
  { num: "100+", label: "Projekte umgesetzt" },
  { num: "95%", label: "Kunden bleiben langfristig" },
  { num: "3×", label: "Mehr Anfragen im Schnitt" },
];
</script>

<style scoped>
.facts-section {
  background:
    radial-gradient(circle at 15% 20%, rgba(255, 122, 31, 0.18) 0%, transparent 45%),
    radial-gradient(circle at 85% 80%, rgba(255, 81, 0, 0.18) 0%, transparent 50%),
    #0a0a0a;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.facts-eyebrow {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #f60 !important;
  margin-bottom: 1rem;
}

.facts-headline {
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: #ffffff !important;
  max-width: 18ch;
  margin: 0 auto;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
}

@media (min-width: 1024px) {
  .facts-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-tile {
  position: relative;
  padding: 3.5rem 1.5rem;
  text-align: center;
  isolation: isolate;
}

.stat-tile + .stat-tile::before {
  content: "";
  position: absolute;
  left: 0;
  top: 25%;
  bottom: 25%;
  width: 1px;
  background: rgba(255, 255, 255, 0.1);
}

/* On mobile (2 cols), the 3rd tile starts a new row so its left
   divider is unwanted */
@media (max-width: 1023px) {
  .stat-tile:nth-child(3)::before {
    display: none;
  }
}

.stat-tile__num {
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: clamp(2.75rem, 7vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.95;
  background: linear-gradient(135deg, #ff7a1f 0%, #f60 60%, #e55300 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  -webkit-text-fill-color: transparent;
}

.stat-tile__label {
  margin-top: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75) !important;
  line-height: 1.4;
}

@media (max-width: 640px) {
  .facts-section {
    padding: 4rem 0;
  }
  .stat-tile {
    padding: 2.25rem 1rem;
  }
  .stat-tile__label {
    font-size: 0.7rem;
    letter-spacing: 0.15em;
  }
}
</style>
