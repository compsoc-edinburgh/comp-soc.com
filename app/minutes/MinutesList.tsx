'use client'

import { prefix } from '@/utils/prefix'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Search, Filter, X } from 'iconoir-react'
import Heading from '@/components/heading'

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  onFilterChange,
  yearFilter,
  availableYears,
}: {
  searchQuery: string
  setSearchQuery: (query: string) => void
  onFilterChange: (year: string) => void
  yearFilter: string
  availableYears: string[]
}) => {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="mb-8">
      <div className="relative flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search minutes, topics, or dates..."
            className="w-full pl-10 pr-4 py-3 bg-foreground border border-border  focus:outline-none focus:ring-2 focus:ring-csred/50 focus:border-csred transition-all duration-200 font-space-mono text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-3 bg-foreground border border-border  hover:bg-border/50 transition-colors font-space-mono text-sm"
        >
          <Filter className="w-4 h-4" />
          Filters
          {yearFilter && (
            <span className="bg-csred text-white px-2 py-1 rounded-full text-xs">
              {yearFilter}
            </span>
          )}
        </button>
      </div>

      {showFilters && (
        <div className="mt-4 p-4 bg-foreground border border-border ">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onFilterChange('')}
              className={`px-3 py-2  text-sm font-space-mono transition-colors ${
                !yearFilter
                  ? 'bg-csred text-white'
                  : 'bg-border text-zinc-300 hover:bg-border/70'
              }`}
            >
              All Years
            </button>
            {availableYears.map((year) => (
              <button
                key={year}
                onClick={() => onFilterChange(year)}
                className={`px-3 py-2  text-sm font-space-mono transition-colors ${
                  yearFilter === year
                    ? 'bg-csred text-white'
                    : 'bg-border text-zinc-300 hover:bg-border/70'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const ListView = ({
  filteredPosts,
  initialPostsToShow,
  setInitialPostsToShow,
}: {
  filteredPosts: {
    slug: string
    content: string
    date: string
    title: string
  }[]
  initialPostsToShow: number
  setInitialPostsToShow: (count: number) => void
}) => {
  return (
    <div>
      {filteredPosts.slice(0, initialPostsToShow).map((post, index) => (
        <Link key={post.slug} href={`${prefix}/minutes/${post.slug}`}>
          <div className="group mt-4 border border-border p-4  bg-foreground hover:bg-border/30 transition-all duration-200 hover:scale-[1.01]">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-tomorrow text-white group-hover:text-csred transition-colors">
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </h3>
                <span className="text-sm text-zinc-400 font-space-mono">
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    weekday: 'long',
                  })}
                </span>
              </div>
            </div>
            <p
              className="text-sm opacity-70 leading-relaxed mt-2"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {post.content.slice(0, 180)}...
            </p>
          </div>
        </Link>
      ))}

      {initialPostsToShow < filteredPosts.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setInitialPostsToShow(Infinity)}
            className="bg-csred hover:bg-csred/80 text-white font-space-mono px-6 py-2  transition-all duration-200 hover:scale-105"
          >
            Show all {filteredPosts.length - initialPostsToShow} more minutes
          </button>
        </div>
      )}
    </div>
  )
}

const MinutesList = ({
  posts,
}: {
  posts: {
    slug: string
    content: string
    date: string
    title: string
  }[]
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [initialPostsToShow, setInitialPostsToShow] = useState(20)
  const [yearFilter, setYearFilter] = useState('')

  const availableYears = Array.from(
    new Set(posts.map((post) => post.date.split('-')[0]))
  )
    .sort()
    .reverse()

  useEffect(() => {
    let filtered = posts

    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.date.includes(searchQuery)
      )
    }

    if (yearFilter) {
      filtered = filtered.filter((post) => post.date.startsWith(yearFilter))
    }

    setFilteredPosts(filtered)
  }, [searchQuery, yearFilter, posts])

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-10 mt-4">
        <Heading title="Meeting Minutes" />
      </div>
      <p className="mt-6 font-space-mono mb-10">
        Explore our comprehensive archive of committee meetings dating back to
        2016. Discover the decisions, discussions, and developments that shaped
        CompSoc.
      </p>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onFilterChange={setYearFilter}
        yearFilter={yearFilter}
        availableYears={availableYears}
      />

      {searchQuery || yearFilter ? (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-tomorrow">
              {searchQuery ? 'Search Results' : `${yearFilter} Minutes`}
              <span className="ml-2 text-sm font-space-mono text-zinc-400">
                ({filteredPosts.length} found)
              </span>
            </h3>
            {(searchQuery || yearFilter) && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setYearFilter('')
                }}
                className="text-sm text-csred hover:text-csred/80 font-space-mono"
              >
                Clear filters
              </button>
            )}
          </div>
          <ListView
            filteredPosts={filteredPosts}
            initialPostsToShow={initialPostsToShow}
            setInitialPostsToShow={setInitialPostsToShow}
          />
        </div>
      ) : (
        <ListView
          filteredPosts={filteredPosts}
          initialPostsToShow={initialPostsToShow}
          setInitialPostsToShow={setInitialPostsToShow}
        />
      )}

      {filteredPosts.length === 0 && (searchQuery || yearFilter) && (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-tomorrow mb-2">No minutes found</h3>
          <p className="text-zinc-400 text-center max-w-md">
            Try adjusting your search terms or filters to find what you&apos;re
            looking for.
          </p>
          <button
            onClick={() => {
              setSearchQuery('')
              setYearFilter('')
            }}
            className="mt-4 px-6 py-2 bg-csred text-white  hover:bg-csred/80 transition-colors font-space-mono"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}

export default MinutesList
