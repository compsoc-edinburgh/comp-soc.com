import React, { useMemo } from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { CalendarEvent, GoogleCalendarEvent } from '@/app/types'
import { useCalendarEvents } from '@/constants/calendarevents'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { EventInfo } from 'framer-motion'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'

const EventsCalendar: React.FC = () => {
  const { events, loading, error } = useCalendarEvents()
  console.log('Fetched calendar events:', events)

  const [open, setOpen] = React.useState(false)
  const [event, setEvent] = React.useState<any>(null)

  const handleEventClick = (eventInfo: any) => {
    setOpen(true)
    setEvent(eventInfo)
    console.log('Event clicked:', eventInfo)
  }

  const handleClose = () => {
    setOpen(false)
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
  }

  const createMarkup = (html: string) => {
    if (!html) {
      return { __html: '' }
    }
    return { __html: html.replace(/<a /g, '<a style="color: #1198E7;" ') }
  }

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridDay,timeGridWeek,dayGridMonth',
        }}
        firstDay={1}
        initialView="timeGridWeek"
        selectMirror={true}
        dayMaxEvents={true}
        slotMinTime={'08:00:00'}
        slotMaxTime={'21:00:00'}
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
                <div>
                  <div className="font-bold flex items-center">
                    <Image
                      width={40}
                      height={40}
                      src={`${prefix}/SIGs/${event.extendedProps.sig.icon.src}`}
                      alt={event.extendedProps.sig.icon.alt}
                      className={`h-full ${
                        event.extendedProps.sig.icon.rounded
                          ? 'rounded-full'
                          : 'rounded-lg'
                      } mr-2`}
                    />
                    <div className="text-xl">{event.title}</div>
                  </div>
                  <div className="mt-2">
                    {' '}
                    {event.extendedProps.formattedDate}
                  </div>

                  <div
                    className="mt-2"
                    dangerouslySetInnerHTML={
                      createMarkup(event.extendedProps.description) || {
                        __html: '',
                      }
                    }
                  />
                  <div>{event.location}</div>

                  {/* {event.extendedProps.formattedDate.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < event.extendedProps.formattedDate.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))} */}
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
    </>
  )
}

export default EventsCalendar
