
import React from 'react';
import Navigation from '../components/Navigation';

const VaultDashboard = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/lovable-uploads/26f14d75-503f-4a13-930c-0dcb0115e5ea.png')`
      }}
    >
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-4xl">
          {/* Dashboard Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Portfolio Balance */}
              <div className="space-y-4">
                <h3 
                  className="text-xl font-semibold"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Portfolio Balance
                </h3>
                <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    $2,847,392
                  </div>
                  <div className="text-green-400 text-sm">+12.4% this month</div>
                </div>
              </div>

              {/* Vault Status */}
              <div className="space-y-4">
                <h3 
                  className="text-xl font-semibold"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Vault Status
                </h3>
                <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span 
                      className="font-medium"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Active & Protected
                    </span>
                  </div>
                  <div 
                    className="text-sm"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    All systems operational
                  </div>
                </div>
              </div>

              {/* AI Agent Actions */}
              <div className="space-y-4">
                <h3 
                  className="text-xl font-semibold"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Recent AI Actions
                </h3>
                <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6 space-y-3">
                  <div 
                    className="text-sm"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Rebalanced portfolio allocation
                  </div>
                  <div 
                    className="text-sm"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Executed risk adjustment
                  </div>
                  <div 
                    className="text-sm"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Updated beneficiary records
                  </div>
                </div>
              </div>

              {/* Fallback Timer */}
              <div className="space-y-4">
                <h3 
                  className="text-xl font-semibold"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Fallback Countdown
                </h3>
                <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                  <div 
                    className="text-2xl font-bold mb-2"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    847 days
                  </div>
                  <div 
                    className="text-sm mb-3"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Until next check-in required
                  </div>
                  <button 
                    className="px-4 py-2 rounded-lg backdrop-blur-sm bg-blue-500/20 border border-blue-300/30 text-sm hover:bg-blue-500/30 transition-all duration-200"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Reset Timer
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaultDashboard;
