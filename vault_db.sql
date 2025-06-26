-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2025 at 02:52 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vault_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `ai_actions_log`
--

CREATE TABLE `ai_actions_log` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `action` text NOT NULL,
  `timestamp` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ai_actions_log`
--

INSERT INTO `ai_actions_log` (`id`, `user_id`, `action`, `timestamp`) VALUES
(1, '1', 'AI detected market volatility and rebalanced portfolio. Shifted 5% to stable assets.', '2025-06-26 15:30:00'),
(2, '1', 'Processed beneficiary update. Verified new contact details for John Doe.', '2025-06-25 10:15:00'),
(3, '1', 'Conducted quarterly risk analysis. No adjustments needed.', '2025-06-23 14:00:00'),
(4, '1', 'Performed security audit. All access patterns normal.', '2025-06-19 09:45:00'),
(5, '1', 'Reset fallback timer due to user activity.', '2025-06-12 16:20:00'),
(6, '1', 'Generated monthly performance report. Portfolio up 3.2%.', '2025-05-26 11:00:00'),
(7, '1', 'AI optimized asset allocation based on market trends.', '2025-05-20 13:30:00'),
(8, '1', 'Updated risk tolerance settings per user request.', '2025-05-15 08:50:00'),
(9, '1', 'Initiated secure wallet transfer of 0.5 ETH.', '2025-05-10 17:10:00'),
(10, '1', 'Performed compliance check for regulatory updates.', '2025-05-05 12:25:00'),
(11, '1', 'AI detected high volatility in tech sector. Adjusted exposure.', '2025-04-30 14:40:00'),
(12, '1', 'Verified emergency access code. No issues found.', '2025-04-25 09:15:00'),
(13, '1', 'Generated annual performance summary. 5.1% growth.', '2025-04-20 10:00:00'),
(14, '1', 'Updated beneficiary allocation percentages.', '2025-04-15 15:30:00'),
(15, '1', 'AI recommended low-risk bonds for portfolio stability.', '2025-04-10 11:45:00'),
(16, '1', 'Conducted market sentiment analysis. Stable outlook.', '2025-04-05 13:20:00'),
(17, '1', 'Processed payment transaction of $100 USDC.', '2025-03-31 16:00:00'),
(18, '1', 'Performed routine system health check. All systems operational.', '2025-03-25 08:30:00'),
(19, '1', 'AI adjusted investment strategy for long-term goals.', '2025-03-20 14:10:00'),
(20, '1', 'Reset fallback timer after user login.', '2025-03-15 09:00:00'),
(21, '1', 'Contacted Beneficiaries', '2025-06-26 17:01:18');

-- --------------------------------------------------------

--
-- Table structure for table `analytics_reports`
--

CREATE TABLE `analytics_reports` (
  `user_id` int(11) NOT NULL,
  `total_growth` decimal(5,1) NOT NULL,
  `annual_return` decimal(5,1) NOT NULL,
  `total_deposits` decimal(15,2) NOT NULL,
  `current_value` decimal(15,2) NOT NULL,
  `total_gains` decimal(15,2) NOT NULL,
  `ai_success_rate` decimal(5,1) NOT NULL,
  `successful_trades` int(11) NOT NULL,
  `risk_adjustments` int(11) NOT NULL,
  `rebalances` int(11) NOT NULL,
  `equities_allocation` decimal(5,1) NOT NULL,
  `bonds_allocation` decimal(5,1) NOT NULL,
  `alternative_allocation` decimal(5,1) NOT NULL,
  `performance_this_month` decimal(5,1) NOT NULL,
  `performance_last_3_months` decimal(5,1) NOT NULL,
  `performance_year_to_date` decimal(5,1) NOT NULL,
  `performance_since_inception` decimal(5,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `analytics_reports`
--

INSERT INTO `analytics_reports` (`user_id`, `total_growth`, `annual_return`, `total_deposits`, `current_value`, `total_gains`, `ai_success_rate`, `successful_trades`, `risk_adjustments`, `rebalances`, `equities_allocation`, `bonds_allocation`, `alternative_allocation`, `performance_this_month`, `performance_last_3_months`, `performance_year_to_date`, `performance_since_inception`) VALUES
(1, 127.0, 12.8, 1250000.00, 2847392.00, 1597392.00, 94.2, 847, 23, 12, 60.0, 25.0, 15.0, 3.2, 8.7, 15.3, 127.8);

-- --------------------------------------------------------

--
-- Table structure for table `backup_status`
--

CREATE TABLE `backup_status` (
  `user_id` int(11) NOT NULL,
  `last_backup` datetime NOT NULL,
  `backup_frequency` varchar(50) NOT NULL,
  `data_integrity` varchar(50) NOT NULL,
  `redundancy` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `backup_status`
--

INSERT INTO `backup_status` (`user_id`, `last_backup`, `backup_frequency`, `data_integrity`, `redundancy`) VALUES
(1, '2025-06-26 18:16:23', 'Every 6 hours', '✓ Verified', '3 secure locations');

-- --------------------------------------------------------

--
-- Table structure for table `beneficiaries`
--

CREATE TABLE `beneficiaries` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `percentage` decimal(5,2) NOT NULL,
  `identity_verified` tinyint(1) DEFAULT 0,
  `legal_documentation` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `beneficiaries`
--

INSERT INTO `beneficiaries` (`id`, `user_id`, `name`, `percentage`, `identity_verified`, `legal_documentation`) VALUES
(1, 1, 'Dilip Mishra ', 100.00, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `fallback_timer`
--

CREATE TABLE `fallback_timer` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `days_left` int(11) NOT NULL,
  `total_days` int(11) NOT NULL DEFAULT 1095
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fallback_timer`
--

