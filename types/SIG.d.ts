export type SIG = {
  name: string // used as ID! must be unique
  description: string
  websiteURL?: string
  icon: SIGIcon
  backgroundColor: string
  borderColor: string
  calendarURL?: string
}

export type SIGIcon = {
  src: string
  alt: string
  rounded: boolean
}
