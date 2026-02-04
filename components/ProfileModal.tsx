
import React from 'react';
import { Adventurer, TimeCommitment } from '../types';
import { skillDescriptions } from '../data/skillDescriptions';

interface ProfileModalProps {
  adventurer: Adventurer;
  onClose: () => void;
  onRecruit: () => void;
  isRecruited: boolean;
}

const StatBar: React.FC<{ label: string; value: number; color: string; icon: string }> = ({ label, value, color, icon }) => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-between items-center px-1">
      <span className="font-pixel text-xs text-[#f4b41b] flex items-center gap-2 uppercase">
        <span className="text-base">{icon}</span> {label}
      </span>
      <span className="font-pixel text-xs text-white">{value} / 10</span>
    </div>
    <div className="h-5 bg-[#1d1016] border-2 border-[#733e39] p-1 relative">
      <div 
        className="h-full transition-all duration-700 ease-out shadow-[inset_0_2px_0_rgba(255,255,255,0.2)]"
        style={{ width: `${value * 10}%`, backgroundColor: color }}
      />
    </div>
  </div>
);

const ProfileModal: React.FC<ProfileModalProps> = ({ adventurer, onClose, onRecruit, isRecruited }) => {
  const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${adventurer.name}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

  const timeColor = {
    [TimeCommitment.High]: '#ff4d4d',
    [TimeCommitment.Medium]: '#f4b41b',
    [TimeCommitment.Low]: '#265c42'
  }[adventurer.timeCommitment];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#1a1016] pixel-border p-8 animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 font-pixel text-[#f4b41b] hover:text-white text-2xl"
        >
          [X]
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Avatar & High Level Identity */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-40 h-40 bg-[#3e2731] border-4 border-[#733e39] shadow-inner flex items-center justify-center overflow-hidden">
                <img 
                  src={avatarUrl} 
                  alt={adventurer.name} 
                  className="w-full h-full object-cover rendering-pixelated scale-125" 
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#f4b41b] text-[#1a1016] font-pixel text-lg px-3 py-1 border-4 border-[#1a1016] shadow-xl">
                LV.{adventurer.level}
              </div>
            </div>
            
            <h2 className="font-pixel text-[#f4b41b] text-3xl mb-2 text-center">{adventurer.name}</h2>
            <div className="bg-[#733e39] px-4 py-1 text-white font-pixel text-sm mb-4">
              {adventurer.role.toUpperCase()}
            </div>
            <p className="text-[#8a8a8a] font-pixel italic text-xs text-center">"{adventurer.roleTitle || 'The Wanderer'}"</p>
          </div>

          {/* Right: Detailed Stats & Bio */}
          <div className="flex-1 space-y-8">
            <section>
              <h3 className="font-pixel text-[#f4b41b] text-sm mb-4 border-b-2 border-[#3e2731] pb-2">CHARACTER ATTRIBUTES</h3>
              <div className="grid grid-cols-1 gap-4">
                <StatBar label="Code Proficiency" value={adventurer.stats.code} color="#265c42" icon="⌨️" />
                <StatBar label="Design Aesthetics" value={adventurer.stats.design} color="#733e39" icon="🎨" />
                <StatBar label="Strategic Planning" value={adventurer.stats.strategy} color="#4a4a4a" icon="📜" />
                <StatBar label="Pitch & Presence" value={adventurer.stats.pitch} color="#f4b41b" icon="📣" />
              </div>
            </section>

            <section>
              <h3 className="font-pixel text-[#f4b41b] text-sm mb-4 border-b-2 border-[#3e2731] pb-2">GUILD INFO</h3>
              <div className="space-y-4">
                 <div className="flex justify-between items-center bg-[#1d1016] p-3 border border-[#3e2731]">
                    <div className="flex flex-col">
                       <span className="text-[10px] text-[#8a8a8a] font-pixel">CURRENT GOAL</span>
                       <span className="text-sm font-pixel text-white">{adventurer.goal}</span>
                    </div>
                    <div className="flex flex-col items-end">
                       <span className="text-[10px] text-[#8a8a8a] font-pixel">COMMITMENT</span>
                       <span className="text-sm font-pixel" style={{ color: timeColor }}>{adventurer.timeCommitment} MANA</span>
                    </div>
                 </div>
                 <p className="text-sm text-[#e6e6e6] leading-relaxed italic bg-[#3e2731]/30 p-4 border-l-4 border-[#f4b41b]">
                   {adventurer.tagline}
                 </p>
              </div>
            </section>

            <section>
              <h3 className="font-pixel text-[#f4b41b] text-sm mb-4 border-b-2 border-[#3e2731] pb-2">INVENTORY (SKILLS)</h3>
              <div className="flex flex-wrap gap-2">
                {adventurer.skills.map(skill => (
                  <div key={skill} className="relative group/skill">
                    <span className="bg-[#1d1016] border-2 border-[#733e39] text-[#f4b41b] text-xs px-3 py-1 font-pixel uppercase hover:bg-[#733e39] hover:text-white transition-colors cursor-help inline-block">
                      {skill}
                    </span>
                    {/* Tooltip */}
                    <div className="invisible group-hover/skill:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 z-30 pointer-events-none transition-all duration-200">
                      <div className="bg-[#1a1016] pixel-border p-3 text-[10px] text-[#e6e6e6] leading-tight shadow-2xl relative">
                        {skillDescriptions[skill] || "A mysterious technique of the modern age."}
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-8 border-x-transparent border-t-8 border-t-[#733e39]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-10 pt-6 border-t-4 border-[#3e2731] flex justify-end gap-4">
           <button 
             onClick={onClose}
             className="px-6 py-3 font-pixel text-sm bg-[#3e2731] text-[#8a8a8a] border-b-4 border-[#1a1016] hover:text-white active:border-b-0 active:translate-y-[4px]"
           >
             RETURN
           </button>
           <button 
             onClick={() => { onRecruit(); onClose(); }}
             disabled={isRecruited}
             className={`px-8 py-3 font-pixel text-sm border-b-4 ${
               isRecruited 
                 ? 'bg-[#1d4230]/50 border-[#1a1016] text-[#8a8a8a] cursor-not-allowed' 
                 : 'bg-[#265c42] border-[#1d4230] text-white hover:bg-[#2e6d4f] active:border-b-0 active:translate-y-[4px] animate-pixel-pulse'
             }`}
           >
             {isRecruited ? 'ALREADY IN PARTY' : 'RECRUIT TO PARTY'}
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
