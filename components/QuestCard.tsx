
import React from 'react';
import { Quest, QuestDifficulty } from '../types';

interface QuestCardProps {
  quest: Quest;
  onJoin: () => void;
}

const difficultyColors: Record<QuestDifficulty, string> = {
  'Easy': '#265c42',
  'Normal': '#2a52be',
  'Hard': '#733e39',
  'Elite': '#f4b41b'
};

const QuestCard: React.FC<QuestCardProps> = ({ quest, onJoin }) => {
  return (
    <div className="relative group">
      {/* The Pin/Nail */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#4a4a4a] border-2 border-[#1a1016] rounded-full z-10 shadow-md shadow-black/50" />
      
      {/* The Paper */}
      <div className="bg-[#e9ce9b] border-2 border-[#733e39] p-4 pt-6 shadow-[4px_4px_0_rgba(0,0,0,0.3)] min-h-[220px] flex flex-col hover:rotate-1 transition-transform cursor-pointer overflow-hidden">
        {/* Paper texture detail */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-[#733e39]/10 rounded-bl-3xl" />
        
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-pixel text-[#3e2731] text-sm font-bold uppercase tracking-tighter">
            {quest.teamName}
          </h3>
          <span className="font-pixel text-[10px] px-1 border border-[#3e2731]/30 text-[#3e2731]/60">
            {quest.memberCount}/{quest.maxMembers}
          </span>
        </div>

        <div className="mb-2">
          <span 
            className="font-pixel text-[9px] px-2 py-0.5 text-white inline-block border border-[#1a1016]"
            style={{ backgroundColor: difficultyColors[quest.difficulty] }}
          >
            {quest.difficulty.toUpperCase()} QUEST
          </span>
          <div className="text-[#733e39] font-pixel text-[10px] mt-1 underline decoration-dotted uppercase">
            {quest.theme}
          </div>
        </div>

        <p className="text-[#3e2731] text-xs font-serif leading-tight italic mb-3 line-clamp-3">
          "{quest.pitch}"
        </p>

        <div className="mt-auto">
          <div className="text-[9px] font-pixel text-[#733e39] mb-1">RECRUITING:</div>
          <div className="flex flex-wrap gap-1 mb-4">
            {quest.neededRoles.map(role => (
              <span key={role} className="bg-[#3e2731] text-white text-[8px] px-1.5 font-pixel leading-none py-1">
                {role.toUpperCase()}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={(e) => { e.stopPropagation(); onJoin(); }}
              className="bg-[#265c42] border-b-4 border-[#1d4230] text-white font-pixel text-[10px] py-2 hover:bg-[#2e6d4f] active:border-b-0 active:translate-y-[4px]"
            >
              JOIN TEAM
            </button>
            <button className="bg-[#733e39] border-b-4 border-[#4f2a27] text-white font-pixel text-[10px] py-2 hover:bg-[#8e4c46] active:border-b-0 active:translate-y-[4px]">
              DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
