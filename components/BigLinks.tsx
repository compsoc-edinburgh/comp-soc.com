import { getNumberOfPosts } from '@/utils/getPostsContent'
import { prefix } from '@/utils/prefix'
import { MultiplePages, PrivacyPolicy, BookStack } from 'iconoir-react'
import BigLink from './BigLink'

const BigLinks = async () => {
  const numberOfMinutes = await getNumberOfPosts('minutes')
  const numberOfNews = await getNumberOfPosts('news')

  return (
    <div className="flex gap-4 flex-col sm:flex-row">
      <BigLink
        href={`${prefix}/minutes`}
        icon={<MultiplePages width={32} height={32} />}
        title="Meeting Minutes"
        description={`${numberOfMinutes} meetings`}
      />
      <BigLink
        href="https://github.com/compsoc-edinburgh/constitution"
        icon={<PrivacyPolicy width={32} height={32} />}
        title="CompSoc constitution"
        description="Become a society insider"
      />
      <BigLink
        href={`${prefix}/news`}
        icon={<BookStack width={32} height={32} />}
        title="CompSoc News"
        description={`${numberOfNews} posts`}
      />
    </div>
  )
}

export default BigLinks
