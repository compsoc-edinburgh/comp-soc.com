import { prefix } from '@/utils/prefix'
import Image from 'next/image'
import React from 'react'

const GodRays: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const width = 300
  const height = 750
  const rayCount = 5

  const rays = Array.from({ length: rayCount }, (_, i) => (
    <svg
      key={i}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${i * (360 / rayCount) + 30}deg)`,
        transformOrigin: 'top center',
        position: 'absolute',
      }}
    >
      <path
        d={`M${width / 2} 0L${width} ${height}H0L${width / 2} 0Z`}
        fill="url(#gradient)"
        fillOpacity="0.2"
      />
      <defs>
        <linearGradient
          id="gradient"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ccc" />
          <stop stopColor="#00000013" offset="1" />
        </linearGradient>
      </defs>
    </svg>
  ))

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="pointer-events-none"
        style={{
          transform: `translate(-${width / 2}px, 48px)`,
          opacity: 0,
          transition: 'opacity 4s ease-in-out',
          animation: 'fadeIn 4s forwards',
        }}
      >
        <style jsx>{`
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}</style>
        {rays}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

const CompSocTitle = () => {
  return (
    <div className="flex flex-col items-center">
      <GodRays>
        <Image
          src={`${prefix}/compsoc-short.png`}
          alt="CompSoc logo"
          width={256}
          height={256}
          draggable={false}
          className="block md:hidden"
          style={{
            filter: 'drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.2))',
          }}
        />
        <Image
          src={`${prefix}/compsoc-long.png`}
          alt="CompSoc logo"
          width={516}
          height={256}
          draggable={false}
          className="hidden md:block"
          style={{
            filter: 'drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.1))',
          }}
        />
      </GodRays>
      <p className="text-gray-400 text-sm md:text-lg text-center mt-4">
        University of Edinburgh&apos;s Technology society
      </p>
    </div>
  )
}

export default CompSocTitle
