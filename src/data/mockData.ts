import { Room, DiningVenue, SpaTreatment, SpecialOffer, GalleryItem, Testimonial } from '../types';

export const HOTEL_INFO = {
  name: 'TaverenOak',
  tagline: 'Timeless Grandeur in the Heart of the Capital',
  shortBio: 'Erected in 1936 amidst lush royal palm avenues, TaverenOak stands as an icon of colonial elegance, Victorian art deco architecture, and peerless Indian hospitality.',
  address: 'Janpath, Connaught Place, New Delhi, 110001, India',
  phone: '+91 11 2334 1234',
  reservationsPhone: '+91 11 4150 1234',
  email: 'concierge@taverenoak.com',
  reservationsEmail: 'stay@taverenoak.com',
  checkInTime: '14:00',
  checkOutTime: '12:00',
  architect: 'Blomfield & Sir Edwin Lutyens Heritage Circle (1936)',
  artworksCount: '4,000+ Museum Lithographs & Aquatints',
  kingPalmsCount: 24,
  currencyRates: {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0095
  }
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'heritage-grand-room',
    slug: 'heritage-grand-room',
    name: 'Heritage Grand Room',
    category: 'Colonial Room',
    tagline: 'Timeless colonial charm with hand-carved teakwood and high ceilings',
    description: 'Imbued with classic 1930s elegance, featuring Italian marble bathrooms, Burma teak writing bureau, and serene views of the central royal courtyard.',
    longDescription: 'The Heritage Grand Room captures the spirit of Delhi’s golden architectural era. Spanning 450 square feet with 14-foot lofty ceilings, each room showcases authentic colonial sketches, hand-knotted Kashmiri carpets, and an expansive walk-in Italian marble bathroom with deep porcelain soaking tub and French rain shower.',
    sizeSqFt: 450,
    bedType: 'Imperial King or Twin',
    maxGuests: 2,
    pricePerNightINR: 28500,
    view: 'Heritage Courtyard & Verandah',
    mainImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Personal Butler on Request',
      'Pasticceria High Tea Service',
      'Italian Carrara Marble Bathroom',
      'Deep Soaking Porcelain Tub',
      'Bespoke Forest Essentials Toiletries',
      'High-Speed Wi-Fi 6',
      'Nespresso & Artisanal Darjeeling Tea Station',
      'Shoe Shine & Pressing Privileges'
    ],
    features: [
      '14-foot High Ceilings',
      'Hand-carved Teak Writing Bureau',
      'Original 19th Century Lithographs',
      'In-room Safe with Laptop Charger',
      'Bose Sound System'
    ],
    rating: 4.9,
    reviewsCount: 142
  },
  {
    id: 'art-deco-suite',
    slug: 'art-deco-suite',
    name: 'Art Deco Luxury Suite',
    category: 'Art Deco Suite',
    tagline: 'Streamline modernism curated with geometric accents and velvet lounges',
    description: 'An homage to the Paris 1925 Exposition Internationale, featuring geometric symmetry, polished chrome fixtures, and a private sunlit salon.',
    longDescription: 'Spanning 750 square feet, the Art Deco Luxury Suite is an architectural gem. Featuring a separate salon with plush velvet seating, vintage cocktail trolley, and an elevated master bed chamber. French doors open onto private colonnaded balconies overlooking our century-old banyan trees and royal palm lawns.',
    sizeSqFt: 750,
    bedType: 'Grand Four-Poster King',
    maxGuests: 3,
    pricePerNightINR: 48000,
    view: 'King Palm Lawns & Pool Oasis',
    mainImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Dedicated 24-Hour Imperial Butler',
      'Complimentary Airport Limousine Transfer',
      'Private Bar with Handcrafted Bitters',
      'Dual Marble Vanities & Jacuzzi Tub',
      'Dyson Supersonic Hair Care Suite',
      'Daily Evening Cocktails in 1911 Lounge',
      'Express In-Suite Check-in & Check-out',
      'Exclusive Pillow Menu (8 Varieties)'
    ],
    features: [
      'Separate Living Salon & Dining Alcove',
      'Private Colonnaded Balcony',
      'Curated Art Deco Glassware',
      'Artisanal Linen Duvets 600 Thread Count',
      'Walk-in Dressing Wardrobe'
    ],
    rating: 5.0,
    reviewsCount: 98
  },
  {
    id: 'royal-imperial-suite',
    slug: 'royal-imperial-suite',
    name: 'The Royal Imperial Suite',
    category: 'Royal Imperial Suite',
    tagline: 'The pinnacle of regal splendor, diplomatic luxury, and private sanctuary',
    description: 'Our crown jewel spanning 2,100 square feet, reserved for dignitaries, royalty, and connoisseurs seeking utmost heritage privacy and majesty.',
    longDescription: 'The Royal Imperial Suite at TaverenOak has hosted prime ministers, monarchs, and cultural luminaries. Spanning over 2,100 square feet, it comprises a grand drawing room with antique crystal chandeliers, an eight-seat dining salon, private butler pantry, executive study with antique maps, and a palatial master chamber with hand-painted gold leaf gilding and a therapeutic hammam steam shower.',
    sizeSqFt: 2100,
    bedType: 'Emperor Sovereign King',
    maxGuests: 4,
    pricePerNightINR: 125000,
    view: 'Panoramic Royal Gardens & Connaught Vistas',
    mainImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Dedicated Head Butler & Private Chef Service',
      'Rolls-Royce Silver Ghost / Phantom Airport Chauffeur',
      'Private In-Suite Hammam Steam & Sauna',
      'Eight-Seat Banquet Dining Table',
      'Cellar Selection of Grand Cru Wines & Champagne',
      'Bespoke Silk Robes Embroidered with Monogram',
      'Unlimited Spa & Wellness Treatments',
      'Curator-led Art Museum Private Tour'
    ],
    features: [
      '2,100 sq ft Presidential Layout',
      'Museum-Grade 18th Century Daniell Aquatints',
      'Private Pantry & Service Entrance',
      'Bullet-Resistant Glazing & Discrete Security Quarters',
      'Custom Steinway Baby Grand Piano in Drawing Room'
    ],
    rating: 5.0,
    reviewsCount: 64
  },
  {
    id: 'eliza-luxury-room',
    slug: 'eliza-luxury-room',
    name: 'Eliza Luxury Room',
    category: 'Eliza Room',
    tagline: 'Bespoke sanctuary meticulously curated for the discerning woman traveler',
    description: 'Designed exclusively with thoughtful security, dedicated female attendants, specialized wellness amenities, and serene botanical decor.',
    longDescription: 'Pioneered by our heritage hotel, Eliza Rooms offer an unparalleled sanctuary for solo female travelers and discerning women. Located on a secured wing with camera-monitored single-entry access and female staff, each room includes organic aromatherapy kits, manicure bars, lighted vanity mirrors, and silk sleep masks.',
    sizeSqFt: 460,
    bedType: 'Plush Featherbed King',
    maxGuests: 2,
    pricePerNightINR: 32000,
    view: 'Fragrant Herb Gardens & Zen Fountains',
    mainImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Dedicated All-Female Concierge & Butler Wing',
      'Secure Monitored Access Floor',
      'High-Magnification Illuminated Vanity Mirror',
      'Curated Organic Skincare Bar & Bath Bombs',
      'Silk Eye Mask & Herbal Sleep Mist',
      'In-room Yoga Mat & Resistance Bands',
      'Complimentary Ironing & Wardrobe Unpacking',
      'Afternoon Tea Tray Served In-Suite'
    ],
    features: [
      'Double-Lock Acoustic Privacy Door',
      'Fresh Cut Roses Refreshed Daily',
      'Botanical Aromatherapy Diffuser',
      'Deep Marble Tub with Lavender Salts'
    ],
    rating: 4.9,
    reviewsCount: 112
  },
  {
    id: 'viceroy-heritage-suite',
    slug: 'viceroy-heritage-suite',
    name: 'Viceroy Heritage Suite',
    category: 'Colonial Room',
    tagline: 'Stately colonial architecture with mahogany writing library',
    description: 'Evoking the vintage charm of early 20th century expeditions with antique brass globe, leather armchairs, and sweeping garden verandah.',
    longDescription: 'Spanning 900 square feet, the Viceroy Heritage Suite celebrates scholarly heritage and grandeur. It features an expansive private verandah with cane plantation chairs, a grand study lined with vintage encyclopedias and colonial maps, and a sumptuous master bedroom overlooking the hotel’s century-old palm trees.',
    sizeSqFt: 900,
    bedType: 'Four-Poster Teak King',
    maxGuests: 3,
    pricePerNightINR: 62000,
    view: 'Central King Palm Verandah',
    mainImage: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Private Verandah with Plantation Loungers',
      'Dedicated Butler Service',
      'Fine Malt & Sherry Decanters on Arrival',
      'Antique Clawfoot Cast Iron Tub',
      'High-Speed Wi-Fi & Workstation',
      'Complimentary Continental Breakfast',
      'Valet Pressing Service'
    ],
    features: [
      'Hand-carved Mahogany Bookcases',
      'Original Brass Nautical Instruments',
      'Stained Glass Fanlight Windows',
      'Soundproofed Heritage Shutter Blinds'
    ],
    rating: 4.8,
    reviewsCount: 76
  }
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: 'oak-1911-restaurant',
    slug: 'oak-1911-restaurant',
    name: '1911 Restaurant & Verandah',
    cuisine: 'All-Day International, Anglo-Indian & Lavish Buffet',
    tagline: 'Colonial opulence honoring the historic 1911 Delhi Durbar',
    description: 'An ode to colonial grandeur with original photographs, red leather banquettes, and an airy verandah overlooking landscaped gardens.',
    longDescription: '1911 Restaurant pays homage to the grand milestone year when Delhi was proclaimed the capital of India. Featuring rich dark wood paneling, memorabilia of the British Raj, and pristine stained-glass rotundas, guests savor an opulent Sunday Champagne brunch, classic roast beef, and authentic Anglo-Indian curries.',
    hours: {
      breakfast: '06:30 - 10:30',
      lunch: '12:30 - 15:30',
      highTea: '16:00 - 18:30',
      dinner: '19:00 - 23:45'
    },
    dressCode: 'Smart Casual (Collared shirts, no flip-flops)',
    seatingCapacity: 140,
    location: 'Lobby Level, South Verandah',
    mainImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80'
    ],
    signatureDishes: [
      '1911 Colonial Sunday Roast with Yorkshire Pudding',
      'Railway Mutton Curry with Saffron Pulao',
      'Smoked Salmon Blinis with Oscietra Caviar',
      'Old Delhi Butter Chicken with Truffle Naan'
    ],
    sampleMenu: {
      starters: [
        { name: 'Lobster & Crab Cocktail', description: 'Avocado mousse, marie rose sauce, kaffir lime zest', priceINR: 2400, dietary: 'Non-Vegetarian' },
        { name: 'Burrata di Puglia', description: 'Heirloom tomatoes, basil emulsion, pine nut brittle', priceINR: 1950, dietary: 'Vegetarian' },
        { name: 'Colonial Mulligatawny Soup', description: 'Spiced lentil broth, braised chicken slivers, basmati rice crisp', priceINR: 1450, dietary: 'Chef Signature' }
      ],
      mains: [
        { name: 'Traditional 1911 Roast Rib-Eye', description: 'Rosemary jus, butter-whipped potatoes, heritage carrots', priceINR: 3800, dietary: 'Non-Vegetarian' },
        { name: 'Imperial Dak Bungalow Chicken', description: 'Caramelized onion gravy, boiled egg, buttered pav', priceINR: 2600, dietary: 'Chef Signature' },
        { name: 'Wild Mushroom Risotto', description: 'Carnaroli rice, black winter truffle carpaccio, aged parmesan', priceINR: 2350, dietary: 'Vegetarian' }
      ],
      desserts: [
        { name: 'Warm Fig & Date Pudding', description: 'Single malt butterscotch drizzle, Madagascar vanilla bean gelato', priceINR: 1200, dietary: 'Vegetarian' },
        { name: 'Classic Opera Torte', description: 'Valrhona dark chocolate ganache, espresso almond sponge', priceINR: 1100, dietary: 'Vegetarian' }
      ],
      beverages: [
        { name: 'Viceroy’s Pimm’s Cup', description: 'Gin, ginger ale, garden cucumber, mint, summer berries', priceINR: 1400 },
        { name: 'First Flush Imperial Darjeeling', description: 'Single estate Makaibari organic brew in silver pot', priceINR: 750 }
      ]
    },
    awards: ['Best All-Day Dining in India - Times Food Guide', 'Condé Nast Gold List Favorite']
  },
  {
    id: 'the-spice-route',
    slug: 'the-spice-route',
    name: 'The Spice Route',
    cuisine: 'Pan-Asian & Southeast Asian Haute Gastronomy',
    tagline: 'An architectural marvel hand-painted over seven years by temple artisans',
    description: 'Consistently ranked among the world’s top restaurants, charting the spice maritime journey from Malabar to Vietnam, Thailand, and Java.',
    longDescription: 'Designed by master artisan Rajeev Sethi, The Spice Route is divided into nine theatrical sections reflecting the journey of human life from birth to salvation through authentic Thai, Malaysian, and Indonesian temple carvings. Using secret herb blends and fresh spices flown in weekly, the cuisine is an unforgettable voyage.',
    hours: {
      lunch: '12:30 - 15:00',
      dinner: '19:00 - 23:30'
    },
    dressCode: 'Formal / Elegant Evening Attire',
    seatingCapacity: 90,
    location: 'Courtyard Pavilion Wing',
    mainImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80'
    ],
    signatureDishes: [
      'Kung Nang Phad Prik Phao (Jumbo prawns in roasted chili paste)',
      'Chemeen Thoren (Kerala coastal wok-tossed prawns with coconut)',
      'Gaeng Kiew Wan Gai (Aromatic green chicken curry with baby eggplants)',
      'Phad Thai Goong (Traditional wok rice noodles with tamarind reduction)'
    ],
    sampleMenu: {
      starters: [
        { name: 'Tom Yum Goong', description: 'Lemongrass broth, galangal, straw mushrooms, tiger prawns', priceINR: 1800, dietary: 'Non-Vegetarian' },
        { name: 'Som Tum Thai', description: 'Green papaya, bird’s eye chili, roasted peanuts, palm sugar dressing', priceINR: 1450, dietary: 'Vegan' },
        { name: 'Satay Gai Ruam', description: 'Chargrilled chicken skewers, peanut reduction, cucumber relish', priceINR: 1750, dietary: 'Chef Signature' }
      ],
      mains: [
        { name: 'Pla Rad Prik', description: 'Crispy whole red snapper, three-flavor chili glaze, crispy holy basil', priceINR: 3600, dietary: 'Chef Signature' },
        { name: 'Massaman Lamb Shank', description: 'Slow-braised lamb, sweet shallots, baby potatoes, roasted cashews', priceINR: 3200, dietary: 'Non-Vegetarian' },
        { name: 'Tofu & Water Chestnut Green Curry', description: 'Simmered in freshly pressed coconut milk, kaffir lime leaf', priceINR: 2100, dietary: 'Vegetarian' }
      ],
      desserts: [
        { name: 'Khao Niew Mamuang', description: 'Sweet butterfly-pea sticky rice, ripe Alphonso mango, coconut cream', priceINR: 1350, dietary: 'Vegan' },
        { name: 'Pandan Crème Brûlée', description: 'Caramelized raw sugar shell, toasted sesame seed crisp', priceINR: 1150, dietary: 'Vegetarian' }
      ],
      beverages: [
        { name: 'Silk Route Martini', description: 'Lemongrass vodka, lychee liqueur, chili rim, fresh ginger', priceINR: 1600 },
        { name: 'Chilled Jasmine & Butterfly Pea Infusion', description: 'House iced botanical nectar with wild honey', priceINR: 650 }
      ]
    },
    awards: ['Ranked World’s Top 10 Best Restaurants by Condé Nast', 'Michelin Guide Selection Honoree']
  },
  {
    id: 'san-gimignano',
    slug: 'san-gimignano',
    name: 'San Gimignano',
    cuisine: 'Tuscan Italian & Al Fresco Fine Dining',
    tagline: 'Romantic candlelit Tuscan courtyard under ancient banyan branches',
    description: 'Authentic regional Italian cuisine paired with an encyclopedic cellar of Chianti, Barolo, and Super Tuscans.',
    longDescription: 'San Gimignano brings the soul of Tuscany to central New Delhi. With an intimate whitewashed trattoria dining room and a starlit al fresco courtyard draped in bougainvillea, guests indulge in handmade pastas rolled daily, wood-fired seasonal truffles, and imported San Daniele prosciutto.',
    hours: {
      lunch: '12:30 - 15:00',
      dinner: '19:00 - 23:30'
    },
    dressCode: 'Smart Casual / Elegant',
    seatingCapacity: 75,
    location: 'West Terrace Gardens',
    mainImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
    ],
    signatureDishes: [
      'Handcrafted Pappardelle al Cinghiale (Braised ragù)',
      'Ossobuco alla Milanese with Saffron Risotto',
      'Carpaccio di Manzo with Black Truffle & Arugula',
      'Wood-fired Torta al Cioccolato Valrhona'
    ],
    sampleMenu: {
      starters: [
        { name: 'Carpaccio di Manzo', description: 'Thinly sliced tenderloin, caper berries, shaved Parmigiano 24 months', priceINR: 2200, dietary: 'Non-Vegetarian' },
        { name: 'Insalata di Carciofi', description: 'Baby artichokes, shaved fennel, pecorino toscano, citrus drizzle', priceINR: 1850, dietary: 'Vegetarian' }
      ],
      mains: [
        { name: 'Tagliolini al Tartufo', description: 'Hand-cut egg pasta, Normandy butter, shaved black Norcia truffles', priceINR: 3400, dietary: 'Chef Signature' },
        { name: 'Branzino in Crosta di Sale', description: 'Salt-crusted Mediterranean sea bass, sautéed broccolini, lemon emulsion', priceINR: 3600, dietary: 'Non-Vegetarian' }
      ],
      desserts: [
        { name: 'Traditional Tiramisù al Mascarpone', description: 'Savoiardi biscuits soaked in Illy espresso, dark cocoa', priceINR: 1250, dietary: 'Vegetarian' }
      ],
      beverages: [
        { name: 'Antinori Tignanello Super Tuscan (Glass)', description: 'Sangiovese & Cabernet blend, oak-aged', priceINR: 3800 },
        { name: 'Classic Negroni Classico', description: 'Campari, Carpano Antica Formula, Plymouth Gin', priceINR: 1550 }
      ]
    },
    awards: ['Wine Spectator Award of Excellence (12 Consecutive Years)', 'Best Italian Restaurant in Delhi NCR']
  },
  {
    id: 'daniells-tavern',
    slug: 'daniells-tavern',
    name: "Daniell's Tavern",
    cuisine: 'Pan-Indian Heritage Cuisine',
    tagline: 'Reliving the culinary expeditions of Thomas and William Daniell',
    description: 'Celebrating historic regional recipes discovered along the 18th-century royal rivers and trade outposts of India.',
    longDescription: 'Named after artists Thomas and William Daniell who journeyed across India in 1786 sketching monumental temples and royal courts, this restaurant curates centuries-old royal family recipes—from Awadhi dum biryanis to Chettinad pepper delicacies and Kashmiri rogan josh.',
    hours: {
      dinner: '19:00 - 23:45'
    },
    dressCode: 'Traditional Indian Elegance or Smart Formal',
    seatingCapacity: 85,
    location: 'North Courtyard Gallery',
    mainImage: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
    ],
    signatureDishes: [
      'Awadhi Dum Gosht Biryani in Sealed Clay Pot',
      'Nalli Nihari with Taftan Bread',
      'Kakori Galawat Kabab with Warqi Paratha',
      'Kashmir Ki Kesar Phirni with Silver Leaf'
    ],
    sampleMenu: {
      starters: [
        { name: 'Kakori Galawat Kabab', description: 'Melt-in-mouth smoked lamb patties, saffron essence, rose petal dust', priceINR: 2300, dietary: 'Chef Signature' },
        { name: 'Dahi Ke Kebab', description: 'Hung yogurt patties flavored with cardamom, fresh pomegranate reduction', priceINR: 1650, dietary: 'Vegetarian' }
      ],
      mains: [
        { name: 'Daniell’s Shahi Nalli Nihari', description: 'Overnight-braised lamb shanks in rich aromatic bone marrow stock', priceINR: 3100, dietary: 'Chef Signature' },
        { name: 'Paneer Lababdar', description: 'Cottage cheese cubes in rich tomato, melon seed, and fenugreek gravy', priceINR: 1950, dietary: 'Vegetarian' }
      ],
      desserts: [
        { name: 'Shahi Tukda with Rabri', description: 'Crisp ghee-fried brioche steeped in saffron syrup, thick clotted cream', priceINR: 1100, dietary: 'Vegetarian' }
      ],
      beverages: [
        { name: 'Kashmiri Kahwa in Brass Samovar', description: 'Green tea, saffron strands, crushed almonds, cinnamon', priceINR: 650 }
      ]
    },
    awards: ['Heritage Dining Award - Culinary Guild of India']
  },
  {
    id: 'the-patisserie',
    slug: 'the-patisserie',
    name: 'The Imperial Patisserie & Salon de Thé',
    cuisine: 'French Viennoiserie, Artisanal Chocolates & High Tea',
    tagline: 'Handcrafted pastries, French macarons, and vintage single-origin teas',
    description: 'An ethereal tea room with French boiserie, glass display cabinets filled with pralines, freshly baked brioches, and afternoon tea tiers.',
    longDescription: 'Curated by our Master French Pastry Chef, the Patisserie satisfies sweet cravings with delicate mille-feuilles, Valrhona single-origin truffles, fresh fruit tartlets, and scones served with Devonshire clotted cream and homemade strawberry-rhubarb preserve.',
    hours: {
      highTea: '10:00 - 22:00',
      dinner: '10:00 - 22:00'
    },
    dressCode: 'Casual & Relaxed',
    seatingCapacity: 45,
    location: 'Atrium Promenade',
    mainImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80'
    ],
    signatureDishes: [
      'TaverenOak Royal High Tea Tower (Savory & Sweet Tier)',
      'Tahitian Vanilla Bean Mille-Feuille',
      'Dark Gianduja Hazelnut Rocher',
      'Alphonso Mango & Passionfruit Tartlet'
    ],
    sampleMenu: {
      starters: [
        { name: 'Royal English High Tea Service', description: 'Selection of finger sandwiches, warm scones, clotted cream, 4 petit fours, choice of loose leaf tea', priceINR: 2800, dietary: 'Chef Signature' }
      ],
      mains: [
        { name: 'Quiche Lorraine with Smoked Bacon', description: 'Served with micro-green salad and house vinaigrette', priceINR: 1450, dietary: 'Non-Vegetarian' },
        { name: 'Spinach & Goat Cheese Croissant', description: 'Flaky French butter pastry, warm goat cheese center', priceINR: 1100, dietary: 'Vegetarian' }
      ],
      desserts: [
        { name: 'Assorted French Macarons Box (6 Pcs)', description: 'Pistachio, Salted Caramel, Rose Petal, Dark Chocolate, Cassis, Coffee', priceINR: 1200, dietary: 'Vegetarian' },
        { name: 'Artisanal Single-Origin Bonbons Box (12 Pcs)', description: 'Crafted with 70% Guanaja chocolate', priceINR: 1800, dietary: 'Vegetarian' }
      ],
      beverages: [
        { name: 'Rose Petal Silver Needle White Tea', description: 'Rare hand-plucked buds from Darjeeling', priceINR: 850 }
      ]
    },
    awards: ['Best Luxury Bakery in Delhi NCR - Food Lovers Awards']
  },
  {
    id: 'oak-1911-bar',
    slug: 'oak-1911-bar',
    name: '1911 Bar & Heritage Lounge',
    cuisine: 'Rare Single Malts, Vintage Cognacs & Bespoke Cocktails',
    tagline: 'Gentlemen’s club atmosphere with leather wingback chairs and historic brass tokens',
    description: 'An intimate sanctuary offering more than 500 whiskies, signature martinis, and an exclusive collection of Cuban cigars in a mahogany walk-in humidor.',
    longDescription: 'Step through velvet curtains into the 1911 Bar, where stained glass, antique leather club chairs, and memorabilia of the colonial cavalry set the mood. Our head mixologist concocts drinks with home-made bitters, smoked spices, and rare vintage spirits.',
    hours: {
      dinner: '17:00 - 01:00'
    },
    dressCode: 'Smart Casual / Evening',
    seatingCapacity: 60,
    location: 'South Colonnade',
    mainImage: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80'
    ],
    signatureDishes: [
      'The 1911 Smoked Oak Old Fashioned',
      'Imperial Truffle Fries with Pecorino',
      'Charcuterie Board with Parma Ham & 24-Month Manchego'
    ],
    sampleMenu: {
      starters: [
        { name: 'House Smoked Salmon Canapés', description: 'Dill cream cheese, caper berry on rye toast', priceINR: 1650, dietary: 'Non-Vegetarian' },
        { name: 'Truffle & Fontina Croquettes', description: 'Panko crust, garlic aioli dipping sauce', priceINR: 1350, dietary: 'Vegetarian' }
      ],
      mains: [
        { name: 'Prime Wagyu Slider Trio', description: 'Brioche buns, caramelized onion jam, aged cheddar', priceINR: 2400, dietary: 'Non-Vegetarian' }
      ],
      desserts: [
        { name: 'Whisky-Infused Chocolate Truffles', description: 'Made with 18-year Single Malt scotch', priceINR: 950, dietary: 'Vegetarian' }
      ],
      beverages: [
        { name: 'The Delhi Durbar Signature Cocktail', description: 'Bourbon, cardamom bitters, spiced honey syrup, orange peel smoke', priceINR: 1850 },
        { name: 'Macallan 18 Year Double Cask (Peg)', description: 'Highland Single Malt Scotch Whisky', priceINR: 4200 }
      ]
    },
    awards: ['Top 50 Bars in Asia', 'Best Luxury Hotel Bar in India']
  }
];

