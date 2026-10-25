/** Shared types for the content files. Edit wording in the other files in this folder. */

export type IconName =
  | 'pin'
  | 'users'
  | 'target'
  | 'bookmark'
  | 'shield'
  | 'sun'
  | 'book'
  | 'check'
  | 'signal'
  | 'signalOff'
  | 'mail'
  | 'next'
  | 'external'
  | 'menu'
  | 'close'

/** The phone mockup screens. Each one is drawn in src/components/phone/screens.tsx. */
export type ScreenName = 'board' | 'queue' | 'turn' | 'viewing' | 'trip'

export interface Source {
  label: string
  url: string
}

export interface Fact {
  value: string
  label: string
  sources: Source[]
}

export interface Feature {
  icon: IconName
  title: string
  text: string
}

/** A short heading and one or two sentences. Used for steps and benefit lists. */
export interface Point {
  title: string
  text: string
}

export interface SectionHeading {
  id: string
  eyebrow: string
  title: string
  intro?: string
}

export interface NavLink {
  id: string
  label: string
}
