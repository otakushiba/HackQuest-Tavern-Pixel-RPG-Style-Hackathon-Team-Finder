
import { Quest, Role } from '../types';

export const mockQuests: Quest[] = [
  {
    id: 'q1',
    teamName: 'Cyber Sigils',
    theme: 'Generative AI',
    neededRoles: [Role.Frontend, Role.Design],
    pitch: 'Building a neural network that generates ancient scrolls.',
    difficulty: 'Hard',
    postedBy: 'Archmage_Zero',
    memberCount: 2,
    maxMembers: 4
  },
  {
    id: 'q2',
    teamName: 'Eco Warriors',
    theme: 'Sustainability',
    neededRoles: [Role.Backend, Role.Pitch],
    pitch: 'A gamified recycling quest for the local realm.',
    difficulty: 'Normal',
    postedBy: 'GreenLeaf',
    memberCount: 3,
    maxMembers: 5
  },
  {
    id: 'q3',
    teamName: 'Loot Box Logic',
    theme: 'EdTech',
    neededRoles: [Role.Product, Role.Backend],
    pitch: 'Making math as addictive as dungeon crawling.',
    difficulty: 'Elite',
    postedBy: 'Scholar_Rex',
    memberCount: 1,
    maxMembers: 4
  },
  {
    id: 'q4',
    teamName: 'Void Walkers',
    theme: 'Web3 / Crypto',
    neededRoles: [Role.Design, Role.Pitch],
    pitch: 'Decentralizing the tavern’s inventory system.',
    difficulty: 'Normal',
    postedBy: 'Ghost_In_The_Machine',
    memberCount: 2,
    maxMembers: 4
  },
  {
    id: 'q5',
    teamName: 'Health Potion Brew',
    theme: 'Health & Wellness',
    neededRoles: [Role.Frontend],
    pitch: 'An app that tracks your hydration like mana levels.',
    difficulty: 'Easy',
    postedBy: 'Alchemist_Ann',
    memberCount: 4,
    maxMembers: 5
  },
  {
    id: 'q6',
    teamName: 'Pixel Pioneers',
    theme: 'Gaming',
    neededRoles: [Role.Design, Role.Backend, Role.Frontend],
    pitch: 'A co-op rogue-like built in 48 hours.',
    difficulty: 'Elite',
    postedBy: 'IndieDev_Joe',
    memberCount: 1,
    maxMembers: 4
  }
];
