import { useEffect, useRef, ReactNode } from 'react'
import { useBackground } from '@/components/BackgroundContext'

type VariableBackgroundSwitcherProps = {
  children: ReactNode
  activeColor: string
  defaultColor?: string
  threshold?: number
}

const VariableBackgroundSwitcher = ({
  children,
  activeColor,
  defaultColor = 'bg-background',
  threshold = 0.7,
}: VariableBackgroundSwitcherProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { setBackgroundColor } = useBackground()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBackgroundColor(activeColor)
        } else {
          setBackgroundColor(defaultColor)
        }
      },
      {
        root: null, // viewport as root
        threshold, // Adjust as needed
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
  }, [activeColor, defaultColor, setBackgroundColor, threshold])

  return <div ref={ref}>{children}</div>
}

export default VariableBackgroundSwitcher
