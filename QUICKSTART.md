# 🚀 SCHNELLSTART - in 10 Minuten live

## Was brauchst du?
- Mac mit Terminal (hast du)
- GitHub Account (hast du)
- GitHub Desktop (gleich runterladen)
- Vercel Account (gleich anlegen)

## Ablauf in Kürze

```
ZIP entpacken
    ↓
Terminal: cd in den Ordner
    ↓
npm install
    ↓
npm run dev   →  http://localhost:3000 im Browser checken
    ↓
GitHub Desktop → Repository anlegen → Publish
    ↓
Vercel → Import from GitHub → Deploy
    ↓
Domain in Vercel einrichten
    ↓
Bei GoDaddy DNS umstellen
```

## Die 3 wichtigsten Terminal-Befehle

```bash
cd ~/Desktop/socialmacher     # In den Projektordner wechseln
npm install                    # Pakete installieren (einmalig)
npm run dev                    # Lokal starten
```

**Cmd + C** stoppt den Server.

## Der Moment wenn's klemmt

| Fehlermeldung | Was tun |
|--------------|---------|
| `command not found: npm` | Node.js von https://nodejs.org installieren |
| `port 3000 is already in use` | Anderes Terminal mit `npm run dev` läuft - Cmd+C drücken |
| `Module not found` nach `git pull` | Nochmal `npm install` laufen lassen |
| Vercel Build schlägt fehl | Logs in Vercel-Dashboard lesen, meist Typo in neuer Datei |

**Die ausführliche Schritt-für-Schritt-Anleitung findest du in `README.md`.**
