<script setup>
import NewsletterForm from "../NewsletterForm.vue";
import blogImage from "@/assets/images/blog-posts/google-ads-intro.jpg";
import avatarImage from "@/assets/images/Naumche.jpg";

const post = {
  id: 1,
  title:
    "Google Ads für Einsteiger: Was ist das eigentlich und warum solltest du es nutzen?",
  slug: "google-ads-einfuehrung",
  excerpt:
    "Eine unterhaltsame Einführung in die Welt von Google Ads - ohne kompliziertes Fachchinesisch, dafür mit vielen praktischen Tipps und einem Augenzwinkern erklärt.",
  image: blogImage,
  category: "Google Ads",
  date: "28. April 2025",
  readTime: 8,
  author: {
    name: "Naumche Joshevski",
    title: "Google Ads Spezialist",
    avatar: avatarImage,
    bio: "Google Ads Experte mit über 5 Jahren Erfahrung im digitalen Marketing. Spezialisiert auf Performance Marketing und Conversion-Optimierung für mittelständische Unternehmen.",
  },
  tags: ["Google Ads", "Online Marketing", "PPC", "Werbung", "Einsteiger"],
  relatedPosts: [
    {
      slug: "wie-du-mit-google-ads-deinen-roi-steigerst",
      title: "Wie du mit Google Ads deinen ROI um 300% steigerst",
    },
  ],
};

