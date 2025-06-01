import { flagships } from '@/constants/flagships'

export const getFlagshipDescription = (title: string): Nullable<string> => {
  for (let flagship of flagships) {
    if (title.toLowerCase().includes(flagship.name.toLowerCase())) {
      return flagship.description
    }
  }
  return null
}

export const formatDate = (dateStr: string): string => {
  const dateObj = new Date(dateStr)
  const day = String(dateObj.getDate()).padStart(2, '0')
  const month = String(dateObj.getMonth() + 1).padStart(2, '0')
  const year = dateObj.getFullYear()
  return `${day}.${month}.${year}`
}

export const formatDateRange = (startDate: string, endDate: string): string => {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const startDay = String(start.getDate()).padStart(2, '0')
  const endDay = String(end.getDate()).padStart(2, '0')
  const month = String(start.getMonth() + 1).padStart(2, '0')
  const year = start.getFullYear()
  return `${startDay}-${endDay}.${month}.${year}`
}
