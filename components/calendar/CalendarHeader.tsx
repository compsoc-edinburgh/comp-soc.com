import { ReactNode } from 'react'

interface CalendarHeaderProps {
  title?: string
  description?: string
  children?: ReactNode
}

const CalendarHeader = ({
  title = 'Events',
  description = 'CompSoc activities and events',
  children,
}: CalendarHeaderProps) => {
  return (
    <div className="calendar-header">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div>
          <h2 className="calendar-title mb-1">{title}</h2>
          <p className="text-textSecondary font-space-mono text-xs">
            {description}
          </p>
        </div>

        {children}
      </div>
    </div>
  )
}

export default CalendarHeader
