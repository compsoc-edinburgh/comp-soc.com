import { CalendarEvent, Event } from '@/app/types'
import { MdArrowForward } from 'react-icons/md'
import EventGrid from './EventGrid'
import { useEvents } from '@/constants/events'
import Heading from '@/components/heading'
import Link from 'next/link'
import { prefix } from '@/utils/prefix'

const EventSection = () => {
  const { events, loading, error } = useEvents()

  if (loading) {
    return <div>Loading events...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <div
        id="events"
        className="flex flex-col lg:flex-row justify-between mt-8 w-full"
      >
        <Heading title="Explore our events" />
        <div className="flex items-center text-blue-500 cursor-pointer mt-4 lg:mt-0 lg:ml-auto">
          <Link href={`${prefix}${'/events'}`}>
            <span className="flex items-center text-white hover:text-csred hover:border-csred transition duration-200 ease-in-out text-xl font-space-mono border-b-2">
              ALL EVENTS <MdArrowForward />
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-6 justify-center items-center w-full pl-4 pr-4">
        <EventGrid events={events} />
      </div>
    </>
  )
}

export default EventSection
