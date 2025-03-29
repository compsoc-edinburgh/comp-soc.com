import React, { ReactNode } from 'react'
import Link from 'next/link'
import { announcementBarColourClassName } from '@/constants/announcement'

interface AnnouncementBarProps {
  children: ReactNode
  href: string
}

const AnnouncementBar = ({ children, href }: AnnouncementBarProps) => {
  return (
    <Link href={href}>
      <div
        className={`w-full ${announcementBarColourClassName} text-white text-center py-2`}
      >
        {children}
      </div>
    </Link>
  )
}

export default AnnouncementBar
