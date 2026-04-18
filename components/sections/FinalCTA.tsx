"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="cta-form"
      className="py-24 md:py-32 bg-brand text-white relative overflow-hidden"
    >
      {/* Dekorative Hintergrund-Elemente */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ihr Betrieb verdient mehr{" "}
            <span className="italic">Sichtbarkeit.</span>
          </h2>

          <p className="text-lg md:text-xl mb-10 text-white/90">
            Starten Sie heute mit{" "}
            <strong className="underline underline-offset-4">
              3 kostenlosen Posts
            </strong>{" "}
            die zeigen was möglich ist.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              variant="dark"
              size="xl"
              className="bg-neutral-900 hover:bg-neutral-800"
            >
              <a
                href="https://wa.me/4369910654368?text=Hallo%20Socialmacher%2C%20ich%20h%C3%A4tte%20gerne%20meine%203%20kostenlosen%20Posts."
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                Per WhatsApp anfordern <MoveRight className="w-4 h-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="xl"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-brand"
            >
              <a href="mailto:hello@socialmacher.at?subject=3%20Gratis%20Posts%20anfordern">
                Oder per E-Mail
              </a>
            </Button>
          </div>

          <div className="mt-8 text-sm text-white/80">
            <p className="font-semibold">0€ Risiko · Keine Verpflichtung</p>
            <p className="text-xs mt-1">Innerhalb 48 Stunden in Ihrem Postfach</p>
          </div>
        </div>
      </div>
    </section>
  );
}
