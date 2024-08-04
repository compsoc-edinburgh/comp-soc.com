import React, { Suspense } from 'react'
import { getPostsContent } from '@/utils/getPostsContent'
import NewsList from './NewsList'

// Yes, all minutes are passed to client. This is fine as it wont be a lot of data.
// We do this as we want a search feature on the client side (due to static generation site).
const Page = async () => {
  const posts = await getPostsContent('news')
  return (
    <Suspense>
      <NewsList posts={posts} />
    </Suspense>
  )
}

export default Page
