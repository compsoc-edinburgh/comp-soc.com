import React, { useEffect, useState, useRef } from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useCalendarEvents } from '@/lib/calendar'

import CalendarLoader from './calendar/CalendarLoader'
import CalendarHeader from './calendar/CalendarHeader'
import CalendarNavigation from './calendar/CalendarNavigation'
import EventModal from './EventModal'
import CalendarErrorState from './calendar/CalendarErrorState'

const useCalendarState = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [open, setOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [calendarView, setCalendarView] = useState('timeGridWeek')
  const calendarRef = useRef<FullCalendar>(null)

  useEffect(() => {
    const updateView = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      setCalendarView(mobile ? 'timeGridDay' : 'timeGridWeek')
    }

    updateView()
    window.addEventListener('resize', updateView)
    return () => window.removeEventListener('resize', updateView)
  }, [])

  return {
    isMobile,
    open,
    setOpen,
    selectedEvent,
    setSelectedEvent,
    calendarView,
    setCalendarView,
    calendarRef,
  }
}

const CALENDAR_CONFIG = {
  slotMinTime: '08:00:00',
  slotMaxTime: '22:00:00',
  firstDay: 1,
  displayEventTime: false,
  eventDisplay: 'block' as const,
  dayMaxEvents: false,
  selectMirror: false,
} as const

