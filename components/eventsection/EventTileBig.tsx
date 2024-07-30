import { Event } from '@/app/types'
import { useState, useEffect, useRef } from 'react'

const EventTileBig = ({
  title,
  description,
  eventURL,
  location,
  date,
  upcoming,
}: Event) => {
  const nonDescriptionRef = useRef<HTMLDivElement>(null)
  const [nonDescriptionHeight, setNonDescriptionHeight] = useState(0)

  const [isClicked, setIsClicked] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateNonDescriptionHeight = () => {
      if (nonDescriptionRef.current) {
        setNonDescriptionHeight(nonDescriptionRef.current.offsetHeight)
      }
    }

    // Initial update
    updateNonDescriptionHeight()

    // Add event listener for window resize
    window.addEventListener('resize', updateNonDescriptionHeight)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateNonDescriptionHeight)
    }
  }, [showDescription])

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 1023px)').matches)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  const handleClick = () => {
    if (isMobile) {
      setIsClicked(!isClicked)
      console.log(nonDescriptionHeight)
      setShowDescription(!showDescription)
    }
  }

  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowDescription(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowDescription(false)
    }
  }

  return (
    <div
      className={`${
        isClicked ? 'bg-csred' : 'bg-csgrey'
      }  font-space-mono transition duration-500 ease-in-out border-4 border-neutral-600 border-b-0 pt-6 pl-8 pr-8 w-full h-full flex flex-col lg:hover:bg-csred`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ marginTop: '0px' }}
    >
      {showDescription ? (
        <p
          className="text-white flex pl-2 pr-2"
          style={{ height: `${nonDescriptionHeight}px` }}
        >
          {description}
        </p>
      ) : (
        <>
          <div ref={nonDescriptionRef}>
            <h1 className="text-csred mb-2">
              {upcoming ? 'Upcoming event' : 'Past event'}
            </h1>

            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col justify-between h-full">
                <h1
                  style={{
                    maxHeight: '80px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                  className="text-2xl w-3/4"
                >
                  {title.toUpperCase()}{' '}
                </h1>

                <p className="mb-2 pt-4">
                  {date}, {location}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default EventTileBig
