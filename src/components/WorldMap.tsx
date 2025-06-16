
import React from 'react';

interface Transaction {
  id: string;
  type: 'swap' | 'send' | 'mint' | 'burn' | 'stake';
  x: number;
  y: number;
}

const WorldMap = () => {
  const transactions: Transaction[] = [
    { id: '1', type: 'swap', x: 15, y: 30 },
    { id: '2', type: 'send', x: 25, y: 45 },
    { id: '3', type: 'mint', x: 35, y: 25 },
    { id: '4', type: 'burn', x: 45, y: 40 },
    { id: '5', type: 'stake', x: 55, y: 35 },
    { id: '6', type: 'swap', x: 65, y: 20 },
    { id: '7', type: 'send', x: 75, y: 50 },
    { id: '8', type: 'mint', x: 85, y: 30 },
    { id: '9', type: 'swap', x: 20, y: 60 },
    { id: '10', type: 'burn', x: 70, y: 65 },
  ];

  const getTransactionColor = (type: string) => {
    const colors = {
      swap: '#22c55e',
      send: '#3b82f6',
      mint: '#a855f7',
      burn: '#ef4444',
      stake: '#eab308'
    };
    return colors[type as keyof typeof colors] || '#ffffff';
  };

  return (
    <div className="relative w-full h-96 bg-black rounded-lg overflow-hidden flex items-center justify-center">
      {/* World Map Background Image */}
      <img 
        src="/lovable-uploads/503fd463-177b-4d06-8073-2d77401de0c3.png"
        alt="World Map"
        className="absolute inset-0 w-full h-full object-contain opacity-80"
      />
      
      {/* Transaction Dots */}
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="absolute w-2 h-2 rounded-full animate-pulse z-10"
          style={{
            left: `${transaction.x}%`,
            top: `${transaction.y}%`,
            backgroundColor: getTransactionColor(transaction.type),
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 10px ${getTransactionColor(transaction.type)}`
          }}
        />
      ))}
    </div>
  );
};

export default WorldMap;
