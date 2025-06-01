import { useEffect, useState } from 'react'
import { SIGs } from '@/constants/SIGs'
import { SIG } from '@/lib/sig'
import {
  GOOGLE_CALENDAR_API_KEY,
  DEFAULT_CALENDAR_ID,
  CALENDAR_API_CONFIG,
} from './constants'
import type { GoogleCalendarEvent, CalendarEvent } from './models'
import { buildFormattedDate } from '@/utils/calendarUtils'

export function transformCalendarEvents(
  sig: SIG,
  events: GoogleCalendarEvent[]
): CalendarEvent[] {
  return events.map((event) => ({
    title: event.summary,
    start: event.start.dateTime || event.start.date,
    end: event.end.dateTime || event.end.date,
    color: sig.backgroundColor,
    textColor: sig.textColor || '#000000',
    sig,
    description: event.description,
    location: event.location,
    formattedDate: buildFormattedDate(event),
  }))
}

export async function fetchCalendarEvents(
  calendar: string
): Promise<GoogleCalendarEvent[]> {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendar}/events`

  const currentDate = new Date()
  const timeMin = new Date(
    currentDate.getFullYear() - 1,
    currentDate.getMonth(),
    currentDate.getDate()
  ).toISOString()
  const timeMax = new Date(
    currentDate.getFullYear() + 1,
    currentDate.getMonth(),
    currentDate.getDate()
  ).toISOString()

  const params = new URLSearchParams({
    key: GOOGLE_CALENDAR_API_KEY,
    timeMin,
    timeMax,
    ...CALENDAR_API_CONFIG,
  })

  const response = await fetch(`${url}?${params}`)
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  return data.items as GoogleCalendarEvent[]
}

export const useCalendarEvents = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Nullable<string>>(null)

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const allEvents = await Promise.all(
          SIGs.map(async (sig) => {
            const calendarEvents = await fetchCalendarEvents(
              sig.calendarURL || DEFAULT_CALENDAR_ID
            )
            return transformCalendarEvents(sig, calendarEvents)
          })
        )
        setEvents(allEvents.flat())
      } catch {
        setError('Failed to fetch events')
      } finally {
        setLoading(false)
      }
    }

    void loadEvents()
  }, [])

  return { events, loading, error }
}
