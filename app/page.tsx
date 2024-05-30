'use client'
import JoinDiscord from '@/components/JoinDiscord'
import { useAnimatedBackground } from '@/context/AnimatedBackgroundContext'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'

export default function Home() {
  const { toggleBackground } = useAnimatedBackground()
  return (
    <main className="flex flex-col items-center p-2 gap-32 h-full">
      <Image
        src={`${prefix}/compsoc-long.png`}
        alt="Wide CompSoc logo"
        width={512}
        height={126}
        className="filter drop-shadow-white"
        style={{
          filter:
            'drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.1)) drop-shadow(0px 0px 197.8px rgba(255, 255, 255, 0.1))',
        }}
      />
      <JoinDiscord />
      <button
        onClick={toggleBackground}
        className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-lg">
        TEST: Toggle background
      </button>
    </main>
  )
}
