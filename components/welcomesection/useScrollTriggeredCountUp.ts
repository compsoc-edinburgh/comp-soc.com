import { useCallback, useEffect, useRef, useState } from 'react'

const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

const useScrollTriggeredCountUp = (
  ref: React.RefObject<HTMLElement>,
  end: number,
  duration: number = 2000
): number => {
  const [count, setCount] = useState(0)
  const isCounting = useRef(false)
  const observer = useRef<Nullable<IntersectionObserver>>(null)
  const frameRate = 1000 / 60
  const totalFrames = Math.round(duration / frameRate)

  const handleScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && !isCounting.current) {
        isCounting.current = true
        let frame = 0

        const counter = setInterval(() => {
          frame++
          const progress = easeOutExpo(frame / totalFrames)
          setCount(Math.round(end * progress))

          if (frame === totalFrames) {
            clearInterval(counter)
            observer.current?.disconnect() // Disconnects the observer after animation
            isCounting.current = false
          }
        }, frameRate)
      } else {
        setCount(0)
      }
    },
    [end, frameRate, totalFrames]
  )

  useEffect(() => {
    observer.current = new IntersectionObserver(handleScroll, {
      threshold: 0.7,
    })
    const currentRef = ref.current

    if (currentRef) {
      observer.current.observe(currentRef)
    }

    return () => {
      observer.current?.disconnect()
    }
  }, [handleScroll, ref])

  return count
}

export default useScrollTriggeredCountUp
