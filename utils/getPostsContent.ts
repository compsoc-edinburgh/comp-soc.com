import fs from 'fs'
import path from 'path'

export async function getPostsContent() {
  const postsDirectory = path.join(process.cwd(), './constants/minutes')

  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((post) => ({
    slug: post.replace(/\.md$/, ''),
    content: fs.readFileSync(path.join(postsDirectory, post), 'utf-8'),
  }))
}
