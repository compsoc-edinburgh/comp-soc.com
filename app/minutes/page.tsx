import React, { Suspense } from 'react'
import { getPostsContent } from '@/utils/getPostsContent'
import MinutesList from './MinutesList'

// Yes, all minutes are passed to client. This is fine as it wont be a lot of data.
// We do this as we want a search feature on the client side (due to static generation site).
const Page = async () => {
  const posts = await getPostsContent()
  return (
    <Suspense>
      <MinutesList posts={posts} />
    </Suspense>
  )
}

export default Page
