import { CalendarEvent, GoogleCalendarEvent } from '@/app/types'
import { useEffect, useState } from 'react'
import { SIGs } from './SIGs'
import { SIG } from '@/types/SIG'

// Fetches calendar events from the Google Calendar API
async function fetchCalendarEvents(
  calendar: string
): Promise<GoogleCalendarEvent[]> {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendar}/events`

  const currentDate = new Date()
  const oneYearLater = new Date(
    currentDate.getFullYear() + 1,
    currentDate.getMonth(),
    currentDate.getDate()
  )
  const params = new URLSearchParams({
    key: 'AIzaSyAnUQX9d7j3_d5wlJF_PvM02eHOMFbDedw',
    timeMin: currentDate.toISOString(),
    timeMax: oneYearLater.toISOString(),
    singleEvents: 'true',
    maxResults: '9999',
  })

  try {
    const response = await fetch(`${url}?${params.toString()}`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`)
    }
    const data = await response.json()
    const items: GoogleCalendarEvent[] = data.items
    console.log('Fetched items:', items)

    return items
  } catch (error) {
    console.error('Failed to fetch items:', error)
    throw error
  }
}

// Transforms Google Calendar events to CalendarEvent objects
function transformEvents(
  sig: SIG,
  events: GoogleCalendarEvent[]
): CalendarEvent[] {
  return events.flat().map((event) => ({
    title: event.summary,
    start: event.start.dateTime || event.start.date,
    end: event.end.dateTime || event.end.date,
    color: sig.backgroundColor,
    sig: sig.name,
    description: event.description,
    location: event.location,
  }))
}

export const useCalendarEvents = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const transformedEvents = await Promise.all(
          SIGs.map(async (sig) => {
            const calendarEvents = await fetchCalendarEvents(
              sig.calendarURL ||
                'c_d9ed90437b85f9f70111ed1576450106ba39ca8e46e94051bf53c9aa2c8a3735@group.calendar.google.com'
            )
            return transformEvents(sig, calendarEvents)
          })
        )
        setEvents(transformedEvents.flat())
        setLoading(false)
      } catch (error) {
        setError('Failed to fetch events')
        setLoading(false)
      }
    }

    loadEvents()
  }, [])

  return { events, loading, error }
}
