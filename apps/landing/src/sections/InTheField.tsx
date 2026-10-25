import { PhoneFrame } from '../components/phone/PhoneFrame'
import { PhoneScreen } from '../components/phone/screens'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { GALLERY_ITEMS, IN_THE_FIELD_HEADING } from '../content/inTheField'
import { SCREEN_LABELS } from '../content/phoneScreens'

export function InTheField() {
  return (
    <Section heading={IN_THE_FIELD_HEADING} tone="light">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pt-2 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0">
        {GALLERY_ITEMS.map((item, index) => (
          <Reveal
            key={item.title}
            index={index}
            className="flex w-[16rem] flex-none snap-center flex-col items-center lg:w-auto"
          >
            <div className="flex flex-col items-center">
              <PhoneFrame label={SCREEN_LABELS[item.screen]} size="sm">
                <PhoneScreen name={item.screen} />
              </PhoneFrame>
              <div className="mt-5 text-center">
                <h3 className="font-display text-lg font-semibold text-forest-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {item.caption}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
