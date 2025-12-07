import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - BizBoard',
  description: 'Learn more about BizBoard and our mission to curate exceptional local businesses.',
}

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 sm:text-5xl">
            About BizBoard
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Our Mission
              </h2>
              <p className="text-gray-700">
                BizBoard is a curated directory of exceptional local businesses. We believe in
                showcasing quality establishments that enrich their communities, from artisan cafes
                to innovative coworking spaces, wellness studios to neighborhood gems.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Privacy-First Approach
              </h2>
              <p className="text-gray-700">
                We respect privacy and believe in high-level discovery. That is why we never show
                exact street addresses, building numbers, or precise locations. Instead, we provide
                city or area information to help you discover businesses while maintaining a level
                of privacy for the establishments and their patrons.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                What We Offer
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-700">
                <li>Hand-picked, quality businesses across various categories</li>
                <li>Detailed descriptions and high-quality images</li>
                <li>Easy filtering and search to find what you need</li>
                <li>Direct contact information and website links</li>
                <li>Mobile-friendly experience for browsing on the go</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Early Version
              </h2>
              <p className="text-gray-700">
                This is an early version of BizBoard. We're continuously working to improve the
                platform and add new features. More exciting updates are coming soon, including
                enhanced search capabilities, user reviews, and expanded business categories.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Get in Touch
              </h2>
              <p className="text-gray-700">
                Have questions or want to suggest a business for our directory? We'd love to hear
                from you. Contact us and let us know how we can make BizBoard better for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
