
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

export interface Adventurer {
  id: string;
  name: string;
  role: Role;
  skills: string[];
  tagline: string;
  goal: Goal;
  avatar: string;
  level: number;
}

export interface PartyMember extends Adventurer {
  joinedAt: number;
}
