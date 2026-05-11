import { PostMatter } from '@/config/types'
import { BASE_PATH, TOKEN } from '@/constants'
import matter from 'gray-matter'
import readingTime from 'reading-time'

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

/* -----글 상세 불러오기-----
1. 글 상세 api 호출
2. base64로 인코딩된 MDX 파일 디코딩
3. gray-matter로 frontmatter와 content 분리
4. reading-time으로 예상 독서 시간 계산
5. frontmatter, content, readingMinutes 반환
*/
export const getPostDetail = async (category: string, slug: string) => {
  const res = await fetch(`${BASE_PATH}/posts/${category}/${slug}/content.md`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })

  if (!res.ok) {
    const errorData = await res.text()
    console.error(res.status)
    console.error(errorData)
    throw new Error('글을 불러오는 중 오류가 발생했습니다.')
  }

  const repoFileInfo = await res.json()
  const rawMDX = Buffer.from(repoFileInfo.content, 'base64').toString('utf-8')
  // gray-matter로 frontmatter와 content 분리
  const { data, content } = matter(rawMDX)
  const graymatter = data as PostMatter

  // 글 내용에서 줄바꿈, <br>, <hr>, <img> 태그를 일관된 형식으로 변환
  const proceededContent = content
    .replace(/\r\n/g, '\n')
    .replace(/<br\s*\/?>/gi, '<br />')
    .replace(/<hr\s*\/?>/gi, '<hr />')
    .replace(/<img([^>]+[^\/])>/gi, '<img$1 />')
  const readingMinutes = Math.ceil(readingTime(proceededContent).minutes)

  return {
    ...graymatter,
    content: proceededContent,
    readingMinutes
  }
}

// 카테고리별 글 목록 불러오기
export const getPostsByCategory = async (category: string) => {
  const res = await fetch(`${BASE_PATH}/posts/${category}`, {
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

  const files = await res.json()
  return files
}
