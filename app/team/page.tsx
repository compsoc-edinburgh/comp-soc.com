import BigLinks from '@/components/BigLinks'
import TeamList from '@/components/teamList/TeamList'

export default function Team() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="font-tomorrow text-3xl mb-10">Team</h1>
      <p className="font-space-mono text-md mb-10">
        Lorem Ipsum CompSoc’s committee focuses on day-to-day organisation of
        the society. The committee holds weekly meetings in Appleton Tower.
        Elections foc committee roles happen during AGMs. Consider running!{' '}
      </p>
      <BigLinks />
      <TeamList />
    </div>
  )
}
