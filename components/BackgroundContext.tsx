'use client'
import React, { createContext, useContext, useState } from 'react'

type BackgroundContextType = {
  backgroundColor: string
  setBackgroundColor: (color: string) => void
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(
  undefined
)

export const BackgroundProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [backgroundColor, setBackgroundColor] = useState('bg-background')

  return (
    <BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </BackgroundContext.Provider>
  )
}

export const useBackground = (): BackgroundContextType => {
  const context = useContext(BackgroundContext)
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider')
  }
  return context
}
