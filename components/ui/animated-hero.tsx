"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "Yoga Studios",
      "Gärtner",
      "Handwerker",
      "Friseursalons",
      "Restaurants",
      "E-Commerce Marken",
      "Coaches",
      "Bars",
      "Lieferdienste",
      "Cafés",
      "Immobilienmakler",
      "Interior Design Studios",
      "Eventagenturen",
      "Reiseanbieter",
      "Fitnessstudios",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2200);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const handleScrollToNext = () => {
    const next = document.getElementById("stats");
    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 md:py-28 lg:py-36 items-center justify-center flex-col">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-light text-brand-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              Social Media Content · NÖ &amp; Wien
            </span>
          </div>
          <div className="flex gap-5 flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-4xl tracking-tight text-center font-semibold text-neutral-900">
              <span>Wir machen Content für</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 min-h-[1.2em]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-brand"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-neutral-600 max-w-2xl text-center mx-auto">
              Wir erstellen für Ihren Betrieb wöchentlich Social Media Content
              und liefern ihn direkt ins Postfach. Sie posten selbst, oder wir
              erledigen das.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button size="lg" variant="default" asChild>
              <a href="#cta-form" className="gap-2">
                3 Gratis Posts anfordern <MoveRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleScrollToNext}
              className="gap-2"
            >
              Mehr erfahren <ArrowDown className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-6 text-xs text-neutral-500 mt-2">
            <span>✓ Unverbindlich</span>
            <span>✓ Kostenlos</span>
            <span>✓ Innerhalb 48 h</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AnimatedHero };
