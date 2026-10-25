import type { CSSProperties } from 'react'
import {
  HOLDING_POINT,
  JEEP_RADIUS,
  JEEPS,
  JUNCTION,
  MAP_COPY,
  MAP_SIZE,
  ROADS,
  VIEWING_RADIUS,
} from '../content/sightingMap'
import type { MapPoint } from '../content/sightingMap'
import { useInView } from '../hooks/useInView'
import { MOTION_OK } from '../lib/motion'

export type MapMode = 'jam' | 'fair'

interface SightingMapProps {
  mode: MapMode
}

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

/** Per-mode colours. Jam is warm amber (tension); fair is calm green. */
const THEME: Record<MapMode, { ground: string; bush: string; jeep: string }> = {
  jam: { ground: 'bg-sand-200', bush: 'fill-sand-300', jeep: 'fill-accent-500' },
  fair: { ground: 'bg-forest-100', bush: 'fill-forest-200', jeep: 'fill-forest-600' },
}

/** CSS transform for an SVG group. In SVG, px in a CSS transform means viewBox units. */
function at(point: MapPoint): string {
  return `translate(${point.x}px, ${point.y}px)`
}

/**
 * Stylised sighting scene, drawn in SVG from the data in content/sightingMap.ts.
 *
 * Every jeep has a start and an end point that depend on `mode`:
 * - jam:  start = off the edge of a road (`from`), end = crowded round the leopard (`jam`)
 * - fair: start = the jam position, end = in the viewing circle or the holding line (`fair`)
 * The first time the map scrolls into view, each jeep's CSS transform switches from start
 * to end, and a CSS transition (staggered per jeep) moves it. Under reduced motion, or
 * without IntersectionObserver, the end positions are drawn straight away.
 */
export function SightingMap({ mode }: SightingMapProps) {
  const { ref, inView } = useInView<HTMLElement>({ rootMargin: '0px 0px -20% 0px' })
  const settled = !MOTION_OK || inView
  const jam = mode === 'jam'
  const theme = THEME[mode]
  /** Fair mode: the labels appear once the jeeps have reached the holding line. */
  const labelDelay = 1100

  const fade = (delay: number): CSSProperties => ({
    opacity: settled ? 1 : 0,
    transition: `opacity 0.6s ease ${delay}ms`,
  })

  return (
    <figure ref={ref} className="w-full">
      <div className={`overflow-hidden rounded-3xl shadow-card ${theme.ground}`}>
        <svg
          viewBox={`0 0 ${MAP_SIZE.width} ${MAP_SIZE.height}`}
          className="block h-auto w-full"
          aria-hidden="true"
          focusable="false"
        >
          {/* Bush patches, for texture only */}
          <ellipse cx="140" cy="210" rx="58" ry="34" className={theme.bush} />
          <ellipse cx="345" cy="265" rx="40" ry="26" className={theme.bush} />
          <ellipse cx="120" cy="20" rx="70" ry="30" className={theme.bush} />
          <ellipse cx="370" cy="30" rx="34" ry="22" className={theme.bush} />

          {/* Roads: a wide cream band with a thin dashed centre line */}
          {ROADS.map((d) => (
            <path key={d} d={d} fill="none" strokeWidth="18" strokeLinecap="round" className="stroke-cream" />
          ))}
          {ROADS.map((d) => (
            <path
              key={`${d}-centre`}
              d={d}
              fill="none"
              strokeWidth="1.5"
              strokeDasharray="5 7"
              className="stroke-sand-300"
            />
          ))}

          {jam ? null : (
            <g style={fade(200)}>
              {/* Viewing area */}
              <circle
                cx={JUNCTION.x}
                cy={JUNCTION.y}
                r={VIEWING_RADIUS}
                strokeWidth="2"
                strokeDasharray="6 6"
                className="fill-forest-500/10 stroke-forest-600"
              />
              {/* Holding point: a stop line across the road and its label */}
              <line {...HOLDING_POINT.line} strokeWidth="3" strokeLinecap="round" className="stroke-forest-800" />
              <text
                x={HOLDING_POINT.label.x}
                y={HOLDING_POINT.label.y}
                className="fill-forest-900 font-sans text-[12px] font-bold"
              >
                {MAP_COPY.holdingPoint}
              </text>
            </g>
          )}

          {/* Turn time labels next to each waiting jeep (fair mode) */}
          {jam
            ? null
            : JEEPS.filter((jeep) => jeep.turn).map((jeep, index) => (
                <text
                  key={`${jeep.id}-turn`}
                  x={jeep.fair.x + 15}
                  y={jeep.fair.y + 4}
                  style={fade(labelDelay + index * 60)}
                  className="fill-forest-800 font-sans text-[11px] font-semibold tabular-nums"
                >
                  {jeep.turn}
                </text>
              ))}

          {/* Jeeps */}
          {JEEPS.map((jeep, index) => {
            const start = jam ? jeep.from : jeep.jam
            const end = jam ? jeep.jam : jeep.fair
            const delay = (jam ? 0 : 250) + index * (jam ? 70 : 55)
            return (
              <g
                key={jeep.id}
                style={{
                  transform: at(settled ? end : start),
                  opacity: jam && !settled ? 0 : 1,
                  transition: `transform 1.3s ${EASE} ${delay}ms, opacity 0.4s ease ${delay}ms`,
                }}
              >
                <circle r={JEEP_RADIUS} strokeWidth="2" className={`${theme.jeep} stroke-cream`} />
              </g>
            )
          })}

          {/* Leopard at the junction, drawn last so it stays on top */}
          <g transform={`translate(${JUNCTION.x} ${JUNCTION.y})`}>
            {jam ? (
              <circle r="12" data-on={settled ? '' : undefined} className="map-pulse fill-accent-400" />
            ) : null}
            <circle r="12" strokeWidth="2" className="fill-forest-950 stroke-cream" />
            {/* Paw print */}
            <ellipse cx="0" cy="3" rx="4.2" ry="3.4" className="fill-accent-400" />
            <circle cx="-5" cy="-2" r="1.8" className="fill-accent-400" />
            <circle cx="-1.9" cy="-5.6" r="1.8" className="fill-accent-400" />
            <circle cx="1.9" cy="-5.6" r="1.8" className="fill-accent-400" />
            <circle cx="5" cy="-2" r="1.8" className="fill-accent-400" />
          </g>
          <g transform={`translate(${JUNCTION.x} ${JUNCTION.y - 80})`}>
            <rect x="-28" y="-11" width="56" height="20" rx="10" className="fill-forest-950" />
            <text y="3.5" textAnchor="middle" className="fill-cream font-sans text-[11px] font-semibold">
              {MAP_COPY.leopard}
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-xs font-semibold uppercase tracking-widest text-ink-muted">
        {MAP_COPY.caption}
        <span className="sr-only">. {MAP_COPY.description[mode]}</span>
      </figcaption>
    </figure>
  )
}
