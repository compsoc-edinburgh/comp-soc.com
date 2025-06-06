'use client'

import EventsCalendar from '@/components/EventsCalendar'
import Heading from '@/components/heading'
import EventCard from './EventCard'

export default function Events() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="pt-4">
        <Heading title="Full event calendar" />
        <div className="mt-6 font-space-mono">
          Aside from the large events, CompSoc and its SIGs run a variety of
          events each week. Explore our full event calendar below and find out
          what&apos;s coming up!
        </div>
        <EventsCalendar />

        <div className="mt-10">
          <Heading title="Flagship Events" />
          <div className="mt-6 pb-6 font-space-mono">
            These are big events we run every year without fail. Consider
            joining us for one of these!
          </div>
          <EventCard />
        </div>
      </div>
    </div>
  )
}
