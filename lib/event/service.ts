import { useEffect, useState } from 'react'
import { CALENDAR_API_CONFIG } from './constants'
import type { GoogleCalendarEvent, Event } from './types'
import {
  GOOGLE_CALENDAR_API_KEY,
  MAIN_CALENDAR_ID,
} from '@/lib/event/constants'
import {
  formatDate,
  formatDateRange,
  getFlagshipDescription,
} from '@utils/eventUtils'

const DESCRIPTION_MAX_LENGTH = 150
const DESCRIPTION_MIN_TRIM_LENGTH = 100

const EVENT_TITLE_MAPPINGS = {
  STMU: 'Student Tech Meetup',
  INFBALL_PREFIX: 'Infball',
} as const

export const trimDescription = (description: Nullable<string>): string => {
  if (!description) return ''
  if (description.length <= DESCRIPTION_MAX_LENGTH) return description

  const trimmed = description.substring(0, DESCRIPTION_MAX_LENGTH)
  const lastSpaceIndex = trimmed.lastIndexOf(' ')

  if (lastSpaceIndex === -1 || lastSpaceIndex < DESCRIPTION_MIN_TRIM_LENGTH) {
    return trimmed + '...'
  }

  return description.substring(0, lastSpaceIndex) + '...'
}

export const transformEvents = (events: GoogleCalendarEvent[]): Event[] => {
  return events.map((event) => {
    let newTitle = event.summary

    if (newTitle.includes('STMU')) {
      newTitle = EVENT_TITLE_MAPPINGS.STMU
    } else if (newTitle.toLowerCase().includes('infball')) {
      const eventDate = new Date(event.start.dateTime || event.start.date)
      newTitle = `${EVENT_TITLE_MAPPINGS.INFBALL_PREFIX} ${eventDate.getFullYear()}`
    }

    let newDescription = getFlagshipDescription(newTitle) || event.description
    newDescription = trimDescription(newDescription)

    const location = event.location ? event.location.split(',')[0].trim() : ' '

    return {
      title: newTitle,
      description: newDescription || 'More details to be announced soon!',
      eventURL: event.htmlLink,
      location,
      date: event.start.dateTime
        ? formatDate(event.start.dateTime)
        : formatDateRange(event.start.date!, event.end.date!),
      upcoming: new Date(event.start.dateTime || event.end.date!) > new Date(),
    }
  })
}

export async function fetchCalendarEvents(): Promise<GoogleCalendarEvent[]> {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${MAIN_CALENDAR_ID}/events`

  const currentDate = new Date()
  const oneYearAgo = new Date(
    currentDate.getFullYear() - 1,
    currentDate.getMonth(),
    currentDate.getDate()
  )
  const sixMonthsLater = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 6,
    currentDate.getDate()
  )

  const params = new URLSearchParams({
    key: GOOGLE_CALENDAR_API_KEY,
    timeMin: oneYearAgo.toISOString(),
    timeMax: sixMonthsLater.toISOString(),
    ...CALENDAR_API_CONFIG,
  })

  const response = await fetch(`${url}?${params.toString()}`)
  if (!response.ok)
    throw new Error(`Error: ${response.status} ${response.statusText}`)

  const data = await response.json()
  const items: GoogleCalendarEvent[] = data.items

  const now = new Date()
  const twoMonthsLater = new Date(now)
  twoMonthsLater.setMonth(now.getMonth() + 2)

  const getDate = (item: GoogleCalendarEvent): Date | null =>
    item.start.dateTime
      ? new Date(item.start.dateTime)
      : item.start.date
        ? new Date(item.start.date)
        : null

  const getEndDate = (item: GoogleCalendarEvent): Date | null =>
    item.end.dateTime
      ? new Date(item.end.dateTime)
      : item.end.date
        ? new Date(item.end.date)
        : null

  let upcomingItems = items.filter((item) => {
    const eventDate = getEndDate(item)
    return eventDate && eventDate > now && eventDate <= twoMonthsLater
  })

  let pastItems = items.filter((item) => {
    const eventDate = getEndDate(item)
    return eventDate && eventDate <= now
  })

  if (upcomingItems.length === 0) {
    const nearestUpcoming = items
      .filter((item) => {
        const eventDate = getDate(item)
        return eventDate && eventDate > now
      })
      .sort(
        (a, b) => (getDate(a)?.getTime() || 0) - (getDate(b)?.getTime() || 0)
      )[0]

    if (nearestUpcoming) {
      upcomingItems = [nearestUpcoming]
    }
  }

  const seenSTMU = new Set<string>()
  const filterSTMU = (list: GoogleCalendarEvent[]) =>
    list.filter((item) => {
      const isSTMU = item.summary.includes('STMU')
      if (isSTMU) {
        if (seenSTMU.has('STMU')) return false
        seenSTMU.add('STMU')
      }
      return true
    })

  const filteredUpcoming = filterSTMU(upcomingItems)
  const filteredPast = filterSTMU(pastItems)

  filteredUpcoming.sort(
    (a, b) => (getDate(a)?.getTime() || 0) - (getDate(b)?.getTime() || 0)
  )
  filteredPast.sort(
    (a, b) => (getDate(b)?.getTime() || 0) - (getDate(a)?.getTime() || 0)
  )

  if (filteredUpcoming.length >= 2) {
    return [...filteredUpcoming.slice(0, 2), ...filteredPast.slice(0, 2)]
  } else if (filteredUpcoming.length === 1) {
    return [...filteredUpcoming, ...filteredPast.slice(0, 3)]
  } else {
    return filteredPast.slice(0, 4)
  }
}

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const calendarEvents = await fetchCalendarEvents()
        const transformed = transformEvents(calendarEvents)
        setEvents(transformed)
      } catch (err) {
        setError('Failed to fetch events')
      } finally {
        setLoading(false)
      }
    }

    loadEvents()
  }, [])

  return { events, loading, error }
}
