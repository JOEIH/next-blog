import { compileMDX } from 'next-mdx-remote/rsc'
import { MDXComponents } from '@/components/mdx'
import { BASE_PATH, TOKEN } from '@/constants'

// 글 목록 불러오기
export const getAllPosts = async () => {
  const res = await fetch(`${BASE_PATH}/posts`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    },
    next: { revalidate: 60 }
  })

  if (!res.ok) {
    const errorData = await res.text()
    console.error(res.status)
    console.error(errorData)
    return []
  }
  const files = await res.json()

  return files
}

// 글 상세 불러오기
export const getPostDetail = async (fileName: string) => {
  const res = await fetch(`${BASE_PATH}/posts/${fileName}.md`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })

  if (!res.ok) {
    const errorData = await res.text()
    console.error(res.status)
    console.error(errorData)
    return []
  }

  const repoFileInfo = await res.json()
  const rawMDX = Buffer.from(repoFileInfo.content, 'base64').toString('utf-8')
  const { frontmatter, content } = await compileMDX({
    source: rawMDX,
    components: MDXComponents,
    options: {
      parseFrontmatter: true
    }
  })

  return { frontmatter, content }
}
