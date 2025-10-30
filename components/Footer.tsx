import Link from 'next/link'

const Footer = () => {
  const links = [
    { href: '/', label: 'Portfolio' },
    { href: '/about', label: 'Story' },
    { href: '/resume', label: 'Resume' },
  ]

  const socialLinks = [
    { href: 'https://linkedin.com/in/charlesdonnelly', label: 'LinkedIn' },
    { href: 'https://github.com/charlesdonnelly', label: 'GitHub' },
    { href: 'mailto:hello@charliedonnelly.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
              Charlie Donnelly
            </h3>
            <p className="text-gray-600 mb-4">
              A passionate designer and developer creating beautiful digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Navigation</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Connect</h4>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Charlie Donnelly. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
