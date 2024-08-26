import { Event } from '@/app/types'
import { prefix } from '@/utils/prefix'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const EventTileSmall = ({
  title,
  description,
  eventURL,
  location,
  date,
  upcoming,
}: Event) => {
  const [showDescription, setShowDescription] = useState(false)
  const nonDescriptionRef = useRef<HTMLDivElement>(null)
  const [nonDescriptionHeight, setNonDescriptionHeight] = useState(0)

  useEffect(() => {
    if (nonDescriptionRef.current) {
      setNonDescriptionHeight(nonDescriptionRef.current.offsetHeight)
    }
  }, [showDescription])

  const handleMouseEnter = () => {
    setShowDescription(true)
  }

  const handleMouseLeave = () => {
    setShowDescription(false)
  }

  const handleTouchStart = () => {
    setShowDescription(true)
  }

  const handleTouchEnd = () => {
    setShowDescription(false)
  }

  return (
    <Link href={`${prefix}${'/events'}`}>
      <div
        className="bg-csgrey font-space-mono hover:bg-csred border-t-4 border-r-4 border-neutral-600 pt-6 pl-8 pr-8 w-full h-full flex flex-col transition duration-500 ease-in-out relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {showDescription ? (
          <>
            <p
              className="text-white flex pl-2 pr-2"
              style={{ height: `${nonDescriptionHeight}px` }}
            >
              {description}
            </p>
            <div className="absolute bottom-0 right-0 ">
              <IoIosArrowRoundForward className="w-[75px] h-[75px]" />
            </div>
          </>
        ) : (
          <>
            <div ref={nonDescriptionRef}>
              <h1 className="text-csred mb-2">
                {upcoming ? 'Upcoming event' : 'Past event'}
              </h1>

              <div
                className="flex flex-col justify-between"
                style={{ minHeight: '200px' }}
              >
                <div>
                  <h1 className="text-2xl w-3/4">{title.toUpperCase()}</h1>
                </div>
                <div className="mt-auto">
                  <p className="mb-2 pt-4" style={{ maxWidth: '150px' }}>
                    {date} <br /> {location}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 ">
              <IoIosArrowRoundForward className="w-[75px] h-[75px]" />
            </div>
          </>
        )}
      </div>
    </Link>
  )
}

export default EventTileSmall
