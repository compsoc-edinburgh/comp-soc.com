'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams, usePathname } from 'next/navigation'
import { Search } from 'iconoir-react'

const SearchPosts = ({
  placeholder = 'Search...',
  setSearchQuery,
}: {
  placeholder?: string
  setSearchQuery: any
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    setSearchQuery(term)

    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="relative flex flex-1 md:w-1/3">
      <Search className="absolute left-2 top-1/2 transform -translate-y-5  text-gray-500" />
      <input
        className="peer block w-full rounded-sm border border-border py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 bg-foreground mb-4"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        value={searchTerm}
      />
    </div>
  )
}

export default SearchPosts
