
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TransactionTable from '../components/TransactionTable';
import MetricsCard from '../components/MetricsCard';

const Transactions = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Transaction Analysis</h1>
          <button
            onClick={() => setIsNavOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            More
          </button>
        </div>

        {/* Transaction Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricsCard
            title="Total Transactions (24h)"
            value="2.4M"
            color="text-blue-400"
            subtitle="+5.2% from yesterday"
          />
          
          <MetricsCard
            title="Transaction Volume"
            value="$45.2M"
            color="text-green-400"
            subtitle="In USD value"
          />
          
          <MetricsCard
            title="Average Gas Price"
            value="52 Gwei"
            color="text-orange-400"
            subtitle="Last hour"
          />
          
          <MetricsCard
            title="Success Rate"
            value="99.7%"
            color="text-purple-400"
            subtitle="Last 24 hours"
          />
        </div>

        {/* Transaction Type Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-white font-semibold mb-4">Transaction Types (24h)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span>Swap</span>
                </div>
                <span className="text-white font-semibold">847,234</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span>Send</span>
                </div>
                <span className="text-white font-semibold">623,891</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  <span>Mint</span>
                </div>
                <span className="text-white font-semibold">234,567</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span>Stake</span>
                </div>
                <span className="text-white font-semibold">156,789</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span>Burn</span>
                </div>
                <span className="text-white font-semibold">45,231</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-white font-semibold mb-4">Peak Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">12:00 - 13:00 UTC</span>
                <span className="text-green-400">45.2K TPS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">08:00 - 09:00 UTC</span>
                <span className="text-blue-400">42.8K TPS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">16:00 - 17:00 UTC</span>
                <span className="text-purple-400">41.1K TPS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">20:00 - 21:00 UTC</span>
                <span className="text-orange-400">38.9K TPS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Transaction Table */}
        <TransactionTable />
      </div>
    </div>
  );
};

export default Transactions;
