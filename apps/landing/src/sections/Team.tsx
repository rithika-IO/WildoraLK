import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { TEAM_HEADING, TEAM_MEMBERS } from '../content/team'

/** Avatar colours, used in turn. */
const AVATAR_COLOURS = [
  'bg-forest-700 text-cream',
  'bg-accent-400 text-forest-950',
  'bg-forest-200 text-forest-900',
  'bg-sand-300 text-forest-950',
  'bg-forest-900 text-accent-300',
]

/** First letter of the first and last word: "G.A.B. Kariyawasam" gives "GK". */
function initials(name: string) {
  const words = name.split(' ')
  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase()
}

export function Team() {
  return (
    <Section heading={TEAM_HEADING} tone="light">
      <ul className="flex flex-wrap justify-center gap-5">
        {TEAM_MEMBERS.map((member, index) => (
          <Reveal
            as="li"
            key={member.name}
            index={index}
            className="flex w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <div className="flex w-full flex-col items-start rounded-3xl bg-white/80 p-8 shadow-card transition-[translate,box-shadow] duration-300 hover:shadow-lift motion-safe:hover:-translate-y-1">
              <span
                aria-hidden="true"
                className={`flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-semibold ${
                  AVATAR_COLOURS[index % AVATAR_COLOURS.length]
                }`}
              >
                {initials(member.name)}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-forest-900">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-accent-700">{member.role}</p>
              {member.line ? <p className="mt-3 leading-relaxed text-ink-muted">{member.line}</p> : null}
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
