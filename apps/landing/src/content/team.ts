import type { SectionHeading } from './types'

export const TEAM_HEADING: SectionHeading = {
  id: 'team',
  chapter: '08',
  eyebrow: 'The team',
  title: 'Who is building it',
  intro: 'Software Engineering undergraduates at IIT, building WildoraLK for the Agile Team Project.',
}

export interface TeamMember {
  name: string
  role: string
  /** One short line about the person. Left empty, it is not shown. */
  line: string
}

// Names only: no student IDs, emails or photos.
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Rithika Mandiv',
    role: 'Team member', // TODO: project role
    line: '', // TODO: one short line
  },
  {
    name: 'M.A.N.N. Manthrirathna',
    role: 'Team member', // TODO: project role
    line: '', // TODO: one short line
  },
  {
    name: 'Gamaethige Sihas Damsilu',
    role: 'Team member', // TODO: project role
    line: '', // TODO: one short line
  },
  {
    name: 'D.H.J.P.A. Iduranga',
    role: 'Team member', // TODO: project role
    line: '', // TODO: one short line
  },
  {
    name: 'G.A.B. Kariyawasam',
    role: 'Team member', // TODO: project role
    line: '', // TODO: one short line
  },
]
