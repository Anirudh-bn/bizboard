-- Add Commercial Real Estate fields to businesses table
ALTER TABLE public.businesses
ADD COLUMN listing_id text UNIQUE,
ADD COLUMN micro_area text,
ADD COLUMN built_up_area_sqft integer,
ADD COLUMN seating_capacity integer,
ADD COLUMN floor_level text,
ADD COLUMN building_type text,
ADD COLUMN monthly_rent_range text,
ADD COLUMN deposit_amount text,
ADD COLUMN lease_balance_years numeric(3,1),
ADD COLUMN is_deposit_transferable boolean DEFAULT false,
ADD COLUMN listing_type text CHECK (listing_type IN ('lease', 'buy'));

-- Create index for listing_type to help with filtering
CREATE INDEX businesses_listing_type_idx ON public.businesses(listing_type);

-- Create index for listing_id for faster lookups
CREATE INDEX businesses_listing_id_idx ON public.businesses(listing_id);
