export { Role } from './role'

export { LinkType } from './linkType'

import { Role } from './role'

export const ROLE_EMAILS: Record<Role, Nullable<string>> = {
  [Role.PRESIDENT]: 'president@comp-soc.com',
  [Role.VICE_PRESIDENT]: 'vicepresident@comp-soc.com',
  [Role.SIG_PRESIDENT]: null,
  [Role.TREASURER]: 'treasurer@comp-soc.com',
  [Role.JUNIOR_TREASURER]: 'jrtreasurer@comp-soc.com',
  [Role.SECRETARY]: 'secretary@comp-soc.com',
  [Role.HACKATHON_SECRETARY]: null,
  [Role.TECHNICAL_SECRETARY]: 'techsec@comp-soc.com',
  [Role.SOCIAL_SECRETARY]: 'socialsec@comp-soc.com',
  [Role.SOCIAL_MEDIA_OFFICER]: 'socialmedia@comp-soc.com',
  [Role.GRAPHIC_DESIGNER]: 'graphicdesigner@comp-soc.com',
  [Role.FIRST_YEAR_REP]: 'freshersrep@comp-soc.com',
  [Role.SECOND_YEAR_REP]: 'secondrep@comp-soc.com',
  [Role.THIRD_YEAR_REP]: 'thirdrep@comp-soc.com',
  [Role.FOURTH_YEAR_REP]: 'fourthrep@comp-soc.com',
  [Role.OLD_PERSON_REP]: 'oldrep@comp-soc.com',
  [Role.EDI_REP]: 'edirep@comp-soc.com',
  [Role.IMAGE_AND_PR]: null,
  [Role.COMMUNICATION]: null,
  [Role.EU_LUG]: null,
} as const
