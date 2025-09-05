import React from 'react';
import { X, Clock, Users, ChefHat, Star } from 'lucide-react';

const RecipeDetailsModal = ({ selectedRecipe, setSelectedRecipe }) => {
  if (!selectedRecipe) return null;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 border-2 border-gray-600 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-600">
          <div>
            <h2 className="text-2xl font-black text-white">{selectedRecipe.name}</h2>
            <p className="text-gray-300">{selectedRecipe.description}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm">
              <div className="flex items-center text-gray-400">
                <Clock size={16} className="mr-1" />
                {selectedRecipe.cookTime}
              </div>
              <div className="flex items-center text-gray-400">
                <Users size={16} className="mr-1" />
                {selectedRecipe.servings} serving{selectedRecipe.servings > 1 ? 's' : ''}
              </div>
              <div className="flex items-center text-gray-400">
                <ChefHat size={16} className="mr-1" />
                <span className={getDifficultyColor(selectedRecipe.difficulty)}>
                  {selectedRecipe.difficulty}
                </span>
              </div>
              <div className={`px-2 py-1 text-xs rounded font-bold ${
                selectedRecipe.kosherStatus === 'Fleishig' ? 'bg-red-600 text-white' :
                selectedRecipe.kosherStatus === 'Milchig' ? 'bg-blue-600 text-white' :
                'bg-green-600 text-white'
              }`}>
                {selectedRecipe.kosherStatus}
              </div>
            </div>
          </div>
          <button 
            onClick={() => setSelectedRecipe(null)}
            className="p-2 text-gray-400 hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Nutrition Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-700 rounded-lg p-4 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Nutrition Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Calories:</span>
                  <span className="text-white font-bold">{selectedRecipe.calories}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Protein:</span>
                  <span className="text-white font-bold">{selectedRecipe.protein}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Carbs:</span>
                  <span className="text-white font-bold">{selectedRecipe.carbs}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Fat:</span>
                  <span className="text-white font-bold">{selectedRecipe.fat}g</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            {selectedRecipe.tags && selectedRecipe.tags.length > 0 && (
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedRecipe.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-red-600 text-white text-xs rounded font-bold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Recipe Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Ingredients */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-4">Ingredients</h3>
              <ul className="space-y-2">
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="capitalize">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-4">Instructions</h3>
              <ol className="space-y-3">
                {selectedRecipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex text-gray-300">
                    <span className="text-red-400 font-bold mr-3 mt-1 min-w-[1.5rem]">{index + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tips */}
            {selectedRecipe.tips && (
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2">Chef's Tips</h3>
                <p className="text-gray-300">{selectedRecipe.tips}</p>
              </div>
            )}

            {/* Nutrition Benefits */}
            {selectedRecipe.nutritionBenefits && (
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2">Nutrition Benefits</h3>
                <p className="text-gray-300">{selectedRecipe.nutritionBenefits}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-600">
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-sm">Category:</span>
            <span className="px-2 py-1 bg-red-600 text-white text-sm rounded font-bold">
              {selectedRecipe.category}
            </span>
          </div>
          <button 
            onClick={() => setSelectedRecipe(null)}
            className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded font-bold transition"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsModal;