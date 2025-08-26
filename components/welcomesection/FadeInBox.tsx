import React, { useRef, useEffect, useState } from 'react'
import useScrollTriggeredCountUp from './useScrollTriggeredCountUp'

interface FadeInBoxProps {
  delay: number
  content: { number: string; text: string; affix?: string }
}

const FadeInBox: React.FC<FadeInBoxProps> = ({ delay, content }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const parseNumber = (numStr: string) => {
    if (numStr.includes('K')) {
      return parseFloat(numStr.replace('K', '')) * 1000
    }
    return parseInt(numStr)
  }

  const targetNumber = parseNumber(content.number)
  const count = useScrollTriggeredCountUp(ref, targetNumber)

  const formatCount = (num: number) => {
    if (content.number.includes('K')) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
      <div
        ref={ref}
        className={`bg-foreground/10 border-4 border-cslightgrey px-6 py-8 md:px-8 md:py-10 w-full text-center font-space-mono hover:border-csred hover:bg-csgrey/20 transition-all duration-300 hover:scale-105 opacity-0 ${
          isVisible ? 'fade-in-up' : ''
        }`}
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="text-3xl md:text-4xl lg:text-5xl text-textPrimary font-bold">
          {formatCount(count)}
          <span className="text-csred">{content.affix || ''}</span>
        </div>
        <div className="text-sm md:text-base text-textSecondary uppercase tracking-wider mt-2">
          {content.text}
        </div>
      </div>
    </>
  )
}

export default FadeInBox
