import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { prefix } from '@/utils/prefix'

const ImageCarousel: React.FC = () => {
  const images = [
    {
      src: `${prefix}/image1.jpg`,
      alt: 'People sitting in rows, some working on laptops with stickers, others conversing, in an indoor setting.',
      footer: 'Hack The Burgh',
    },
    {
      src: `${prefix}/image2.jpg`,
      alt: 'Audience of people laughing and enjoying an event in an indoor setting.',
      footer: 'STMU 2024',
    },
    {
      src: `${prefix}/image3.jpg`,
      alt: 'Group of people playing pool under green hanging lights, with some engaging in conversation and holding pool cues.',
      footer: 'Pub Crawl 2024',
    },
    {
      src: `${prefix}/image4.jpg`,
      alt: 'Group of people dancing in pairs in a dimly lit venue, dressed in formal and semi-formal attire.',
      footer: 'CompSoc InfBall 2024',
    },
    {
      src: `${prefix}/image5.jpg`,
      alt: 'Group of people working together on laptops and discussing in a well-lit indoor setting with large windows',
      footer: 'Hack The Burgh',
    },
    {
      src: `${prefix}/image6.jpg`,
      alt: 'Couples dancing in formal attire at a lively event in a brick-walled venue with string lights.',
      footer: 'CompSoc InfBall 2024',
    },
    {
      src: `${prefix}/image7.jpg`,
      alt: 'Audience members attentively watching a presentation or event in a lecture hall.',
      footer: 'Hack The Burgh Prize Announcements',
    },
  ]

  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovered) return
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length, isHovered])

  return (
    <div
      className="relative col-span-7 row-span-4 col-start-1 row-start-3 lg:h-[520px] h-[400px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute lg:bottom-2 lg:left-2 top-2 right-2 lg:top-auto lg:right-auto px-2 py-1 rounded-lg backdrop-blur-sm bg-white bg-opacity-20 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xs">{image.footer}</p>
          </div>
          <Image
            width={100}
            height={100}
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover border-neutral-600 border-4 border-b-0"
          />
        </div>
      ))}
      <div className="z-20 absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 group-hover:opacity-100 opacity-50 transition-opacity duration-300">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentImage ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentImage(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
