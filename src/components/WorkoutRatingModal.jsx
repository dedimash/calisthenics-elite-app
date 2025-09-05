import React, { useState } from 'react';
import { X, Star } from 'lucide-react';

const WorkoutRatingModal = ({
  showRatingModal,
  setShowRatingModal,
  currentWorkoutForRating,
  workoutLevel,
  dailyWorkoutsByLevel,
  dailyWorkouts, // backward compat
  submitWorkoutRating,
  baseRankInfo
}) => {
  const [difficultyScore, setDifficultyScore] = useState(null); // 1 easy, 2 medium, 3 hard
  const [enjoyment, setEnjoyment] = useState(0);
  const [notes, setNotes] = useState('');

  if (!showRatingModal) return null;

  // If dailyWorkoutsByLevel/workoutLevel doesn't exist yet, fall back to old structure:
  const workoutObj =
    (dailyWorkoutsByLevel?.[workoutLevel]?.[currentWorkoutForRating]) ||
    dailyWorkouts?.[currentWorkoutForRating];

  const EmojiBtn = ({ score, label, emoji }) => (
    <button
      onClick={() => setDifficultyScore(score)}
      className={`p-4 rounded-lg border-2 text-center transition-all ${
        difficultyScore === score
          ? 'border-blue-500 bg-blue-900 text-blue-100'
          : 'border-gray-600 hover:border-blue-500 text-gray-300 bg-gray-700'
      }`}
      aria-label={label}
    >
      <div className="text-2xl mb-1">{emoji}</div>
      <div className="text-xs font-bold">{label}</div>
    </button>
  );

  const handleSubmit = () => {
    submitWorkoutRating(difficultyScore, enjoyment, notes);
    // Reset state
    setDifficultyScore(null);
    setEnjoyment(0);
    setNotes('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 border-2 border-gray-600 rounded-lg shadow-2xl max-w-md w-full p-6 relative" role="dialog" aria-labelledby="rating-title">
        <div className="flex items-center justify-between mb-6">
          <h3 id="rating-title" className="text-2xl font-black text-white tracking-wide">RATE YOUR SESSION</h3>
          <button 
            onClick={() => setShowRatingModal(false)} 
            className="text-gray-400 hover:text-red-500 transition p-1"
            aria-label="Close rating modal"
          >
            <X size={28} />
          </button>
        </div>

        <div className="mb-6">
          <h4 className="font-black text-white mb-2 tracking-wide">
            {workoutObj?.name?.toUpperCase() || String(currentWorkoutForRating).toUpperCase()}
          </h4>
          <p className="text-gray-300 text-sm font-semibold">Your feedback helps us optimize your training intensity</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-black text-white mb-3 tracking-wide">
              HOW WAS THE INTENSITY?
            </label>
            <div className="grid grid-cols-3 gap-2">
              <EmojiBtn score={1} label="EASY" emoji="😌" />
              <EmojiBtn score={2} label="MEDIUM" emoji="🙂" />
              <EmojiBtn score={3} label="HARD" emoji="🥵" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-black text-white mb-3 tracking-wide">
              ENJOYMENT RATING
            </label>
            <div className="flex justify-center space-x-1">
              {[1,2,3,4,5].map(r => (
                <button
                  key={r}
                  onClick={() => setEnjoyment(r)}
                  className={`p-3 rounded transition-all ${enjoyment >= r ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-300'}`}
                  aria-label={`Rate enjoyment ${r} out of 5 stars`}
                >
                  <Star size={32} fill={enjoyment >= r ? 'currentColor' : 'none'} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-black text-white mb-2 tracking-wide">
              ADDITIONAL NOTES (OPTIONAL)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-4 bg-gray-700 border-2 border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
              rows="3"
              placeholder="Any feedback about the exercises or session structure..."
            />
          </div>
        </div>

        <div className="flex space-x-3 mt-6">
          <button 
            onClick={() => setShowRatingModal(false)} 
            className="flex-1 px-4 py-3 border-2 border-gray-600 rounded text-gray-300 hover:bg-gray-700 transition font-bold"
          >
            SKIP
          </button>
          <button
            onClick={handleSubmit}
            disabled={!difficultyScore}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded font-black disabled:opacity-50 transition"
          >
            SUBMIT RATING
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutRatingModal;