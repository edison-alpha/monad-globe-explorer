
import React from 'react';

const TransactionTable = () => {
  const transactions = [
    {
      txHash: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12',
      method: 'Swap',
      from: '0x742d35cc6436c0532925a3b8d2ba7c6c8e0b7f3c',
      to: '0x7a250d5630b4cf539739df2c5dacb4c659f2488d',
      age: '12 secs ago',
      status: 'success',
      amount: '1.25 ETH'
    },
    {
      txHash: '0x9f8e7d6c5b4a39281706d5f4e3c2b1a0f9e8d7c6',
      method: 'Transfer',
      from: '0xa0b1c2d3e4f5067890abcdef1234567890abcdef',
      to: '0x1234567890abcdef1234567890abcdef12345678',
      age: '45 secs ago',
      status: 'success',
      amount: '0.5 MON'
    },
    {
      txHash: '0x5a6b7c8d9e0f1234567890abcdef1234567890ab',
      method: 'Mint',
      from: '0x0000000000000000000000000000000000000000',
      to: '0xef1234567890abcdef1234567890abcdef123456',
      age: '1 min 23 secs ago',
      status: 'success',
      amount: '100.0 USDC'
    },
    {
      txHash: '0xabcdef1234567890abcdef1234567890abcdef12',
      method: 'Stake',
      from: '0x9876543210fedcba9876543210fedcba98765432',
      to: '0x1111111111111111111111111111111111111111',
      age: '2 mins 15 secs ago',
      status: 'success',
      amount: '32.0 MON'
    },
    {
      txHash: '0x2468ace13579bdf2468ace13579bdf2468ace135',
      method: 'Burn',
      from: '0xfedcba9876543210fedcba9876543210fedcba98',
      to: '0x0000000000000000000000000000000000000000',
      age: '3 mins 42 secs ago',
      status: 'success',
      amount: '50.0 WETH'
    },
    {
      txHash: '0x13579bdf2468ace13579bdf2468ace13579bdf24',
      method: 'Approve',
      from: '0x2222222222222222222222222222222222222222',
      to: '0x3333333333333333333333333333333333333333',
      age: '4 mins 18 secs ago',
      status: 'success',
      amount: 'Unlimited'
    },
    {
      txHash: '0xfdb97531eca86420fdb97531eca86420fdb97531',
      method: 'Swap',
      from: '0x4444444444444444444444444444444444444444',
      to: '0x5555555555555555555555555555555555555555',
      age: '5 mins 07 secs ago',
      status: 'failed',
      amount: '2.1 MON'
    },
  ];

  const getMethodColor = (method: string) => {
    const colors = {
      'Swap': 'text-green-400',
      'Transfer': 'text-blue-400',
      'Mint': 'text-purple-400',
      'Stake': 'text-yellow-400',
      'Burn': 'text-red-400',
      'Approve': 'text-orange-400',
    };
    return colors[method as keyof typeof colors] || 'text-white';
  };

  const truncateAddress = (address: string) => {
    if (address === '0x0000000000000000000000000000000000000000') {
      return 'Null Address';
    }
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const truncateHash = (hash: string) => {
    return `${hash.slice(0, 8)}...${hash.slice(-6)}`;
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700/50">
              <th className="text-left py-4 px-4">Tx Hash</th>
              <th className="text-left py-4 px-4">Method</th>
              <th className="text-left py-4 px-4">From</th>
              <th className="text-left py-4 px-4">To</th>
              <th className="text-left py-4 px-4">Age</th>
              <th className="text-left py-4 px-4">Status</th>
              <th className="text-left py-4 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="text-gray-300 border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                <td className="py-4 px-4">
                  <span className="bg-gray-700/50 px-3 py-1.5 rounded-full text-xs font-mono hover:bg-gray-600/50 cursor-pointer transition-colors">
                    {truncateHash(tx.txHash)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`font-medium ${getMethodColor(tx.method)}`}>
                    {tx.method}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1.5 rounded-full text-xs font-mono hover:bg-blue-500/30 cursor-pointer transition-colors">
                    {truncateAddress(tx.from)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-xs font-mono hover:bg-green-500/30 cursor-pointer transition-colors">
                    {truncateAddress(tx.to)}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-400">{tx.age}</td>
                <td className="py-4 px-4">
                  {tx.status === 'success' ? (
                    <span className="text-green-400 text-lg">✓</span>
                  ) : (
                    <span className="text-red-400 text-lg">✗</span>
                  )}
                </td>
                <td className="py-4 px-4 text-white font-medium">{tx.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
