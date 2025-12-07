-- Create businesses table
create table public.businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  short_description text not null,
  full_description text not null,
  category text not null,
  tags text[] default '{}',
  cover_image_url text,
  gallery_image_urls text[] default '{}',
  rating numeric(2,1),
  price_tier smallint,
  city_or_area text,
  website_url text,
  contact_email text,
  contact_phone text,
  is_featured boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.businesses enable row level security;

-- Policy: Public read access for everyone
create policy "Public read access"
on public.businesses
for select
using (true);

-- Policy: Authenticated users can insert, update, and delete
create policy "Authenticated write access"
on public.businesses
for insert
with check (auth.role() = 'authenticated');

create policy "Authenticated update access"
on public.businesses
for update
using (auth.role() = 'authenticated');

create policy "Authenticated delete access"
on public.businesses
for delete
using (auth.role() = 'authenticated');

-- Create index on slug for faster lookups
create index businesses_slug_idx on public.businesses(slug);

-- Create index on category for filtering
create index businesses_category_idx on public.businesses(category);

-- Create index on is_featured for sorting
create index businesses_is_featured_idx on public.businesses(is_featured);

-- Optional: Add trigger to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_businesses_updated_at
before update on public.businesses
for each row
execute function update_updated_at_column();
