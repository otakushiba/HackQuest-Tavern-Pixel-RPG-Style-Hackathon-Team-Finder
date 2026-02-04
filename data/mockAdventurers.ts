
import { Adventurer, Role, Goal } from '../types';

export const mockAdventurers: Adventurer[] = [
  {
    id: '1',
    name: 'PixelWizard',
    role: Role.Frontend,
    skills: ['React', 'Three.js', 'Tailwind'],
    tagline: 'I turn coffee into pixel-perfect components.',
    goal: Goal.Winning,
    avatar: 'https://picsum.photos/seed/pixel1/64/64',
    level: 42
  },
  {
    id: '2',
    name: 'CodeKnight',
    role: Role.Backend,
    skills: ['Node.js', 'PostgreSQL', 'Redis'],
    tagline: 'Defending the database from corrupt queries.',
    goal: Goal.Learning,
    avatar: 'https://picsum.photos/seed/pixel2/64/64',
    level: 38
  },
  {
    id: '3',
    name: 'ArtRanger',
    role: Role.Design,
    skills: ['Figma', 'Aseprite', 'Blender'],
    tagline: 'Swift as an arrow, precise as a pixel.',
    goal: Goal.Fun,
    avatar: 'https://picsum.photos/seed/pixel3/64/64',
    level: 35
  },
  {
    id: '4',
    name: 'TheArchitect',
    role: Role.Product,
    skills: ['Agile', 'Jira', 'Strategy'],
    tagline: 'Mapping the dungeons of project scope.',
    goal: Goal.Winning,
    avatar: 'https://picsum.photos/seed/pixel4/64/64',
    level: 50
  },
  {
    id: '5',
    name: 'SilverTongue',
    role: Role.Pitch,
    skills: ['Storytelling', 'Canva', 'Public Speaking'],
    tagline: 'Charisma is my primary stat.',
    goal: Goal.Fun,
    avatar: 'https://picsum.photos/seed/pixel5/64/64',
    level: 29
  },
  {
    id: '6',
    name: 'NeoGopher',
    role: Role.Backend,
    skills: ['Go', 'Docker', 'K8s'],
    tagline: 'Concurrency is my middle name.',
    goal: Goal.Learning,
    avatar: 'https://picsum.photos/seed/pixel6/64/64',
    level: 45
  },
  {
    id: '7',
    name: 'VibeCheck',
    role: Role.Design,
    skills: ['UX', 'Prototyping', 'User Research'],
    tagline: 'Optimizing for the user experience meta.',
    goal: Goal.Fun,
    avatar: 'https://picsum.photos/seed/pixel7/64/64',
    level: 31
  },
  {
    id: '8',
    name: 'ByteMage',
    role: Role.Frontend,
    skills: ['TypeScript', 'Next.js', 'Web3'],
    tagline: 'Spellcasting with typed interfaces.',
    goal: Goal.Winning,
    avatar: 'https://picsum.photos/seed/pixel8/64/64',
    level: 48
  }
];
