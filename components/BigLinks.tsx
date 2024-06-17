import { prefix } from '@/utils/prefix'
import { MultiplePages, PageStar, PrivacyPolicy } from 'iconoir-react'
import Link from 'next/link'

const StyledLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link href={href}>
      <div className="bg-foreground border-border border-2 p-4 rounded-sm text-center text-white cursor-pointer flex gap-4 items-center">
        {children}
      </div>
    </Link>
  )
}

const LinkContent = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => (
  <>
    <div>{icon}</div>
    <div className="flex flex-col text-left font-tomorrow">
      <h1 className="text-lg">{title}</h1>
      <p className="text-sm opacity-70">{description}</p>
    </div>
  </>
)

const BigLinks = () => {
  return (
    <div className="flex gap-4 flex-col sm:flex-row">
      <StyledLink href={`${prefix}/minutes`}>
        <LinkContent
          icon={<MultiplePages width={32} height={32} />}
          title="Meeting Minutes"
          description="120 meetings"
        />
      </StyledLink>
      <StyledLink href="https://github.com/compsoc-edinburgh/constitution">
        <LinkContent
          icon={<PrivacyPolicy width={32} height={32} />}
          title="CompSoc constitution"
          description="Become a society insider"
        />
      </StyledLink>
      <StyledLink href="https://google.com">
        <LinkContent
          icon={<PageStar width={32} height={32} />}
          title="SIG Handbook"
          description="The fine print"
        />
      </StyledLink>
    </div>
  )
}

export default BigLinks
