
import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold">0x</span>
      </div>
      <div>
        <div className="text-white font-semibold">Made by</div>
        <div className="text-purple-400 text-sm">0xMukti_w</div>
      </div>
    </div>
  );
};

export default UserProfile;
