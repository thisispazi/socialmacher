"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type ConsentState = {
  necessary: true; // immer true - technisch notwendig
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

const STORAGE_KEY = "socialmacher_cookie_consent_v1";

/**
 * DSGVO-konformer Cookie Banner
 * - Lädt Analytics/Marketing Skripte NUR nach Einwilligung
 * - Speichert Entscheidung in localStorage
 * - Erreichbar über Footer "Cookie-Einstellungen"
 */
export function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // Beim Laden: prüfen, ob Entscheidung vorhanden
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setIsOpen(true);
      } else {
        const consent: ConsentState = JSON.parse(stored);
        applyConsent(consent);
      }
    } catch {
      setIsOpen(true);
    }

    // Listener für Footer-Button "Cookie-Einstellungen"
    const handleOpen = () => {
      setShowDetails(true);
      setIsOpen(true);
    };
    window.addEventListener("open-cookie-banner", handleOpen);
    return () => window.removeEventListener("open-cookie-banner", handleOpen);
  }, []);

  function applyConsent(consent: ConsentState) {
    // HIER werden Tracking-Skripte bedingt geladen
    // Google Analytics z. B.:
    if (consent.analytics) {
      // loadGoogleAnalytics();
    }
    if (consent.marketing) {
      // loadMetaPixel();
    }
  }

  function save(consent: Omit<ConsentState, "timestamp" | "necessary">) {
    const full: ConsentState = {
      necessary: true,
      ...consent,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
    applyConsent(full);
    setIsOpen(false);
  }

  function acceptAll() {
    save({ analytics: true, marketing: true });
  }

  function rejectAll() {
    save({ analytics: false, marketing: false });
  }

  function saveSelection() {
    save({ analytics, marketing });
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl border border-neutral-200 overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900">
              Wir verwenden Cookies
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Schließen"
              className="text-neutral-400 hover:text-neutral-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
            Wir nutzen Cookies, um Ihr Nutzererlebnis zu verbessern und unsere
            Website zu analysieren. Technisch notwendige Cookies werden immer
            geladen. Andere Cookies setzen wir nur mit Ihrer Einwilligung.
            Weitere Informationen finden Sie in unserer{" "}
            <a
              href="/datenschutz"
              className="text-brand underline underline-offset-2"
            >
              Datenschutzerklärung
            </a>
            .
          </p>

          {showDetails && (
            <div className="space-y-3 my-5 border-t border-b border-neutral-200 py-5">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 h-4 w-4 rounded border-neutral-300"
                  id="c-necessary"
                />
                <label htmlFor="c-necessary" className="flex-1">
                  <div className="font-semibold text-sm text-neutral-900">
                    Technisch notwendig
                  </div>
                  <div className="text-xs text-neutral-600">
                    Erforderlich für den Betrieb der Website. Kann nicht
                    deaktiviert werden.
                  </div>
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-neutral-300"
                  id="c-analytics"
                />
                <label htmlFor="c-analytics" className="flex-1 cursor-pointer">
                  <div className="font-semibold text-sm text-neutral-900">
                    Statistik / Analyse
                  </div>
                  <div className="text-xs text-neutral-600">
                    Hilft uns zu verstehen, wie Besucher die Website nutzen
                    (z. B. Google Analytics).
                  </div>
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-neutral-300"
                  id="c-marketing"
                />
                <label htmlFor="c-marketing" className="flex-1 cursor-pointer">
                  <div className="font-semibold text-sm text-neutral-900">
                    Marketing
                  </div>
                  <div className="text-xs text-neutral-600">
                    Wird verwendet, um Werbung relevanter zu gestalten
                    (z. B. Meta Pixel).
                  </div>
                </label>
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-2 md:gap-3 mt-4">
            {!showDetails ? (
              <>
                <Button onClick={acceptAll} variant="default" className="flex-1">
                  Alle akzeptieren
                </Button>
                <Button
                  onClick={rejectAll}
                  variant="outline"
                  className="flex-1"
                >
                  Alle ablehnen
                </Button>
                <Button
                  onClick={() => setShowDetails(true)}
                  variant="ghost"
                  className="flex-1"
                >
                  Einstellungen
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={saveSelection}
                  variant="default"
                  className="flex-1"
                >
                  Auswahl speichern
                </Button>
                <Button
                  onClick={rejectAll}
                  variant="outline"
                  className="flex-1"
                >
                  Nur Notwendige
                </Button>
                <Button onClick={acceptAll} variant="dark" className="flex-1">
                  Alle akzeptieren
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
