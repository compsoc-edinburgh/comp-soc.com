import { TEAM } from '@/constants/team'
import TeamCard from './TeamCard'

const TeamList = () => {
  return Object.keys(TEAM)
    .sort()
    .reverse()
    .map((year: string) => (
      <>
        <h1 className="font-space-mono text-3xl my-10">{year}</h1>
        <div
          key={year}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 "
        >
          {TEAM[year].map((person) => (
            <TeamCard key={person.name} person={person} />
          ))}
        </div>
      </>
    ))
}

export default TeamList
