"use client";

import { TrendingUp, Lock, Gift } from "lucide-react";

export function WhyUs() {
  const items = [
    {
      icon: TrendingUp,
      title: "Mehr Sichtbarkeit",
      text: "Ihr Betrieb wirkt aktiv, modern und relevant. Genau das, was Kunden erwarten.",
    },
    {
      icon: Lock,
      title: "Weniger Risiko",
      text: "Keine Bindung. Monatlich kündbar. Sie bleiben nur dann, wenn es für Sie passt.",
    },
    {
      icon: Gift,
      title: "Jetzt testen",
      text: "3 fertige Posts kostenlos. Sehen Sie, wie Ihre Social Media Präsenz wirken kann.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-16">
          Warum Socialmacher?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl transition-colors hover:bg-neutral-50"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-brand-dark" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg text-neutral-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
