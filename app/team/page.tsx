import BigLinks from '@/components/BigLinks'
import Heading from '@/components/heading'
import { WithScrollToTop } from '@/components/ScrollToTop'
import TeamList from '@/components/teamList/TeamList'

export default function Team() {
  return (
    <WithScrollToTop>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 mt-4">
          <Heading title="Team" />
        </div>

        <p className="font-space-mono text-md mb-10">
          CompSoc’s committee focuses on day-to-day organisation of the society.
          The committee holds weekly meetings in Appleton Tower. Elections for
          committee roles happen during AGMs. Consider running!{' '}
        </p>
        <BigLinks />
        <TeamList />
        <p className="text-md my-12 text-center">
          Someone missing? Please reach out to our TechSec
        </p>
      </div>
    </WithScrollToTop>
  )
}
