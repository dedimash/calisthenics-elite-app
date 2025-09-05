import React, { useState, memo } from 'react';

const SignupForm = memo(({ onSignup, onSwitchToLogin }) => {
  const [signupForm, setSignupForm] = useState({ username: '', password: '', confirmPassword: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    const result = await onSignup(signupForm);
    if (!result.success) {
      setError(result.error);
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <div>
        <input 
          type="text" 
          placeholder="USERNAME" 
          value={signupForm.username}
          onChange={(e) => setSignupForm(prev => ({...prev, username: e.target.value}))}
          className="w-full p-4 bg-gray-700 border-2 border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-red-500 font-semibold"
        />
      </div>

      <div>
        <input 
          type="password" 
          placeholder="PASSWORD" 
          value={signupForm.password}
          onChange={(e) => setSignupForm(prev => ({...prev, password: e.target.value}))}
          className="w-full p-4 bg-gray-700 border-2 border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-red-500 font-semibold"
        />
      </div>
      <div>
        <input 
          type="password" 
          placeholder="CONFIRM PASSWORD" 
          value={signupForm.confirmPassword}
          onChange={(e) => setSignupForm(prev => ({...prev, confirmPassword: e.target.value}))}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
          className="w-full p-4 bg-gray-700 border-2 border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-red-500 font-semibold"
        />
      </div>
      {error && (
        <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded font-semibold">
          {error}
        </div>
      )}
      <button 
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-4 rounded font-black disabled:opacity-50 transition"
      >
        {isLoading ? 'JOINING GYM...' : 'JOIN THE ELITE'}
      </button>
      <div className="text-center">
        <button 
          onClick={onSwitchToLogin}
          className="text-gray-300 hover:text-red-400 font-semibold transition"
        >
          Already elite? Sign in
        </button>
      </div>
    </div>
  );
});

export default SignupForm;