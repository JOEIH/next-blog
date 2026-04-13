import Link from 'next/link'
import { Icon } from './common/Icon'

const pageLinks = [
  { href: '/blog', label: 'HOME' },
  { href: '/about', label: 'ABOUT' }
]

export default function Header() {
  return (
    <header className="border-b-lightGray fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-10">
        <nav className="flex items-center gap-2">
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-deep-gray hover:text-primary-blue inline-flex items-center justify-center px-3 py-1.5 text-sm font-semibold transition-colors hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Icon
            name="Sun"
            size={20}
            className="text-primary cursor-pointer"
          />
          <Icon
            name="Global"
            size={20}
            className="text-primary cursor-pointer"
          />
        </div>
      </div>
    </header>
  )
}
