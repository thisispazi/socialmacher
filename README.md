# Socialmacher.at

Moderne Next.js Website für **Socialmacher** (iQoon e.U.), gehostet auf Vercel.

---

## 📦 Was ist drin?

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** für das Design
- **Framer Motion** für den rotierenden Hero
- **DSGVO-konformer Cookie-Banner** (kein Tracking ohne Einwilligung)
- **Rechtstexte** (Impressum, Datenschutz, AGB) - einsatzbereit
- **Ein-Datei-Bildaustausch** - Platzhalter sind vorbereitet

---

## 🖥 Teil 1: Projekt lokal auf deinem Mac starten

Hier lernst du alle Basis-Befehle. Einmal gemacht, brauchst du sie immer wieder.

### 1.1 Voraussetzungen installieren (einmalig)

**Node.js installieren**

1. Öffne den Browser und gehe auf https://nodejs.org
2. Lade die Version **"LTS"** (Long Term Support) herunter - das ist der grüne Button
3. Doppelklick auf die `.pkg`-Datei, durch den Installer klicken
4. Fertig

**Terminal öffnen**

- Drücke `Cmd + Leertaste` → tippe "Terminal" → Enter
- Es öffnet sich ein schwarzes Fenster mit Text - das ist das Terminal

**Prüfen ob Node da ist**

Tippe im Terminal:
```bash
node --version
```
Es sollte sowas wie `v20.11.0` erscheinen. Falls nicht → Node nochmal neu installieren.

### 1.2 Projekt auf den Computer bringen

Ich nehme an, du hast diesen Projekt-Ordner als ZIP bekommen.

1. **ZIP entpacken**: Doppelklick auf die ZIP → es entsteht ein Ordner `socialmacher`
2. **Ordner verschieben**: Ziehe den Ordner z. B. auf deinen Desktop oder in `~/Dokumente`
3. **Terminal dorthin wechseln**:
   ```bash
   cd ~/Desktop/socialmacher
   ```
   (Passe den Pfad an, falls du es woanders hingelegt hast.)

   **Tipp**: Statt zu tippen kannst du `cd ` eintippen (mit Leerzeichen am Ende), dann den Ordner vom Finder ins Terminal-Fenster ziehen und Enter drücken.

### 1.3 Abhängigkeiten installieren

Im Terminal, weiterhin im `socialmacher`-Ordner:
```bash
npm install
```

Das lädt alle benötigten Pakete herunter (einige Minuten, je nach Internet). Du siehst viel Text durchlaufen - das ist normal. Am Ende sollte keine rote Fehlermeldung stehen.

### 1.4 Entwicklungsserver starten

```bash
npm run dev
```

Du siehst:
```
 ✓ Ready in 2.3s
 ○ Local:   http://localhost:3000
```

Öffne den Browser, gib `http://localhost:3000` ein → deine Website ist live auf deinem Computer! 🎉

**Zum Stoppen** des Servers: `Cmd + C` im Terminal drücken.

---

## 🎨 Teil 2: Änderungen machen (VS Code)

### 2.1 VS Code öffnen

1. Öffne VS Code
2. `File` → `Open Folder` → wähle den `socialmacher`-Ordner → "Open"
3. Links siehst du jetzt die ganze Ordnerstruktur

### 2.2 Wichtigste Dateien zum Ändern

| Datei | Was drin ist |
|-------|-------------|
| `components/ui/animated-hero.tsx` | Der Hero-Bereich oben (Text, rotierende Worte) |
| `components/sections/Stats.tsx` | 54% / 71% / €0 Statistiken |
| `components/sections/Pricing.tsx` | Die 3 Preispakete |
| `components/sections/PostExamples.tsx` | Post-Beispiele mit Bild-Platzhaltern |
| `components/sections/FinalCTA.tsx` | Blaue CTA-Sektion unten |
| `app/impressum/page.tsx` | Impressum |
| `app/datenschutz/page.tsx` | Datenschutz |
| `app/agb/page.tsx` | AGB |

### 2.3 Text ändern - Beispiel

Öffne `components/ui/animated-hero.tsx`, finde den `titles`-Array:

