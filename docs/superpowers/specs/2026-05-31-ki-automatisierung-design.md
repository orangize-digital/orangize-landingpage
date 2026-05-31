# KI-Automatisierung — Drittes Service-Standbein für orangize.de

**Datum:** 2026-05-31
**Status:** Approved Design (Brainstorming abgeschlossen, Plan ausstehend)
**Owner:** Naumche / Orangize Digital
**Ansatz:** B — Solider Launch (volle Hauptseite + Homepage-Integration, keine Stadt-/Branchen-Pages in dieser Phase)

---

## Ziel

Orangize bietet bisher zwei Service-Standbeine: **Google Ads** und **Webdesign**. Hinzu kommt ein drittes: **KI-Automatisierung** (Workflow-Automatisierung, maßgeschneiderte KI-Agenten, Prozess-Beratung). Diese Spec definiert, wie das Angebot auf der Website abgebildet wird — als gleichwertiges drittes Standbein, sichtbar in Navigation, Homepage und mit eigener tiefer Service-Seite, ohne dabei in Stadt-/Branchen-Long-Tail-Pages zu skalieren (kommt in späterer Phase).

## Erfolgskriterien

- Neue Service-Seite `/ki-automatisierung` ist erreichbar, vollständig befüllt, optisch konsistent mit `/google-ads`.
- Homepage-Hero, ServicesShowcase, Pricing und Naumche-Bio reflektieren das dritte Standbein.
- Hauptnavigation hat einen "Leistungen"-Dropdown, der alle drei Services listet.
- Bestehende Routen, Komponenten und Funktionalität (Blog, Kontaktformulare, Stadt-Pages) bleiben unverändert lauffähig.
- Build und Netlify-Deployment laufen ohne neue Fehler durch.

## Nicht-Ziele (bewusst ausgeschlossen)

- **Stadt-Pages** (`/ki-automatisierung-herford`, `-bielefeld` …) — kommen erst nachdem die Hauptseite Sichtbarkeit hat. Verhindert "doorway page"-Risiko und thin-content.
- **Branchen-Pages** (`/ki-automatisierung-handwerker` etc.) — gleiche Begründung.
- **Eigene Lead-Magnet-Form** ("Kostenloses Automation-Audit") — Phase 2. Erstmal `ContactForm`/`HeroContactForm` wiederverwenden.
- **Stack-Wechsel oder Refactoring** der bestehenden Service-Seiten — nur additive Änderungen.

---

## Architektur & Dateilayout

Folgt 1:1 dem bestehenden Pattern der `/google-ads`-Seite.

### Neue Dateien

```
pages/
  ki-automatisierung.vue                          # Hauptseite, file-based routing → /ki-automatisierung

components/
  ki-automatisierung/
    Navigation.vue                                # Eigene Navi für die Service-Seite
                                                  # (Kopie von components/google-ads/Navigation.vue,
                                                  # Sektion-IDs angepasst, Leistungen-Dropdown enthalten)
    RegionalePraesenz.vue                         # OWL-Trust-Signal Sektion
                                                  # (Pattern von google-ads/RegionalePraesenzGoogleAds.vue)

assets/images/
  ki-automatisierung-hero.jpeg                    # Hintergrundbild Hero
```

### Geänderte Dateien

```
pages/index.vue                                   # Hero-Untertitel + Bullet, Bio-Karte erweitert
components/Navigation.vue                         # Leistungen-Dropdown statt einfacher Section-Links
components/ServicesShowcase.vue                   # 3. Karte (KI-Automation), grid md:grid-cols-3
components/Pricing.vue                            # Auf drei Service-Eingangs-Karten umgebaut
                                                  # (verlinken zu /<service>#pricing)
components/google-ads/Navigation.vue              # Leistungen-Dropdown ergänzt (Parität zur Hauptnavi)
components/webseite/Navigation.vue                # Leistungen-Dropdown ergänzt (falls existiert; check beim Plan)
```

### Wiederverwendet ohne Änderung

`ContactForm`, `HeroContactForm`, `FloatingCallButton`, `Footer`, `PricingModal`, `CTA`.

