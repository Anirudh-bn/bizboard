'use client'

interface SearchAndFilterBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
  categories: string[]
}

export default function SearchAndFilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: SearchAndFilterBarProps) {
  return (
    <div className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Search by name or category..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('All')}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            selectedCategory === 'All'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
