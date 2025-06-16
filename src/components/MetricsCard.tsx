
import React from 'react';

interface MetricsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: string;
  showProgress?: boolean;
  progress?: number;
}

const MetricsCard = ({ title, value, subtitle, color = 'text-white', showProgress = false, progress = 0 }: MetricsCardProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
      <div className="text-gray-400 text-sm mb-1">{title}</div>
      <div className={`text-2xl font-bold ${color} mb-1`}>{value}</div>
      {subtitle && <div className="text-gray-500 text-xs">{subtitle}</div>}
      {showProgress && (
        <div className="mt-2">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MetricsCard;
