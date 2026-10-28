import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { ANONYMOUS_NOTE, EMAIL_LEAD, GET_INVOLVED_HEADING, INVOLVED_CARDS } from '../content/getInvolved'
import { CONTACT_EMAIL } from '../content/site'
import { surveyHref } from '../lib/links'

export function GetInvolved() {
  return (
    <Section heading={GET_INVOLVED_HEADING} tone="sand">
      <div className="grid gap-6 md:grid-cols-2">
        {INVOLVED_CARDS.map((card, index) => (
          <Reveal key={card.title} index={index} className="flex">
            <div className="flex w-full flex-col items-start rounded-3xl bg-cream p-8 shadow-card transition-[translate,box-shadow] duration-300 hover:shadow-lift motion-safe:hover:-translate-y-1 sm:p-10">
              <h3 className="text-2xl font-semibold text-forest-900 sm:text-3xl">{card.title}</h3>
              <p className="mt-3 flex-1 text-lg leading-relaxed text-ink-muted">{card.text}</p>
              <div className="mt-8">
                <Button href={surveyHref(card.url, card.emailSubject)} variant={index === 0 ? 'accent' : 'primary'}>
                  {card.buttonLabel}
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <p className="text-base text-ink-muted">{ANONYMOUS_NOTE}</p>
      </Reveal>

      <Reveal className="mt-8">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-lg text-ink-muted">
          <Icon name="mail" className="h-5 w-5 text-forest-700" />
          {EMAIL_LEAD}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-forest-800 underline decoration-forest-400 underline-offset-4 transition-colors duration-200 hover:text-forest-950"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </Reveal>
    </Section>
  )
}
