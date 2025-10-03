<template>
  <div>
    <Navigation />
    <!-- Hero Section -->
    <div
      class="hero min-h-[110vh] relative bg-[url('@/assets/images/website-erstellen-hero.jpg')] lg:mt-0"
    >
      <div class="hero-overlay bg-black bg-opacity-95"></div>
      <div class="hero-content relative z-10 w-full max-w-7xl mx-auto px-4 lg:py-0 py-[150px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Side - Content -->
          <div class="text-left text-neutral-content" data-aos="fade-right">
            <div class="mb-4">
              <span class="text-primary font-semibold text-lg"
                >Webdesign Herford</span
              >
            </div>
            <h1
              class="text-4xl lg:text-6xl text-white font-bold mb-6 leading-tight"
            >
              Website erstellen lassen in
              <span class="text-primary">Herford</span>
            </h1>
            <p class="text-xl lg:text-2xl mb-6 text-neutral-content/90">
              Ihre lokale Webdesign-Agentur für professionelle Websites in
              Herford und Ostwestfalen
            </p>
            <div class="space-y-4 mb-8">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
                <span class="text-lg">Responsive Design für alle Geräte</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
                <span class="text-lg"
                  >SEO-optimiert für bessere Google-Rankings</span
                >
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-primary rounded-full"></div>
                <span class="text-lg"
                  >Persönliche Betreuung vor Ort in Herford</span
                >
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                class="btn btn-primary bg-[#f60] border-none hover:bg-[#f60]/90 text-white px-8"
                @click="scrollToSection('kontakt')"
              >
                Kostenloses Angebot erhalten
              </button>
              <button
                class="btn btn-outline border-white text-white hover:bg-white hover:text-black px-8"
                @click="scrollToSection('projekte')"
              >
                Referenzen ansehen
              </button>
            </div>
          </div>

          <!-- Right Side - Contact Form -->
          <div
            class="flex justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <HeroContactForm />
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 w-full flex justify-center">
        <a
          href="#"
          @click.prevent="scrollToSection('losung')"
          class="text-white animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
            Webdesign-Agentur direkt in Herford
          </h3>
          <h2
            class="text-4xl text-base-content font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Warum Herforeder Unternehmen auf uns vertrauen
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Linke Seite: Detaillierte Beschreibung -->
          <div data-aos="fade-right">
            <p class="text-lg text-base-content leading-relaxed">
              Als lokale Webdesign-Agentur in Herford kennen wir die Bedürfnisse
              von Unternehmen in Ostwestfalen. Wir sind nicht nur Ihre digitalen
              Partner, sondern auch Ihre Nachbarn – mit persönlicher Betreuung
              direkt vor Ort.
              <br /><br />
              Viele Herforeder Unternehmen verlieren täglich potenzielle Kunden
              durch veraltete oder nicht mobiloptimierte Websites. Eine
              **moderne, benutzerfreundliche Website** hingegen schafft
              Vertrauen bei Ihren lokalen Kunden und steigert Ihren Umsatz –
              rund um die Uhr.
              <br /><br />
              Wir erstellen **maßgeschneiderte Websites für Herford**, die nicht
              nur optisch überzeugen, sondern auch bei Google für "Herford + Ihr
              Service" optimal gefunden werden. Mit **lokaler SEO-Optimierung**
              und einer **conversion-orientierten Struktur** bringen wir mehr
              Herforeder Kunden zu Ihnen.
            </p>
          </div>

          <!-- Rechte Seite: Vorteile mit Icons -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Vorteil 1 -->
            <div class="flex items-start space-x-4" data-aos="fade-up">
              <div class="p-3 bg-primary text-primary-content rounded-full">
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
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h10" />
                  <path d="M7 12h10" />
                  <path d="M7 17h10" />
                </svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">
                  Responsive Design
                </h4>
                <p class="text-base-content">
                  Perfekte Darstellung auf allen Geräten – vom Smartphone bis
                  zum Desktop
                </p>
              </div>
            </div>

            <!-- Vorteil 2 -->
            <div
              class="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="p-3 bg-primary text-primary-content rounded-full">
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
                  <path
                    d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">
                  Modernes Design
                </h4>
                <p class="text-base-content">
                  Zeitgemäße Optik, die Ihre Marke perfekt repräsentiert
                </p>
              </div>
            </div>

            <!-- Vorteil 3 -->
            <div
              class="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="p-3 bg-primary text-primary-content rounded-full">
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
                  <path d="M9 10h.01" />
                  <path d="M15 10h.01" />
                  <path
                    d="M12 18H9.2c-3.2 0-4.8 0-6-1.2C2 15.6 2 14 2 10.8V4h20v6.8c0 3.2 0 4.8-1.2 6-1.2 1.2-2.8 1.2-6 1.2H12Z"
                  />
                  <path d="M2 4h20" />
                  <path d="M4 2v2" />
                  <path d="M10 2v2" />
                  <path d="M16 2v2" />
                  <path d="M22 10v2" />
                  <path d="M12 10v2" />
                  <path d="M12 12a4 4 0 0 0 4 4h4" />
                </svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">
                  SEO-Optimierung
                </h4>
                <p class="text-base-content">
                  Bessere Rankings bei Google durch technische und inhaltliche
                  Optimierung
                </p>
              </div>
            </div>

            <!-- Vorteil 4 -->
            <div
              class="flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="p-3 bg-primary text-primary-content rounded-full">
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
                  Conversion-Optimierung
                </h4>
                <p class="text-base-content">
                  Strategische Gestaltung, die Besucher zu zahlenden Kunden
                  macht
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
            Unsere Webdesign-Leistungen
          </h3>
          <h2
            class="text-4xl text-base-content font-bold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Maßgeschneiderte Website-Lösungen für Ihr Business
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
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 14v1" />
                  <path d="M9 19v2" />
                  <path d="M9 3v2" />
                  <path d="M9 9v1" />
                  <path d="M15 14v1" />
                  <path d="M15 19v2" />
                  <path d="M15 3v2" />
                  <path d="M15 9v1" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-4">
                Unternehmenswebsites
              </h3>
              <p class="text-base-content mb-6">
                Professionelle Firmenwebsites, die Ihr Unternehmen optimal
                präsentieren und Vertrauen bei potenziellen Kunden schaffen. Mit
                allen wichtigen Elementen wie Über uns, Leistungen, Referenzen
                und Kontakt.
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
                  Responsive Design
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
                  SEO-Optimierung
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
                  Content Management System
                </li>
              </ul>
              <button
                class="btn btn-primary w-full"
                @click="openPricingModal('Unternehmenswebsite')"
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
                  <path d="M12 2H2v10h10V2Z" />
                  <path d="M22 12h-10v10h10V12Z" />
                  <path d="M12 12H2v10h10V12Z" />
                  <path d="M22 2h-10v10h10V2Z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-4">
                Landing Pages
              </h3>
              <p class="text-base-content mb-6">
                Conversion-optimierte Landing Pages für Ihre Werbekampagnen.
                Speziell entwickelt, um Besucher in Leads oder Kunden zu
                verwandeln – ideal für Google Ads und andere Marketingmaßnahmen.
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
                  Conversion-optimiert
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
                  A/B-Testing
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
                  Tracking & Analyse
                </li>
              </ul>
              <button
                class="btn btn-primary w-full"
                @click="openPricingModal('Landing Page')"
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
                    d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-4">
                Online-Shops
              </h3>
              <p class="text-base-content mb-6">
                Professionelle E-Commerce-Lösungen, die Ihnen den Einstieg in
                den Online-Handel ermöglichen. Mit benutzerfreundlichem Design
                und sicheren Zahlungsmethoden für optimale Conversion-Raten.
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
                  Produktkatalog
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
                  Sichere Zahlungsmethoden
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
                  Bestandsverwaltung
                </li>
              </ul>
              <button
                class="btn btn-primary w-full"
                @click="openPricingModal('Online-Shop')"
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
            So erstellen wir Ihre Website
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
                class="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold mx-auto mb-6"
              >
                1
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                Beratung & Analyse
              </h3>
              <p class="text-base-content">
                Wir analysieren Ihre Ziele, Zielgruppe und Wettbewerber, um eine
                maßgeschneiderte Strategie zu entwickeln.
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
                class="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold mx-auto mb-6"
              >
                2
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                Konzeption & Design
              </h3>
              <p class="text-base-content">
                Wir erstellen ein maßgeschneidertes Design-Konzept, das Ihre
                Marke perfekt repräsentiert und Ihre Ziele unterstützt.
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
                class="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold mx-auto mb-6"
              >
                3
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                Entwicklung
              </h3>
              <p class="text-base-content">
                Unsere Entwickler setzen das Design um und integrieren alle
                gewünschten Funktionen und Inhalte.
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
                class="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold mx-auto mb-6"
              >
                4
              </div>
              <h3 class="text-xl font-bold text-base-content mb-4">
                Launch & Optimierung
              </h3>
              <p class="text-base-content">
                Nach umfangreichen Tests geht Ihre Website online und wird
                kontinuierlich optimiert und verbessert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projekte Section -->
    <Projects />

    <!-- SEO Section -->
    <section id="seo" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 class="text-lg text-primary font-semibold mb-4">
              Suchmaschinenoptimierung
            </h3>
            <h2 class="text-4xl text-base-content font-bold mb-6">
              Besser gefunden werden mit SEO
            </h2>
            <p class="text-lg text-base-content mb-6">
              Eine schöne Website nützt wenig, wenn sie niemand findet. Deshalb
              integrieren wir von Anfang an umfassende SEO-Maßnahmen in jede
              Website, die wir erstellen.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <div
                  class="p-2 bg-primary text-primary-content rounded-full mt-1"
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
                  <h4 class="font-bold text-base-content">Technische SEO</h4>
                  <p class="text-base-content">
                    Optimale Ladezeiten, mobile Optimierung, strukturierte Daten
                    und sauberer Code für bessere Rankings.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div
                  class="p-2 bg-primary text-primary-content rounded-full mt-1"
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
                  <h4 class="font-bold text-base-content">On-Page SEO</h4>
                  <p class="text-base-content">
                    Keyword-optimierte Inhalte, Meta-Tags, Überschriften und
                    interne Verlinkung für bessere Sichtbarkeit.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div
                  class="p-2 bg-primary text-primary-content rounded-full mt-1"
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
                  <h4 class="font-bold text-base-content">Technische SEO</h4>
                  <p class="text-base-content">
                    Optimale Ladezeiten, mobile Optimierung, strukturierte Daten
                    und sauberer Code für bessere Rankings.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div
                  class="p-2 bg-primary text-primary-content rounded-full mt-1"
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
                  <h4 class="font-bold text-base-content">On-Page SEO</h4>
                  <p class="text-base-content">
                    Keyword-optimierte Inhalte, Meta-Tags, Überschriften und
                    interne Verlinkung für bessere Sichtbarkeit.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div
                  class="p-2 bg-primary text-primary-content rounded-full mt-1"
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
                  <h4 class="font-bold text-base-content">Local SEO</h4>
                  <p class="text-base-content">
                    Optimierung für lokale Suchanfragen, Google My Business und
                    lokale Backlinks für regionale Unternehmen.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div data-aos="fade-left">
            <img
              src="@/assets/images/seo-illustration.png"
              alt="SEO Optimierung"
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
            Website erstellen lassen für verschiedene Branchen
          </h2>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Website erstellen lassen</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Webdesign Agentur</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Professionelle Website</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Homepage erstellen</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Landingpage erstellen</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Website für Handwerker</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Website für Ärzte</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Online-Shop erstellen</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Website für Anwälte</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">Responsive Webdesign</p>
          </div>
          <div
            class="bg-base-100 p-4 rounded-lg border border-primary/20 text-center"
          >
            <p class="text-base-content">SEO-optimierte Website</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Regionale Präsenz Section einfügen -->
    <RegionalePraesenz />

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
            Alles Wichtige zum Thema Website erstellen
          </h2>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <!-- FAQ Item 1 -->
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq-accordion" checked="checked" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Was kostet eine professionelle Website?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Die Kosten für eine professionelle Website hängen von
                  verschiedenen Faktoren ab: Umfang, Design, Funktionen und
                  Ihren individuellen Anforderungen. Eine einfache
                  Unternehmenswebsite beginnt bei etwa 699€, während komplexere
                  Projekte wie Online-Shops oder umfangreiche Portale
                  entsprechend höher liegen. In einem kostenlosen Erstgespräch
                  analysieren wir Ihre Anforderungen und erstellen ein
                  maßgeschneidertes Angebot.
                </p>
              </div>
            </div>

            <!-- FAQ Item 2 -->
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Wie lange dauert die Erstellung einer Website?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Die Entwicklungszeit variiert je nach Projektumfang. Eine
                  einfache Website kann innerhalb von 2-4 Wochen fertiggestellt
                  werden, während komplexere Projekte 2-3 Monate oder länger
                  dauern können. Wir erstellen zu Beginn einen detaillierten
                  Zeitplan und halten Sie während des gesamten Prozesses auf dem
                  Laufenden.
                </p>
              </div>
            </div>

            <!-- FAQ Item 3 -->
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Wie wird meine Website bei Google gefunden?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Wir integrieren von Anfang an umfassende SEO-Maßnahmen in Ihre
                  Website. Dazu gehören technische Optimierungen,
                  keyword-optimierte Inhalte, Meta-Tags und eine saubere
                  Struktur. Für noch bessere Ergebnisse empfehlen wir ergänzend
                  unsere Google Ads Kampagnen, die gezielt Traffic auf Ihre neue
                  Website lenken.
                </p>
              </div>
            </div>

            <!-- FAQ Item 4 -->
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Welche laufenden Kosten entstehen nach der Erstellung?
              </div>
              <div class="collapse-content text-base-content">
                <p>
                  Nach der Erstellung fallen in der Regel Kosten für Hosting
                  (Webspace), Domain und ggf. für Wartung und Updates an. Wir
                  bieten verschiedene Wartungspakete an, die regelmäßige
                  Updates, Sicherheits-Checks und technischen Support umfassen.
                  Die genauen Kosten besprechen wir transparent im Erstgespräch.
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
import Navigation from "../components/website/Navigation.vue";
import Footer from "../components/Footer.vue";
import ContactForm from "../components/ContactForm.vue";
import CTAFloatingButtons from "../components/FloatingCallButton.vue";
import PricingModal from "../components/PricingModal.vue";
import Projects from "../components/Projects.vue";
import RegionalePraesenz from "../components/website/RegionalePraesenz.vue";
import CTA from "../components/CTA.vue";
import HeroContactForm from "../components/HeroContactForm.vue";

const route = useRoute();

// SEO Meta Tags für Webdesign & Website-Erstellung in Herford
useHead({
  title:
    "Website erstellen lassen in Herford | Professionelles Webdesign | Orangize",
  meta: [
    {
      name: "description",
      content:
        "Website erstellen lassen in Herford ✓ Lokale Webdesign Agentur ✓ Responsive Design ✓ SEO-optimiert ✓ Persönliche Beratung vor Ort in Herford & Ostwestfalen.",
    },
    {
      name: "keywords",
      content:
        "Website erstellen lassen herford, webdesign herford, homepage erstellen herford, landingpage herford, webdesign agentur herford, professionelle Website herford, responsive webdesign herford, seo Website herford",
    },
    {
      property: "og:title",
      content:
        "Website erstellen lassen in Herford | Professionelles Webdesign | Orangize",
    },
    {
      property: "og:description",
      content:
        "Professionelles Webdesign & moderne Websiten für Herford und Ostwestfalen. Lokale Betreuung und maßgeschneiderte Lösungen für Ihr Unternehmen.",
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
