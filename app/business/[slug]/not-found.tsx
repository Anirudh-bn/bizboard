import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Business Not Found</h1>
        <p className="mb-8 text-gray-600">
          Sorry, we couldn't find the business you're looking for.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
        >
          Back to all businesses
        </Link>
      </div>
    </div>
  )
}
