import { Icon } from '@/components/common/Icon'
import Introduction from '@/components/Introduction'

export default async function Home() {
  return (
    <div>
      <Introduction />
      <div className="text-caption text-deep-gray flex w-full justify-end gap-3.5">
        <div className="flex cursor-pointer items-center gap-1 font-light">
          <Icon
            name="Tag"
            size={18}
          />
          <span>TAG</span>
        </div>
        <div className="flex cursor-pointer items-center gap-1 font-light">
          <Icon
            name="Grid"
            size={18}
          />
          <span>CATEGORY</span>
        </div>
      </div>
    </div>
  )
}
