import type { Feature } from '../content/types'
import type { Tone } from './Section'
import { Icon } from './Icon'

interface FeatureCardProps {
  feature: Feature
  /** Use 'dark' on forest-green sections and 'light' elsewhere. */
  tone?: Exclude<Tone, 'sand'>
  /** Optional step number shown as a small badge (used for ordered lists). */
  step?: number
}

const CARD: Record<'light' | 'dark', { card: string; icon: string; text: string }> = {
  light: {
    card: 'border-sand-200 bg-white/70 hover:shadow-md',
    icon: 'bg-forest-100 text-forest-800',
    text: 'text-ink-muted',
  },
  dark: {
    card: 'border-forest-700 bg-forest-800/70 hover:bg-forest-800',
    icon: 'bg-accent-400 text-forest-950',
    text: 'text-forest-100',
  },
}

/** Icon, title and short text. Renders a list item, so the parent must be a ul or ol. */
export function FeatureCard({ feature, tone = 'light', step }: FeatureCardProps) {
  const classes = CARD[tone]

  return (
    <li
      className={`relative rounded-2xl border p-6 transition duration-200 hover:-translate-y-0.5 ${classes.card}`}
    >
      <div className="flex items-center justify-between">
        <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${classes.icon}`}>
          <Icon name={feature.icon} />
        </span>
        {step !== undefined ? (
          <span
            aria-hidden="true"
            className="font-display text-3xl font-semibold text-accent-500"
          >
            {step}
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-xl font-semibold leading-snug">{feature.title}</h3>
      <p className={`mt-2 leading-relaxed ${classes.text}`}>{feature.text}</p>
    </li>
  )
}
