import Link from 'next/link'
import { ReactNode } from 'react'

interface BigLinkProps {
  href: string
  icon: ReactNode
  title: string
  description: string
}

const BigLink = ({ href, icon, title, description }: BigLinkProps) => {
  return (
    <Link href={href}>
      <div className="bg-foreground border-border border-2 p-4 rounded-sm text-center text-white cursor-pointer flex gap-4 items-center">
        <div>{icon}</div>
        <div className="flex flex-col text-left font-tomorrow">
          <h1 className="text-lg">{title}</h1>
          <p className="text-sm opacity-70">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default BigLink
