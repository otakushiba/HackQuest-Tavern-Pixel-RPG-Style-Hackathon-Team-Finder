
import React, { useMemo } from 'react';
import { Adventurer } from '../types';

interface AdventurerCardProps {
  adventurer: Adventurer;
  onRecruit: () => void;
  isRecruited: boolean;
}

// A predefined set of high-quality pixel art seeds for the DiceBear API
const PIXEL_AVATAR_SEEDS = [
  'BraveKnight',
  'WiseMage',
  'SwiftThief',
  'NatureRanger',
  'DarkWarlock',
  'HolyPaladin',
  'ForestElf',
  'MountainDwarf',
  'AncientWizard',
  'ShadowAssassin',
  'CunningRogue',
  'MysticDruid'
];

const AdventurerCard: React.FC<AdventurerCardProps> = ({ adventurer, onRecruit, isRecruited }) => {
  // Select an avatar seed based on the adventurer's ID to ensure consistency between renders
  const avatarUrl = useMemo(() => {
    const seedIndex = parseInt(adventurer.id) % PIXEL_AVATAR_SEEDS.length;
    const seed = PIXEL_AVATAR_SEEDS[seedIndex];
    // Using DiceBear Pixel Art API for authentic 16-bit style avatars
    return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
  }, [adventurer.id]);

  return (
    <div className="bg-[#1a1016] pixel-border p-4 pixel-card transition-all hover:translate-y-[-4px] group flex flex-col h-full">
      <div className="flex gap-4 items-start mb-4">
        <div className="relative">
          <div className="w-16 h-16 bg-[#3e2731] border-4 border-[#733e39] flex items-center justify-center overflow-hidden">
            <img 
              src={avatarUrl} 
              alt={adventurer.name} 
              className="w-full h-full object-cover rendering-pixelated" 
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#f4b41b] text-[#1a1016] font-pixel text-[10px] px-1 border-2 border-[#1a1016]">
            LV.{adventurer.level}
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-pixel text-[#f4b41b] text-lg leading-none mb-1 group-hover:text-white transition-colors">
            {adventurer.name}
          </h2>
          <div className="bg-[#265c42] text-white font-pixel text-[10px] px-2 py-0.5 inline-block rounded-sm mb-2">
            {adventurer.role}
          </div>
          <p className="text-[#8a8a8a] text-sm leading-tight italic line-clamp-2">
            "{adventurer.tagline}"
          </p>
        </div>
      </div>

      <div className="flex-1 mb-4">
        <div className="flex flex-wrap gap-2">
          {adventurer.skills.map(skill => (
            <span key={skill} className="bg-[#3e2731] border border-[#733e39] text-[#e6e6e6] text-xs px-2 py-1 font-pixel">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-auto">
        <button 
          onClick={onRecruit}
          disabled={isRecruited}
          className={`font-pixel text-sm py-2 border-b-4 transition-all ${
            isRecruited 
              ? 'bg-[#3e2731] border-[#1a1016] text-[#8a8a8a] cursor-not-allowed' 
              : 'bg-[#265c42] border-[#1d4230] text-white hover:bg-[#2e6d4f] active:border-b-0 active:translate-y-[4px] animate-pixel-pulse'
          }`}
        >
          {isRecruited ? 'JOINED' : 'RECRUIT'}
        </button>
        <button className="bg-[#733e39] border-b-4 border-[#4f2a27] text-white font-pixel text-sm py-2 hover:bg-[#8e4c46] active:border-b-0 active:translate-y-[4px]">
          PROFILE
        </button>
      </div>
    </div>
  );
};

export default AdventurerCard;
