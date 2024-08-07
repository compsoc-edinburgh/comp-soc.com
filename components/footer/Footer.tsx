import React from 'react'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'
import FooterCanvas from './FooterCanvas'

const Footer = () => {
  return (
    <div className="relative w-full bg-csred">
      <div className="bg-red-700 text-white text-center p-2 pointer-events-none select-none">
        CompSoc ❤️ You!
      </div>

      <FooterCanvas />
      <footer className="absolute top-0 text-white">
        <div className="flex flex-row gap-2 m-12 pointer-events-none user-select-none">
          {/* <Image
            src={`${prefix}/compsoc-short.png`}
            alt="CompSoc Logo"
            width={100}
            height={20}
            className='drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]'
          />
          <Image
            src={`${prefix}/heart-static.png`}
            alt="Heart"
            width={100}
            height={100}
          />
          <h1 className="text-5xl">You</h1> */}
          {/* <p>Remember, CompSoc ❤️ You!</p>
          <NextImage
            src={`${prefix}/compsoc-mini.png`}
            alt="CompSoc Logo"
            width={100}
            height={100}
          />
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/legal" className="hover:underline">
            Legal
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a> */}
        </div>
      </footer>
    </div>
  )
}

export default Footer
