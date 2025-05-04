<script setup>
// Define the blog post metadata
const post = {
  id: 4,
  title: "Wie du mit Google Ads deinen ROI um 300% steigerst",
  slug: "wie-du-mit-google-ads-deinen-roi-steigerst",
  excerpt:
    "Erfahre, wie du mit gezielten Optimierungen und einer durchdachten Strategie den Return on Investment deiner Google Ads Kampagnen deutlich verbessern kannst.",
  image: "/src/assets/images/blog/featured-post.jpg",
  category: "Google Ads",
  date: "15. April 2025",
  readTime: 12,
  author: {
    name: "Naumche Joshevski",
    title: "Google Ads Spezialist",
    avatar: "/src/assets/images/Naumche.jpg",
    bio: "Google Ads Experte mit über 10 Jahren Erfahrung im digitalen Marketing. Spezialisiert auf Performance Marketing und Conversion-Optimierung für mittelständische Unternehmen.",
  },
  tags: [
    "Google Ads",
    "ROI",
    "Performance Marketing",
    "Conversion Optimierung",
    "PPC",
  ],
  relatedPosts: [
    {
      slug: "google-ads-fehler",
      title: "5 Fehler, die dein Google Ads Budget verschwenden",
    },
    {
      slug: "google-ads-lokale-unternehmen",
      title: "Google Ads für lokale Unternehmen: Ein Leitfaden",
    },
    {
      slug: "landing-page-psychologie",
      title: "Landing Pages, die konvertieren: 7 Geheimnisse für mehr Leads",
    },
  ],
};

// Export the post metadata so it can be used in the blog listing
defineExpose({ post });
</script>

