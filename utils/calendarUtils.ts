import { GoogleCalendarEvent } from '@/lib/calendar'

export function formatDate(dateStr: string): string {
  const dateObj = new Date(dateStr)
  const day = dateObj.getDate()
  const month = dateObj.toLocaleString('en-US', { month: 'long' })

  const getOrdinalSuffix = (num: number) => {
    const j = num % 10,
      k = num % 100
    if (j === 1 && k !== 11) return `${num}st`
    if (j === 2 && k !== 12) return `${num}nd`
    if (j === 3 && k !== 13) return `${num}rd`
    return `${num}th`
  }

  return `${getOrdinalSuffix(day)} ${month}`
}

export function convertTimeFormat(time: string): string {
  let [hours, minutes] = time.split(':').map(Number)
  const period = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12 || 12
  const formattedMinutes =
    minutes === 0 ? '' : `:${minutes.toString().padStart(2, '0')}`
  return `${hours}${formattedMinutes}${period}`
}

export function endsEarlyMorning(start: string, end: string): boolean {
  const startTime = new Date(start)
  const endTime = new Date(end)
  const threshold = new Date(startTime)
  threshold.setDate(startTime.getDate() + 1)
  threshold.setHours(4, 0)
  return endTime < threshold && endTime.getHours() < 4
}

export function buildFormattedDate(event: GoogleCalendarEvent): string {
  const startDate = formatDate(event.start.dateTime || event.start.date)
  const endDate = formatDate(event.end.dateTime || event.end.date)
  const startTime = event.start.dateTime?.slice(11, 16) || ''
  const endTime = event.end.dateTime?.slice(11, 16) || ''

  if (startTime && endTime && event.end.dateTime) {
    if (endsEarlyMorning(event.start.dateTime, event.end.dateTime)) {
      return `${startDate}, ${convertTimeFormat(startTime)}`
    }
    return startDate === endDate
      ? `${startDate}, ${convertTimeFormat(startTime)} - ${convertTimeFormat(endTime)}`
      : `${startDate} - ${endDate}`
  }

  return startDate === endDate
    ? `${startDate}, ${convertTimeFormat(startTime)} - ${convertTimeFormat(endTime)}`
    : `${startDate} - ${endDate}`
}
