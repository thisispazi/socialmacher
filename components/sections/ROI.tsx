"use client";

export function ROI() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Linke Spalte */}
          <div>
            <p className="text-xs text-neutral-500 mb-3">
              Die Frage die jeder stellt
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-5">
              Zahlt sich das wirklich aus?
            </h2>
            <p className="text-sm text-neutral-600 mb-8 leading-relaxed">
              In vielen Fällen kann bereits ein Neukunde die Investition decken.
              Die folgenden Beispiele zeigen typische Durchschnittswerte.
            </p>

            <div className="space-y-3">
              <RoiCard
                category="Kosmetikstudio"
                calc="€80 × 8 Besuche = Kundenwert"
                value="€640"
                sub="1 Neukunde"
              />
              <RoiCard
                category="Café / Restaurant"
                calc="€25 × 20 Besuche = Kundenwert"
                value="€500"
                sub="1 Stammgast"
                highlighted
              />
              <RoiCard
                category="Coach / Berater"
                calc="€150 × 4 Monate = Kundenwert"
                value="€600"
                sub="1 Klient"
              />
            </div>

            <p className="text-xs italic text-neutral-400 mt-6">
              Beispielhafte Kalkulationen. Ergebnisse können variieren.
            </p>
          </div>

          {/* Rechte Spalte */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-5">
              Beispiel:
              <br />
              Dachdecker
              <br />
              Meisterbetrieb
            </h3>
            <p className="text-sm text-neutral-600 mb-8">
              Beispielhafte Rechnung auf Basis durchschnittlicher Werte.
            </p>

            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <span className="text-sm text-neutral-700 font-medium">
                  Monatliche Investition
                </span>
                <span className="text-sm font-semibold text-neutral-900">
                  € 299
                </span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <span className="text-sm text-neutral-700 font-medium">
                  Ø Auftragswert
                </span>
                <span className="text-sm font-semibold text-neutral-900">
                  € 2.800
                </span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                <span className="text-sm text-neutral-700 font-medium">
                  Möglicher Effekt
                </span>
                <span className="text-sm font-semibold text-neutral-900">
                  zusätzliche Anfragen
                </span>
              </div>
            </div>

            <div className="bg-brand-light border border-brand/30 rounded-xl p-5 mt-8">
              <p className="text-sm font-semibold text-neutral-900">
                Schon eine zusätzliche Anfrage kann die Investition ausgleichen.
              </p>
              <p className="text-xs text-neutral-600 mt-1">
                Individuelle Ergebnisse können je nach Betrieb variieren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoiCard({
  category,
  calc,
  value,
  sub,
  highlighted,
}: {
  category: string;
  calc: string;
  value: string;
  sub: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-xl ${
        highlighted
          ? "bg-brand-light border border-brand/30"
          : "bg-neutral-50 border border-neutral-200"
      }`}
    >
      <div>
        <div className="font-semibold text-sm text-neutral-900">{category}</div>
        <div className="text-xs text-neutral-500">{calc}</div>
      </div>
      <div className="text-right">
        <div className="text-xl font-bold text-neutral-900">{value}</div>
        <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
          {sub}
        </div>
      </div>
    </div>
  );
}
