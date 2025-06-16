
import React from 'react';

const TransactionLegend = () => {
  const transactionTypes = [
    { type: 'Swap', color: 'bg-green-500', dot: '●' },
    { type: 'Send', color: 'bg-blue-500', dot: '●' },
    { type: 'Stake', color: 'bg-yellow-500', dot: '●' },
    { type: 'Mint', color: 'bg-purple-500', dot: '●' },
    { type: 'Burn', color: 'bg-red-500', dot: '●' },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
      <h3 className="text-white font-semibold mb-4">Transaction Types</h3>
      <div className="space-y-2">
        {transactionTypes.map((item) => (
          <div key={item.type} className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${item.color}`} />
            <span className="text-gray-300 text-sm">{item.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionLegend;
