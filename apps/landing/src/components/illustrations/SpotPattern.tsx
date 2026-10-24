import { useId } from 'react'

/**
 * Soft repeating leopard-rosette pattern used as a background texture.
 * It uses currentColor, so set the colour with a text-* class on a parent.
 */
export function SpotPattern({ className = '' }: { className?: string }) {
  const patternId = useId().replace(/:/g, '')

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <pattern id={patternId} width="96" height="96" patternUnits="userSpaceOnUse">
          <circle
            cx="24"
            cy="26"
            r="9"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="36 20"
          />
          <circle cx="24" cy="26" r="2.5" fill="currentColor" />
          <circle
            cx="70"
            cy="68"
            r="11"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="44 25"
            transform="rotate(120 70 68)"
          />
          <circle cx="70" cy="68" r="3" fill="currentColor" />
          <circle cx="76" cy="18" r="2" fill="currentColor" />
          <circle cx="14" cy="76" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
