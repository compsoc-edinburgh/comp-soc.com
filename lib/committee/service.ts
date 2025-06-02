import { COMMITTEES_BY_YEAR } from '@constants/team'
import { Role, LinkType, ROLE_EMAILS } from './constants'
import type { Committee } from './models'

export const LATEST_YEAR = (() => {
  const years = Object.keys(COMMITTEES_BY_YEAR).map(Number)
  return Math.max(...years)
})()

export const SPONSOR_CONTACTS = COMMITTEES_BY_YEAR[LATEST_YEAR].filter(
  (person) => person.sponsorContact
)

function getEmailByRole(role: Role): Nullable<string> {
  return ROLE_EMAILS[role]
}

function addEmailsToLatestYear(
  teams: Record<string, Committee[]>
): Record<string, Committee[]> {
  const committee = teams[LATEST_YEAR]

  const updatedCommittee = committee.map((person) => {
    const email = getEmailByRole(person.role)

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
    [LATEST_YEAR]: updatedCommittee,
  }
}

export const TEAM = addEmailsToLatestYear(COMMITTEES_BY_YEAR)
