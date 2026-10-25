import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { SightingMap } from '../components/SightingMap'
import { FAIR_TURN_HEADING, FAIR_TURN_POINTS } from '../content/fairTurn'

export function FairTurn() {
  return (
    <Section
      heading={FAIR_TURN_HEADING}
      tone="sand"
      media={<SightingMap mode="fair" />}
      mediaSide="right"
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {FAIR_TURN_POINTS.map((point, index) => (
          <Reveal as="li" key={point.title} index={index} className="flex">
            <div className="flex w-full flex-col rounded-3xl bg-white/90 p-7 shadow-card transition-[translate,box-shadow] duration-300 hover:shadow-lift motion-safe:hover:-translate-y-1 sm:p-8">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-100 font-display text-lg font-bold text-forest-800"
              >
                {index + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-forest-900">
                {point.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink-muted">
                {point.text}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
