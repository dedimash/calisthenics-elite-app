import React from 'react';
import { X, Clock, Target, CheckCircle } from 'lucide-react';

const WorkoutDetailsModal = ({ 
  selectedWorkout, 
  setSelectedWorkout, 
  completeWorkout, 
  workoutProgress, 
  workoutLevel 
}) => {
  if (!selectedWorkout) return null;

  const { day, workout } = selectedWorkout;
  const isCompleted = workoutProgress[new Date().toDateString()]?.[workoutLevel]?.includes(day);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 border-2 border-gray-600 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-600">
          <div>
            <h2 className="text-2xl font-black text-white">{workout.name}</h2>
            <p className="text-gray-300">{workout.focus}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {workout.duration}
              </div>
              <div className="flex items-center">
                <Target size={16} className="mr-1" />
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </div>
              {isCompleted && (
                <div className="flex items-center text-green-400">
                  <CheckCircle size={16} className="mr-1" />
                  Completed Today
                </div>
              )}
            </div>
          </div>
          <button 
            onClick={() => setSelectedWorkout(null)}
            className="p-2 text-gray-400 hover:text-white transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Workout Blocks */}
        <div className="p-6 space-y-6">
          {workout.blocks.map((block, blockIndex) => (
            <div key={blockIndex} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-red-400">{block.category}</h3>
                <span className="text-sm text-gray-400">
                  Rest: {block.rest}
                </span>
              </div>
              
              <div className="space-y-3">
                {block.exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex} className="bg-gray-800 rounded p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white">{exercise.name}</h4>
                      <div className="text-sm text-gray-300">
                        {exercise.sets} sets × {exercise.reps}
                      </div>
                    </div>
                    {exercise.notes && (
                      <p className="text-sm text-gray-400">{exercise.notes}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-600">
          <button 
            onClick={() => setSelectedWorkout(null)}
            className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded font-bold transition"
          >
            CLOSE
          </button>
          <button 
            onClick={() => {
              completeWorkout(day);
              setSelectedWorkout(null);
            }}
            disabled={isCompleted}
            className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded font-bold disabled:opacity-50 transition"
          >
            {isCompleted ? 'COMPLETED' : 'MARK COMPLETE'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsModal;