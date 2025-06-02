export interface SIG {
  name: string // used as ID! must be unique
  description: string
  websiteURL?: string
  icon: SIGIcon
  backgroundColor: string
  borderColor: string
  calendarURL: string
  textColor?: string
  showCard: boolean
}

export interface SIGIcon {
  src: string
  alt: string
  rounded: string
}
