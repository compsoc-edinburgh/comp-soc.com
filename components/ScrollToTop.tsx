'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'iconoir-react'

interface ScrollToTopProps {
  className?: string
  threshold?: number
  smooth?: boolean
}

export const ScrollToTop = ({
  className = '',
  threshold = 300,
  smooth = true,
}: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [threshold])

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      window.scrollTo(0, 0)
    }
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50
        p-3 rounded-full bg-red-600 hover:bg-red-700 text-white
        transition-all duration-300 ease-in-out
        transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        ${className}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp height={20} width={20} color="white" />
    </button>
  )
}

export const WithScrollToTop = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  )
}