### Sitemap & Routing

Nuxt's file-based routing erstellt `/ki-automatisierung` automatisch durch Anlegen von `pages/ki-automatisierung.vue`. Keine `nuxt.config.ts`-Änderungen nötig. Während der Plan-Phase verifizieren, ob ein expliziter Sitemap-Generator existiert, der die Route aufnehmen muss.

### SEO/Meta

`useHead` analog `/google-ads.vue` mit eigenen Werten:

- **title:** "KI-Automatisierung & KI-Agenten für KMU in OWL | Orangize Digital"
- **description:** "Workflow-Automatisierung, maßgeschneiderte KI-Agenten, Prozessautomatisierung mit n8n / Make / Zapier. DSGVO-konform, persönliche Betreuung aus Ostwestfalen."
- **keywords:** ki-automatisierung, ki-agenten, workflow-automatisierung, prozessautomatisierung, n8n agentur, make.com beratung, dsgvo ki, ai agents deutschland, automatisierung owl
- **canonical:** `https://orangize.de/ki-automatisierung`
- **og:title/og:description:** parallel zum title
- **og:image:** zunächst dasselbe Mockup wie Homepage, später eigenes Bild

---

## Seitenaufbau `/ki-automatisierung`

Sektion-Reihenfolge analog `/google-ads.vue`, Inhalte auf KI zugeschnitten.

| # | Sektion | ID | Inhalt |
|---|---------|----|--------|
| 1 | Hero | — | Hintergrundbild + dunkler Overlay; Headline + Untertitel + 3 Bullets + 2 CTAs (Beratung / Mehr erfahren); rechts `HeroContactForm` |
| 2 | Tools & Stack | — | Logo-Leiste: n8n, Make, Zapier, OpenAI, Anthropic, Slack, HubSpot. Ersetzt `GoogleCertifications` als Trust-Element |
| 3 | Lösung | `losung` | 2-Spalten-Layout: links Fließtext "Warum jetzt KI-Automation?", rechts 4 Vorteils-Kacheln mit Icons (Zeit sparen / kein Personal / DSGVO-konform / planbar skalierbar) |
| 4 | Leistungen | `leistungen` | 3-Karten-Grid (siehe Sektion "Leistungen-Karten") |
| 5 | Use Cases | `usecases` | 6er-Grid: Lead-Qualifizierungs-Agent, E-Mail-Sortierung & Antwort-Vorschläge, Recherche-Agent, Angebots-Automatisierung, CRM-Sync, WhatsApp/Anruf-Triage. Jeweils 2-Satz-Beschreibung + Vorher/Nachher-Mini-Metrik |
| 6 | Prozess | `prozess` | 4-Schritt-Karten: 1) Discovery & Audit, 2) Workflow-Design, 3) Implementierung, 4) Betrieb & Optimierung |
| 7 | DSGVO & Datensicherheit | `dsgvo` | 2-Spalten-Layout analog Conversion-Tracking-Sektion bei Ads. EU-Hosting, on-prem-Optionen, DPA/AVV, welche Modelle DSGVO-konform sind |
| 8 | Pricing | `pricing` | 3 Pakete (siehe Sektion "Pricing") |
| 9 | Keywords-Grid | — | SEO-Block analog Google-Ads-Seite ("KI-Agenten erstellen", "n8n Agentur", "Make.com Beratung", "Prozessautomatisierung KMU", …) |
| 10 | Regionale Präsenz | — | `<KIAutomatisierungRegionalePraesenz />` — OWL-Bezug |
| 11 | CTA | — | Wiederverwendung der globalen `<CTA />`-Komponente |
| 12 | FAQ | `faq` | 6 Fragen: Kosten · Dauer · DSGVO · n8n vs Make · Wartung · "wenn ich kein IT-Mensch bin?" |
| 13 | Kontakt | `kontakt` | `<ContactForm />` |
| 14 | Footer | — | `<Footer />` |

Plus global eingebunden: `<FloatingCallButton />` und `<PricingModal ref="pricingModal" />`.

---

## Leistungen-Karten

