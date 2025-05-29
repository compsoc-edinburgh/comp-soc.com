import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useCalendarEvents } from '@/constants/calendarevents'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'
import { CalendarPlus, MapPin } from 'iconoir-react'
import { IconButton } from '@mui/material'
import ical from 'ical-generator'
import slugify from '@/utils/slugify'

const EventsCalendar: React.FC = () => {
  const { events, loading, error } = useCalendarEvents()

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

  const [open, setOpen] = React.useState(false)
  const [event, setEvent] = React.useState<any>(null)
  const [calendarView, setCalendarView] = useState('timeGridWeek')

  const handleEventClick = (eventInfo: any) => {
    setOpen(true)
    setEvent(eventInfo)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDownloadIcsFile = () => {
    const calendar = ical({
      prodId: '//comp-soc.com//2024//EN',
      events: [
        {
          start: event.extendedProps.start_,
          end: event.extendedProps.end_,
          summary: event.title,
          description: event.extendedProps.description,
          location: event.extendedProps.location,
        },
      ],
    })
    const icsData = calendar.toString()
    const blob = new Blob([icsData], { type: 'text/calendar' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download =
      slugify(`${event.title}-${event.extendedProps.formattedDate}`) + '.ics'
    link.href = url
    link.click()
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#222222',
    boxShadow: 24,
    p: 4,
    color: 'white',
    width: '90%', // Set a default width
    maxWidth: '600px', // Set a maximum width for larger screens
    '@media (max-width: 768px)': {
      width: '95%', // Full width on mobile
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  const createMarkup = (html: string) => {
    if (!html) {
      return { __html: '' }
    }
    return { __html: html.replace(/<a /g, '<a style="color: #1198E7;" ') }
  }

  useEffect(() => {
    const updateView = () => {
      const isMobile = window.innerWidth <= 768
      setCalendarView(isMobile ? 'timeGridThreeDay' : 'timeGridWeek')
    }

    updateView()
    window.addEventListener('resize', updateView)

    return () => {
      window.removeEventListener('resize', updateView)
    }
  }, [])

  return (
    <div className="lg:w-7/8 mx-auto mt-10">
      <style>
        {`
          .fc .fc-timegrid-slot-minor {
            border-top: none; !important;
          }

          .fc-header-toolbar {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .fc-header-toolbar .fc-toolbar-chunk {
            margin-bottom: 5px;
          }

          @media (max-width: 768px) {
            .fc-header-toolbar {
              flex-direction: column;
              align-items: center;
            }

            .fc-header-toolbar .fc-toolbar-chunk {
              width: 100%;
              text-align: center;
              margin-bottom: 10px;
            }

            .fc-header-toolbar .fc-toolbar-chunk:first-child {
              order: 3;
            }

            .fc-header-toolbar .fc-toolbar-chunk:nth-child(2) {
              order: 1;
            }

            .fc-header-toolbar .fc-toolbar-chunk:nth-child(3) {
              order: 2;
            }

            .fc-toolbar-title {
              font-size: 1.2rem;
            }
          }

          .fc-event {
            cursor: pointer;
          }
        `}
      </style>
      <FullCalendar
        key={calendarView} // Add key to force re-render
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: isMobile
            ? 'timeGridDay,timeGridThreeDay,dayGridMonth'
            : 'timeGridDay,timeGridWeek,dayGridMonth',
        }}
        firstDay={1}
        contentHeight={800}
        initialView={calendarView}
        views={{
          timeGridThreeDay: {
            type: 'timeGrid',
            duration: { days: 3 },
            buttonText: '3 day',
          },
        }}
        selectMirror={true}
        dayMaxEvents={true}
        slotMinTime={'08:00:00'}
        slotMaxTime={'24:00:00'}
        events={events}
        displayEventTime={false}
        eventClick={function (info) {
          handleEventClick(info.event)
        }}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-md">
          <div className="p-4 flex items-center">
            {event && (
              <>
                <div className="w-full">
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div className="font-bold flex items-center">
                      <Image
                        width={40}
                        height={40}
                        src={`${prefix}/SIGs/${event.extendedProps.sig.icon.src}`}
                        alt={event.extendedProps.sig.icon.alt}
                        className={`h-full ${
                          event.extendedProps.sig.icon.rounded
                        } mr-2`}
                      />
                      <div className="text-xl">{event.title}</div>
                    </div>
                    <IconButton
                      aria-label="download ics file"
                      title="Download .ics file"
                      onClick={handleDownloadIcsFile}
                    >
                      <CalendarPlus className="text-base text-blue-400" />
                    </IconButton>
                  </Box>
                  <div className="mt-2">
                    {' '}
                    {event.extendedProps.formattedDate}
                  </div>

                  {event.extendedProps.location && (
                    <div className="mt-2 flex items-center">
                      <MapPin className="mr-2 text-blue-400" />
                      <div>{event.extendedProps.location}</div>
                    </div>
                  )}

                  <div
                    className="mt-4"
                    dangerouslySetInnerHTML={
                      createMarkup(event.extendedProps.description) || {
                        __html: '',
                      }
                    }
                  />
                </div>
                <style jsx>{`
                  .description a {
                    color: blue;
                  }
                `}</style>
              </>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default EventsCalendar
