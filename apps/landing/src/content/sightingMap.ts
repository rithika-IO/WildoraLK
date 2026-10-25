/**
 * Data for the SightingMap illustration (chapters 01 and 02).
 * This is a made-up drawing in SVG units, not a real map: no real coordinates anywhere.
 * The viewBox is MAP_SIZE wide and high; every point below is in those units.
 */

export interface MapPoint {
  x: number
  y: number
}

export interface MapJeep {
  id: string
  /** Where the jeep drives in from (off the edge) in jam mode. */
  from: MapPoint
  /** Crowded around the leopard. Also the starting point in fair mode. */
  jam: MapPoint
  /** Inside the viewing circle, or in line at the holding point. */
  fair: MapPoint
  /** Turn time label, shown in fair mode for jeeps waiting at the holding point. */
  turn?: string
}

export const MAP_SIZE = { width: 400, height: 330 }

/** Where the roads meet and the leopard rests. */
export const JUNCTION: MapPoint = { x: 280, y: 150 }

/** Radius of the dashed viewing circle in fair mode. */
export const VIEWING_RADIUS = 62

/**
 * Road centre lines as SVG path data, all ending at JUNCTION.
 * The first road has a straight stretch on the left: the holding point line.
 */
export const ROADS: string[] = [
  'M40 350 L40 100 C40 60 90 52 150 70 C210 88 250 120 280 150',
  'M250 -10 C255 50 265 100 280 150',
  'M410 110 C360 120 320 135 280 150',
  'M370 340 C340 270 300 210 280 150',
]

/** Stop line across the holding road, and where its label sits. */
export const HOLDING_POINT = {
  line: { x1: 30, y1: 88, x2: 50, y2: 88 },
  label: { x: 56, y: 90 },
}

/** Off-screen road ends that jeeps drive in from in jam mode. */
const FROM_WEST: MapPoint = { x: 40, y: 360 }
const FROM_NORTH: MapPoint = { x: 250, y: -20 }
const FROM_EAST: MapPoint = { x: 420, y: 108 }
const FROM_SOUTH: MapPoint = { x: 375, y: 350 }

/**
 * Sixteen jeeps. In fair mode the first five view inside the circle, evenly spaced;
 * the other eleven wait in a line at the holding point, 22 units apart.
 */
export const JEEPS: MapJeep[] = [
  { id: 'j1', from: FROM_WEST, jam: { x: 297, y: 150 }, fair: { x: 280, y: 112 } },
  { id: 'j2', from: FROM_NORTH, jam: { x: 289, y: 165 }, fair: { x: 316, y: 138 } },
  { id: 'j3', from: FROM_EAST, jam: { x: 271, y: 164 }, fair: { x: 302, y: 181 } },
  { id: 'j4', from: FROM_SOUTH, jam: { x: 263, y: 151 }, fair: { x: 258, y: 181 } },
  { id: 'j5', from: FROM_WEST, jam: { x: 272, y: 135 }, fair: { x: 244, y: 138 } },
  { id: 'j6', from: FROM_NORTH, jam: { x: 289, y: 136 }, fair: { x: 40, y: 100 }, turn: '10:42' },
  { id: 'j7', from: FROM_EAST, jam: { x: 308, y: 158 }, fair: { x: 40, y: 122 }, turn: '10:47' },
  { id: 'j8', from: FROM_SOUTH, jam: { x: 297, y: 174 }, fair: { x: 40, y: 144 }, turn: '10:52' },
  { id: 'j9', from: FROM_WEST, jam: { x: 281, y: 180 }, fair: { x: 40, y: 166 }, turn: '10:57' },
  { id: 'j10', from: FROM_NORTH, jam: { x: 263, y: 174 }, fair: { x: 40, y: 188 }, turn: '11:02' },
  { id: 'j11', from: FROM_EAST, jam: { x: 252, y: 160 }, fair: { x: 40, y: 210 }, turn: '11:07' },
  { id: 'j12', from: FROM_SOUTH, jam: { x: 251, y: 141 }, fair: { x: 40, y: 232 }, turn: '11:12' },
  { id: 'j13', from: FROM_WEST, jam: { x: 262, y: 126 }, fair: { x: 40, y: 254 }, turn: '11:17' },
  { id: 'j14', from: FROM_NORTH, jam: { x: 279, y: 120 }, fair: { x: 40, y: 276 }, turn: '11:22' },
  { id: 'j15', from: FROM_EAST, jam: { x: 297, y: 126 }, fair: { x: 40, y: 298 }, turn: '11:27' },
  { id: 'j16', from: FROM_SOUTH, jam: { x: 309, y: 141 }, fair: { x: 40, y: 320 }, turn: '11:32' },
]

/** Radius of one jeep dot. */
export const JEEP_RADIUS = 7.5

export const MAP_COPY = {
  caption: 'Illustration',
  leopard: 'Leopard',
  holdingPoint: 'Holding point',
  /** Read by screen readers instead of the drawing. */
  description: {
    jam: 'Sixteen jeeps drive in from every road and crowd around one leopard at a junction. They block the roads and each other.',
    fair: 'A dashed circle marks the viewing area around the leopard. Five jeeps view inside it. Eleven more wait in line at a holding point, each with a turn time from 10:42 to 11:32.',
  },
}
