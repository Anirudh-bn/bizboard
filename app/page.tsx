import Link from 'next/link'
import { KeyRound, Building2, Store } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-slate-50 to-slate-100">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            BizBoard: Hyderabad's Premier
            <span className="block text-blue-600">Event Marketplace</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">
            The easiest way to lease, buy, or sell premium event spaces and businesses in the city.
          </p>
        </div>

        {/* Action Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {/* Lease Option */}
          <Link
            href="/explore?type=lease"
            className="group relative flex flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-gray-100 w-full h-64"
          >
            <div className="mb-4 rounded-full bg-emerald-50 p-4 text-emerald-600 transition-colors group-hover:bg-emerald-100">
              <KeyRound className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Lease</h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              Find the perfect space for your next event or business
            </p>
          </Link>

          {/* Buy Option */}
          <Link
            href="/explore?type=buy"
            className="group relative flex flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-gray-100 w-full h-64"
          >
            <div className="mb-4 rounded-full bg-purple-50 p-4 text-purple-600 transition-colors group-hover:bg-purple-100">
              <Building2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Buy</h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              Invest in established venues and commercial properties
            </p>
          </Link>

          {/* Sell Option */}
          <Link
            href="/sell"
            className="group relative flex flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-gray-100 w-full h-64"
          >
             <div className="mb-4 rounded-full bg-blue-50 p-4 text-blue-600 transition-colors group-hover:bg-blue-100">
              <Store className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Sell</h3>
            <p className="mt-2 text-center text-sm text-gray-500">
              List your property or business for sale
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}