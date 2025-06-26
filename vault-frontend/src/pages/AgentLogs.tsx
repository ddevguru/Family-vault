
import React from 'react';
import Navigation from '../components/Navigation';

const AgentLogs = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/lovable-uploads/eff03a54-caec-418e-a749-f7336ec9c735.png')`
      }}
    >
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl">
          {/* Agent Logs Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl h-[600px]">
            <h2 
              className="text-2xl font-semibold text-center mb-8"
              style={{
                color: '#FFD5FA',
                textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
              }}
            >
              AI Agent Activity
            </h2>
            
            <div className="h-full overflow-y-auto space-y-4 pr-2">
              
              {/* Log Entry */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <span 
                    className="font-medium"
                    style={{
                      color: '#FFD5FA',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Portfolio Rebalancing
                  </span>
                  <span 
                    className="text-sm"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    2 hours ago
                  </span>
                </div>
                <p 
                  className="text-sm mb-2"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  AI detected market volatility and automatically rebalanced portfolio allocation. 
                  Moved 5% from high-risk to stable assets.
                </p>
                <div className="text-green-400 text-xs">✓ Successful</div>
              </div>

              {/* Log Entry */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <span 
                    className="font-medium"
                    style={{
                      color: '#FFD5FA',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Beneficiary Update
                  </span>
                  <span 
                    className="text-sm"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    1 day ago
                  </span>
                </div>
                <p 
                  className="text-sm mb-2"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Processed beneficiary information update. Verified new contact details 
                  and updated allocation percentages.
                </p>
                <div className="text-green-400 text-xs">✓ Verified</div>
              </div>

              {/* Log Entry */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <span 
                    className="font-medium"
                    style={{
                      color: '#FFD5FA',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Risk Assessment
                  </span>
                  <span 
                    className="text-sm"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    3 days ago
                  </span>
                </div>
                <p 
                  className="text-sm mb-2"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Conducted quarterly risk analysis. Market conditions stable, 
                  no adjustments needed to current strategy.
                </p>
                <div className="text-blue-400 text-xs">ℹ Assessment Complete</div>
              </div>

              {/* Log Entry */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <span 
                    className="font-medium"
                    style={{
                      color: '#FFD5FA',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Security Check
                  </span>
                  <span 
                    className="text-sm"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    1 week ago
                  </span>
                </div>
                <p 
                  className="text-sm mb-2"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Performed routine security audit. All access patterns normal, 
                  no suspicious activity detected.
                </p>
                <div className="text-green-400 text-xs">✓ Secure</div>
              </div>

              {/* Log Entry */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <span 
                    className="font-medium"
                    style={{
                      color: '#FFD5FA',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Fallback Timer Check
                  </span>
                  <span 
                    className="text-sm"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    2 weeks ago
                  </span>
                </div>
                <p 
                  className="text-sm mb-2"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  User activity detected. Fallback timer reset to initial countdown period. 
                  Next check-in scheduled.
                </p>
                <div className="text-yellow-400 text-xs">⏱ Timer Reset</div>
              </div>

              {/* Log Entry */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <span 
                    className="font-medium"
                    style={{
                      color: '#FFD5FA',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Performance Report
                  </span>
                  <span 
                    className="text-sm"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    1 month ago
                  </span>
                </div>
                <p 
                  className="text-sm mb-2"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Generated monthly performance summary. Portfolio growth of 3.2% 
                  exceeded benchmark by 0.8%.
                </p>
                <div className="text-green-400 text-xs">📈 Outperforming</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentLogs;
