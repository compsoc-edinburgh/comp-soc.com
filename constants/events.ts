import { Event, CalendarEvent } from "@/app/types";

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


export const events = [
    {

      title: 'Infball 2024',
      description: 'Yearly ball in mid-March for all informatics students and lorem ipsum. Soemthing else',
      location: 'The Caves',
      date: '18.04.2024'
    },
    {

      title: 'Hack the Burgh X',
      description: 'Join us for our annual 24-hour hackathon, complete with food, sponsor merch, and many prizes up for grabs.',
      location: 'Nucleus Building',
      date: '02.03.2024'
    },
    {
   
      title: 'Student-Tech Meetup',
      description: 'Engage with insightful talks from academics and industry experts, and enjoy free pizza!',
      location: 'Informatics Forum',
      date: '21.11.2024'
    },
    {

      title: 'Freshers Week 2024',
      description: "Join us for Freshers Week 2024, packed with exciting events, including a hike up Arthur's Seat!",
      location: 'Main Campus',
      date: '12-17.09.2024'
    }
  ];