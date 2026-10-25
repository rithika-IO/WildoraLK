import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { MOTION_OK } from '../lib/motion'

const NUMBER = /\d[\d,]*/g
const YEAR = /^(19|20)\d{2}$/
const DURATION_MS = 1400

/** Replaces every number in the text with the same number scaled by progress (0 to 1), keeping commas. */
function scaleNumbers(text: string, progress: number) {
  return text.replace(NUMBER, (match) => {
    const current = Math.round(Number(match.replace(/,/g, '')) * progress)
    return match.includes(',') ? current.toLocaleString('en-GB') : String(current)
  })
}

interface CountUpProps {
  value: string
  className?: string
}

/**
 * Counts the numbers in a fact up from zero, once, when it scrolls into view.
 * Words stay as written and a year (such as 2015) does not count.
 * The final text sets the size, so nothing shifts, and screen readers only get the final text.
 */
export function CountUp({ value, className = '' }: CountUpProps) {
  const animate = MOTION_OK && !YEAR.test(value)
  const { ref, inView } = useInView<HTMLSpanElement>()
  const [progress, setProgress] = useState(animate ? 0 : 1)

  useEffect(() => {
    if (!animate || !inView) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION_MS, 1)
      setProgress(1 - (1 - t) ** 3)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [animate, inView])

  return (
    <span ref={ref} className={`relative block ${className}`}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="invisible">
        {value}
      </span>
      <span aria-hidden="true" className="absolute inset-0">
        {progress === 1 ? value : scaleNumbers(value, progress)}
      </span>
    </span>
  )
}
