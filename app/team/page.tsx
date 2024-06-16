import TeamList from '@/components/teamList/TeamList'
import { prefix } from '@/utils/prefix'
import { MultiplePages } from 'iconoir-react'
import Link from 'next/link'

const BigLink = () => {
  return (
    <Link href={`${prefix}/minutes`}>
      <div className="bg-foreground border-border border-2 p-4 rounded-sm text-center text-white cursor-pointer flex w-fit gap-4 items-center">
        <MultiplePages width={32} height={32} />
        <div className="flex flex-col text-left font-tomorrow">
          <h1 className="text-lg">Meeting Minutes</h1>
          <p className="text-sm opacity-70">120 meetings</p>
        </div>
      </div>
    </Link>
  )
}

export default function Team() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="font-tomorrow text-3xl mb-10">Team</h1>
      <p className="font-space-mono text-md mb-10">
        Lorem Ipsum CompSoc’s committee focuses on day-to-day organisation of
        the society. The committee holds weekly meetings in Appleton Tower.
        Elections foc committee roles happen during AGMs. Consider running!{' '}
      </p>
      <BigLink />

      <TeamList />
    </div>
  )
}
