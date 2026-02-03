export interface Business {
  id: string
  name: string
  slug: string
  short_description: string
  full_description: string
  category: string
  tags: string[]
  cover_image_url: string | null
  gallery_image_urls: string[]
  rating: number | null
  price_tier: number | null
  city_or_area: string | null
  website_url: string | null
  contact_email: string | null
  contact_phone: string | null
  is_featured: boolean
  created_at: string
  updated_at: string
  listing_id?: string
  micro_area?: string
  built_up_area_sqft?: number
  seating_capacity?: number
  floor_level?: string
  building_type?: string
  monthly_rent_range?: string
  deposit_amount?: string
  lease_balance_years?: number
  is_deposit_transferable?: boolean
  listing_type?: 'lease' | 'buy'
}
