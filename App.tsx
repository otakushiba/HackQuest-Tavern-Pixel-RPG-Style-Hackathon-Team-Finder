
import React, { useState, useMemo, useEffect } from 'react';
import { Adventurer, Role, Goal, PartyMember } from './types';
import { mockAdventurers } from './data/mockAdventurers';
import Sidebar from './components/Sidebar';
import AdventurerCard from './components/AdventurerCard';
import PartyPanel from './components/PartyPanel';
import TavernBackground from './components/TavernBackground';
import { GoogleGenAI } from "@google/genai";

const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role | 'All'>('All');
  const [selectedGoal, setSelectedGoal] = useState<Goal | 'All'>('All');
  const [party, setParty] = useState<PartyMember[]>([]);
  const [geminiInsight, setGeminiInsight] = useState<string>("Welcome to the HackQuest Tavern, traveler!");
  const [isInsightLoading, setIsInsightLoading] = useState(false);

  const filteredAdventurers = useMemo(() => {
    return mockAdventurers.filter(adv => {
      const roleMatch = selectedRole === 'All' || adv.role === selectedRole;
      const goalMatch = selectedGoal === 'All' || adv.goal === selectedGoal;
      return roleMatch && goalMatch;
    });
  }, [selectedRole, selectedGoal]);

  const addToParty = (adv: Adventurer) => {
    if (party.length >= 5) {
      alert("Your party is full! Only 5 heroes allowed.");
      return;
    }
    if (party.find(p => p.id === adv.id)) return;
    setParty([...party, { ...adv, joinedAt: Date.now() }]);
  };

  const removeFromParty = (id: string) => {
    setParty(party.filter(p => p.id !== id));
  };

  const synergyScore = useMemo(() => {
    if (party.length === 0) return 0;
    const roles = new Set(party.map(p => p.role));
    const baseScore = (roles.size / 5) * 80;
    const countBonus = party.length * 4;
    return Math.min(100, Math.floor(baseScore + countBonus));
  }, [party]);

  // Use Gemini to provide "Tavern Wisdom" or Matchmaking Advice
  const fetchGeminiInsight = async () => {
    if (party.length === 0) return;
    setIsInsightLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const roles = party.map(p => p.role).join(", ");
      const prompt = `You are a wise fantasy tavern master. A hackathon team has these roles: ${roles}. 
      Give a short, 1-2 sentence humorous 16-bit RPG style advice for their team composition. 
      Keep it thematic (e.g., 'A party without a Design Ranger might lose their way in the Dungeons of UX!')`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      setGeminiInsight(response.text || "May your code be bug-free!");
    } catch (error) {
      console.error(error);
      setGeminiInsight("The spirits are silent... check your internet scroll.");
    } finally {
      setIsInsightLoading(false);
    }
  };

  useEffect(() => {
    if (party.length > 0) {
      const timer = setTimeout(() => {
        fetchGeminiInsight();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [party.length]);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden relative">
      <TavernBackground />
      
      {/* Navigation Bar */}
      <nav className="z-10 bg-[#1d1016] border-b-4 border-[#733e39] p-4 flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#f4b41b] pixel-border flex items-center justify-center">
            <span className="text-2xl">⚔️</span>
          </div>
          <h1 className="font-pixel text-2xl text-[#f4b41b] tracking-wider uppercase">
            HackQuest Tavern
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#3e2731] px-4 py-1 pixel-border text-[#f4b41b] font-pixel text-sm">
            HACKATHON_V2.5
          </div>
          <div className="bg-[#3e2731] px-4 py-1 pixel-border text-[#f4b41b] font-pixel text-sm">
            EST. 1994
          </div>
        </div>
      </nav>

      <main className="flex-1 flex overflow-hidden z-10 p-4 gap-4">
        {/* Left Sidebar: Filters */}
        <div className="w-64 flex flex-col gap-4">
          <Sidebar 
            selectedRole={selectedRole} 
            setSelectedRole={setSelectedRole}
            selectedGoal={selectedGoal}
            setSelectedGoal={setSelectedGoal}
          />
          
          {/* Tavern Master Insights */}
          <div className="flex-1 bg-[#1a1016] pixel-border p-4 text-[#e6e6e6]">
            <h3 className="font-pixel text-sm mb-4 text-[#f4b41b]">Tavern Wisdom</h3>
            <div className="bg-[#3e2731] p-3 border-2 border-[#733e39] text-lg leading-tight relative h-[120px] overflow-y-auto">
              {isInsightLoading ? (
                <div className="animate-pulse">Consulting the crystal ball...</div>
              ) : (
                <p>"{geminiInsight}"</p>
              )}
            </div>
          </div>
        </div>

        {/* Central Content: Adventurer Grid */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">
            {filteredAdventurers.map((adv) => (
              <AdventurerCard 
                key={adv.id} 
                adventurer={adv} 
                onRecruit={() => addToParty(adv)}
                isRecruited={!!party.find(p => p.id === adv.id)}
              />
            ))}
            {filteredAdventurers.length === 0 && (
              <div className="col-span-full h-64 flex items-center justify-center flex-col text-[#f4b41b] font-pixel">
                <span className="text-4xl mb-4">👻</span>
                <p>No heroes found for this quest...</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar: Party Panel */}
        <div className="w-80">
          <PartyPanel 
            party={party} 
            removeFromParty={removeFromParty}
            synergyScore={synergyScore}
          />
        </div>
      </main>

      {/* Footer / Status Bar */}
      <footer className="z-10 bg-[#1d1016] border-t-4 border-[#733e39] p-2 px-6 flex justify-between text-[#8a8a8a] font-pixel text-xs">
        <div>STATUS: READY TO HACK</div>
        <div className="flex gap-6">
          <span>LATENCY: 16MS</span>
          <span>LOCATION: HACKER_CAVE_B1</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
