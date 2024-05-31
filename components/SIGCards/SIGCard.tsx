import { SIG } from '@/types/SIG'
import { prefix } from '@/utils/prefix'
import { ArrowUpRight } from 'iconoir-react'
import Image from 'next/image'
import { useState } from 'react'

const SIGCard = ({ sig }: { sig: SIG }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="p-4 bg-white rounded shadow-md hover:shadow-lg transition duration-300 border-4 w-64 h-96 hover:z-50 transform hover:scale-105"
      style={{
        backgroundColor: sig.backgroundColor,
        borderColor: sig.borderColor,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {sig.websiteURL && (
        <div
          className="absolute top-8 right-8 p-2 rounded-full transform translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 pointer-events-none user-select-none"
          style={{ opacity: hovered ? 1 : 0 }}>
          <ArrowUpRight height={32} width={32} />
        </div>
      )}
      <a href={sig.websiteURL} target="_blank" rel="noreferrer">
        <div className="flex flex-col justify-between h-full">
          <Image
            src={`${prefix}${sig.icon.src}`}
            alt={sig.icon.alt}
            className={`w-24 h-24 mb-12 ${
              sig.icon.rounded ? 'rounded-full' : 'rounded-lg'
            }`}
          />
          <h2 className="text-xl font-bold text-white">{sig.name}</h2>
          <p className=" text-white">{sig.description}</p>
        </div>
      </a>
    </div>
  )
}

export default SIGCard
