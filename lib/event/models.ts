export interface Event {
  title: string
  description: string
  eventURL?: string
  location: string
  date: string
  icon?: string
  upcoming?: boolean
}

export interface GoogleCalendarEvent {
  kind: string
  etag: string
  id: string
  status: string
  htmlLink: string
  created: string
  updated: string
  summary: string
  description: string
  location: string
  creator: {
    email: string
  }
  organizer: {
    email: string
    displayName: string
    self: boolean
  }
  start: {
    date: string
    dateTime: string
    timeZone: string
  }
  end: {
    date: string
    dateTime: string
    timeZone: string
  }
  recurringEventId?: string
  originalStartTime: {
    dateTime: string
    timeZone: string
  }
  transparency: string
  iCalUID: string
  sequence: number
  eventType: string
}

export interface Flagship {
  name: string
  description: string
  long_description: string
  image: string
  roughDate: string
  link?: string
  facts: Array<{ number: string; text: string }>
}
