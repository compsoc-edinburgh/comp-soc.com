import { prefix } from '@/utils/prefix'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-between p-24">
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
    </main>
  )
}
