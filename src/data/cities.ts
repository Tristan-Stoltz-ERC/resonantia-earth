export interface City {
  id: string
  name: string
  country: string
  icon: string
  energyType: 'geothermal' | 'solar' | 'hydro' | 'mixed'
  capacity: string
  population: string
  cost: string
  timeline: string
  coordinates: { lat: number; lng: number }
  description: string
  vision: string
  uniqueFeatures: string[]
  keyIndustries: string[]
  districts: District[]
}

interface District {
  name: string
  purpose: string
  features: string[]
}

export const citiesData: City[] = [
  {
    id: 'iceland',
    name: 'Reykjanes Nova',
    country: 'Iceland',
    icon: '🌋',
    energyType: 'geothermal',
    capacity: '1 GW',
    population: '500,000',
    cost: '$15B',
    timeline: 'Years 1-3',
    coordinates: { lat: 63.88, lng: -22.43 },
    description: 'Expanding Iceland\'s proven model of geothermal abundance.',
    vision: 'A city that showcases what unlimited clean energy enables - where waste heat creates tropical gardens in the Arctic.',
    uniqueFeatures: [
      'Heated streets (no snow ever)',
      'Tropical Avenue: 2km enclosed street at 25°C year-round',
      'Underground pedestrian network',
      'Geothermal spas on every block',
      'Banana plantations in greenhouses'
    ],
    keyIndustries: [
      'Aluminum smelting',
      'Data centers',
      'Cryptocurrency mining',
      'Green hydrogen production',
      'Carbon capture'
    ],
    districts: [
      {
        name: 'Thermal Core',
        purpose: 'Downtown with heated everything',
        features: ['Year-round tropical gardens', 'Underground city', 'Vertical farms']
      },
      {
        name: 'Silicon Lava',
        purpose: 'Tech and data center quarter',
        features: ['Quantum computing labs', 'AI research', 'Direct fiber to continents']
      },
      {
        name: 'Aurora Heights',
        purpose: 'Residential with northern lights views',
        features: ['Hot spring access', 'Geothermal greenhouses', 'Community saunas']
      }
    ]
  },
  {
    id: 'chile',
    name: 'Solar Atacama',
    country: 'Chile',
    icon: '☀️',
    energyType: 'solar',
    capacity: '2 GW',
    population: '1,000,000',
    cost: '$25B',
    timeline: 'Years 2-5',
    coordinates: { lat: -23.65, lng: -70.40 },
    description: 'The world\'s premier solar city in Earth\'s driest desert.',
    vision: 'A linear oasis city stretching along the coast, where the world\'s best solar energy creates abundance from the driest desert.',
    uniqueFeatures: [
      'Solar panel canopies over all streets',
      '24/7 city (molten salt storage)',
      'The Solar Road: Highway with panels as surface',
      'Fog nets for water capture',
      '40km linear park along the coast'
    ],
    keyIndustries: [
      'Lithium processing',
      'Battery gigafactories',
      'Solar panel manufacturing',
      'Electric vehicle assembly',
      'Hydrogen production'
    ],
    districts: [
      {
        name: 'Photon Plaza',
        purpose: 'Downtown powered by the sun',
        features: ['Buildings as vertical solar farms', '24/7 activity', 'Solar Cathedral']
      },
      {
        name: 'Lithium Valley',
        purpose: 'Battery and EV production',
        features: ['Gigafactories', 'Research labs', 'Rare earth processing']
      },
      {
        name: 'Pacific Terraces',
        purpose: 'Stepped housing to ocean',
        features: ['Infinity pools', 'Solar glass windows', 'Tsunami-safe design']
      }
    ]
  },
  {
    id: 'newzealand',
    name: 'Taupo Tech Valley',
    country: 'New Zealand',
    icon: '🏔️',
    energyType: 'geothermal',
    capacity: '1.5 GW',
    population: '750,000',
    cost: '$20B',
    timeline: 'Years 3-6',
    coordinates: { lat: -38.69, lng: 176.07 },
    description: 'Silicon Valley meets Middle Earth in a geothermal wonderland.',
    vision: 'A tech hub so beautiful that the world\'s best minds choose lifestyle over salary.',
    uniqueFeatures: [
      'Natural hot pools in tech campuses',
      'The Geyser Clock marks noon',
      'Floating meeting rooms on lake',
      'Hobbit-inspired architecture allowed',
      'Zorb commuting (seriously)'
    ],
    keyIndustries: [
      'Software development',
      'Film production',
      'Adventure tourism',
      'Geothermal research',
      'Agricultural tech'
    ],
    districts: [
      {
        name: 'Code Springs',
        purpose: 'Tech core with thermal spas',
        features: ['Co-working with hot pools', 'Algorithm Gardens', '24/7 cafes']
      },
      {
        name: 'The Shire',
        purpose: 'Lifestyle and entertainment',
        features: ['Film locations', 'Craft breweries', 'Adventure sports']
      },
      {
        name: 'Māori Quarter',
        purpose: 'Cultural partnership',
        features: ['Traditional marae', 'Carving schools', 'Haka performances']
      }
    ]
  },
  {
    id: 'canada',
    name: 'Churchill Aurora',
    country: 'Canada',
    icon: '❄️',
    energyType: 'hydro',
    capacity: '2 GW',
    population: '500,000',
    cost: '$22B',
    timeline: 'Years 4-7',
    coordinates: { lat: 58.77, lng: -94.17 },
    description: 'The world\'s most northern major city powered by massive hydro.',
    vision: 'An Arctic emerald where massive hydro power creates a green oasis in the tundra.',
    uniqueFeatures: [
      'Underground city: 20km heated tunnels',
      'Aurora Alert System citywide',
      'Indoor tropical beaches',
      'Polar bear research station',
      'Ice hotel rebuilt annually'
    ],
    keyIndustries: [
      'Arctic shipping',
      'Green hydrogen',
      'Data centers (free cooling)',
      'Diamond processing',
      'Climate research'
    ],
    districts: [
      {
        name: 'Polar Core',
        purpose: 'Connected downtown',
        features: ['Enclosed skyways', 'Underground shopping', 'Indoor forests']
      },
      {
        name: 'Hudson Hub',
        purpose: 'Arctic shipping port',
        features: ['Icebreaker fleet', 'Container port', 'Nuclear submarine base']
      },
      {
        name: 'The Warm Zone',
        purpose: 'Recreation in the Arctic',
        features: ['Massive water park', 'Tropical biodome', 'Indoor beaches']
      }
    ]
  },
  {
    id: 'indonesia',
    name: 'Kerinci Spaceport',
    country: 'Indonesia',
    icon: '🚀',
    energyType: 'geothermal',
    capacity: '1 GW',
    population: '1,000,000',
    cost: '$18B',
    timeline: 'Years 5-8',
    coordinates: { lat: -1.70, lng: 101.26 },
    description: 'Where geothermal energy funds humanity\'s gateway to space.',
    vision: 'A city that combines Indonesian culture with space age technology.',
    uniqueFeatures: [
      '165km maglev tunnel to launch sites',
      'Rocket launches from 3,805m elevation',
      'Floating mosques on geothermal lakes',
      'The Canopy Walk through rainforest',
      'Steam cooking everywhere'
    ],
    keyIndustries: [
      'Spaceport operations',
      'Rocket manufacturing',
      'Satellite production',
      'Geothermal technology',
      'Space tourism'
    ],
    districts: [
      {
        name: 'Padang Port City',
        purpose: 'Coastal hub for rocket parts',
        features: ['Expanded harbor', 'Floating neighborhoods', 'Surf beaches']
      },
      {
        name: 'Launch Complex',
        purpose: 'Mountain spaceport',
        features: ['Multiple launch pads', 'Mission control', 'Astronaut training']
      },
      {
        name: 'Sacred Slopes',
        purpose: 'Cultural preservation',
        features: ['Traditional villages', 'Coffee plantations', 'Meditation centers']
      }
    ]
  },
  {
    id: 'kenya',
    name: 'Rift Valley Technopolis',
    country: 'Kenya',
    icon: '🦁',
    energyType: 'geothermal',
    capacity: '1.5 GW',
    population: '1,000,000',
    cost: '$20B',
    timeline: 'Years 6-9',
    coordinates: { lat: -0.90, lng: 36.29 },
    description: 'Africa\'s energy capital proving sustainable leapfrog development.',
    vision: 'The city that proves Africa can leapfrog industrial development.',
    uniqueFeatures: [
      'Wildlife corridors through city',
      'The Rift Walk: Glass platform over geological rift',
      'Steam Cuisine Street',
      'Safari Pods: Autonomous wildlife viewing',
      'Flamingo viewing platforms'
    ],
    keyIndustries: [
      'Mobile payments',
      'Agtech development',
      'Drone delivery',
      'Pan-African finance',
      'Safari tourism'
    ],
    districts: [
      {
        name: 'Harambee Center',
        purpose: 'Pan-African headquarters',
        features: ['Unity Tower', 'Innovation hubs', 'Cultural centers']
      },
      {
        name: 'Safari Silicon',
        purpose: 'Tech with wildlife',
        features: ['Wildlife corridors', 'Mobile payment innovation', 'Drone HQ']
      },
      {
        name: 'M-Pesa Valley',
        purpose: 'Financial district',
        features: ['Digital banking', 'Crypto exchange', 'Pan-African stock exchange']
      }
    ]
  },
  {
    id: 'norway',
    name: 'Fjord Futuria',
    country: 'Norway',
    icon: '🏔️',
    energyType: 'hydro',
    capacity: '2 GW',
    population: '500,000',
    cost: '$25B',
    timeline: 'Years 7-10',
    coordinates: { lat: 61.22, lng: 6.56 },
    description: 'A sovereign wealth fund builds the perfect city.',
    vision: 'What happens when a nation\'s pension fund builds a perfect city?',
    uniqueFeatures: [
      'The Dividend Building displays wealth',
      'Every citizen is a shareholder',
      'All city data public (transparency)',
      'Fjord pools heated year-round',
      'AI optimizing everything'
    ],
    keyIndustries: [
      'Ocean technology',
      'Autonomous ships',
      'Salmon farming',
      'Hydrogen production',
      'Financial services'
    ],
    districts: [
      {
        name: 'Capital Core',
        purpose: 'Financial headquarters',
        features: ['Sovereign wealth HQ', 'Investment banks', 'Transparency Tower']
      },
      {
        name: 'Fjord Tech',
        purpose: 'Maritime innovation',
        features: ['Autonomous ships', 'Underwater robotics', 'Tidal energy']
      },
      {
        name: 'Knowledge Cliffs',
        purpose: 'Free education for all',
        features: ['Free university', 'Lifelong learning', 'Nobel Prize center']
      }
    ]
  }
]