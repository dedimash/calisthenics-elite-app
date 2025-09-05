import React, { useState } from 'react';
import { X, Star, Trophy, Clock, Target, Plus, Minus } from 'lucide-react';

const SkillDetailsModal = ({ 
  selectedSkill, 
  setSelectedSkill, 
  userProgress, 
  setUserProgress,
  totalPoints 
}) => {
  const [repsToAdd, setRepsToAdd] = useState(1);

  if (!selectedSkill) return null;

  const progress = userProgress[selectedSkill.id] || { completed: 0, points: 0 };
  const isUnlocked = selectedSkill.requiredPoints <= totalPoints;
  const completionPercentage = Math.min((progress.completed / selectedSkill.requiredReps) * 100, 100);
  const isCompleted = progress.completed >= selectedSkill.requiredReps;

  const addProgress = () => {
    if (!isUnlocked) return;
    
    const newCompleted = Math.min(progress.completed + repsToAdd, selectedSkill.requiredReps);
    const newPoints = Math.floor((newCompleted / selectedSkill.requiredReps) * selectedSkill.pointValue);
    
    setUserProgress(prev => ({
      ...prev,
      [selectedSkill.id]: {
        completed: newCompleted,
        points: newPoints
      }
    }));
  };

  const removeProgress = () => {
    if (!isUnlocked || progress.completed === 0) return;
    
    const newCompleted = Math.max(progress.completed - repsToAdd, 0);
    const newPoints = Math.floor((newCompleted / selectedSkill.requiredReps) * selectedSkill.pointValue);
    
    setUserProgress(prev => ({
      ...prev,
      [selectedSkill.id]: {
        completed: newCompleted,
        points: newPoints
      }
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 border-2 border-gray-600 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-600">
          <div>
            <h2 className="text-2xl font-black text-white">{selectedSkill.name}</h2>
            <p className="text-gray-300">{selectedSkill.description}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {selectedSkill.holdTime}
              </div>
              <div className="flex items-center">
                <Target size={16} className="mr-1" />
                {selectedSkill.learningTime}
              </div>
              <div className="flex items-center">
                <Trophy size={16} className="mr-1" />
                {selectedSkill.pointValue} points
              </div>
            </div>
          </div>
          <button 
            onClick={() => setSelectedSkill(null)}
            className="p-2 text-gray-400 hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Progress Section */}
          {isUnlocked ? (
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-4">Your Progress</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Completed:</span>
                  <span className="text-white font-bold">{progress.completed} / {selectedSkill.requiredReps}</span>
                </div>
                
                <div className="w-full bg-gray-600 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-red-600 to-red-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Points Earned:</span>
                  <span className="text-yellow-400 font-bold">{progress.points} / {selectedSkill.pointValue}</span>
                </div>

                {!isCompleted && (
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-600">
                    <div className="flex items-center space-x-2">
                      <label className="text-sm text-gray-300">Add/Remove:</label>
                      <input 
                        type="number"
                        min="1"
                        max="10"
                        value={repsToAdd}
                        onChange={(e) => setRepsToAdd(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                        className="w-16 px-2 py-1 bg-gray-600 border border-gray-500 rounded text-white text-sm"
                      />
                      <span className="text-sm text-gray-400">reps</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button 
                        onClick={removeProgress}
                        disabled={progress.completed === 0}
                        className="p-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white rounded transition"
                      >
                        <Minus size={16} />
                      </button>
                      <button 
                        onClick={addProgress}
                        className="p-2 bg-green-600 hover:bg-green-700 text-white rounded transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {isCompleted && (
                  <div className="flex items-center justify-center p-3 bg-green-600 rounded-lg">
                    <Star size={20} className="mr-2 text-yellow-300" />
                    <span className="text-white font-bold">SKILL MASTERED!</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <h3 className="text-xl font-bold text-red-400 mb-2">LOCKED</h3>
              <p className="text-gray-300">
                Requires {selectedSkill.requiredPoints} total points to unlock
              </p>
              <p className="text-gray-400 text-sm mt-1">
                You currently have {totalPoints} points
              </p>
            </div>
          )}

          {/* Instructions */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-bold text-white mb-4">Instructions</h3>
            <ol className="space-y-2">
              {selectedSkill.instructions.map((instruction, index) => (
                <li key={index} className="flex text-gray-300">
                  <span className="text-red-400 font-bold mr-3">{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tips */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-bold text-white mb-2">Pro Tips</h3>
            <p className="text-gray-300">{selectedSkill.tips}</p>
          </div>

          {/* Prerequisites and Unlocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedSkill.prerequisites.length > 0 && (
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2">Prerequisites</h3>
                <div className="space-y-1">
                  {selectedSkill.prerequisites.map((prereqId) => (
                    <div key={prereqId} className="text-gray-300 text-sm">
                      • Skill ID: {prereqId}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedSkill.unlocks.length > 0 && (
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2">Unlocks</h3>
                <div className="space-y-1">
                  {selectedSkill.unlocks.map((unlockId) => (
                    <div key={unlockId} className="text-gray-300 text-sm">
                      • Skill ID: {unlockId}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center p-6 border-t border-gray-600">
          <button 
            onClick={() => setSelectedSkill(null)}
            className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded font-bold transition"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillDetailsModal;