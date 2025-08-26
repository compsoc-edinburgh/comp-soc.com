import { MdArrowForward } from 'react-icons/md'
import EventGrid from './EventGrid'
import Heading from '@/components/heading'
import Link from 'next/link'
import { prefix } from '@/utils/prefix'
import { useEvents } from '@/lib/event'

const EventSection = () => {
  const { events, loading, error } = useEvents()

  if (loading) {
    return <div>Loading events...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div id="events">
      <div className="flex flex-col lg:flex-row justify-between mt-8 w-full">
        <Heading title="Explore our events" />
        <div className="flex items-center cursor-pointer mt-4 lg:mt-0 lg:ml-auto">
          <Link href={`${prefix}${'/events'}`}>
            <span className="flex items-center gap-2 text-white hover:text-csred hover:border-csred transition duration-150 ease-in-out text-xl font-space-mono">
              ALL EVENTS <MdArrowForward />
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-6 justify-center items-center w-full">
        <EventGrid events={events} />
      </div>
    </div>
  )
}

export default EventSection
