import { Event, CalendarEvent } from "@/app/types";
import { useEffect, useState } from "react";
import { flagships } from "./flagships";


// Fetches calendar events from the Google Calendar API
async function fetchCalendarEvents(): Promise<CalendarEvent[]> {
  const url = 'https://www.googleapis.com/calendar/v3/calendars/c_d9ed90437b85f9f70111ed1576450106ba39ca8e46e94051bf53c9aa2c8a3735@group.calendar.google.com/events';

  const currentDate = new Date();
  const oneYearAgo = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
  const sixMonthsLater = new Date(currentDate.getFullYear(), currentDate.getMonth() + 6, currentDate.getDate());
  const params = new URLSearchParams({
    key: 'AIzaSyAnUQX9d7j3_d5wlJF_PvM02eHOMFbDedw',
    timeMin: oneYearAgo.toISOString(),
    timeMax: sixMonthsLater.toISOString(),
    singleEvents: 'true',
    maxResults: '9999',
  });

  try {
    const response = await fetch(`${url}?${params.toString()}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    const items: CalendarEvent[] = data.items;

    const currentDate = new Date();
    const twoMonthsLater = new Date(currentDate);
    twoMonthsLater.setMonth(currentDate.getMonth() + 2);

    // Helper function to get the date of an event
    const getEventDate = (item: CalendarEvent): Date | null => {
      if (item.start.dateTime) {
        return new Date(item.start.dateTime);
      } else if (item.start.date) {
        return new Date(item.start.date);
      } else {
        return null;
      }
    };

    // Filter upcoming events within the next two months
    let upcomingItems = items.filter(item => {
      const eventDate = getEventDate(item);
      return eventDate !== null && eventDate > currentDate && eventDate <= twoMonthsLater;
    });

    // Filter past events
    let pastItems = items.filter(item => {
      const eventDate = getEventDate(item);
      return eventDate !== null && eventDate <= currentDate;
    });

    // If no upcoming events in 2 months, find the nearest upcoming event
    if (upcomingItems.length === 0) {
      const nearestUpcomingEvent = items.filter(item => {
        const eventDate = getEventDate(item);
        return eventDate !== null && eventDate > currentDate;
      }).sort((a, b) => (getEventDate(a)?.getTime() || 0) - (getEventDate(b)?.getTime() || 0))[0];

      if (nearestUpcomingEvent) {
        upcomingItems = [nearestUpcomingEvent];
      }
    }

    // Ensure STMU does not appear more than once
    const seenSTMU = new Set<string>();
    const filteredUpcomingItems = upcomingItems.filter(item => {
      const isSTMU = item.summary.includes('STMU');
      if (isSTMU) {
        if (seenSTMU.has('STMU')) {
          return false;
        } else {
          seenSTMU.add('STMU');
          return true;
        }
      }
      return true;
    });

    const filteredPastItems = pastItems.filter(item => {
      const isSTMU = item.summary.includes('STMU');
      if (isSTMU) {
        if (seenSTMU.has('STMU')) {
          return false;
        } else {
          seenSTMU.add('STMU');
          return true;
        }
      }
      return true;
    });

    // Sort upcoming and past events by date
    filteredUpcomingItems.sort((a, b) => (getEventDate(a)?.getTime() || 0) - (getEventDate(b)?.getTime() || 0));
    filteredPastItems.sort((a, b) => (getEventDate(b)?.getTime() || 0) - (getEventDate(a)?.getTime() || 0));

    // Return a combination of upcoming and past events
    if (filteredUpcomingItems.length >= 2) {
      return [...filteredUpcomingItems.slice(0, 2), ...filteredPastItems.slice(0, 2)];
    } else if (filteredUpcomingItems.length === 1) {
      return [...filteredUpcomingItems, ...filteredPastItems.slice(0, 3)];
    } else {
      return filteredPastItems.slice(0, 4);
    }
  } catch (error) {
    console.error('Failed to fetch items:', error);
    throw error;
  }
}

// Flagship events are replaced with a generic flagship description from the flagships.ts file(e.g explaining what Infball and STMUs are)
const getFlagshipDescription = (title: string) => {
  for (let flagship of flagships) {
    if (title.toLowerCase().includes(flagship.name.toLowerCase())) {
      return flagship.description;
    }
  }
  return null;
};

// Helper function to format a date string
const formatDate = (dateStr: string): string => {
  const dateObj = new Date(dateStr);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();
  return `${day}.${month}.${year}`;
};

// Helper function to format a date range string
const formatDateRange = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const startDay = String(start.getDate()).padStart(2, '0');
  const endDay = String(end.getDate()).padStart(2, '0');
  const month = String(start.getMonth() + 1).padStart(2, '0');
  const year = start.getFullYear();
  return `${startDay}-${endDay}.${month}.${year}`;
};

// Transforms calendar events into custom event objects
function transformEvents(events: CalendarEvent[]): Event[] {
  return events.map(event => {
    let newTitle = event.summary;

    // Replace specific event titles with better names(STMU -> Student Tech Meetup, Infball -> Infball <year>)
    if (newTitle.includes('STMU')) {
      newTitle = 'Student Tech Meetup';
    } else if (newTitle.toLowerCase().includes('infball')) {
      const eventDate = new Date(event.start.dateTime || event.start.date);
      const eventYear = eventDate.getFullYear();
      newTitle = `Infball ${eventYear}`;
    }

    let newDescription = getFlagshipDescription(newTitle) || event.description;

    const location = event.location ? event.location.split(',')[0].trim() : ' ';
    return {
      title: newTitle,
      description: newDescription || 'More details to be announced soon!',
      eventURL: event.htmlLink,
      location: location,
      date: event.start.dateTime ? formatDate(event.start.dateTime) : formatDateRange(event.start.date!, event.end.date!),
      upcoming: new Date(event.start.dateTime || event.end.date!) > new Date(),
    };
  });
}

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const calendarEvents = await fetchCalendarEvents();
        const transformedEvents = transformEvents(calendarEvents);
        setEvents(transformedEvents);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch events');
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  return { events, loading, error };
};

// fetchCalendarEvents()
//   .then(items => {
//     console.log('Fetched items:', transformEvents(items));
//   })
//   .catch(error => {
//     console.error('Error fetching items:', error);
//   });

// export const events = [
//     {

//     title: 'Freshers Week 2024',
//     description: "Join us for Freshers Week 2024, packed with exciting events, including a hike up Arthur's Seat!",
//     location: 'Main Campus',
//     date: '12-17.09.2024',
//     upcoming: true
//     },
//     {

//       title: 'Infball 2024',
//       description: 'Yearly ball in mid-March for all informatics students, complete with a three-course meal and a ceilidh.',
//       location: 'The Caves',
//       date: '18.04.2024',
//       upcoming: false
//     },
//     {

//       title: 'Hack the Burgh X',
//       description: 'Join us for our annual 24-hour hackathon, complete with food, sponsor merch, and many prizes up for grabs.',
//       location: 'Nucleus Building',
//       date: '02.03.2024',
//       upcoming: false
//     },
//     {
   
//       title: 'Student-Tech Meetup',
//       description: 'Engage with insightful talks from academics and industry experts, and enjoy free pizza!',
//       location: 'Informatics Forum',
//       date: '21.11.2024',
//       upcoming: false
//     },
    
//   ];