import { Committee, Role, LinkType } from '@/types/team'
import { team2024 } from './team2024'
import { team2023 } from './team2023'
import { team2022 } from './team2022'
import { team2021 } from './team2021'
import { team2020 } from './team2020'
import { team2019 } from './team2019'
import { team2018 } from './team2018'
import { team2017 } from './team2017'
import { team2016 } from './team2016'
import { team2015 } from './team2015'
import { team2014 } from './team2014'
import { team2013 } from './team2013'
import { team2012 } from './team2012'
import { team2011 } from './team2011'
import { team2010 } from './team2010'
import { team2009 } from './team2009'
import { team2008 } from './team2008'

const committeesByYear: Record<string, Committee[]> = {
  2024: team2024,
  2023: team2023,
  2022: team2022,
  2021: team2021,
  2020: team2020,
  2019: team2019,
  2018: team2018,
  2017: team2017,
  2016: team2016,
  2015: team2015,
  2014: team2014,
  2013: team2013,
  2012: team2012,
  2011: team2011,
  2010: team2010,
  2009: team2009,
  2008: team2008,
}

export const latestYear = (() => {
  const years = Object.keys(committeesByYear).map(Number)
  return Math.max(...years)
})()

export const sponsorContacts = committeesByYear[latestYear].filter(
  (person) => person.sponsorContact
)

// adds CompSoc official email to committee members of the last committee
// TODO: It should not be here for sure. maybe create a new file structure to solve this?
// this script should probably be somewhere else
export function addEmailsToLatestYear(
  teams: Record<string, Committee[]>
): Record<string, Committee[]> {
  const committee = teams[latestYear]

  const updatedCommittee = committee.map((person) => {
    const email = Role.getEmailByRole(person.role)

    return {
      ...person,
      links: [
        { type: LinkType.EMAIL, url: `mailto:${email}` },
        ...(person.links ?? []),
      ],
    }
  })

  return {
    ...teams,
    [latestYear]: updatedCommittee,
  }
}

export const TEAM = addEmailsToLatestYear(committeesByYear)
