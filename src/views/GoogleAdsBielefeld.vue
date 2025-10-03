<template>
  <div>
    <Navigation />
    <!-- Hero Section -->
    <div
      class="hero min-h-[110vh] relative bg-[url('@/assets/images/google-ads-hero.jpeg')] lg:mt-0"
    >
      <div class="hero-overlay bg-black bg-opacity-80"></div>
      <div class="hero-content relative z-10 w-full lg:py-0 py-[150px]">
        <div class="container mx-auto px-4">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
          >
            <!-- Text Content -->
            <div data-aos="fade-right">
              <h1
                class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Google Ads Agentur in
                <span class="text-primary">Bielefeld</span>
              </h1>
              <p class="text-xl text-white mb-8 leading-relaxed">
                Professionelle Google Ads Betreuung direkt aus Bielefeld.
                Maximieren Sie Ihren ROI mit gezielten Kampagnen für
                Ostwestfalen-Lippe.
              </p>

              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-primary rounded-full"></div>
                  <span class="text-white"
                    >Sofortige Sichtbarkeit bei Google</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-primary rounded-full"></div>
                  <span class="text-white"
                    >Messbare Ergebnisse & ROI-Optimierung</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-primary rounded-full"></div>
                  <span class="text-white"
                    >Persönliche Betreuung aus Bielefeld</span
                  >
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <button
                  class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 text-lg px-8"
                  onclick="window.open('https://zeeg.me/orangize', '_blank')"
                >
                  Kostenlose Beratung
                </button>
                <button
                  class="btn btn-outline border-white text-white hover:bg-white hover:text-black text-lg px-8"
                  @click="scrollToSection('leistungen')"
                >
                  Unsere Leistungen
                </button>
              </div>
            </div>

            <!-- Contact Form -->
            <div data-aos="fade-left" class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl"
              ></div>
              <div class="relative">
                <HeroContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-8 w-full flex justify-center">
        <a
          href="#"
          @click.prevent="scrollToSection('losung')"
          class="text-white animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24 "
            stroke="#fff"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Lösung Section -->
    <section id="losung" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-primary font-semibold" data-aos="fade-up">
            Google Ads - Ihr direkter Weg zu neuen Kunden
          </h3>
          <h2
            class="text-4xl text-base-content font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Warum Sie auf Google Ads setzen sollten
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Linke Seite: Detaillierte Beschreibung -->
          <div data-aos="fade-right">
            <p class="text-lg text-base-content leading-relaxed">
              Google Ads ist das effektivste Instrument, um genau dann gefunden
              zu werden, wenn potenzielle Kunden aktiv nach Ihren Produkten oder
              Dienstleistungen suchen. Anders als bei klassischer Werbung
              erreichen Sie hier Menschen mit konkretem Kaufinteresse.
              <br /><br />
              Viele Unternehmen verschwenden jedoch ihr Budget durch falsch
              eingerichtete Kampagnen, unpassende Keywords oder ineffiziente
              Anzeigentexte. Das Ergebnis: hohe Kosten, aber wenig Conversions.
              <br /><br />
              Unsere **Google Ads Experten** entwickeln für Sie maßgeschneiderte
              Kampagnen, die **gezielt auf Ihre Zielgruppe ausgerichtet** sind.
              Durch kontinuierliche Optimierung und datenbasierte Entscheidungen
              **maximieren wir Ihren ROI** und sorgen für einen stetigen Strom
              qualifizierter Leads und Neukunden.
            </p>
          </div>

          <!-- Rechte Seite: Vorteile mit Icons -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Vorteil 1 -->
            <div class="flex items-start space-x-4" data-aos="fade-up">
              <div class="p-3 bg-primary text-neutral-content rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 2v8" />
                  <path d="m4.93 10.93 1.41 1.41" />
                  <path d="M2 18h2" />
                  <path d="M20 18h2" />
                  <path d="m19.07 10.93-1.41 1.41" />
                  <path d="M22 22H2" />
                  <path d="m16 6-4 4-4-4" />
                  <path d="M16 18a4 4 0 0 0-8 0" />
                </svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">
                  Sofortige Sichtbarkeit
                </h4>
                <p class="text-base-content">
                  Direkt auf Seite 1 bei Google - ohne monatelanges Warten auf
                  SEO-Ergebnisse
                </p>
              </div>
            </div>

            <!-- Vorteil 2 -->
            <div
              class="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="p-3 bg-primary text-neutral-content rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">
                  Messbare Ergebnisse
                </h4>
                <p class="text-base-content">
                  Volle Transparenz über Kosten, Klicks, Conversions und ROI
                </p>
              </div>
            </div>

            <!-- Vorteil 3 -->
            <div
              class="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="p-3 bg-primary text-neutral-content rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">
                  Präzises Targeting
                </h4>
                <p class="text-base-content">
                  Erreichen Sie genau die Zielgruppe, die für Ihr Angebot
                  relevant ist
                </p>
              </div>
            </div>

            <!-- Vorteil 4 -->
            <div
              class="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="p-3 bg-primary text-neutral-content rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">
                  Volle Kostenkontrolle
                </h4>
                <p class="text-base-content">
                  Flexibles Budget und Bezahlung nur bei tatsächlichem Interesse
                  (Pay-per-Click)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leistungen Section -->
    <section id="leistungen" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-primary font-semibold" data-aos="fade-up">
            Unsere Google Ads Leistungen
          </h3>
          <h2
            class="text-4xl text-base-content font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Maßgeschneiderte Google Ads Strategien für Ihren Erfolg
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Leistung 1 -->
          <div
            class="card bg-base-100 shadow-xl border border-primary/20 hover:border-primary transition-all duration-300"
            data-aos="fade-up"
          >
            <div class="card-body">
              <div
                class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f60"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 11v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8" />
                  <path d="M4 11V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4" />
                  <path d="M4 11H2" />
                  <path d="M22 11h-2" />
                  <path d="m8 14 4 4 4-4" />
                  <path d="M12 18v-7" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-4">
                Google Suchanzeigen
              </h3>
              <p class="text-base-content mb-6">
                Erreichen Sie potenzielle Kunden genau dann, wenn sie aktiv nach
                Ihren Produkten oder Dienstleistungen suchen. Unsere
                Suchanzeigen-Kampagnen bringen qualifizierte Leads auf Ihre
                Website.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-base-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Keyword-Recherche & -Analyse
                </li>
                <li class="flex items-center text-base-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Conversion-optimierte Anzeigentexte
                </li>
                <li class="flex items-center text-base-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Negative Keywords & Gebotsstrategien
                </li>
              </ul>
              <button
                class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 w-full"
                @click="openPricingModal('Google Suchanzeigen')"
              >
                Angebot anfordern
              </button>
            </div>
          </div>

          <!-- Leistung 2 -->
          <div
            class="card bg-base-100 shadow-xl border border-primary/20 hover:border-primary transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="card-body">
              <div
                class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f60"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="16" height="16" x="4" y="4" rx="2" />
                  <path d="M4 12h16" />
                  <path d="M12 4v16" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-4">
                Google Display Kampagnen
              </h3>
              <p class="text-base-content mb-6">
                Steigern Sie Ihre Markenbekanntheit und erreichen Sie
                potenzielle Kunden mit visuell ansprechenden Anzeigen auf
                Millionen von Websites im Google Display-Netzwerk.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-base-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Professionelles Anzeigendesign
                </li>
                <li class="flex items-center text-base-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Zielgruppenbasiertes Targeting
                </li>
                <li class="flex items-center text-base-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Remarketing-Strategien
                </li>
              </ul>
              <button
                class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 w-full"
                @click="openPricingModal('Google Display Kampagne')"
              >
                Angebot anfordern
              </button>
            </div>
          </div>

          <!-- Leistung 3 -->
          <div
            class="card bg-base-100 shadow-xl border border-primary/20 hover:border-primary transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="card-body">
              <div
                class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f60"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"
                  />
                  <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
                  <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-4">
                Google Shopping Kampagnen
              </h3>
              <p class="text-base-content mb-6">
                Präsentieren Sie Ihre Produkte mit Bild, Preis und Shopname
                direkt in den Google-Suchergebnissen. Ideal für Online-Shops und
                E-Commerce-Unternehmen.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-base-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Produktdaten-Optimierung
                </li>
                <li class="flex items-center text-base-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Feed-Einrichtung & -Management
                </li>
                <li class="flex items-center text-base-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  ROAS-Optimierung
                </li>
              </ul>
              <button
                class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 w-full"
                @click="openPricingModal('Google Shopping Kampagne')"
              >
                Angebot anfordern
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prozess Section -->
    <section id="prozess" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-primary font-semibold" data-aos="fade-up">
            Unser Prozess
          </h3>
          <h2
            class="text-4xl text-base-content font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            So optimieren wir Ihre Google Ads Kampagnen
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Schritt 1 -->
          <div
            class="card bg-base-100 shadow-xl border border-primary/20"
            data-aos="fade-up"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6"
              >
                1
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                Analyse & Strategie
              </h3>
              <p class="text-base-content">
                Wir analysieren Ihre Ziele, Zielgruppe und Wettbewerber, um eine
                maßgeschneiderte Google Ads Strategie zu entwickeln.
              </p>
            </div>
          </div>

          <!-- Schritt 2 -->
          <div
            class="card bg-base-100 shadow-xl border border-primary/20"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6"
              >
                2
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                Kampagnen-Setup
              </h3>
              <p class="text-base-content">
                Wir erstellen optimierte Kampagnenstrukturen, recherchieren
                Keywords und entwickeln überzeugende Anzeigentexte.
              </p>
            </div>
          </div>

          <!-- Schritt 3 -->
          <div
            class="card bg-base-100 shadow-xl border border-primary/20"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6"
              >
                3
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                Kontinuierliche Optimierung
              </h3>
              <p class="text-base-content">
                Wir überwachen und optimieren Ihre Kampagnen laufend, um die
                Performance zu steigern und Kosten zu senken.
              </p>
            </div>
          </div>

          <!-- Schritt 4 -->
          <div
            class="card bg-base-100 shadow-xl border border-primary/20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6"
              >
                4
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                Reporting & Analyse
              </h3>
              <p class="text-base-content">
                Sie erhalten regelmäßige, transparente Reports mit allen
                wichtigen KPIs und Optimierungsvorschlägen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Conversion Tracking Section -->
    <section id="tracking" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 class="text-lg text-primary font-semibold mb-4">
              Conversion Tracking & Analyse
            </h3>
            <h2 class="text-4xl text-base-content font-bold mb-6">
              Datenbasierte Entscheidungen für maximalen ROI
            </h2>
            <p class="text-lg text-base-content mb-6">
              Ohne präzises Tracking ist Google Ads wie Blindflug. Wir
              implementieren umfassendes Conversion Tracking, um genau zu
              messen, welche Kampagnen, Keywords und Anzeigen tatsächlich zu
              Leads, Verkäufen und Umsatz führen.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <div
                  class="p-2 bg-primary text-neutral-content rounded-full mt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content">
                    Präzises Conversion Tracking
                  </h4>
                  <p class="text-base-content">
                    Wir messen Leads, Anrufe, Formularausfüllungen und Verkäufe,
                    um den exakten ROI Ihrer Kampagnen zu bestimmen.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div
                  class="p-2 bg-primary text-neutral-content rounded-full mt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content">
                    Datenbasierte Optimierung
                  </h4>
                  <p class="text-base-content">
                    Auf Basis der Tracking-Daten optimieren wir kontinuierlich
                    Ihre Kampagnen für bessere Performance.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div
                  class="p-2 bg-primary text-neutral-content rounded-full mt-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content">
                    Transparente Berichte
                  </h4>
                  <p class="text-base-content">
                    Regelmäßige, verständliche Reports zeigen Ihnen genau, wie
                    Ihr Budget eingesetzt wird und welche Ergebnisse es bringt.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div data-aos="fade-left">
            <img
              src="@/assets/images/google-ads-analytics.gif"
              alt="Google Ads Analytics"
              class="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Keywords Section -->
    <section class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-primary font-semibold" data-aos="fade-up">
            Unsere Expertise
          </h3>
          <h2
            class="text-4xl text-base-content font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Google Ads für verschiedene Branchen
          </h2>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Google Ads einrichten</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Google Ads optimieren</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Google Ads Agentur</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Google Ads Beratung</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Google Ads für Handwerker</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Google Ads für Ärzte</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Google Ads für Anwälte</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Google Shopping Kampagne</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Google Ads Kosten senken</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Google Ads Conversion steigern</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Google Ads Remarketing</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Google Ads Qualitätsfaktor</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Regionale Präsenz Section einfügen -->
    <RegionalePraesenzGoogleAds />

    <!-- CTA Section -->
    <CTA />

    <!-- FAQ Section -->
    <section id="faq" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-primary font-semibold" data-aos="fade-up">
            Häufig gestellte Fragen
          </h3>
          <h2
            class="text-4xl text-base-content font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Alles Wichtige zu Google Ads
          </h2>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <!-- FAQ Item 1 -->
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq-accordion" checked="checked" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Was kostet Google Ads?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Die Kosten für Google Ads setzen sich aus zwei Komponenten
                  zusammen: 1) Die Klickkosten, die Sie an Google zahlen
                  (Pay-per-Click) und 2) die Kosten für die professionelle
                  Betreuung. Die Klickkosten variieren je nach Branche und
                  Wettbewerb erheblich - von wenigen Cent bis zu über 10€ pro
                  Klick. Für die Betreuung bieten wir verschiedene Pakete ab
                  500€ monatlich an, abhängig vom Umfang und Budget Ihrer
                  Kampagnen. In einem kostenlosen Erstgespräch analysieren wir
                  Ihre Anforderungen und erstellen ein maßgeschneidertes
                  Angebot.
                </p>
              </div>
            </div>

            <!-- FAQ Item 2 -->
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Wie schnell sehe ich Ergebnisse mit Google Ads?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Der große Vorteil von Google Ads ist die sofortige
                  Sichtbarkeit. Sobald Ihre Kampagnen live sind, können Sie in
                  den Suchergebnissen erscheinen und erste Klicks generieren.
                  Die ersten messbaren Ergebnisse in Form von Leads oder
                  Verkäufen sehen Sie typischerweise innerhalb der ersten Woche.
                  Die volle Performance wird jedoch erst nach einigen Wochen
                  erreicht, wenn wir genügend Daten für die Optimierung
                  gesammelt haben.
                </p>
              </div>
            </div>

            <!-- FAQ Item 3 -->
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Welches Budget sollte ich für Google Ads einplanen?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Das optimale Budget hängt von Ihrer Branche, Ihren Zielen und
                  dem Wettbewerb ab. Für lokale Dienstleister kann ein
                  monatliches Werbebudget von 500-1.000€ bereits gute Ergebnisse
                  bringen, während in wettbewerbsintensiven Branchen oder bei
                  überregionalen Kampagnen 2.000-5.000€ oder mehr sinnvoll sein
                  können. Wir beraten Sie individuell, welches Budget für Ihre
                  Ziele angemessen ist und sorgen dafür, dass jeder Euro
                  effizient eingesetzt wird.
                </p>
              </div>
            </div>

            <!-- FAQ Item 4 -->
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Warum sollte ich eine Agentur für Google Ads beauftragen?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Google Ads ist ein komplexes System mit vielen Stellschrauben.
                  Ohne Expertise verschwendet man leicht Budget durch falsche
                  Einstellungen, unpassende Keywords oder ineffiziente
                  Anzeigentexte. Als zertifizierte Google Ads Experten kennen
                  wir alle Optimierungsmöglichkeiten und Best Practices. Unsere
                  Kunden profitieren von höheren Conversion-Raten, niedrigeren
                  Klickpreisen und einem deutlich besseren ROI im Vergleich zu
                  selbst verwalteten Kampagnen.
                </p>
              </div>
            </div>

            <!-- FAQ Item 5 -->
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Wie messen Sie den Erfolg von Google Ads Kampagnen?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Wir implementieren umfassendes Conversion Tracking, um genau
                  zu messen, welche Kampagnen, Keywords und Anzeigen zu Leads,
                  Anrufen, Formularausfüllungen oder Verkäufen führen. In
                  regelmäßigen Reports zeigen wir Ihnen transparent alle
                  wichtigen KPIs wie Klicks, Conversions, Kosten pro Conversion
                  und ROI. So sehen Sie genau, welche Ergebnisse Ihr Investment
                  bringt und wo Optimierungspotenzial besteht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kontaktformular Section -->
    <ContactForm />

    <!-- <NewsletterForm /> -->

    <!-- Floating Buttons -->
    <CTAFloatingButtons />

    <!-- Footer Section -->
    <Footer />

    <!-- Pricing Modal -->
    <PricingModal ref="pricingModal" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useHead } from "@vueuse/head";
