"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container mx-auto py-12">
        <div className="mb-10 max-w-3xl mx-auto text-center">
          <p className="text-sm leading-relaxed text-neutral-600">
            Socialmacher bietet Social Media Content für Unternehmen in
            Niederösterreich und Wien. Wir erstellen fertige Instagram und
            Facebook Beiträge inklusive Bilder, Texte und Hashtags. Unser
            Service richtet sich an kleine und mittelständische Betriebe, die
            regelmäßig sichtbar sein möchten, ohne selbst Content erstellen zu
            müssen.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-neutral-200">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="7" cy="14" r="4" fill="#4FA8C7" />
                <circle cx="21" cy="7" r="4" fill="#2E7A99" />
                <circle cx="21" cy="21" r="4" fill="#2E7A99" />
                <path
                  d="M10.5 12L17.5 8.5M10.5 16L17.5 19.5"
                  stroke="#4FA8C7"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="font-semibold text-neutral-900">
                © {new Date().getFullYear()} Socialmacher
              </span>
            </div>
            <a
              href="mailto:hello@socialmacher.at"
              className="text-sm text-neutral-600 hover:text-brand"
            >
              hello@socialmacher.at
            </a>
            <a
              href="tel:+4369910654368"
              className="text-sm text-neutral-600 hover:text-brand"
            >
              +43 699 10654368
            </a>
          </div>

          <nav className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
            <Link
              href="/impressum"
              className="text-neutral-600 hover:text-brand"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-neutral-600 hover:text-brand"
            >
              Datenschutz
            </Link>
            <Link href="/agb" className="text-neutral-600 hover:text-brand">
              AGB
            </Link>
            <button
              onClick={() => {
                // Cookie-Präferenzen erneut öffnen
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("open-cookie-banner"));
                }
              }}
              className="text-neutral-600 hover:text-brand text-left"
            >
              Cookie-Einstellungen
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
