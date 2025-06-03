'use client'

import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import { EUSA_MEMBERSHIP_URL } from '@/constants/socials'
import Heading from '@/components/heading'

export default function JoinPage() {
  useEffect(() => {
    redirect(EUSA_MEMBERSHIP_URL)
  }, [])

  // For the unlikely event that the redirect fails, show an error button
  const [showErrorButton, setShowErrorButton] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowErrorButton(true)
    }, 750)
  }, [])

  return (
    <div
      className={`max-w-5xl mx-auto flex flex-col gap-6 ${showErrorButton ? 'opacity-100' : 'opacity-0'} transition-opacity duration-250`}
    >
      <div className="mb-10 mt-4">
        <Heading title="Become an official member" />
      </div>
      <p>If you did not get redirected, please click the button below.</p>
      <a href={EUSA_MEMBERSHIP_URL}>
        <button className="bg-csred text-white px-4 py-2 rounded-md">
          Become a member ↗
        </button>
      </a>
    </div>
  )
}