import { useRoute } from "vue-router";
import Navigation from "../components/google-ads/Navigation.vue";
import Footer from "../components/Footer.vue";
import ContactForm from "../components/ContactForm.vue";
import CTAFloatingButtons from "../components/FloatingCallButton.vue";
import NewsletterForm from "../components/NewsletterForm.vue";
import PricingModal from "../components/PricingModal.vue";
import RegionalePraesenzGoogleAds from "../components/google-ads/RegionalePraesenzGoogleAds.vue";
import CTA from "../components/CTA.vue";
import HeroContactForm from "../components/HeroContactForm.vue";

const route = useRoute();

// SEO Meta Tags für Google Ads Betreuung in Bielefeld und Umgebung
useHead({
  title:
    "Google Ads Agentur Bielefeld | Professionelle Kampagnen-Betreuung | Orangize",
  meta: [
    {
      name: "description",
      content:
        "Google Ads Agentur Bielefeld ✓ Professionelle Kampagnen für OWL ✓ ROI-Optimierung ✓ Lokale Expertise ✓ Kostenlose Beratung ✓ Messbare Ergebnisse für Ostwestfalen-Lippe.",
    },
    {
      name: "keywords",
      content:
        "google ads bielefeld, google ads agentur bielefeld, sea agentur owl, google ads beratung bielefeld, google adwords bielefeld, google ads optimierung, ppc agentur bielefeld, google kampagnen owl",
    },
    {
      property: "og:title",
      content:
        "Google Ads Agentur Bielefeld | Professionelle Kampagnen-Betreuung | Orangize",
    },
    {
      property: "og:description",
      content:
        "Professionelle Google Ads Agentur in Bielefeld. Spezialisiert auf ROI-Optimierung und messbare Ergebnisse für Unternehmen in Ostwestfalen-Lippe. Kostenlose Erstberatung!",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://orangize.de${route.path}`,
    },
  ],
});

const pricingModal = ref(null);

const openPricingModal = (interest) => {
  pricingModal.value.openModal(interest);
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

let ticking = false;

const updateNavbar = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateNavbar);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateNavbar);
});
</script>

<style scoped>
.border-blog-card {
  border-color: rgba(255, 102, 0, 0.1);
  border-width: 1px;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 102, 0, 0.2);
}
</style>
