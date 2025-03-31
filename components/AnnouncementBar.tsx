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
    <div className={`bg-blue-600 text-white text-center py-2 ${className}`}>
      <Link href={href}>{children}</Link>
    </div>
  )
}

export default AnnouncementBar
