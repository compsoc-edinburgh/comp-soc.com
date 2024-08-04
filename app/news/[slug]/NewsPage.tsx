'use client'

import { prefix } from '@/utils/prefix'
import { DownloadCircle } from 'iconoir-react'

const NewsPage = ({
  contentHtml,
  title,
  modifiedAt,
}: {
  contentHtml: string
  title: string
  modifiedAt: Date
}) => {
  return (
    <>
      <div className="max-w-3xl mx-auto pt-24">
        <p className="text-sm text-gray-400">News</p>
        <h1 className="font-tomorrow text-3xl text-left">{title}</h1>

        <div
          className="flex items-center justify-between bg-foreground border-border border-2 px-4 py-2 rounded-sm -mx-4 my-4"
          style={{ width: 'calc(100% + 1rem)' }}
        >
          <p className="text-md text-gray-400">
            Last modified {modifiedAt.toLocaleDateString()}
          </p>
          <button
            className="flex items-center gap-2 hover:bg-background p-2 rounded-sm"
            onClick={() => {
              window.open(`${prefix}/news/${title}.md`, '_blank')
            }}
          >
            <DownloadCircle />
            Download
            <span className="text-sm text-gray-400">.md</span>
          </button>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="news"
        />
      </div>
    </>
  )
}

export default NewsPage
