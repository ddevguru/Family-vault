
import React from 'react';
import Navigation from '../components/Navigation';

const LegalBackup = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/lovable-uploads/621361a0-199d-42b7-a184-4fc3d18cda40.png')`
      }}
    >
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          {/* Legal Backup Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h2 
              className="text-2xl font-semibold text-center mb-8"
              style={{
                color: '#FFD5FA',
                textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
              }}
            >
              Legal & Backup Center
            </h2>
            
            <div className="space-y-6">
              
              {/* Export Options */}
              <div className="space-y-4">
                <h3 
                  className="text-lg font-medium"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Document Export
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-200 text-left">
                    <div 
                      className="font-medium mb-1"
                      style={{
                        color: '#FFD5FA',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Vault Summary
                    </div>
                    <div 
                      className="text-sm"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Complete portfolio overview
                    </div>
                  </button>
                  <button className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-200 text-left">
                    <div 
                      className="font-medium mb-1"
                      style={{
                        color: '#FFD5FA',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Beneficiary Records
                    </div>
                    <div 
                      className="text-sm"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      All beneficiary information
                    </div>
                  </button>
                  <button className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-200 text-left">
                    <div 
                      className="font-medium mb-1"
                      style={{
                        color: '#FFD5FA',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Transaction History
                    </div>
                    <div 
                      className="text-sm"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Complete audit trail
                    </div>
                  </button>
                  <button className="p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-200 text-left">
                    <div 
                      className="font-medium mb-1"
                      style={{
                        color: '#FFD5FA',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Legal Documents
                    </div>
                    <div 
                      className="text-sm"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Terms and agreements
                    </div>
                  </button>
                </div>
              </div>

              {/* Backup Summary */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Backup Status
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Last Backup
                    </span>
                    <span className="text-green-400">2 hours ago</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Backup Frequency
                    </span>
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Every 6 hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Data Integrity
                    </span>
                    <span className="text-green-400">✓ Verified</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Redundancy
                    </span>
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      3 secure locations
                    </span>
                  </div>
                </div>
                <button 
                  className="w-full mt-4 py-3 rounded-xl backdrop-blur-sm bg-blue-500/20 border border-blue-300/30 font-medium hover:bg-blue-500/30 transition-all duration-200"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Force Backup Now
                </button>
              </div>

              {/* Legal Contact Details */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Legal Support
                </h3>
                <div className="space-y-3">
                  <div>
                    <div 
                      className="font-medium"
                      style={{
                        color: '#FFD5FA',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      VaultProtect Legal Team
                    </div>
                    <div 
                      className="text-sm"
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      24/7 Emergency Support
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      <span className="font-medium">Email:</span> legal@vaultprotect.com
                    </div>
                    <div 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      <span className="font-medium">Phone:</span> +1 (555) 123-4567
                    </div>
                    <div 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      <span className="font-medium">Emergency:</span> +1 (555) 911-VAULT
                    </div>
                  </div>
                  <div 
                    className="text-xs mt-3"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Available for beneficiary verification, emergency access, and legal compliance
                  </div>
                </div>
              </div>

              {/* Emergency Actions */}
              <div className="backdrop-blur-sm bg-red-500/10 border border-red-300/30 rounded-xl p-6">
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Emergency Options
                </h3>
                <div className="space-y-3">
                  <button 
                    className="w-full py-3 rounded-xl backdrop-blur-sm bg-yellow-500/20 border border-yellow-300/30 font-medium hover:bg-yellow-500/30 transition-all duration-200"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Trigger Manual Fallback
                  </button>
                  <button 
                    className="w-full py-3 rounded-xl backdrop-blur-sm bg-red-500/20 border border-red-300/30 font-medium hover:bg-red-500/30 transition-all duration-200"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Emergency Contact All Beneficiaries
                  </button>
                </div>
                <div 
                  className="text-xs mt-3 text-center"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Use these options only in genuine emergencies
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalBackup;
