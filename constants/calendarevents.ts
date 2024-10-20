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
  const oneYearEarlier = new Date(
    currentDate.getFullYear() - 1,
    currentDate.getMonth(),
    currentDate.getDate()
  )
  const params = new URLSearchParams({
    key: 'AIzaSyAnUQX9d7j3_d5wlJF_PvM02eHOMFbDedw',
    timeMin: oneYearEarlier.toISOString(),
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

    return items
  } catch (error) {
    console.error('Failed to fetch items:', error)
    throw error
  }
}

const formatDate = (dateStr: string): string => {
  const dateObj = new Date(dateStr)
  const day = dateObj.getDate()
  const month = dateObj.toLocaleString('en-US', { month: 'long' }) // e.g., 'September'
  const year = dateObj.getFullYear()

  // Function to get the ordinal suffix for the day
  const getOrdinalSuffix = (num: number) => {
    const j = num % 10,
      k = num % 100
    if (j == 1 && k != 11) {
      return num + 'st'
    }
    if (j == 2 && k != 12) {
      return num + 'nd'
    }
    if (j == 3 && k != 13) {
      return num + 'rd'
    }
    return num + 'th'
  }

  const formattedDay = getOrdinalSuffix(day) // '10th', '21st', etc.
  return `${formattedDay} ${month}` // Remove year
}
function convertTimeFormat(timeRange: string): string {
  // Split the time range into start and end times
  const times = timeRange.split(' - ')
  const convertedTimes = times.map((time) => {
    // Extract hours and minutes from the time
    let [hours, minutes] = time.split(':').map(Number) // Ensures that both are numbers
    const period = hours >= 12 ? 'pm' : 'am' // Determine AM or PM period

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12 || 12 // Convert hour '0' to '12'

    // Adjust minutes: format correctly or omit if '00'
    const formattedMinutes =
      minutes === 0 ? '' : `:${minutes < 10 ? '0' + minutes : minutes}`

    // Construct the formatted time string
    return `${hours}${formattedMinutes}${period}`
  })

  // Join the converted start and end times with ' - '
  return convertedTimes.join(' - ')
}
// Transforms Google Calendar events to CalendarEvent objects
function transformEvents(
  sig: SIG,
  events: GoogleCalendarEvent[]
): CalendarEvent[] {
  return events.flat().map((event) => {
    const startDate = formatDate(event.start.dateTime || event.start.date)
    const endDate = formatDate(event.end.dateTime || event.end.date)
    const startTime = event.start.dateTime
      ? event.start.dateTime.slice(11, 16)
      : ''
    const endTime = event.end.dateTime ? event.end.dateTime.slice(11, 16) : ''

    // Helper function to determine if the event ends early in the morning
    const endsEarlyMorning = (
      startDateTime: string,
      endDateTime: string
    ): boolean => {
      const startTime = new Date(startDateTime)
      const endTime = new Date(endDateTime)
      const threshold = new Date(startTime)
      threshold.setDate(startTime.getDate() + 1)
      threshold.setHours(4, 0) // Ends before 4 AM next day
      return endTime < threshold && endTime.getHours() < 4
    }

    let formattedDate
    if (startTime && endTime && event.end.dateTime) {
      if (endsEarlyMorning(event.start.dateTime, event.end.dateTime)) {
        // If event ends before 4 AM, show only the start time
        formattedDate = `${startDate}, ${convertTimeFormat(startTime)}`
      } else {
        // Normal display for regular events
        formattedDate =
          startDate === endDate
            ? `${startDate}, ${convertTimeFormat(startTime)} - ${convertTimeFormat(endTime)}`
            : `${startDate} - ${endDate}`
      }
    } else {
      formattedDate =
        startDate === endDate
          ? `${startDate}, ${convertTimeFormat(startTime)} - ${convertTimeFormat(endTime)}`
          : `${startDate} - ${endDate}`
    }

    return {
      title: event.summary,
      start: event.start.dateTime || event.start.date,
      end: event.end.dateTime || event.end.date,
      start_: event.start.dateTime || event.start.date,
      end_: event.end.dateTime || event.end.date,
      color: sig.backgroundColor,
      textColor: sig.textColor,
      sig: sig,
      description: event.description,
      location: event.location,
      formattedDate: formattedDate,
    }
  })
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
