import { prefix } from '@/utils/prefix'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 container mx-auto max-w-screen-xl py-4">
      <div className="container bg-foreground mx-auto flex justify-between items-center p-4 border-border border-2 rounded-sm">
        <div className="text-white font-bold">
          <Link href="/">
            <Image
              src={`${prefix}/compsoc-short.png`}
              alt="Wide CompSoc logo"
              width={64}
              height={64}
              priority
            />
          </Link>
        </div>
        <div className="flex space-x-8 px-4">
          <Link href="/team">Team</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
