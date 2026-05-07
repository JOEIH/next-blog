import PostHeader from '@/components/post_detail/PostHeader'
import { getPostDetail } from '@/lib/github'
import { notFound } from 'next/navigation'

interface PostDetailProps {
  params: Promise<{
    category?: string
    slug: string
  }>
}

export default async function PostDetail({ params }: PostDetailProps) {
  const { category, slug } = await params

  let post
  try {
    post = await getPostDetail(category || '', slug)
  } catch {
    // 글을 불러오는 중 오류가 발생하면 404 페이지로 이동
    notFound()
  }

  return (
    <div className="px-9.5 py-7.5">
      <PostHeader post={post} />
      <p>{post.content}</p>
    </div>
  )
}
