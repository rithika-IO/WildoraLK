import { Icon } from '../components/Icon'
import { Section } from '../components/Section'
import { VISITOR_STAGES, VISITORS_HEADING } from '../content/visitors'

export function Visitors() {
  return (
    <Section heading={VISITORS_HEADING} tone="sand">
      <div className="grid gap-6 lg:grid-cols-3">
        {VISITOR_STAGES.map((stage) => (
          <div
            key={stage.title}
            className="rounded-2xl border border-sand-200 bg-cream p-6 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-forest-900">{stage.title}</h3>
            <ul className="mt-5 grid gap-5">
              {stage.items.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-800">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold leading-snug text-ink">{item.title}</h4>
                    <p className="mt-1 leading-relaxed text-ink-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
