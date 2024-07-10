'use client'

import { useEffect } from 'react'

export default function Families() {
  const url =
    'https://docs.google.com/forms/d/1g38DKV3R0dJSIitrboPTqHBV8aI2SPHy6F2R8TYcGes/viewform?edit_requested=true&pli=1'

  useEffect(() => {
    window.location.replace(url)
  }, [url])

  return (
    <div className="lg:w-4/5 mx-auto">
      <h1>Families!</h1>
      <div className="mt-6">
        Redirecting you to{' '}
        <a href={url} className="text-blue-500 underline">
          {' '}
          the families form
        </a>
      </div>
    </div>
  )
}
