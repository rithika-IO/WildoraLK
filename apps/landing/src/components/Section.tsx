import type { ReactNode } from 'react'
import type { SectionHeading } from '../content/types'
import { Container } from './Container'

export type Tone = 'light' | 'sand' | 'dark'

const TONE_CLASSES: Record<Tone, { section: string; eyebrow: string; intro: string }> = {
  light: {
    section: 'bg-cream text-ink',
    eyebrow: 'text-accent-700',
    intro: 'text-ink-muted',
  },
  sand: {
    section: 'bg-sand-100 text-ink',
    eyebrow: 'text-accent-700',
    intro: 'text-ink-muted',
  },
  dark: {
    section: 'bg-forest-900 text-sand-100',
    eyebrow: 'text-accent-400',
    intro: 'text-forest-100',
  },
}

interface SectionProps {
  heading: SectionHeading
  tone?: Tone
  /** Optional decoration placed behind the content (should be aria-hidden). */
  backdrop?: ReactNode
  children?: ReactNode
}

/** One page section: landmark, anchor id, and the standard eyebrow, h2 and intro. */
export function Section({ heading, tone = 'light', backdrop, children }: SectionProps) {
  const classes = TONE_CLASSES[tone]
  const titleId = `${heading.id}-title`

  return (
    <section
      id={heading.id}
      aria-labelledby={titleId}
      data-tone={tone === 'dark' ? 'dark' : undefined}
      className={`relative overflow-hidden py-16 sm:py-24 ${classes.section}`}
    >
      {backdrop}
      <Container className="relative">
        <div className="max-w-2xl">
          <p className={`text-sm font-semibold uppercase tracking-widest ${classes.eyebrow}`}>
            {heading.eyebrow}
          </p>
          <h2 id={titleId} className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            {heading.title}
          </h2>
          {heading.intro ? (
            <p className={`mt-4 text-lg leading-relaxed ${classes.intro}`}>{heading.intro}</p>
          ) : null}
        </div>
        {children ? <div className="mt-10 sm:mt-12">{children}</div> : null}
      </Container>
    </section>
  )
}
