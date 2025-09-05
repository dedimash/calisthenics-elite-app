import React, { useState, useRef } from 'react';
import { Search, Filter, X } from 'lucide-react';

const SearchBar = ({ 
  onSearch, 
  onFilterChange, 
  categories = [], 
  stores = [],
  placeholder = "Search Israeli grocery items by name, brand, or ingredient...",
  showFilters = true 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    category: '',
    store: '',
    healthyOnly: false,
    priceRange: { min: 0, max: 1000 },
    kosherOnly: false
  });

  const timeoutRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    
    // Update input immediately for responsive typing
    setInputValue(value);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    // Set new timeout - only search after user stops typing
    timeoutRef.current = setTimeout(() => {
      if (onSearch) {
        try {
          onSearch(value);
        } catch (error) {
          console.error('Search callback error:', error);
        }
      }
      timeoutRef.current = null;
    }, 800); // 800ms delay for better typing experience
  };

  const handleClearInput = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    setInputValue('');
    
    if (onSearch) {
      try {
        onSearch('');
      } catch (error) {
        console.error('Clear search callback error:', error);
      }
    }
  };

  const handleFilterToggle = (filterType, value) => {
    const newFilters = {
      ...activeFilters,
      [filterType]: value
    };
    setActiveFilters(newFilters);
    
    if (onFilterChange) {
      try {
        onFilterChange(newFilters);
      } catch (error) {
        console.error('Filter callback error:', error);
      }
    }
  };

  const handleClearAll = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    setInputValue('');
    const resetFilters = {
      category: '',
      store: '',
      healthyOnly: false,
      priceRange: { min: 0, max: 1000 },
      kosherOnly: false
    };
    setActiveFilters(resetFilters);
    
    if (onSearch) {
      try {
        onSearch('');
      } catch (error) {
        console.error('Clear search callback error:', error);
      }
    }
    
    if (onFilterChange) {
      try {
        onFilterChange(resetFilters);
      } catch (error) {
        console.error('Clear filter callback error:', error);
      }
    }
  };

  return (
    <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-4 mb-6">
      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-12 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white placeholder-gray-400"
          autoComplete="off"
          spellCheck="false"
        />
        {inputValue && (
          <button
            onClick={handleClearInput}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setShowFilterMenu(!showFilterMenu)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
            showFilterMenu
              ? 'bg-red-600 border-red-500 text-white'
              : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:border-gray-500'
          }`}
        >
          <Filter className="w-4 h-4" />
          Filters
        </button>

        <button
          type="button"
          onClick={() => handleFilterToggle('healthyOnly', !activeFilters.healthyOnly)}
          className={`px-4 py-2 rounded-full border transition-colors ${
            activeFilters.healthyOnly
              ? 'bg-green-600 border-green-500 text-white'
              : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:border-gray-500'
          }`}
        >
          Healthy Choices
        </button>

        <button
          type="button"
          onClick={() => handleFilterToggle('kosherOnly', !activeFilters.kosherOnly)}
          className={`px-4 py-2 rounded-full border transition-colors ${
            activeFilters.kosherOnly
              ? 'bg-blue-600 border-blue-500 text-white'
              : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:border-gray-500'
          }`}
        >
          Kosher
        </button>

        <button
          type="button"
          onClick={handleClearAll}
          className="px-3 py-2 text-sm text-red-400 hover:text-red-300 underline transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Advanced Filters */}
      {showFilterMenu && (
        <div className="mt-4 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Category
              </label>
              <select
                value={activeFilters.category}
                onChange={(e) => handleFilterToggle('category', e.target.value)}
                className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Store */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Store
              </label>
              <select
                value={activeFilters.store}
                onChange={(e) => handleFilterToggle('store', e.target.value)}
                className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md text-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="">All Stores</option>
                {stores.map(store => (
                  <option key={store} value={store}>
                    {store}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Price Range (₪)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={activeFilters.priceRange.min || ''}
                  onChange={(e) => handleFilterToggle('priceRange', {
                    ...activeFilters.priceRange,
                    min: parseFloat(e.target.value) || 0
                  })}
                  className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={activeFilters.priceRange.max === 1000 ? '' : activeFilters.priceRange.max}
                  onChange={(e) => handleFilterToggle('priceRange', {
                    ...activeFilters.priceRange,
                    max: parseFloat(e.target.value) || 1000
                  })}
                  className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;