import {
  GithubCircle,
  Instagram,
  Internet,
  Linkedin,
  Mail,
  Twitter,
} from 'iconoir-react'
import { LinkType } from '@/lib/committee'

export const ICONS_MAPPER: Record<LinkType, React.ReactNode> = {
  [LinkType.INSTAGRAM]: <Instagram width={18} />,
  [LinkType.LINKEDIN]: <Linkedin width={18} />,
  [LinkType.GITHUB]: <GithubCircle width={18} />,
  [LinkType.EMAIL]: <Mail width={18} />,
  [LinkType.TWITTER]: <Twitter width={18} />,
  [LinkType.WEBSITE]: <Internet width={18} />,
}