const EventsCalendar: React.FC = () => {
  const { events, loading, error } = useCalendarEvents()
  const {
    isMobile,
    open,
    setOpen,
    selectedEvent,
    setSelectedEvent,
    calendarView,
    setCalendarView,
    calendarRef,
  } = useCalendarState()

  const handleEventClick = (eventInfo: any) => {
    setSelectedEvent(eventInfo.event)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedEvent(null)
  }

  const handlePrevious = () => {
    const calendarApi = calendarRef.current?.getApi()
    if (calendarApi) {
      calendarApi.prev()
    }
  }

  const handleNext = () => {
    const calendarApi = calendarRef.current?.getApi()
    if (calendarApi) {
      calendarApi.next()
    }
  }

  const handleToday = () => {
    const calendarApi = calendarRef.current?.getApi()
    if (calendarApi) {
      calendarApi.today()
    }
  }

  const handleViewChange = (view: string) => {
    setCalendarView(view)
  }

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-8">
        <CalendarLoader />
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto py-8">
        <CalendarErrorState />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto py-8">
      <style>
        {`
          .calendar-wrapper {
            background: #222222;
            border: 1px solid #484848;
            border-radius: 16px;
            overflow: hidden;
          }

          .calendar-header {
            padding: 20px;
            border-bottom: 1px solid #484848;
            background: #222222;
          }

          .calendar-title {
            font-family: 'Tomorrow', monospace;
            font-size: 1.25rem;
            font-weight: 600;
            color: #FFFFFF;
            margin: 0;
          }

          .calendar-nav-btn {
            background: transparent;
            border: 1px solid #484848;
            color: #A0A0A0;
            padding: 6px 12px;
            border-radius: 6px;
            font-family: 'Space Mono', monospace;
            font-size: 0.8rem;
            font-weight: 400;
            transition: all 0.2s ease;
            cursor: pointer;
          }

          .calendar-nav-btn:hover {
            border-color: #A0A0A0;
            color: #FFFFFF;
          }

          .calendar-nav-btn.active {
            border-color: #CE3234;
            color: #CE3234;
          }

          .nav-arrow-btn {
            background: transparent;
            border: 1px solid #484848;
            color: #A0A0A0;
            padding: 8px;
            border-radius: 6px;
            transition: all 0.2s ease;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .nav-arrow-btn:hover {
            border-color: #A0A0A0;
            color: #FFFFFF;
          }

          .fc {
            background: transparent;
            font-family: 'Space Mono', monospace;
          }

          .fc-header-toolbar {
            display: none !important;
          }

          .fc-theme-standard td,
          .fc-theme-standard th {
            border-color: #484848;
          }

          .fc-scrollgrid {
            border: none !important;
          }

          .fc-col-header {
            background: #353535;
            border-bottom: 1px solid #484848;
          }

          .fc-col-header-cell {
            padding: 8px 4px;
            border-right: 1px solid #484848;
          }

          .fc-col-header-cell:last-child {
            border-right: none;
          }

          .fc-col-header-cell-cushion {
            color: #A0A0A0;
            font-weight: 400;
            font-size: 0.75rem;
            text-transform: lowercase;
            font-family: 'Space Mono', monospace;
          }

          .fc-timegrid-axis-cushion {
            color: #A0A0A0;
            font-size: 0.7rem;
            font-family: 'Space Mono', monospace;
            padding: 2px 4px;
          }

          .fc-timegrid-slot {
            border-color: #383838;
            height: 2.5rem;
          }

          .fc-timegrid-slot-minor {
            border-top: none !important;
          }

          .fc-timegrid-col-bg {
            background: #222222;
          }

          .fc-day-today {
            background: rgba(206, 50, 52, 0.03) !important;
          }

          .fc-timegrid-col.fc-day-today {
            background: rgba(206, 50, 52, 0.03) !important;
          }

          .fc-event {
            border: none !important;
            border-radius: 4px !important;
            padding: 2px 6px !important;
            margin: 1px !important;
            cursor: pointer !important;
            transition: opacity 0.2s ease !important;
          }

          .fc-event:hover {
            opacity: 0.8 !important;
          }

          .fc-event-title {
            font-weight: 400 !important;
            font-size: 0.75rem !important;
            font-family: 'Space Mono', monospace !important;
            line-height: 1.1 !important;
          }

          .fc-event-time {
            display: none !important;
          }

          @media (max-width: 768px) {
            .calendar-header {
              padding: 16px;
            }

            .calendar-title {
              font-size: 1.1rem;
            }

            .calendar-nav-btn {
              padding: 5px 10px;
              font-size: 0.75rem;
            }

            .nav-arrow-btn {
              padding: 6px;
            }

            .fc-timegrid-axis {
              width: 35px !important;
            }

            .fc-timegrid-axis-cushion {
              font-size: 0.65rem;
              padding: 1px 2px;
            }

            .fc-col-header-cell {
              padding: 6px 2px;
            }

            .fc-col-header-cell-cushion {
              font-size: 0.7rem;
            }

            .mobile-nav-container {
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 12px;
              align-items: center;
            }

            .mobile-nav-top {
              display: flex;
              justify-content: center;
              gap: 8px;
              width: 100%;
            }

            .mobile-view-controls {
              display: flex;
              gap: 6px;
            }

            .desktop-view-controls {
              display: none;
            }
          }

          @media (min-width: 769px) {
            .mobile-nav-container {
              display: none;
            }

            .desktop-nav-container {
              display: flex;
              align-items: center;
              gap: 5;
            }
          }

          .fc-scroller::-webkit-scrollbar {
            width: 3px;
          }

          .fc-scroller::-webkit-scrollbar-track {
            background: transparent;
          }

          .fc-scroller::-webkit-scrollbar-thumb {
            background: #484848;
            border-radius: 2px;
          }
        `}
      </style>

      <div className="calendar-wrapper">
        <CalendarHeader>
          <CalendarNavigation
            isMobile={isMobile}
            calendarView={calendarView}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onToday={handleToday}
            onViewChange={handleViewChange}
          />
        </CalendarHeader>

        <div className="p-4">
          <FullCalendar
            ref={calendarRef}
            key={calendarView}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={calendarView}
            views={{
              timeGridThreeDay: {
                type: 'timeGrid',
                duration: { days: 3 },
              },
              timeGridWeek: {
                type: 'timeGrid',
                duration: { weeks: 1 },
              },
              dayGridMonth: {
                type: 'dayGrid',
                duration: { months: 1 },
              },
            }}
            height="auto"
            contentHeight={isMobile ? 400 : 500}
            events={events}
            eventClick={handleEventClick}
            {...CALENDAR_CONFIG}
          />
        </div>
      </div>

      <EventModal
        open={open}
        onClose={handleClose}
        event={selectedEvent}
        isMobile={isMobile}
      />
    </div>
  )
}

export default EventsCalendar
