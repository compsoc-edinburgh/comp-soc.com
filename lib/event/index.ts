export type { Event, GoogleCalendarEvent, Flagship } from './types'

export {
  GOOGLE_CALENDAR_API_KEY,
  MAIN_CALENDAR_ID,
  CALENDAR_API_CONFIG,
} from './constants'

export {
  fetchCalendarEvents,
  trimDescription,
  transformEvents,
  useEvents,
} from './service'
