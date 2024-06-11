// enums force this file to not be named .d.ts :(
export enum Role {
  PRESIDENT = 'President',
  VICE_PRESIDENT = 'Vice President',
  SIG_PRESIDENT = 'SIG President',
  TREASURER = 'Treasurer',
  SECRETARY = 'Secretary',
  HACKATHON_SECRETARY = 'Hackathon Secretary',
  TECHNICAL_SECRETARY = 'Technical Secretary',
  SOCIAL_SECRETARY = 'Social Secretary',
  SOCIAL_MEDIA_OFFICER = 'Social Media Officer',
  GRAPHIC_DESIGNER = 'Graphic Designer',
  FIRST_YEAR_REP = '1st Year Rep',
  SECOND_YEAR_REP = '2nd Year Rep',
  THIRD_YEAR_REP = '3rd Year Rep',
  FOURTH_YEAR_REP = '4th Year Rep',
  OLD_PERSON_REP = 'Old Person Rep',
  EDI_REP = 'EDI Rep',
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
}
