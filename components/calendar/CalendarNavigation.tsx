import { FC } from 'react'
import { ArrowLeft, ArrowRight } from 'iconoir-react'

interface CalendarNavigationProps {
  isMobile: boolean
  calendarView: string
  onPrevious: () => void
  onNext: () => void
  onToday: () => void
  onViewChange: (view: string) => void
}

const CalendarNavigation: FC<CalendarNavigationProps> = ({
  isMobile,
  calendarView,
  onPrevious,
  onNext,
  onToday,
  onViewChange,
}) => {
  const navigationButtons = [
    {
      key: 'day',
      label: 'Day',
      view: 'timeGridDay',
      isActive: calendarView === 'timeGridDay',
    },
    {
      key: 'week',
      label: 'Week',
      view: 'timeGridWeek',
      isActive: calendarView === 'timeGridWeek',
      showOnMobile: false,
    },
    {
      key: 'month',
      label: 'Month',
      view: 'dayGridMonth',
      isActive: calendarView === 'dayGridMonth',
      showOnMobile: false,
    },
  ]

  const renderArrowControls = () => (
    <div className="flex gap-1">
      <button
        onClick={onPrevious}
        className="nav-arrow-btn"
        aria-label="Previous period"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>
      <button
        onClick={onToday}
        className="calendar-nav-btn"
        aria-label="Go to today"
      >
        Today
      </button>
      <button
        onClick={onNext}
        className="nav-arrow-btn"
        aria-label="Next period"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )

  const renderViewControls = () => (
    <div className="flex gap-1">
      {navigationButtons
        .filter((btn) => !isMobile || btn.showOnMobile !== false)
        .map((btn) => (
          <button
            key={btn.key}
            onClick={() => onViewChange(btn.view)}
            className={`calendar-nav-btn ${btn.isActive ? 'active' : ''}`}
            aria-label={`Switch to ${btn.label.toLowerCase()} view`}
          >
            {btn.label}
          </button>
        ))}
    </div>
  )

  if (isMobile) {
    return (
      <div className="mobile-nav-container lg:hidden">
        <div className="mobile-nav-top">{renderArrowControls()}</div>
        <div className="mobile-view-controls">{renderViewControls()}</div>
      </div>
    )
  }

  return (
    <div className="desktop-nav-container hidden lg:flex items-center gap-5">
      {renderArrowControls()}
      {renderViewControls()}
    </div>
  )
}

export default CalendarNavigation
