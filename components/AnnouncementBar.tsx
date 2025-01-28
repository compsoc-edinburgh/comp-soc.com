import React, { ReactNode } from 'react'
import Link from 'next/link'

interface AnnouncementBarProps {
  children: ReactNode
  href: string
}

const AnnouncementBar = ({ children, href }: AnnouncementBarProps) => {
  return (
    <Link href={href}>
      <div className="w-full bg-blue-600 text-white text-center py-2">
        {children}
      </div>
    </Link>
  )
}

export default AnnouncementBar
