<template>
  <div>
    <Navigation />

    <!-- Hero — pain-point: no time to post consistently -->
    <section class="hero-shell">
      <div class="hero-shell__bg" aria-hidden="true"></div>
      <div class="hero-shell__inner container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div class="lg:col-span-7" data-aos="fade-right">
            <p class="hero-shell__eyebrow">Social Media · Ostwestfalen</p>
            <h1 class="hero-shell__headline">
              Keine Zeit für Social Media?<br />
              <span class="hero-shell__accent">Wir übernehmen das.</span>
            </h1>
            <p class="hero-shell__sub">
              Sichtbar bleiben, ohne selbst jeden Tag zu posten. Wir planen,
              gestalten und betreuen deine Kanäle — Content, Community,
              Reporting. Du kümmerst dich um dein Geschäft, wir um deine
              Reichweite.
            </p>
            <div class="hero-shell__cta-row">
              <button class="hero-shell__btn hero-shell__btn--primary" @click="scrollToSection('kontakt')">
                Kostenlose Beratung
              </button>
              <button class="hero-shell__btn hero-shell__btn--ghost" @click="scrollToSection('pricing')">
                Pakete ansehen
              </button>
            </div>
            <div class="hero-shell__trust">
              <div>
                <div class="hero-shell__stat-num">12–20</div>
                <div class="hero-shell__stat-lbl">Beiträge pro Monat</div>
              </div>
              <div>
                <div class="hero-shell__stat-num">OWL</div>
                <div class="hero-shell__stat-lbl">Persönlich betreut</div>
              </div>
              <div>
                <div class="hero-shell__stat-num">ab 490 €</div>
                <div class="hero-shell__stat-lbl">Pro Monat</div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5" data-aos="fade-left" data-aos-delay="200">
            <HeroContactForm />
          </div>
        </div>
      </div>

      <div class="hero-shell__scroll">
        <a href="#" @click.prevent="scrollToSection('losung')" aria-label="Nach unten scrollen">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Google Certifications - trust signals -->
    <GoogleCertifications />

    <!-- Plattformen -->
    <section class="py-12 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-8">
          <p class="text-base-content/60 text-sm uppercase tracking-wider">
            Plattformen, die wir betreuen
          </p>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up">Instagram</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="60">Facebook</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="120">LinkedIn</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="180">TikTok</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="240">YouTube</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="300">Pinterest</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="360">Google Business</span>
        </div>
      </div>
    </section>

    <!-- Lösung -->
    <section id="losung" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Warum Social-Media-Betreuung?
          </h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            Präsenz, die bleibt. Aufwand, der wegfällt.
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <p class="text-lg text-base-content leading-relaxed">
              Social Media bringt Kunden — aber nur, wenn es regelmäßig läuft.
              Genau daran scheitern die meisten Betriebe: Im Tagesgeschäft bleibt
              das Posten liegen, der letzte Beitrag ist Wochen alt, und potenzielle
              Kunden ziehen weiter.
              <br /><br />
              Wir nehmen dir die komplette Betreuung ab. Wir entwickeln einen
              <strong>Redaktionsplan</strong>, produzieren <strong>Posts, Reels
              und Stories</strong>, beantworten Kommentare und Nachrichten und
              zeigen dir monatlich schwarz auf weiß, was es gebracht hat.
              <br /><br />
              Persönlich betreut aus <strong>Ostwestfalen-Lippe</strong> — ein
              fester Ansprechpartner, kein Account-Manager-Karussell. Du gibst
              frei, wir machen den Rest.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="flex items-start space-x-4" data-aos="fade-up">
              <div class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">Konstante Präsenz</h4>
                <p class="text-base-content">Regelmäßige Beiträge nach Plan — nie wieder wochenlange Funkstille.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="100">
              <div class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">Mehr Reichweite &amp; Anfragen</h4>
                <p class="text-base-content">Content, der gesehen wird und Interessenten zu Kunden macht.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="200">
              <div class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">Kein Aufwand für dich</h4>
                <p class="text-base-content">Du gibst frei, wir kümmern uns um Planung, Erstellung und Betreuung.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="300">
              <div class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">Persönlich &amp; lokal</h4>
                <p class="text-base-content">Fester Ansprechpartner aus OWL, der deine Region und Kunden kennt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leistungen -->
    <section id="leistungen" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Unsere Social-Media-Leistungen
          </h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            Alles für deine Kanäle — aus einer Hand
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Karte 1: Content-Erstellung -->
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20 hover:border-[#f60] transition-all duration-300" data-aos="fade-up">
            <div class="card-body">
              <div class="w-16 h-16 bg-[#f60]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-2">Content-Erstellung</h3>
              <p class="text-[#f60] font-semibold mb-4">Posts, Reels &amp; Stories, die zu dir passen</p>
              <p class="text-base-content mb-6">
                Wir gestalten Grafiken, schneiden Kurzvideos und texten Beiträge
                im Look deiner Marke — abgestimmt auf deine Zielgruppe und jede
                Plattform.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Grafiken &amp; Carousels
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Reels &amp; Kurzvideos
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Texte, Hashtags &amp; Bildauswahl
                </li>
              </ul>
              <p class="text-sm text-base-content/70 italic mb-6">
                Beispiel: "Monatlicher Mix aus Reels, Carousels und Stories — fertig zur Freigabe"
              </p>
              <button class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 w-full" @click="openPricingModal('Social Media — Content-Erstellung')">
                Angebot anfordern
              </button>
            </div>
          </div>

          <!-- Karte 2: Community-Management -->
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20 hover:border-[#f60] transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <div class="card-body">
              <div class="w-16 h-16 bg-[#f60]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-2">Community-Management</h3>
              <p class="text-[#f60] font-semibold mb-4">Nähe schaffen — und keine Anfrage verlieren</p>
              <p class="text-base-content mb-6">
                Wir beantworten Kommentare und Nachrichten, reagieren auf
                Erwähnungen und sorgen dafür, dass aus Followern echte Kontakte
                werden.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Kommentare &amp; DMs beantworten
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Anfragen an dich weiterleiten
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Interaktion mit deiner Zielgruppe
                </li>
              </ul>
              <p class="text-sm text-base-content/70 italic mb-6">
                Beispiel: "Kaufanfrage per DM wird beantwortet und direkt an dich übergeben"
              </p>
              <button class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 w-full" @click="openPricingModal('Social Media — Community-Management')">
                Angebot anfordern
              </button>
            </div>
          </div>

          <!-- Karte 3: Strategie, Reporting & Ads -->
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20 hover:border-[#f60] transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body">
              <div class="w-16 h-16 bg-[#f60]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-2">Strategie, Reporting &amp; Ads</h3>
              <p class="text-[#f60] font-semibold mb-4">Planvoll posten — und sehen, was es bringt</p>
              <p class="text-base-content mb-6">
                Redaktionsplan, monatliche Auswertung und auf Wunsch
                Social-Media-Werbung, um Reichweite und Anfragen gezielt zu
                verstärken.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Redaktionsplan &amp; Freigabe
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Monatliches Reporting
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Meta &amp; TikTok Ads (optional)
                </li>
              </ul>
              <p class="text-sm text-base-content/70 italic mb-6">
                Beispiel: "Reel mit kleinem Werbebudget bringt 40 Profilbesuche und 6 Anfragen"
              </p>
              <button class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 w-full" @click="openPricingModal('Social Media — Strategie &amp; Ads')">
                Beratung anfragen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content-Formate -->
    <section id="formate" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Was wir für dich posten
          </h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            Formate, die in OWL funktionieren
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">Reels &amp; Kurzvideos</h3>
              <p class="text-base-content mb-4">Der Reichweiten-Motor: kurze, klare Clips, die deine Arbeit und dein Team zeigen.</p>
              <p class="text-sm text-[#f60] font-semibold">Höchste organische Reichweite</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up" data-aos-delay="80">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">Foto-Posts &amp; Carousels</h3>
              <p class="text-base-content mb-4">Leistungen, Vorher-Nachher und Wissens-Posts, die Vertrauen aufbauen.</p>
              <p class="text-sm text-[#f60] font-semibold">Stärkt deine Expertise</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up" data-aos-delay="160">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">Stories</h3>
              <p class="text-base-content mb-4">Täglicher Einblick, Umfragen und Aktionen — hält dich im Kopf der Follower.</p>
              <p class="text-sm text-[#f60] font-semibold">Nähe &amp; Aktualität</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">Behind-the-Scenes</h3>
              <p class="text-base-content mb-4">Menschen hinter dem Betrieb — der Grund, warum Leute lokal kaufen.</p>
              <p class="text-sm text-[#f60] font-semibold">Macht dich nahbar</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up" data-aos-delay="80">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">Angebote &amp; Aktionen</h3>
              <p class="text-base-content mb-4">Saisonale Aktionen und Angebote, die direkt zu Anfragen führen.</p>
              <p class="text-sm text-[#f60] font-semibold">Direkt umsatzwirksam</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up" data-aos-delay="160">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">Bewertungen &amp; Kundenstimmen</h3>
              <p class="text-base-content mb-4">Echte Stimmen deiner Kunden als Social Proof — der beste Verkäufer.</p>
              <p class="text-sm text-[#f60] font-semibold">Überzeugt Unentschlossene</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prozess -->
    <section id="prozess" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Unser Prozess
          </h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            So läuft die Betreuung ab
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20" data-aos="fade-up">
            <div class="card-body text-center">
              <div class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 class="text-xl font-bold text-base-content mb-4">Kennenlernen &amp; Strategie</h3>
              <p class="text-base-content">Wir klären Ziele, Zielgruppe und Plattformen und legen die Linie für deine Kanäle fest.</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20" data-aos="fade-up" data-aos-delay="100">
            <div class="card-body text-center">
              <div class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 class="text-xl font-bold text-base-content mb-4">Redaktionsplan</h3>
              <p class="text-base-content">Du bekommst die Themen und Beiträge des Monats vorab zur Freigabe — volle Transparenz.</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body text-center">
              <div class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 class="text-xl font-bold text-base-content mb-4">Content-Produktion</h3>
              <p class="text-base-content">Wir gestalten Grafiken, schneiden Videos und texten — alles im Look deiner Marke.</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20" data-aos="fade-up" data-aos-delay="300">
            <div class="card-body text-center">
              <div class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 class="text-xl font-bold text-base-content mb-4">Posten &amp; Optimieren</h3>
              <p class="text-base-content">Wir veröffentlichen, betreuen die Community und werten monatlich aus, was am besten läuft.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="py-24 bg-gradient-to-b from-base-200 to-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold mb-2" data-aos="fade-up">Transparente Pakete</h3>
          <h2 class="text-5xl text-base-content font-bold mb-6" data-aos="fade-up" data-aos-delay="100">Pakete für deine Social-Media-Betreuung</h2>
          <p class="text-xl text-base-content max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Monatlich, planbar, jederzeit erweiterbar — inklusive Content, Community-Management und Reporting.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          <!-- Starter -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300" data-aos="fade-up">
            <div class="card-body">
              <h3 class="card-title text-2xl font-bold mb-2 text-base-content">Starter</h3>
              <p class="text-sm text-base-content/70 mb-4">Konstant sichtbar auf einem Kanal</p>
              <p class="text-4xl font-bold mb-1 text-base-content">ab 490 €</p>
              <p class="text-sm text-base-content/70 mb-6">pro Monat</p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>1 Plattform deiner Wahl</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>8 Beiträge pro Monat</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Grafik &amp; Text inklusive</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Community-Management (Mo–Fr)</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Monatlicher Redaktionsplan</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Monatliches Kurz-Reporting</li>
              </ul>
              <button class="btn btn-outline hover:bg-[#f60] hover:border-[#f60] w-full" @click="openPricingModal('Social Media Starter')">Starter wählen</button>
            </div>
          </div>

          <!-- Wachstum (Beliebt) -->
          <div class="card bg-base-100 shadow-xl border-4 border-[#f60] relative transform scale-105 z-10 bg-gradient-to-b from-base-100 to-[#f60]/5" data-aos="fade-up" data-aos-delay="100">
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div class="badge badge-lg bg-[#f60] border-[#f60] text-white font-bold px-5 py-3 text-sm shadow-lg tracking-[0.25em] uppercase">Beliebt</div>
            </div>
            <div class="card-body pt-8">
              <h3 class="card-title text-2xl font-bold mb-2 text-base-content">Wachstum</h3>
              <p class="text-sm text-base-content/70 mb-4">Zwei Kanäle, mehr Reichweite, erstes Reel</p>
              <p class="text-4xl font-bold mb-1 text-[#f60]">ab 890 €</p>
              <p class="text-sm text-base-content mb-6">pro Monat</p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>2 Plattformen</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>16 Beiträge + 8 Stories / Monat</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>1 Reel / Kurzvideo pro Monat</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Aktives Community-Management</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Redaktionsplan &amp; Freigabe-Prozess</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Monatliches Reporting + Strategie-Call</li>
              </ul>
              <button class="btn btn-primary bg-[#f60] border-none hover:bg-[#ff751a] text-white w-full" @click="openPricingModal('Social Media Wachstum')">Wachstum wählen</button>
            </div>
          </div>

          <!-- Premium -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body">
              <h3 class="card-title text-2xl font-bold mb-2 text-base-content">Premium</h3>
              <p class="text-sm text-base-content/70 mb-4">Volle Präsenz inkl. Video &amp; Ads</p>
              <p class="text-4xl font-bold mb-1 text-base-content">ab 1.490 €</p>
              <p class="text-sm text-base-content/70 mb-6">pro Monat</p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>3 Plattformen</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>20+ Beiträge, Stories laufend</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>4 Reels / Kurzvideos pro Monat</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Priorisiertes Community-Management</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Social Ads Betreuung (Budget separat)</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Strategie + Reporting + Monats-Call</li>
              </ul>
              <button class="btn btn-outline hover:bg-[#f60] hover:border-[#f60] w-full" @click="openPricingModal('Social Media Premium')">Premium wählen</button>
            </div>
          </div>
        </div>

        <p class="text-center text-sm text-base-content/60 max-w-3xl mx-auto mt-10 italic">
          Alle Preise zzgl. MwSt. Einmaliges Kanal-Setup &amp; Strategie ab 390 €.
          Mindestlaufzeit 3 Monate, danach monatlich kündbar. Foto-/Video-Produktion
          vor Ort und Werbebudgets werden separat ausgewiesen.
        </p>
      </div>
    </section>

    <!-- Keywords-Grid -->
    <section class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">Unsere Expertise</h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            Social-Media-Marketing für Ostwestfalen-Lippe
          </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Social Media Betreuung</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Social Media Marketing OWL</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Instagram Betreuung</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Facebook Marketing</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Content-Erstellung</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Reels &amp; Kurzvideos</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Community-Management</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">LinkedIn Unternehmensseite</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">TikTok für Unternehmen</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Social Media Agentur Herford</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Social Ads Schaltung</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Redaktionsplan &amp; Reporting</p></div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTA />

    <!-- FAQ -->
    <section id="faq" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">Häufig gestellte Fragen</h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">Alles Wichtige zur Social-Media-Betreuung</h2>
        </div>
        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="sm-faq" checked="checked" />
              <div class="collapse-title text-xl font-medium text-base-content">Was kostet Social-Media-Betreuung?</div>
              <div class="collapse-content text-base-content">
                <p>Die Betreuung startet ab 490 € pro Monat (1 Plattform, 8 Beiträge). Das Paket Wachstum mit 2 Plattformen und Reels liegt ab 890 €/Monat, Premium mit Video und Ads ab 1.490 €/Monat. Hinzu kommt ein einmaliges Kanal-Setup ab 390 €. Werbebudgets für Ads kommen separat hinzu und werden immer transparent ausgewiesen.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="sm-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Muss ich selbst Content liefern?</div>
              <div class="collapse-content text-base-content">
                <p>Nein. Wir übernehmen Planung, Gestaltung und Texte. Was wir von dir brauchen, ist ab und zu Rohmaterial — ein paar Fotos oder kurze Handy-Videos aus dem Alltag deines Betriebs. Den Rest machen wir. Auf Wunsch produzieren wir auch vor Ort.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="sm-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Welche Plattformen sind sinnvoll für mich?</div>
              <div class="collapse-content text-base-content">
                <p>Das hängt von deiner Zielgruppe ab. Für lokale Endkunden funktionieren meist Instagram und Facebook am besten, für B2B eher LinkedIn, für junge Zielgruppen TikTok. Im kostenlosen Erstgespräch empfehlen wir dir die Kanäle, die wirklich etwas bringen — nicht alle gleichzeitig.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="sm-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Sehe ich die Beiträge vor der Veröffentlichung?</div>
              <div class="collapse-content text-base-content">
                <p>Ja. Du bekommst jeden Monat einen Redaktionsplan mit allen geplanten Beiträgen zur Freigabe. Nichts geht ohne dein Okay online. So behältst du die volle Kontrolle über deine Außendarstellung.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="sm-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Wie schnell sehe ich Ergebnisse?</div>
              <div class="collapse-content text-base-content">
                <p>Mehr Aktivität und Reichweite siehst du oft schon im ersten Monat. Spürbares Wachstum bei Followern und Anfragen baut sich über 3–6 Monate auf — Social Media ist ein Marathon, kein Sprint. Mit zusätzlichen Social Ads lässt sich das deutlich beschleunigen.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="sm-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Gibt es eine lange Vertragsbindung?</div>
              <div class="collapse-content text-base-content">
                <p>Wir starten mit einer Mindestlaufzeit von 3 Monaten — kürzer ergibt bei Social Media kaum messbare Ergebnisse. Danach läuft die Betreuung monatlich und ist jederzeit kündbar. Kein Jahresknebel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kontaktformular -->
    <ContactForm />

    <FloatingCallButton />
    <Footer />

    <PricingModal ref="pricingModal" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import Navigation from "../components/social-media/Navigation.vue";
import Footer from "../components/Footer.vue";
import ContactForm from "../components/ContactForm.vue";
import FloatingCallButton from "../components/FloatingCallButton.vue";
import PricingModal from "../components/PricingModal.vue";
import HeroContactForm from "../components/HeroContactForm.vue";
import CTA from "../components/CTA.vue";

const route = useRoute();

useHead({
  htmlAttrs: { lang: "de" },
  title: "Social Media Betreuung & Marketing für KMU in OWL | Orangize Digital",
  meta: [
    { name: "description", content: "Social-Media-Betreuung aus Ostwestfalen: Content-Erstellung, Community-Management, Reels & Reporting für Instagram, Facebook, LinkedIn & TikTok. Pakete ab 490 €/Monat." },
    { name: "keywords", content: "social media betreuung, social media marketing owl, instagram betreuung, facebook marketing, content erstellung, community management, social media agentur herford, reels erstellen, tiktok unternehmen, social ads" },
    { name: "author", content: "Orangize Digital" },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    { name: "geo.region", content: "DE-NW" },
    { name: "geo.placename", content: "Bad Oeynhausen" },
    { property: "og:title", content: "Social Media Betreuung & Marketing für KMU in OWL | Orangize Digital" },
    { property: "og:description", content: "Wir betreuen deine Kanäle: Content, Community und Reporting für Instagram, Facebook, LinkedIn & TikTok. Persönlich aus OWL, ab 490 €/Monat." },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "de_DE" },
    { property: "og:site_name", content: "Orangize Digital" },
    { property: "og:url", content: `https://orangize.de${route.path}` },
    { property: "og:image", content: "https://orangize.de/images/website-erstellen-hero.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Social Media Betreuung von Orangize Digital aus OWL" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Social Media Betreuung & Marketing für KMU in OWL | Orangize Digital" },
    { name: "twitter:description", content: "Content, Community und Reporting für deine Kanäle. Persönlich aus OWL, ab 490 €/Monat." },
    { name: "twitter:image", content: "https://orangize.de/images/website-erstellen-hero.jpg" },
  ],
  link: [{ rel: "canonical", href: `https://orangize.de${route.path}` }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `https://orangize.de${route.path}#service`,
            serviceType: "Social Media Betreuung & Marketing",
            name: "Social Media Betreuung",
            description: "Social-Media-Betreuung für kleine und mittlere Unternehmen: Content-Erstellung, Community-Management, Reels und Reporting für Instagram, Facebook, LinkedIn und TikTok.",
            url: `https://orangize.de${route.path}`,
            areaServed: { "@type": "AdministrativeArea", name: "Ostwestfalen-Lippe" },
            provider: { "@id": "https://orangize.de/#organization" },
            offers: [
              { "@type": "Offer", name: "Starter", price: "490", priceCurrency: "EUR", description: "1 Plattform, 8 Beiträge pro Monat, Community-Management, Reporting" },
              { "@type": "Offer", name: "Wachstum", price: "890", priceCurrency: "EUR", description: "2 Plattformen, 16 Beiträge + Stories, 1 Reel, Reporting + Strategie-Call" },
              { "@type": "Offer", name: "Premium", price: "1490", priceCurrency: "EUR", description: "3 Plattformen, 20+ Beiträge, 4 Reels, Social Ads, Strategie + Reporting" },
            ],
          },
          {
            "@type": "ProfessionalService",
            "@id": "https://orangize.de/#organization",
            name: "Orangize Digital",
            image: "https://orangize.de/images/logo/orangize-black.svg",
            url: "https://orangize.de",
            telephone: "+4915122031093",
            email: "info@orangize.de",
            priceRange: "€€",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Brüderstr. 11",
              postalCode: "32547",
              addressLocality: "Bad Oeynhausen",
              addressRegion: "Nordrhein-Westfalen",
              addressCountry: "DE",
            },
            areaServed: "Ostwestfalen-Lippe",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Startseite", item: "https://orangize.de" },
              { "@type": "ListItem", position: 2, name: "Social Media Betreuung", item: `https://orangize.de${route.path}` },
            ],
          },
        ],
      }),
    },
  ],
});

const pricingModal = ref(null);

const openPricingModal = (interest) => {
  pricingModal.value.openModal(interest);
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
};

let ticking = false;
const updateNavbar = () => {
  if (!ticking) {
    requestAnimationFrame(() => { ticking = false; });
    ticking = true;
  }
};

onMounted(() => { window.addEventListener("scroll", updateNavbar); });
onUnmounted(() => { window.removeEventListener("scroll", updateNavbar); });
</script>
