import { Calendar } from 'iconoir-react'

interface CalendarErrorStateProps {
  message?: string
  onRetry?: () => void
}

const CalendarErrorState = ({
  message = 'Unable to load events',
  onRetry,
}: CalendarErrorStateProps) => {
  return (
    <div className="bg-csgrey rounded-2xl border border-border p-8 text-center">
      <Calendar className="w-12 h-12 text-textSecondary mx-auto mb-4" />
      <h3 className="text-xl font-tomorrow text-textPrimary mb-2">{message}</h3>
      <p className="text-textSecondary font-space-mono mb-4">
        Please try refreshing the page or check back later.
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-csred text-textPrimary rounded-lg font-space-mono hover:bg-csred/80 transition-colors duration-200"
        >
          Try Again
        </button>
      )}
    </div>
  )
}

export default CalendarErrorState
