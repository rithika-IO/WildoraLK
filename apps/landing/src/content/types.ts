/** Shared types for the content files. Edit wording in the other files in this folder. */

export type IconName =
  | 'pin'
  | 'users'
  | 'queue'
  | 'clock'
  | 'target'
  | 'timer'
  | 'next'
  | 'download'
  | 'bookmark'
  | 'phone'
  | 'upload'
  | 'calendar'
  | 'shield'
  | 'qr'
  | 'chat'
  | 'checklist'
  | 'book'
  | 'flag'
  | 'eye'
  | 'jeep'
  | 'sun'
  | 'mail'
  | 'check'
  | 'external'
  | 'menu'
  | 'close'

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
