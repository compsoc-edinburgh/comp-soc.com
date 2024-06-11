import { Role } from '@/types/team'

export interface RoleProperties {
  shortName: string
  isCoreCommittee: boolean
}

export const roleProperties: Record<Role, RoleProperties> = {
  [Role.PRESIDENT]: { shortName: 'Pres', isCoreCommittee: true },
  [Role.VICE_PRESIDENT]: { shortName: 'VP', isCoreCommittee: true },
  [Role.SECRETARY]: { shortName: 'Sec', isCoreCommittee: true },
  [Role.HACKATHON_SECRETARY]: { shortName: 'Hack Sec', isCoreCommittee: true },
  [Role.SIG_PRESIDENT]: { shortName: 'SIG Pres', isCoreCommittee: false },
  [Role.TREASURER]: { shortName: 'Treas', isCoreCommittee: true },
  [Role.TECHNICAL_SECRETARY]: { shortName: 'Tech Sec', isCoreCommittee: true },
  [Role.SOCIAL_SECRETARY]: { shortName: 'Soc Sec', isCoreCommittee: true },
  [Role.SOCIAL_MEDIA_OFFICER]: { shortName: 'SMO', isCoreCommittee: false },
  [Role.GRAPHIC_DESIGNER]: { shortName: 'GD', isCoreCommittee: false },
  [Role.FIRST_YEAR_REP]: { shortName: '1st Yr Rep', isCoreCommittee: false },
  [Role.SECOND_YEAR_REP]: { shortName: '2nd Yr Rep', isCoreCommittee: false },
  [Role.THIRD_YEAR_REP]: { shortName: '3rd Yr Rep', isCoreCommittee: false },
  [Role.FOURTH_YEAR_REP]: { shortName: '4th Yr Rep', isCoreCommittee: false },
  [Role.OLD_PERSON_REP]: { shortName: 'Old Rep', isCoreCommittee: false },
  [Role.EDI_REP]: { shortName: 'EDI Rep', isCoreCommittee: false },
}
