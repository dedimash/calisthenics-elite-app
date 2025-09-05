import React, { useState, useRef } from 'react';
import { Search, Clock, Users, ChefHat, Filter, X, Star } from 'lucide-react';

const RecipeSearchBar = ({ 
  onSearch, 
  onFilterChange, 
  categories = [], 
  placeholder = "Search fitness recipes by name, ingredients, cuisine, or nutrition goals...",
  showFilters = true 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    category: '',
    difficulty: '',
    maxPrepTime: 60,
    nutritionGoal: '',
    tags: []
  });

  const timeoutRef = useRef(null);

  const difficultyLevels = ['Easy', 'Medium', 'Hard'];
  const nutritionGoals = [
    { value: 'high-protein', label: 'High Protein (25g+)' },
    { value: 'low-carb', label: 'Low Carb (20g or less)' },
    { value: 'high-fiber', label: 'High Fiber (8g+)' },
    { value: 'low-calorie', label: 'Low Calorie (300 or less)' }
  ];

  const commonTags = [
    'High-Protein', 'Post-Workout', 'Pre-Workout', 'Make-Ahead', 
    'Quick', 'Meal Prep', 'Vegan', 'Gluten-Free', 'Recovery',
    'Portable', 'One-Pan', 'No-Bake', 'Mediterranean', 'Asian'
  ];

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
          console.error('Recipe search callback error:', error);
        }
      }
      timeoutRef.current = null;
    }, 800);
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
        console.error('Clear recipe search callback error:', error);
      }
    }
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...activeFilters,
      [filterType]: value
    };
    setActiveFilters(newFilters);
    
    if (onFilterChange) {
      try {
        onFilterChange(newFilters);
      } catch (error) {
        console.error('Recipe filter callback error:', error);
      }
    }
  };

  const handleTagToggle = (tag) => {
    const newTags = activeFilters.tags.includes(tag)
      ? activeFilters.tags.filter(t => t !== tag)
      : [...activeFilters.tags, tag];
    
    handleFilterChange('tags', newTags);
  };

  const clearAllFilters = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    setInputValue('');
    const resetFilters = {
      category: '',
      difficulty: '',
      maxPrepTime: 60,
      nutritionGoal: '',
      tags: []
    };
    setActiveFilters(resetFilters);
    
    if (onSearch) {
      try {
        onSearch('');
      } catch (error) {
        console.error('Clear recipe search callback error:', error);
      }
    }
    
    if (onFilterChange) {
      try {
        onFilterChange(resetFilters);
      } catch (error) {
        console.error('Clear recipe filter callback error:', error);
      }
    }
  };

  const activeFilterCount = Object.values(activeFilters).filter(value => {
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'string') return value !== '';
    if (typeof value === 'number') return value < 60;
    return false;
  }).length;

  return (
    <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-4 mb-6">
      {/* Main Search Bar */}
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

      {/* Filter Controls */}
      {showFilters && (
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setShowFilterMenu(!showFilterMenu)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
              showFilterMenu || activeFilterCount > 0
                ? 'bg-red-600 border-red-500 text-white'
                : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <Filter className="w-4 h-4" />
            Recipe Filters
            {activeFilterCount > 0 && (
              <span className="bg-white text-red-600 text-xs rounded-full px-2 py-1 min-w-[1.5rem] text-center font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Quick Filter Chips */}
          <button
            type="button"
            onClick={() => handleFilterChange('difficulty', activeFilters.difficulty === 'Easy' ? '' : 'Easy')}
            className={`flex items-center gap-1 px-4 py-2 rounded-full border transition-colors ${
              activeFilters.difficulty === 'Easy'
                ? 'bg-blue-600 border-blue-500 text-white'
                : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <ChefHat className="w-4 h-4" />
            Easy Recipes
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange('maxPrepTime', activeFilters.maxPrepTime === 15 ? 60 : 15)}
            className={`flex items-center gap-1 px-4 py-2 rounded-full border transition-colors ${
              activeFilters.maxPrepTime === 15
                ? 'bg-orange-600 border-orange-500 text-white'
                : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <Clock className="w-4 h-4" />
            Quick (15 min)
          </button>

          <button
            type="button"
            onClick={() => handleFilterChange('nutritionGoal', activeFilters.nutritionGoal === 'high-protein' ? '' : 'high-protein')}
            className={`flex items-center gap-1 px-4 py-2 rounded-full border transition-colors ${
              activeFilters.nutritionGoal === 'high-protein'
                ? 'bg-purple-600 border-purple-500 text-white'
                : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <Star className="w-4 h-4" />
            High Protein
          </button>

          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="px-3 py-2 text-sm text-red-400 hover:text-red-300 underline transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
      )}

      {/* Expanded Filter Menu */}
      {showFilterMenu && (
        <div className="mt-4 p-4 bg-gray-700 rounded-lg border border-gray-600">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Recipe Category
                </label>
                <select
                  value={activeFilters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Difficulty Level
                </label>
                <select
                  value={activeFilters.difficulty}
                  onChange={(e) => handleFilterChange('difficulty', e.target.value)}
                  className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white"
                >
                  <option value="">Any Difficulty</option>
                  {difficultyLevels.map(level => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Middle Column */}
            <div className="space-y-4">
              {/* Prep Time Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Max Prep Time: {activeFilters.maxPrepTime} minutes
                </label>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  value={activeFilters.maxPrepTime}
                  onChange={(e) => handleFilterChange('maxPrepTime', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>5 min</span>
                  <span>30 min</span>
                  <span>60 min</span>
                </div>
              </div>

              {/* Nutrition Goal Filter */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Nutrition Focus
                </label>
                <select
                  value={activeFilters.nutritionGoal}
                  onChange={(e) => handleFilterChange('nutritionGoal', e.target.value)}
                  className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 text-white"
                >
                  <option value="">No Specific Goal</option>
                  {nutritionGoals.map(goal => (
                    <option key={goal.value} value={goal.value}>
                      {goal.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Column - Tags */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Recipe Tags
              </label>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                {commonTags.map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleTagToggle(tag)}
                    className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                      activeFilters.tags.includes(tag)
                        ? 'bg-green-600 border-green-500 text-white'
                        : 'bg-gray-600 border-gray-500 text-gray-300 hover:bg-gray-500'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {activeFilterCount > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {activeFilters.category && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-600 text-white text-sm rounded-full">
              Category: {activeFilters.category}
              <button
                type="button"
                onClick={() => handleFilterChange('category', '')}
                className="text-green-200 hover:text-white transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          
          {activeFilters.difficulty && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
              {activeFilters.difficulty} Level
              <button
                type="button"
                onClick={() => handleFilterChange('difficulty', '')}
                className="text-blue-200 hover:text-white transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          
          {activeFilters.maxPrepTime < 60 && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-600 text-white text-sm rounded-full">
              Under {activeFilters.maxPrepTime} minutes
              <button
                type="button"
                onClick={() => handleFilterChange('maxPrepTime', 60)}
                className="text-orange-200 hover:text-white transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          
          {activeFilters.nutritionGoal && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
              {nutritionGoals.find(g => g.value === activeFilters.nutritionGoal)?.label}
              <button
                type="button"
                onClick={() => handleFilterChange('nutritionGoal', '')}
                className="text-purple-200 hover:text-white transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          
          {activeFilters.tags.map(tag => (
            <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-600 text-white text-sm rounded-full">
              {tag}
              <button
                type="button"
                onClick={() => handleTagToggle(tag)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeSearchBar;