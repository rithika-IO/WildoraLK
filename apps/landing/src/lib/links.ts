import { CONTACT_EMAIL } from '../content/site'

/** The survey link, or a pre-filled email to the team while the survey URL is still empty. */
export function surveyHref(url: string, emailSubject: string): string {
  return url || `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}`
}
