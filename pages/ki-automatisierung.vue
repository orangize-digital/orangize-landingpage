<template>
  <div>
    <Navigation />

    <!-- Hero — pain-point: hours of repetitive manual work -->
    <section class="hero-shell">
      <div class="hero-shell__bg" aria-hidden="true"></div>
      <div class="hero-shell__inner container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div class="lg:col-span-7" data-aos="fade-right">
            <p class="hero-shell__eyebrow">KI-Automatisierung · Ostwestfalen</p>
            <h1 class="hero-shell__headline">
              Stundenlange Klick-Arbeit.<br />
              <span class="hero-shell__accent">Endlich automatisiert.</span>
            </h1>
            <p class="hero-shell__sub">
              Wachstum braucht kein neues Personal — nur kluge Automation. Wir bauen Workflows und KI-Agenten, die deine Routine übernehmen. DSGVO-konform, sauber dokumentiert, in zwei Wochen live.
            </p>
            <div class="hero-shell__cta-row">
              <button class="hero-shell__btn hero-shell__btn--primary" @click="scrollToSection('kontakt')">
                Kostenlose Beratung
              </button>
              <button class="hero-shell__btn hero-shell__btn--ghost" @click="scrollToSection('losung')">
                Mehr erfahren
              </button>
            </div>
            <div class="hero-shell__trust">
              <div>
                <div class="hero-shell__stat-num">5–20h</div>
                <div class="hero-shell__stat-lbl">Pro Woche gespart</div>
              </div>
              <div>
                <div class="hero-shell__stat-num">2 Wo</div>
                <div class="hero-shell__stat-lbl">Bis live</div>
              </div>
              <div>
                <div class="hero-shell__stat-num">DSGVO</div>
                <div class="hero-shell__stat-lbl">EU-Hosting möglich</div>
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

    <!-- Tools & Stack -->
    <section class="py-12 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-8">
          <p class="text-base-content/60 text-sm uppercase tracking-wider">
            Unser Stack
          </p>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up">n8n</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="60">Make</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="120">Zapier</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="180">OpenAI</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="240">Anthropic</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="300">Slack</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="360">HubSpot</span>
          <span class="px-5 py-3 rounded-lg bg-base-100 text-base-content font-semibold shadow" data-aos="fade-up" data-aos-delay="420">Hermes</span>
        </div>
      </div>
    </section>

    <!-- Lösung -->
    <section id="losung" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Warum jetzt KI-Automation?
          </h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            Operative Entlastung. Ohne neues Personal.
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <p class="text-lg text-base-content leading-relaxed">
              Die meisten Engpässe in kleinen und mittleren Betrieben sind nicht
              Personalmangel — sondern dieselben fünf manuellen Schritte, die
              jeden Tag aufs Neue Zeit fressen: Anfragen sortieren, Daten von
              A nach B übertragen, Termine bestätigen, Angebote tippen, im CRM
              hinterlegen.
              <br /><br />
              Mit modernen Automatisierungs-Werkzeugen
              (<strong>n8n, Make, Zapier</strong>) und KI-Modellen
              (<strong>OpenAI, Anthropic, Mistral</strong>) lassen sich genau
              diese Schritte abnehmen — zuverlässig, nachvollziehbar, DSGVO-konform.
              <br /><br />
              Wir bauen die Workflows, hosten sie wenn nötig auf deinem eigenen
              Server, und schulen dein Team. Du behältst die Kontrolle, gewinnst
              aber Stunden pro Woche zurück.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="flex items-start space-x-4" data-aos="fade-up">
              <div class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">Zeit zurückgewinnen</h4>
                <p class="text-base-content">5–20 Stunden pro Woche, die du wieder für Kunden hast.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="100">
              <div class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">Kein zusätzliches Personal</h4>
                <p class="text-base-content">Wachstum ohne Einstellungs-Runde — Automation skaliert mit dir.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="200">
              <div class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">DSGVO-konform</h4>
                <p class="text-base-content">EU-Hosting, AVV, on-prem Optionen — passend für den deutschen Mittelstand.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="300">
              <div class="p-3 bg-[#f60] text-white rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <div>
                <h4 class="text-xl text-base-content font-semibold mb-2">Planbar skalierbar</h4>
                <p class="text-base-content">Klein anfangen, modular ausbauen — kein Big-Bang-Risiko.</p>
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
            Unsere KI-Leistungen
          </h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            Drei Schubladen, ein Ziel: weniger manuelle Arbeit
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Karte 1: Workflow-Automatisierung -->
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20 hover:border-[#f60] transition-all duration-300" data-aos="fade-up">
            <div class="card-body">
              <div class="w-16 h-16 bg-[#f60]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-2">Workflow-Automatisierung</h3>
              <p class="text-[#f60] font-semibold mb-4">Manuelle Klick-Arbeit eliminieren — ohne neues Personal</p>
              <p class="text-base-content mb-6">
                Wir verbinden deine bestehenden Tools (CRM, E-Mail, Kalender, Buchhaltung, Webshop) zu reibungslosen Abläufen. Daten fließen automatisch dort hin, wo sie gebraucht werden.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  n8n / Make / Zapier
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  API-Integrationen
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Fehler-Monitoring
                </li>
              </ul>
              <p class="text-sm text-base-content/70 italic mb-6">
                Beispiel: "Neue Anfrage → CRM-Eintrag + Slack-Benachrichtigung + Angebots-Entwurf"
              </p>
              <button class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 w-full" @click="openPricingModal('KI-Workflow Setup')">
                Angebot anfordern
              </button>
            </div>
          </div>

          <!-- Karte 2: KI-Agenten -->
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20 hover:border-[#f60] transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <div class="card-body">
              <div class="w-16 h-16 bg-[#f60]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-2">KI-Agenten (maßgeschneidert)</h3>
              <p class="text-[#f60] font-semibold mb-4">Ein Mitarbeiter, der nie schläft — und nur Bruchteile kostet</p>
              <p class="text-base-content mb-6">
                Individuelle KI-Agenten für Recherche, E-Mail-Bearbeitung, Lead-Qualifizierung oder Datenanalyse. Trainiert auf deine Tonalität, dein Wissen, deine Prozesse.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  OpenAI / Anthropic / Mistral
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Wissensbasis-Anbindung
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Mensch-im-Loop wenn nötig
                </li>
              </ul>
              <p class="text-sm text-base-content/70 italic mb-6">
                Beispiele: "Recherche-Agent erstellt Konkurrenz-Briefings", "Inbox-Agent priorisiert &amp; schlägt Antworten vor"
              </p>
              <button class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 w-full" @click="openPricingModal('KI-Agent maßgeschneidert')">
                Angebot anfordern
              </button>
            </div>
          </div>

          <!-- Karte 3: Prozess-Beratung -->
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20 hover:border-[#f60] transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body">
              <div class="w-16 h-16 bg-[#f60]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <h3 class="text-2xl font-bold text-base-content mb-2">Prozess-Automatisierung &amp; Beratung</h3>
              <p class="text-[#f60] font-semibold mb-4">Erst verstehen, dann automatisieren — sonst skaliert ihr Chaos</p>
              <p class="text-base-content mb-6">
                Wir analysieren deine Prozesse, identifizieren die teuersten manuellen Schritte und bauen einen Automation-Fahrplan. Inklusive Aufwands-/ROI-Schätzung pro Prozess.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  Prozess-Audit
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  ROI-Bewertung
                </li>
                <li class="flex items-center text-base-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                  DSGVO-Check &amp; Schulung
                </li>
              </ul>
              <p class="text-sm text-base-content/70 italic mb-6">
                Beispiel: "2-Tages-Audit identifiziert 12h/Woche Sparpotenzial im Vertrieb"
              </p>
              <button class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 w-full" @click="openPricingModal('KI-Automation Beratung &amp; Audit')">
                Audit anfordern
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section id="usecases" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">
            Konkrete Anwendungsfälle
          </h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            Was wir typischerweise automatisieren
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">Lead-Qualifizierungs-Agent</h3>
              <p class="text-base-content mb-4">Eingehende Anfragen werden automatisch nach Fit, Budget und Dringlichkeit bewertet und priorisiert.</p>
              <p class="text-sm text-[#f60] font-semibold">Vorher: 30 Min/Lead manuell · Nachher: 2 Min Review</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up" data-aos-delay="80">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">E-Mail-Sortierung &amp; Antwort-Vorschläge</h3>
              <p class="text-base-content mb-4">Inbox wird kategorisiert, dringende Mails markiert, Standard-Antworten als Entwurf vorbereitet.</p>
              <p class="text-sm text-[#f60] font-semibold">Spart 5–10 Stunden pro Woche</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up" data-aos-delay="160">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">Recherche-Agent</h3>
              <p class="text-base-content mb-4">Konkurrenz-Briefings, Markt-Updates, Lead-Recherche — auf Knopfdruck als strukturiertes PDF.</p>
              <p class="text-sm text-[#f60] font-semibold">Aus 2 Stunden Recherche werden 5 Minuten</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">Angebots-Automatisierung</h3>
              <p class="text-base-content mb-4">Anfrage → standardisiertes Angebot mit individuellen Positionen → PDF → E-Mail-Versand.</p>
              <p class="text-sm text-[#f60] font-semibold">Angebot in 10 Min statt 1 Stunde</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up" data-aos-delay="80">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">CRM-Sync</h3>
              <p class="text-base-content mb-4">Kontakte, Aktivitäten und Notizen zwischen E-Mail, CRM, Kalender und Buchhaltung synchron halten.</p>
              <p class="text-sm text-[#f60] font-semibold">Schluss mit Daten-Insellage</p>
            </div>
          </div>
          <div class="card bg-base-200 border border-[#f60]/20" data-aos="fade-up" data-aos-delay="160">
            <div class="card-body">
              <h3 class="text-xl font-bold text-base-content mb-2">WhatsApp- &amp; Anruf-Triage</h3>
              <p class="text-base-content mb-4">Eingehende Nachrichten und Anruf-Notizen werden ins CRM überführt und an die richtige Person geroutet.</p>
              <p class="text-sm text-[#f60] font-semibold">Kein verlorener Lead mehr</p>
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
            Vom Audit bis zum laufenden Workflow
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20" data-aos="fade-up">
            <div class="card-body text-center">
              <div class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 class="text-xl font-bold text-base-content mb-4">Discovery &amp; Audit</h3>
              <p class="text-base-content">Wir schauen uns deine Prozesse an, identifizieren die teuersten manuellen Schritte und priorisieren nach ROI.</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20" data-aos="fade-up" data-aos-delay="100">
            <div class="card-body text-center">
              <div class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 class="text-xl font-bold text-base-content mb-4">Workflow-Design</h3>
              <p class="text-base-content">Wir entwerfen die Automation, prüfen DSGVO-Anforderungen und stimmen das Design mit dir ab.</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body text-center">
              <div class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 class="text-xl font-bold text-base-content mb-4">Implementierung</h3>
              <p class="text-base-content">Wir bauen, testen, dokumentieren — und schulen dein Team bei der Übergabe.</p>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl border border-[#f60]/20" data-aos="fade-up" data-aos-delay="300">
            <div class="card-body text-center">
              <div class="w-16 h-16 rounded-full bg-[#f60]/30 text-neutral-content flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 class="text-xl font-bold text-base-content mb-4">Betrieb &amp; Optimierung</h3>
              <p class="text-base-content">Monitoring, Fehler-Alerts, regelmäßige Reviews — und Anpassungen wenn sich Tools oder Prozesse ändern.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DSGVO -->
    <section id="dsgvo" class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 class="text-lg text-[#f60] font-semibold mb-4">DSGVO &amp; Datensicherheit</h3>
            <h2 class="text-4xl text-base-content font-bold mb-6">Compliance ist kein Add-on — sondern Voraussetzung</h2>
            <p class="text-lg text-base-content mb-6">
              Für den deutschen Mittelstand ist die Frage nicht "Können wir KI?", sondern "Können wir KI rechtssicher?". Wir bauen Automatisierungen so, dass sie von Anfang an DSGVO-konform sind.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <div class="p-2 bg-[#f60] text-white rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content">EU-Hosting &amp; on-prem Optionen</h4>
                  <p class="text-base-content">n8n self-hosted auf deinem Server, EU-Region für Cloud-Tools, lokale Modelle wenn nötig.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="p-2 bg-[#f60] text-white rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content">Auftragsverarbeitungs-Verträge (AVV)</h4>
                  <p class="text-base-content">Vorbereitete AVVs mit allen relevanten Subunternehmern — sauber dokumentiert.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="p-2 bg-[#f60] text-white rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content">Modellauswahl mit Bedacht</h4>
                  <p class="text-base-content">Für sensible Daten: Anthropic (EU), Mistral oder lokale Modelle. Klar dokumentiert, welcher Datenfluss wohin geht.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="p-2 bg-[#f60] text-white rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content">Audit-Logs &amp; Nachvollziehbarkeit</h4>
                  <p class="text-base-content">Jede Automation protokolliert, welche Daten sie verarbeitet hat. Bei Bedarf jederzeit prüfbar.</p>
                </div>
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" class="bg-base-200 rounded-lg p-8 border border-[#f60]/20">
            <h3 class="text-2xl font-bold text-base-content mb-6">Unsere DSGVO-Checklist</h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-base-content"><svg class="w-5 h-5 text-[#f60] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Datenfluss-Diagramm pro Automation</li>
              <li class="flex items-center gap-3 text-base-content"><svg class="w-5 h-5 text-[#f60] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Hosting-Region dokumentiert</li>
              <li class="flex items-center gap-3 text-base-content"><svg class="w-5 h-5 text-[#f60] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Subunternehmer-Verzeichnis</li>
              <li class="flex items-center gap-3 text-base-content"><svg class="w-5 h-5 text-[#f60] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Löschkonzept inkl. KI-Modell-Daten</li>
              <li class="flex items-center gap-3 text-base-content"><svg class="w-5 h-5 text-[#f60] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Technische &amp; organisatorische Maßnahmen (TOMs)</li>
              <li class="flex items-center gap-3 text-base-content"><svg class="w-5 h-5 text-[#f60] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Schulung der Mitarbeitenden</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="py-24 bg-gradient-to-b from-base-200 to-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h3 class="text-lg text-[#f60] font-semibold mb-2" data-aos="fade-up">Transparente Pakete</h3>
          <h2 class="text-5xl text-base-content font-bold mb-6" data-aos="fade-up" data-aos-delay="100">Pakete für KI-Automation</h2>
          <p class="text-xl text-base-content max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Klein anfangen oder direkt skalieren — alle Pakete inklusive DSGVO-Setup und Schulung.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          <!-- Starter -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300" data-aos="fade-up">
            <div class="card-body">
              <h3 class="card-title text-2xl font-bold mb-2 text-base-content">Starter</h3>
              <p class="text-sm text-base-content/70 mb-4">Erster Workflow live in 2 Wochen</p>
              <p class="text-4xl font-bold mb-1 text-base-content">ab 1.490 €</p>
              <p class="text-sm text-base-content/70 mb-6">einmalig + 99 €/Mo Wartung</p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>1 Workflow (bis 3 Tools)</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Zapier oder Make</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>1 Discovery-Call + 30-Min Übergabe</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>E-Mail-Support, 48h Reaktion</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>DSGVO-AVV inklusive</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Basis-Alerts</li>
              </ul>
              <button class="btn btn-outline hover:bg-[#f60] hover:border-[#f60] w-full" @click="openPricingModal('KI Starter')">Starter wählen</button>
            </div>
          </div>

          <!-- Business (Beliebt) -->
          <div class="card bg-base-100 shadow-xl border-4 border-[#f60] relative transform scale-105 z-10 bg-gradient-to-b from-base-100 to-[#f60]/5" data-aos="fade-up" data-aos-delay="100">
            <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div class="badge badge-lg bg-[#f60] border-[#f60] text-white font-bold px-5 py-3 text-sm shadow-lg tracking-[0.25em] uppercase">Beliebt</div>
            </div>
            <div class="card-body pt-8">
              <h3 class="card-title text-2xl font-bold mb-2 text-base-content">Business</h3>
              <p class="text-sm text-base-content/70 mb-4">Mehrere Automationen + dein erster KI-Agent</p>
              <p class="text-4xl font-bold mb-1 text-[#f60]">ab 3.900 €</p>
              <p class="text-sm text-base-content mb-6">einmalig + 249 €/Mo Wartung</p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>bis 3 Workflows + 1 KI-Agent</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>n8n (self-host möglich) oder Make</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>OpenAI / Anthropic Standard</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>2 Workshops + Doku + 90-Min Team-Training</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>E-Mail + Chat, 24h Reaktion</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Dashboard + Alerts</li>
              </ul>
              <button class="btn btn-primary bg-[#f60] border-none hover:bg-[#ff751a] text-white w-full" @click="openPricingModal('KI Business')">Business wählen</button>
            </div>
          </div>

          <!-- Enterprise -->
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body">
              <h3 class="card-title text-2xl font-bold mb-2 text-base-content">Enterprise</h3>
              <p class="text-sm text-base-content/70 mb-4">Maßgeschneidert für komplexe Anforderungen</p>
              <p class="text-4xl font-bold mb-1 text-base-content">auf Anfrage</p>
              <p class="text-sm text-base-content/70 mb-6">SLA &amp; Scope individuell</p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>unbegrenzte Workflows + Agenten</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>n8n self-hosted / API custom</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>on-prem / EU-Hosting für Modelle</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Discovery-Sprint + Inhouse-Workshop</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>SLA nach Vereinbarung</li>
                <li class="flex items-center gap-2 text-base-content"><svg class="w-5 h-5 text-[#f60]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>DPA + TOMs + Custom-Monitoring</li>
              </ul>
              <button class="btn btn-outline hover:bg-[#f60] hover:border-[#f60] w-full" @click="openPricingModal('KI Enterprise')">Beratung anfragen</button>
            </div>
          </div>
        </div>

        <p class="text-center text-sm text-base-content/60 max-w-3xl mx-auto mt-10 italic">
          Einmalige Preise als Richtwert. Exakter Aufwand wird nach Discovery-Call angeboten.
          API-/Tool-Lizenzkosten (z.B. OpenAI-Tokens, Make-Operations) werden separat ausgewiesen.
        </p>
      </div>
    </section>

    <!-- Keywords-Grid -->
    <section class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">Unsere Expertise</h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">
            KI-Automatisierung für deutsche Anforderungen
          </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">KI-Agenten erstellen</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">n8n Agentur</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Make.com Beratung</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Zapier Setup</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Workflow-Automatisierung</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Prozessautomatisierung KMU</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">DSGVO KI</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">E-Mail-Automatisierung</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Recherche-Agent</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">API-Integration</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">CRM-Automatisierung</p></div>
          <div class="bg-base-100 p-4 rounded-lg border border-[#f60]/20 text-center"><p class="text-base-content">Automatisierung Ostwestfalen</p></div>
        </div>
      </div>
    </section>

    <!-- Regionale Präsenz -->
    <KiAutomatisierungRegionalePraesenz />

    <!-- CTA -->
    <CTA />

    <!-- FAQ -->
    <section id="faq" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-lg text-[#f60] font-semibold" data-aos="fade-up">Häufig gestellte Fragen</h3>
          <h2 class="text-4xl text-base-content font-bold" data-aos="fade-up" data-aos-delay="100">Alles Wichtige zu KI-Automatisierung</h2>
        </div>
        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="ki-faq" checked="checked" />
              <div class="collapse-title text-xl font-medium text-base-content">Was kostet eine KI-Automatisierung?</div>
              <div class="collapse-content text-base-content">
                <p>Einfache Workflows starten ab 1.490 € einmalig (Starter-Paket). Maßgeschneiderte Agenten und mehrere verbundene Workflows liegen ab 3.900 € (Business). Komplexe Enterprise-Setups individuell. Hinzu kommen monatliche Wartung und ggf. API-/Tool-Lizenzkosten — wir weisen die immer separat aus.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="ki-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Wie lange dauert die Umsetzung?</div>
              <div class="collapse-content text-base-content">
                <p>Ein einzelner Workflow ist meist in 2 Wochen live. Komplexere Setups mit mehreren Automationen und KI-Agenten brauchen 4–8 Wochen. Discovery + Audit machen wir vorab in 1–2 Wochen.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="ki-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Was darf KI eigentlich DSGVO-mäßig?</div>
              <div class="collapse-content text-base-content">
                <p>Viel — wenn man es richtig macht. Wir nutzen Modelle mit EU-Hosting oder lokale Modelle für sensible Daten, schließen Auftragsverarbeitungs-Verträge mit allen Beteiligten, dokumentieren den Datenfluss und nutzen wo möglich pseudonymisierte Eingaben. Jede Automation ist auditierbar.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="ki-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Was ist der Unterschied zwischen n8n, Make und Zapier?</div>
              <div class="collapse-content text-base-content">
                <p>Zapier ist am einfachsten und teuersten pro Operation — gut für simple Sachen. Make bietet mehr Logik fürs gleiche Geld und ist unsere Standard-Wahl für mittlere Komplexität. n8n ist Open Source und kann auf deinem eigenen Server laufen — ideal wenn DSGVO oder Kostenkontrolle wichtig ist.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="ki-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Was passiert wenn ein Tool sich ändert oder ein Workflow bricht?</div>
              <div class="collapse-content text-base-content">
                <p>Genau dafür ist die monatliche Wartung. Wir überwachen die Workflows, bekommen Fehler-Alerts und passen an, wenn APIs sich ändern. Du musst dich um nichts kümmern.</p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-100">
              <input type="radio" name="ki-faq" />
              <div class="collapse-title text-xl font-medium text-base-content">Was, wenn ich gar kein IT-Mensch bin?</div>
              <div class="collapse-content text-base-content">
                <p>Genau dann ist das der richtige Service. Wir übersetzen deine Prozesse in Automationen, du musst nur sagen "Wenn das passiert, soll das passieren". Den Rest — Tools wählen, einrichten, betreiben — machen wir.</p>
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
import Navigation from "../components/ki-automatisierung/Navigation.vue";
import Footer from "../components/Footer.vue";
import ContactForm from "../components/ContactForm.vue";
import FloatingCallButton from "../components/FloatingCallButton.vue";
import PricingModal from "../components/PricingModal.vue";
import HeroContactForm from "../components/HeroContactForm.vue";
import CTA from "../components/CTA.vue";

const route = useRoute();

useHead({
  title: "KI-Automatisierung & KI-Agenten für KMU in OWL | Orangize Digital",
  meta: [
    { name: "description", content: "Workflow-Automatisierung, maßgeschneiderte KI-Agenten, Prozessautomatisierung mit n8n / Make / Zapier. DSGVO-konform, persönliche Betreuung aus Ostwestfalen." },
    { name: "keywords", content: "ki-automatisierung, ki-agenten, workflow-automatisierung, prozessautomatisierung, n8n agentur, make.com beratung, dsgvo ki, ai agents deutschland, automatisierung owl" },
    { property: "og:title", content: "KI-Automatisierung & KI-Agenten für KMU in OWL | Orangize Digital" },
    { property: "og:description", content: "Workflows, KI-Agenten und Prozessautomatisierung für den deutschen Mittelstand. DSGVO-konform, persönlich, aus OWL." },
    { property: "og:type", content: "website" },
  ],
  link: [{ rel: "canonical", href: `https://orangize.de${route.path}` }],
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