export const SPA_TREATMENTS: SpaTreatment[] = [
  {
    id: 'royal-shirodhara-abhyanga',
    name: 'The Royal Shirodhara & Abhyanga Harmony',
    category: 'Ayurvedic Rituals',
    durationMinutes: 90,
    priceINR: 12500,
    description: 'A continuous stream of warm herbalized medicated sesame oil poured rhythmically over the forehead third eye chakra, followed by synchronized full-body massage.',
    benefits: [
      'Dissolves mental fatigue, stress, and insomnia',
      'Balances the Vata dosha and calms the nervous system',
      'Deeply nourishes scalp and rejuvenates sensory organs'
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'sufi-sensory-oil-ritual',
    name: 'Imperial Sufi Floral Oil Ceremony',
    category: 'Imperial Signatures',
    durationMinutes: 105,
    priceINR: 14000,
    description: 'Inspired by mystic Sufi poets, blending pure Damask rose attar, sandalwood, and frankincense with warm poultices to unlock profound tranquility.',
    benefits: [
      'Softens muscular tension and restores vital prana',
      'Infuses skin with high-potency floral antioxidants',
      'Deep state of emotional bliss and meditative stillness'
    ],
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'balinese-deep-tissue',
    name: 'Balinese Deep Muscle Therapeutic Massage',
    category: 'Therapeutic Massages',
    durationMinutes: 75,
    priceINR: 9800,
    description: 'A traditional Indonesian ritual combining skin rolling, acupressure, thumb pressing, and warm ginger clove compresses to relieve chronic tightness.',
    benefits: [
      'Alleviates postural stiffness from travel and jet lag',
      'Improves lymphatic circulation and oxygen flow',
      'Releases deep myofascial knots'
    ],
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gold-cellular-facial',
    name: '24K Imperial Gold Rejuvenating Facial',
    category: 'Hydrotherapy & Facials',
    durationMinutes: 90,
    priceINR: 16500,
    description: 'Ancient Ayurvedic Rasayana therapy utilizing 24-karat pure gold leaf sheets, saffron cellular stem cells, and lymphatic jade roller sculpting.',
    benefits: [
      'Stimulates collagen regeneration and cellular firmness',
      'Restores youthful radiance and luminosity',
      'Reduces appearance of fine lines and environmental stress'
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'himalayan-salt-scrub',
    name: 'Himalayan Pink Salt & Cedarwood Detox Scrub',
    category: 'Hydrotherapy & Facials',
    durationMinutes: 60,
    priceINR: 8500,
    description: 'Coarse crystal salt harvested from pristine Himalayan foothills infused with wild cedarwood and sweet almond oils to buff away dead skin cells.',
    benefits: [
      'Minerals replenish essential skin electrolytes',
      'Leaves skin silky smooth and glowing',
      'Prepares body for deep hydration'
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80'
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'royal-suite-sabbatical',
    slug: 'royal-suite-sabbatical',
    title: 'The Royal Suite Sabbatical',
    tagline: 'Unwind in palatial luxury with personalized butler and airport limousine',
    discountBadge: 'Save 25% + Privileges',
    description: 'Experience the regal splendor of our signature suites with daily champagne breakfast, private art collection walk, and complimentary high tea.',
    inclusions: [
      'Luxury Suite accommodation for 2 or more nights',
      'Round-trip airport limousine transfers in BMW / Mercedes-Benz',
      'Sumptuous daily buffet breakfast at 1911 Restaurant',
      'Exclusive Royal High Tea service in your private salon',
      'One complimentary 60-minute couple’s massage at The Imperial Spa',
      'Dedicated 24-hour personal butler'
    ],
    terms: [
      'Minimum stay of 2 nights required',
      'Subject to suite availability at the time of booking',
      'Free cancellation up to 48 hours prior to arrival'
    ],
    validTill: 'December 31, 2026',
    basePriceINR: 52000,
    discountedPriceINR: 39000,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    category: 'Stay'
  },
  {
    id: 'romantic-heritage-rendezvous',
    slug: 'romantic-heritage-rendezvous',
    title: 'Romantic Heritage Rendezvous',
    tagline: 'A starlit candlelit dinner at San Gimignano with flowers and champagne',
    discountBadge: 'Complimentary Dinner & Spa',
    description: 'Craft unforgettable memories in the colonial capital with rose petal turndown, Moët & Chandon champagne on ice, and a starlit 4-course dinner.',
    inclusions: [
      'Art Deco Suite or Heritage Room stay',
      'Bottle of chilled Champagne & chocolate strawberries on arrival',
      'Four-course candlelit dinner at San Gimignano Tuscan courtyard',
      'Rose petal bath ritual prepared by your butler',
      'Late check-out until 16:00'
    ],
    terms: [
      'Requires reservation 24 hours in advance',
      'Blackout dates may apply during major holidays'
    ],
    validTill: 'November 30, 2026',
    basePriceINR: 42000,
    discountedPriceINR: 34500,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    category: 'Celebration'
  },
  {
    id: 'ayurvedic-wellness-retreat',
    slug: 'ayurvedic-wellness-retreat',
    title: 'Ayurvedic Rejuvenation & Detox Retreat',
    tagline: 'Holistic wellness package with private consultation and daily rituals',
    discountBadge: 'All-Inclusive Spa Package',
    description: 'Restore body, mind, and spirit under the guidance of our resident Ayurvedic Vaidya, with customized diets and restorative massages.',
    inclusions: [
      'Deluxe Heritage Room accommodation',
      'Personalized Dosha diagnostic consultation with Ayurvedic physician',
      'Two 90-minute signature spa therapies per day of stay',
      'Nourishing farm-to-table Ayurvedic spa cuisine',
      'Daily morning sunrise yoga and pranayama session on the royal lawns'
    ],
    terms: [
      'Minimum stay of 3 nights recommended for optimal results',
      'Dietary requirements accommodated with bespoke menu'
    ],
    validTill: 'January 15, 2027',
    basePriceINR: 46000,
    discountedPriceINR: 36800,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    category: 'Wellness'
  },
  {
    id: 'culinary-heritage-trail',
    slug: 'culinary-heritage-trail',
    title: 'The Great Imperial Culinary Trail',
    tagline: 'Taste your way through Southeast Asia, Tuscany, and Awadh',
    discountBadge: 'Food & Wine Passport',
    description: 'A gourmand’s dream with chef’s tasting menus across The Spice Route, Daniell’s Tavern, and 1911 Bar with vintage wine pairings.',
    inclusions: [
      '2 nights in a Heritage Grand Room',
      '5-Course Chef Tasting Dinner at The Spice Route',
      'Wine tasting flight with sommelier at 1911 Bar',
      'High Tea Tower for two at The Imperial Patisserie',
      'Signed culinary book by our Executive Chef'
    ],
    terms: [
      'Reservations required for specialty dining venues',
      'Alcoholic beverage tasting subject to legal age requirements'
    ],
    validTill: 'December 20, 2026',
    basePriceINR: 38000,
    discountedPriceINR: 31000,
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    category: 'Culinary'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-arch-1',
    title: 'Colonial Facade & Palm Colonnade',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    caption: 'The majestic 1936 Art Deco facade framed by twenty-four stately king palm trees on Janpath.'
  },
  {
    id: 'g-suite-1',
    title: 'The Royal Imperial Suite Drawing Room',
    category: 'Suites',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Antique Belgian crystal chandeliers, hand-carved rosewood furniture, and museum art pieces.'
  },
  {
    id: 'g-dine-1',
    title: 'The Spice Route Courtyard',
    category: 'Dining',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Temple art murals and architectural pillars reflecting Southeast Asian mythology.'
  },
  {
    id: 'g-spa-1',
    title: 'Ayurvedic Shirodhara Treatment Chamber',
    category: 'Spa',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    caption: 'Carved teakwood treatment beds, brass oil vessels, and calming rose petal foot baths.'
  },
  {
    id: 'g-art-1',
    title: 'The Daniell Lithograph Corridor',
    category: 'Art & Heritage',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    caption: 'Original 18th-century aquatints by Thomas and William Daniell documenting royal India.'
  },
  {
    id: 'g-celeb-1',
    title: 'The Royal Ballroom Wedding Setup',
    category: 'Celebrations',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Stately chandeliers, floral canopies, and silver place settings for an unforgettable royal wedding.'
  },
  {
    id: 'g-arch-2',
    title: 'The Verandah Colonnade at Twilight',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Graceful arches and warm lanterns casting gentle reflections on Italian marble pathways.'
  },
  {
    id: 'g-dine-2',
    title: 'San Gimignano Al Fresco Dining',
    category: 'Dining',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    caption: 'Romantic candlelit dinner beneath the starry Delhi sky and flowering bougainvillea.'
  },
  {
    id: 'g-suite-2',
    title: 'Art Deco Master Bedroom',
    category: 'Suites',
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    caption: 'Streamlined geometric aesthetics with velvet lounging chaise and sunny verandah.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    guestName: 'Eleanor Vance-Montgomery',
    location: 'London, United Kingdom',
    roomStayed: 'The Royal Imperial Suite',
    quote: 'Staying at TaverenOak is akin to walking through living history with the utmost contemporary luxury. The personal butler service, the breakfast on the 1911 verandah, and the peace of the royal gardens are truly unmatched anywhere in Asia.',
    rating: 5,
    date: 'March 2026',
    publication: 'Condé Nast Traveler Guest Selection'
  },
  {
    id: 't-2',
    guestName: 'Vikram & Radhika Singhania',
    location: 'Mumbai, India',
    roomStayed: 'Art Deco Luxury Suite',
    quote: 'We celebrated our 25th anniversary here. From the dinner at The Spice Route to the couple’s Ayurvedic retreat at the spa, every single second felt like a royal fairy tale. TaverenOak sets the benchmark for Indian luxury heritage.',
    rating: 5,
    date: 'February 2026'
  },
  {
    id: 't-3',
    guestName: 'Jean-Luc Fontaine',
    location: 'Paris, France',
    roomStayed: 'Heritage Grand Room',
    quote: 'As an architect, the Lutyens and Blomfield detailing took my breath away. The curated museum with over 4,000 lithographs rivaled leading national galleries. Simply divine.',
    rating: 5,
    date: 'January 2026',
    publication: 'Architectural Digest'
  }
];

export const HERITAGE_TIMELINE = [
  {
    year: '1911',
    title: 'The Delhi Durbar & Royal Proclamation',
    description: 'King George V and Queen Mary proclaim Delhi as the new capital of the British Indian Empire, inspiring the founding ethos and insignia of the hotel.'
  },
  {
    year: '1936',
    title: 'Grand Inauguration by Lord Willingdon',
    description: 'Designed by Blomfield under the mentorship of Sir Edwin Lutyens, the hotel opens its doors as Delhi’s premier luxury retreat, planted with 24 royal king palm trees.'
  },
  {
    year: '1947',
    title: 'Cradle of Modern History',
    description: 'Pivotal meetings between Pandit Jawaharlal Nehru, Mahatma Gandhi, Lord Mountbatten, and Muhammad Ali Jinnah took place in the hotel’s private salon before Indian independence.'
  },
  {
    year: '1996',
    title: 'Art Museum Restitution & Renaissance',
    description: 'A comprehensive decade-long conservation project restores 4,000 original prints, oil paintings, and rare carpets, establishing the hotel as an accredited living museum.'
  },
  {
    year: '2026',
    title: 'World Luxury Heritage Hotel of the Year',
    description: 'Honored internationally as the benchmark of colonial architectural preservation, world-class gastronomy, and holistic Ayurvedic wellness.'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'What are the check-in and check-out timings at TaverenOak?',
    answer: 'Standard check-in begins at 14:00 (2:00 PM) and check-out is at 12:00 noon. Early check-in or late check-out can be requested subject to availability, and is guaranteed with our Royal Imperial and Art Deco Suite reservations.'
  },
  {
    question: 'How do I arrange airport transfers?',
    answer: 'We provide private chauffeur-driven luxury fleet transfers (Rolls-Royce, Mercedes-Benz S-Class, BMW 7 Series) from Indira Gandhi International Airport (DEL), located approximately 30 minutes away. You can select an airport transfer when booking your room or contact our concierge 24 hours prior.'
  },
  {
    question: 'What is the dress code for dining venues like The Spice Route and San Gimignano?',
    answer: 'To preserve the refined ambiance of our dining rooms, we request our guests adhere to smart casual or formal attire. Sleeveless shirts, athletic wear, and flip-flops are not permitted during dinner service.'
  },
  {
    question: 'What makes the Eliza Rooms unique for women travelers?',
    answer: 'Eliza Rooms are situated on a dedicated, camera-monitored single-entry floor serviced exclusively by female attendants. Rooms feature customized wellness amenities, lighted vanity mirrors, organic skincare, and extra security measures.'
  },
  {
    question: 'Can non-hotel residents book tables or spa treatments?',
    answer: 'Yes, our restaurants (including The Spice Route, 1911 Restaurant, and San Gimignano) and The Imperial Spa welcome non-resident guests. We strongly recommend reserving tables and spa appointments in advance using our website booking tool.'
  },
  {
    question: 'Can I take a tour of the hotel’s art and museum collection?',
    answer: 'Yes! Our resident art curator conducts daily guided walking tours at 11:00 AM and 16:30 PM for guests, exploring our museum-grade collection of over 4,000 prints, aquatints, and rare artifacts from the 18th and 19th centuries.'
  }
];
