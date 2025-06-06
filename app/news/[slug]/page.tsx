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
import NewsPage from './NewsPage'

export async function generateStaticParams() {
  const postsDirectory = path.join(__dirname, '../../../../../constants/news')

  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((post) => ({
    slug: post.replace(/\.md$/, ''),
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const postDirectory = path.join(__dirname, '../../../../../constants/news')
  const filePath = path.join(postDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')

  const { data, content } = matter(fileContents)
  const title = data.title as string

  const fileStats = fs.statSync(filePath)
  const modifiedAt = new Date(fileStats.mtime)

  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeKatex)
    .use(remarkMath)
    .use(gfm)
    .use(rehypeStringify)
    .process(content)
  const contentHtml = processedContent.toString()

  return (
    <NewsPage contentHtml={contentHtml} title={title} modifiedAt={modifiedAt} />
  )
}
