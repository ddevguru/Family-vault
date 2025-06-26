
import React from 'react';
import Navigation from '../components/Navigation';

const AnalyticsReports = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/lovable-uploads/3e4259ea-a947-4db2-9086-0076a2e60ed3.png')`
      }}
    >
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl">
          {/* Analytics Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h2 
              className="text-2xl font-semibold text-center mb-8"
              style={{
                color: '#FFD5FA',
                textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
              }}
            >
              Performance Analytics
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Vault Growth Chart */}
              <div className="col-span-2 backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Vault Growth Over Time
                </h3>
                <div className="h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl text-white/40 mb-2">📈</div>
                    <div 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Interactive chart visualization
                    </div>
                    <div className="text-green-400 text-sm mt-2">+127% total growth</div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Key Metrics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Annual Return
                    </span>
                    <span className="text-green-400 font-semibold">+12.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Total Deposits
                    </span>
                    <span 
                      className="font-semibold"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      $1,250,000
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Current Value
                    </span>
                    <span 
                      className="font-semibold"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      $2,847,392
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Total Gains
                    </span>
                    <span className="text-green-400 font-semibold">$1,597,392</span>
                  </div>
                </div>
              </div>

              {/* AI Success Rate */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  AI Agent Performance
                </h3>
                <div className="text-center mb-4">
                  <div 
                    className="text-4xl font-bold mb-2"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    94.2%
                  </div>
                  <div 
                    className="text-sm"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Success Rate
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Successful Trades
                    </span>
                    <span className="text-green-400">847</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Risk Adjustments
                    </span>
                    <span className="text-blue-400">23</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Rebalances
                    </span>
                    <span className="text-yellow-400">12</span>
                  </div>
                </div>
              </div>

              {/* Asset Allocation */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Current Allocation
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span 
                        style={{
                          color: '#B0E0FF',
                          textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        Equities
                      </span>
                      <span 
                        style={{
                          color: '#B0E0FF',
                          textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        60%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span 
                        style={{
                          color: '#B0E0FF',
                          textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        Bonds
                      </span>
                      <span 
                        style={{
                          color: '#B0E0FF',
                          textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        25%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span 
                        style={{
                          color: '#B0E0FF',
                          textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        Alternative
                      </span>
                      <span 
                        style={{
                          color: '#B0E0FF',
                          textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        15%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Performance */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Recent Performance
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span 
                      className="text-sm"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      This Month
                    </span>
                    <span className="text-green-400 font-semibold">+3.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span 
                      className="text-sm"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Last 3 Months
                    </span>
                    <span className="text-green-400 font-semibold">+8.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span 
                      className="text-sm"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Year to Date
                    </span>
                    <span className="text-green-400 font-semibold">+15.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span 
                      className="text-sm"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Since Inception
                    </span>
                    <span className="text-green-400 font-semibold">+127.8%</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-8 text-center">
              <button 
                className="px-8 py-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 font-semibold hover:bg-white/30 transition-all duration-200"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                Download Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReports;
