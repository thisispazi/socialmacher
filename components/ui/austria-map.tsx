export function AustriaMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Stilisierter Umriss von Niederösterreich + Wien */}
      <path
        d="M80 180 Q90 140 130 120 Q180 100 240 110 Q300 95 360 100 Q420 90 470 110 Q520 130 540 170 Q555 210 535 250 Q510 290 460 310 Q400 325 340 315 Q290 325 230 320 Q180 310 130 285 Q85 255 75 220 Q72 195 80 180 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Wien als kleine Insel */}
      <circle cx="380" cy="195" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="380" y="200" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.7">
        WIEN
      </text>
    </svg>
  );
}
