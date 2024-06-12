'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { prefix } from '@/utils/prefix'
import { NAV_LINKS } from '@/constants/navLinks'

const Logo = () => (
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
)

const NavLink = ({
  href,
  label,
  isActive,
}: {
  href: string
  label: string
  isActive: boolean
}) => (
  <Link
    href={`${prefix}${href}`}
    className={`hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-50'}`}
  >
    {label}
  </Link>
)

const NavBar = () => {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 container mx-auto p-0 md:p-4 max-w-screen-lg">
      <div className="container bg-foreground mx-auto flex justify-between items-center p-4 border-border border-b-2 rounded-sm sm:border-2">
        <Logo />
        <div className="flex space-x-8 px-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={pathname === link.href}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
