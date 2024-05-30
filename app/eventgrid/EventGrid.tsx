import { Event } from '../constants'
import { FC } from 'react'
import EventTileBig from './EventTileBig'
import EventTileSmall from './EventTileSmall'
import { MdArrowForward } from 'react-icons/md';


interface EventListProps {
    events: Event[]
  }

const EventGrid: FC<EventListProps> = ({ events }) => {

  return (
    <div className="grid grid-cols-10 grid-rows-6 gap-0">
         <div className="col-span-3 row-span-2 col-start-8 row-start-1">
        <EventTileSmall {...events[0]} />
      </div>
      <div className="col-span-3 row-span-2 col-start-8 row-start-3">
        <EventTileSmall {...events[1]} />
      </div>
      <div className="col-span-3 row-span-2 col-start-8 row-start-5">
        <EventTileSmall {...events[2]} />
      </div>
      <div className="col-span-7 row-span-2 col-start-1 row-start-1">
        <EventTileBig {...events[3]} />
      </div>
    <div className="col-span-7 row-span-4 col-start-1 row-start-3">
    <img className="w-full h-full object-cover border-white border-2" src="https://static.wixstatic.com/media/d0821a_2fdf8dfee7c941efae3ad114fc5a3a83~mv2.jpg/v1/fill/w_3000,h_1875,fp_0.50_0.50,q_90/d0821a_2fdf8dfee7c941efae3ad114fc5a3a83~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS9kMDgyMWFfMmZkZjhkZmVlN2M5NDFlZmFlM2FkMTE0ZmM1YTNhODN-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE3MTk3OTIwMDAiLCJleHAiOjE3MTk3OTIwMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.h1HAgH_AatX3SYh_LvUbnAYjkunvUKizvoY0cyyjH-w"></img>

    </div>
</div>

  );
}

export default EventGrid



