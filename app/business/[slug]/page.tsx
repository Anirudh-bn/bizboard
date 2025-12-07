import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Business } from '@/lib/types'
import BusinessDetailHeader from '@/components/business/BusinessDetailHeader'

export const revalidate = 60

async function getBusiness(slug: string): Promise<Business | null> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) {
    return null
  }

  return data as Business
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const business = await getBusiness(slug)

  if (!business) {
    return {
      title: 'Business Not Found',
    }
  }

  return {
    title: `${business.name} - BizBoard`,
    description: business.short_description,
  }
}

export default async function BusinessDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const business = await getBusiness(slug)

  if (!business) {
    notFound()
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to all businesses
        </Link>

        <div className="space-y-8">
          <BusinessDetailHeader business={business} />

          <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">About</h2>
            <div className="prose max-w-none">
              <p className="whitespace-pre-line text-gray-700">{business.full_description}</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Category</dt>
                  <dd className="mt-1 text-sm text-gray-900">{business.category}</dd>
                </div>
                {business.city_or_area && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Location</dt>
                    <dd className="mt-1 text-sm text-gray-900">{business.city_or_area}</dd>
                  </div>
                )}
                {business.tags && business.tags.length > 0 && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Features</dt>
                    <dd className="mt-1 text-sm text-gray-900">{business.tags.join(', ')}</dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Contact</h3>
              <dl className="space-y-3">
                {business.website_url && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Website</dt>
                    <dd className="mt-1">
                      <a
                        href={business.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        Visit Website
                      </a>
                    </dd>
                  </div>
                )}
                {business.contact_email && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${business.contact_email}`}
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {business.contact_email}
                      </a>
                    </dd>
                  </div>
                )}
                {business.contact_phone && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${business.contact_phone}`}
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {business.contact_phone}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
