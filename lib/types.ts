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
}
