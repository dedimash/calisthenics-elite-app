import React, { useState, memo } from 'react';

const LoginForm = memo(({ onLogin, onSwitchToSignup }) => {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    const result = await onLogin(loginForm);
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
          value={loginForm.username}
          onChange={(e) => setLoginForm(prev => ({...prev, username: e.target.value}))}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
          className="w-full p-4 bg-gray-700 border-2 border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-red-500 font-semibold"
        />
      </div>
      <div>
        <input 
          type="password" 
          placeholder="PASSWORD" 
          value={loginForm.password}
          onChange={(e) => setLoginForm(prev => ({...prev, password: e.target.value}))}
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
        {isLoading ? 'ENTERING GYM...' : 'ENTER GYM'}
      </button>
      <div className="text-center">
        <button 
          onClick={onSwitchToSignup}
          className="text-gray-300 hover:text-red-400 font-semibold transition"
        >
          Need a membership? Join the elite
        </button>
      </div>
    </div>
  );
});

export default LoginForm;