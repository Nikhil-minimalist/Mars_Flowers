export default function handler(req, res) {
  const products = [
    { id:1, name:'Blush Peony', emoji:'🌸', price:38, desc:'Soft pink blooms, lush and fragrant', tag:'Romantic', category:'romantic' },
    { id:2, name:'Golden Sunflower', emoji:'🌻', price:28, desc:'Bold, cheerful and full of warmth', tag:'Seasonal', category:'seasonal' },
    { id:3, name:'Lavender Dream', emoji:'💜', price:32, desc:'Wild lavender and soft purple tones', tag:'Wildflower', category:'wildflower' },
    { id:4, name:'Red Rose Eternal', emoji:'🌹', price:55, desc:'Classic long-stem red roses, 12 stems', tag:'Luxury', category:'luxury' },
    { id:5, name:'Spring Tulips', emoji:'🌷', price:30, desc:'Mixed pastel tulips from Dutch farms', tag:'Seasonal', category:'seasonal' },
    { id:6, name:'Wild Meadow', emoji:'🌼', price:35, desc:'Wildflowers and grasses, gathered look', tag:'Wildflower', category:'wildflower' },
    { id:7, name:'Hibiscus Bliss', emoji:'🌺', price:42, desc:'Vibrant tropical statement blooms', tag:'Luxury', category:'luxury' },
    { id:8, name:'Cherry Blossom', emoji:'🌸', price:48, desc:'Delicate sakura sprigs in full bloom', tag:'Romantic', category:'romantic' }
  ];

  res.status(200).json({ products });
}
