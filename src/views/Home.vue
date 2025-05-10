<template>
  <Navigation />
  <!-- Hero Section -->
  <div
    class="hero min-h-screen relative bg-[url('@/assets/images/brands.jpg')]"
  >
    <div class="hero-overlay bg-black bg-opacity-80"></div>
    <div class="hero-content text-center text-neutral-content relative z-10">
      <div class="max-w-3xl">
        <h1 class="text-5xl font-bold text-[#f60]" data-aos="fade-down">
          Orangize deine Bussiness
        </h1>
        <p
          class="py-6 text-2xl text-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hochperformante Landing Pages & Google Ads, die verkaufen.
        </p>
        <p
          class="mb-8 text-lg text-white"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Wir erstellen zielgerichtete Kampagnen und optimierte Webseiten, damit
          deine Werbung nicht nur Klicks, sondern echte Kunden bringt.
        </p>
        <button
          class="btn btn-primary text-white bg-[#f60] border-none hover:bg-[#ff751a]"
          data-aos="zoom-in"
          data-aos-delay="600"
          onclick="window.open('https://zeeg.me/orangize', '_blank')"
        >
          Jetzt kostenloses Erstgespräch sichern
        </button>
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
            hochperformanten Webseiten und datengetriebenem Feintuning**. Keine
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
                Webseiten**, die Besucher zu Kunden machen.
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
  <section class="py-20 relative bg-black">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md opacity-50 bg-[url('@/assets/images/cta.jpg')]"
    ></div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <h2 class="text-4xl font-bold text-white mb-6 drop-shadow-lg">
        Bereit für mehr Erfolg?
      </h2>
      <p class="text-white text-xl mb-8 drop-shadow-lg">
        Lass uns gemeinsam deine Google Ads Strategie entwickeln und umsetzen!
      </p>
      <div class="flex flex-col items-center gap-4">
        <button
          class="btn btn-lg bg-white text-[#f60] border-none hover:bg-gray-100 shadow-lg animate-bounce"
          onclick="window.open('https://zeeg.me/orangize', '_blank')"
        >
          Kostenloses Erstgespräch vereinbaren
        </button>
        <p class="text-white opacity-90">Unverbindlich & kostenlos</p>
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
            src="@/assets/images/Naumche.jpg"
            alt="Naumche"
            class="rounded-lg shadow-lg w-full max-w-sm md:max-w-md object-cover mx-auto md:mx-0"
          />
        </div>
        <!-- Textbereich mit 1.5x Breite -->
        <div class="flex-[1.5] space-y-8">
          <!-- Google Ads Spezialist -->
          <div class="bg-base-100 shadow-xl p-6 rounded-lg">
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
          <div class="bg-base-100 shadow-xl p-6 rounded-lg">
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

  <CTA />
  <NewsletterForm />

  <!-- Footer Section -->
  <Footer />
</template>

<script setup>
import { useHead } from "@vueuse/head"; // Ensure you're importing useMeta
import Navigation from "../components/Navigation.vue";
import ServicesShowcase from "../components/ServicesShowcase.vue";
import Footer from "../components/Footer.vue";
import Projects from "../components/Projects.vue";
import ContactForm from "../components/ContactForm.vue";
import Pricing from "../components/Pricing.vue";
import Facts from "../components/Facts.vue";
import CTA from "../components/FloatingCallButton.vue";
import FAQ from "../components/FAQ.vue";
import NewsletterForm from "../components/NewsletterForm.vue";

// Dynamically set the meta tags using useMeta directly
useHead({
  title:
    "Webdesign & Google Ads – Landingpages, die überzeugen | Orangize Digital",
  meta: [
    {
      name: "title",
      content:
        "Webdesign & Google Ads – Landingpages, die überzeugen | Orangize Digital",
    },
    {
      name: "description",
      content:
        "Orangize Digital erstellt professionelle Websites & Landingpages, die Kunden gewinnen. Maßgeschneiderte Google Ads Kampagnen für mehr Reichweite! 🚀",
    },
    {
      name: "keywords",
      content:
        "Webdesign, Landingpages, Google Ads, Online Marketing, Webseiten erstellen lassen, Webagentur, digitales Marketing",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content:
        "Webdesign & Google Ads – Landingpages, die überzeugen | Orangize Digital",
    },
    {
      property: "og:description",
      content:
        "Orangize Digital entwickelt Websites und Landingpages, die konvertieren. Perfekt abgestimmte Google Ads für mehr Erfolg!",
    },
    {
      property: "og:image",
      content:
        "https://orangize.de/src/assets/images/mockup/Orangize-Mockup.png",
    },
    {
      property: "og:url",
      content: "https://orangize.de",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content:
        "Webdesign & Google Ads – Landingpages, die überzeugen | Orangize Digital",
    },
    {
      name: "twitter:description",
      content:
        "Professionelle Webseiten & Landingpages für dein Business – inklusive zielgerichteter Google Ads Kampagnen! Jetzt unverbindlich beraten lassen.",
    },
    {
      name: "twitter:image",
      content:
        "https://orangize.de/src/assets/images/mockup/Orangize-Mockup.png",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://orangize.de/`,
    },
  ],
});
</script>
