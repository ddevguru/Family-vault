
import React from 'react';
import Navigation from '../components/Navigation';

const BeneficiaryPortal = () => {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/lovable-uploads/78ae8b0d-fd18-4fb7-97b3-bc7740054ee4.png')`
      }}
    >
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          {/* Beneficiary Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span 
                  className="text-2xl font-bold"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  SJ
                </span>
              </div>
              <h2 
                className="text-2xl font-semibold"
                style={{
                  color: '#FFD5FA',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                Sarah Johnson
              </h2>
              <p 
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                Primary Beneficiary
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Share Information */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Your Allocation
                </h3>
                <div className="flex justify-between items-center mb-3">
                  <span 
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Share Percentage
                  </span>
                  <span 
                    className="font-semibold text-xl"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    60%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span 
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Estimated Value
                  </span>
                  <span 
                    className="font-semibold text-xl"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    $1,708,435
                  </span>
                </div>
              </div>

              {/* Countdown Progress */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Fallback Status
                </h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Days until next check-in
                    </span>
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      847 / 1095
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full" style={{width: '77%'}}></div>
                  </div>
                </div>
                <div className="text-green-400 text-sm">✓ Owner Active - Vault Secured</div>
              </div>

              {/* Access Status */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Access Conditions
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Identity Verified
                    </span>
                    <div className="text-green-400">✓</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Legal Documentation
                    </span>
                    <div className="text-green-400">✓</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span 
                      style={{
                        color: '#B0E0FF',
                        textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                      }}
                    >
                      Fallback Triggered
                    </span>
                    <div className="text-yellow-400">Pending</div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-6">
                <h3 
                  className="text-lg font-medium mb-4"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Emergency Contact
                </h3>
                <p 
                  className="text-sm mb-2"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  If you believe fallback conditions should be triggered, please contact:
                </p>
                <p 
                  className="font-medium"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  legal@vaultprotect.com
                </p>
                <p 
                  className="text-sm"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  +1 (555) 123-4567
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeneficiaryPortal;