// Falls von außen benötigt
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
            <span class="text-[#f60]">1.</span> Google Ads: Wenn Google und
            Werbung ein Kind bekommen
          </a>
        </li>
        <li>
          <a
            href="#section-2"
            class="text-white hover:text-[#f60] transition-colors flex items-center gap-2"
          >
            <span class="text-[#f60]">2.</span> Warum Google Ads? (Oder: Warum
            nicht einfach im Wald nach Kunden schreien?)
          </a>
        </li>
        <li>
          <a
            href="#section-3"
            class="text-white hover:text-[#f60] transition-colors flex items-center gap-2"
          >
            <span class="text-[#f60]">3.</span> Die verschiedenen
            Anzeigenformate (Für jeden Geschmack was dabei!)
          </a>
        </li>
        <li>
          <a
            href="#section-4"
            class="text-white hover:text-[#f60] transition-colors flex items-center gap-2"
          >
            <span class="text-[#f60]">4.</span> So funktioniert die Abrechnung
            (Keine Panik, dein Erstgeborenes bleibt dir)
          </a>
        </li>
        <li>
          <a
            href="#section-5"
            class="text-white hover:text-[#f60] transition-colors flex items-center gap-2"
          >
            <span class="text-[#f60]">5.</span> Erste Schritte: Deine Google Ads
            Kampagne zum Leben erwecken
          </a>
        </li>
      </ul>
    </div>

    <!-- Post Content -->
    <div class="prose prose-lg max-w-none" data-aos="fade-up">
      <!-- Section 1 -->
      <div id="section-1">
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">
          Google Ads: Wenn Google und Werbung ein Kind bekommen
        </h2>
        <p class="text-white mb-6">
          Stell dir vor, du hast einen Zauberstab, mit dem du genau dann
          auftauchen kannst, wenn jemand nach deinem Produkt oder deiner
          Dienstleistung sucht. Klingt nach einem schlechten Fantasy-Roman?
          Nein, das ist Google Ads! Früher als "Google AdWords" bekannt (bis
          Google beschloss, dass zwei Wörter zu kompliziert sind), ist Google
          Ads die Werbeplattform des Suchmaschinen-Giganten.
        </p>
        <p class="text-white mb-6">
          Aber was ist Google Ads eigentlich genau? Stell es dir wie eine
          digitale Litfaßsäule vor – nur dass diese Litfaßsäule magisch ist und
          nur den Menschen erscheint, die tatsächlich nach dem suchen, was du
          anbietest. Und statt in einer dunklen Gasse steht diese Litfaßsäule
          ganz oben auf der ersten Seite von Google. Ziemlich cool, oder?
        </p>

        <div
          class="my-8 bg-[#f60]/10 border border-[#f60] p-6 rounded-lg"
          data-aos="fade-up"
        >
          <div class="flex items-start gap-4">
            <div class="p-2 bg-[#f60] rounded-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-white mb-2">Fun Fact</h4>
              <p class="text-white">
                Google Ads wurde 2000 mit gerade mal 350 Werbetreibenden
                gestartet. Heute nutzen über 4 Millionen Unternehmen die
                Plattform. Das ist, als würde ein kleiner Dorfladen plötzlich
                zum globalen Megakonzern!
              </p>
            </div>
          </div>
        </div>

        <p class="text-white mb-6">
          Im Kern ist Google Ads ein Auktionssystem. Du bietest auf Keywords
          (Suchbegriffe), die potenzielle Kunden in die Suchmaschine eingeben
          könnten. Wenn jemand nach "vegane Schokoladentorte Berlin" sucht und
          du auf diesen Begriff geboten hast – tada! – erscheint deine Anzeige.
          Aber keine Sorge, du musst nicht wie bei einer Kunstauktion wild mit
          Schildern wedeln. Google macht das alles automatisch für dich.
        </p>
      </div>

      <!-- Section 2 -->
      <div id="section-2">
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">
          Warum Google Ads? (Oder: Warum nicht einfach im Wald nach Kunden
          schreien?)
        </h2>
        <p class="text-white mb-6">
          "Aber ich habe doch schon eine Website! Und einen Instagram-Account!
          Und ich habe sogar mal einen TikTok-Tanz gemacht!" höre ich dich
          rufen. Das ist großartig! Aber lass mich dir ein kleines Geheimnis
          verraten: Google bearbeitet über 8,5 Milliarden Suchanfragen. Täglich.
          Das sind mehr Menschen, als dein TikTok-Tanz jemals erreichen wird (es
          sei denn, du bist heimlich ein viraler Tanzstar – dann ignoriere
          diesen Teil).
        </p>

        <div class="my-8" data-aos="zoom-in">
          <img
            src="@/assets/images/blog-posts/google-such-volume.jpg"
            alt="Google Suchanfragen Visualisierung"
            class="rounded-lg w-full h-auto shadow-lg"
          />
          <p class="text-center text-sm text-white opacity-75 mt-2">
            So viele Suchanfragen pro Sekunde – und jede davon könnte dein
            nächster Kunde sein!
          </p>
        </div>

        <p class="text-white mb-6">
          Hier sind fünf Gründe, warum Google Ads dein neuer bester Freund sein
          sollte:
        </p>

        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li class="text-white">
            <strong class="text-[#f60]">Zielgerichtete Werbung:</strong> Du
            erreichst Menschen, die AKTIV nach deinen Produkten oder
            Dienstleistungen suchen. Das ist, als würdest du einen Regenschirm
            nur den Leuten anbieten, die gerade im Regen stehen.
          </li>
          <li class="text-white">
            <strong class="text-[#f60]">Messbare Ergebnisse:</strong> Anders als
            bei einer Plakatwerbung weißt du genau, wie viele Menschen deine
            Anzeige gesehen, angeklickt und daraufhin etwas gekauft haben. Keine
            mehr "Ich glaube, die Werbung hat funktioniert"-Momente.
          </li>
          <li class="text-white">
            <strong class="text-[#f60]">Flexibles Budget:</strong> Du kannst mit
            5€ pro Tag starten oder 5.000€ ausgeben – ganz nach deinen
            Möglichkeiten. Google Ads ist wie ein All-you-can-eat-Buffet, bei
            dem du nur für das bezahlst, was du tatsächlich isst.
          </li>
          <li class="text-white">
            <strong class="text-[#f60]">Schnelle Ergebnisse:</strong> Anders als
            SEO, das Monate dauern kann, kannst du mit Google Ads innerhalb von
            Minuten nach der Aktivierung erste Besucher auf deiner Website
            begrüßen.
          </li>
          <li class="text-white">
            <strong class="text-[#f60]">Kontrolle:</strong> Du entscheidest,
            wann, wo und wem deine Anzeigen angezeigt werden. Es ist wie ein
            Fernbedienung für deine Werbung!
          </li>
        </ul>

        <div class="bg-black border-l-4 border-[#f60] p-6 my-8 rounded-r-lg">
          <p class="text-white italic">
            Google Ads ist wie Dating: Du musst nicht jeden beeindrucken – nur
            die, die wirklich zu dir passen. Und genau wie beim Dating solltest
            du nicht mit einer Lüge beginnen.
          </p>
          <p class="text-[#f60] mt-2 font-semibold">
            — Ein weiser Marketingexperte (der vielleicht ich bin)
          </p>
        </div>
      </div>

      <NewsletterForm />

      <!-- Section 3 -->
      <div id="section-3">
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">
          Die verschiedenen Anzeigenformate (Für jeden Geschmack was dabei!)
        </h2>
        <p class="text-white mb-6">
          Google Ads ist nicht nur die klassische Textanzeige, die du oben in
          den Suchergebnissen siehst. Oh nein, Google hat ein ganzes Buffet an
          Werbeformaten für dich vorbereitet. Hier ist deine Speisekarte:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="bg-base-200 p-6 rounded-lg border border-[#f60]/30">
            <h4 class="text-xl font-bold text-white mb-3">Suchanzeigen</h4>
            <p class="text-white">
              Die Klassiker! Textanzeigen, die erscheinen, wenn jemand bei
              Google sucht. Wie ein Kellner, der genau dann auftaucht, wenn du
              Hunger hast.
            </p>
          </div>
          <div class="bg-base-200 p-6 rounded-lg border border-[#f60]/30">
            <h4 class="text-xl font-bold text-white mb-3">Display-Anzeigen</h4>
            <p class="text-white">
              Visuelle Anzeigen auf Websites im Google-Netzwerk. Wie Poster, die
              überall dort hängen, wo deine potenziellen Kunden unterwegs sind.
            </p>
          </div>
          <div class="bg-base-200 p-6 rounded-lg border border-[#f60]/30">
            <h4 class="text-xl font-bold text-white mb-3">Video-Anzeigen</h4>
            <p class="text-white">
              Anzeigen auf YouTube. Perfekt für alle, die denken: "Mein Produkt
              ist zu cool, um es nur in Text zu beschreiben!"
            </p>
          </div>
          <div class="bg-base-200 p-6 rounded-lg border border-[#f60]/30">
            <h4 class="text-xl font-bold text-white mb-3">Shopping-Anzeigen</h4>
            <p class="text-white">
              Zeigen deine Produkte mit Bild, Preis und Shop-Name. Wie ein
              digitales Schaufenster direkt in den Suchergebnissen.
            </p>
          </div>
        </div>

        <p class="text-white mb-6">
          Mein persönlicher Favorit? Eine Kombination aus allem! Wie bei einem
          guten Buffet solltest du nicht nur beim Nachtisch zuschlagen, sondern
          von allem etwas probieren. Eine gut ausbalancierte Google
          Ads-Strategie nutzt verschiedene Anzeigenformate, um Kunden in
          verschiedenen Phasen ihrer "Kaufreise" abzuholen.
        </p>

        <p class="text-white mb-6">
          Zum Beispiel: Jemand sieht deine Display-Anzeige und denkt "Hmm,
          interessant". Später sucht er aktiv nach deinem Produkt und sieht
          deine Suchanzeige. Dann schaut er ein YouTube-Video und – oh, da ist
          wieder deine Marke! Das nennt man "Omnipräsenz" oder auf Deutsch: "Ich
          bin überall und du kannst mir nicht entkommen" (klingt ein bisschen
          gruselig, ist aber effektiv!).
        </p>
      </div>

      <!-- Section 4 -->
      <div id="section-4">
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">
          So funktioniert die Abrechnung (Keine Panik, dein Erstgeborenes bleibt
          dir)
        </h2>
        <p class="text-white mb-6">
          Eine der größten Sorgen bei Werbung ist immer: "Wie viel wird mich das
          kosten? Muss ich mein Auto verkaufen? Oder schlimmer noch – meinen
          Netflix-Account kündigen?" Keine Sorge, bei Google Ads behältst du die
          Kontrolle über dein Budget.
        </p>

        <p class="text-white mb-6">
          Das Schöne an Google Ads ist das Pay-per-Click-Modell (PPC). Das
          bedeutet: Du zahlst nur, wenn jemand tatsächlich auf deine Anzeige
          klickt. Stell dir vor, du müsstest im Restaurant nur für die Gerichte
          bezahlen, die du tatsächlich isst, und nicht für die, die du nur auf
          der Speisekarte anschaust. Klingt fair, oder?
        </p>

        <div
          class="my-8 bg-[#f60]/10 border border-[#f60] p-6 rounded-lg"
          data-aos="fade-up"
        >
          <div class="flex items-start gap-4">
            <div class="p-2 bg-[#f60] rounded-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-white mb-2">Pro Tipp</h4>
              <p class="text-white">
                Setze ein Tagesbudget fest und halte dich daran! Google Ads kann
                süchtig machen, wenn du siehst, wie gut es funktioniert. Wie bei
                einem Spielautomaten könntest du denken "Nur noch ein bisschen
                mehr..." – aber sei stark und bleib bei deinem Budget!
              </p>
            </div>
          </div>
        </div>

        <p class="text-white mb-6">
          Hier ist, wie die Kosten bei Google Ads entstehen:
        </p>

        <ol class="list-decimal pl-6 mb-6 space-y-2">
          <li class="text-white">
            Du legst ein <strong class="text-[#f60]">Tagesbudget</strong> fest
            (z.B. 10€ pro Tag)
          </li>
          <li class="text-white">
            Du bietest auf <strong class="text-[#f60]">Keywords</strong> (z.B.
            bist du bereit, 0,50€ pro Klick zu zahlen)
          </li>
          <li class="text-white">
            Google führt eine
            <strong class="text-[#f60]">Auktion</strong> durch, jedes Mal wenn
            jemand sucht
          </li>
          <li class="text-white">
            Deine Anzeige wird angezeigt, wenn dein Gebot und deine
            <strong class="text-[#f60]">Anzeigenqualität</strong> gut genug sind
          </li>
          <li class="text-white">
            Du zahlst nur, wenn jemand
            <strong class="text-[#f60]">klickt</strong> (und nie mehr als dein
            Tagesbudget)
          </li>
        </ol>

        <p class="text-white mb-6">
          Der tatsächliche Preis pro Klick variiert je nach Branche. In manchen
          Bereichen wie Versicherungen oder Rechtsberatung kann ein Klick
          mehrere Euro kosten (ja, wirklich!). In anderen Nischen kommst du
          vielleicht mit 20 Cent pro Klick davon. Es ist wie beim
          Immobilienmarkt: Die Lage (oder in diesem Fall: das Keyword) bestimmt
          den Preis.
        </p>

        <div class="bg-black border-l-4 border-[#f60] p-6 my-8 rounded-r-lg">
          <p class="text-white italic">
            Die Frage ist nicht, ob du dir Google Ads leisten kannst, sondern ob
            du es dir leisten kannst, NICHT auf Google Ads zu sein, während
            deine Konkurrenz dort ist.
          </p>
          <p class="text-[#f60] mt-2 font-semibold">
            — Jeder erfolgreiche Online-Unternehmer
          </p>
        </div>
      </div>

      <!-- Section 5 -->
      <div id="section-5">
        <h2 class="text-3xl font-bold text-white mt-12 mb-6">
          Erste Schritte: Deine Google Ads Kampagne zum Leben erwecken
        </h2>
        <p class="text-white mb-6">
          Genug der Theorie – lass uns praktisch werden! Hier ist dein
          5-Schritte-Plan, um deine erste Google Ads Kampagne zu starten. Keine
          Sorge, es ist einfacher als IKEA-Möbel aufzubauen (und du brauchst
          keinen Inbusschlüssel).
        </p>

        <div class="mb-8">
          <h4 class="text-xl font-bold text-white mb-4">
            Schritt 1: Google Ads-Konto erstellen
          </h4>
          <p class="text-white mb-4">
            Gehe zu ads.google.com und erstelle ein Konto. Du brauchst nur eine
            Google-E-Mail-Adresse und ein paar grundlegende Informationen über
            dein Unternehmen. Einfacher als die Anmeldung bei einem neuen
            Social-Media-Netzwerk!
          </p>
        </div>

        <div class="mb-8">
          <h4 class="text-xl font-bold text-white mb-4">
            Schritt 2: Deine erste Kampagne einrichten
          </h4>
          <p class="text-white mb-4">
            Wähle "Neue Kampagne erstellen" und dann deinen Kampagnentyp. Für
            Anfänger empfehle ich "Suchnetzwerk" – das ist wie Schwimmen im
            Kinderbecken, bevor du ins tiefe Wasser springst.
          </p>
          <p class="text-white mb-4">
            Setze dein Budget (starte klein, du kannst es später erhöhen) und
            wähle deine Zielregion. Willst du nur Kunden aus Berlin? Oder ganz
            Deutschland? Oder träumst du von globaler Dominanz? Du entscheidest!
          </p>
        </div>

        <div class="mb-8">
          <h4 class="text-xl font-bold text-white mb-4">
            Schritt 3: Keywords recherchieren und auswählen
          </h4>
          <p class="text-white mb-4">
            Jetzt kommt der kreative Teil! Überlege, wonach deine potenziellen
            Kunden suchen könnten. Verkaufst du handgemachte Ledertaschen? Dann
            könnten Keywords wie "handgemachte Ledertasche kaufen", "hochwertige
            Ledertaschen" oder "nachhaltige Lederwaren" relevant sein.
          </p>
          <p class="text-white mb-4">
            Google hat ein Tool namens "Keyword-Planer", das dir hilft, die
            richtigen Keywords zu finden und zu sehen, wie oft nach ihnen
            gesucht wird. Es ist wie ein Wünschelrutengänger für profitable
            Suchbegriffe!
          </p>
        </div>

        <div class="mb-8">
          <h4 class="text-xl font-bold text-white mb-4">
            Schritt 4: Anzeigen erstellen
          </h4>
          <p class="text-white mb-4">
            Jetzt wird's lustig! Schreibe überzeugende Anzeigentexte, die
            Menschen zum Klicken bringen. Eine gute Anzeige:
          </p>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li class="text-white">Enthält dein Keyword (zeigt Relevanz)</li>
            <li class="text-white">
              Bietet einen klaren Nutzen ("Spare 50%" oder "24h Lieferung")
            </li>
            <li class="text-white">
              Hat einen Call-to-Action ("Jetzt kaufen" oder "Termin
              vereinbaren")
            </li>
            <li class="text-white">
              Hebt dich von der Konkurrenz ab ("Handgefertigt in Berlin" oder
              "Seit 1995")
            </li>
          </ul>
          <p class="text-white mb-4">
            Erstelle mindestens 3 verschiedene Anzeigenvarianten. Warum? Weil
            selbst Marketing-Gurus nicht vorhersagen können, welche Anzeige am
            besten funktioniert. Lass die Daten sprechen!
          </p>
        </div>

        <div class="mb-8">
          <h4 class="text-xl font-bold text-white mb-4">
            Schritt 5: Conversion-Tracking einrichten
          </h4>
          <p class="text-white mb-4">
            Der wichtigste Schritt, den viele vergessen! Richte
            Conversion-Tracking ein, um zu sehen, welche Klicks tatsächlich zu
            Verkäufen, Anmeldungen oder Kontaktanfragen führen. Ohne
            Conversion-Tracking ist Google Ads wie Bogenschießen mit verbundenen
            Augen – du weißt nicht, ob du triffst!
          </p>
          <p class="text-white mb-4">
            Google macht es dir einfach: Folge den Anweisungen im
            Conversion-Tracking-Bereich und füge den Code zu deiner Website
            hinzu. Wenn du mit WordPress arbeitest, gibt es sogar Plugins, die
            dir dabei helfen.
          </p>
        </div>

        <div
          class="my-8 bg-[#f60]/10 border border-[#f60] p-6 rounded-lg"
          data-aos="fade-up"
        >
          <div class="flex items-start gap-4">
            <div class="p-2 bg-[#f60] rounded-full text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-white mb-2">
                Wichtiger Hinweis
              </h4>
              <p class="text-white">
                Google Ads ist wie ein guter Wein – es wird mit der Zeit besser!
                Deine ersten Ergebnisse sind selten deine besten. Gib deiner
                Kampagne mindestens 2-4 Wochen Zeit, sammle Daten und optimiere
                dann basierend auf den Ergebnissen. Geduld zahlt sich aus!
              </p>
            </div>
          </div>
        </div>

        <p class="text-white mb-6">
          Und das war's! Du bist jetzt offiziell auf dem Weg, ein Google
          Ads-Profi zu werden. Natürlich gibt es noch viel mehr zu lernen – von
          Anzeigenerweiterungen über Remarketing bis hin zu automatisierten
          Gebotsstrategien. Aber Rom wurde auch nicht an einem Tag erbaut
          (obwohl ich wette, mit Google Ads hätten sie es schneller geschafft).
        </p>

        <p class="text-white mb-6">
          Denk daran: Der beste Weg zu lernen ist durch Tun. Starte mit einem
          kleinen Budget, experimentiere und beobachte die Ergebnisse. Und wenn
          du Hilfe brauchst – nun, dafür gibt es Experten wie uns! 😉
        </p>

        <div class="bg-black border-l-4 border-[#f60] p-6 my-8 rounded-r-lg">
          <p class="text-white italic">
            Google Ads ist wie Kochen: Am Anfang folgst du strikt dem Rezept,
            aber mit der Zeit entwickelst du ein Gefühl dafür und fängst an,
            deine eigenen erfolgreichen Kreationen zu zaubern.
          </p>
          <p class="text-[#f60] mt-2 font-semibold">
            — Ein Google Ads-Experte mit zu vielen Kochshows im Fernsehen
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
