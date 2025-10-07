import React, { ReactNode } from 'react'
import Link from 'next/link'

interface AnnouncementBarProps {
  children: ReactNode
  href: string
  className?: string
}

const AnnouncementBar = ({
  className,
  children,
  href,
}: AnnouncementBarProps) => {
  return (
    <Link href={href}>
      <div className={`w-full text-white text-center py-2 ${className}`}>
        {children}
      </div>
    </Link>
  )
}

export default AnnouncementBar
