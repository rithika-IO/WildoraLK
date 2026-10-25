import { SURVEY_DRIVER_URL, SURVEY_VISITOR_URL } from './site'
import type { SectionHeading } from './types'

export const GET_INVOLVED_HEADING: SectionHeading = {
  id: 'get-involved',
  eyebrow: 'Get involved',
  title: 'Help us shape WildoraLK',
  intro: 'We want to hear from people who know Yala first-hand.',
}

export interface InvolvedCard {
  title: string
  text: string
  buttonLabel: string
  url: string
  /** Subject line for the email that opens while `url` is still empty. */
  emailSubject: string
}

export const INVOLVED_CARDS: InvolvedCard[] = [
  {
    title: 'Been on a Yala safari?',
    text: 'Tell us what the leopard sightings were like for you.',
    buttonLabel: 'Take the visitor survey',
    url: SURVEY_VISITOR_URL,
    emailSubject: 'Visitor survey',
  },
  {
    title: 'Drive a safari jeep in Yala?',
    text: 'Tell us how sightings work for you today.',
    buttonLabel: 'Take the driver survey',
    url: SURVEY_DRIVER_URL,
    emailSubject: 'Driver survey',
  },
]

export const EMAIL_LEAD = 'For anything else, email'
