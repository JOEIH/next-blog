import Link from 'next/link'
import { Icon } from './common/Icon'

export default function Introduction() {
  return (
    <div className="flex-col py-16">
      <p className="py-1 text-6xl font-extrabold italic">JOEIH</p>
      <p className="mt-3 text-base">공부한 것들을 기록합니다.</p>
      <nav className="mt-2 flex items-center gap-2">
        <Link
          href="https://github.com/JOEIH"
          target="_blank"
          className="text-deep-gray">
          <Icon
            name="Github"
            size={18}
            className="text-deep-gray"
          />
        </Link>
        <Icon
          name="Mail"
          size={18}
          className="text-deep-gray"
        />
      </nav>
    </div>
  )
}
