"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  text: string
  speed?: number
  className?: string
}

export function TypewriterEffect({ text, speed = 40, className }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let i = 0
    setDisplayedText("") // Reseta o texto ao mudar o prop `text`
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(intervalId)
      }
    }, speed)

    return () => clearInterval(intervalId)
  }, [text, speed])

  return <p className={className}>{displayedText}</p>
}
