'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Portfolio' },
    { href: '/about', label: 'Story' },
    { href: '/resume', label: 'Resume' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-heading text-2xl font-bold text-gray-900">
            Charlie Donnelly
          </Link>

          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-gray-900 ${
                  pathname === link.href
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
