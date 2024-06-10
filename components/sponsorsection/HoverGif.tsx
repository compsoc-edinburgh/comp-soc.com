import { useState } from 'react'
import Image from 'next/image'
import { prefix } from '@/utils/prefix'

const HoverGif = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative inline-block w-10 h-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Image
        src={`${prefix}/heart-static.png`}
        alt="Static Icon"
        layout="fill"
        objectFit="contain"
        className={`absolute top-0 left-0 transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <Image
        src={`${prefix}/heart.gif`}
        alt="GIF Icon"
        layout="fill"
        objectFit="contain"
        className={`absolute top-0 left-0 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

export default HoverGif
