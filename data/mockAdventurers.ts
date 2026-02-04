
import { Adventurer, Role, Goal, TimeCommitment } from '../types';

export const mockAdventurers: Adventurer[] = [
  {
    id: '1',
    name: 'PixelWizard',
    role: Role.Frontend,
    roleTitle: 'Archer',
    skills: ['React', 'Three.js', 'Tailwind'],
    tagline: 'Precision-striking components from afar.',
    goal: Goal.Winning,
    avatar: 'https://picsum.photos/seed/pixel1/64/64',
    level: 42,
    stats: { code: 9, design: 7, strategy: 5, pitch: 4 },
    timeCommitment: TimeCommitment.High
  },
  {
    id: '2',
    name: 'CodeKnight',
    role: Role.Backend,
    roleTitle: 'Defender',
    skills: ['Node.js', 'PostgreSQL', 'Redis'],
    tagline: 'The firewall that never falters.',
    goal: Goal.Learning,
    avatar: 'https://picsum.photos/seed/pixel2/64/64',
    level: 38,
    stats: { code: 8, design: 3, strategy: 6, pitch: 2 },
    timeCommitment: TimeCommitment.High
  },
  {
    id: '3',
    name: 'ArtRanger',
    role: Role.Design,
    roleTitle: 'Mystic',
    skills: ['Figma', 'Aseprite', 'Blender'],
    tagline: 'Visualizing worlds before they exist.',
    goal: Goal.Fun,
    avatar: 'https://picsum.photos/seed/pixel3/64/64',
    level: 35,
    stats: { code: 4, design: 10, strategy: 4, pitch: 6 },
    timeCommitment: TimeCommitment.Medium
  },
  {
    id: '4',
    name: 'TheArchitect',
    role: Role.Product,
    roleTitle: 'Paladin',
    skills: ['Agile', 'Jira', 'Strategy'],
    tagline: 'Leading the party through the fog of scope.',
    goal: Goal.Winning,
    avatar: 'https://picsum.photos/seed/pixel4/64/64',
    level: 50,
    stats: { code: 3, design: 5, strategy: 9, pitch: 7 },
    timeCommitment: TimeCommitment.High
  },
  {
    id: '5',
    name: 'SilverTongue',
    role: Role.Pitch,
    roleTitle: 'Bard',
    skills: ['Storytelling', 'Canva', 'Public Speaking'],
    tagline: 'Enchanting judges with melodic pitches.',
    goal: Goal.Fun,
    avatar: 'https://picsum.photos/seed/pixel5/64/64',
    level: 29,
    stats: { code: 2, design: 6, strategy: 5, pitch: 10 },
    timeCommitment: TimeCommitment.Low
  },
  {
    id: '6',
    name: 'NeoGopher',
    role: Role.Backend,
    roleTitle: 'Alchemist',
    skills: ['Go', 'Docker', 'K8s'],
    tagline: 'Transmuting bytes into efficient gold.',
    goal: Goal.Learning,
    avatar: 'https://picsum.photos/seed/pixel6/64/64',
    level: 45,
    stats: { code: 9, design: 2, strategy: 7, pitch: 3 },
    timeCommitment: TimeCommitment.Medium
  },
  {
    id: '7',
    name: 'VibeCheck',
    role: Role.Design,
    roleTitle: 'Rogue',
    skills: ['UX', 'Prototyping', 'User Research'],
    tagline: 'Sneaking past friction points in the UI.',
    goal: Goal.Fun,
    avatar: 'https://picsum.photos/seed/pixel7/64/64',
    level: 31,
    stats: { code: 5, design: 8, strategy: 6, pitch: 5 },
    timeCommitment: TimeCommitment.Medium
  },
  {
    id: '8',
    name: 'ByteMage',
    role: Role.Frontend,
    skills: ['TypeScript', 'Next.js', 'Web3'],
    roleTitle: 'Sorcerer',
    tagline: 'Conjuring interfaces with typed mana.',
    goal: Goal.Winning,
    avatar: 'https://picsum.photos/seed/pixel8/64/64',
    level: 48,
    stats: { code: 10, design: 6, strategy: 4, pitch: 5 },
    timeCommitment: TimeCommitment.High
  }
];
