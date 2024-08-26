import { Event } from '@/app/types'
import { useState, useEffect, useRef } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Link from 'next/link'
import { prefix } from '@/utils/prefix'

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
  const [isDesktop, setIsDesktop] = useState(false)

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
      setIsMobile(window.matchMedia('(max-width: 640px)').matches)
    }
    const checkIfDesktop = () => {
      setIsDesktop(window.matchMedia('(min-width: 1000px)').matches)
    }

    // Initial check
    checkIfMobile()
    checkIfDesktop()

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  const handleMouseEnter = () => {
    if (isDesktop) {
      setShowDescription(true)
    }
  }

  const handleMouseLeave = () => {
    if (isDesktop) {
      setShowDescription(false)
    }
  }

  const handleTouchStart = () => {
    if (!isMobile) {
      setShowDescription(true)
    }
  }

  const handleTouchEnd = () => {
    if (!isMobile) {
      setShowDescription(false)
    }
  }

  return (
    <Link href={`${prefix}${'/events'}`}>
      <div
        className={`${
          isClicked ? 'bg-csred' : 'bg-csgrey'
        } font-space-mono transition duration-500 ease-in-out border-4 border-neutral-600 border-b-0 pt-6 pl-8 pr-8 w-full h-full flex flex-col md:hover:bg-csred relative`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ marginTop: '0px' }}
      >
        {showDescription ? (
          <>
            <p
              className="text-white flex pl-2 pr-2"
              style={{ height: `${nonDescriptionHeight}px` }}
            >
              {description}
            </p>
            <div className="absolute bottom-0 right-0">
              <IoIosArrowRoundForward className="w-[100px] h-[100px] " />
            </div>
          </>
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

                  <p className="mb-2 pt-4 sm:max-w-[400px] max-w-[225px]">
                    {date}, {isMobile && <br />}
                    {location}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0">
              <IoIosArrowRoundForward className="sm:w-[100px] sm:h-[100px] w-[60px] h-[60px] " />
            </div>
          </>
        )}
      </div>
    </Link>
  )
}

export default EventTileBig
