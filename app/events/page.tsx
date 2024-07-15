'use client'

import EventsCalendar from '@/components/EventsCalendar'
import Heading from '@/components/heading'
import EventCard from './EventCard'

export default function Events() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <div className="pt-4">
        <Heading title="Flagship Events"></Heading>
        <div className="mt-6 pb-6 font-space-mono">
          These are big events we run every year without fail. Consider joining
          us for one of these!
        </div>
        <EventCard></EventCard>

        <Heading title="Full event calendar"></Heading>
        <div className="mt-6 font-space-mono">
          Aside from the large events, CompSoc and its SIGs run a variety of
          events each week. Explore our full event calendar below and find out
          what&apos;s coming up!
        </div>
        <EventsCalendar></EventsCalendar>
      </div>
    </div>
  )
}
