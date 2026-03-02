<template>
  <Navigation />
  <!-- Hero Section -->
  <div
    class="hero min-h-[110vh] relative"
    :style="`background-image: url('${brandsImage}')`"
  >
    <div class="hero-overlay bg-black bg-opacity-80"></div>
    <div
      class="hero-content relative z-10 w-full lg:py-0 py-[120px] max-w-7xl mx-auto px-4"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Side - Text -->
        <div class="text-left text-white" data-aos="fade-right">
          <div class="mb-4">
            <span class="text-primary font-semibold text-lg">
              Deine Digitalagentur aus OWL
            </span>
          </div>
          <h1
            class="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white"
          >
            Weniger raten.
            <span class="text-primary">Mehr Kunden.</span>
          </h1>
          <p class="text-xl lg:text-2xl mb-6 text-white">
            Wir bauen Websites, die verkaufen und schalten Google Ads, die sich
            rechnen. Alles aus einer Hand.
          </p>

          <div class="space-y-4 mb-8">
            <div class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4"
                ></path>
              </svg>
              <span class="text-lg text-white"
                >Conversion-optimierte Landingpages</span
              >
            </div>
            <div class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4"
                ></path>
              </svg>
              <span class="text-lg text-white"
                >Google Ads mit echtem ROI</span
              >
            </div>
            <div class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4"
                ></path>
              </svg>
              <span class="text-lg text-white"
                >Transparentes Reporting & Tracking</span
              >
            </div>
            <div class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4"
                ></path>
              </svg>
              <span class="text-lg text-white"
                >Persönliche Betreuung statt Agentur-Fließband</span
              >
            </div>
          </div>

          <div
            class="bg-primary/20 border border-white/30 rounded-lg p-6 mb-8"
          >
            <div class="flex items-start gap-3 mb-2">
              <svg
                class="w-6 h-6 text-white mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <p class="text-lg font-semibold text-white">
                Ergebnisse, keine Versprechen
              </p>
            </div>
            <p class="text-base ml-9 text-white">
              Über <strong class="text-[#f60]">850.000€ verwaltetes Werbebudget</strong>
              und Websites, die im Schnitt 3x mehr Anfragen generieren.
            </p>
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
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ffffff"
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
            klassische Werbung setzen, während andere mit **Google Ads &
            Conversion-optimierten Landing Pages** bereits **planbar und
            automatisiert Neukunden gewinnen**.
            <br /><br />
            Die Lösung? Ein smartes System aus **zielgerichteten Kampagnen,
            hochperformanten Websiten und datengetriebenem Feintuning**. Keine
            Streuverluste, keine leeren Klicks – sondern **reale Anfragen und
            profitable Ergebnisse**.
            <br /><br />
            Unser Ansatz ist **kein Rätselraten**, sondern basiert auf
            datenbasierter Analyse, modernsten Marketing-Techniken und
            jahrelanger Erfahrung. Wir optimieren nicht nur Werbeanzeigen,
            sondern auch deine **Website, Call-to-Actions & Funnel** – damit aus
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
                Magie passiert auf deiner Website. Wir bauen **Conversion-starke
                Websiten**, die Besucher zu Kunden machen.
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
                **planbar und skalierbar**.
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

  <!-- Über Mich Section -->
  <section id="uber-mich" class="py-20 bg-base-200">
    <div class="container mx-auto px-6 lg:px-12">
      <h2 class="text-4xl font-bold text-center mb-12 text-white">
        Web & Ads – Die perfekte Kombination für dein Business
      </h2>
      <div class="flex flex-col md:flex-row items-start gap-12">
        <!-- Bild -->
        <div class="flex-1 text-center md:text-left">
          <img
            :src="naumcheImage"
            alt="Naumche"
            class="rounded-lg shadow-lg w-full max-w-sm md:max-w-md object-cover mx-auto md:mx-0"
          />
        </div>
        <!-- Textbereich mit 1.5x Breite -->
        <div class="flex-[1.5] space-y-8">
          <!-- Google Ads Spezialist -->
          <div class="bg-base-100 p-6 rounded-lg">
            <h3 class="text-3xl font-bold text-[#f60] mb-4">
              Webentwickler & Google Ads Spezialist
            </h3>
            <p class="text-lg text-white mb-4">
              Ich bin Naumche, dein Experte für professionelle Google Ads
              Kampagnen und moderne Webentwicklung. Durch meine Erfahrung in
              beiden Bereichen helfe ich Unternehmen, nicht nur mehr
              Sichtbarkeit zu gewinnen, sondern auch mit einer performanten und
              ansprechenden Website zu überzeugen.
            </p>
            <p class="text-lg text-white mb-4">
              Dank meiner Doppelkompetenz optimiere ich Werbekampagnen gezielt
              und stelle sicher, dass die Zielseite technisch und strategisch
              perfekt darauf abgestimmt ist – für bessere Conversions und
              langfristigen Erfolg.
            </p>
            <p class="text-lg text-white mb-4">
              Unterstützt werde ich von einem Netzwerk aus Freelancern, die mich
              je nach Projekt in verschiedenen Bereichen ergänzen. So bekommst
              du die beste Kombination aus fundierter Expertise, Flexibilität
              und praxisnahen Lösungen.
            </p>
            <div class="flex flex-wrap gap-3">
              <div class="badge badge-lg border-none bg-[#f60] text-white">
                Google Ads zertifiziert
              </div>
              <div class="badge badge-lg border-none bg-[#f60] text-white">
                Analytics Experte
              </div>
              <div class="badge badge-lg border-none bg-[#f60] text-white">
                Performance Marketing
              </div>
            </div>
          </div>
          <!-- Meine Werte -->
          <div class="bg-base-100 p-6 rounded-lg">
            <h3 class="text-3xl font-bold text-[#f60] mb-6">Meine Werte</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 rounded-full bg-[#f60] text-white flex items-center justify-center text-lg font-bold"
                >
                  ✓
                </div>
                <div>
                  <h4 class="font-bold text-lg text-white">Transparenz</h4>
                  <p class="text-white">
                    Ehrliche Beratung und klare Kommunikation
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 rounded-full bg-[#f60] text-white flex items-center justify-center text-lg font-bold"
                >
                  ✓
                </div>
                <div>
                  <h4 class="font-bold text-lg text-white">Flexibilität</h4>
                  <p class="text-white">
                    Individuelle Lösungen statt Standardpakete
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 rounded-full bg-[#f60] text-white flex items-center justify-center text-lg font-bold"
                >
                  ✓
                </div>
                <div>
                  <h4 class="font-bold text-lg text-white">Ergebnisse</h4>
                  <p class="text-white">
                    Fokus auf messbaren Erfolg für meine Kunden
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div
                  class="w-8 h-8 rounded-full bg-[#f60] text-white flex items-center justify-center text-lg font-bold"
                >
                  ✓
                </div>
                <div>
                  <h4 class="font-bold text-lg text-white">
                    Weiterentwicklung
                  </h4>
                  <p class="text-white">
                    Immer auf dem neuesten Stand der Branche
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Ende rechte Spalte -->
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
</script>
