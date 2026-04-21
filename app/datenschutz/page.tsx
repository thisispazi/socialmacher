import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Socialmacher (iQoon e.U.) gemäß Art. 13 und 14 DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <article className="prose-legal container mx-auto max-w-3xl py-20 md:py-28">
      <h1>Datenschutzerklärung</h1>
      <p className="text-sm text-neutral-500">
        Stand: März 2026 · Gültig für: www.socialmacher.at
      </p>

      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
        Diese Datenschutzerklärung informiert Sie gemäß Art. 13 und 14 DSGVO
        darüber, welche personenbezogenen Daten wir erheben, wie wir sie
        verwenden und welche Rechte Sie haben.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Patrick Belousek · iQoon e.U.
        <br />
        Gartengasse 26, 2630 Ternitz, Österreich
        <br />
        E-Mail: <a href="mailto:hello@socialmacher.at">hello@socialmacher.at</a>
        <br />
        Telefon: <a href="tel:+4369910654368">+43 699 10654368</a>
      </p>

      <h2>2. Hosting &amp; technischer Betrieb</h2>
      <p>Diese Website wird bei Vercel Inc. gehostet:</p>
      <p>
        Vercel Inc.
        <br />
        340 S Lemon Ave #4133, Walnut, CA 91789, USA
      </p>
      <p>
        Beim Aufruf der Website werden automatisch Server-Logfiles mit
        technischen Zugriffsdaten (IP-Adresse, Browser-Typ, Datum/Uhrzeit,
        aufgerufene Seite) verarbeitet. Diese Verarbeitung dient dem sicheren
        Betrieb der Website und erfolgt auf Basis von Art. 6 Abs. 1 lit. f
        DSGVO (berechtigtes Interesse).
      </p>
      <p>
        Weitere Informationen:{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          vercel.com/legal/privacy-policy
        </a>
      </p>

      <h2>3. Kontaktaufnahme</h2>
      <h3>3.1 Kontaktformular</h3>
      <p>Wenn Sie unser Kontaktformular nutzen, erheben wir folgende Daten:</p>
      <ul>
        <li>Name und Betriebsname</li>
        <li>E-Mail-Adresse oder Telefonnummer</li>
        <li>Branche (optional)</li>
        <li>Instagram-Account (optional)</li>
        <li>Inhalt Ihrer Anfrage</li>
      </ul>
      <p>
        Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
        bzw. lit. f (berechtigtes Interesse).
        <br />
        Speicherdauer: Anfragen werden nach abgeschlossener Bearbeitung
        gelöscht, spätestens nach 3 Jahren.
      </p>

      <h3>3.2 Kontakt per WhatsApp</h3>
      <p>
        Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Nachricht und Ihre
        Telefonnummer von Meta Platforms Ireland Limited verarbeitet.
      </p>
      <p>
        Wir empfehlen, keine vertraulichen Daten über WhatsApp zu übermitteln.
      </p>
      <p>
        Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
        <br />
        Datenschutz:{" "}
        <a
          href="https://www.whatsapp.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          whatsapp.com/legal/privacy-policy
        </a>
      </p>

      <h3>3.3 Kontakt per E-Mail</h3>
      <p>
        Bei einer E-Mail-Kontaktaufnahme speichern wir Ihre E-Mail-Adresse und
        den Inhalt der Nachricht zur Bearbeitung.
      </p>
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO</p>

      <h2>4. Vertragsabwicklung &amp; Zahlung</h2>
      <h3>4.1 Vertragsabwicklung</h3>
      <p>
        Zur Erfüllung unserer Leistungen verarbeiten wir Unternehmensdaten,
        Kontaktdaten und Inhalte.
      </p>
      <p>
        Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
        <br />
        Speicherdauer: 7 Jahre gemäß § 132 BAO
      </p>

      <h3>4.2 Zahlung per Banküberweisung</h3>
      <p>
        Wir verarbeiten Ihre Daten zur Rechnungsstellung und Buchführung.
      </p>
      <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. c DSGVO</p>

      <h3>4.3 Online-Zahlung (Stripe / PayPal)</h3>
      <p>
        <strong>Stripe Payments Europe, Ltd.</strong>
        <br />
        1 Grand Canal Street Lower, Dublin 2, Irland
        <br />
        Datenschutz:{" "}
        <a
          href="https://stripe.com/at/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          stripe.com/at/privacy
        </a>
      </p>
      <p>
        <strong>PayPal (Europe) S.à r.l. et Cie, S.C.A.</strong>
        <br />
        22-24 Boulevard Royal, L-2449 Luxemburg
        <br />
        Datenschutz:{" "}
        <a
          href="https://www.paypal.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          paypal.com/privacy
        </a>
      </p>
      <p>Diese Anbieter erhalten nur notwendige Daten zur Zahlungsabwicklung.</p>

      <h2>5. Google Analytics</h2>
      <p>Diese Website kann Google Analytics verwenden.</p>
      <p>
        Dabei werden Informationen über die Nutzung der Website analysiert und
        ggf. in die USA übertragen. Wir nutzen IP-Anonymisierung.
      </p>
      <p>
        Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
        <br />
        Widerspruch:{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
        >
          tools.google.com/dlpage/gaoptout
        </a>
        <br />
        Datenschutz:{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          policies.google.com/privacy
        </a>
      </p>
      <p>
        Hinweis: Google Analytics wird derzeit möglicherweise noch nicht aktiv
        eingesetzt.
      </p>

      <h2>6. Meta Pixel (Facebook/Instagram)</h2>
      <p>Diese Website kann den Meta Pixel einsetzen.</p>
      <p>
        Dabei können Daten (z. B. IP-Adresse, Browserdaten) an Meta übertragen
        werden.
      </p>
      <p>
        Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO
        <br />
        Widerspruch:{" "}
        <a
          href="https://www.facebook.com/ads/preferences"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook.com/ads/preferences
        </a>
        <br />
        Datenschutz:{" "}
        <a
          href="https://www.facebook.com/privacy/explanation"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook.com/privacy/explanation
        </a>
      </p>
      <p>
        Hinweis: Der Meta Pixel wird derzeit möglicherweise noch nicht aktiv
        eingesetzt.
      </p>

      <h2>7. Cookies</h2>
      <p>Unsere Website verwendet Cookies:</p>
      <ul>
        <li>Technisch notwendige Cookies (keine Einwilligung erforderlich)</li>
        <li>Analyse- und Marketing-Cookies (nur mit Einwilligung)</li>
      </ul>
      <p>Sie können Cookies jederzeit in Ihrem Browser deaktivieren.</p>

      <h2>8. Ihre Rechte nach DSGVO</h2>
      <p>Sie haben das Recht auf:</p>
      <ul>
        <li>Auskunft (Art. 15 DSGVO)</li>
        <li>Berichtigung (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch (Art. 21 DSGVO)</li>
        <li>Widerruf von Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        Kontakt:{" "}
        <a href="mailto:hello@socialmacher.at">hello@socialmacher.at</a>
      </p>

      <h2>9. Beschwerderecht</h2>
      <p>
        Österreichische Datenschutzbehörde
        <br />
        Barichgasse 40–42, 1030 Wien
        <br />
        Telefon: +43 1 52 152-0
        <br />
        E-Mail: <a href="mailto:dsb@dsb.gv.at">dsb@dsb.gv.at</a>
        <br />
        Website:{" "}
        <a
          href="https://www.dsb.gv.at"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.dsb.gv.at
        </a>
      </p>

      <h2>10. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen. Aktueller
        Stand: März 2026
      </p>
    </article>
  );
}