Drei Karten in `#leistungen`, designtechnisch identisch zu den Google-Ads-Karten (`card bg-base-100 shadow-xl border border-primary/20`), SVG-Icons in `bg-primary/10` Boxen, Bullets mit `#f60` Check-SVGs.

### Karte 1 — Workflow-Automatisierung

- **Hook:** "Manuelle Klick-Arbeit eliminieren — ohne neues Personal"
- **Beschreibung:** Wir verbinden deine bestehenden Tools (CRM, E-Mail, Kalender, Buchhaltung, Webshop) zu reibungslosen Abläufen. Daten fließen automatisch dort hin, wo sie gebraucht werden.
- **Bullets:** n8n / Make / Zapier · API-Integrationen · Fehler-Monitoring
- **Beispiel:** "Neue Anfrage → CRM-Eintrag + Slack-Benachrichtigung + Angebots-Entwurf"
- **CTA:** "Angebot anfordern" → `PricingModal('KI-Workflow Setup')`

### Karte 2 — KI-Agenten (maßgeschneidert)

- **Hook:** "Ein Mitarbeiter, der nie schläft — und nur Bruchteile kostet"
- **Beschreibung:** Individuelle KI-Agenten für Recherche, E-Mail-Bearbeitung, Lead-Qualifizierung oder Datenanalyse. Trainiert auf deine Tonalität, dein Wissen, deine Prozesse.
- **Bullets:** OpenAI / Anthropic / Mistral · Wissensbasis-Anbindung · Mensch-im-Loop wenn nötig
- **Beispiele:** "Recherche-Agent erstellt Konkurrenz-Briefings", "Inbox-Agent priorisiert & schlägt Antworten vor"
- **CTA:** "Angebot anfordern" → `PricingModal('KI-Agent maßgeschneidert')`

### Karte 3 — Prozess-Automatisierung & Beratung

- **Hook:** "Erst verstehen, dann automatisieren — sonst skaliert ihr Chaos"
- **Beschreibung:** Wir analysieren deine Prozesse, identifizieren die teuersten manuellen Schritte und bauen einen Automation-Fahrplan. Inklusive Aufwands-/ROI-Schätzung pro Prozess.
- **Bullets:** Prozess-Audit · ROI-Bewertung · DSGVO-Check · Schulung deines Teams
- **Beispiel:** "2-Tages-Audit identifiziert 12h/Woche Sparpotenzial im Vertrieb"
- **CTA:** "Audit anfordern" → `PricingModal('KI-Automation Beratung & Audit')`

---

## Pricing

3-Spalten-Karten in `#pricing`, mittlere Karte "Beliebt"-Badge + orange Border. Markup-Pattern identisch zu bestehender `Pricing.vue`.

| Merkmal | **Starter** | **Business** *(Beliebt)* | **Enterprise** |
|---|---|---|---|
| Tagline | Erster Workflow live in 2 Wochen | Mehrere Automationen + dein erster KI-Agent | Maßgeschneidert für komplexe Anforderungen |
| Preis | **ab 1.490 €** einmalig + **99 €/Mo** Wartung | **ab 3.900 €** einmalig + **249 €/Mo** Wartung | **auf Anfrage** |
| Workflows | 1 Workflow (bis 3 Tools verbunden) | bis 3 Workflows + 1 KI-Agent | unbegrenzt, individuell |
| Tools | Zapier oder Make | n8n (self-host möglich) oder Make | n8n self-hosted / API custom |
| KI-Modelle | – | OpenAI / Anthropic Standard | inkl. on-prem / EU-Hosting |
| Onboarding | 1 Discovery-Call | 2 Workshops + Doku | dediziertes Discovery-Sprint |
| Schulung | 30-Min Übergabe | 90-Min Team-Training | Inhouse-Workshop |
| Support | E-Mail, 48h Reaktion | E-Mail + Chat, 24h Reaktion | SLA nach Vereinbarung |
| DSGVO/AVV | ✓ | ✓ | ✓ + DPA + TOMs |
| Monitoring | Basis-Alerts | Dashboard + Alerts | Custom-Monitoring |
| CTA | "Starter wählen" | "Business wählen" | "Beratung anfragen" |

