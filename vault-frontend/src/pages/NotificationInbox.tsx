
import React from 'react';
import Navigation from '../components/Navigation';

const NotificationInbox = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/lovable-uploads/b9d9d9d9-5d0a-4288-a31f-773817ca4525.png')`
      }}
    >
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl">
          {/* Notification Inbox Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 
                className="text-2xl font-semibold"
                style={{
                  color: '#FFD5FA',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                Message Center
              </h2>
              <div className="backdrop-blur-sm bg-blue-500/20 border border-blue-300/30 rounded-full px-3 py-1">
                <span 
                  className="text-sm font-medium"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  5 New
                </span>
              </div>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              
              {/* High Priority Alert */}
              <div className="backdrop-blur-sm bg-red-500/10 border border-red-300/30 rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span 
                      className="font-medium"
                      style={{
                        color: '#FFD5FA',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      High Priority
                    </span>
                  </div>
                  <span 
                    className="text-sm"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    5 min ago
                  </span>
                </div>
                <h3 
                  className="font-semibold mb-2"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Market Volatility Alert
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Unusual market activity detected. AI agent has automatically adjusted risk exposure. 
                  Review recommended for your approval.
                </p>
                <button 
                  className="mt-3 px-4 py-2 rounded-lg backdrop-blur-sm bg-red-500/20 border border-red-300/30 text-sm hover:bg-red-500/30 transition-all duration-200"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Review Changes
                </button>
              </div>

              {/* AI Update */}
              <div className="backdrop-blur-sm bg-blue-500/10 border border-blue-300/30 rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span 
                      className="font-medium"
                      style={{
                        color: '#FFD5FA',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      AI Update
                    </span>
                  </div>
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
                <h3 
                  className="font-semibold mb-2"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Portfolio Rebalancing Complete
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Successfully rebalanced your portfolio based on current market conditions. 
                  New allocation optimized for your risk profile.
                </p>
              </div>

              {/* Fallback Warning */}
              <div className="backdrop-blur-sm bg-yellow-500/10 border border-yellow-300/30 rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span 
                      className="font-medium"
                      style={{
                        color: '#FFD5FA',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Fallback Notice
                    </span>
                  </div>
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
                <h3 
                  className="font-semibold mb-2"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Check-in Reminder
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Your next required check-in is in 847 days. Current activity status: Active. 
                  No action required at this time.
                </p>
              </div>

              {/* System Message */}
              <div className="backdrop-blur-sm bg-green-500/10 border border-green-300/30 rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span 
                      className="font-medium"
                      style={{
                        color: '#FFD5FA',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      System
                    </span>
                  </div>
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
                <h3 
                  className="font-semibold mb-2"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Security Audit Complete
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Monthly security audit completed successfully. All systems secure, 
                  no unusual access patterns detected.
                </p>
              </div>

              {/* Beneficiary Update */}
              <div className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/30 rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span 
                      className="font-medium"
                      style={{
                        color: '#FFD5FA',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Beneficiary
                    </span>
                  </div>
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
                <h3 
                  className="font-semibold mb-2"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Information Update Confirmed
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Beneficiary contact information has been successfully updated and verified. 
                  All records are current and secure.
                </p>
              </div>

            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <button 
                className="px-6 py-2 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                Mark All Read
              </button>
              <button 
                className="px-6 py-2 rounded-lg backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-200"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                Archive Old
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationInbox;
