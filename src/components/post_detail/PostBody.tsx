import { Post } from '@/config/types'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
import { MdxComponents } from '../mdx'

const prettyCodeOptions: Options = {
  keepBackground: true,
  theme: {
    light: 'github-light',
    dark: 'github-dark'
  },
  defaultLang: 'plaintext'
}

export default function PostBody({ post }: { post: Post }) {
  return (
    <div className="prose max-w-none py-10">
      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
          }
        }}
        components={MdxComponents}
      />
    </div>
  )
}
