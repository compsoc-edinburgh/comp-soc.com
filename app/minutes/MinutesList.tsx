'use client'

import SearchPosts from '@/components/SearchPosts'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const MinuteFile = ({ slug, intro }: { slug: string; intro: string }) => {
  return (
    <Link href={`${prefix}/minutes/${slug}`}>
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
    </Link>
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
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 mt-4">
          <h1 className="font-tomorrow text-3xl">Minutes</h1>
        </div>
        <p className="text-md mb-10">
          Welcome to the CompSoc Meeting Minutes Archive. Here, you will find
          detailed records of all committee meetings dating back to 2016.
          Explore these documents to gain insights into the decisions,
          discussions, and developments that have shaped our society.
        </p>

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
        {filteredPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center space-y-4 mt-8 h-32">
            <Image
              src={`${prefix}/sad-mug.png`}
              alt="No results"
              width={150}
              height={150}
              className="m-auto my-0"
            />

            <p className="text-center font-space-mono text-lg mt-4">
              Nothing to see here {':('}
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default MinutesList
