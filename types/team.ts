// enums force this file to not be named .d.ts :(
export enum Role {
  PRESIDENT = 'President',
  VICE_PRESIDENT = 'Vice President',
  SIG_PRESIDENT = 'SIG President',
  TREASURER = 'Treasurer',
  JUNIOR_TREASURER = 'Junior Treasurer',
  SECRETARY = 'Secretary',
  HACKATHON_SECRETARY = 'Hackathon Secretary',
  TECHNICAL_SECRETARY = 'Tech Secretary',
  SOCIAL_SECRETARY = 'Social Secretary',
  SOCIAL_MEDIA_OFFICER = 'Social Media Officer',
  GRAPHIC_DESIGNER = 'Graphic Designer',
  FIRST_YEAR_REP = '1st Year Rep',
  SECOND_YEAR_REP = '2nd Year Rep',
  THIRD_YEAR_REP = '3rd Year Rep',
  FOURTH_YEAR_REP = '4th Year Rep',
  OLD_PERSON_REP = 'Old Person Rep',
  EDI_REP = 'EDI Rep',
  IMAGE_AND_PR = 'Image and PR',
  COMMUNICATION = 'Communication',
  EU_LUG = 'EU LUG',
}

const roleEmails: Partial<{ [key in Role]: string }> = {
  [Role.PRESIDENT]: 'president@comp-soc.com',
  [Role.VICE_PRESIDENT]: 'vicepresident@comp-soc.com',
  [Role.TREASURER]: 'treasurer@comp-soc.com',
  [Role.JUNIOR_TREASURER]: 'jrtreasurer@comp-soc.com',
  [Role.SECRETARY]: 'secretary@comp-soc.com',
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
}

export function getEmailForRole(role: Role): string | undefined {
  return roleEmails[role]
}

export enum LinkType {
  INSTAGRAM = 'Instagram',
  TWITTER = 'Twitter',
  GITHUB = 'GitHub',
  EMAIL = 'Email',
  WEBSITE = 'Website',
  LINKEDIN = 'LinkedIn',
}

export interface Link {
  type: LinkType
  url: string
}

export type Committee = {
  name: string
  surname: string
  role: Role
  image?: string
  links?: Link[]
  sponsorContact?: boolean
  sponsorEmail?: string
}
