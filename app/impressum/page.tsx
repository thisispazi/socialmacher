import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Socialmacher (iQoon e.U.) · Angaben gemäß § 5 ECG & § 25 MedienG.",
};

export default function ImpressumPage() {
  return (
    <article className="prose-legal container mx-auto max-w-3xl py-20 md:py-28">
      <h1>Impressum</h1>
      <p className="text-sm text-neutral-500">Stand: März 2026</p>

      <p>Angaben gemäß § 5 ECG &amp; § 25 MedienG</p>

      <p>
        <strong>Patrick Reiter</strong>
        <br />
        iQoon e.U.
        <br />
        Gartengasse 26
        <br />
        2630 Ternitz
        <br />
        Österreich
      </p>

      <p>
        E-Mail:{" "}
        <a href="mailto:hello@socialmacher.at">hello@socialmacher.at</a>
        <br />
        Telefon: <a href="tel:+4369910654368">+43 699 10654368</a>
        <br />
        Website:{" "}
        <a href="https://www.socialmacher.at">www.socialmacher.at</a>
      </p>

      <h2>Unternehmensgegenstand</h2>
      <p>
        Erstellung und Konzeption von Social-Media-Content, digitaler Werbung
        und medialer Kommunikationsleistungen für Unternehmen.
      </p>

      <h2>Unternehmensrechtliche Daten</h2>
      <p>
        Rechtsform: Eingetragenes Einzelunternehmen (e.U.)
        <br />
        Umsatzsteuer-Identifikationsnummer (UID): ATU75431114
        <br />
        Firmenbuch: FN 518884 s
        <br />
        Firmenbuchgericht: Landesgericht Wiener Neustadt
      </p>

      <h2>Behörde gemäß ECG</h2>
      <p>
        Bezirkshauptmannschaft Neunkirchen
        <br />
        Wienerstraße 56
        <br />
        2620 Neunkirchen
      </p>

      <h2>Mitgliedschaft</h2>
      <p>
        Mitglied der Wirtschaftskammer Österreich (WKO)
        <br />
        Fachgruppe Werbung und Marktkommunikation
      </p>

      <h2>Anwendbare Rechtsvorschriften</h2>
      <p>
        Gewerbeordnung (GewO) – zugänglich unter{" "}
        <a
          href="https://www.ris.bka.gv.at"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.ris.bka.gv.at
        </a>
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
        übernehmen wir jedoch keine Gewähr. Als Diensteanbieter sind wir gemäß
        § 17 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich.
      </p>
      <p>
        Für Inhalte externer Websites, auf die wir verlinken, übernehmen wir
        keine Haftung. Für den Inhalt der verlinkten Seiten ist ausschließlich
        deren Betreiber verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser
        Website unterliegen dem österreichischen Urheberrecht. Die
        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
        außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
        Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr
        </a>
      </p>
      <p>
        Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
        bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </article>
  );
}
