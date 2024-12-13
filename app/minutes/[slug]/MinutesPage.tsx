'use client'

import { prefix } from '@/utils/prefix'
import { DownloadCircle } from 'iconoir-react'

const MinutesPage = ({
  contentHtml,
  title,
  modifiedAt,
  prevSlug,
  nextSlug,
}: {
  contentHtml: string
  title: string
  modifiedAt: Date
  prevSlug?: string
  nextSlug?: string
}) => {
  return (
    <>
      <div className="max-w-3xl mx-auto pt-24">
        <p className="text-sm text-zinc-400">Meeting minutes</p>
        <h1 className="font-tomorrow text-3xl text-left">{title}</h1>

        <div
          className="flex items-center justify-between bg-foreground border-border border-2 px-4 py-2 rounded-sm -mx-4 my-4"
          style={{ width: 'calc(100% + 1rem)' }}
        >
          <p className="text-md text-zinc-400">
            Last modified{' '}
            {modifiedAt.toLocaleDateString('en-GB', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          </p>
          {/* <button
            className="flex items-center gap-2 hover:bg-background p-2 rounded-sm"
            onClick={() => {
              window.open(`${prefix}/minutes/${title}.md`, '_blank')
            }}
          >
            <DownloadCircle />
            Download
            <span className="text-sm text-zinc-400">.md</span>
          </button> */}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="minutes prose prose-invert"
        />
        <nav className="navigation">
          {prevSlug && (
            <a
              className="text-primary font-space-mono bg-foreground px-3 py-2 rounded-sm m-auto block border border-border my-4"
              href={`/minutes/${prevSlug}`}
            >
              Previous
            </a>
          )}
          {nextSlug && (
            <a
              className="text-primary font-space-mono bg-foreground px-3 py-2 rounded-sm m-auto block border border-border my-4"
              href={`/minutes/${nextSlug}`}
            >
              Next
            </a>
          )}
        </nav>
      </div>
    </>
  )
}

export default MinutesPage
