import { createClient } from '@/lib/supabase/server'
import { Business } from '@/lib/types'
import BusinessGrid from '@/components/business/BusinessGrid'

export const revalidate = 60 // Revalidate every 60 seconds

async function getBusinesses(): Promise<Business[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .order('is_featured', { ascending: false })
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching businesses:', error)
    return []
  }

  return data as Business[]
}

export default async function HomePage() {
  const businesses = await getBusinesses()

  return (
    <div className="bg-gray-50">
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Discover Curated Businesses
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Browse our hand-picked selection of exceptional businesses. Find your next favorite cafe, workspace, or local gem.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Privacy-focused: We only show city or area, never full addresses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BusinessGrid businesses={businesses} />
        </div>
      </section>
    </div>
  )
}
