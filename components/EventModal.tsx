import { FC } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Image from 'next/image'
import { MapPin, Calendar, Clock, User, Xmark } from 'iconoir-react'
import { prefix } from '@/utils/prefix'

interface EventModalProps {
  open: boolean
  onClose: () => void
  event: any
  isMobile: boolean
}

const EventModal: FC<EventModalProps> = ({
  open,
  onClose,
  event,
  isMobile,
}) => {
  const createMarkup = (html: string) => {
    if (!html) return { __html: '' }
    return {
      __html: html.replace(
        /<a /g,
        '<a style="color: #CE3234; text-decoration: underline; font-weight: 500;" '
      ),
    }
  }

  const renderEventLocation = () => {
    if (!event?.extendedProps?.location) return null

    return (
      <div className="mb-5 p-4 bg-cslightgrey rounded-lg">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-csred mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-medium text-textPrimary mb-1.5 font-space-mono">
              Location
            </h3>
            <p className="text-sm text-textSecondary font-space-mono">
              {event.extendedProps.location}
            </p>
          </div>
        </div>
      </div>
    )
  }

  const renderEventDescription = () => {
    if (!event?.extendedProps?.description) {
      return (
        <div className="text-center py-8">
          <User className="w-8 h-8 text-textSecondary mx-auto mb-3" />
          <p className="text-sm text-textSecondary font-space-mono">
            No additional details available.
          </p>
        </div>
      )
    }

    return (
      <div id="event-modal-description" className="space-y-3">
        <h3 className="text-sm font-medium text-textPrimary font-space-mono flex items-center gap-2">
          <User className="w-4 h-4" />
          Details
        </h3>
        <div
          className="prose prose-sm max-w-none text-textSecondary leading-relaxed font-space-mono text-sm"
          dangerouslySetInnerHTML={createMarkup(
            event.extendedProps.description
          )}
        />
      </div>
    )
  }

  const renderEventHeader = () => (
    <div className="relative bg-csgrey p-5 sm:p-6 border-b border-border">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-cslightgrey transition-colors duration-200"
        aria-label="Close modal"
      >
        <Xmark className="w-5 h-5 text-textPrimary" />
      </button>

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Image
            width={isMobile ? 40 : 48}
            height={isMobile ? 40 : 48}
            src={`${prefix}/SIGs/${event.extendedProps.sig.icon.src}`}
            alt={event.extendedProps.sig.icon.alt}
            className={`${
              event.extendedProps.sig.icon.rounded
                ? 'rounded-full'
                : 'rounded-lg'
            } shadow-lg`}
          />
        </div>

        <div className="flex-1 min-w-0 space-y-2">
          <h2
            id="event-modal-title"
            className="text-lg sm:text-xl font-tomorrow font-semibold text-textPrimary leading-tight"
          >
            {event.title}
          </h2>

          <div className="flex items-center gap-2 text-sm text-textSecondary">
            <Calendar className="w-4 h-4" />
            <span className="font-space-mono">
              {event.extendedProps.formattedDate}
            </span>
            {event.start && (
              <>
                <Clock className="w-4 h-4 ml-2" />
                <span className="font-space-mono">
                  {event.start.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  if (!event) return null

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="event-modal-title"
      aria-describedby="event-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 1, sm: 2 },
      }}
    >
      <Box
        sx={{
          bgcolor: '#222222',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
          borderRadius: '12px',
          width: { xs: '95%', sm: '90%' },
          maxWidth: '500px',
          maxHeight: { xs: '85vh', sm: '80vh' },
          overflow: 'hidden',
          outline: 'none',
        }}
      >
        {renderEventHeader()}

        <div className="p-5 sm:p-6 max-h-[calc(80vh-200px)] overflow-y-auto">
          {renderEventLocation()}
          {renderEventDescription()}
        </div>
      </Box>
    </Modal>
  )
}

export default EventModal
