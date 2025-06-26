
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Onboarding = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    legacyGoal: '',
    riskTolerance: '',
    timeHorizon: 1,
    beneficiaries: [],
    emergencyPassphrase: '',
  });
  const [newBeneficiary, setNewBeneficiary] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isWalletLoading, setIsWalletLoading] = useState(false);

  // Assume userId is available (e.g., from localStorage or context)
  const userId = localStorage.getItem('userId') || '1'; // Replace with actual userId retrieval

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBeneficiary = () => {
    if (newBeneficiary.trim()) {
      setFormData((prev) => ({
        ...prev,
        beneficiaries: [...prev.beneficiaries, newBeneficiary.trim()],
      }));
      setNewBeneficiary('');
    }
  };

  const handleRemoveBeneficiary = (index) => {
    setFormData((prev) => ({
      ...prev,
      beneficiaries: prev.beneficiaries.filter((_, i) => i !== index),
    }));
  };

  const handleConnectWallet = async () => {
    setError('');
    setIsWalletLoading(true);
    try {
      const response = await fetch('/api/wallets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, network: 'base-sepolia' }),
      });

      if (!response.ok) {
        const text = await response.text();
        try {
          const data = JSON.parse(text);
          throw new Error(data.error || 'Failed to create wallet');
        } catch {
          throw new Error('Server returned an unexpected response');
        }
      }

      const data = await response.json();
      setWalletAddress(data.walletAddress);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsWalletLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          identityVerified: !!formData.fullName,
          legacyGoal: formData.legacyGoal,
          riskTolerance: formData.riskTolerance,
          timeHorizon: parseInt(formData.timeHorizon),
          beneficiaries: formData.beneficiaries,
          emergencyPassphrase: formData.emergencyPassphrase,
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        try {
          const data = JSON.parse(text);
          throw new Error(data.error || 'Failed to save onboarding configuration');
        } catch {
          throw new Error('Server returned an unexpected response');
        }
      }

      const data = await response.json();
      console.log('Onboarding successful:', data);
      navigate('/dashboard'); // Replace with your desired route
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/lovable-uploads/c085852e-65b3-44f4-8a85-021c6a0b1c06.png')`
      }}
    >
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          {/* Control Panel Card */}
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

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Wallet Connection */}
              <div className="space-y-4">
                <h3 
                  className="text-lg font-medium"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Wallet Connection
                </h3>
                <button 
                  type="button"
                  onClick={handleConnectWallet}
                  disabled={isWalletLoading || walletAddress}
                  className={`w-full py-3 rounded-xl backdrop-blur-sm bg-blue-500/20 border border-blue-300/30 font-medium hover:bg-blue-500/30 transition-all duration-200 ${
                    isWalletLoading || walletAddress ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  {isWalletLoading ? 'Connecting...' : walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
                </button>
              </div>

              {/* Identity */}
              <div className="space-y-4">
                <h3 
                  className="text-lg font-medium"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Identity Verification
                </h3>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 placeholder-white/50 focus:outline-none focus:border-white/40"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                  required
                />
              </div>

              {/* Goal Configuration */}
              <div className="space-y-4">
                <h3 
                  className="text-lg font-medium"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Legacy Goals
                </h3>
                <select 
                  name="legacyGoal"
                  value={formData.legacyGoal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 focus:outline-none focus:border-white/40"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                  required
                >
                  <option value="">Select primary goal</option>
                  <option value="wealth-preservation">Wealth Preservation</option>
                  <option value="growth">Growth & Accumulation</option>
                  <option value="education">Education Fund</option>
                </select>
              </div>

              {/* Risk Level */}
              <div className="space-y-4">
                <h3 
                  className="text-lg font-medium"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Risk Tolerance
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <button 
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, riskTolerance: 'conservative' }))}
                    className={`py-2 rounded-lg backdrop-blur-sm border border-green-300/30 text-sm hover:bg-green-500/30 transition-all duration-200 ${
                      formData.riskTolerance === 'conservative' ? 'bg-green-500/30' : 'bg-green-500/20'
                    }`}
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Conservative
                  </button>
                  <button 
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, riskTolerance: 'moderate' }))}
                    className={`py-2 rounded-lg backdrop-blur-sm border border-yellow-300/30 text-sm hover:bg-yellow-500/30 transition-all duration-200 ${
                      formData.riskTolerance === 'moderate' ? 'bg-yellow-500/30' : 'bg-yellow-500/20'
                    }`}
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Moderate
                  </button>
                  <button 
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, riskTolerance: 'aggressive' }))}
                    className={`py-2 rounded-lg backdrop-blur-sm border border-red-300/30 text-sm hover:bg-red-500/30 transition-all duration-200 ${
                      formData.riskTolerance === 'aggressive' ? 'bg-red-500/30' : 'bg-red-500/20'
                    }`}
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Aggressive
                  </button>
                </div>
              </div>

              {/* Time Horizon */}
              <div className="space-y-4">
                <h3 
                  className="text-lg font-medium"
                  style={{
                    color: '#FFD5FA',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                >
                  Time Horizon
                </h3>
                <input 
                  type="range" 
                  name="timeHorizon"
                  value={formData.timeHorizon}
                  onChange={handleInputChange}
                  min="1" 
                  max="50" 
                  className="w-full"
                />
                <div className="flex justify-between text-sm">
                  <span style={{ color: '#B0E0FF', textShadow: '0 0 6px rgba(255, 255, 255, 0.6)' }}>1 year</span>
                  <span style={{ color: '#B0E0FF', textShadow: '0 0 6px rgba(255, 255, 255, 0.6)' }}>25 years</span>
                  <span style={{ color: '#B0E0FF', textShadow: '0 0 6px rgba(255, 255, 255, 0.6)' }}>50+ years</span>
                </div>
                <div className="text-center text-sm" style={{ color: '#B0E0FF', textShadow: '0 0 6px rgba(255, 255, 255, 0.6)' }}>
                  Selected: {formData.timeHorizon} years
                </div>
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
                  Beneficiaries
                </h3>
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    value={newBeneficiary}
                    onChange={(e) => setNewBeneficiary(e.target.value)}
                    placeholder="Add beneficiary name"
                    className="flex-1 px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 placeholder-white/50 focus:outline-none focus:border-white/40"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  />
                  <button
                    type="button"
                    onClick={handleAddBeneficiary}
                    className="px-4 py-3 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-200"
                    style={{
                      color: '#B0E0FF',
                      textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Add
                  </button>
                </div>
                {formData.beneficiaries.length > 0 && (
                  <ul className="space-y-2">
                    {formData.beneficiaries.map((beneficiary, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center px-4 py-2 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20"
                        style={{
                          color: '#B0E0FF',
                          textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        {beneficiary}
                        <button
                          type="button"
                          onClick={() => handleRemoveBeneficiary(index)}
                          className="text-red-300 hover:text-red-400"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
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
                  Emergency Override
                </h3>
                <input 
                  type="password" 
                  name="emergencyPassphrase"
                  value={formData.emergencyPassphrase}
                  onChange={handleInputChange}
                  placeholder="Set emergency passphrase"
                  className="w-full px-4 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/20 placeholder-white/50 focus:outline-none focus:border-white/40"
                  style={{
                    color: '#B0E0FF',
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                  }}
                />
              </div>

              <button 
                type="submit"
                disabled={isLoading || !walletAddress}
                className={`w-full py-4 rounded-xl backdrop-blur-sm bg-white/20 border border-white/30 font-semibold text-lg hover:bg-white/30 transition-all duration-200 ${
                  isLoading || !walletAddress ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                {isLoading ? 'Initializing...' : 'Initialize Vault'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
