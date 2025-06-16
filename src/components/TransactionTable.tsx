
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
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
      <h3 className="text-white font-semibold mb-4">Latest Transactions</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="text-left py-2">Tx Hash</th>
              <th className="text-left py-2">Method</th>
              <th className="text-left py-2">From</th>
              <th className="text-left py-2">To</th>
              <th className="text-left py-2">Age</th>
              <th className="text-left py-2">Status</th>
              <th className="text-left py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="text-gray-300 border-b border-gray-800 hover:bg-gray-700/50">
                <td className="py-2">
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs">{tx.txHash}</span>
                </td>
                <td className="py-2">{tx.method}</td>
                <td className="py-2">
                  <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">{tx.from}</span>
                </td>
                <td className="py-2">
                  <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs">{tx.to}</span>
                </td>
                <td className="py-2">{tx.age}</td>
                <td className="py-2">
                  <span className="text-green-400">✓</span>
                </td>
                <td className="py-2">{tx.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
