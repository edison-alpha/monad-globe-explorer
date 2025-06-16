
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import UserProfile from '../components/UserProfile';
import WorldMap from '../components/WorldMap';
import MetricsCard from '../components/MetricsCard';
import TransactionLegend from '../components/TransactionLegend';
import TransactionTable from '../components/TransactionTable';

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [tps, setTps] = useState(35.5);
  const [validators, setValidators] = useState(99);
  const [gasPrice, setGasPrice] = useState(52);
  const [blockHeight, setBlockHeight] = useState(21610000);
  const [totalTransactions, setTotalTransactions] = useState('1,727,662,5879,188,787');

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTps(prev => Math.max(10, prev + (Math.random() - 0.5) * 5));
      setGasPrice(prev => Math.max(30, prev + (Math.random() - 0.5) * 10));
      setBlockHeight(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-auto">
      <Navbar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <UserProfile />
          <button
            onClick={() => setIsNavOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            More
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            {/* Title Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white leading-tight">
                Real-time visualization and<br />
                analysis of the<br />
                <span className="text-purple-400">MONAD</span> blockchain
              </h2>
            </div>
            
            {/* Validator Card */}
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">Validator</div>
              <div className="text-4xl font-bold text-white">{validators}</div>
            </div>
            
            {/* TPS Card */}
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">TPS <span className="text-gray-500">(Current)</span></div>
              <div className="text-4xl font-bold text-white">{tps.toFixed(1)}</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (tps / 100) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Center - World Map */}
          <div className="col-span-12 lg:col-span-6">
            <WorldMap />
            
            {/* Total Transactions - Below Map */}
            <div className="mt-6 text-center">
              <div className="text-gray-400 text-lg mb-2">Total transactions</div>
              <div className="text-3xl font-bold text-white mb-1">{totalTransactions}</div>
              <div className="text-green-400 text-sm flex items-center justify-center">
                📈 <span className="ml-1">(24h)</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            {/* Gas Price */}
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">Gas Price</div>
              <div className="text-4xl font-bold text-white">{gasPrice} Gwei</div>
            </div>
            
            {/* Transaction Legend */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-gray-300 text-sm">Swap</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-gray-300 text-sm">Send</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="text-gray-300 text-sm">Stake</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full" />
                <span className="text-gray-300 text-sm">Mint</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-gray-300 text-sm">Burn</span>
              </div>
            </div>
            
            {/* Block Info */}
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">Block <span className="text-gray-500">(Latest)</span></div>
              <div className="text-4xl font-bold text-white">{(blockHeight / 1000000).toFixed(1)}M</div>
            </div>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="mt-8">
          <TransactionTable />
        </div>

        {/* Footer */}
        <div className="mt-12 flex justify-between items-center">
          <div className="text-purple-400 font-bold text-lg">MONAD is Future</div>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">💬</span>
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">𝕏</span>
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">📧</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