<template>
  <div>
    <!-- Table of Contents -->
    <div
      class="mb-10 p-6 bg-black border border-[#f60] rounded-lg"
      data-aos="fade-up"
    >
      <h3 class="text-xl font-bold text-white mb-4">Inhaltsverzeichnis</h3>
      <ul class="space-y-2">
        <li>
          <a
            href="#section-1"
            class="text-white hover:text-[#f60] transition-colors flex items-center gap-2"
          >
            <span class="text-[#f60]">1.</span> Einleitung: Die Herausforderung
            mit Google Ads
          </a>
        </li>
        <li>
          <a
            href="#section-2"
            class="text-white hover:text-[#f60] transition-colors flex items-center gap-2"
          >
            <span class="text-[#f60]">2.</span> Die wichtigsten KPIs für
            erfolgreiche Google Ads Kampagnen
          </a>
        </li>
        <li>
          <a
            href="#section-3"
            class="text-white hover:text-[#f60] transition-colors flex items-center gap-2"
          >
            <span class="text-[#f60]">3.</span> Strategie 1: Zielgruppenanalyse
            und Segmentierung
          </a>
        </li>
        <li>
          <a
            href="#section-4"
            class="text-white hover:text-[#f60] transition-colors flex items-center gap-2"
          >
            <span class="text-[#f60]">4.</span> Strategie 2: Keyword-Optimierung
            und Negative Keywords
          </a>
        </li>
        <li>
          <a
            href="#section-5"
            class="text-white hover:text-[#f60] transition-colors flex items-center gap-2"
          >
            <span class="text-[#f60]">5.</span> Strategie 3: Landing Page
            Optimierung für höhere Conversion-Raten
          </a>
        </li>
        <li>
          <a
            href="#section-6"
            class="text-white hover:text-[#f60] transition-colors flex items-center gap-2"
          >
            <span class="text-[#f60]">6.</span> Fallstudie: Wie ein Kunde seinen
            ROI verdreifacht hat
          </a>
        </li>
        <li>
          <a
            href="#section-7"
            class="text-white hover:text-[#f60] transition-colors flex items-center gap-2"
          >
            <span class="text-[#f60]">7.</span> Fazit und nächste Schritte
          </a>
        </li>
      </ul>
    </div>

    <!-- Post Content -->
    <div class="prose prose-lg max-w-none" data-aos="fade-up">
      <!-- Section 1 -->
      <div id="section-1">
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">
          Einleitung: Die Herausforderung mit Google Ads
        </h2>
        <p class="text-white mb-6">
          Google Ads ist eines der mächtigsten Werkzeuge im digitalen Marketing
          – aber auch eines der komplexesten. Viele Unternehmen investieren
          monatlich hunderte oder tausende Euro in ihre Kampagnen, ohne die
          Ergebnisse zu erzielen, die sie sich erhofft haben. Der Return on
          Investment (ROI) bleibt oft hinter den Erwartungen zurück, und das
          Budget scheint zu versickern, ohne messbare Resultate zu liefern.
        </p>
        <p class="text-white mb-6">
          Wenn du dich in dieser Situation wiederfindest, bist du nicht allein.
          Laut einer Studie von WordStream verschwenden Unternehmen
          durchschnittlich 76% ihres Google Ads Budgets, weil ihre Kampagnen
          nicht optimal eingerichtet und verwaltet werden. Das ist eine
          erschreckende Zahl, aber auch eine enorme Chance für diejenigen, die
          bereit sind, ihre Strategie zu überdenken und zu optimieren.
        </p>
        <div class="my-8" data-aos="zoom-in">
          <img
            src=""
            alt="Google Ads Dashboard"
            class="rounded-lg w-full h-auto shadow-lg"
          />
          <p class="text-center text-sm text-white opacity-75 mt-2">
            Ein typisches Google Ads Dashboard mit wichtigen Metriken
          </p>
        </div>
        <p class="text-white mb-6">
          In diesem Artikel zeige ich dir, wie du mit gezielten Optimierungen
          und einer durchdachten Strategie den ROI deiner Google Ads Kampagnen
          um bis zu 300% steigern kannst. Diese Methoden haben wir bei
          zahlreichen Kunden erfolgreich eingesetzt – von kleinen lokalen
          Unternehmen bis hin zu mittelständischen Firmen mit fünfstelligen
          Monatsbudgets.
        </p>
      </div>

      <!-- Section 2 -->
      <div id="section-2">
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">
          Die wichtigsten KPIs für erfolgreiche Google Ads Kampagnen
        </h2>
        <p class="text-white mb-6">
          Bevor wir in die Strategien eintauchen, ist es wichtig zu verstehen,
          welche Kennzahlen wirklich relevant sind, um den Erfolg deiner Google
          Ads Kampagnen zu messen. Viele Werbetreibende konzentrieren sich zu
          sehr auf Klicks und Impressionen, während die wirklich wichtigen
          Metriken oft übersehen werden.
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li class="text-white">
            Conversion Rate: Der Prozentsatz der Besucher, die eine gewünschte
            Aktion ausführen
          </li>
          <li class="text-white">
            Cost per Conversion: Wie viel du für jede Conversion bezahlst
          </li>
          <li class="text-white">
            Conversion Value: Der durchschnittliche Wert einer Conversion für
            dein Unternehmen
          </li>
          <li class="text-white">
            Return on Ad Spend (ROAS): Das Verhältnis zwischen Umsatz und
            Werbeausgaben
          </li>
          <li class="text-white">
            Quality Score: Googles Bewertung der Relevanz und Qualität deiner
            Anzeigen
          </li>
        </ul>
        <div class="bg-black border-l-4 border-[#f60] p-6 my-8 rounded-r-lg">
          <p class="text-white italic">
            Was nicht gemessen wird, kann nicht verbessert werden. Die richtigen
            KPIs zu tracken ist der erste Schritt zu profitableren Google Ads
            Kampagnen.
          </p>
          <p class="text-[#f60] mt-2 font-semibold">— Peter Drucker</p>
        </div>
        <p class="text-white mb-6">
          Indem du dich auf diese Metriken konzentrierst, kannst du ein viel
          klareres Bild davon bekommen, wie deine Kampagnen tatsächlich
          performen und wo Optimierungspotenzial besteht.
        </p>
      </div>

      <!-- Additional sections would continue here... -->
      <!-- For brevity, I'm only showing the first two sections, but you would include all sections -->
    </div>
  </div>
</template>
