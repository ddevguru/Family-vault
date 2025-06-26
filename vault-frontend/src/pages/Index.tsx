
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/lovable-uploads/0b7d1c2c-2089-4931-a2ef-3c3c09bf7771.png')`
      }}
    >
      <Navigation />

      {/* Enter Vault Button - positioned below the vault in center */}
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => navigate('/login')}
          className="px-8 py-4 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 font-semibold text-xl tracking-wide hover:scale-105"
          style={{
            color: '#B0E0FF',
            textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
          }}
        >
          Enter Vault
        </button>
      </div>
    </div>
  );
};

export default Index;