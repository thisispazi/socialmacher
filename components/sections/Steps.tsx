"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export function Steps() {
  const steps = [
    {
      num: "01",
      title: "Sie melden sich, wir kümmern uns um den Rest",
      text: "Ein kurzes Gespräch oder eine WhatsApp-Nachricht reicht. Keine Vorbereitung, kein Aufwand Ihrerseits.",
      badge: "HEUTE",
    },
    {
      num: "02",
      title: "Wir liefern 3 fertige Posts – sofort einsatzbereit",
      text: "Bilder, Texte, Hashtags. Alles fertig. Sie müssen nichts erstellen. Fertig geliefert und ohne Verpflichtung.",
      badge: "100% KOSTENLOS",
    },
    {
      num: "03",
      title: "Sie posten und werden sichtbar",
      text: "Sie veröffentlichen die Inhalte selbst oder wir übernehmen das. Ihr Betrieb bleibt regelmäßig präsent.",
      badge: "LAUFEND",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-16">
          Von Null auf sichtbar
          <br />
          in 3 Schritten
        </h2>

        <div className="flex flex-col gap-5 max-w-4xl mx-auto">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 hover:border-brand/50 hover:shadow-md transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand shrink-0 md:w-24">
                {s.num}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-neutral-900 mb-1">
                  {s.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {s.text}
                </p>
              </div>
              <span className="shrink-0 inline-flex items-center rounded-full bg-brand-light text-brand-dark text-[10px] font-bold tracking-widest uppercase px-3 py-1.5">
                {s.badge}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="brandOutline" size="lg">
            <a href="#cta-form" className="gap-2">
              3 Gratis Posts anfordern <MoveRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
