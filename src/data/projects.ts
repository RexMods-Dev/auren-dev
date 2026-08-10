import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '01',
    title: 'The Arden Residences',
    location: 'Kochi, Kerala',
    category: 'Luxury Residences',
    year: '2026',
    description: 'A benchmark in tropical modernism, featuring passive cooling, expansive terraces, and uninterrupted views of the backwaters.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    area: '120,000 Sq. Ft.',
    architecture: 'HĀVEN Studio',
    developer: 'HĀVEN · HOMES & ESTATES',
    gallery: [
      'https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: '02',
    title: 'Casa Verde',
    location: 'Bengaluru',
    category: 'Private Villas',
    year: '2025',
    description: 'A collection of 12 bespoke villas woven into an existing mango orchard, prioritizing privacy and natural materials.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    area: '85,000 Sq. Ft.',
    architecture: 'Studio Lotus & HĀVEN',
    developer: 'HĀVEN · HOMES & ESTATES',
  },
  {
    id: '03',
    title: 'The Mariner',
    location: 'Chennai',
    category: 'Waterfront Residences',
    year: '2024',
    description: 'Ultra-luxury apartments rising above the Bay of Bengal, featuring kinetic facades that respond to coastal winds.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    area: '250,000 Sq. Ft.',
    architecture: 'HĀVEN Studio',
    developer: 'HĀVEN · HOMES & ESTATES',
  },
  {
    id: '04',
    title: 'Aurelia Business District',
    location: 'Hyderabad',
    category: 'Commercial',
    year: '2023',
    description: 'A LEED Platinum certified commercial hub designed for the next generation of global enterprises.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    area: '1.2M Sq. Ft.',
    architecture: 'Foster + Partners',
    developer: 'HĀVEN · HOMES & ESTATES',
  }
];
