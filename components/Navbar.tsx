'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { prefix } from '@/utils/prefix'
import { NAV_LINKS } from '@/constants/navLinks'
import { Discord, Instagram, Linkedin, Menu, Xmark } from 'iconoir-react'
import {
  DISCORD_INVITE_URL,
  INSTAGRAM_URL,
  LINKEIDN_URL,
} from '@/constants/socials'

const Logo = () => (
  <Link href={`${prefix}/`}>
    <Image
      src={`${prefix}/compsoc-mini.svg`}
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
  onClick,
  className,
}: {
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
  className?: string
}) => (
  <Link
    href={`${prefix}${href}`}
    className={`hover:opacity-100 ${isActive ? 'opacity-100' : 'opacity-50'} ${className}`}
    onClick={onClick}
  >
    {label}
  </Link>
)

const NavBar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="sticky top-0 z-[100] p-0 w-screen bg-foreground border-b-border border-b-2">
      <div className="container max-w-5xl mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        <div className="flex items-center gap-4 pl-2 md:pl-0">
          <Logo />

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            className="opacity-50 hover:opacity-100 ml-4"
          >
            <Instagram />
          </a>

          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            className="opacity-50 hover:opacity-100"
          >
            <Discord />
          </a>

          <a
            href={LINKEIDN_URL}
            target="_blank"
            className="opacity-50 hover:opacity-100"
          >
            <Linkedin />
          </a>
        </div>
        <div className="hidden sm:flex space-x-8 px-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={pathname === link.href}
            />
          ))}
        </div>
        <button
          className="sm:hidden text-white focus:outline-none opacity-50 hover:opacity-100 transition-all duration-300"
          onClick={toggleMenu}
        >
          <div
            className={`transform transition-transform duration-200 ${isMenuOpen ? 'scale-90' : 'scale-100'}`}
          >
            {isMenuOpen ? <Xmark /> : <Menu />}
          </div>
        </button>
      </div>
      <div className="sm:hidden bg-foreground">
        {/* Needs to use px calculations :( because max-h wont cut it */}
        <div
          className={`container max-w-5xl mx-auto px-4 flex flex-col gap-4 overflow-hidden transition-all duration-300`}
          style={{
            height: isMenuOpen ? `${NAV_LINKS.length * 60}px` : '0',
            opacity: isMenuOpen ? '1' : '0',
          }}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={pathname === link.href}
              onClick={toggleMenu}
              className="text-xl bg-border rounded-md p-2 text-white"
            />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
