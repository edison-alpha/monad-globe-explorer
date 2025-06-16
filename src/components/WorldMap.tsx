
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
  ];

  const getTransactionColor = (type: string) => {
    const colors = {
      swap: 'bg-green-500',
      send: 'bg-blue-500',
      mint: 'bg-purple-500',
      burn: 'bg-red-500',
      stake: 'bg-yellow-500'
    };
    return colors[type as keyof typeof colors] || 'bg-white';
  };

  return (
    <div className="relative w-full h-96 bg-black rounded-lg overflow-hidden">
      <img 
        src="/lovable-uploads/bd9c08cc-6ee2-4359-8e56-c93de4189413.png" 
        alt="World Map" 
        className="w-full h-full object-cover opacity-80"
      />
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className={`absolute w-3 h-3 rounded-full ${getTransactionColor(transaction.type)} animate-pulse shadow-lg`}
          style={{
            left: `${transaction.x}%`,
            top: `${transaction.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </div>
  );
};

export default WorldMap;
