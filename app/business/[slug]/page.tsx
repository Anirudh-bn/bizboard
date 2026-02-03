import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Business } from '@/lib/types'
import { Map, MapPin, Utensils, Maximize, CheckCircle2, Calendar, IndianRupee } from 'lucide-react'

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
    <div className="bg-white min-h-screen pb-12">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80"
          alt={business.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center text-white/90 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {business.micro_area || business.city_or_area}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  {business.name}
                </h1>
                <p className="text-lg text-gray-200 max-w-2xl">
                  {business.short_description}
                </p>
              </div>
              
              <div className="flex gap-2">
                 <span className={`px-4 py-2 rounded-lg font-bold uppercase tracking-wide text-sm ${
                    business.listing_type === 'buy' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-emerald-600 text-white'
                  }`}>
                    {business.listing_type || 'Lease'}
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Bar */}
      <div className="border-b border-gray-200 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-x border-gray-200">
            {/* City */}
            <div className="p-6 flex flex-col items-center justify-center text-center group transition-colors hover:bg-white">
              <div className="flex items-center text-slate-500 mb-2">
                <Map className="h-5 w-5 mr-2" />
                <span className="text-sm font-semibold uppercase tracking-wider">City</span>
              </div>
              <span className="text-xl font-bold text-slate-900">
                {business.city_or_area || 'Hyderabad'}
              </span>
            </div>

            {/* Micro-Area */}
            <div className="p-6 flex flex-col items-center justify-center text-center group transition-colors hover:bg-white">
              <div className="flex items-center text-slate-500 mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-sm font-semibold uppercase tracking-wider">Area</span>
              </div>
              <span className="text-xl font-bold text-slate-900">
                {business.micro_area || 'N/A'}
              </span>
            </div>

            {/* Type */}
            <div className="p-6 flex flex-col items-center justify-center text-center group transition-colors hover:bg-white">
              <div className="flex items-center text-slate-500 mb-2">
                <Utensils className="h-5 w-5 mr-2" />
                <span className="text-sm font-semibold uppercase tracking-wider">Type</span>
              </div>
              <span className="text-xl font-bold text-slate-900">
                {business.category || 'N/A'}
              </span>
            </div>

            {/* Area */}
            <div className="p-6 flex flex-col items-center justify-center text-center group transition-colors hover:bg-white">
              <div className="flex items-center text-slate-500 mb-2">
                <Maximize className="h-5 w-5 mr-2" />
                <span className="text-sm font-semibold uppercase tracking-wider">Size</span>
              </div>
              <span className="text-xl font-bold text-slate-900">
                {business.built_up_area_sqft ? `${business.built_up_area_sqft.toLocaleString()} sqft` : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Overview</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="whitespace-pre-line text-gray-600 leading-relaxed">
                  {business.full_description}
                </p>
              </div>
            </div>

            {business.tags && business.tags.length > 0 && (
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Features & Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {business.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Facts Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
              <div className="p-6 bg-slate-50 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900">Key Facts</h3>
              </div>
              
              <div className="p-6 space-y-6">
                <dl className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <dt className="text-gray-500">Listing ID</dt>
                    <dd className="font-mono text-sm font-semibold text-gray-900">{business.listing_id || 'N/A'}</dd>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <dt className="text-gray-500">Seating Capacity</dt>
                    <dd className="font-semibold text-gray-900">{business.seating_capacity || 'N/A'} Pax</dd>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <dt className="text-gray-500">Floor Level</dt>
                    <dd className="font-semibold text-gray-900">{business.floor_level || 'N/A'}</dd>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <dt className="text-gray-500">Building Type</dt>
                    <dd className="font-semibold text-gray-900">{business.building_type || 'N/A'}</dd>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <dt className="text-gray-500">Transferable Deposit</dt>
                    <dd className="font-semibold text-gray-900">
                      {business.is_deposit_transferable ? 'Yes' : 'No'}
                    </dd>
                  </div>
                </dl>

                <div className="pt-2">
                  <button className="w-full bg-blue-600 text-white rounded-lg py-4 font-bold text-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-200">
                    Contact Seller
                  </button>
                  <p className="mt-3 text-center text-xs text-gray-400">
                    Reference ID: {business.listing_id || 'N/A'} when calling.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}