import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { prefix } from '@/utils/prefix'

const ImageCarousel: React.FC = () => {
  const images = [
    `${prefix}/image1.jpg`,
    `${prefix}/image2.jpg`,
    `${prefix}/image3.jpg`,
    `${prefix}/image4.jpg`,
    `${prefix}/image5.jpg`,
    `${prefix}/image6.jpg`,
    `${prefix}/image7.jpg`,
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
          <Image
            width={100}
            height={100}
            src={image}
            alt={`Carousel image ${index + 1}`}
            className="w-full h-full object-cover border-white border-2 border-b-0"
          />
        </div>
      ))}
      <div className="z-20 absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 group-hover:opacity-100 opacity-50 transition-opacity duration-300">
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
