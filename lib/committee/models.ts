import { Role, LinkType } from './constants'

export interface Link {
  type: LinkType
  url: string
}

export interface Committee {
  name: string
  surname: string
  role: Role
  image?: string
  links?: Link[]
  sponsorContact?: boolean
  sponsorEmail?: string
}
