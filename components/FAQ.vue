<template>
  <section id="faq" class="faq-section">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <p class="faq-eyebrow" data-aos="fade-up">Wenn du fragst</p>
        <h2 class="faq-headline" data-aos="fade-up" data-aos-delay="80">
          Häufig gestellte Fragen
        </h2>
      </div>

      <div class="faq-toggle" data-aos="fade-up">
        <button
          @click="activeCategory = 'web'"
          :class="['faq-toggle__btn', { 'is-active': activeCategory === 'web' }]"
        >
          Web-Projekte
        </button>
        <button
          @click="activeCategory = 'ads'"
          :class="['faq-toggle__btn', { 'is-active': activeCategory === 'ads' }]"
        >
          Google Ads
        </button>
      </div>

      <div class="faq-list">
        <div
          v-for="(faq, index) in faqs[activeCategory]"
          :key="index"
          :class="['faq-item', { 'is-open': openFAQ === index }]"
        >
          <button class="faq-item__head" @click="toggleFAQ(index)">
            <span class="faq-item__num">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="faq-item__q">{{ faq.question }}</span>
            <span class="faq-item__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 5v14" class="faq-icon__v" />
                <path d="M5 12h14" />
              </svg>
            </span>
          </button>
          <div class="faq-item__body" v-show="openFAQ === index">
            <p v-html="faq.answer"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeCategory: "web",
      openFAQ: null,
      faqs: {
        web: [
          {
            question: "Wie läuft die Erstellung einer Website bei euch ab?",
            answer:
              "Erstgespräch zur Analyse · Design-Entwurf & Freigabe · Entwicklung & Umsetzung · Testing & Optimierung · Live-Schaltung & Support.",
          },
          {
            question: "Kann ich meine bestehende Website optimieren lassen?",
            answer:
              "Ja, wir optimieren Design, Performance, SEO und Conversion-Raten deiner Website.",
          },
          {
            question: "Wie lange dauert die Erstellung einer Website?",
            answer:
              "One-Pager: ca. 2–3 Wochen. Firmenwebsites: 4–6 Wochen. Größere Projekte: 6–12 Wochen.",
          },
          {
            question: "Welche Informationen benötigt ihr für den Start?",
            answer:
              "Wir brauchen Infos zu deinem Unternehmen, gewünschte Inhalte, Design-Vorlieben und Funktionen.",
          },
          {
            question: "Sind eure Websites für Mobilgeräte optimiert?",
            answer:
              "Ja, alle unsere Websites sind responsiv und für Smartphones und Tablets optimiert.",
          },
        ],
        ads: [
          {
            question: "Bietet ihr Google Ads Betreuung an?",
            answer:
              "Ja. Wir übernehmen Kampagnen-Setup, Optimierung, Keyword-Recherche und Budget-Management.",
          },
          {
            question: "Wie hoch ist das Budget für eine Google Ads Kampagne?",
            answer:
              "Das hängt von deiner Branche und deinen Zielen ab. Wir beraten dich gerne individuell.",
          },
          {
            question: "Wie schnell sehe ich Ergebnisse mit Google Ads?",
            answer:
              "Meist innerhalb weniger Tage, abhängig von Konkurrenz, Budget und Optimierungsgrad.",
          },
          {
            question: "Welche Anzeigenformate könnt ihr erstellen?",
            answer:
              "Suchanzeigen, Display-Ads, Shopping-Anzeigen und YouTube-Werbung.",
          },
          {
            question: "Kann ich mein Budget flexibel anpassen?",
            answer:
              "Ja, du kannst dein Budget jederzeit anpassen oder pausieren.",
          },
        ],
      },
    };
  },
  methods: {
    toggleFAQ(index) {
      this.openFAQ = this.openFAQ === index ? null : index;
    },
  },
};
</script>

<style scoped>
.faq-section {
  padding: 6rem 0;
  background: hsl(var(--b1));
}

.faq-eyebrow {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #f60 !important;
  margin-bottom: 1rem;
}

.faq-headline {
  font-family: "Bricolage Grotesque", sans-serif !important;
  font-size: clamp(2.25rem, 4.5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.05;
  color: hsl(var(--bc)) !important;
}

.faq-toggle {
  display: inline-flex;
  margin: 0 auto 3rem;
  gap: 0;
  display: flex;
  justify-content: center;
}

.faq-toggle__btn {
  padding: 0.75rem 1.75rem;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: transparent;
  color: hsl(var(--bc) / 0.6) !important;
  border-bottom: 2px solid transparent !important;
  cursor: pointer;
  transition: color 0.25s ease, border-color 0.25s ease;
}

.faq-toggle__btn:hover {
  color: hsl(var(--bc)) !important;
}

.faq-toggle__btn.is-active {
  color: #f60 !important;
  border-bottom-color: #f60 !important;
}

.faq-list {
  max-width: 64rem;
  margin: 0 auto;
}

.faq-item {
  border-top: 1px solid hsl(var(--bc) / 0.1);
  transition: background 0.3s ease;
}

.faq-item:last-child {
  border-bottom: 1px solid hsl(var(--bc) / 0.1);
}

.faq-item.is-open {
  background: hsl(var(--bc) / 0.02);
}

.faq-item__head {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  padding: 1.75rem 0.5rem;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: padding 0.3s ease;
}

.faq-item__head:hover {
  padding-left: 1rem;
}

.faq-item__num {
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #f60 !important;
  letter-spacing: -0.01em;
  min-width: 2rem;
}

.faq-item__q {
  flex: 1;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: clamp(1.05rem, 1.5vw, 1.35rem);
  font-weight: 700;
  letter-spacing: -0.015em;
  color: hsl(var(--bc)) !important;
  line-height: 1.3;
}

.faq-item__icon {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  background: #f60;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, transform 0.3s ease;
}

.faq-item__icon svg {
  width: 1.1rem;
  height: 1.1rem;
  color: #ffffff !important;
  stroke: #ffffff !important;
  transition: transform 0.3s ease;
}

.faq-item.is-open .faq-item__icon {
  background: #0a0a0a;
}

.faq-item.is-open .faq-item__icon svg {
  transform: rotate(45deg);
}

.faq-item__body {
  padding: 0 0 2rem 4rem;
  color: hsl(var(--bc) / 0.75) !important;
  font-size: 1rem;
  line-height: 1.7;
  max-width: 60ch;
}

.faq-item__body :deep(p) {
  color: hsl(var(--bc) / 0.75) !important;
}

@media (max-width: 640px) {
  .faq-section {
    padding: 4rem 0;
  }
  .faq-item__head {
    padding: 1.25rem 0;
    gap: 1rem;
  }
  .faq-item__head:hover {
    padding-left: 0;
  }
  .faq-item__num {
    min-width: 1.5rem;
    font-size: 0.85rem;
  }
  .faq-item__icon {
    width: 2rem;
    height: 2rem;
  }
  .faq-item__body {
    padding: 0 0 1.5rem 2.5rem;
  }
}
</style>
