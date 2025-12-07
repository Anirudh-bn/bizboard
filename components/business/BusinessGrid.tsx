'use client'

import { useState, useMemo } from 'react'
import { Business } from '@/lib/types'
import BusinessCard from './BusinessCard'
import SearchAndFilterBar from './SearchAndFilterBar'

interface BusinessGridProps {
  businesses: Business[]
}

export default function BusinessGrid({ businesses }: BusinessGridProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = useMemo(() => {
    const uniqueCategories = new Set(businesses.map((b) => b.category))
    return Array.from(uniqueCategories).sort()
  }, [businesses])

  const filteredBusinesses = useMemo(() => {
    return businesses.filter((business) => {
      const matchesSearch =
        searchQuery === '' ||
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.category.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === 'All' || business.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [businesses, searchQuery, selectedCategory])

  return (
    <div className="space-y-8">
      <SearchAndFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />

      {filteredBusinesses.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-gray-600">No businesses found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      )}
    </div>
  )
}
