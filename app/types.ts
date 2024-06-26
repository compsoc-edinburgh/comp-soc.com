import { SIG } from '@/types/SIG'

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

export interface CalendarEvent {
  title: string
  start: string
  end: string
  color: string
  description: string
  location: string
  sig: SIG
  formattedDate: string
}

export interface Sponsor {
  name: string
  img: string
}

export interface C {
  name: string
  img: string
}