```tsx
const titles = useMemo(
  () => [
    "Yoga Studios",
    "Gärtner",
    ...
  ],
  []
);
```

Einfach Einträge ändern, hinzufügen, löschen - **Speichern** (`Cmd + S`) - Browser lädt automatisch neu.

### 2.4 Bilder austauschen (Post-Beispiele)

1. Lege deine echten Bilder in den Ordner `public/images/` mit genau diesen Namen:
   - `post-example-1.jpg`
   - `post-example-2.jpg`
   - `post-example-3.jpg`
2. Öffne `components/sections/PostExamples.tsx`
3. Suche die Zeile `<PlaceholderImage label={...} />` (3× vorhanden)
4. Ersetze sie durch:
   ```tsx
   <Image
     src={ex.image}
     alt={ex.handle}
     fill
     className="object-cover"
   />
   ```
5. Speichern - fertig.

---

## 🚀 Teil 3: Auf GitHub laden

### 3.1 GitHub Desktop herunterladen (empfohlen für Einsteiger)

1. Gehe auf https://desktop.github.com
2. Herunterladen → installieren
3. Starten → mit deinem GitHub-Account einloggen

### 3.2 Neues Repository anlegen

1. In GitHub Desktop: `File` → `New Repository`
2. **Name**: `socialmacher` (oder was du willst)
3. **Local Path**: Wähle den **übergeordneten** Ordner (also z. B. `~/Desktop`, nicht `socialmacher` selbst)
4. **Initialize with README**: Häkchen NICHT setzen (wir haben schon eine)
5. "Create Repository"

**Problem**: GitHub Desktop hat jetzt einen leeren Ordner angelegt. Wir haben aber schon unseren bestehenden Ordner.

**Bessere Alternative**: Nimm `Add Existing Repository`
1. `File` → `Add Local Repository`
2. Wähle den `socialmacher`-Ordner
3. Falls Warnung "This directory does not appear to be a Git repository" → klicke `create a repository`
4. Bestätige

### 3.3 Erster Commit & Push

1. Links siehst du alle Dateien unter "Changes"
2. Unten links: **Summary**: `initial commit` → `Commit to main`
3. Oben: `Publish repository` → **Name**: `socialmacher` → ggf. "Keep this code private" entscheiden → `Publish Repository`

Fertig! Deine Website ist auf GitHub.

---

## ☁️ Teil 4: Auf Vercel deployen

### 4.1 Vercel-Account

1. Gehe auf https://vercel.com
2. "Sign Up" → **"Continue with GitHub"** (ganz wichtig - so kann Vercel direkt auf deine Repos zugreifen)
3. Den GitHub-Zugriff bestätigen

### 4.2 Projekt importieren

1. Im Vercel-Dashboard: `Add New...` → `Project`
2. Du siehst eine Liste deiner GitHub-Repositories → **socialmacher** auswählen → `Import`
3. Vercel erkennt automatisch Next.js - alle Einstellungen stimmen bereits
4. Klicke `Deploy`
5. Warte 1-2 Minuten ☕️

### 4.3 Deine Website ist live

Vercel gibt dir eine URL wie `socialmacher-xyz.vercel.app`. Die kannst du schon jetzt teilen.

**Jedes Mal wenn du jetzt Änderungen auf GitHub pushst (via GitHub Desktop: Commit + Push), deployt Vercel automatisch neu.** Das ist der große Vorteil.

---

## 🌐 Teil 5: Domain socialmacher.at auf Vercel umstellen

Deine Domain liegt bei **GoDaddy**, ist aber gerade auf Squarespace gerichtet. Wir leiten sie um auf Vercel.

### 5.1 Domain in Vercel hinzufügen

1. Im Vercel-Dashboard: dein Projekt öffnen
2. Oben rechts: `Settings` → `Domains` (linkes Menü)
3. Feld "Add Domain" → `socialmacher.at` eingeben → `Add`
4. Vercel zeigt dir jetzt **DNS-Einträge**, die du bei GoDaddy setzen musst. Lass dieses Fenster offen.

Vercel zeigt normalerweise zwei Einträge:
- Für die Apex-Domain (socialmacher.at): **A-Record** → `76.76.21.21`
- Für www.socialmacher.at: **CNAME** → `cname.vercel-dns.com`

