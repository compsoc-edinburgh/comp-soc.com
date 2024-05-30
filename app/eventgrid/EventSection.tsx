import { Event, CalendarEvent } from '../constants'
import { FC } from 'react'
import { MdArrowForward } from 'react-icons/md';
import EventGrid from './EventGrid';


interface EventListProps {
    events: Event[]
  }

const EventSection = () => {
    function transformEvents(events: CalendarEvent[]): Event[] {
        const formatDate = (dateStr: string): string => {
            const dateObj = new Date(dateStr);
            const day = String(dateObj.getDate()).padStart(2, '0');
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');
            const year = dateObj.getFullYear();
            return `${day}.${month}.${year}`;
        };
    
        return events.map(event => ({
            title: event.summary,
            description: event.description,
            eventURL: event.htmlLink,
            location: event.location,
            date: formatDate(event.start.dateTime),
        }));
    }
    // const transformedEvents: Event[] = transformEvents(events2);
// console.log(transformedEvents);

    const events = [
        {

          title: 'Infball 2024',
          description: 'Yearly ball in mid-March for all informatics students and lorem ipsum. Soemthing else',
          location: 'The Caves',
          date: '18.04.2024'
        },
        {
 
          title: 'Hack the Burgh X',
          description: 'Come join',
          location: 'Nucleus Building',
          date: '02.03.2024'
        },
        {
       
          title: 'Student-Tech Meetup',
          description: 'Come join',
          location: 'Informatics Forum',
          date: '21.11.2024'
        },
        {
 
          title: 'Freshers Week 2024',
          description: 'Come join',
          location: 'Main Campus',
          date: '12-17.09.2024'
        }
      ];

  return (
    <>
    <div className="flex items-center justify-between mt-8 w-full">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-red-500 mr-4"></div>
                        <h1 className="font-tomorrow text-3xl text-left">Flagship Events</h1>
                    </div>
                    <div className="flex items-center text-blue-500 cursor-pointer">
                        <span className="flex items-center text-white hover:text-csred hover:border-csred transition duration-200 ease-in-out text-xl font-space-mono mt-2 border-b-2">
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



