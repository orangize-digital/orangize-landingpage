<template>
  <section id="faq" class="py-20 bg-base-100">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-8 text-white">
        Häufig gestellte Fragen
      </h2>

      <!-- Toggle Switch -->
      <div class="flex justify-center mb-10">
        <button
          @click="activeCategory = 'web'"
          :class="
            activeCategory === 'web'
              ? 'bg-[#f60] text-white'
              : 'bg-white text-[#f608]'
          "
          class="px-6 py-2 rounded-l-lg text-lg font-semibold transition-all duration-300"
        >
          Web-Projekte
        </button>
        <button
          @click="activeCategory = 'ads'"
          :class="
            activeCategory === 'ads'
              ? 'bg-[#f60] text-white'
              : 'bg-white text-[#f608]'
          "
          class="px-6 py-2 rounded-r-lg text-lg font-semibold transition-all duration-300"
        >
          Google Ads
        </button>
      </div>

      <!-- FAQ Content -->
      <div class="w-full max-w-3xl mx-auto">
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs[activeCategory]"
            :key="index"
            class="border border-gray-300 rounded-lg overflow-hidden shadow-md"
          >
            <button
              @click="toggleFAQ(index)"
              class="w-full text-left px-6 py-4 bg-black hover:bg-orange-600 flex justify-between items-center transition duration-200 group"
            >
              <span class="text-lg font-medium text-white">{{
                faq.question
              }}</span>
              <svg
                :class="{ 'rotate-180': openFAQ === index }"
                class="w-6 h-6 text-[#f60] group-hover:text-white transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              v-if="openFAQ === index"
              class="p-6 bg-black text-white text-left border-t border-orange-600"
            >
              <p v-html="faq.answer"></p>
            </div>
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
              "<ul class='list-disc pl-5'><li>Erstgespräch zur Analyse</li><li>Design-Entwurf & Freigabe</li><li>Entwicklung & Umsetzung</li><li>Testing & Optimierung</li><li>Live-Schaltung & Support</li></ul>",
          },
          {
            question: "Kann ich meine bestehende Website optimieren lassen?",
            answer:
              "Ja, wir optimieren Design, Performance, SEO und Conversion-Raten deiner Website.",
          },
          {
            question: "Wie lange dauert die Erstellung einer Website?",
            answer:
              "One-Pager: ca. 2-3 Wochen, Firmenwebsites: 4-6 Wochen, größere Projekte: 6-12 Wochen.",
          },
          {
            question: "Welche Informationen benötigt ihr für den Start?",
            answer:
              "Wir brauchen Infos zu deinem Unternehmen, gewünschte Inhalte, Design-Vorlieben und Funktionen.",
          },
          {
            question: "Sind eure Websites für Mobilgeräte optimiert?",
            answer:
              "Ja, alle unsere Websites sind responsiv und für Smartphones sowie Tablets optimiert.",
          },
        ],
        ads: [
          {
            question: "Bietet ihr Google Ads Betreuung an?",
            answer:
              "Ja! Wir übernehmen Kampagnen-Setup, Optimierung, Keyword-Recherche und Budget-Management.",
          },
          {
            question: "Wie hoch ist das Budget für eine Google Ads Kampagne?",
            answer:
              "Das hängt von deiner Branche und deinen Zielen ab. Wir beraten dich gerne individuell!",
          },
          {
            question: "Wie schnell sehe ich Ergebnisse mit Google Ads?",
            answer:
              "Meist innerhalb weniger Tage, abhängig von Konkurrenz, Budget und Optimierungsgrad.",
          },
          {
            question: "Welche Anzeigenformate könnt ihr erstellen?",
            answer:
              "Wir erstellen Suchanzeigen, Display-Ads, Shopping-Anzeigen und YouTube-Werbung.",
          },
          {
            question: "Kann ich mein Budget flexibel anpassen?",
            answer:
              "Ja, du kannst dein Budget jederzeit anpassen oder pausieren, falls nötig.",
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
.rotate-180 {
  transform: rotate(180deg);
}
</style>
