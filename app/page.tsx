import Image from 'next/image'
import { prefix } from './utils/prefix'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={`${prefix}/logo.png`}
        alt="CompSoc logo"
        width={252}
        height={126}
      />
    </main>
  )
}
