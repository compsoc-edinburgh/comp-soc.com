'use client'

import { prefix } from '@/utils/prefix'
import Link from 'next/link'

const MinutesPage = ({ contentHtml }: { contentHtml: string }) => {
  return (
    <div className="max-w-5xl mx-auto pt-32">
      <Link href={`${prefix}/minutes`}>Back</Link>
      <div
        dangerouslySetInnerHTML={{ __html: contentHtml }}
        className="minutes"
      />
    </div>
  )
}

export default MinutesPage
