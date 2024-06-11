'use client'

import React, { useEffect, useState, ReactNode } from 'react'
import {
  AnimatedBackgroundProvider,
  useAnimatedBackground,
} from '@/context/AnimatedBackgroundContext'

const PixelGrid = () => {
  const { isActive } = useAnimatedBackground()
  const [numPixels, setNumPixels] = useState({ x: 0, y: 0 })
  const [pixels, setPixels] = useState<number[]>([])
  const [pixelSize, _] = useState<number>(64) // Smaller values are less performant

  const calculatePixels = () => {
    const x = Math.ceil(window.innerWidth / pixelSize)
    const y = Math.ceil(window.innerHeight / pixelSize)
    return { x, y }
  }

  const generatePixels = (x: number, y: number) => {
    return Array(x * y)
      .fill(0)
      .map(() => Math.random())
  }

  useEffect(() => {
    const { x, y } = calculatePixels()
    setNumPixels({ x, y })
    setPixels(generatePixels(x, y))

    const handleResize = () => {
      const { x, y } = calculatePixels()
      setNumPixels({ x, y })
      setPixels(generatePixels(x, y))
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [pixelSize])

  return (
    <div
      className="fixed pointer-events-none z-[100] grid"
      style={{ gridTemplateColumns: `repeat(${numPixels.x}, ${pixelSize}px)` }}
    >
      {pixels.map((delay, index) => (
        <div
          key={index}
          style={{
            width: `${pixelSize}px`,
            height: `${pixelSize}px`,
            transitionDelay: `${delay * 750}ms`,
          }}
          className={`transition-colors ${
            isActive ? 'bg-csred' : 'transparent'
          }`}
        />
      ))}
    </div>
  )
}

const PixelBackground = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatedBackgroundProvider>
      <PixelGrid />
      {children}
    </AnimatedBackgroundProvider>
  )
}

export default PixelBackground
