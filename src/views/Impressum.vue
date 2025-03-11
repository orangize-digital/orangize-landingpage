<template>
  <div>
    <Navigation />
    <main
      class="min-h-screen flex flex-col items-center justify-center text-center p-6"
    >
      <div class="mt-[200px]">
        <h1 class="text-4xl text-white font-bold mb-4">Impressum</h1>
        <p class="text-lg">Rechtliche Hinweise | Orangize Digital</p>
      </div>

      <section id="impressum-content" class="text-left max-w-4xl mx-auto mt-12">
        <div>
          <p class="text-white">
            Brüderstr. 11 <br />
            32547 Bad Oeynhausen <br /><br />

            <strong>Vertreten durch:</strong> <br />
            Naumche Joshevski <br /><br />

            <strong>Kontakt</strong> <br />
            Telefon: 0151 22031093 <br />
            E-Mail: info@orangize.de <br /><br />

            <strong>Fotografie</strong> <br />
            www.pexels.com <br /><br />

            <strong
              >Verbraucherstreitbeilegung / Universalschlichtungsstelle</strong
            >
            <br />
            Wir sind weder bereit noch verpflichtet, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen. <br /><br />

            <strong>Haftung für Inhalte</strong> <br />
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
            auf dieser Website nach den allgemeinen Gesetzen verantwortlich.
            Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen
            oder nach Hinweisen auf rechtswidrige Handlungen zu durchsuchen.
            <br />
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben davon unberührt.
            Eine Haftung ist allerdings erst ab dem Zeitpunkt möglich, zu dem
            uns eine konkrete Rechtsverletzung bekannt wird. Bei Bekanntwerden
            solcher Rechtsverletzungen werden wir die entsprechenden Inhalte
            umgehend entfernen. <br /><br />

            <strong>Haftung für Links</strong> <br />
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Daher können wir für diese
            fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            verantwortlich. <br />
            Zum Zeitpunkt der Verlinkung wurden die verlinkten Seiten auf
            mögliche Rechtsverstöße überprüft und es waren keine rechtswidrigen
            Inhalte erkennbar. Eine dauerhafte inhaltliche Kontrolle der
            verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            <br /><br />

            <strong>Urheberrecht</strong> <br />
            Die durch die Betreiber dieser Seite erstellten Inhalte und Werke
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers. <br />
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. <br />
            Soweit Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
            werden die Urheberrechte Dritter beachtet und entsprechende Inhalte
            als solche gekennzeichnet. <br />
            Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam
            werden, bitten wir um einen entsprechenden Hinweis. <br />
            Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
            Inhalte umgehend entfernen. <br /><br />
          </p>
        </div>
      </section>

      <router-link to="/" class="mt-6 btn btn-primary">
        Zurück zur Startseite
      </router-link>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
</script>
