"use client"

import { useEffect, useRef } from "react"
import Background from "./Background"

export default function ParallaxBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollPosition = window.scrollY
        backgroundRef.current.style.transform = `translateY(${-scrollPosition * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div ref={backgroundRef} className="fixed inset-0 -z-10 w-screen h-screen">
      <Background />
    </div>
  )
}

