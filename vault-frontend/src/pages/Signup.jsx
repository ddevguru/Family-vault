import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    phoneNumber: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      // Basic client-side validation
      if (!formData.fullName || !formData.email || !formData.username || !formData.password || !formData.phoneNumber) {
        throw new Error('All fields are required');
      }

      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      setSuccess(data.message);
      // Navigate to onboarding after 2 seconds
      setTimeout(() => {
        navigate('/onboarding');
      }, 2000);

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
        {/* Signup Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          <h2 
            className="text-2xl font-semibold text-center mb-8"
            style={{
              color: '#FFD5FA',
              textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
            }}
          >
            Create Your Vault
          </h2>

          {error && (
            <div 
              className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/30"
              style={{ color: '#FFB0B0' }}
            >
              {error}
            </div>
          )}

          {success && (
            <div 
              className="mb-4 p-3 rounded-xl bg-green-500/20 border border-green-500/30"
              style={{ color: '#B0FFB0' }}
            >
              {success}
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
                Full Name
              </label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 placeholder-white/50 focus:outline-none focus:border-white/40"
                placeholder="Enter your full name"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
                disabled={isLoading}
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
                Email
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 placeholder-white/50 focus:outline-none focus:border-white/40"
                placeholder="Enter your email"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
                disabled={isLoading}
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
                Username
              </label>
              <input 
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 placeholder-white/50 focus:outline-none focus:border-white/40"
                placeholder="Enter your username"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255,0.6)'
                }}
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255,255,255,0.6)'
                }}
              >
                Password
              </label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 placeholder-white/50 focus:outline-none focus:border-white/40"
                placeholder="Enter your password"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255,255,255,0.6)'
                }}
                disabled={isLoading}
              />
            </div>

            <div>
              <label 
                className="block text-sm font-medium mb-2" 
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255,255,255,0.6)' 
                }}
              >
                Phone Number
              </label>
              
<input 
                type="tel" 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                
className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 placeholder-white/50"

                placeholder="Enter your phone number"
                
style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255,255,255,0.6)' 
                }}
                
disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              
 disabled={isLoading}
              className="w-full py-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 font-semibold hover:bg-white/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                color: '#B0E0FF',
                textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
              }}
            >
              {isLoading ? 'Creating Vault...' : 'Sign Up'}
            </button>

            <div className="text-center">
              <span 
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                Already have an account? 
              </span>
              <button
                onClick={() => navigate('/login')}
                className="font-medium underline ml-1 hover:opacity-80"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
                disabled={isLoading}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;