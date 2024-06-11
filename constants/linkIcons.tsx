import { LinkType } from '@/types/team'
import {
  Facebook,
  GithubCircle,
  Instagram,
  Internet,
  Linkedin,
  Mail,
  Twitter,
} from 'iconoir-react'

export const linkIcons: Record<LinkType, React.ReactNode> = {
  [LinkType.INSTAGRAM]: <Instagram width={18} />,
  [LinkType.LINKEDIN]: <Linkedin width={18} />,
  [LinkType.GITHUB]: <GithubCircle width={18} />,
  [LinkType.EMAIL]: <Mail width={18} />,
  [LinkType.TWITTER]: <Twitter width={18} />,
  [LinkType.WEBSITE]: <Internet width={18} />,
}
