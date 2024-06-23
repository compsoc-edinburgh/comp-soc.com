'use client'

import EventsCalendar from '@/components/EventsCalendar'
import Heading from '@/components/heading'
import EventCard from './EventCard'

export default function Events() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Heading title="Flagship Events"></Heading>
      <div className="mt-6 mb-6">
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
  )
}
