import type { ReactNode } from 'react'

type Variant = 'primary' | 'accent'

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-forest-800 text-cream hover:bg-forest-700',
  accent: 'bg-accent-400 text-forest-950 hover:bg-accent-300',
}

interface ButtonProps {
  href: string
  variant?: Variant
  children: ReactNode
}

/** A link styled as a button. Used for in-page scrolling and the mailto link. */
export function Button({ href, variant = 'primary', children }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-sm transition-colors duration-200 ${VARIANTS[variant]}`}
    >
      {children}
    </a>
  )
}
