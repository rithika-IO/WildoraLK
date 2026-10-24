/** Decorative landscape for the hero: dusk sky, sun, hills, an acacia tree and a small jeep on a track. */
export function HeroArt({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      aria-hidden="true"
      focusable="false"
      className={`block h-auto w-full overflow-hidden rounded-3xl ${className}`}
    >
      <rect width="480" height="360" rx="28" className="fill-forest-950" />

      <circle cx="90" cy="60" r="2" className="fill-sand-100" opacity="0.6" />
      <circle cx="170" cy="36" r="1.5" className="fill-sand-100" opacity="0.5" />
      <circle cx="250" cy="70" r="2" className="fill-sand-100" opacity="0.6" />
      <circle cx="420" cy="48" r="1.5" className="fill-sand-100" opacity="0.5" />
      <circle cx="40" cy="120" r="1.5" className="fill-sand-100" opacity="0.4" />

      <circle cx="340" cy="120" r="78" className="fill-accent-400" opacity="0.18" />
      <circle cx="340" cy="120" r="52" className="fill-accent-400" />

      <path d="M0 230C80 180 160 190 240 220C320 250 400 190 480 210V360H0Z" className="fill-forest-800" />
      <path d="M0 272C90 232 190 252 270 266C350 280 420 246 480 256V360H0Z" className="fill-forest-700" />

      {/* Acacia tree */}
      <path
        d="M120 268V222M120 238L100 224M120 232L142 220"
        fill="none"
        className="stroke-forest-950"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <ellipse cx="120" cy="212" rx="50" ry="12" className="fill-forest-950" />
      <ellipse cx="92" cy="220" rx="24" ry="8" className="fill-forest-950" />
      <ellipse cx="148" cy="219" rx="24" ry="8" className="fill-forest-950" />

      <path d="M0 314C100 288 200 302 300 312C380 320 440 302 480 306V360H0Z" className="fill-forest-600" />

      {/* Track and a small jeep */}
      <path d="M176 360C220 334 252 320 330 304L352 308C288 326 272 340 252 360Z" className="fill-sand-300" opacity="0.9" />
      <g transform="translate(286 330) scale(0.8)">
        <rect x="-22" y="-17" width="44" height="12" rx="3" className="fill-forest-950" />
        <path d="M-12 -25v8M12 -25v8" fill="none" className="stroke-forest-950" strokeWidth={2} />
        <rect x="-15" y="-29" width="30" height="4" rx="2" className="fill-forest-950" />
        <circle cx="-12" cy="-4" r="5" className="fill-forest-950" />
        <circle cx="12" cy="-4" r="5" className="fill-forest-950" />
      </g>
    </svg>
  )
}
