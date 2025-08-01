"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  target: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function AnimatedCounter({
  target,
  duration = 2000,
  className,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const animationFrameId = useRef<number | null>(null)
  const startTime = useRef<number | null>(null)

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTime.current) {
        startTime.current = timestamp
      }

      const elapsedTime = timestamp - startTime.current
      const progress = Math.min(elapsedTime / duration, 1)
      const easedProgress = easeOutCubic(progress)

      const newCount = Math.floor(easedProgress * target)
      setCount(newCount)

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate)
      }
    }

    if (inView) {
      animationFrameId.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [inView, target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
