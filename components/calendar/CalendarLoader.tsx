const CalendarLoader = () => {
  return (
    <div className="bg-csgrey rounded-lg border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-48 h-8 bg-cslightgrey rounded-lg animate-pulse"></div>
          <div className="flex gap-2">
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={`header-btn-${i}`}
                className="w-16 h-8 bg-cslightgrey rounded-md animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-7 gap-1 mb-4">
          {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => (
            <div
              key={`header-${day}`}
              className="h-8 bg-cslightgrey rounded animate-pulse"
            ></div>
          ))}
        </div>

        <div className="space-y-2">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={`week-row-${i}`} className="grid grid-cols-8 gap-1">
              <div className="h-16 bg-foreground rounded animate-pulse"></div>
              {Array.from({ length: 7 }, (_, j) => (
                <div
                  key={`week-cell-${i}-${j}`}
                  className="h-16 bg-foreground rounded animate-pulse"
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CalendarLoader
