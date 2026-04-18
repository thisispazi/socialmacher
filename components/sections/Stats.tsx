"use client";

export function Stats() {
  return (
    <section
      id="stats"
      className="py-24 md:py-32 bg-gradient-to-b from-white to-brand-light/40"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-dark text-xs font-semibold uppercase tracking-widest">
            Die unbequeme Wahrheit
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Die Konkurrenz ist sichtbar.
            <br />
            Sie <span className="line-through text-neutral-400">
              nicht
            </span>
            .
            <br />
            Wohin gehen neue Kunden?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 max-w-5xl mx-auto">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full bg-brand flex items-center justify-center shadow-lg shadow-brand/20">
              <span className="text-3xl font-bold text-white">54%</span>
            </div>
            <p className="mt-6 text-sm text-neutral-600 max-w-[220px] leading-relaxed">
              der Konsumenten nutzen Social Media, um sich über Produkte und
              Dienstleistungen zu informieren*
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full bg-neutral-900 flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-white">71%</span>
            </div>
            <p className="mt-6 text-sm text-neutral-600 max-w-[220px] leading-relaxed">
              geben an, dass Social Media ihre Kaufentscheidung beeinflusst*
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full bg-brand-light flex items-center justify-center shadow-lg shadow-brand/10 border-2 border-brand/30">
              <span className="text-3xl font-bold text-brand-dark">€0</span>
            </div>
            <p className="mt-6 text-sm text-neutral-600 max-w-[220px] leading-relaxed">
              Ihr erster Eindruck kostet Sie nichts.{" "}
              <strong className="text-neutral-900">
                3 fertige Posts – komplett kostenlos.
              </strong>
              <br />
              <a
                href="#cta-form"
                className="text-brand underline underline-offset-2 text-xs mt-2 inline-block"
              >
                Jetzt anfordern ↓
              </a>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-neutral-400 mt-16 max-w-xl mx-auto">
          * basierend auf internationalen Studien zu Konsumentenverhalten im
          Social-Media-Bereich (u. a. GlobalWebIndex, Search Engine Watch)
        </p>
      </div>
    </section>
  );
}
