<template>
  <div>
    <Navigation />

    <!-- Hero -->
    <div
      class="hero min-h-[110vh] relative bg-[url('@/assets/images/google-ads-hero.jpeg')] lg:mt-0"
    >
      <div class="hero-overlay bg-black bg-opacity-80"></div>
      <div class="hero-content relative z-10 w-full lg:py-0 py-[150px]">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div data-aos="fade-right">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                KI-Automatisierung &
                <span class="text-[#f60]">KI-Agenten</span>
              </h1>
              <p class="text-xl text-white mb-8 leading-relaxed">
                Workflows automatisieren, KI-Agenten einsetzen, Prozesse verschlanken
                — DSGVO-konform und ohne zusätzliches Personal.
              </p>

              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  <span class="text-white">Zeit sparen, Personalkosten senken</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  <span class="text-white">DSGVO-konform, EU-Hosting möglich</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  <span class="text-white">Maßgeschneidert für deine Prozesse</span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <button
                  class="btn bg-[#f60] text-neutral-content border-none hover:bg-[#f60]/90 text-lg px-8"
                  @click="scrollToSection('kontakt')"
                >
                  Kostenlose Beratung
                </button>
                <button
                  class="btn btn-outline border-white text-white hover:bg-white hover:text-black text-lg px-8"
                  @click="scrollToSection('losung')"
                >
                  Mehr erfahren
                </button>
              </div>
            </div>

            <div data-aos="fade-up" class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl"></div>
              <div class="relative">
                <HeroContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-8 w-full flex justify-center">
        <a href="#" @click.prevent="scrollToSection('losung')" class="text-white animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#fff">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>

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
