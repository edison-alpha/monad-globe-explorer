
import React from 'react';

const TransactionTable = () => {
  const transactions = [
    {
      txHash: '0x2aad765_f85756',
      method: 'Approve',
      from: '0x2aad9f_f4df857c',
      to: '0x2aad9f_f4df596b',
      age: '33 mins 46 secs ago',
      status: 'success',
      amount: '0.01 MON'
    },
    {
      txHash: '0x2aad765_f85756',
      method: 'Approve',
      from: '0x2aad9f_f4df857c',
      to: '0x2aad9f_f4df596b',
      age: '33 mins 46 secs ago',
      status: 'success',
      amount: '0.01 MON'
    },
    {
      txHash: '0x2aad765_f85756',
      method: 'Approve',
      from: '0x2aad9f_f4df857c',
      to: '0x2aad9f_f4df596b',
      age: '33 mins 46 secs ago',
      status: 'success',
      amount: '0.01 MON'
    },
    {
      txHash: '0x2aad765_f85756',
      method: 'Approve',
      from: '0x2aad9f_f4df857c',
      to: '0x2aad9f_f4df596b',
      age: '33 mins 46 secs ago',
      status: 'success',
      amount: '0.01 MON'
    },
    {
      txHash: '0x2aad765_f85756',
      method: 'Approve',
      from: '0x2aad9f_f4df857c',
      to: '0x2aad9f_f4df596b',
      age: '33 mins 46 secs ago',
      status: 'success',
      amount: '0.01 MON'
    },
    {
      txHash: '0x2aad765_f85756',
      method: 'Approve',
      from: '0x2aad9f_f4df857c',
      to: '0x2aad9f_f4df596b',
      age: '33 mins 46 secs ago',
      status: 'success',
      amount: '0.01 MON'
    },
    {
      txHash: '0x2aad765_f85756',
      method: 'Approve',
      from: '0x2aad9f_f4df857c',
      to: '0x2aad9f_f4df596b',
      age: '33 mins 46 secs ago',
      status: 'success',
      amount: '0.01 MON'
    },
  ];

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
                  <span className="bg-gray-700/50 px-3 py-1.5 rounded-full text-xs font-mono">{tx.txHash}</span>
                </td>
                <td className="py-4 px-4 text-white">{tx.method}</td>
                <td className="py-4 px-4">
                  <span className="bg-red-500/20 text-red-400 px-3 py-1.5 rounded-full text-xs font-mono">{tx.from}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="bg-red-500/20 text-red-400 px-3 py-1.5 rounded-full text-xs font-mono">{tx.to}</span>
                </td>
                <td className="py-4 px-4 text-gray-400">{tx.age}</td>
                <td className="py-4 px-4">
                  <span className="text-green-400 text-lg">✓</span>
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
