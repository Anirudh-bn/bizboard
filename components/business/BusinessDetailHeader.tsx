import Image from 'next/image'
import { Business } from '@/lib/types'
import Tag from './Tag'

interface BusinessDetailHeaderProps {
  business: Business
}

export default function BusinessDetailHeader({ business }: BusinessDetailHeaderProps) {
  const renderRating = (rating: number | null) => {
    if (!rating) return null
    return (
      <div className="flex items-center gap-1">
        <span className="text-yellow-500 text-xl">★</span>
        <span className="text-lg font-semibold text-gray-900">{rating.toFixed(1)}</span>
      </div>
    )
  }

  const renderPriceTier = (tier: number | null) => {
    if (!tier) return null
    return (
      <span className="text-lg font-semibold text-gray-600">
        {'$'.repeat(tier)}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      {business.cover_image_url && (
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={business.cover_image_url}
            alt={business.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {business.gallery_image_urls && business.gallery_image_urls.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {business.gallery_image_urls.map((url, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={url}
                alt={`${business.name} - Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      )}

      <div>
        <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          {business.name}
        </h1>

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-lg font-semibold text-gray-700">{business.category}</span>
          {renderRating(business.rating)}
          {renderPriceTier(business.price_tier)}
        </div>

        {business.tags && business.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {business.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
