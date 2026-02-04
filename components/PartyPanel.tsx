
import React from 'react';
import { PartyMember } from '../types';

interface PartyPanelProps {
  party: PartyMember[];
  removeFromParty: (id: string) => void;
  synergyScore: number;
}

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

const PartyPanel: React.FC<PartyPanelProps> = ({ party, removeFromParty, synergyScore }) => {
  const slots = Array(5).fill(null);

  const getAvatarUrl = (id: string) => {
    const seedIndex = parseInt(id) % PIXEL_AVATAR_SEEDS.length;
    const seed = PIXEL_AVATAR_SEEDS[seedIndex];
    return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`;
  };

  return (
    <div className="bg-[#1a1016] pixel-border p-4 h-full flex flex-col text-[#e6e6e6]">
      <div className="mb-6">
        <h2 className="font-pixel text-[#f4b41b] text-lg mb-4 flex items-center justify-between">
          <span>YOUR PARTY</span>
          <span className="text-sm opacity-50">{party.length}/5</span>
        </h2>
        
        <div className="space-y-4">
          {slots.map((_, idx) => {
            const member = party[idx];
            if (member) {
              return (
                <div key={member.id} className="bg-[#3e2731] border-2 border-[#733e39] p-2 flex gap-3 relative animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="w-10 h-10 border-2 border-[#733e39] overflow-hidden bg-[#1a1016]">
                    <img 
                      src={getAvatarUrl(member.id)} 
                      alt={member.name} 
                      className="w-full h-full object-cover rendering-pixelated" 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-pixel text-xs text-[#f4b41b] truncate">{member.name}</div>
                    <div className="font-pixel text-[10px] text-[#8a8a8a]">{member.role}</div>
                  </div>
                  <button 
                    onClick={() => removeFromParty(member.id)}
                    className="text-[#733e39] hover:text-[#ff4d4d] font-bold px-1 transition-colors"
                    title="Dismiss Member"
                  >
                    ×
                  </button>
                </div>
              );
            }
            return (
              <div key={idx} className="bg-[#1d1016] border-2 border-dashed border-[#3e2731] p-2 h-[60px] flex items-center justify-center opacity-40">
                <span className="font-pixel text-[10px]">EMPTY SLOT</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-auto pt-6 border-t-4 border-[#3e2731]">
        <div className="flex justify-between items-center mb-2">
          <span className="font-pixel text-xs text-[#f4b41b]">TEAM SYNERGY</span>
          <span className="font-pixel text-xs">{synergyScore}%</span>
        </div>
        <div className="h-6 bg-[#1d1016] border-2 border-[#3e2731] p-1">
          <div 
            className="h-full bg-gradient-to-r from-[#733e39] to-[#f4b41b] transition-all duration-500 ease-out" 
            style={{ width: `${synergyScore}%` }}
          />
        </div>
        <p className="text-[10px] text-[#8a8a8a] mt-3 leading-tight italic">
          Higher synergy increases your chances of legendary project drops.
        </p>

        <button className="w-full mt-6 bg-[#f4b41b] border-b-4 border-[#c18d15] text-[#1a1016] font-pixel py-3 hover:bg-[#ffcf4d] active:border-b-0 active:translate-y-[4px]">
          EMBARK ON QUEST
        </button>
      </div>
    </div>
  );
};

export default PartyPanel;
