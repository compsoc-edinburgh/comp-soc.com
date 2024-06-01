import { CalendarEvent, Event } from '@/app/types';
import { MdArrowForward } from 'react-icons/md';
import EventGrid from './EventGrid';
import { events } from '@/constants/events'
import Heading from '@/components/heading'

const EventSection = () => {
    
    
  return (
    <>
 <div className="flex flex-col lg:flex-row justify-between mt-8 w-full">
        <Heading title='Flagship events' />
        <div className="flex items-center text-blue-500 cursor-pointer mt-4 lg:mt-0 lg:ml-auto">
          <span className="flex items-center text-white hover:text-csred hover:border-csred transition duration-200 ease-in-out text-xl font-space-mono border-b-2">
            ALL EVENTS <MdArrowForward />
          </span>
        </div>
      </div>
        <div className='mt-6 flex justify-center items-center'>
            <EventGrid events={events} />
        </div>
    </>
    
   

  );
}

export default EventSection



