<template>
  <Navigation />

  <!-- Hero — dark canvas + radial brand gradient blobs -->
  <section class="hero-shell">
    <div class="hero-shell__bg" aria-hidden="true"></div>
    <div class="hero-shell__inner container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div class="lg:col-span-7" data-aos="fade-right">
          <p class="hero-shell__eyebrow">Digitalagentur aus Ostwestfalen</p>
          <h1 class="hero-shell__headline">
            Weniger raten.<br />
            <span class="hero-shell__accent">Mehr Kunden.</span>
          </h1>
          <p class="hero-shell__sub">
            Websites, die verkaufen. Google Ads, die sich rechnen. Prozesse, die sich selbst erledigen. Alles aus einer Hand — gebaut für Unternehmen, die nicht raten wollen.
          </p>

          <div class="hero-shell__trust">
            <div>
              <div class="hero-shell__stat-num">850.000 €</div>
              <div class="hero-shell__stat-lbl">Werbebudget</div>
            </div>
            <div>
              <div class="hero-shell__stat-num">100+</div>
              <div class="hero-shell__stat-lbl">Projekte</div>
            </div>
            <div>
              <div class="hero-shell__stat-num">95 %</div>
              <div class="hero-shell__stat-lbl">Retention</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5" data-aos="fade-left" data-aos-delay="200">
          <HeroContactForm />
        </div>
      </div>
    </div>

    <div class="hero-shell__scroll">
      <a
        href="#"
        @click.prevent="scrollToSection('losung')"
        aria-label="Nach unten scrollen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  </section>

  <!-- Google Certifications -->
  <section class="py-12 bg-base-200">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8">
        <p class="text-base-content/60 text-sm uppercase tracking-wider">
          Zertifiziert & Verifiziert
        </p>
      </div>
      <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        <!-- Google Partner Badge -->
        <div class="flex flex-col items-center gap-2" data-aos="fade-up">
          <img
            src="https://www.gstatic.com/partners/badge/images/2024/PartnerBadgeClickable.svg"
            alt="Google Partner"
            class="h-20 md:h-24"
          />
        </div>

        <!-- Google Ads Certified -->
        <div
          class="flex flex-col items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="bg-white rounded-lg p-4">
            <svg
              viewBox="0 0 272 92"
              class="h-12 md:h-16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                fill="#EA4335"
              />
              <path
                d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                fill="#FBBC05"
              />
              <path
                d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                fill="#4285F4"
              />
              <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
              <path
                d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                fill="#EA4335"
              />
              <path
                d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                fill="#4285F4"
              />
            </svg>
          </div>
        </div>

        <!-- Google Analytics Certified -->
        <div
          class="flex flex-col items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="bg-white rounded-lg p-4 flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              class="h-10 md:h-12 w-10 md:w-12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.84 2.9982V20.9982C22.84 22.1022 21.944 22.9982 20.84 22.9982H18.84C17.736 22.9982 16.84 22.1022 16.84 20.9982V2.9982C16.84 1.8942 17.736 0.998199 18.84 0.998199H20.84C21.944 0.998199 22.84 1.8942 22.84 2.9982Z"
                fill="#F9AB00"
              />
              <path
                d="M14.42 10.9982V20.9982C14.42 22.1022 13.524 22.9982 12.42 22.9982H10.42C9.316 22.9982 8.42 22.1022 8.42 20.9982V10.9982C8.42 9.8942 9.316 8.9982 10.42 8.9982H12.42C13.524 8.9982 14.42 9.8942 14.42 10.9982Z"
                fill="#E37400"
              />
              <path
                d="M6 16.9982V20.9982C6 22.1022 5.104 22.9982 4 22.9982H2C0.896 22.9982 0 22.1022 0 20.9982V16.9982C0 15.8942 0.896 14.9982 2 14.9982H4C5.104 14.9982 6 15.8942 6 16.9982Z"
                fill="#E37400"
              />
            </svg>
            <span class="text-gray-800 font-medium text-sm">Analytics</span>
          </div>
        </div>

        <!-- Google Tag Manager -->
        <div
          class="flex flex-col items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="bg-white rounded-lg p-4 flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              class="h-10 md:h-12 w-10 md:w-12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.003 0L3 5.2V18.8L12.003 24L21 18.8V5.2L12.003 0ZM12.003 2.4L18.6 6.2V11.1L12.003 15L5.4 11.1V6.2L12.003 2.4Z"
                fill="#8AB4F8"
              />
              <path
                d="M12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5Z"
                fill="#4285F4"
              />
            </svg>
            <span class="text-gray-800 font-medium text-sm">Tag Manager</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Lösung Section -->
  <section id="losung" class="py-20 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h3
          class="text-lg text-white font-semibold text-[#f60]"
          data-aos="fade-up"
        >
          Unsere Lösung für deinen Erfolg
        </h3>
        <h2
          class="text-4xl text-white font-bold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Mehr Sichtbarkeit. Mehr Kunden. Mehr Umsatz.
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Linke Seite: Detaillierte Beschreibung -->
        <div data-aos="fade-right">
          <p class="text-lg text-white leading-relaxed">
            Du hast ein starkes Angebot – aber deine potenziellen Kunden wissen
            es noch nicht? Dann geht es dir wie vielen Unternehmern, die auf
            klassische Werbung setzen, während andere mit <strong>Google Ads &
            Conversion-optimierten Landing Pages</strong> bereits <strong>planbar und
            automatisiert Neukunden gewinnen</strong>.
            <br /><br />
            Die Lösung? Ein smartes System aus <strong>zielgerichteten Kampagnen,
            hochperformanten Websiten und datengetriebenem Feintuning</strong>. Keine
            Streuverluste, keine leeren Klicks – sondern <strong>reale Anfragen und
            profitable Ergebnisse</strong>.
            <br /><br />
            Unser Ansatz ist <strong>kein Rätselraten</strong>, sondern basiert auf
            datenbasierter Analyse, modernsten Marketing-Techniken und
            jahrelanger Erfahrung. Wir optimieren nicht nur Werbeanzeigen,
            sondern auch deine <strong>Website, Call-to-Actions & Funnel</strong> – damit aus
            Besuchern echte Kunden werden.
          </p>
        </div>

        <!-- Rechte Seite: Vorteile mit Icons -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- Vorteil 1 -->
          <div class="flex items-start space-x-4" data-aos="fade-up">
            <div class="p-3 bg-[#f60] text-white rounded-full">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1V11C1 13.8284 1 15.2426 1.87868 16.1213C2.75736 17 4.17157 17 7 17H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 13H14"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 9H18"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 5H11"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-xl text-white font-semibold mb-6">
                Messbare Erfolge statt Rätselraten
              </h4>
              <p class="text-white text-lg">
                Jedes investierte Werbebudget muss sich lohnen. Wir tracken jede
                Zahl und analysieren, was wirklich funktioniert – mit klaren
                KPIs und Echtzeit-Daten.
              </p>
            </div>
          </div>

          <!-- Vorteil 2 -->
          <div
            class="flex items-start space-x-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="p-3 bg-[#f60] text-white rounded-full">
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8.62069C16 11.1999 14.7302 13.1852 12.7983 14.4917C12.3483 14.796 12.1233 14.9482 12.0122 15.1212C11.9012 15.2942 11.8633 15.5214 11.7876 15.9757L11.7287 16.3288C11.5957 17.127 11.5292 17.526 11.2494 17.763C10.9697 18 10.5651 18 9.7559 18H7.1444C6.33528 18 5.93069 18 5.65095 17.763C5.3712 17.526 5.30469 17.127 5.17166 16.3288L5.11281 15.9757C5.03734 15.5229 4.99961 15.2965 4.88968 15.1243C4.77976 14.9521 4.55428 14.798 4.10332 14.4897C2.1919 13.1832 1 11.1986 1 8.62069C1 4.4119 4.35786 1 8.5 1C9.0137 1 9.5153 1.05248 10 1.15244"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 1L13.7579 1.69703C14.0961 2.61102 14.2652 3.06802 14.5986 3.40139C14.932 3.73477 15.389 3.90387 16.303 4.24208L17 4.5L16.303 4.75792C15.389 5.09613 14.932 5.26524 14.5986 5.59861C14.2652 5.93198 14.0961 6.38898 13.7579 7.30297L13.5 8L13.2421 7.30297C12.9039 6.38898 12.7348 5.93198 12.4014 5.59861C12.068 5.26524 11.611 5.09613 10.697 4.75792L10 4.5L10.697 4.24208C11.611 3.90387 12.068 3.73477 12.4014 3.40139C12.7348 3.06802 12.9039 2.61102 13.2421 1.69703L13.5 1Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5 18V19C10.5 19.9428 10.5 20.4142 10.2071 20.7071C9.9142 21 9.4428 21 8.5 21C7.5572 21 7.0858 21 6.79289 20.7071C6.5 20.4142 6.5 19.9428 6.5 19V18"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-xl text-white font-semibold mb-6">
                Landing Pages, die verkaufen
              </h4>
              <p class="text-white text-lg">
                Ein Klick auf die Anzeige ist nur der erste Schritt – die wahre
                Magie passiert auf deiner Website. Wir bauen <strong>Conversion-starke
                Websiten</strong>, die Besucher zu Kunden machen.
              </p>
            </div>
          </div>

          <!-- Vorteil 3 -->
          <div
            class="flex items-start space-x-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="p-3 bg-[#f60] text-white rounded-full">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 12.5137V19.5137C11 19.9796 11 20.2126 10.9239 20.3964C10.8224 20.6414 10.6277 20.8361 10.3827 20.9376C10.1989 21.0137 9.96594 21.0137 9.5 21.0137C9.03406 21.0137 8.80109 21.0137 8.61732 20.9376C8.37229 20.8361 8.17761 20.6414 8.07612 20.3964C8 20.2126 8 19.9796 8 19.5137V12.5137C8 12.0478 8 11.8148 8.07612 11.631C8.17761 11.386 8.37229 11.1913 8.61732 11.0898C8.80109 11.0137 9.03406 11.0137 9.5 11.0137C9.96594 11.0137 10.1989 11.0137 10.3827 11.0898C10.6277 11.1913 10.8224 11.386 10.9239 11.631C11 11.8148 11 12.0478 11 12.5137Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 14.5137V19.5132C4 19.9791 4 20.2121 3.9239 20.3959C3.8224 20.6409 3.6277 20.8356 3.3827 20.9371C3.1989 21.0132 2.9659 21.0132 2.5 21.0132C2.0341 21.0132 1.8011 21.0132 1.6173 20.9371C1.3723 20.8356 1.1776 20.6409 1.0761 20.3959C1 20.2121 1 19.9791 1 19.5132V14.5137C1 14.0478 1 13.8148 1.0761 13.631C1.1776 13.386 1.3723 13.1913 1.6173 13.0898C1.8011 13.0137 2.0341 13.0137 2.5 13.0137C2.9659 13.0137 3.1989 13.0137 3.3827 13.0898C3.6277 13.1913 3.8224 13.386 3.9239 13.631C4 13.8148 4 14.0478 4 14.5137Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 10.5137V19.5137C18 19.9796 18 20.2126 17.9239 20.3964C17.8224 20.6414 17.6277 20.8361 17.3827 20.9376C17.1989 21.0137 16.9659 21.0137 16.5 21.0137C16.0341 21.0137 15.8011 21.0137 15.6173 20.9376C15.3723 20.8361 15.1776 20.6414 15.0761 20.3964C15 20.2126 15 19.9796 15 19.5137V10.5137C15 10.0478 15 9.81482 15.0761 9.63105C15.1776 9.38602 15.3723 9.19134 15.6173 9.08985C15.8011 9.01373 16.0341 9.01373 16.5 9.01373C16.9659 9.01373 17.1989 9.01373 17.3827 9.08985C17.6277 9.19134 17.8224 9.38602 17.9239 9.63105C18 9.81482 18 10.0478 18 10.5137Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 1L16.6973 1.53312C16.956 2.2322 17.0853 2.58174 17.3403 2.83673C17.5953 3.0917 17.9448 3.22105 18.6439 3.47972L19.177 3.677L18.6439 3.87428C17.9448 4.13296 17.5953 4.2623 17.3403 4.51729C17.0853 4.77226 16.956 5.12181 16.6973 5.82088L16.5 6.354L16.3027 5.82088C16.044 5.12181 15.9147 4.77226 15.6597 4.51729C15.4047 4.2623 15.0552 4.13296 14.3561 3.87428L13.823 3.677L14.3561 3.47972C15.0552 3.22105 15.4047 3.0917 15.6597 2.83672C15.9147 2.58174 16.044 2.2322 16.3027 1.53312L16.5 1Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-xl text-white font-semibold mb-6">
                Automatisierte Neukundengewinnung
              </h4>
              <p class="text-white text-lg">
                Stell dir vor, du bekommst täglich neue Anfragen – ohne manuelle
                Kaltakquise. Mit unserem System machst du dein Marketing
                <strong>planbar und skalierbar</strong>.
              </p>
            </div>
          </div>

          <!-- Vorteil 4 -->
          <div
            class="flex items-start space-x-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="p-3 bg-[#f60] text-white rounded-full">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 9C19 5.22876 19 3.34315 17.8284 2.17157C16.6569 1 14.7712 1 11 1H9C5.22876 1 3.34315 1 2.17157 2.17157C1 3.34315 1 5.22876 1 9V11C1 14.7712 1 16.6569 2.17157 17.8284C3.23467 18.8915 4.8857 18.99 8 18.9991H8.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 6H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.99976 3.50696H6.00874"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99976 3.50696H10.0088"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.7939 12.7301L19.1458 14.0418C21.0791 14.7983 22.0458 15.1765 22.0137 15.7766C21.9817 16.3766 20.9728 16.6517 18.9552 17.202C18.3544 17.3658 18.054 17.4478 17.8458 17.656C17.6376 17.8642 17.5557 18.1646 17.3918 18.7654C16.8415 20.783 16.5664 21.7919 15.9664 21.8239C15.3663 21.856 14.9881 20.8893 14.2316 18.956L12.9199 15.604C12.1279 13.5799 11.7319 12.5678 12.2448 12.0549C12.7577 11.542 13.7697 11.9381 15.7939 12.7301Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-xl text-white font-semibold mb-6">
                Full-Service Betreuung
              </h4>
              <p class="text-white text-lg">
                Kein Stress mit Technik oder komplizierten
                Kampagnen-Einstellungen. Wir übernehmen alles – von der
                Strategie bis zur laufenden Optimierung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Showcase Section -->
  <ServicesShowcase />

  <!-- Fakten Section -->
  <Facts />

  <!-- Projects Section -->
  <Projects />

  <!-- Pricing Section -->
  <Pricing />

  <!-- Ablauf Section -->
  <section id="ablauf" class="py-20 bg-base-100">
    <div class="container mx-auto px-4">
      <h2
        class="text-4xl text-white font-bold text-center mb-12"
        data-aos="fade-up"
      >
        Unser Ablauf
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div class="card bg-base-200" data-aos="fade-up">
          <div class="card-body items-center text-center">
            <div
              class="w-12 h-12 rounded-full bg-[#f60] text-white flex items-center justify-center text-xl font-bold mb-4"
            >
              1
            </div>
            <h3 class="card-title text-white">Erstgespräch</h3>
            <p class="text-white">Analyse Ihrer Ziele und Anforderungen</p>
          </div>
        </div>
        <div class="card bg-base-200" data-aos="fade-up" data-aos-delay="200">
          <div class="card-body items-center text-center">
            <div
              class="w-12 h-12 rounded-full bg-[#f60] text-white flex items-center justify-center text-xl font-bold mb-4"
            >
              2
            </div>
            <h3 class="card-title text-white">Strategieentwicklung</h3>
            <p class="text-white">Maßgeschneiderte Kampagnenplanung</p>
          </div>
        </div>
        <div class="card bg-base-200" data-aos="fade-up" data-aos-delay="600">
          <div class="card-body items-center text-center">
            <div
              class="w-12 h-12 rounded-full bg-[#f60] text-white flex items-center justify-center text-xl font-bold mb-4"
            >
              3
            </div>
            <h3 class="card-title text-white">Kampagnen-Setup</h3>
            <p class="text-white">Professionelle Implementierung</p>
          </div>
        </div>
        <div class="card bg-base-200" data-aos="fade-up" data-aos-delay="1200">
          <div class="card-body items-center text-center">
            <div
              class="w-12 h-12 rounded-full bg-[#f60] text-white flex items-center justify-center text-xl font-bold mb-4"
            >
              4
            </div>
            <h3 class="card-title text-white">Optimierung</h3>
            <p class="text-white">Kontinuierliche Verbesserung</p>
          </div>
        </div>
        <div class="card bg-base-200" data-aos="fade-up" data-aos-delay="1800">
          <div class="card-body items-center text-center">
            <div
              class="w-12 h-12 rounded-full bg-[#f60] text-white flex items-center justify-center text-xl font-bold mb-4"
            >
              5
            </div>
            <h3 class="card-title text-white">Reporting</h3>
            <p class="text-white">Transparente Erfolgsmessung</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 relative cta-section">
    <!-- Theme-aware overlay -->
    <div
      class="absolute inset-0 cta-overlay transition-colors duration-300"
    ></div>
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md opacity-50"
      :style="`background-image: url('${ctaImage}')`"
    ></div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <h2 class="text-4xl font-bold cta-text mb-6 drop-shadow-lg">
        Bereit für Ihre neue Website?
      </h2>
      <p class="cta-text text-xl mb-8 drop-shadow-lg">
        Lassen Sie uns gemeinsam Ihre perfekte Website erstellen!
      </p>
      <div class="flex flex-col items-center gap-4">
        <button
          class="btn btn-lg bg-[#f60] text-white border-none hover:bg-[#ff751a] shadow-lg animate-bounce"
          @click="scrollToSection('kontakt')"
        >
          Kostenloses Erstgespräch vereinbaren
        </button>
        <p class="cta-text opacity-90">Unverbindlich & kostenlos</p>
      </div>
    </div>
  </section>

  <!-- Über Mich — editorial -->
  <section id="uber-mich" class="bio-section">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <!-- Photo -->
        <div class="lg:col-span-5" data-aos="fade-right">
          <div class="bio-photo">
            <img :src="naumcheImage" alt="Naumche Joshevski" />
          </div>
          <div class="bio-photo-caption">
            <span class="bio-photo-caption__name">Naumche Joshevski</span>
            <span class="bio-photo-caption__role">Founder · Engineer</span>
          </div>
        </div>

        <!-- Editorial copy -->
        <div class="lg:col-span-7" data-aos="fade-left" data-aos-delay="150">
          <p class="bio-eyebrow">Über uns</p>
          <h2 class="bio-headline">
            Drei Disziplinen.<br />Ein Hebel.
          </h2>
          <p class="bio-lead">
            Websites, Google Ads und Automatisierung sind keine getrennten Spielwiesen. Wer alle drei beherrscht und verbindet, schafft den eigentlichen Hebel. Genau dort arbeiten wir — von der ersten Anzeige bis zum automatisierten Lead-Routing.
          </p>
          <p class="bio-body">
            Ich bin Naumche. Ich baue Kampagnen, die sich rechnen, Websites, die verkaufen, und Workflows, die deinen Tag freiräumen. Unterstützt von einem Netzwerk aus erfahrenen Freelancern wenn ein Projekt mehr Hände braucht.
          </p>

          <div class="bio-tags">
            <span>Google Ads zertifiziert</span>
            <span>Analytics</span>
            <span>Performance Marketing</span>
            <span>Workflow-Automation</span>
            <span>KI-Agenten / LLM</span>
          </div>

          <div class="bio-values">
            <div class="bio-value" v-for="(val, idx) in values" :key="val.title">
              <span class="bio-value__num">{{ String(idx + 1).padStart(2, '0') }}</span>
              <div>
                <h4>{{ val.title }}</h4>
                <p>{{ val.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <FAQ />

  <!-- Kontaktformular Section -->
  <ContactForm />

  <FloatingCallButton />

  <!-- Footer Section -->
  <Footer />
</template>

<script setup>
import brandsImage from "~/assets/images/brands.jpg";
import ctaImage from "~/assets/images/cta.jpg";
import naumcheImage from "~/assets/images/Naumche.jpg";

// SEO Meta Tags
useSeoMeta({
  title:
    "Webdesign & Google Ads – Landingpages, die überzeugen | Orangize Digital",
  description:
    "Orangize Digital erstellt professionelle Websites & Landingpages, die Kunden gewinnen. Maßgeschneiderte Google Ads Kampagnen für mehr Reichweite!",
  keywords:
    "Webdesign, Landingpages, Google Ads, Online Marketing, Websiten erstellen lassen, Webagentur, digitales Marketing",
  robots: "index, follow",
  ogTitle:
    "Webdesign & Google Ads – Landingpages, die überzeugen | Orangize Digital",
  ogDescription:
    "Orangize Digital entwickelt Websites und Landingpages, die konvertieren. Perfekt abgestimmte Google Ads für mehr Erfolg!",
  ogImage: "https://orangize.de/src/assets/images/mockup/Orangize-Mockup.png",
  ogUrl: "https://orangize.de",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle:
    "Webdesign & Google Ads – Landingpages, die überzeugen | Orangize Digital",
  twitterDescription:
    "Professionelle Websiten & Landingpages für dein Business – inklusive zielgerichteter Google Ads Kampagnen! Jetzt unverbindlich beraten lassen.",
  twitterImage:
    "https://orangize.de/src/assets/images/mockup/Orangize-Mockup.png",
});

useHead({
  link: [{ rel: "canonical", href: "https://orangize.de/" }],
});

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const values = [
  {
    title: "Transparenz",
    text: "Ehrliche Beratung. Klare Reports. Keine Sales-Sprüche.",
  },
  {
    title: "Flexibilität",
    text: "Individuelle Lösungen statt Schubladen-Pakete.",
  },
  {
    title: "Ergebnisse",
    text: "Wir messen, was wirklich Anfragen bringt.",
  },
  {
    title: "Weiterentwicklung",
    text: "Stack & Methoden bleiben am Puls der Branche.",
  },
];
</script>

<style scoped>
.bio-section {
  padding: 8rem 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
}

.bio-section::before {
  content: "";
  position: absolute;
  top: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 102, 0, 0.18) 0%, transparent 65%);
  pointer-events: none;
}

.bio-photo {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 5;
}

.bio-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.15) contrast(1.05);
  transition: filter 0.5s ease, transform 0.6s ease;
}

.bio-photo:hover img {
  filter: grayscale(0) contrast(1.1);
  transform: scale(1.02);
}

.bio-photo-caption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.bio-photo-caption__name {
  font-family: "Bricolage Grotesque", sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #ffffff !important;
  letter-spacing: -0.01em;
}

.bio-photo-caption__role {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #f60 !important;
}

.bio-eyebrow {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #f60 !important;
  margin-bottom: 1.5rem;
}

.bio-headline {
  font-family: "Bricolage Grotesque", sans-serif !important;
  font-size: clamp(2.5rem, 5.5vw, 4.5rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: #ffffff !important;
  margin-bottom: 2rem;
}

.bio-lead {
  font-size: clamp(1.125rem, 1.5vw, 1.4rem);
  color: rgba(255, 255, 255, 0.92) !important;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.bio-body {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.7) !important;
  line-height: 1.65;
  margin-bottom: 2.5rem;
  max-width: 56ch;
}

.bio-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 3.5rem;
}

.bio-tags span {
  padding: 0.4rem 0.85rem;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.bio-values {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 2rem;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

@media (max-width: 640px) {
  .bio-values {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
}

.bio-value {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.bio-value__num {
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #f60 !important;
  line-height: 1;
  letter-spacing: -0.02em;
  min-width: 2rem;
}

.bio-value h4 {
  font-family: "Bricolage Grotesque", sans-serif !important;
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff !important;
  margin-bottom: 0.35rem;
  letter-spacing: -0.01em;
}

.bio-value p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65) !important;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 1023px) {
  .bio-section {
    padding: 5rem 0;
  }
  .bio-photo {
    max-width: 460px;
    margin: 0 auto;
  }
}
</style>
