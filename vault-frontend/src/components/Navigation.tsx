
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Home, LogIn, User, BarChart3, Settings, FileText, Users, TrendingUp, Bell, Shield } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // Add logout logic here when authentication is implemented
    navigate('/');
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'Landing', path: '/', icon: Home },
    { name: 'Login', path: '/login', icon: LogIn },
    { name: 'Onboarding', path: '/onboarding', icon: User },
    { name: 'Vault Dashboard', path: '/vault-dashboard', icon: BarChart3 },
    { name: 'Configure Vault', path: '/configure-vault', icon: Settings },
    { name: 'Agent Logs', path: '/agent-logs', icon: FileText },
    { name: 'Beneficiary Portal', path: '/beneficiary-portal', icon: Users },
    { name: 'Analytics Reports', path: '/analytics-reports', icon: TrendingUp },
    { name: 'Notification Inbox', path: '/notification-inbox', icon: Bell },
    { name: 'Legal Backup', path: '/legal-backup', icon: Shield },
  ];

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 left-6 z-50 p-3 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
      >
        <Menu className="w-6 h-6" style={{ color: '#B0E0FF' }} />
        {isOpen && <X className="w-6 h-6 absolute top-3 left-3" style={{ color: '#B0E0FF' }} />}
      </button>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="h-full backdrop-blur-xl bg-black/20 border-r border-white/20 p-6 pt-24">
          <div className="space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 p-3 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 font-medium"
                style={{
                  color: '#B0E0FF',
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
                }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 p-3 rounded-lg backdrop-blur-sm bg-red-500/20 border border-red-300/30 hover:bg-red-500/30 transition-all duration-200 font-medium w-full mt-8"
              style={{
                color: '#B0E0FF',
                textShadow: '0 0 6px rgba(255, 255, 255, 0.6)'
              }}
            >
              <LogIn className="w-5 h-5 rotate-180" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
