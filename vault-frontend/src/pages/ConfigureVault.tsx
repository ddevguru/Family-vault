
import React from 'react';
import Navigation from '../components/Navigation';

const ConfigureVault = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/lovable-uploads/b762dd86-1b4e-4291-b9af-7d511b698769.png')`
      }}
    >
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl">
          {/* Configuration Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h2 
              className="text-2xl font-semibold text-center mb-8"
              style={{
                color: '#FFD5FA',
                textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
              }}
            >
              Vault Configuration
            </h2>
            
            <div className="space-y-8">
              
              {/* Fallback Rules */}
              <div className="space-y-4">
                <h3 
                  className="text-lg font-medium"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Fallback Rules
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="number" 
                    placeholder="Inactive days trigger"
                    className="px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 placeholder-white/50 focus:outline-none focus:border-white/40"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  />
                  <select 
                    className="px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 focus:outline-none focus:border-white/40"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    <option value="">Fallback action</option>
                    <option value="notify">Notify beneficiaries</option>
                    <option value="partial">Partial release</option>
                    <option value="full">Full release</option>
                  </select>
                </div>
              </div>

              {/* Risk Settings */}
              <div className="space-y-4">
                <h3 
                  className="text-lg font-medium"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Risk Preferences
                </h3>
                <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span 
                      className="text-sm"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Risk Level
                    </span>
                    <span 
                      className="text-sm"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Moderate
                    </span>
                  </div>
                  <input type="range" min="1" max="10" defaultValue="5" className="w-full" />
                  <div className="flex justify-between text-xs mt-1">
                    <span style={{ color: '#B0E0FF', textShadow: '0 0 6px rgba(255, 255, 255, 0.6)' }}>Conservative</span>
                    <span style={{ color: '#B0E0FF', textShadow: '0 0 6px rgba(255, 255, 255, 0.6)' }}>Aggressive</span>
                  </div>
                </div>
              </div>

              {/* Goals */}
              <div className="space-y-4">
                <h3 
                  className="text-lg font-medium"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Investment Goals
                </h3>
                <textarea 
                  placeholder="Describe your legacy goals and objectives..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 placeholder-white/50 focus:outline-none focus:border-white/40 resize-none"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                ></textarea>
              </div>

              {/* Beneficiaries */}
              <div className="space-y-4">
                <h3 
                  className="text-lg font-medium"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Beneficiary Management
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-4">
                    <div>
                      <div 
                        className="font-medium"
                        style={{
                          color: '#B0E0FF',
                          textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        Sarah Johnson
                      </div>
                      <div 
                        className="text-sm"
                        style={{
                          color: '#B0E0FF',
                          textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        Primary beneficiary - 60%
                      </div>
                    </div>
                    <button 
                      className="px-3 py-1 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition-all duration-200"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Edit
                    </button>
                  </div>
                  <button 
                    className="w-full py-3 rounded-xl backdrop-blur-sm bg-green-500/20 border border-green-300/30 font-medium hover:bg-green-500/30 transition-all duration-200"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Add Beneficiary
                  </button>
                </div>
              </div>

              {/* Emergency Override */}
              <div className="space-y-4">
                <h3 
                  className="text-lg font-medium"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Panic Override
                </h3>
                <div className="backdrop-blur-sm bg-red-500/10 border border-red-300/30 rounded-xl p-4">
                  <button 
                    className="w-full py-3 rounded-xl backdrop-blur-sm bg-red-500/20 border border-red-300/30 font-medium hover:bg-red-500/30 transition-all duration-200"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Emergency Access Code
                  </button>
                  <div 
                    className="text-xs mt-2 text-center"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Use only in extreme emergencies
                  </div>
                </div>
              </div>

              <button 
                className="w-full py-4 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 font-semibold text-lg hover:bg-white/30 transition-all duration-200"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigureVault;
