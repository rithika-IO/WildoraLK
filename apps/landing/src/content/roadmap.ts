import type { SectionHeading } from './types'

export const ROADMAP_HEADING: SectionHeading = {
  id: 'roadmap',
  eyebrow: 'Project status and roadmap',
  title: 'A student project, still taking shape',
  intro:
    'WildoraLK is a student project for the Agile Team Project module (2026/27) at the Informatics Institute of Technology (IIT), Sri Lanka, affiliated with the University of Westminster. It is not available to use yet.',
}

export interface RoadmapPhase {
  title: string
  when: string
  text: string
  current: boolean
}

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    title: 'Design phase',
    when: 'Now',
    text: 'Researching the problem, planning how the apps should work, and designing them.',
    current: true,
  },
  {
    title: 'Build phase',
    when: 'Through early 2027',
    text: 'Building the first working version as part of the module.',
    current: false,
  },
]

export const ROADMAP_COPY = {
  currentLabel: 'We are here',
  disclaimer:
    'Plans can change as the module goes on. There are no launch dates, and nothing here is a promise.',
}
