
import React from 'react';
import { mockQuests } from '../data/mockQuests';
import QuestCard from './QuestCard';

const QuestBoard: React.FC = () => {
  return (
    <div className="relative w-full h-full p-8 min-h-[600px] bg-[#543329] border-8 border-[#311d17] shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] overflow-y-auto custom-scrollbar">
      {/* Wooden plank background effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #1a1016 40px)',
        backgroundSize: '100% 40px'
      }} />

      <div className="relative z-10 flex justify-between items-center mb-10">
        <div>
          <h2 className="font-pixel text-3xl text-[#f4b41b] drop-shadow-lg flex items-center gap-4 uppercase">
            <span className="text-4xl">📜</span> TAVERN QUEST BOARD
          </h2>
          <p className="text-[#e9ce9b] font-pixel text-sm mt-2">Find a guild and embark on a digital journey.</p>
        </div>
        
        <button className="bg-[#f4b41b] border-b-4 border-[#c18d15] text-[#1a1016] font-pixel px-6 py-3 flex items-center gap-3 hover:bg-[#ffcf4d] active:border-b-0 active:translate-y-[4px]">
          <span className="text-xl">+</span> POST QUEST
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-10">
        {mockQuests.map((quest) => (
          <QuestCard 
            key={quest.id} 
            quest={quest} 
            onJoin={() => alert(`Applied to join ${quest.teamName}!`)} 
          />
        ))}
      </div>
      
      {/* Atmospheric board details */}
      <div className="absolute bottom-4 right-4 text-[#e9ce9b]/30 font-pixel text-[10px] uppercase">
        Next board refresh in 02:45:12
      </div>
    </div>
  );
};

export default QuestBoard;
