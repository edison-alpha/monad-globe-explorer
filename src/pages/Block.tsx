
import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';

const Block = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const blockData = [
    { number: 21610001, size: '125.4 KB', gasUsed: '89.5%', timestamp: '2 mins ago', transactions: 234 },
    { number: 21610000, size: '98.2 KB', gasUsed: '76.3%', timestamp: '2 mins ago', transactions: 189 },
    { number: 21609999, size: '156.7 KB', gasUsed: '94.1%', timestamp: '4 mins ago', transactions: 298 },
    { number: 21609998, size: '87.3 KB', gasUsed: '65.8%', timestamp: '6 mins ago', transactions: 156 },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Block Overview</h1>
          <button
            onClick={() => setIsNavOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            More
          </button>
        </div>

        {/* Block Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm mb-2">Largest Block (24h)</h3>
            <div className="text-2xl font-bold text-white">256.8 KB</div>
            <div className="text-sm text-gray-500">Block #21609834</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm mb-2">Highest Fee Block</h3>
            <div className="text-2xl font-bold text-orange-400">145.2 ETH</div>
            <div className="text-sm text-gray-500">Block #21609756</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm mb-2">Total Blocks (24h)</h3>
            <div className="text-2xl font-bold text-blue-400">7,245</div>
            <div className="text-sm text-green-400">+12.3%</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm mb-2">Avg. Block Fullness</h3>
            <div className="text-2xl font-bold text-purple-400">82.4%</div>
            <div className="text-sm text-gray-500">Last 24h</div>
          </div>
        </div>

        {/* Latest Block Commits */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
          <h3 className="text-white font-semibold mb-4">Latest Block Commits</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="text-left py-3">Block</th>
                  <th className="text-left py-3">Size</th>
                  <th className="text-left py-3">Gas Used</th>
                  <th className="text-left py-3">Timestamp</th>
                  <th className="text-left py-3">Transactions</th>
                  <th className="text-left py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {blockData.map((block) => (
                  <tr key={block.number} className="text-gray-300 border-b border-gray-800 hover:bg-gray-700/50">
                    <td className="py-3">
                      <span className="text-blue-400 font-mono">#{block.number}</span>
                    </td>
                    <td className="py-3">{block.size}</td>
                    <td className="py-3">
                      <span className={`${parseFloat(block.gasUsed) > 90 ? 'text-red-400' : parseFloat(block.gasUsed) > 75 ? 'text-yellow-400' : 'text-green-400'}`}>
                        {block.gasUsed}
                      </span>
                    </td>
                    <td className="py-3">{block.timestamp}</td>
                    <td className="py-3">{block.transactions}</td>
                    <td className="py-3">
                      <span className="text-green-400">✓ Confirmed</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
