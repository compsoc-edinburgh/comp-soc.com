import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { remark } from 'remark'
import gfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import './styles.css'
import MinutesPage from './MinutesPage'

export async function generateStaticParams() {
  const postsDirectory = path.join(
    __dirname,
    '../../../../../constants/minutes'
  )

  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((post) => ({
    slug: post.replace(/\.md$/, ''),
  }))
}

// Multiple versions of this page will be statically generated
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  // Read markdown file as string
  const postDirectory = path.join(__dirname, '../../../../../constants/minutes')
  const filePath = path.join(postDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')

  const fileStats = fs.statSync(filePath)
  const modifiedAt = new Date(fileStats.mtime)

  const { content } = matter(fileContents)

  const processedContent = await remark()
    .use(rehypeStringify)
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(remarkMath)
    .use(gfm)
    .process(content)
  const contentHtml = processedContent.toString()

  return (
    <MinutesPage
      contentHtml={contentHtml}
      title={slug}
      modifiedAt={modifiedAt}
    />
  )
}
