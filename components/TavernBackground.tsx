
import React from 'react';

const TavernBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden tavern-bg pointer-events-none opacity-50">
      {/* Tavern Furniture Simulation */}
      <div className="absolute top-[20%] left-[10%] w-40 h-24 bg-[#543329] border-b-8 border-[#311d17] opacity-60">
        <div className="absolute -top-4 left-4 w-8 h-8 bg-[#8e4c46] border-2 border-[#1a1016]" />
        <div className="absolute -top-4 right-4 w-8 h-8 bg-[#8e4c46] border-2 border-[#1a1016]" />
      </div>

      <div className="absolute bottom-[20%] right-[15%] w-48 h-28 bg-[#543329] border-b-8 border-[#311d17] opacity-60">
        <div className="absolute -top-4 left-6 w-8 h-8 bg-[#8e4c46] border-2 border-[#1a1016]" />
        <div className="absolute -top-4 right-6 w-8 h-8 bg-[#8e4c46] border-2 border-[#1a1016]" />
      </div>

      {/* Decorative Light Rays */}
      <div className="absolute -top-20 -left-20 w-[40%] h-[120%] bg-white/5 rotate-45 blur-3xl pointer-events-none" />
      <div className="absolute -top-20 right-0 w-[20%] h-[120%] bg-white/5 -rotate-12 blur-2xl pointer-events-none" />
    </div>
  );
};

export default TavernBackground;
