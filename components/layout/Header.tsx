import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900 sm:text-2xl">
            BizBoard
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 sm:text-base"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 sm:text-base"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
