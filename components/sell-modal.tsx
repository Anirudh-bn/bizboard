'use client'

import { useState } from 'react'
import { Store, X } from 'lucide-react'

export default function SellModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative flex flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-gray-100 w-full h-64"
      >
        <div className="mb-4 rounded-full bg-blue-50 p-4 text-blue-600 transition-colors group-hover:bg-blue-100">
          <Store className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Sell</h3>
        <p className="mt-2 text-center text-sm text-gray-500">
          List your property or business for sale
        </p>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">List Your Property</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="propertyType" className="mb-1 block text-sm font-medium text-gray-700">
                  Property Type
                </label>
                <select
                  id="propertyType"
                  className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option>Event Hall</option>
                  <option>Restaurant</option>
                  <option>Cafe</option>
                  <option>Retail Space</option>
                  <option>Office</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="mb-1 block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="e.g. Jubilee Hills, Hyderabad"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91 98765 43210"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  onClick={() => setIsOpen(false)}
                >
                  Submit Listing Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
