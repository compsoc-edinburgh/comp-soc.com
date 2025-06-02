import TeamCard from './TeamCard'
import { Fragment } from 'react'
import { sortRecordKeysDesc } from '@utils/utils'
import { TEAM } from '@/lib/committee'

const TeamList = () => {
  return sortRecordKeysDesc(TEAM).map(([year, people]) => (
    <Fragment key={year}>
      <h1 className="font-space-mono text-3xl my-10">{year}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {people.map((person) => (
          <TeamCard key={`${year}-${person.role}`} person={person} />
        ))}
      </div>
    </Fragment>
  ))
}

export default TeamList
