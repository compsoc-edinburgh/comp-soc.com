import { getNumberOfPosts } from '@/utils/getPostsContent'
import { prefix } from '@/utils/prefix'
import { MultiplePages, PrivacyPolicy } from 'iconoir-react'
import BigLink from './BigLink'

const BigLinks = async () => {
  const numberOfPosts = await getNumberOfPosts()

  return (
    <div className="flex gap-4 flex-col sm:flex-row">
      <BigLink
        href={`${prefix}/minutes`}
        icon={<MultiplePages width={32} height={32} />}
        title="Meeting Minutes"
        description={`${numberOfPosts} meetings`}
      />
      <BigLink
        href="https://github.com/compsoc-edinburgh/constitution"
        icon={<PrivacyPolicy width={32} height={32} />}
        title="CompSoc constitution"
        description="Become a society insider"
      />
    </div>
  )
}

export default BigLinks
