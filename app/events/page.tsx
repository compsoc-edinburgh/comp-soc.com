'use client'

import EventsCalendar from '@/components/EventsCalendar'
import Heading from '@/components/heading'
import EventCard from './EventCard'

export default function Events() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <div className="pt-4">
        <Heading title="Flagship Events"></Heading>
        <div className="mt-6 pb-6">
          We run these events every year without fail!
        </div>
        <EventCard></EventCard>

        <Heading title="Full event calendar"></Heading>
        <div className="mt-6">
          CompSoc runs several events each week. Explore our full event calendar
          and find out what&apos;s coming up!
        </div>
        <EventsCalendar></EventsCalendar>
      </div>
    </div>
  )
}
