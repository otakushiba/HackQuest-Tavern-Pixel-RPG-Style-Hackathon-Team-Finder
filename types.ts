
export enum Role {
  Frontend = 'Frontend',
  Backend = 'Backend',
  Design = 'Design',
  Product = 'Product',
  Pitch = 'Pitch'
}

export enum Goal {
  Winning = 'Win Awards',
  Fun = 'For Fun',
  Learning = 'Learn New Tech'
}

export enum TimeCommitment {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low'
}

export interface Stats {
  code: number;
  design: number;
  strategy: number;
  pitch: number;
}

export interface Adventurer {
  id: string;
  name: string;
  role: Role;
  roleTitle?: string; // e.g., "Archer", "Mage", "Knight"
  skills: string[];
  tagline: string;
  goal: Goal;
  avatar: string;
  level: number;
  stats: Stats;
  timeCommitment: TimeCommitment;
}

export interface PartyMember extends Adventurer {
  joinedAt: number;
}

export type QuestDifficulty = 'Easy' | 'Normal' | 'Hard' | 'Elite';

export interface Quest {
  id: string;
  teamName: string;
  theme: string;
  neededRoles: Role[];
  pitch: string;
  difficulty: QuestDifficulty;
  postedBy: string;
  memberCount: number;
  maxMembers: number;
}
