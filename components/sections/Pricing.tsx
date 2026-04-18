"use client";

import { Button } from "@/components/ui/button";
import { Check, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  description: string;
  price: string;
  period: string;
  note?: string;
  features: string[];
  highlighted?: boolean;
  dark?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "STARTER",
    description: "Für Einsteiger die endlich sichtbar werden wollen.",
    price: "€299",
    period: "/Monat",
    note: "≈ €10 pro Tag",
    features: [
      "8 fertige Posts monatlich",
      "Professionelle Bilder & Captions",
      "Hashtag-Sets inklusive",
      "Lieferung als fertige Dateien",
      "monatlich kündbar",
    ],
  },
  {
    name: "GROWTH",
    description: "Für Betriebe die konsequent wachsen wollen.",
    price: "€399",
    period: "/Monat",
    note: "Am beliebtesten",
    features: [
      "12 fertige Posts monatlich",
      "Bilder & Captions",
      "Hashtags",
      "Lieferung als fertige Dateien",
      "monatlich kündbar",
    ],
    highlighted: true,
    badge: "AM BELIEBTESTEN",
  },
  {
    name: "ULTIMATE",
    description: "Für Betriebe die Social Media auslagern.",
    price: "€799",
    period: "/Monat",
    note: "Wir kümmern uns um alles",
    features: [
      "16 fertige Posts monatlich",
      "Monatliche Inhalts-Strategie",
      "Hashtags",
      "Posting und Account Management",
      "monatlich kündbar",
    ],
    dark: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Pakete, die zu Ihnen passen
          </h2>
          <p className="mt-4 text-neutral-600 max-w-xl mx-auto">
            Transparent. Flexibel. Monatlich kündbar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border p-8 flex flex-col transition-all",
                plan.highlighted &&
                  "border-brand bg-brand-light/50 md:scale-105 shadow-xl shadow-brand/10",
                plan.dark && "border-neutral-900 bg-neutral-900 text-white",
                !plan.highlighted &&
                  !plan.dark &&
                  "border-neutral-200 bg-white hover:shadow-lg"
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <div className="text-center">
                <div
                  className={cn(
                    "font-bold tracking-widest text-sm italic",
                    plan.dark ? "text-brand" : "text-brand-dark"
                  )}
                >
                  {plan.name}
                </div>
                <p
                  className={cn(
                    "text-xs mt-2 italic",
                    plan.dark ? "text-neutral-400" : "text-neutral-600"
                  )}
                >
                  {plan.description}
                </p>

                <div className="mt-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span
                      className={cn(
                        "text-sm",
                        plan.dark ? "text-neutral-400" : "text-neutral-600"
                      )}
                    >
                      {plan.period}
                    </span>
                  </div>
                  {plan.note && (
                    <p
                      className={cn(
                        "text-xs italic mt-1",
                        plan.dark ? "text-neutral-400" : "text-neutral-500"
                      )}
                    >
                      {plan.note}
                    </p>
                  )}
                </div>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={cn(
                        "w-4 h-4 shrink-0 mt-0.5",
                        plan.dark ? "text-brand" : "text-brand-dark"
                      )}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.dark ? "default" : plan.highlighted ? "default" : "outline"}
                className="mt-8 w-full"
                size="lg"
              >
                <a href="#cta-form" className="gap-2">
                  Jetzt starten <MoveRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="default" size="lg">
            <a href="#cta-form" className="gap-2">
              3 Gratis Posts anfordern <MoveRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
