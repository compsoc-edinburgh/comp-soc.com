'use client'
import { BackgroundProvider, useBackground } from './BackgroundContext'

const ColorSetter = ({ children }: { children: React.ReactNode }) => {
  const { backgroundColor } = useBackground()
  return (
    <div
      className={`relative overflow-x-clip w-screen mx-auto ${backgroundColor} transition-colors duration-1000`}
    >
      {children}
    </div>
  )
}

const VariableBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <BackgroundProvider>
      <ColorSetter>{children}</ColorSetter>
    </BackgroundProvider>
  )
}

export default VariableBackground
