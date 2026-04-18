# Bilder-Ordner

Hier kommen eure echten Bilder hin. Folgende Dateien werden erwartet:

## Post-Beispiele (3-spaltige Sektion)
- `post-example-1.jpg` (Microneedling / Kosmetik)
- `post-example-2.jpg` (Café / Restaurant)
- `post-example-3.jpg` (Coaching / Beratung)

**Empfohlenes Format:** Quadratisch (1:1), mindestens 800×800 px, JPG oder WebP

## Wie ihr Bilder austauscht

1. Legt die Bilder mit exakt diesem Dateinamen in diesen Ordner
2. Öffnet `components/sections/PostExamples.tsx`
3. Sucht nach dem Kommentar `// Falls echtes Bild vorhanden, tausche oben gegen:`
4. Kommentiert den `<PlaceholderImage ... />` aus und aktiviert den `<Image />`-Block
5. Speichern → automatischer Hot-Reload im Browser

## Weitere Assets
- `og-image.jpg` (1200×630 px) - für Social-Media-Vorschau
- `favicon.ico` / `favicon.png` - kommt nach `/app/`
