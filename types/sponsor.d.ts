export type Sponsor = {
  name: string
  img: string
  tier: 'platinum' | 'gold' | 'silver' | 'bronze'
  description: string
  link?: string
  shortlink?: string
}
