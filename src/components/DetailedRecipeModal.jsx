import React, { memo } from 'react';
import { X, Clock, Users, ChefHat, Utensils, Target } from 'lucide-react';

const DetailedRecipeModal = memo(({ 
  selectedDetailedRecipe, 
  setSelectedDetailedRecipe 
}) => {
  if (!selectedDetailedRecipe) return null;

  const recipe = selectedDetailedRecipe;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-600 text-white';
      case 'Medium': return 'bg-yellow-600 text-white';
      case 'Hard': return 'bg-red-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-800 border-b border-gray-600 p-6 flex items-center justify-between">
          <div className="flex-1 pr-4">
            <h2 className="text-3xl font-black text-white mb-2">{recipe.name}</h2>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-red-400 font-semibold">{recipe.category}</span>
              <span className={`px-2 py-1 rounded font-bold text-xs ${getDifficultyColor(recipe.difficulty)}`}>
                {recipe.difficulty}
              </span>
            </div>
          </div>
          
          <button
            onClick={() => setSelectedDetailedRecipe(null)}
            className="text-gray-400 hover:text-white p-2"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Description */}
          <div className="bg-gray-700 rounded-lg p-4">
            <p className="text-gray-200 text-lg leading-relaxed">{recipe.description}</p>
          </div>

          {/* Recipe Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <Clock size={24} className="text-blue-400 mx-auto mb-2" />
              <div className="text-sm text-gray-400">Prep Time</div>
              <div className="font-bold text-white">{recipe.prepTime}</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <ChefHat size={24} className="text-orange-400 mx-auto mb-2" />
              <div className="text-sm text-gray-400">Cook Time</div>
              <div className="font-bold text-white">{recipe.cookTime}</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <Users size={24} className="text-green-400 mx-auto mb-2" />
              <div className="text-sm text-gray-400">Servings</div>
              <div className="font-bold text-white">{recipe.servings}</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <Target size={24} className="text-purple-400 mx-auto mb-2" />
              <div className="text-sm text-gray-400">Difficulty</div>
              <div className="font-bold text-white">{recipe.difficulty}</div>
            </div>
          </div>

          {/* Nutrition Info */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg p-4">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center">
              <Utensils size={20} className="mr-2" />
              Nutrition Per Serving
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-black text-white">{recipe.calories}</div>
                <div className="text-blue-200 text-sm">Calories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">{recipe.protein}g</div>
                <div className="text-blue-200 text-sm">Protein</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">{recipe.carbs}g</div>
                <div className="text-blue-200 text-sm">Carbs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">{recipe.fiber}g</div>
                <div className="text-blue-200 text-sm">Fiber</div>
              </div>
            </div>
          </div>

          {/* Main Content - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Ingredients */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-4 border-b border-gray-600 pb-2">
                📝 Ingredients ({recipe.ingredients.length})
              </h3>
              <div className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 rounded hover:bg-gray-600 transition">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">{ingredient.amount}</div>
                      <div className="text-gray-200">{ingredient.item}</div>
                      {ingredient.notes && (
                        <div className="text-gray-400 text-sm italic">({ingredient.notes})</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-4 border-b border-gray-600 pb-2">
                👨‍🍳 Instructions
              </h3>
              <div className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <div className="text-gray-200 leading-relaxed flex-1 pt-1">
                      {instruction}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tips Section */}
          {recipe.tips && recipe.tips.length > 0 && (
            <div className="bg-gradient-to-r from-yellow-800 to-yellow-900 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                💡 Pro Tips
              </h3>
              <div className="space-y-3">
                {recipe.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-yellow-400 flex-shrink-0 mt-1">💡</div>
                    <div className="text-yellow-100 leading-relaxed">{tip}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Variations Section */}
          {recipe.variations && recipe.variations.length > 0 && (
            <div className="bg-gradient-to-r from-purple-800 to-purple-900 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                🔄 Variations
              </h3>
              <div className="space-y-3">
                {recipe.variations.map((variation, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-purple-400 flex-shrink-0 mt-1">🔄</div>
                    <div className="text-purple-100 leading-relaxed">{variation}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-600">
            <button
              onClick={() => setSelectedDetailedRecipe(null)}
              className="flex-1 bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-bold transition"
            >
              CLOSE
            </button>
            <button
              onClick={() => {
                const recipeText = `${recipe.name}\n\nIngredients:\n${recipe.ingredients.map(ing => `• ${ing.amount} ${ing.item}${ing.notes ? ` (${ing.notes})` : ''}`).join('\n')}\n\nInstructions:\n${recipe.instructions.map((inst, i) => `${i+1}. ${inst}`).join('\n')}`;
                navigator.clipboard.writeText(recipeText);
                // Could add a toast notification here
              }}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition"
            >
              📋 COPY RECIPE
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: recipe.name,
                    text: recipe.description,
                    url: window.location.href
                  });
                }
              }}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition"
            >
              📤 SHARE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DetailedRecipeModal;
