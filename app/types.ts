export interface Event {
    title: string
    description: string
    eventURL?: string
    location: string
    date: string
    icon?: string
  }

  export interface CalendarEvent {
    kind: string;
    etag: string;
    id: string;
    status: string;
    htmlLink: string;
    created: string;
    updated: string;
    summary: string;
    description: string;
    location: string;
    creator: {
        email: string;
    };
    organizer: {
        email: string;
        displayName: string;
        self: boolean;
    };
    start: {
        dateTime: string;
        timeZone: string;
    };
    end: {
        dateTime: string;
        timeZone: string;
    };
    recurringEventId?: string;
    originalStartTime: {
        dateTime: string;
        timeZone: string;
    };
    transparency: string;
    iCalUID: string;
    sequence: number;
    eventType: string;
}

export interface Sponsor {
    name: string
    img: string
  
  }