INSERT INTO `fallback_timer` (`id`, `user_id`, `days_left`, `total_days`) VALUES
(1, '1', 10, 1095);

-- --------------------------------------------------------

--
-- Table structure for table `legal_support`
--

CREATE TABLE `legal_support` (
  `user_id` int(11) NOT NULL,
  `team_name` varchar(255) NOT NULL,
  `availability` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `emergency_phone` varchar(20) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `legal_support`
--

INSERT INTO `legal_support` (`user_id`, `team_name`, `availability`, `email`, `phone`, `emergency_phone`, `description`) VALUES
(1, 'VaultProtect Legal Team', '24/7 Emergency Support', 'legal@vaultprotect.com', '+1 (555) 123-4567', '+1 (555) 911-VAULT', 'Available for beneficiary verification, emergency access, and legal compliance');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `category` varchar(50) NOT NULL,
  `title` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `timestamp` datetime NOT NULL,
  `priority` varchar(20) NOT NULL,
  `is_read` tinyint(1) DEFAULT 0,
  `action` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `user_id`, `category`, `title`, `message`, `timestamp`, `priority`, `is_read`, `action`) VALUES
(1, 1, 'High Priority', 'Market Volatility Alert', 'Unusual market activity detected. AI agent has automatically adjusted risk exposure. Review recommended for your approval.', '2025-06-26 16:35:00', 'High', 1, 'Review Changes'),
(2, 1, 'AI Update', 'Portfolio Rebalancing Complete', 'Successfully rebalanced your portfolio based on current market conditions. New allocation optimized for your risk profile.', '2025-06-26 14:40:00', 'Medium', 1, NULL),
(3, 1, 'Fallback Notice', 'Check-in Reminder', 'Your next required check-in is in 847 days. Current activity status: Active. No action required at this time.', '2025-06-25 16:40:00', 'Medium', 1, NULL),
(4, 1, 'System', 'Security Audit Complete', 'Monthly security audit completed successfully. All systems secure, no unusual access patterns detected.', '2025-06-23 16:40:00', 'Low', 1, NULL),
(5, 1, 'Beneficiary', 'Information Update Confirmed', 'Beneficiary contact information has been successfully updated and verified. All records are current and secure.', '2025-06-19 16:40:00', 'Low', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `onboarding_configs`
--

CREATE TABLE `onboarding_configs` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `identity_verified` tinyint(1) NOT NULL,
  `legacy_goal` varchar(255) DEFAULT NULL,
  `risk_tolerance` varchar(50) DEFAULT NULL,
  `time_horizon` int(11) NOT NULL,
  `beneficiaries` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`beneficiaries`)),
  `emergency_passphrase` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `onboarding_configs`
--

INSERT INTO `onboarding_configs` (`id`, `user_id`, `identity_verified`, `legacy_goal`, `risk_tolerance`, `time_horizon`, `beneficiaries`, `emergency_passphrase`) VALUES
(1, 1, 1, 'wealth-preservation', 'moderate', 3, '[]', '$2b$10$MagzL5OVbp3HkDojzihT6uFfDvQPYDY6UsgqblcO1EP2RcUj94Gfm'),
(2, 1, 1, 'wealth-preservation', 'conservative', 6, '[\"Dilip Mishra\"]', '$2b$10$eoad0MpC.gscvFYS8OvaweJPKK/FeffCGA/376cJpfhDUSUoc4Bj6'),
(3, 1, 1, 'wealth-preservation', 'conservative', 10, '[\"Dilip Mishra\"]', '$2b$10$I1QzbBjKGL52RtHwmRfDGeU//Cwu/spQjm2UqYXSrE8izaWMEcONq');

-- --------------------------------------------------------

--
-- Table structure for table `payment_transactions`
--

