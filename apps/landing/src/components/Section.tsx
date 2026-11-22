import type { ReactNode } from 'react'
import type { SectionHeading } from '../content/types'
import { Container } from './Container'
import { Reveal } from './Reveal'

export type Tone = 'light' | 'sand' | 'dark'

const TONE_CLASSES: Record<Tone, { section: string; eyebrow: string; intro: string; tag: string }> = {
  light: {
    section: 'bg-cream text-ink',
    eyebrow: 'text-accent-700',
    intro: 'text-ink-muted',
    tag: 'border-forest-300 text-forest-800',
  },
  sand: {
    section: 'bg-sand-100 text-ink',
    eyebrow: 'text-accent-700',
    intro: 'text-ink-muted',
    tag: 'border-forest-300 text-forest-800',
  },
  dark: {
    section: 'bg-forest-900 text-sand-100',
    eyebrow: 'text-accent-300',
    intro: 'text-forest-100',
    tag: 'border-forest-600 text-forest-100',
  },
}

interface SectionProps {
  heading: SectionHeading
  tone?: Tone
  /**
   * Optional illustration next to the heading. Mobile: above the text.
   * Desktop: beside it, on the side given by `mediaSide`.
   */
  media?: ReactNode
  mediaSide?: 'left' | 'right'
  children?: ReactNode
}

/**
 * One page section (a numbered chapter): landmark, anchor id, the "(01) Name" label,
 * the h2 and the intro. The label is a <p>, so the heading order stays h1, then one h2 per chapter.
 * No overflow clipping here, so sticky children (How it works) keep working.
 */
export function Section({ heading, tone = 'light', media, mediaSide = 'right', children }: SectionProps) {
  const classes = TONE_CLASSES[tone]
  const titleId = `${heading.id}-title`

  const text = (
    <Reveal className="max-w-2xl">
      <p className={`flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-lg font-medium ${classes.eyebrow}`}>
        <span>
          {heading.chapter ? <span className="tabular-nums">({heading.chapter}) </span> : null}
          {heading.eyebrow}
        </span>
        {heading.tag ? (
          <span
            className={`rounded-full border px-2.5 py-0.5 font-sans text-xs font-semibold uppercase tracking-wider ${classes.tag}`}
          >
            {heading.tag}
          </span>
        ) : null}
      </p>
      <h2
        id={titleId}
        className="mt-4 font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
      >
        {heading.title}
      </h2>
      {heading.intro ? (
        <p className={`mt-6 text-lg leading-relaxed sm:text-xl ${classes.intro}`}>{heading.intro}</p>
      ) : null}
    </Reveal>
  )

  return (
    <section
      id={heading.id}
      aria-labelledby={titleId}
      data-tone={tone === 'dark' ? 'dark' : undefined}
      className={`relative py-20 sm:py-28 ${classes.section}`}
    >
      <Container>
        {media ? (
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {text}
            {/* Text comes first in reading order; CSS puts the media first on mobile. */}
            <Reveal className={`order-first w-full ${mediaSide === 'right' ? 'lg:order-last' : ''}`}>
              {media}
            </Reveal>
          </div>
        ) : (
          text
        )}
        {children ? <div className="mt-12 sm:mt-16">{children}</div> : null}
      </Container>
    </section>
  )
}
