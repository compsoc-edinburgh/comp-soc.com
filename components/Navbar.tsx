'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { prefix } from '@/utils/prefix'
import { NAV_LINKS } from '@/constants/navLinks'
import { Discord, Instagram, Linkedin } from 'iconoir-react'
import {
  DISCORD_INVITE_URL,
  INSTAGRAM_URL,
  LINKEIDN_URL,
} from '@/constants/socials'

const Logo = () => (
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
      <div className="container max-w-5xl mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        <div className="flex items-center gap-4">
          <Logo />

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            className="opacity-50 hover:opacity-100 hidden sm:block ml-6"
          >
            <Instagram />
          </a>

          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            className="opacity-50 hover:opacity-100 hidden sm:block"
          >
            <Discord />
          </a>

          <a
            href={LINKEIDN_URL}
            target="_blank"
            className="opacity-50 hover:opacity-100 hidden sm:block"
          >
            <Linkedin />
          </a>
        </div>
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
