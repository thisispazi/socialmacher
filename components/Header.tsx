"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* SVG Logo - Platzhalter, kann durch eigenes Logo ersetzt werden */}
          <div className="flex items-center gap-2">
            <svg
              width="28"
              height="28"
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
            <span className="font-bold tracking-tight text-neutral-900">
              SOCIAL
              <span className="text-brand">MACHER</span>
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Button asChild variant="default" size="sm">
            <a href="#cta-form" className="gap-2">
              3 Gratis Posts anfordern <MoveRight className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
