'use client'

import { prefix } from '@/utils/prefix'
import { ArrowLeft, Calendar, Download, ShareIos } from 'iconoir-react'
import Link from 'next/link'

const MinutesPage = ({
  contentHtml,
  title,
  modifiedAt,
}: {
  contentHtml: string
  title: string
  modifiedAt: Date
}) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: `CompSoc Minutes - ${title}`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-csgrey/20">
        <div className="max-w-4xl mx-auto pt-20 pb-16">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Link
                href={`${prefix}/minutes`}
                className="flex items-center gap-2 text-zinc-400 hover:text-csred transition-colors font-space-mono text-sm group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Minutes
              </Link>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400 font-space-mono text-sm truncate max-w-[200px]">
                {title}
              </span>
            </div>

            <div className="border border-border  bg-foreground/50 backdrop-blur-sm p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <p className="text-csred font-space-mono text-sm font-medium mb-2 uppercase tracking-wider">
                    Meeting Minutes
                  </p>
                  <h1 className="font-tomorrow text-3xl lg:text-4xl mb-4 leading-tight">
                    {formatDate(new Date(title))}
                  </h1>

                  <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(new Date(title))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Last updated {modifiedAt.toLocaleDateString('en-GB')}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2 bg-border hover:bg-border/70  transition-colors font-space-mono text-sm"
                  >
                    <ShareIos className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-border  bg-foreground/30 backdrop-blur-sm overflow-hidden">
            <div className="p-8 lg:p-12">
              <div
                dangerouslySetInnerHTML={{ __html: contentHtml }}
                className="minutes prose prose-invert prose-lg max-w-none
                  prose-headings:font-tomorrow prose-headings:text-white prose-headings:border-b prose-headings:border-border/30 prose-headings:pb-3 prose-headings:mb-6
                  prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
                  prose-p:leading-relaxed prose-p:text-zinc-300 prose-p:mb-4
                  prose-li:text-zinc-300 prose-li:mb-2 prose-li:leading-relaxed
                  prose-ul:space-y-2 prose-ol:space-y-2
                  prose-strong:text-white prose-strong:font-semibold
                  prose-em:text-zinc-200 prose-em:italic
                  prose-code:bg-border/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-csred prose-code:text-sm
                  prose-blockquote:border-l-4 prose-blockquote:border-csred prose-blockquote:bg-border/20 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                  prose-a:text-csred prose-a:no-underline hover:prose-a:underline hover:prose-a:text-csred/80
                  prose-hr:border-border/50 prose-hr:my-8
                "
              />
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/30">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
              <div>
                <p>CompSoc Edinburgh • Committee Meeting Minutes</p>
                <p>
                  Last modified on{' '}
                  {modifiedAt.toLocaleDateString('en-GB', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href={`${prefix}/minutes`}
                  className="hover:text-csred transition-colors"
                >
                  Browse all minutes
                </Link>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                  className="hover:text-csred transition-colors"
                >
                  Back to top
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MinutesPage
