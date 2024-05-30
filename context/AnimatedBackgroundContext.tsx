'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface AnimatedBackgroundContextProps {
  isActive: boolean
  toggleBackground: () => void
}

const AnimatedBackgroundContext = createContext<
  AnimatedBackgroundContextProps | undefined
>(undefined)

export const useAnimatedBackground = (): AnimatedBackgroundContextProps => {
  const context = useContext(AnimatedBackgroundContext)
  if (!context) {
    throw new Error(
      'useAnimatedBackground must be used within an AnimatedBackgroundProvider'
    )
  }
  return context
}

interface AnimatedBackgroundProviderProps {
  children: ReactNode
}

export const AnimatedBackgroundProvider = ({
  children,
}: AnimatedBackgroundProviderProps) => {
  const [isActive, setIsActive] = useState(false)

  const toggleBackground = () => {
    setIsActive(!isActive)
  }

  return (
    <AnimatedBackgroundContext.Provider value={{ isActive, toggleBackground }}>
      {children}
    </AnimatedBackgroundContext.Provider>
  )
}
