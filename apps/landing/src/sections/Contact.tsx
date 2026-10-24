import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { Section } from '../components/Section'
import { CONTACT_COPY, CONTACT_HEADING } from '../content/contact'
import { CONTACT_EMAIL } from '../content/site'

export function Contact() {
  return (
    <Section heading={CONTACT_HEADING} tone="light">
      <div className="flex flex-col items-start gap-4">
        <Button href={`mailto:${CONTACT_EMAIL}`}>
          <Icon name="mail" className="h-5 w-5" />
          {CONTACT_COPY.buttonLabel}
        </Button>
        <p className="text-lg font-medium text-forest-900">{CONTACT_EMAIL}</p>
      </div>
    </Section>
  )
}