CREATE TABLE `payment_transactions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `wallet_id` int(11) NOT NULL,
  `transaction_hash` varchar(255) DEFAULT NULL,
  `amount` decimal(15,2) NOT NULL,
  `asset` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `username`, `password`, `phone_number`, `created_at`) VALUES
(1, 'Deepak Mishra', 'seepakm7778@gmail.com', 'deepak', '$2b$10$DBxtFG4y3pQU.YCAUyuebeJATZgyk2e5jIbFkDBFeV16J/HgjzGIa', '7028196172', '2025-06-25 18:47:10');

-- --------------------------------------------------------

--
-- Table structure for table `user_portfolio`
--

CREATE TABLE `user_portfolio` (
  `user_id` int(11) NOT NULL,
  `portfolio_balance` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_portfolio`
--

INSERT INTO `user_portfolio` (`user_id`, `portfolio_balance`) VALUES
(1, 2000.00);

-- --------------------------------------------------------

--
-- Table structure for table `vault_configs`
--

CREATE TABLE `vault_configs` (
  `user_id` int(11) NOT NULL,
  `inactive_days_trigger` int(11) DEFAULT NULL,
  `fallback_action` varchar(50) DEFAULT NULL,
  `risk_level` int(11) DEFAULT NULL,
  `investment_goals` text DEFAULT NULL,
  `emergency_access_code` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vault_status`
--

CREATE TABLE `vault_status` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vault_status`
--

INSERT INTO `vault_status` (`id`, `user_id`, `status`) VALUES
(1, '1', 'Fallback Triggered');

-- --------------------------------------------------------

--
-- Table structure for table `wallets`
--

CREATE TABLE `wallets` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `wallet_address` varchar(255) NOT NULL,
  `network` varchar(50) NOT NULL,
  `cdp_wallet_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wallets`
--

INSERT INTO `wallets` (`id`, `user_id`, `wallet_address`, `network`, `cdp_wallet_id`) VALUES
(1, 1, 'mock-address-1750929343286-1', 'base-sepolia', 'mock-id-1750929343286'),
(2, 1, 'mock-address-1750930522672-1', 'base-sepolia', 'mock-id-1750930522672'),
(3, 1, 'mock-address-1750937700880-1', 'base-sepolia', 'mock-id-1750937700880'),
(4, 1, 'mock-address-1750941890956-1', 'base-sepolia', 'mock-id-1750941890956');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ai_actions_log`
--
ALTER TABLE `ai_actions_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `analytics_reports`
--
ALTER TABLE `analytics_reports`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `backup_status`
--
ALTER TABLE `backup_status`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `beneficiaries`
--
ALTER TABLE `beneficiaries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `fallback_timer`
--
ALTER TABLE `fallback_timer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `legal_support`
--
ALTER TABLE `legal_support`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `onboarding_configs`
--
ALTER TABLE `onboarding_configs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `payment_transactions`
--
ALTER TABLE `payment_transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `wallet_id` (`wallet_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `user_portfolio`
--
ALTER TABLE `user_portfolio`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `vault_configs`
--
ALTER TABLE `vault_configs`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `vault_status`
--
ALTER TABLE `vault_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ai_actions_log`
--
ALTER TABLE `ai_actions_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `beneficiaries`
--
ALTER TABLE `beneficiaries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fallback_timer`
--
ALTER TABLE `fallback_timer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `onboarding_configs`
--
ALTER TABLE `onboarding_configs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payment_transactions`
--
ALTER TABLE `payment_transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vault_status`
--
ALTER TABLE `vault_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wallets`
--
ALTER TABLE `wallets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `analytics_reports`
--
ALTER TABLE `analytics_reports`
  ADD CONSTRAINT `analytics_reports_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `backup_status`
--
ALTER TABLE `backup_status`
  ADD CONSTRAINT `backup_status_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `beneficiaries`
--
ALTER TABLE `beneficiaries`
  ADD CONSTRAINT `beneficiaries_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `legal_support`
--
ALTER TABLE `legal_support`
  ADD CONSTRAINT `legal_support_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `onboarding_configs`
--
ALTER TABLE `onboarding_configs`
  ADD CONSTRAINT `onboarding_configs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `payment_transactions`
--
ALTER TABLE `payment_transactions`
  ADD CONSTRAINT `payment_transactions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `payment_transactions_ibfk_2` FOREIGN KEY (`wallet_id`) REFERENCES `wallets` (`id`);

--
-- Constraints for table `user_portfolio`
--
ALTER TABLE `user_portfolio`
  ADD CONSTRAINT `user_portfolio_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `vault_configs`
--
ALTER TABLE `vault_configs`
  ADD CONSTRAINT `vault_configs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `wallets`
--
ALTER TABLE `wallets`
  ADD CONSTRAINT `wallets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
