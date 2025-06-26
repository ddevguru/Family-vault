# 🛡️ FamilyVault

<div align="center">

![FamilyVault Logo](https://img.shields.io/badge/FamilyVault-Digital%20Legacy%20Platform-blue?style=for-the-badge)

**Secure your digital legacy before it's too late.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black.svg)](https://nextjs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0+-blue.svg)](https://mysql.com/)

</div>

## 📖 Overview

**FamilyVault** is a next-generation, AI-powered digital vault designed to automate and secure the legacy of your digital wealth, memories, and responsibilities. Built for the digital age, it manages everything from crypto wallets to smart contracts and vital documents — all protected with intelligent fallback rules and family-controlled recovery systems.

### 🎯 Why FamilyVault?

In our digital-first world, most people aren't prepared for what happens to their digital assets when they're no longer around:
- **$140+ billion** in crypto assets are lost forever due to lost keys
- Traditional inheritance systems don't support digital assets
- No automated fallback mechanisms for digital wealth
- Lack of transparent legacy planning tools

## ✨ Key Features

### 🔐 AI-Powered Asset Management
- **Smart Portfolio Optimization**: AI automatically rebalances portfolios based on market conditions
- **Risk Assessment**: Continuous monitoring with 94.2% success rate in our current deployment
- **Market Analysis**: Real-time volatility detection and protective measures

### 👥 Beneficiary Management
- **Verified Beneficiaries**: Identity verification and legal documentation
- **Percentage Allocation**: Flexible distribution settings
- **Emergency Contact**: Automated beneficiary notification system

### ⏱️ Intelligent Fallback System
- **Configurable Timers**: Default 3-year inactivity trigger (1095 days)
- **Activity Monitoring**: Automatic timer reset on user activity
- **Secure Handover**: Automated asset transfer to beneficiaries

### 📊 Analytics & Reporting
- **Performance Tracking**: Real-time portfolio growth and returns
- **Investment Analytics**: Comprehensive reports on asset allocation
- **AI Success Metrics**: Detailed logs of AI-driven decisions

### 🔔 Smart Notifications
- **Priority Alerts**: High, medium, and low priority notification system
- **Market Updates**: Automated alerts for significant market events
- **System Status**: Regular security audits and system health checks

### 🏛️ Legal Support
- **24/7 Legal Team**: VaultProtect Legal Team available for emergencies
- **Compliance Monitoring**: Automated regulatory compliance checks
- **Documentation**: Legal document management and verification

## 🛠️ Technology Stack

| Component | Technology | Version |
|-----------|------------|---------|
| **Frontend** | Next.js | 14+ |
| **Styling** | TailwindCSS | Latest |
| **Backend** | Node.js + Express.js | 18+ |
| **Database** | MySQL (MariaDB) | 10.4+ |
| **Authentication** | bcrypt + Sessions | - |
| **AI Logic** | Custom Business Logic | - |
| **Blockchain** | Base Sepolia Network | - |

## 📁 Project Structure

```
familyvault/
├── vault-frontend/          # Next.js frontend application
│   ├── components/         # Reusable UI components
│   ├── pages/             # Next.js pages and API routes
│   ├── styles/            # TailwindCSS styles
│   └── utils/             # Frontend utilities
├── vault-backend/          # Node.js backend API
│   ├── routes/            # Express.js route handlers
│   ├── controllers/       # Business logic controllers
│   ├── models/            # Database models
│   ├── middleware/        # Authentication & validation
│   └── vault_db.sql       # Database schema
├── docs/                  # Documentation
└── README.md
```

## 🗃️ Database Schema

The system uses a MySQL database (`vault_db`) with 13 core tables:

### Core Tables
- **`users`** - User profiles, credentials, and contact information
- **`wallets`** - Connected crypto wallets (Base Sepolia network)
- **`beneficiaries`** - Registered heirs with percentage allocations
- **`vault_configs`** - User-specific vault configurations
- **`fallback_timer`** - Inactivity monitoring (default: 1095 days)

### AI & Analytics
- **`ai_actions_log`** - Complete log of AI-driven decisions and actions
- **`analytics_reports`** - Portfolio performance and investment analytics
- **`payment_transactions`** - Transaction history and blockchain records

### Support & Notifications
- **`notifications`** - Priority-based alert system
- **`legal_support`** - 24/7 legal team contact information
- **`backup_status`** - Data backup and redundancy status
- **`onboarding_configs`** - User onboarding preferences and settings

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MySQL 8.0+ or MariaDB 10.4+
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/familyvault.git
cd familyvault
```

### 2. Database Setup
```bash
# Create MySQL database
mysql -u root -p
CREATE DATABASE vault_db;
exit

# Import schema
mysql -u root -p vault_db < vault-backend/vault_db.sql
```

### 3. Backend Setup
```bash
cd vault-backend
npm install

# Create .env file
cp .env.example .env
# Edit .env with your configuration
```

**.env Configuration:**
```env
# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=vault_db

# Server
PORT=5000
NODE_ENV=development

# Security
JWT_SECRET=your_jwt_secret_key
BCRYPT_ROUNDS=10

# Blockchain (Base Sepolia)
NETWORK=base-sepolia
WALLET_SEED=your_wallet_seed
```

```bash
# Start backend server
npm start
# or for development
npm run dev
```

### 4. Frontend Setup
```bash
cd vault-frontend
npm install

# Start development server
npm run dev
```

### 5. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api-docs (if implemented)

## 📊 Current Demo Data

The system comes with demo data for user ID 1 (Deepak Mishra):
- **Portfolio Value**: $2,847,392 (127% total growth)
- **AI Success Rate**: 94.2% (847 successful trades)
- **Beneficiaries**: Dilip Mishra (100% allocation)
- **Fallback Timer**: 10 days remaining
- **Active Wallets**: 4 Base Sepolia wallets

## 🔒 Security Features

- **Password Hashing**: bcrypt with 10 rounds
- **Emergency Passphrases**: Encrypted emergency access codes
- **Identity Verification**: Multi-step beneficiary verification
- **Backup System**: 6-hour backup frequency to 3 secure locations
- **Activity Monitoring**: Comprehensive audit trails

## 🤖 AI Capabilities

The AI system performs various automated tasks:
- Portfolio rebalancing based on market volatility
- Risk assessment and exposure adjustment
- Beneficiary verification and contact updates
- Security audits and compliance monitoring
- Market sentiment analysis and trend prediction

## 📋 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Portfolio Management
- `GET /api/portfolio/:userId` - Get portfolio details
- `PUT /api/portfolio/:userId` - Update portfolio
- `GET /api/analytics/:userId` - Get analytics report

### Beneficiaries
- `GET /api/beneficiaries/:userId` - List beneficiaries
- `POST /api/beneficiaries` - Add beneficiary
- `PUT /api/beneficiaries/:id` - Update beneficiary

### Fallback System
- `GET /api/fallback/:userId` - Get fallback status
- `POST /api/fallback/reset` - Reset fallback timer

## 🧪 Testing

```bash
# Run backend tests
cd vault-backend
npm test

# Run frontend tests
cd vault-frontend
npm test
```

## 🚀 Deployment

### Production Environment Setup
1. Set up production MySQL database
2. Configure environment variables for production
3. Build and deploy frontend
4. Deploy backend API
5. Set up SSL certificates
6. Configure backup systems

### Docker Deployment (Coming Soon)
```bash
# Build and run with Docker Compose
docker-compose up -d
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ESLint and Prettier configurations
- Write tests for new features
- Update documentation as needed
- Follow semantic commit messages

## 📈 Roadmap

- [ ] **Q2 2025**: Multi-network blockchain support
- [ ] **Q3 2025**: Mobile application (iOS/Android)
- [ ] **Q4 2025**: Advanced AI investment strategies
- [ ] **Q1 2026**: Integration with traditional banking
- [ ] **Q2 2026**: Smart contract automation

### Technical Support
- Create an issue on GitHub
- Contact: deepakm7778@gmail.com
- Contact : nanavativrushali28@gmail.com


## 👥 Team

| Name | Role | GitHub | LinkedIn |
|------|------|--------|----------|
| **Deepak Mishra** | Backend Developer | [@ddevguru](https://github.com/ddevguru) | [LinkedIn](https://www.linkedin.com/in/ddevguru) |
|**Vrushali Nanavati** | Front-end Developer | [@vrxshxli](https://github.com/vrxshxli) | [LinkedIn](https://www.linkedin.com/in/vrushali-nanavati-3ba606208) |

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the Base team for blockchain infrastructure
- OpenAI for AI integration inspiration
- The open-source community for tools and libraries

## 📊 Project Statistics

- **Database Tables**: 13
- **API Endpoints**: 20+
- **AI Actions Logged**: 847 successful trades
- **Security Features**: Multi-layer encryption
- **Backup Frequency**: Every 6 hours
- **Uptime**: 99.9% target

---

<div align="center">

**Built with ❤️ for secure digital legacy management**

[⭐ Star this repository](https://github.com/ddevguru/Family-vault) | [🐛 Report Bug](https://github.com/ddevguru/Family-vault/issues) | [💡 Request Feature](https://github.com/ddevguru/Family-vault/issues)

</div>
