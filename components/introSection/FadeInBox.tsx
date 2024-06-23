import React, { useRef, useEffect, useState } from 'react'
import useScrollTriggeredCountUp from './useScrollTriggeredCountUp'

interface FadeInBoxProps {
  delay: number
  content: { number: string; text: string; affix?: string }
}

const FadeInBox: React.FC<FadeInBoxProps> = ({ delay, content }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useScrollTriggeredCountUp(ref, parseInt(content.number))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
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
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <>
      <style>
        {`
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
            animation: fadeInUp 0.5s ease-out forwards;
          }
        `}
      </style>
      <div
        ref={ref}
        className={`w-full h-52 border-2 border-white opacity-0 flex items-center justify-center ${
          isVisible ? `fade-in-up` : ''
        }`}
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="text-center font-space-mono">
          <div>
            <div ref={ref} className="text-4xl">
              {count}
              {content.affix && <span>{content.affix}</span>}
            </div>
            <div className="text-sm">{content.text}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FadeInBox
