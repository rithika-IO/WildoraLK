import type { ReactNode } from 'react'
import { NEW_TAB_LABEL } from '../content/site'

type Variant = 'primary' | 'accent' | 'onPhoto'

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-forest-800 text-cream hover:bg-forest-700',
  accent: 'bg-accent-400 text-forest-950 hover:bg-accent-300',
  onPhoto: 'border border-cream/50 bg-forest-950/35 text-cream backdrop-blur-sm hover:bg-forest-950/55',
}

interface ButtonProps {
  href: string
  variant?: Variant
  children: ReactNode
}

/** A link styled as a button. Web links (http...) open in a new tab and say so to screen readers. */
export function Button({ href, variant = 'primary', children }: ButtonProps) {
  const external = href.startsWith('http')

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-sm transition-colors duration-200 ${VARIANTS[variant]}`}
    >
      {children}
      {external ? <span className="sr-only"> {NEW_TAB_LABEL}</span> : null}
    </a>
  )
}