### 5.2 Bei GoDaddy die DNS-Einträge setzen

1. Browser: https://dcc.godaddy.com/control/portfolio → einloggen
2. Bei deiner Domain `socialmacher.at` auf **DNS** klicken
3. Du siehst eine Liste der bestehenden Einträge
4. **Lösche** zuerst alle bestehenden Einträge vom Typ **A** und **CNAME**, die auf Squarespace zeigen:
   - A-Records mit IPs wie `198.185.159.144`, `198.185.159.145`, `198.49.23.144`, `198.49.23.145` (Squarespace)
   - CNAME `www` mit Wert `ext-cust.squarespace.com` oder ähnlich
5. **Neue Einträge hinzufügen** (Button "Record hinzufügen"):
   - **Typ**: A · **Name**: `@` · **Wert**: `76.76.21.21` · **TTL**: 1 Stunde
   - **Typ**: CNAME · **Name**: `www` · **Wert**: `cname.vercel-dns.com` · **TTL**: 1 Stunde
6. Speichern

**Warnung**: Ändere **nicht** die MX-Records, falls du E-Mail über die Domain nutzt! Die bleiben, wo sie sind.

### 5.3 Abwarten

DNS-Änderungen dauern **bis zu 24 Stunden** (meistens 15 Min - 2 h). In Vercel erscheint bei der Domain dann ein grünes "Valid Configuration" und ein HTTPS-Zertifikat wird automatisch ausgestellt.

### 5.4 Squarespace kündigen

**Erst wenn socialmacher.at einwandfrei über Vercel läuft**:
1. Squarespace einloggen
2. Abrechnungs-/Plan-Einstellungen
3. Abo kündigen
4. Gegebenenfalls bei GoDaddy prüfen, dass die Domain nicht automatisch bei Squarespace "verknüpft" bleibt - du behältst sie ja.

---

## 🍪 Cookie-Banner: wie er funktioniert

Der Banner (`components/CookieBanner.tsx`) ist DSGVO-konform:
- **Erscheint einmal** beim ersten Besuch
- Nutzer kann: **Alle akzeptieren**, **Alle ablehnen**, oder **Einstellungen** anpassen (Analytics/Marketing getrennt)
- Entscheidung wird im `localStorage` des Browsers gespeichert → erscheint danach nicht mehr
- Über den Footer-Link "Cookie-Einstellungen" kann der Nutzer seine Wahl jederzeit ändern

### Tracking-Skripte einbauen (z. B. Google Analytics)

Öffne `components/CookieBanner.tsx`, finde die Funktion `applyConsent`:

```tsx
function applyConsent(consent: ConsentState) {
  if (consent.analytics) {
    // loadGoogleAnalytics();     ← hier reinpacken
  }
  if (consent.marketing) {
    // loadMetaPixel();           ← hier reinpacken
  }
}
```

Das stellt sicher, dass Tracking wirklich **nur** bei Einwilligung lädt. Kein Cookie vorher.

---

## 📝 Häufige Aufgaben - Schnellreferenz

| Ich möchte... | So geht's |
|---------------|-----------|
| ...lokal im Browser ansehen | `npm run dev` im Terminal |
| ...deployen | In VS Code / GitHub Desktop: Änderungen committen + pushen - Vercel deployt automatisch |
| ...Hero-Wörter ändern | `components/ui/animated-hero.tsx`, `titles`-Array |
| ...Preise ändern | `components/sections/Pricing.tsx` |
| ...Logo ersetzen | Svg in `components/Header.tsx` austauschen |
| ...Bilder upload | In `/public/images/` legen mit den Namen aus der Doku |
| ...E-Mail ändern | Suche in `components/Footer.tsx` + Legal-Seiten nach `hello@socialmacher.at` |

---

## 🆘 Support

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind Cheat-Sheet**: https://tailwindcomponents.com/cheatsheet/

Bei Problemen mit dem DNS-Umzug: in Vercel bei "Domains" auf "Refresh" klicken - oft reicht das.

---

© 2026 iQoon e.U. · Patrick Reiter