Alle CTA-Buttons öffnen `PricingModal` mit dem jeweiligen Paketnamen als `interest`.

**Disclaimer unter den Karten:**
> *"Einmalige Preise als Richtwert. Exakter Aufwand wird nach Discovery-Call angeboten. API-/Tool-Lizenzkosten (z.B. OpenAI-Tokens, Make-Operations) werden separat ausgewiesen."*

---

## Homepage-Anpassungen

### 1. Hero (`pages/index.vue`)

- **Untertitel:**
  - *alt:* "Wir bauen Websites, die verkaufen und schalten Google Ads, die sich rechnen. Alles aus einer Hand."
  - *neu:* "Wir bauen Websites, die verkaufen, schalten Google Ads, die sich rechnen, und automatisieren Prozesse mit KI. Alles aus einer Hand."
- **Bullets:** 4 → 5, neuer 4. Bullet (vor "Persönliche Betreuung…"):
  - *"KI-Automationen, die Zeit & Personal sparen"*
- **Headline bleibt:** "Weniger raten. Mehr Kunden." — passt für alle drei Standbeine.

### 2. `ServicesShowcase.vue`

- Bestehende Karten (Google Ads, Webdesign) unverändert.
- Dritte Karte ergänzen:
  - **Icon:** Roboter-/Workflow-SVG (Lucide `bot` oder `workflow`)
  - **Titel:** "KI-Automatisierung"
  - **Subtitle:** "Workflows & KI-Agenten, die für dich arbeiten"
  - **Bullets:** n8n / Make / Zapier · DSGVO-konform · Maßgeschneiderte Agenten · Personal sparen
  - **CTA:** `<NuxtLink to="/ki-automatisierung">Mehr erfahren</NuxtLink>`
- Grid: `md:grid-cols-2` → `md:grid-cols-3`. Mobile bleibt 1-spaltig.

### 3. `Pricing.vue` (Homepage)

Umbau auf drei "Service-Eingangs-Karten" statt detaillierter Paketliste:

- Karte je Service mit "ab"-Preis, kurzem Hook, 3-Bullet-Highlight, CTA "Pakete ansehen".
- CTAs verlinken zu `/google-ads#pricing`, `/website-erstellen-lassen#pricing`, `/ki-automatisierung#pricing`.
- Detail-Pricing lebt auf den jeweiligen Service-Seiten.

### 4. Naumche-Bio (`pages/index.vue`)

- **Karten-Titel:**
  - *alt:* "Webentwickler & Google Ads Spezialist"
  - *neu:* "Webentwickler, Google Ads Spezialist & Automation Engineer"
- **Beschreibung:** Bestehende ersten beiden Absätze unverändert, dritter Absatz ersetzt durch:
  - *"Seit Jahren baue ich nicht nur Websites und Kampagnen, sondern auch die Workflows dahinter — von Lead-Routing bis KI-Agenten. Diese drei Bereiche wachsen zusammen, und genau diese Verbindung ist das, was meinen Kunden den größten Hebel bringt."*
- **Badges erweitern** (neue 4./5. Badge):
  - "Workflow-Automatisierung"
  - "KI-Agenten / LLM-Integration"

### Unverändert

Lösung-Sektion, `Facts`, `Projects`, Ablauf, CTA-Sektion, `FAQ`, `ContactForm`, `Footer`.

---

## Navigation

### Hauptnavi (`components/Navigation.vue`)

Aktuell: nur scroll-to-section Links + Blog. Service-Seiten sind aus der Nav heraus nicht erreichbar — Lücke wird mit drei Services größer.

**Desktop-Layout (eine Reihe):**

```
[Logo]   Leistungen ▾   Lösung   Fakten   Über uns   FAQ   Blog        [Theme] [Beratung vereinbaren]
              │
              ├── Google Ads          → /google-ads
              ├── Webdesign           → /website-erstellen-lassen
              └── KI-Automatisierung  → /ki-automatisierung
```

