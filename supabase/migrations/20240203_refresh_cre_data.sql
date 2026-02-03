-- 1. Wipe old sample data
DELETE FROM public.businesses;

-- 2. Ensure columns exist (Idempotent check)
ALTER TABLE public.businesses ADD COLUMN IF NOT EXISTS listing_id text UNIQUE;
ALTER TABLE public.businesses ADD COLUMN IF NOT EXISTS micro_area text;
ALTER TABLE public.businesses ADD COLUMN IF NOT EXISTS built_up_area_sqft integer;
ALTER TABLE public.businesses ADD COLUMN IF NOT EXISTS seating_capacity integer;
ALTER TABLE public.businesses ADD COLUMN IF NOT EXISTS floor_level text;
ALTER TABLE public.businesses ADD COLUMN IF NOT EXISTS building_type text;
ALTER TABLE public.businesses ADD COLUMN IF NOT EXISTS monthly_rent_range text;
ALTER TABLE public.businesses ADD COLUMN IF NOT EXISTS deposit_amount text;
ALTER TABLE public.businesses ADD COLUMN IF NOT EXISTS lease_balance_years numeric(3,1);
ALTER TABLE public.businesses ADD COLUMN IF NOT EXISTS is_deposit_transferable boolean DEFAULT false;
ALTER TABLE public.businesses ADD COLUMN IF NOT EXISTS listing_type text CHECK (listing_type IN ('lease', 'buy'));

-- 3. Insert specific sanitized test data
INSERT INTO public.businesses (
  name,
  slug,
  listing_id,
  micro_area,
  built_up_area_sqft,
  monthly_rent_range,
  lease_balance_years,
  listing_type,
  short_description,
  full_description,
  category,
  city_or_area,
  cover_image_url,
  tags
) VALUES (
  'Premium Cocktail House in Jubilee Hills',
  'hyd-014-premium-cocktail-house',
  'HYD-014',
  'Jubilee Hills',
  12000,
  '₹18L - ₹20L',
  7.5,
  'lease',
  'A fully equipped premium casual dining space.',
  'A fully equipped premium casual dining space with high-end interiors. Ready for immediate operations.',
  'Restaurant',
  'Jubilee Hills',
  'https://placehold.co/600x400?text=Premium+Restaurant',
  '{Restaurant,Bar,Premium}'
);
