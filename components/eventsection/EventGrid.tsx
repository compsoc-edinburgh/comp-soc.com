import { FC } from 'react'
import { Event } from '@/lib/event'
import EventTileBig from './EventTileBig'
import EventTileSmall from './EventTileSmall'
import ImageCarousel from './ImageCarousel'

interface EventListProps {
  events: Event[]
}

const EventGrid: FC<EventListProps> = ({ events }) => {
  return (
    <div>
      {/* Desktop view */}
      <div className="hidden lg:grid lg:grid-cols-10 lg:grid-rows-6 lg:gap-0 lg:border-b-4 lg:border-neutral-600">
        <div className="col-span-3 row-span-2 col-start-8 row-start-1">
          <EventTileSmall {...events[1]} />
        </div>
        <div className="col-span-3 row-span-2 col-start-8 row-start-3">
          <EventTileSmall {...events[2]} />
        </div>
        <div className="col-span-3 row-span-2 col-start-8 row-start-5">
          <EventTileSmall {...events[3]} />
        </div>
        <div className="col-span-7 row-span-2 col-start-1 row-start-1">
          <EventTileBig {...events[0]} />
        </div>
        <div className="col-span-7 row-span-4 col-start-1 row-start-3">
          <ImageCarousel />
          {/* <Image
          width={100}
          height={100}
          src={`${prefix}/infball.webp`}
          alt="Wide CompSoc logo"
          className="w-full h-full border-white border-2 border-b-0"
       
        /> */}
        </div>
      </div>

      {/* Mobile view */}
      <div
        style={{ width: '100%' }}
        className="lg:hidden flex-col space-y-4 mt-0 border-neutral-600 border-b-4"
      >
        <EventTileBig {...events[0]} />
        {/* <Image
          width={100}
          height={100}
          src={`${prefix}/infball.webp`}
          alt="Wide CompSoc logo"
          className="w-full h-full border-white border-2 border-b-0"
          style={{ marginTop: '0px' }}
        /> */}

        <div style={{ marginTop: '0px' }}>
          <ImageCarousel />
        </div>
        <EventTileBig {...events[1]} />
        <EventTileBig {...events[2]} />
        <EventTileBig {...events[3]} />
      </div>
    </div>
  )
}

export default EventGrid
