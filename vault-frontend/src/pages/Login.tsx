
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const text = await response.text();
        try {
          const data = JSON.parse(text);
          throw new Error(data.error || 'Login failed');
        } catch {
          throw new Error('Server returned an unexpected response. Please check if the server is running.');
        }
      }

      const data = await response.json();
      // Store userId in localStorage
      localStorage.setItem('userId', data.user.id);
      console.log('Login successful:', data.user);
      navigate('/onboarding');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{
        backgroundImage: `url('/lovable-uploads/ab26896c-6d65-493d-a5d2-f2be74ae5eb4.png')`
      }}
    >
      <Navigation />
      
      <div className="w-full max-w-md mx-auto px-6">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          <h2 
            className="text-2xl font-semibold text-center mb-8"
            style={{
              color: '#FFD5FA',
              textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
            }}
          >
            Access Your Vault
          </h2>
          
          {error && (
            <div 
              className="mb-6 p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-center"
              style={{
                color: '#FFB0B0',
                textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                Email
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 placeholder-white/50 focus:outline-none focus:border-white/40"
                placeholder="Enter your email"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
                required
              />
            </div>
            
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                Password
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 placeholder-white/50 focus:outline-none focus:border-white/40"
                placeholder="Enter your password"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 font-semibold hover:bg-white/30 transition-all duration-200 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              style={{
                color: '#B0E0FF',
                textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
              }}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>

            <div className="text-center">
              <span 
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                Don't have an account? 
              </span>
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="font-medium underline ml-1 hover:opacity-80"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
