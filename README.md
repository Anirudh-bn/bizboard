# BizBoard

A production-ready, modern business listing web application built with Next.js and Supabase. Browse curated businesses in an Airbnb-style grid layout with responsive design for mobile and desktop.

## Features

- 🏢 Browse businesses in a responsive grid layout
- 🔍 Real-time search and category filtering
- 📱 Mobile-first responsive design (375px to desktop)
- 🔐 Privacy-focused: No exact addresses shown
- ⚡ Server-side rendering with Next.js App Router
- 🗄️ Supabase backend (Postgres + Auth + Storage)
- 🎨 Modern UI with Tailwind CSS
- 🚀 Easy deployment to Vercel

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (for admin only)
- **Deployment**: Vercel + Supabase Cloud

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works great)
- npm or yarn package manager

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd bizboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

#### Create a Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Click "New Project"
3. Fill in your project details
4. Wait for the project to be provisioned (1-2 minutes)

#### Run the Database Schema

1. In your Supabase project, go to the SQL Editor
2. Copy the contents of `supabase/schema.sql`
3. Paste and run the SQL to create the `businesses` table and policies

#### Seed Sample Data (Optional)

1. Still in the SQL Editor
2. Copy the contents of `supabase/seed.sql`
3. Paste and run the SQL to insert 10 sample businesses

#### Get Your API Credentials

1. Go to Project Settings > API
2. Copy your **Project URL** and **Anon Public Key**

### 4. Configure Environment Variables

1. Copy the example environment file:

```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

```
bizboard/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx             # Root layout with header/footer
│   ├── page.tsx               # Home page with business grid
│   ├── about/                 # About page
│   │   └── page.tsx
│   └── business/[slug]/       # Dynamic business detail pages
│       ├── page.tsx
│       └── not-found.tsx
├── components/                # Reusable React components
│   ├── layout/
│   │   ├── Header.tsx        # Site header/navbar
│   │   └── Footer.tsx        # Site footer
│   └── business/
│       ├── BusinessCard.tsx         # Individual business card
│       ├── BusinessGrid.tsx         # Grid with search/filter
│       ├── SearchAndFilterBar.tsx   # Search and category filters
│       ├── BusinessDetailHeader.tsx # Detail page header
│       └── Tag.tsx                  # Tag pill component
├── lib/
│   ├── supabase/
│   │   ├── client.ts         # Browser Supabase client
│   │   └── server.ts         # Server Supabase client
│   └── types.ts              # TypeScript types
├── supabase/
│   ├── schema.sql            # Database schema
│   └── seed.sql              # Sample data
└── public/                   # Static assets
```

## Database Schema

The app uses a single `businesses` table:

| Column              | Type        | Description                          |
|---------------------|-------------|--------------------------------------|
| id                  | uuid        | Primary key                          |
| name                | text        | Business name                        |
| slug                | text        | URL-friendly unique identifier       |
| short_description   | text        | Brief description (for cards)        |
| full_description    | text        | Full description (for detail page)   |
| category            | text        | Business category                    |
| tags                | text[]      | Array of feature tags                |
| cover_image_url     | text        | Main image URL                       |
| gallery_image_urls  | text[]      | Array of additional image URLs       |
| rating              | numeric(2,1)| Star rating (e.g., 4.5)             |
| price_tier          | smallint    | Price level (1-3)                    |
| city_or_area        | text        | High-level location (no address)     |
| website_url         | text        | Business website                     |
| contact_email       | text        | Contact email                        |
| contact_phone       | text        | Contact phone                        |
| is_featured         | boolean     | Featured business flag               |
| created_at          | timestamptz | Creation timestamp                   |
| updated_at          | timestamptz | Last update timestamp                |

### Row Level Security (RLS)

- **Read**: Public (anyone can view businesses)
- **Write**: Authenticated users only (for admin management)

## Adding New Businesses

For v1, you can add businesses directly via the Supabase dashboard:

1. Go to your Supabase project
2. Navigate to Table Editor > `businesses`
3. Click "Insert row"
4. Fill in the business details
5. Click "Save"

Make sure to:
- Create a unique `slug` (kebab-case, e.g., "blue-bottle-cafe")
- Only include `city_or_area`, never full addresses
- Use publicly accessible image URLs

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click "Deploy"

Your app will be live in minutes!

### Supabase Production Setup

Your Supabase project is already production-ready. Make sure to:

1. Review your RLS policies
2. Set up regular backups (Project Settings > Database > Backups)
3. Monitor usage (Dashboard)

## Building for Production

```bash
npm run build
npm start
```

This builds the optimized production bundle and starts the production server.

## Environment Variables

| Variable                        | Description                    | Required |
|---------------------------------|--------------------------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL`      | Your Supabase project URL      | Yes      |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key  | Yes      |

## Features Roadmap

Current version is v1. Future features may include:

- Admin dashboard for managing businesses
- User reviews and ratings
- Advanced filtering (price, rating, tags)
- Favorites/bookmarks
- Email notifications
- Enhanced search with fuzzy matching

## Privacy & Security

- No exact addresses are stored or displayed
- Only city/area information is shown
- All environment variables are properly scoped
- Supabase RLS policies protect data
- No user authentication required for browsing

## Development Notes

- **Image Hosting**: Use Supabase Storage or external CDN for business images
- **Revalidation**: Pages revalidate every 60 seconds (ISR)
- **Server Components**: Most pages use React Server Components
- **Client Components**: Search/filter logic runs on the client

## Support

For issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [Supabase documentation](https://supabase.com/docs)
- Review the code comments and types

## License

MIT License - feel free to use this for your own projects!

---

Built with ❤️ using Next.js and Supabase
