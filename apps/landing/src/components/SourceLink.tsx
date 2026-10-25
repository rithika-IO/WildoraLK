import { NEW_TAB_LABEL } from '../content/site'
import type { Source } from '../content/types'
import { Icon } from './Icon'

interface SourceLinkProps {
  source: Source
}

/** External source link. Opens in a new tab and says so for screen readers. */
export function SourceLink({ source }: SourceLinkProps) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 py-1 text-sm font-medium text-forest-700 underline decoration-forest-400 underline-offset-4 transition-colors duration-200 hover:text-forest-950"
    >
      {source.label}
      <Icon name="external" className="h-4 w-4 shrink-0" />
      <span className="sr-only"> {NEW_TAB_LABEL}</span>
    </a>
  )
}
