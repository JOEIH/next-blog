import { Post } from '@/config/types'
import { Icon } from '../common/Icon'

export default function PostHeader({ post }: { post: Post }) {
  return (
    <header className="border-lightGray border-b pb-7.5">
      <div className="flex w-full items-center justify-start gap-1.5">
        <Icon
          name="LeftArrow"
          size={12}
          className="text-deep-gray"
        />
        <span className="text-caption text-deep-gray cursor-pointer font-light">
          이전으로
        </span>
      </div>

      <div className="mt-4 flex flex-col items-center justify-center gap-3">
        <p className="text-title font-bold">{post.title}</p>

        <div className="mt-3 flex flex-col items-center gap-2">
          <p className="text-description text-primary-blue font-semibold">
            {post.category}
          </p>
          <div className="text-deep-gray text-caption flex gap-4 font-light">
            <p className="flex items-center gap-1">
              <Icon
                name="Clock"
                size={12}
                className="text-deep-gray"
              />
              {post.readingMinutes} min
            </p>
            <p className="flex items-center gap-1">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
