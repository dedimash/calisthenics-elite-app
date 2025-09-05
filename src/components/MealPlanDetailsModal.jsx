import React from 'react';
import { X, Clock, Users, ChefHat, CheckCircle, ShoppingCart } from 'lucide-react';

const MealPlanDetailsModal = ({ 
  selectedMealPlan, 
  setSelectedMealPlan, 
  availableIngredients, 
  toggleIngredient 
}) => {
  if (!selectedMealPlan) return null;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const availableCount = selectedMealPlan.ingredients.filter(ingredient => 
    availableIngredients.includes(ingredient)
  ).length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 border-2 border-gray-600 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-600">
          <div>
            <h2 className="text-2xl font-black text-white">{selectedMealPlan.name}</h2>
            <p className="text-gray-300">{selectedMealPlan.description}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm">
              <div className="flex items-center text-gray-400">
                <Clock size={16} className="mr-1" />
                {selectedMealPlan.prepTime}
              </div>
              <div className="flex items-center text-gray-400">
                <Users size={16} className="mr-1" />
                {selectedMealPlan.servings} serving{selectedMealPlan.servings > 1 ? 's' : ''}
              </div>
              <div className="flex items-center text-gray-400">
                <ChefHat size={16} className="mr-1" />
                <span className={getDifficultyColor(selectedMealPlan.difficulty)}>
                  {selectedMealPlan.difficulty}
                </span>
              </div>
              <div className={`px-2 py-1 text-xs rounded font-bold ${
                selectedMealPlan.kosherStatus === 'Fleishig' ? 'bg-red-600 text-white' :
                selectedMealPlan.kosherStatus === 'Milchig' ? 'bg-blue-600 text-white' :
                'bg-green-600 text-white'
              }`}>
                {selectedMealPlan.kosherStatus}
              </div>
            </div>
          </div>
          <button 
            onClick={() => setSelectedMealPlan(null)}
            className="p-2 text-gray-400 hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Nutrition & Availability */}
          <div className="lg:col-span-1 space-y-6">
            {/* Nutrition Info */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-4">Nutrition Facts</h3>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center">
                  <div className="font-bold text-white text-lg">{selectedMealPlan.calories}</div>
                  <div className="text-gray-400 text-xs">Calories</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-white text-lg">{selectedMealPlan.protein}g</div>
                  <div className="text-gray-400 text-xs">Protein</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-white text-lg">{selectedMealPlan.carbs}g</div>
                  <div className="text-gray-400 text-xs">Carbs</div>
                </div>
              </div>
              <div className="text-center">
                <div className="font-bold text-white text-lg">{selectedMealPlan.fat}g</div>
                <div className="text-gray-400 text-xs">Fat</div>
              </div>
            </div>

            {/* Ingredient Availability */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-3">Ingredient Availability</h3>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Available:</span>
                  <span className="text-white font-bold">{availableCount}/{selectedMealPlan.ingredients.length}</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-600 to-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(availableCount / selectedMealPlan.ingredients.length) * 100}%` }}
                  />
                </div>
              </div>
              
              {availableCount === selectedMealPlan.ingredients.length ? (
                <div className="flex items-center text-green-400 text-sm font-bold">
                  <CheckCircle size={16} className="mr-1" />
                  Ready to cook!
                </div>
              ) : (
                <div className="flex items-center text-yellow-400 text-sm">
                  <ShoppingCart size={16} className="mr-1" />
                  {selectedMealPlan.ingredients.length - availableCount} items needed
                </div>
              )}
            </div>

            {/* Tags */}
            {selectedMealPlan.tags && selectedMealPlan.tags.length > 0 && (
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMealPlan.tags.map((tag, index) => (
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
              <div className="space-y-2">
                {selectedMealPlan.ingredients.map((ingredient, index) => {
                  const isAvailable = availableIngredients.includes(ingredient);
                  return (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-2 rounded hover:bg-gray-600 transition cursor-pointer"
                      onClick={() => toggleIngredient(ingredient)}
                    >
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                          isAvailable 
                            ? 'bg-green-600 border-green-600' 
                            : 'border-gray-400'
                        }`}>
                          {isAvailable && <CheckCircle size={12} className="text-white" />}
                        </div>
                        <span className={`capitalize ${
                          isAvailable ? 'text-white' : 'text-gray-300'
                        }`}>
                          {ingredient}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleIngredient(ingredient);
                        }}
                        className={`text-xs px-2 py-1 rounded font-bold transition ${
                          isAvailable 
                            ? 'bg-red-600 hover:bg-red-700 text-white' 
                            : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                      >
                        {isAvailable ? 'Remove' : 'Add'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-4">Preparation Steps</h3>
              <ol className="space-y-3">
                {selectedMealPlan.steps.map((step, index) => (
                  <li key={index} className="flex text-gray-300">
                    <span className="text-red-400 font-bold mr-3 mt-1 min-w-[1.5rem]">{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="text-sm">Category:</span>
              <span className="px-2 py-1 bg-red-600 text-white text-sm rounded font-bold">
                {selectedMealPlan.category}
              </span>
            </div>
            <div className="text-sm text-gray-400">
              Ready: {availableCount === selectedMealPlan.ingredients.length ? 
                <span className="text-green-400 font-bold">Yes</span> : 
                <span className="text-red-400 font-bold">No</span>
              }
            </div>
          </div>
          <button 
            onClick={() => setSelectedMealPlan(null)}
            className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded font-bold transition"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealPlanDetailsModal;