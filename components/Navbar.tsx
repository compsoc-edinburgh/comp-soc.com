import { prefix } from '@/utils/prefix'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 container mx-auto p-4 max-w-screen-lg">
      <div className="container bg-foreground mx-auto flex justify-between items-center p-4 border-border border-2 rounded-sm">
        <div className="text-white font-bold">
          <Link href={`${prefix}/`}>
            <Image
              src={`${prefix}/compsoc-short.png`}
              alt="Wide CompSoc logo"
              width={48}
              height={48}
              priority
            />
          </Link>
        </div>
        <div className="flex space-x-8 px-2">
          <Link href={`${prefix}/team`}>Team</Link>
          <Link href={`${prefix}/events`}>Events</Link>
          <Link href={`${prefix}/about`}>About</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
