import Link from 'next/link'
import Image from 'next/image'
import { Business } from '@/lib/types'

interface BusinessCardProps {
  business: Business
}

export default function BusinessCard({ business }: BusinessCardProps) {
  // Use local image for HYD-014, otherwise fall back to cover_image_url
  const imageSrc = business.listing_id === 'HYD-014' 
    ? '/images/cocktail-bar.jpg' 
    : business.cover_image_url

  return (
    <Link href={`/business/${business.slug}`} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
        {imageSrc && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
            <Image
              src={imageSrc}
              alt={business.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute right-3 top-3">
              <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${
                business.listing_type === 'buy' ? 'bg-purple-600' : 'bg-emerald-600'
              }`}>
                {business.listing_type || 'Lease'}
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2">
             <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              {business.micro_area || business.city_or_area}
            </p>
            <h3 className="mt-1 text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600">
              {business.name}
            </h3>
          </div>

          <p className="mb-4 line-clamp-2 text-sm text-gray-600 flex-1">
            {business.short_description}
          </p>

          <div className="mt-auto border-t border-gray-100 pt-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-gray-500">Rent / Month</p>
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {business.monthly_rent_range || 'N/A'}
                </p>
              </div>
              <div className="border-l border-gray-100 pl-2">
                <p className="text-xs text-gray-500">Area</p>
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {business.built_up_area_sqft ? `${business.built_up_area_sqft} sqft` : 'N/A'}
                </p>
              </div>
              <div className="border-l border-gray-100 pl-2">
                <p className="text-xs text-gray-500">Lease</p>
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {business.lease_balance_years ? `${business.lease_balance_years} yrs` : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
