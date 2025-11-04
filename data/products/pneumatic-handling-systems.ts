import { BrandData, Product } from './product-types'

export const pneumaticHandlingSystemsProducts: Product[] = [
  // Valves
  {
    id: 'phs-001',
    title: 'Ball Valve',
    model: 'BV-PHS-001',
    sku: 'SP-BV-PHS-001',
    category: [  'Pneumatic Handling Spares'],
    subcategory: 'Control Valves',
    specifications: {},
    features: [
      'Quarter-turn operation',
      'Full bore design',
      'Leak-tight sealing',
      'Durable construction'
    ],
    applications: [
      'Pneumatic systems',
      'Flow control',
      'Industrial automation',
      'Process control'
    ],
    compatibleEquipment: ['Pneumatic systems', 'Process control systems'],
    tags: ['ball valve', 'flow control', 'pneumatic', 'quarter-turn'],
    image: '/Products/PNEUMATIC_HANDLING_SYSTEMS_ITEMS/BALL_VALVE.jpeg',
    partNumber: 'SP-BV-PHS-001'
  },
  {
    id: 'phs-002',
    title: 'Butterfly Valve',
    model: 'BFV-PHS-001',
    sku: 'SP-BFV-PHS-001',
    category: [  'Pneumatic Handling Spares'],
    subcategory: 'Control Valves',
    specifications: {},
    features: [
      'Compact design',
      'Low pressure drop',
      'Quick operation',
      'Cost effective'
    ],
    applications: [
      'Large diameter piping',
      'Flow regulation',
      'Pneumatic systems',
      'Industrial processes'
    ],
    compatibleEquipment: ['Pneumatic systems', 'Large bore piping'],
    tags: ['butterfly valve', 'flow regulation', 'pneumatic', 'compact'],
    image: '/Products/PNEUMATIC_HANDLING_SYSTEMS_ITEMS/BUTTER_FLY_VALVE.jpeg',
    partNumber: 'SP-BFV-PHS-001'
  },
  {
    id: 'phs-003',
    title: 'Dome Valve',
    model: 'DV-PHS-001',
    sku: 'SP-DV-PHS-001',
    category: [  'Pneumatic Handling Spares'],
    subcategory: 'Control Valves',
    specifications: {},
    features: [
      'Dome-shaped design',
      'High pressure capability',
      'Reliable sealing',
      'Heavy duty construction'
    ],
    applications: [
      'High pressure pneumatic systems',
      'Industrial automation',
      'Process control',
      'Material handling'
    ],
    compatibleEquipment: ['High pressure systems', 'Pneumatic automation'],
    tags: ['dome valve', 'high pressure', 'pneumatic', 'reliable sealing'],
    image: '/Products/PNEUMATIC_HANDLING_SYSTEMS_ITEMS/DOME_VALVE.jpeg',
    partNumber: 'SP-DV-PHS-001'
  },
  {
    id: 'phs-004',
    title: 'Knife Gate Valve',
    model: 'KGV-PHS-001',
    sku: 'SP-KGV-PHS-001',
    category: [  'Pneumatic Handling Spares'],
    subcategory: 'Control Valves',
    specifications: {},
    features: [
      'Knife-edge gate design',
      'Suitable for slurries',
      'Bi-directional sealing',
      'Easy maintenance'
    ],
    applications: [
      'Slurry handling',
      'Pneumatic conveying',
      'Industrial processes',
      'Material handling'
    ],
    compatibleEquipment: ['Slurry systems', 'Pneumatic conveying'],
    tags: ['knife gate valve', 'slurry handling', 'pneumatic', 'bi-directional'],
    image: '/Products/PNEUMATIC_HANDLING_SYSTEMS_ITEMS/KINFE_GATE_VALVE.jpeg',
    partNumber: 'SP-KGV-PHS-001'
  },
  {
    id: 'phs-005',
    title: 'Non-Return Valve',
    model: 'NRV-PHS-001',
    sku: 'SP-NRV-PHS-001',
    category: [  'Pneumatic Handling Spares'],
    subcategory: 'Control Valves',
    specifications: {},
    features: [
      'One-way flow design',
      'Automatic operation',
      'Prevents backflow',
      'Low cracking pressure'
    ],
    applications: [
      'Backflow prevention',
      'Pneumatic systems',
      'Process protection',
      'System isolation'
    ],
    compatibleEquipment: ['Pneumatic systems', 'Process systems'],
    tags: ['non-return valve', 'backflow prevention', 'pneumatic', 'automatic'],
    image: '/Products/PNEUMATIC_HANDLING_SYSTEMS_ITEMS/NON-RETURN_VALVE.jpeg',
    partNumber: 'SP-NRV-PHS-001'
  },
  {
    id: 'phs-006',
    title: 'Y-Type Angle Valve',
    model: 'YAV-PHS-001',
    sku: 'SP-YAV-PHS-001',
    category: [  'Pneumatic Handling Spares'],
    subcategory: 'Control Valves',
    specifications: {},
    features: [
      'Y-pattern body design',
      'Angled flow path',
      'Reduced pressure drop',
      'Easy maintenance'
    ],
    applications: [
      'Angled piping systems',
      'Flow control',
      'Pneumatic applications',
      'Process systems'
    ],
    compatibleEquipment: ['Angled piping', 'Pneumatic systems'],
    tags: ['y-type valve', 'angle valve', 'pneumatic', 'reduced pressure drop'],
    image: '/Products/PNEUMATIC_HANDLING_SYSTEMS_ITEMS/Y-TYPE_ANGLE_VALVE.jpeg',
    partNumber: 'SP-YAV-PHS-001'
  },
  {
    id: 'phs-007',
    title: 'Solenoid Valve',
    model: 'SV-PHS-001',
    sku: 'SP-SV-PHS-001',
    category: [  'Pneumatic Handling Spares'],
    subcategory: 'Control Valves',
    specifications: {},
    features: [
      'Electromagnetic operation',
      'Fast response time',
      'Remote control capability',
      'Reliable operation'
    ],
    applications: [
      'Automated control systems',
      'Pneumatic automation',
      'Process control',
      'Remote operation'
    ],
    compatibleEquipment: ['Automation systems', 'Control panels'],
    tags: ['solenoid valve', 'electromagnetic', 'pneumatic', 'automation'],
    image: '/Products/PNEUMATIC_HANDLING_SYSTEMS_ITEMS/SOLENOID_VALVE.jpeg',
    partNumber: 'SP-SV-PHS-001'
  },
  {
    id: 'phs-008',
    title: 'Quick Exhaust Valve',
    model: 'QEV-PHS-001',
    sku: 'SP-QEV-PHS-001',
    category: [  'Pneumatic Handling Spares'],
    subcategory: 'Control Valves',
    specifications: {},
    features: [
      'Rapid exhaust capability',
      'Improved cycle times',
      'Compact design',
      'Easy installation'
    ],
    applications: [
      'Pneumatic cylinders',
      'Fast cycling applications',
      'Automation systems',
      'Process optimization'
    ],
    compatibleEquipment: ['Pneumatic cylinders', 'Automation systems'],
    tags: ['quick exhaust valve', 'rapid exhaust', 'pneumatic', 'fast cycling'],
    image: '/Products/PNEUMATIC_HANDLING_SYSTEMS_ITEMS/QUICK_EXHAUST_VALVE.jpeg',
    partNumber: 'SP-QEV-PHS-001'
  },

  // Actuators and Cylinders
  {
    id: 'phs-009',
    title: 'Pneumatic Actuator',
    model: 'PA-PHS-001',
    sku: 'SP-PA-PHS-001',
    category: [  'Pneumatic Handling Spares'],
    subcategory: 'Actuators',
    specifications: {},
    features: [
      'Pneumatic operation',
      'High force output',
      'Reliable performance',
      'Easy maintenance'
    ],
    applications: [
      'Valve automation',
      'Industrial automation',
      'Process control',
      'Material handling'
    ],
    compatibleEquipment: ['Control valves', 'Automation systems'],
    tags: ['pneumatic actuator', 'valve automation', 'pneumatic', 'high force'],
    image: '/Products/PNEUMATIC_HANDLING_SYSTEMS_ITEMS/PNEUMATIC_ACTUATOR.jpeg',
    partNumber: 'SP-PA-PHS-001'
  },
  {
    id: 'phs-010',
    title: 'Pneumatic Cylinder',
    model: 'PC-PHS-001',
    sku: 'SP-PC-PHS-001',
    category: [  'Pneumatic Handling Spares'],
    subcategory: 'Actuators',
    specifications: {},
    features: [
      'Linear motion capability',
      'High force output',
      'Precise positioning',
      'Durable construction'
    ],
    applications: [
      'Linear automation',
      'Material handling',
      'Industrial machinery',
      'Process automation'
    ],
    compatibleEquipment: ['Automation systems', 'Industrial machinery'],
    tags: ['pneumatic cylinder', 'linear motion', 'pneumatic', 'automation'],
    image: '/Products/PNEUMATIC_HANDLING_SYSTEMS_ITEMS/PNEUMATIC_CYLINDER.jpeg',
    partNumber: 'SP-PC-PHS-001'
  },

  // Control Components
  {
    id: 'phs-011',
    title: 'Pressure Regulator',
    model: 'PR-PHS-001',
    sku: 'SP-PR-PHS-001',
    category: [  'Pneumatic Handling Spares'],
    subcategory: 'Control Components',
    specifications: {},
    features: [
      'Pressure regulation capability',
      'Stable output pressure',
      'Adjustable settings',
      'Reliable operation'
    ],
    applications: [
      'Pressure control',
      'Pneumatic systems',
      'Process regulation',
      'System protection'
    ],
    compatibleEquipment: ['Pneumatic systems', 'Control systems'],
    tags: ['pressure regulator', 'pressure control', 'pneumatic', 'regulation'],
    image: '/Products/PNEUMATIC_HANDLING_SYSTEMS_ITEMS/PRESSURE_REGULATOR.jpeg',
    partNumber: 'SP-PR-PHS-001'
  },

  // Sealing Components
  {
    id: 'phs-012',
    title: 'Seal for Valves',
    model: 'SFV-PHS-001',
    sku: 'SP-SFV-PHS-001',
    category: [  'Pneumatic Handling Spares'],
    subcategory: 'Sealing Components',
    specifications: {},
    features: [
      'High-quality sealing material',
      'Chemical resistant',
      'Temperature resistant',
      'Long service life'
    ],
    applications: [
      'Valve sealing',
      'Leak prevention',
      'System integrity',
      'Maintenance applications'
    ],
    compatibleEquipment: ['Various valve types', 'Pneumatic systems'],
    tags: ['valve seals', 'leak prevention', 'pneumatic', 'chemical resistant'],
    image: '/Products/PNEUMATIC_HANDLING_SYSTEMS_ITEMS/SEAL_FOR_VALVES.jpeg',
    partNumber: 'SP-SFV-PHS-001'
  },

  // Piping Components
  {
    id: 'phs-013',
    title: 'Alloy Long Radius Bend',
    model: 'ALRB-PHS-001',
    sku: 'SP-ALRB-PHS-001',
    category: [  'Pneumatic Handling Spares'],
    subcategory: 'Piping Components',
    specifications: {},
    features: [
      'Long radius design',
      'Alloy steel construction',
      'Reduced pressure drop',
      'Smooth flow characteristics'
    ],
    applications: [
      'Pneumatic piping systems',
      'Flow direction changes',
      'Industrial piping',
      'Process systems'
    ],
    compatibleEquipment: ['Piping systems', 'Pneumatic networks'],
    tags: ['long radius bend', 'alloy steel', 'pneumatic', 'smooth flow'],
    image: '/Products/PNEUMATIC_HANDLING_SYSTEMS_ITEMS/ALLOY_LONG_RADIUS_BEND.jpeg',
    partNumber: 'SP-ALRB-PHS-001'
  }
]

export const pneumaticHandlingSystemsData: BrandData = {
  brand: 'Spareng Pneumatic Handling Spares',
  description: 'Comprehensive range of pneumatic handling system components including valves, actuators, and control systems for industrial automation',
  website: 'https://spareng.com',
  products: pneumaticHandlingSystemsProducts
}
