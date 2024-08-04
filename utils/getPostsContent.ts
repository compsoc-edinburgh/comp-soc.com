import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export async function getPostsContent(type: 'minutes' | 'news') {
  const postsDirectory = path.join(process.cwd(), `./constants/${type}`)

  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames
    .map((post) => {
      const fileContents = fs.readFileSync(
        path.join(postsDirectory, post),
        'utf-8'
      )
      const { data } = matter(fileContents)
      const title = (data.title as string) || post.replace(/\.md$/, '')
      const dateMatch = post.match(/(\d{4}-\d{2}-\d{2})/)

      return {
        slug: post.replace(/\.md$/, ''),
        content: fileContents,
        title: title,
        date: dateMatch ? dateMatch[0] : '',
      }
    })
    .sort((a, b) => (a.slug < b.slug ? 1 : -1))
}

export async function getNumberOfPosts(type: 'minutes' | 'news') {
  const postsDirectory = path.join(process.cwd(), `./constants/${type}`)

  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.length
}
