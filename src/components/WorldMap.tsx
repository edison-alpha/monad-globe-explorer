
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

  // Create dotted world map pattern
  const createDottedMap = () => {
    const dots = [];
    const mapWidth = 800;
    const mapHeight = 400;
    const dotSpacing = 8;
    
    // Define rough continent shapes with dots
    const continentPatterns = [
      // North America
      { startX: 60, endX: 220, startY: 80, endY: 200, density: 0.7 },
      // South America  
      { startX: 140, endX: 200, startY: 200, endY: 320, density: 0.6 },
      // Europe
      { startX: 280, endX: 350, startY: 60, endY: 140, density: 0.8 },
      // Africa
      { startX: 280, endX: 360, startY: 140, endY: 300, density: 0.7 },
      // Asia
      { startX: 350, endX: 550, startY: 40, endY: 200, density: 0.8 },
      // Australia
      { startX: 500, endX: 580, startY: 250, endY: 300, density: 0.6 },
    ];

    continentPatterns.forEach((pattern, patternIndex) => {
      for (let x = pattern.startX; x < pattern.endX; x += dotSpacing) {
        for (let y = pattern.startY; y < pattern.endY; y += dotSpacing) {
          if (Math.random() < pattern.density) {
            dots.push(
              <circle
                key={`${patternIndex}-${x}-${y}`}
                cx={x}
                cy={y}
                r="1"
                fill="rgba(255, 255, 255, 0.3)"
              />
            );
          }
        }
      }
    });

    return dots;
  };

  return (
    <div className="relative w-full h-96 bg-black rounded-lg overflow-hidden flex items-center justify-center">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 800 400"
        className="absolute inset-0"
      >
        {createDottedMap()}
      </svg>
      
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="absolute w-2 h-2 rounded-full animate-pulse"
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
