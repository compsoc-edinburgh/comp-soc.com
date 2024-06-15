'use client'

import SearchPosts from '@/components/SearchPosts'
import { useEffect, useState } from 'react'

const MinuteFile = ({ slug, intro }: { slug: string; intro: string }) => {
  return (
    <div className="border border-border p-4 rounded-sm bg-foreground">
      <h2 className="text-xl font-space-mono">{slug}</h2>
      <p
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <span className="opacity-70">{intro}</span>
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '10em',
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #353535 100%)',
          }}
        />
      </p>
    </div>
  )
}

const MinutesList = ({
  posts,
}: {
  posts: {
    slug: string
    content: string
  }[]
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [initialPostsToShow, setInitialPostsToShow] = useState(16)

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  }, [searchQuery])

  return (
    <>
      <div className="md:px-24">
        <h1 className="font-tomorrow text-3xl mb-10">Minutes</h1>
        <p className="font-space-mono text-md mb-10">
          Cupidatat laborum aliquip sint aliquip dolore. Non officia tempor
          dolore eiusmod id laboris enim exercitation dolore dolore. In aliquip
          aliquip quis ad do veniam aute. Deserunt magna commodo adipisicing
          dolore commodo proident ex tempor aute ullamco. Minim dolore nisi esse
          qui irure aliqua.
        </p>

        {posts.length === 0 ? (
          <p>No minutes yet</p>
        ) : (
          <>{filteredPosts.length} minutes</>
        )}
      </div>
      <SearchPosts setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4">
        {filteredPosts.slice(0, initialPostsToShow).map((post) => (
          <MinuteFile key={post.slug} slug={post.slug} intro={post.content} />
        ))}
      </div>
      {initialPostsToShow < filteredPosts.length && (
        <button
          onClick={() => setInitialPostsToShow(Infinity)}
          className="text-primary font-space-mono bg-foreground px-3 py-2 rounded-sm m-auto block border border-border my-4"
        >
          Show all
        </button>
      )}
    </>
  )
}

export default MinutesList
