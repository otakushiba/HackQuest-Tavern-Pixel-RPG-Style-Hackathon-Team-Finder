
import React, { useMemo } from 'react';
import { Adventurer, TimeCommitment } from '../types';
import { skillDescriptions } from '../data/skillDescriptions';

interface AdventurerCardProps {
  adventurer: Adventurer;
  onRecruit: () => void;
  onViewDetails: () => void;
  isRecruited: boolean;
}

const PIXEL_AVATAR_SEEDS = [
  'BraveKnight', 'WiseMage', 'SwiftThief', 'NatureRanger',
  'DarkWarlock', 'HolyPaladin', 'ForestElf', 'MountainDwarf',
  'AncientWizard', 'ShadowAssassin', 'CunningRogue', 'MysticDruid'
];

const StatBar: React.FC<{ label: string; value: number; color: string; icon: string }> = ({ label, value, color, icon }) => (
  <div className="flex flex-col gap-1">
    <div className="flex justify-between items-center px-1">
      <span className="font-pixel text-[10px] text-[#f4b41b] flex items-center gap-1 uppercase">
        <span>{icon}</span> {label}
      </span>
      <span className="font-pixel text-[10px] text-white">{value}/10</span>
    </div>
    <div className="h-3 bg-[#1d1016] border border-[#733e39] p-0.5 relative">
      <div 
        className="h-full transition-all duration-1000 ease-out shadow-[inset_0_2px_0_rgba(255,255,255,0.2)]"
        style={{ width: `${value * 10}%`, backgroundColor: color }}
      />
    </div>
  </div>
);

const AdventurerCard: React.FC<AdventurerCardProps> = ({ adventurer, onRecruit, onViewDetails, isRecruited }) => {
  const avatarUrl = useMemo(() => {
    const seedIndex = parseInt(adventurer.id) % PIXEL_AVATAR_SEEDS.length;
    const seed = PIXEL_AVATAR_SEEDS[seedIndex];
    return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
  }, [adventurer.id]);

  const timeColor = {
    [TimeCommitment.High]: '#ff4d4d',
    [TimeCommitment.Medium]: '#f4b41b',
    [TimeCommitment.Low]: '#265c42'
  }[adventurer.timeCommitment];

  return (
    <div className="bg-[#1a1016] pixel-border p-5 pixel-card transition-all hover:translate-y-[-4px] group flex flex-col h-full text-[#e6e6e6]">
      {/* Top Section: Avatar & Identity */}
      <div className="flex gap-4 mb-5 items-center">
        <div className="relative shrink-0">
          <div className="w-24 h-24 bg-[#3e2731] border-4 border-[#733e39] shadow-inner flex items-center justify-center overflow-hidden">
            <img 
              src={avatarUrl} 
              alt={adventurer.name} 
              className="w-full h-full object-cover rendering-pixelated scale-110" 
            />
          </div>
          <div className="absolute -bottom-2 -left-2 bg-[#f4b41b] text-[#1a1016] font-pixel text-xs px-2 py-0.5 border-2 border-[#1a1016] shadow-md">
            LV.{adventurer.level}
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <h2 className="font-pixel text-[#f4b41b] text-xl leading-none mb-1 group-hover:text-white transition-colors">
            {adventurer.name}
          </h2>
          <div className="font-pixel text-sm text-[#8a8a8a] flex items-center gap-2">
            <span className="text-white bg-[#733e39] px-2 py-0.5 text-[10px]">{adventurer.role}</span>
            <span className="italic">— {adventurer.roleTitle || 'Hacker'}</span>
          </div>
        </div>
      </div>

      {/* Attributes Section */}
      <div className="bg-[#2a181d] border-2 border-[#3e2731] p-3 mb-4 grid grid-cols-2 gap-x-4 gap-y-3">
        <StatBar label="Code" value={adventurer.stats.code} color="#265c42" icon="⌨️" />
        <StatBar label="Design" value={adventurer.stats.design} color="#733e39" icon="🎨" />
        <StatBar label="Strat" value={adventurer.stats.strategy} color="#4a4a4a" icon="📜" />
        <StatBar label="Pitch" value={adventurer.stats.pitch} color="#f4b41b" icon="📣" />
      </div>

      {/* Bio / Skills Section */}
      <div className="flex-1 space-y-3 mb-5">
        <p className="text-sm leading-tight italic text-[#b5b5b5] bg-[#3e2731]/30 p-2 border-l-4 border-[#f4b41b]">
          "{adventurer.tagline}"
        </p>
        <div className="flex flex-wrap gap-1.5">
          {adventurer.skills.map(skill => (
            <div key={skill} className="relative group/skill">
              <span className="bg-[#1d1016] border border-[#733e39] text-[#f4b41b] text-[10px] px-2 py-0.5 font-pixel uppercase cursor-help transition-colors hover:bg-[#733e39] hover:text-white">
                {skill}
              </span>
              {/* Tooltip */}
              <div className="invisible group-hover/skill:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 z-30 pointer-events-none transition-all duration-200">
                <div className="bg-[#1a1016] pixel-border p-2 text-[10px] text-[#e6e6e6] leading-tight shadow-2xl relative">
                  {skillDescriptions[skill] || "A mysterious technique of the modern age."}
                  {/* Tooltip Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-8 border-x-transparent border-t-8 border-t-[#733e39]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Tags & Actions */}
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-[#1d1016] p-2 border border-[#3e2731]">
           <div className="flex flex-col">
              <span className="text-[9px] text-[#8a8a8a] font-pixel">GOAL</span>
              <span className="text-[10px] font-pixel text-white">{adventurer.goal.toUpperCase()}</span>
           </div>
           <div className="flex flex-col items-end">
              <span className="text-[9px] text-[#8a8a8a] font-pixel">COMMITMENT</span>
              <span className="text-[10px] font-pixel" style={{ color: timeColor }}>{adventurer.timeCommitment.toUpperCase()}</span>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={onRecruit}
            disabled={isRecruited}
            className={`font-pixel text-sm py-2.5 border-b-4 shadow-lg transition-all ${
              isRecruited 
                ? 'bg-[#3e2731] border-[#1a1016] text-[#8a8a8a] cursor-not-allowed' 
                : 'bg-[#265c42] border-[#1d4230] text-white hover:bg-[#2e6d4f] active:border-b-0 active:translate-y-[4px] animate-pixel-pulse'
            }`}
          >
            {isRecruited ? 'IN PARTY' : 'INVITE'}
          </button>
          <button 
            onClick={onViewDetails}
            className="bg-[#733e39] border-b-4 border-[#4f2a27] text-white font-pixel text-sm py-2.5 hover:bg-[#8e4c46] active:border-b-0 active:translate-y-[4px]"
          >
            DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdventurerCard;
