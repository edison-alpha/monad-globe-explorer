
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Validator = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const validators = Array.from({ length: 99 }, (_, i) => ({
    id: i + 1,
    address: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`,
    stake: Math.floor(Math.random() * 10000) + 1000,
    uptime: Math.floor(Math.random() * 5) + 95,
    status: Math.random() > 0.1 ? 'Active' : 'Inactive',
    lastBlock: Math.floor(Math.random() * 1000) + 21609000,
    commission: Math.floor(Math.random() * 10) + 1
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Validator Performance</h1>
          <button
            onClick={() => setIsNavOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            More
          </button>
        </div>

        {/* Validator Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm mb-2">Total Validators</h3>
            <div className="text-3xl font-bold text-white">99</div>
            <div className="text-sm text-green-400">All Active</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm mb-2">Average Uptime</h3>
            <div className="text-3xl font-bold text-green-400">97.8%</div>
            <div className="text-sm text-gray-500">Last 24h</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm mb-2">Total Stake</h3>
            <div className="text-3xl font-bold text-purple-400">542.3K MON</div>
            <div className="text-sm text-gray-500">Across all validators</div>
          </div>
        </div>

        {/* Validator Table */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
          <h3 className="text-white font-semibold mb-4">All Validators</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="text-left py-3">Rank</th>
                  <th className="text-left py-3">Validator</th>
                  <th className="text-left py-3">Stake (MON)</th>
                  <th className="text-left py-3">Uptime</th>
                  <th className="text-left py-3">Status</th>
                  <th className="text-left py-3">Last Block</th>
                  <th className="text-left py-3">Commission</th>
                </tr>
              </thead>
              <tbody className="max-h-96 overflow-y-auto">
                {validators.slice(0, 20).map((validator) => (
                  <tr key={validator.id} className="text-gray-300 border-b border-gray-800 hover:bg-gray-700/50">
                    <td className="py-3">#{validator.id}</td>
                    <td className="py-3">
                      <span className="font-mono text-blue-400">{validator.address}</span>
                    </td>
                    <td className="py-3">{validator.stake.toLocaleString()}</td>
                    <td className="py-3">
                      <span className={`${validator.uptime > 97 ? 'text-green-400' : validator.uptime > 95 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {validator.uptime}%
                      </span>
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded text-xs ${
                        validator.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {validator.status}
                      </span>
                    </td>
                    <td className="py-3">#{validator.lastBlock}</td>
                    <td className="py-3">{validator.commission}%</td>
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

export default Validator;
