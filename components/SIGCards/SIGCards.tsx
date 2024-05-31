import { useState, useEffect } from 'react'
import SIGSpreadView from './SIGSpreadView'
import SIGSwipeView from './SIGSwipeView'

const SIGCards = () => {
  const [smallScreen, setSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 500) // Just by eyeballing it
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (smallScreen) return <SIGSwipeView />
  return <SIGSpreadView />
}

export default SIGCards
