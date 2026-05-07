// 글 기본 메타데이터 - 옵시디언 frontmatter 구조
export interface PostMatter {
  title: string
  date: string
  thumbnail: string | null
  category: string | null
  description: string | null
  tags: string[] | null
}

// 글 상세 데이터
export interface Post extends PostMatter {
  content: string
  readingMinutes: number
}

export interface CategoryPosts {
  pathName: string
  displayName: string
  count: number
}
