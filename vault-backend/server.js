import express from 'express';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import cors from 'cors';
import { CdpClient } from '@coinbase/cdp-sdk';
import { paymentMiddleware } from 'x402-express';
import { facilitator } from '@coinbase/x402';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(cors({ origin: 'http://localhost:8080' })); // Updated to match frontend origin
app.use(express.json());

// MySQL connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vault_db'
};

// Create MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Initialize CDP Client
const cdpClient = new CdpClient({
  apiKeyId: process.env.CDP_API_KEY_ID,
  apiKeySecret: process.env.CDP_API_KEY_SECRET,
  walletSecret: process.env.CDP_WALLET_SECRET
});

// x404Pay configuration
const x404PayConfig = {
  'POST /api/pay': {
    price: '0.10', // $0.10 USDC
    network: process.env.NETWORK_ID || 'base-sepolia',
  }
};

// Apply paymentMiddleware only to /api/pay
app.post('/api/pay', paymentMiddleware(
  process.env.WALLET_ADDRESS,
  x404PayConfig,
  { url: 'https://x402.org/facilitator' }
), async (req, res) => {
  try {
    const { userId, walletId, amount, asset } = req.body;

    if (!userId || !walletId || !amount || !asset) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Record payment transaction
    const [result] = await pool.query(
      'INSERT INTO payment_transactions (user_id, wallet_id, transaction_hash, amount, asset, status) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, walletId, 'pending', amount, asset, 'pending']
    );

    res.status(200).json({
      message: 'Payment initiated',
      transactionId: result.insertId
    });
  } catch (error) {
    console.error('Error processing payment:', error.stack);
    res.status(500).json({ error: 'Payment processing failed' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if user exists
    const [users] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = users[0];

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Return user data (excluding password)
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        username: user.username,
        phoneNumber: user.phone_number
      }
    });
  } catch (error) {
    console.error('Error during login:', error.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  try {
    const { fullName, email, username, password, phoneNumber } = req.body;

    // Validate input
    if (!fullName || !email || !username || !password || !phoneNumber) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    const [existingUsers] = await pool.query(
      'SELECT * FROM users WHERE email = ? OR username = ?',
      [email, username]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({ error: 'Email or username already exists' });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert new user
    const [result] = await pool.query(
      'INSERT INTO users (full_name, email, username, password, phone_number) VALUES (?, ?, ?, ?, ?)',
      [fullName, email, username, hashedPassword, phoneNumber]
    );

    res.status(201).json({
      message: 'User registered successfully',
      userId: result.insertId
    });
  } catch (error) {
    console.error('Error during signup:', error.stack);
    res.status(500).json({ error: 'Internal server SLR error' });
  }
});

// Wallet creation endpoint
app.post('/api/wallets', async (req, res) => {
  try {
    const { userId, network = 'base-sepolia' } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Placeholder wallet creation (replace with actual CDP SDK method)
    // TODO: Replace with correct cdpClient method per Coinbase CDP SDK documentation
    const wallet = {
      address: `0x${Math.random().toString(16).slice(2, 42)}`, // Mock address
      id: `wallet_${Date.now()}` // Mock ID
    };
    const walletAddress = wallet.address;

    // Store wallet in database
    const [result] = await pool.query(
      'INSERT INTO wallets (user_id, wallet_address, network, cdp_wallet_id) VALUES (?, ?, ?, ?)',
      [userId, walletAddress, network, wallet.id]
    );

    // Placeholder wallet funding (replace with actual CDP SDK method)
    if (network === 'base-sepolia') {
      console.log(`Mock funding wallet ${wallet.id} with 0.01 ETH`);
      // await cdpClient.fundWallet(wallet.id, '0.01'); // Uncomment when correct method is found
    }

    res.status(201).json({
      message: 'Wallet created successfully',
      walletId: result.insertId,
      walletAddress
    });
  } catch (error) {
    console.error('Error creating wallet:', error.stack);
    res.status(500).json({ error: 'Failed to create wallet' });
  }
});

// Onboarding configuration endpoint
app.post('/api/onboarding', async (req, res) => {
  try {
    const {
      userId,
      identityVerified,
      legacyGoal,
      riskTolerance,
      timeHorizon,
      beneficiaries,
      emergencyPassphrase
    } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Hash emergency passphrase if provided
    let hashedPassphrase = null;
    if (emergencyPassphrase) {
      const saltRounds = 10;
      hashedPassphrase = await bcrypt.hash(emergencyPassphrase, saltRounds);
    }

    // Store onboarding configuration
    const [result] = await pool.query(
      `INSERT INTO onboarding_configs (
        user_id, 
        identity_verified, 
        legacy_goal, 
        risk_tolerance, 
        time_horizon, 
        beneficiaries, 
        emergency_passphrase
      ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        userId,
        identityVerified || false,
        legacyGoal || '',
        riskTolerance || '',
        timeHorizon || 1,
        JSON.stringify(beneficiaries || []),
        hashedPassphrase
      ]
    );

    res.status(201).json({
      message: 'Onboarding configuration saved successfully',
      configId: result.insertId
    });
  } catch (error) {
    console.error('Error saving onboarding configuration:', error.stack);
    res.status(500).json({ error: 'Failed to save onboarding configuration' });
  }
});

// Test database connection endpoint
app.get('/api/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1');
    res.json({ message: 'Database connection successful', rows });
  } catch (error) {
    console.error('Database test error:', error.stack);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
