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
  const [opacity, setOpacity] = useState(1)
  const [breadcrumbOpacity, setBreadcrumbOpacity] = useState(0) // New state

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative col-span-7 row-span-4 col-start-1 row-start-3 lg:h-[520px] h-[400px]">
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
            onMouseEnter={() => setBreadcrumbOpacity(1)}
            onMouseLeave={() => setBreadcrumbOpacity(0)}
          />
        </div>
      ))}
      <div
        className="z-20 absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
        onMouseEnter={() => setBreadcrumbOpacity(1)}
        onMouseLeave={() => setBreadcrumbOpacity(0)}
      >
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentImage ? 'bg-white' : 'bg-gray-400'
            }`}
            style={{ opacity: breadcrumbOpacity }}
            onClick={() => setCurrentImage(index)} // New code
          ></div>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