- "Leistungen" als DaisyUI `dropdown` (hover + click), drei `NuxtLink`s darin.
- "Ablauf" aus der Nav entfernen (Sektion bleibt scrollbar erreichbar) — sonst wird die Leiste zu voll.
- "Lösung", "Fakten", "Über uns", "FAQ" bleiben scroll-to-section (Verhalten auf Service-Seiten heute schon no-op, kein Regress).

**Mobile Menu:**

- "Leistungen" als ausklappbarer Sub-Block mit den 3 Service-Links.
- Rest unverändert.

### Service-Seiten-Navi (`components/google-ads/Navigation.vue`, neu für KI)

- Bekommen ebenfalls den Leistungen-Dropdown, damit User von einer Service-Seite direkt zur anderen springen kann.
- Für die KI-Seite: `components/ki-automatisierung/Navigation.vue` als Kopie mit angepassten Sektion-IDs (`losung`, `leistungen`, `prozess`, `dsgvo`, `pricing`, `faq`, `kontakt`).

---

## Tech-Stack-Notizen

- **Nuxt 3 / Vue 3 `<script setup>`** — keine Abweichung vom Bestehenden.
- **TailwindCSS + DaisyUI** — keine neuen Plugins, `dropdown` ist bereits Teil von DaisyUI 3.x.
- **AOS** — wiederverwendet für Sektion-Animationen, identische `data-aos`-Attribute wie Google-Ads-Seite.
- **Auto-Imports** — `useHead`, `useRoute`, `ref`, `computed`, `onMounted` etc. wie gewohnt.
- **Farbtoken `#f60`** — überall identisch verwendet (per CLAUDE.md Vorgabe).
- **Keine neuen Dependencies** in `package.json`.

---

## Build / Tests / Verifikation

Keine Test-Suite im Repo (laut CLAUDE.md). Verifikation manuell:

1. `npm run dev` → `/ki-automatisierung` rendert ohne Konsolen-Fehler.
2. Homepage rendert mit neuer Hero-Copy, 3-Karten-ServicesShowcase, neuer Pricing-Layout, erweiterter Bio.
3. Navigation: Leistungen-Dropdown öffnet, alle 3 Links funktionieren auf Homepage und Service-Seiten.
4. Mobile-Ansicht: Burger-Menü mit Leistungen-Sub-Block funktioniert.
5. `npm run build` läuft durch.
6. `npm run generate` (Static Generation für Netlify) läuft durch, generiert `/ki-automatisierung/index.html`.
7. `PricingModal` öffnet mit korrektem `interest`-Parameter aus allen KI-Leistungen- und Pricing-Karten.

---

## Risiken & Offene Punkte

- **Hero-Hintergrundbild:** Brauchen neues Bild für die KI-Seite (`assets/images/ki-automatisierung-hero.jpeg`). Zwischenlösung im Build: vorhandenes Bild wiederverwenden, finales Asset später nachreichen.
- **Tool-Logos:** Externe Logos (n8n, Make, OpenAI, …) brauchen entweder eingebundene SVGs oder Inline-Versionen. Während Plan-Phase klären, ob CDN-Links akzeptabel sind oder lokal hosten.
- **Sitemap-Generator:** Falls dynamisch generiert, sicherstellen dass neue Route aufgenommen wird (Plan-Phase verifiziert).
- **Homepage-Pricing-Umbau:** Größter "echter" Eingriff in bestehende Komponente. Risiko, dass bestehende Inhalte/Logik abgeschnitten werden — Plan muss Diff sorgfältig zeigen.
- **Phase 2 (nicht in dieser Spec):** Stadt-/Branchen-Pages, eigene Audit-Form, Case-Studies, Stack-Detail-Pages (`/n8n-agentur`, …).

---

## Out of Scope

- Stadt-spezifische KI-Pages
- Branchen-spezifische KI-Pages
- Lead-Magnet-Formular ("Kostenloses Automation-Audit")
- Blog-Posts zum Thema KI (separates Asset-Set)
- Tracking/Analytics-Events für die neue Seite
- A/B-Tests
- Backend-Änderungen, neue API-Routes (`server/api/`)
