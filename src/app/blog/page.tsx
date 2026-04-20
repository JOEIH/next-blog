import Introduction from '@/components/Introduction'
import { getAllPosts } from '@/lib/github'

export default async function Home() {
  const posts = await getAllPosts()
  return (
    <div>
      <Introduction />
      {JSON.stringify(posts)}
    </div>
  )
}
