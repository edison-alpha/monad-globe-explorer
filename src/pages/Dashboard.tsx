
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
    <div className="min-h-screen bg-black text-white">
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-2">Real-time visualization and analysis on</h2>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">MONAD blockchain</h2>
            </div>
            
            <MetricsCard
              title="Validator"
              value={validators}
              color="text-white"
            />
            
            <MetricsCard
              title="TPS (Current)"
              value={tps.toFixed(1)}
              color="text-green-400"
              showProgress={true}
              progress={Math.min(100, (tps / 100) * 100)}
            />
          </div>

          {/* Center - World Map */}
          <div className="lg:col-span-2">
            <WorldMap />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <MetricsCard
              title="Gas Price"
              value={`${gasPrice} Gwei`}
              color="text-orange-400"
            />
            
            <TransactionLegend />
            
            <MetricsCard
              title="Block (Latest)"
              value={`${(blockHeight / 1000000).toFixed(1)}M`}
              subtitle={blockHeight.toLocaleString()}
              color="text-blue-400"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-white font-semibold mb-2">Total transactions</h3>
            <div className="text-3xl font-bold text-white">{totalTransactions}</div>
            <div className="text-green-400 text-sm mt-1">📈 (24h)</div>
          </div>
          
          <div />
        </div>

        {/* Transaction Table */}
        <div className="mt-8">
          <TransactionTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
