import { Section } from '../components/Section'
import { ROADMAP_COPY, ROADMAP_HEADING, ROADMAP_PHASES } from '../content/roadmap'

export function Roadmap() {
  return (
    <Section heading={ROADMAP_HEADING} tone="light">
      <ol className="relative max-w-2xl space-y-8 border-l-2 border-forest-200 pl-8">
        {ROADMAP_PHASES.map((phase) => (
          <li key={phase.title} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[2.6rem] top-1.5 h-4 w-4 rounded-full border-2 ${
                phase.current
                  ? 'border-forest-800 bg-accent-400'
                  : 'border-forest-400 bg-cream'
              }`}
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-2xl font-semibold text-forest-900">{phase.title}</h3>
              <p className="rounded-full bg-sand-100 px-3 py-1 text-sm font-semibold text-ink">
                {phase.when}
              </p>
              {phase.current ? (
                <p className="rounded-full bg-accent-400 px-3 py-1 text-sm font-semibold text-forest-950">
                  {ROADMAP_COPY.currentLabel}
                </p>
              ) : null}
            </div>
            <p className="mt-2 text-lg leading-relaxed text-ink-muted">{phase.text}</p>
          </li>
        ))}
      </ol>
      <p className="mt-10 max-w-2xl text-base text-ink-muted">{ROADMAP_COPY.disclaimer}</p>
    </Section>
  )
}
