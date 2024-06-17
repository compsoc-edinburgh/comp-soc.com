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
        src={`${prefix}/compsoc-mini.png`}
        alt="Wide CompSoc logo"
        width={24}
        height={24}
        priority
        className="transform scale-125"
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
    <nav className="sticky top-0 z-[100]  p-0 w-screen bg-foreground border-b-border border-b-2">
      <div className="container max-w-5xl mx-auto flex justify-between items-center py-4 px-4 sm:px-0">
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
