const products = [
  // Indoor Plants
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 24.99,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.1",
    description: "A beautiful tropical plant with iconic split leaves."
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 19.99,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.15",
    description: "Elegant flowering plant perfect for indoor spaces."
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 22.99,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.2",
    description: "A hardy plant with tall architectural leaves."
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    price: 34.99,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.25",
    description: "A statement plant with large violin-shaped leaves."
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 27.99,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.3",
    description: "Glossy-leaved plant that brings richness to interiors."
  },
  {
    id: 6,
    name: "ZZ Plant",
    price: 21.99,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.35",
    description: "Low-maintenance greenery for modern homes."
  },

  // Succulents
  {
    id: 7,
    name: "Aloe Vera",
    price: 14.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.4",
    description: "A useful succulent with thick green leaves."
  },
  {
    id: 8,
    name: "Echeveria",
    price: 12.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.45",
    description: "Compact rosette-shaped succulent."
  },
  {
    id: 9,
    name: "Jade Plant",
    price: 16.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.5",
    description: "Classic succulent with thick rounded leaves."
  },
  {
    id: 10,
    name: "Haworthia",
    price: 13.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.55",
    description: "Small striped succulent ideal for desks."
  },
  {
    id: 11,
    name: "String of Pearls",
    price: 18.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.6",
    description: "Trailing succulent with pearl-shaped leaves."
  },
  {
    id: 12,
    name: "Zebra Cactus",
    price: 15.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.65",
    description: "Distinctive compact succulent with striped leaves."
  },

  // Air Purifying Plants
  {
    id: 13,
    name: "Boston Fern",
    price: 17.99,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.7",
    description: "Lush fern with soft, arching fronds."
  },
  {
    id: 14,
    name: "Spider Plant",
    price: 15.99,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.75",
    description: "Classic houseplant with long striped leaves."
  },
  {
    id: 15,
    name: "Areca Palm",
    price: 29.99,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.8",
    description: "Tropical palm that creates a resort-like atmosphere."
  },
  {
    id: 16,
    name: "Chinese Evergreen",
    price: 23.99,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.85",
    description: "Colorful foliage plant that works well indoors."
  },
  {
    id: 17,
    name: "Dracaena",
    price: 26.99,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.9",
    description: "Elegant upright plant with dramatic foliage."
  },
  {
    id: 18,
    name: "Calathea",
    price: 25.99,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&h=300&fit=crop&crop=focalpoint&fp-y=0.95",
    description: "Decorative plant with beautifully patterned leaves."
  }
];

export default products;
