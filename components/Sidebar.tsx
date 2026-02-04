
import React from 'react';
import { Role, Goal } from '../types';

interface SidebarProps {
  selectedRole: Role | 'All';
  setSelectedRole: (role: Role | 'All') => void;
  selectedGoal: Goal | 'All';
  setSelectedGoal: (goal: Goal | 'All') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  selectedRole, 
  setSelectedRole, 
  selectedGoal, 
  setSelectedGoal 
}) => {
  const roles = [Role.Frontend, Role.Backend, Role.Design, Role.Product, Role.Pitch];
  const goals = [Goal.Winning, Goal.Fun, Goal.Learning];

  return (
    <aside className="bg-[#1a1016] pixel-border p-4 flex flex-col gap-6 text-[#e6e6e6]">
      <section>
        <h3 className="font-pixel text-xs mb-4 text-[#f4b41b] flex items-center gap-2">
          <span>🛡️</span> ROLE FILTERS
        </h3>
        <div className="flex flex-col gap-2">
          <button 
            onClick={() => setSelectedRole('All')}
            className={`text-left px-3 py-1 font-pixel text-sm hover:bg-[#733e39] transition-colors ${selectedRole === 'All' ? 'bg-[#733e39] text-[#f4b41b]' : ''}`}
          >
            [ ALL ROLES ]
          </button>
          {roles.map(role => (
            <button 
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`text-left px-3 py-1 font-pixel text-sm hover:bg-[#733e39] transition-colors ${selectedRole === role ? 'bg-[#733e39] text-[#f4b41b]' : ''}`}
            >
              {role.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-pixel text-xs mb-4 text-[#f4b41b] flex items-center gap-2">
          <span>🎯</span> GOAL FILTERS
        </h3>
        <div className="flex flex-col gap-2">
          <button 
            onClick={() => setSelectedGoal('All')}
            className={`text-left px-3 py-1 font-pixel text-sm hover:bg-[#733e39] transition-colors ${selectedGoal === 'All' ? 'bg-[#733e39] text-[#f4b41b]' : ''}`}
          >
            [ ALL GOALS ]
          </button>
          {goals.map(goal => (
            <button 
              key={goal}
              onClick={() => setSelectedGoal(goal)}
              className={`text-left px-3 py-1 font-pixel text-sm hover:bg-[#733e39] transition-colors ${selectedGoal === goal ? 'bg-[#733e39] text-[#f4b41b]' : ''}`}
            >
              {goal.toUpperCase()}
            </button>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
