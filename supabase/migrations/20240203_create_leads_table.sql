-- Create leads table
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  full_name text not null,
  phone_number text not null,
  property_type text not null,
  location_area text not null,
  status text default 'new'
);

-- Enable Row Level Security
alter table public.leads enable row level security;

-- Policy: Allow public (anon) users to insert leads
create policy "Allow public to insert leads"
on public.leads
for insert
with check (true);

-- Policy: Only authenticated users can view/update leads (for admin usage later)
create policy "Authenticated read access"
on public.leads
for select
using (auth.role() = 'authenticated');

create policy "Authenticated update access"
on public.leads
for update
using (auth.role() = 'authenticated');
