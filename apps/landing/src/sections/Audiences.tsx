import { Icon } from '../components/Icon'
import { PhoneFrame } from '../components/phone/PhoneFrame'
import { PhoneScreen } from '../components/phone/screens'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { AUDIENCE_HEADING, AUDIENCES } from '../content/audiences'
import { SCREEN_LABELS } from '../content/phoneScreens'

/** Two panels, drivers and visitors, each with a small phone and four benefits. */
export function Audiences() {
  return (
    <Section heading={AUDIENCE_HEADING} tone="light">
      <div className="grid gap-6 xl:grid-cols-2">
        {AUDIENCES.map((audience, index) => (
          <Reveal key={audience.title} index={index} className="flex">
            <article className="flex w-full flex-col items-center gap-10 rounded-3xl bg-sand-100 p-6 shadow-card sm:flex-row sm:items-start sm:p-10">
              <PhoneFrame label={SCREEN_LABELS[audience.screen]} size="sm">
                <PhoneScreen name={audience.screen} />
              </PhoneFrame>
              <div className="w-full">
                <h3 className="text-3xl font-semibold text-forest-900">{audience.title}</h3>
                <p className="mt-2 text-lg text-ink-muted">{audience.intro}</p>
                <ul className="mt-8 space-y-6">
                  {audience.benefits.map((benefit) => (
                    <li key={benefit.title} className="flex gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest-800 text-accent-300">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      <div>
                        <h4 className="font-semibold text-ink">{benefit.title}</h4>
                        <p className="mt-1 leading-relaxed text-ink-muted">{benefit.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
