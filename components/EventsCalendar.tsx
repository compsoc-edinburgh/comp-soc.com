import React, { useRef, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { CalendarEvent, GoogleCalendarEvent } from '@/app/types'
import { useCalendarEvents } from '@/constants/calendarevents'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { color } from 'framer-motion'

const EventsCalendar: React.FC = () => {
  const { events, loading, error } = useCalendarEvents()
  console.log('Fetched calendar events:', events)

  const [open, setOpen] = React.useState(false)
  const [event, setEvent] = React.useState<CalendarEvent | null>(null)

  const handleEventClick = (eventInfo: any) => {
    setOpen(true)
    setEvent(eventInfo)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    color: 'black',
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
          <div className="p-4">
            {event && (
              <>
                <div>{event.title}</div>
                <div>{event.description}</div>
                <div>{event.location}</div>
                <div>
                  {event.start?.toLocaleString()} -{' '}
                  {event.end?.toLocaleString()}
                </div>
              </>
            )}
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default EventsCalendar
