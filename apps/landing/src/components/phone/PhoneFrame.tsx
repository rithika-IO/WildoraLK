import type { ReactNode } from 'react'

const WIDTHS = {
  md: 'w-[17rem]',
  sm: 'w-[13rem]',
}

interface PhoneFrameProps {
  /** What screen readers hear. The drawn screen inside is treated as one image. */
  label: string
  size?: keyof typeof WIDTHS
  children: ReactNode
}

/** A simple phone outline drawn with CSS. Children fill the screen area. */
export function PhoneFrame({ label, size = 'md', children }: PhoneFrameProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative aspect-[9/19] shrink-0 rounded-[2.5rem] bg-forest-950 p-2 shadow-phone ${WIDTHS[size]}`}
    >
      <div className="relative h-full overflow-hidden rounded-[2rem] bg-cream">
        <div className="absolute left-1/2 top-2.5 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-forest-950" />
        {children}
      </div>
    </div>
  )
}
