'use client'

import { createClient } from '@/lib/supabase/client'
import { Business } from '@/lib/types'
import BusinessGrid from '@/components/business/BusinessGrid'
import { Sparkles } from 'lucide-react'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

async function getBusinesses(type: string | null): Promise<Business[]> {
  const supabase = createClient()

  let query = supabase
    .from('businesses')
    .select('*')
    .order('created_at', { ascending: false })

  if (type) {
    query = query.eq('listing_type', type)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching businesses:', error)
    return []
  }

  return data as Business[]
}

function ExplorePageContent() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const [businesses, setBusinesses] = useState<Business[]>([])

  useEffect(() => {
    async function fetchData() {
      const data = await getBusinesses(type)
      setBusinesses(data)
    }
    fetchData()
  }, [type])

  const title = type === 'buy' 
    ? 'Properties for Sale' 
    : type === 'lease' 
      ? 'Properties for Lease' 
      : 'Explore Opportunities'

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Browse our verified selection of premium commercial real estate in Hyderabad.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {businesses.length > 0 ? (
            <BusinessGrid businesses={businesses} />
          ) : type === 'buy' ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-6 rounded-full bg-yellow-50 p-6 text-yellow-600">
                <Sparkles className="h-12 w-12" />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                Exclusive Buy-Side Inventory Loading...
              </h2>
              <p className="max-w-md text-gray-500 mb-8">
                We are vetting premium businesses for sale. Inventory updates every Monday.
              </p>
              <button 
                onClick={() => alert('You have joined the waitlist!')}
                className="rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                Join Waitlist
              </button>
            </div>
          ) : (
             <div className="text-center py-16 text-gray-500">
               No businesses found matching your criteria.
             </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <ExplorePageContent />
    </Suspense>
  )
}
