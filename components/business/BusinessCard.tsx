import Link from 'next/link'
import Image from 'next/image'
import { Business } from '@/lib/types'

interface BusinessCardProps {
  business: Business
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const renderRating = (rating: number | null) => {
    if (!rating) return null
    return (
      <div className="flex items-center gap-1">
        <span className="text-yellow-500">★</span>
        <span className="text-sm font-medium text-gray-900">{rating.toFixed(1)}</span>
      </div>
    )
  }

  const renderPriceTier = (tier: number | null) => {
    if (!tier) return null
    return (
      <span className="text-sm font-medium text-gray-600">
        {'$'.repeat(tier)}
      </span>
    )
  }

  return (
    <Link href={`/business/${business.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
        {business.cover_image_url && (
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
            <Image
              src={business.cover_image_url}
              alt={business.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="p-4">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
              {business.name}
            </h3>
            {renderRating(business.rating)}
          </div>

          <div className="mb-2 flex items-center gap-2 text-sm">
            <span className="font-medium text-gray-700">{business.category}</span>
            {renderPriceTier(business.price_tier)}
          </div>

          <p className="mb-3 line-clamp-2 text-sm text-gray-600">
            {business.short_description}
          </p>

          {business.city_or_area && (
            <p className="text-xs text-gray-500">{business.city_or_area}</p>
          )}
        </div>
      </div>
    </Link>
  )
}
