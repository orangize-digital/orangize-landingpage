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
              <div class="mb-4">
                <span
                  class="px-4 py-2 bg-[#f60]/20 text-[#f60] rounded-full text-sm font-semibold"
                >
                  Spezialisiert auf Handwerksbetriebe
                </span>
              </div>
              <h1
                class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Google Ads für
                <span class="text-[#f60]">Handwerker</span>
              </h1>
              <p class="text-xl text-white mb-8 leading-relaxed">
                Mehr Aufträge für Ihren Handwerksbetrieb durch gezielte Google
                Ads Kampagnen. Werden Sie gefunden, wenn Kunden Sie brauchen.
              </p>

              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f60"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span class="text-white"
                    >Lokale Sichtbarkeit in Ihrer Region</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f60"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span class="text-white"
                    >Notdienst-Anzeigen für sofortige Anfragen</span
                  >
                </div>
                <div class="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f60"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span class="text-white"
                    >Qualifizierte Anfragen von echten Kunden</span
                  >
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <button
                  class="btn bg-[#f60] text-white border-none hover:bg-[#f60]/90 text-lg px-8"
                  @click="scrollToSection('kontakt')"
                >
                  Kostenlose Beratung
                </button>
                <button
                  class="btn btn-outline border-white text-white hover:bg-white hover:text-black text-lg px-8"
                  @click="scrollToSection('vorteile')"
                >
                  Mehr erfahren
                </button>
              </div>
            </div>

            <!-- Contact Form -->
            <div data-aos="fade-up" class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#f60]/10 to-[#f60]/5 rounded-2xl blur-xl"
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
          @click.prevent="scrollToSection('vorteile')"
          class="text-white animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
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

    <!-- Google Certifications -->
    <GoogleCertifications />

    <!-- Handwerks-Branchen Section -->
    <section class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Unsere Handwerks-Expertise
          </h3>
          <h2
            class="text-4xl text-base-content font-bold mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Google Ads für alle Handwerksberufe
          </h2>
        </div>

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
        >
          <div
            class="bg-base-200 rounded-xl p-4 text-center"
            data-aos="fade-up"
          >
            <div
              class="w-12 h-12 bg-[#f60]/10 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f60"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                <line x1="12" y1="2" x2="12" y2="12" />
              </svg>
            </div>
            <p class="text-base-content font-medium text-sm">Elektriker</p>
          </div>

          <div
            class="bg-base-200 rounded-xl p-4 text-center"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div
              class="w-12 h-12 bg-[#f60]/10 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f60"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
              </svg>
            </div>
            <p class="text-base-content font-medium text-sm">
              Heizung & Sanitär
            </p>
          </div>

          <div
            class="bg-base-200 rounded-xl p-4 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              class="w-12 h-12 bg-[#f60]/10 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f60"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m2 22 1-1h3l9-9" />
                <path d="M3 21v-3l9-9" />
                <path
                  d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
                />
              </svg>
            </div>
            <p class="text-base-content font-medium text-sm">Maler</p>
          </div>

          <div
            class="bg-base-200 rounded-xl p-4 text-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div
              class="w-12 h-12 bg-[#f60]/10 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f60"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <p class="text-base-content font-medium text-sm">Dachdecker</p>
          </div>

          <div
            class="bg-base-200 rounded-xl p-4 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              class="w-12 h-12 bg-[#f60]/10 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f60"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 6h.01" />
                <path d="M16 6h.01" />
                <path d="M12 6h.01" />
                <path d="M12 10h.01" />
                <path d="M12 14h.01" />
                <path d="M16 10h.01" />
                <path d="M16 14h.01" />
                <path d="M8 10h.01" />
                <path d="M8 14h.01" />
              </svg>
            </div>
            <p class="text-base-content font-medium text-sm">Fliesenleger</p>
          </div>

          <div
            class="bg-base-200 rounded-xl p-4 text-center"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div
              class="w-12 h-12 bg-[#f60]/10 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f60"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <p class="text-base-content font-medium text-sm">Schlüsseldienst</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vorteile Section -->
    <section id="vorteile" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Warum Google Ads für Handwerker?
          </h3>
          <h2
            class="text-4xl text-base-content font-bold mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ihr Weg zu mehr Aufträgen
          </h2>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          <!-- Left: Benefits List -->
          <div data-aos="fade-right">
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div
                  class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0"
                >
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
                    <circle cx="12" cy="10" r="3" />
                    <path
                      d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-base-content mb-2">
                    Lokale Reichweite
                  </h4>
                  <p class="text-base-content/70">
                    Werden Sie genau dort gefunden, wo Ihre Kunden sind.
                    Gezielte Anzeigen für Ihre Stadt, Ihren Landkreis oder Ihre
                    Region.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0"
                >
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
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-base-content mb-2">
                    Notdienst-Anzeigen
                  </h4>
                  <p class="text-base-content/70">
                    Seien Sie da, wenn Kunden Sie am dringendsten brauchen. 24/7
                    Sichtbarkeit für Notfälle wie Rohrbruch oder Stromausfall.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0"
                >
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
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-base-content mb-2">
                    Direkte Anrufe
                  </h4>
                  <p class="text-base-content/70">
                    Click-to-Call Anzeigen ermöglichen es Kunden, Sie mit einem
                    Klick direkt anzurufen. Weniger Hürden, mehr Aufträge.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0"
                >
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
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path
                      d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-base-content mb-2">
                    Nur zahlen bei Interesse
                  </h4>
                  <p class="text-base-content/70">
                    Sie zahlen nur, wenn jemand auf Ihre Anzeige klickt oder
                    anruft. Kein Streuverlust, maximale Effizienz für Ihr
                    Budget.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Stats -->
          <div data-aos="fade-up" class="bg-base-100 rounded-2xl p-8 shadow-xl">
            <h4 class="text-2xl font-bold text-base-content mb-6 text-center">
              Typische Ergebnisse für Handwerker
            </h4>
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center p-4 bg-[#f60]/10 rounded-xl">
                <p class="text-4xl font-bold text-[#f60]">+150%</p>
                <p class="text-base-content/70 text-sm mt-1">Mehr Anfragen</p>
              </div>
              <div class="text-center p-4 bg-[#f60]/10 rounded-xl">
                <p class="text-4xl font-bold text-[#f60]">3-5€</p>
                <p class="text-base-content/70 text-sm mt-1">
                  Kosten pro Klick*
                </p>
              </div>
              <div class="text-center p-4 bg-[#f60]/10 rounded-xl">
                <p class="text-4xl font-bold text-[#f60]">Top 3</p>
                <p class="text-base-content/70 text-sm mt-1">
                  Google Platzierung
                </p>
              </div>
              <div class="text-center p-4 bg-[#f60]/10 rounded-xl">
                <p class="text-4xl font-bold text-[#f60]">24/7</p>
                <p class="text-base-content/70 text-sm mt-1">Sichtbarkeit</p>
              </div>
            </div>
            <p class="text-xs text-base-content/50 text-center mt-4">
              *Durchschnittswerte, variieren je nach Region und Gewerk
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Prozess Section -->
    <section class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            So funktioniert's
          </h3>
          <h2
            class="text-4xl text-base-content font-bold mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            In 4 Schritten zu mehr Aufträgen
          </h2>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          <div
            class="card bg-base-100 shadow-xl border border-[#f60]/20"
            data-aos="fade-up"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 rounded-full bg-[#f60]/20 text-[#f60] flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                1
              </div>
              <h3 class="text-xl font-bold text-base-content mb-2">Analyse</h3>
              <p class="text-base-content/70 text-sm">
                Wir analysieren Ihren Markt, Ihre Konkurrenz und die
                Suchbegriffe Ihrer potenziellen Kunden.
              </p>
            </div>
          </div>

          <div
            class="card bg-base-100 shadow-xl border border-[#f60]/20"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 rounded-full bg-[#f60]/20 text-[#f60] flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                2
              </div>
              <h3 class="text-xl font-bold text-base-content mb-2">Setup</h3>
              <p class="text-base-content/70 text-sm">
                Wir erstellen Ihre Kampagnen mit optimierten Anzeigentexten und
                präzisem Geo-Targeting.
              </p>
            </div>
          </div>

          <div
            class="card bg-base-100 shadow-xl border border-[#f60]/20"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 rounded-full bg-[#f60]/20 text-[#f60] flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                3
              </div>
              <h3 class="text-xl font-bold text-base-content mb-2">
                Optimierung
              </h3>
              <p class="text-base-content/70 text-sm">
                Kontinuierliche Überwachung und Optimierung für maximale
                Performance und minimale Kosten.
              </p>
            </div>
          </div>

          <div
            class="card bg-base-100 shadow-xl border border-[#f60]/20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="card-body text-center">
              <div
                class="w-16 h-16 rounded-full bg-[#f60]/20 text-[#f60] flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                4
              </div>
              <h3 class="text-xl font-bold text-base-content mb-2">
                Ergebnisse
              </h3>
              <p class="text-base-content/70 text-sm">
                Sie erhalten regelmäßige Reports und sehen genau, wie viele
                Anfragen und Anrufe Sie generieren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Keywords Section -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Beispiel-Keywords
          </h3>
          <h2
            class="text-4xl text-base-content font-bold mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            So suchen Ihre Kunden
          </h2>
        </div>

        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
        >
          <div
            class="bg-base-100 p-3 rounded-lg border border-[#f60]/20 text-center"
          >
            <p class="text-base-content text-sm">Elektriker Notdienst</p>
          </div>
          <div
            class="bg-base-100 p-3 rounded-lg border border-[#f60]/20 text-center"
          >
            <p class="text-base-content text-sm">Heizung reparieren</p>
          </div>
          <div
            class="bg-base-100 p-3 rounded-lg border border-[#f60]/20 text-center"
          >
            <p class="text-base-content text-sm">Maler in der Nähe</p>
          </div>
          <div
            class="bg-base-100 p-3 rounded-lg border border-[#f60]/20 text-center"
          >
            <p class="text-base-content text-sm">Dachdecker</p>
          </div>
          <div
            class="bg-base-100 p-3 rounded-lg border border-[#f60]/20 text-center"
          >
            <p class="text-base-content text-sm">Rohrbruch Notdienst</p>
          </div>
          <div
            class="bg-base-100 p-3 rounded-lg border border-[#f60]/20 text-center"
          >
            <p class="text-base-content text-sm">Bad renovieren Kosten</p>
          </div>
          <div
            class="bg-base-100 p-3 rounded-lg border border-[#f60]/20 text-center"
          >
            <p class="text-base-content text-sm">Fliesen verlegen lassen</p>
          </div>
          <div
            class="bg-base-100 p-3 rounded-lg border border-[#f60]/20 text-center"
          >
            <p class="text-base-content text-sm">Schlüsseldienst 24h</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Häufige Fragen
          </h3>
          <h2
            class="text-4xl text-base-content font-bold mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Google Ads für Handwerker
          </h2>
        </div>

        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" checked="checked" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Was kostet Google Ads für Handwerker?
              </div>
              <div class="collapse-content text-base-content/70">
                <p>
                  Die Kosten variieren je nach Region, Gewerk und Wettbewerb.
                  Typische Klickpreise für Handwerker liegen zwischen 2-8€. Für
                  die Betreuung bieten wir Pakete ab 400€ monatlich an. Wichtig:
                  Sie zahlen nur bei tatsächlichem Interesse (Klicks/Anrufe).
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Wie schnell bekomme ich Anfragen?
              </div>
              <div class="collapse-content text-base-content/70">
                <p>
                  Im Gegensatz zu SEO sind Google Ads sofort wirksam. Sobald
                  Ihre Kampagnen live sind (meist innerhalb von 1-3 Tagen),
                  können Sie die ersten Anfragen erhalten. Die meisten
                  Handwerker berichten von den ersten Anrufen bereits in der
                  ersten Woche.
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Kann ich mein Budget selbst bestimmen?
              </div>
              <div class="collapse-content text-base-content/70">
                <p>
                  Absolut! Sie legen Ihr Tages- oder Monatsbudget selbst fest.
                  Wir empfehlen für den Start ein Testbudget von 500-1.000€
                  monatlich, um genügend Daten für die Optimierung zu sammeln.
                  Das Budget kann jederzeit angepasst werden.
                </p>
              </div>
            </div>

            <div class="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" />
              <div class="collapse-title text-xl font-medium text-base-content">
                Lohnt sich Google Ads für kleine Betriebe?
              </div>
              <div class="collapse-content text-base-content/70">
                <p>
                  Gerade für kleine Handwerksbetriebe ist Google Ads ideal! Sie
                  können lokal werben und Ihr Budget präzise steuern. Viele
                  unserer Kunden sind Ein-Mann-Betriebe, die durch gezielte
                  Werbung ihre Auftragslage deutlich verbessert haben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTA />

    <!-- Kontaktformular Section -->
    <ContactForm />

    <!-- Floating Buttons -->
    <CTAFloatingButtons />

    <!-- Footer Section -->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
// useHead is auto-imported by Nuxt
import { useRoute } from "vue-router";
import Navigation from "../components/google-ads/Navigation.vue";
import Footer from "../components/Footer.vue";
import ContactForm from "../components/ContactForm.vue";
import CTAFloatingButtons from "../components/FloatingCallButton.vue";
import CTA from "../components/CTA.vue";
import HeroContactForm from "../components/HeroContactForm.vue";

const route = useRoute();

useHead({
  title:
    "Google Ads für Handwerker | Mehr Aufträge für Ihren Betrieb | Orangize",
  meta: [
    {
      name: "description",
      content:
        "Google Ads für Handwerker: Elektriker, Maler, Dachdecker, Installateure. Lokale Sichtbarkeit, Notdienst-Anzeigen & mehr Aufträge. Jetzt kostenlose Beratung!",
    },
    {
      name: "keywords",
      content:
        "google ads handwerker, google ads elektriker, google ads maler, google ads dachdecker, google ads sanitär, handwerker werbung, lokale werbung handwerk",
    },
    {
      property: "og:title",
      content:
        "Google Ads für Handwerker | Mehr Aufträge für Ihren Betrieb | Orangize",
    },
    {
      property: "og:description",
      content:
        "Mehr Aufträge für Ihren Handwerksbetrieb durch gezielte Google Ads Kampagnen. Lokale Sichtbarkeit und Notdienst-Anzeigen.",
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
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 102, 0, 0.15);
}
</style>
