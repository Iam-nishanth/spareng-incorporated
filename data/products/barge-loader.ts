import { BrandData, Product } from './product-types'

export const bargeLoaderProducts: Product[] = [
  // Mobility Components
  {
    id: 'bl-001',
    title: 'Solid Resilient Tyres',
    model: 'SRT-BL-001',
    sku: 'SP-SRT-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Mobility Components',
    specifications: {},
    features: [
      'Solid rubber construction',
      'Puncture resistant',
      'Heavy load capacity',
      'Long service life'
    ],
    applications: [
      'Barge loader mobility',
      'Heavy duty mobile equipment',
      'Industrial applications',
      'Port operations'
    ],
    compatibleEquipment: ['Barge loaders', 'Mobile equipment'],
    tags: ['solid tyres', 'resilient', 'barge loader', 'mobility'],
    image: '/Products/BARGE_LOADER/SOLID_RESILIENT_TYRES.jpeg',
    partNumber: 'SP-SRT-BL-001'
  },

  // Hydraulic Systems
  {
    id: 'bl-002',
    title: 'Hydraulic Cylinders',
    model: 'HC-BL-001',
    sku: 'SP-HC-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Hydraulic Systems',
    specifications: {},
    features: [
      'Heavy duty hydraulic operation',
      'High pressure capability',
      'Corrosion resistant seals',
      'Precise control'
    ],
    applications: [
      'Barge loader positioning',
      'Boom control',
      'Hydraulic lifting',
      'Industrial automation'
    ],
    compatibleEquipment: ['Barge loaders', 'Hydraulic systems'],
    tags: ['hydraulic cylinders', 'positioning', 'barge loader', 'automation'],
    image: '/Products/BARGE_LOADER/HYDRAULIC_CYLINDERS.jpeg',
    partNumber: 'SP-HC-BL-001'
  },
  {
    id: 'bl-003',
    title: 'Hydraulic Power Pack',
    model: 'HPP-BL-001',
    sku: 'SP-HPP-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Hydraulic Systems',
    specifications: {},
    features: [
      'High pressure hydraulic pump',
      'Integrated reservoir',
      'Control valves',
      'Filtration system'
    ],
    applications: [
      'Hydraulic power generation',
      'Barge loader operations',
      'Industrial hydraulics',
      'Mobile equipment'
    ],
    compatibleEquipment: ['Barge loaders', 'Hydraulic systems'],
    tags: ['hydraulic power pack', 'pump', 'barge loader', 'power generation'],
    image: '/Products/BARGE_LOADER/HYDRAULIC_POWER_PACK.jpeg',
    partNumber: 'SP-HPP-BL-001'
  },

  // Conveyor Components - Pulleys
  {
    id: 'bl-004',
    title: 'Drive Pulley',
    model: 'DP-BL-001',
    sku: 'SP-DP-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Pulleys',
    specifications: {},
    features: [
      'Heavy duty cast steel construction',
      'Rubber lagging for grip',
      'Precision machined surface',
      'Balanced for smooth operation'
    ],
    applications: [
      'Barge loader conveyor drive',
      'Power transmission',
      'Material handling',
      'Industrial conveyors'
    ],
    compatibleEquipment: ['Barge loaders', 'Conveyor systems'],
    tags: ['drive pulley', 'power transmission', 'barge loader', 'conveyor'],
    image: '/Products/BARGE_LOADER/DRIVE_PULLEY.jpeg',
    partNumber: 'SP-DP-BL-001'
  },
  {
    id: 'bl-005',
    title: 'Non-Drive Snub Pulley',
    model: 'NDSP-BL-001',
    sku: 'SP-NDSP-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Pulleys',
    specifications: {},
    features: [
      'Smooth machined surface',
      'Self-cleaning design',
      'Heavy duty construction',
      'Corrosion resistant coating'
    ],
    applications: [
      'Belt guidance and tensioning',
      'Barge loader conveyor systems',
      'Material handling',
      'Industrial conveyors'
    ],
    compatibleEquipment: ['Barge loaders', 'Conveyor systems'],
    tags: ['snub pulley', 'belt guidance', 'barge loader', 'tensioning'],
    image: '/Products/BARGE_LOADER/NON-DRIVE_SNUB_PULLEY.jpeg',
    partNumber: 'SP-NDSP-BL-001'
  },

  // Belts
  {
    id: 'bl-006',
    title: 'Belt',
    model: 'BLT-BL-001',
    sku: 'SP-BLT-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Belts',
    specifications: {},
    features: [
      'Heavy duty rubber construction',
      'High tensile strength',
      'Abrasion resistant',
      'Long service life'
    ],
    applications: [
      'Barge loader material transport',
      'Bulk material handling',
      'Industrial conveyors',
      'Port operations'
    ],
    compatibleEquipment: ['Barge loaders', 'Conveyor systems'],
    tags: ['conveyor belt', 'material transport', 'barge loader', 'heavy duty'],
    image: '/Products/BARGE_LOADER/BELT.jpeg',
    partNumber: 'SP-BLT-BL-001'
  },

  // Idlers and Brackets
  {
    id: 'bl-007',
    title: 'Carrying Idlers',
    model: 'CI-BL-001',
    sku: 'SP-CI-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Idlers',
    specifications: {},
    features: [
      'Heavy duty steel construction',
      'Precision balanced rollers',
      'Sealed for life bearings',
      'Corrosion resistant finish'
    ],
    applications: [
      'Belt support in barge loaders',
      'Material handling',
      'Industrial conveyors',
      'Port operations'
    ],
    compatibleEquipment: ['Barge loaders', 'Conveyor systems'],
    tags: ['carrying idlers', 'belt support', 'barge loader', 'conveyor'],
    image: '/Products/BARGE_LOADER/CARRYING_IDLERS.jpeg',
    partNumber: 'SP-CI-BL-001'
  },
  {
    id: 'bl-008',
    title: 'Impact Idlers',
    model: 'II-BL-001',
    sku: 'SP-II-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Idlers',
    specifications: {},
    features: [
      'Impact absorbing design',
      'Heavy duty construction',
      'Shock resistance',
      'Extended bearing life'
    ],
    applications: [
      'Loading points in barge loaders',
      'Impact zones',
      'Material transfer points',
      'Heavy duty applications'
    ],
    compatibleEquipment: ['Barge loaders', 'Loading systems'],
    tags: ['impact idlers', 'shock absorption', 'barge loader', 'loading points'],
    image: '/Products/BARGE_LOADER/IMPACT_IDLERS.jpeg',
    partNumber: 'SP-II-BL-001'
  },
  {
    id: 'bl-009',
    title: 'Return Idlers',
    model: 'RI-BL-001',
    sku: 'SP-RI-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Idlers',
    specifications: {},
    features: [
      'Return belt support design',
      'Self-cleaning properties',
      'Low friction bearings',
      'Corrosion resistant finish'
    ],
    applications: [
      'Return belt support',
      'Barge loader conveyor systems',
      'Material handling',
      'Industrial conveyors'
    ],
    compatibleEquipment: ['Barge loaders', 'Return belt systems'],
    tags: ['return idlers', 'belt support', 'barge loader', 'return system'],
    image: '/Products/BARGE_LOADER/RETURN_IDLERS.jpeg',
    partNumber: 'SP-RI-BL-001'
  },
  {
    id: 'bl-010',
    title: 'Self Alignment Carrying',
    model: 'SAC-BL-001',
    sku: 'SP-SAC-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Idlers',
    specifications: {},
    features: [
      'Self-aligning mechanism',
      'Belt tracking capability',
      'Heavy duty construction',
      'Maintenance free operation'
    ],
    applications: [
      'Belt alignment in barge loaders',
      'Automatic belt tracking',
      'Material handling',
      'Industrial conveyors'
    ],
    compatibleEquipment: ['Barge loaders', 'Belt tracking systems'],
    tags: ['self alignment', 'belt tracking', 'barge loader', 'carrying'],
    image: '/Products/BARGE_LOADER/SELF_ALLIGNMENT-CARRYING.jpeg',
    partNumber: 'SP-SAC-BL-001'
  },
  {
    id: 'bl-011',
    title: 'Self Alignment Return',
    model: 'SAR-BL-001',
    sku: 'SP-SAR-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Idlers',
    specifications: {},
    features: [
      'Self-aligning mechanism',
      'Return belt tracking',
      'Heavy duty construction',
      'Maintenance free operation'
    ],
    applications: [
      'Return belt alignment',
      'Automatic belt tracking',
      'Barge loader systems',
      'Industrial conveyors'
    ],
    compatibleEquipment: ['Barge loaders', 'Return belt systems'],
    tags: ['self alignment', 'belt tracking', 'barge loader', 'return'],
    image: '/Products/BARGE_LOADER/SELF_ALLIGNMENT-RETUN.jpeg',
    partNumber: 'SP-SAR-BL-001'
  },
  {
    id: 'bl-012',
    title: 'Carrying Idler Bracket',
    model: 'CIB-BL-001',
    sku: 'SP-CIB-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Structural Components',
    specifications: {},
    features: [
      'Heavy duty steel construction',
      'Adjustable mounting',
      'Corrosion resistant coating',
      'Easy installation'
    ],
    applications: [
      'Carrying idler mounting',
      'Barge loader support',
      'Structural applications',
      'Industrial mounting'
    ],
    compatibleEquipment: ['Barge loaders', 'Idler systems'],
    tags: ['idler bracket', 'carrying', 'barge loader', 'mounting'],
    image: '/Products/BARGE_LOADER/CARRYIING_IDLER_BRACKET.jpeg',
    partNumber: 'SP-CIB-BL-001'
  },
  {
    id: 'bl-013',
    title: 'Return Idler Bracket',
    model: 'RIB-BL-001',
    sku: 'SP-RIB-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Structural Components',
    specifications: {},
    features: [
      'Heavy duty steel construction',
      'Return idler mounting',
      'Corrosion resistant coating',
      'Easy installation'
    ],
    applications: [
      'Return idler mounting',
      'Barge loader support',
      'Structural applications',
      'Industrial mounting'
    ],
    compatibleEquipment: ['Barge loaders', 'Return idler systems'],
    tags: ['idler bracket', 'return', 'barge loader', 'mounting'],
    image: '/Products/BARGE_LOADER/RETURN_IDLER_BRACKET.jpeg',
    partNumber: 'SP-RIB-BL-001'
  },

  // Guide Systems
  {
    id: 'bl-014',
    title: 'Guide Rollers',
    model: 'GR-BL-001',
    sku: 'SP-GR-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Guide Systems',
    specifications: {},
    features: [
      'Precision machined rollers',
      'Belt guidance capability',
      'Heavy duty construction',
      'Low friction operation'
    ],
    applications: [
      'Belt guidance in barge loaders',
      'Material handling',
      'Industrial conveyors',
      'Belt tracking'
    ],
    compatibleEquipment: ['Barge loaders', 'Belt guidance systems'],
    tags: ['guide rollers', 'belt guidance', 'barge loader', 'tracking'],
    image: '/Products/BARGE_LOADER/GUIDE_ROLLERS.jpeg',
    partNumber: 'SP-GR-BL-001'
  },
  {
    id: 'bl-015',
    title: 'Guide Roller Bracket',
    model: 'GRB-BL-001',
    sku: 'SP-GRB-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Structural Components',
    specifications: {},
    features: [
      'Heavy duty steel construction',
      'Guide roller mounting',
      'Adjustable positioning',
      'Corrosion resistant coating'
    ],
    applications: [
      'Guide roller mounting',
      'Belt guidance systems',
      'Barge loader support',
      'Industrial mounting'
    ],
    compatibleEquipment: ['Barge loaders', 'Guide systems'],
    tags: ['guide bracket', 'roller mounting', 'barge loader', 'guidance'],
    image: '/Products/BARGE_LOADER/GUIDE_ROLLER_BRACKET.jpeg',
    partNumber: 'SP-GRB-BL-001'
  },

  // Material Handling Systems
  {
    id: 'bl-016',
    title: 'Cascading Telescopic Chute',
    model: 'CTC-BL-001',
    sku: 'SP-CTC-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Material Transfer',
    specifications: {},
    features: [
      'Telescopic extension capability',
      'Cascading design for dust control',
      'Heavy duty steel construction',
      'Adjustable length'
    ],
    applications: [
      'Material transfer in barge loading',
      'Dust suppression',
      'Bulk material handling',
      'Port operations'
    ],
    compatibleEquipment: ['Barge loaders', 'Material transfer systems'],
    tags: ['telescopic chute', 'cascading', 'barge loader', 'material transfer'],
    image: '/Products/BARGE_LOADER/CASCADING_TELESCOPIC_CHUTE.jpeg',
    partNumber: 'SP-CTC-BL-001'
  },
  {
    id: 'bl-017',
    title: 'Winch with Frame',
    model: 'WWF-BL-001',
    sku: 'SP-WWF-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Lifting Systems',
    specifications: {},
    features: [
      'Heavy duty winch mechanism',
      'Integrated frame structure',
      'High load capacity',
      'Precise control'
    ],
    applications: [
      'Barge loader positioning',
      'Heavy lifting operations',
      'Industrial lifting',
      'Port equipment'
    ],
    compatibleEquipment: ['Barge loaders', 'Lifting systems'],
    tags: ['winch', 'lifting', 'barge loader', 'positioning'],
    image: '/Products/BARGE_LOADER/WINCH_WITH_FRAME.jpeg',
    partNumber: 'SP-WWF-BL-001'
  },
  {
    id: 'bl-018',
    title: 'Conveyor Hood',
    model: 'CH-BL-001',
    sku: 'SP-CH-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Protection Systems',
    specifications: {},
    features: [
      'Weather protection',
      'Dust containment',
      'Heavy duty construction',
      'Easy access for maintenance'
    ],
    applications: [
      'Conveyor protection',
      'Weather shielding',
      'Dust control',
      'Barge loader systems'
    ],
    compatibleEquipment: ['Barge loaders', 'Conveyor systems'],
    tags: ['conveyor hood', 'protection', 'barge loader', 'weather shield'],
    image: '/Products/BARGE_LOADER/CONVEYOR_HOOD.jpeg',
    partNumber: 'SP-CH-BL-001'
  },

  // Safety Systems
  {
    id: 'bl-019',
    title: 'Belt Sway Switch',
    model: 'BSS-BL-001',
    sku: 'SP-BSS-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Safety & Control',
    specifications: {},
    features: [
      'Belt misalignment detection',
      'Adjustable sensitivity',
      'Emergency stop capability',
      'Weather resistant housing'
    ],
    applications: [
      'Belt tracking monitoring',
      'Safety systems',
      'Barge loader protection',
      'Industrial safety'
    ],
    compatibleEquipment: ['Barge loaders', 'Safety systems'],
    tags: ['belt sway switch', 'safety', 'barge loader', 'monitoring'],
    image: '/Products/BARGE_LOADER/BELT_SWAY_SWITCH.jpeg',
    partNumber: 'SP-BSS-BL-001'
  },
  {
    id: 'bl-020',
    title: 'Pull Chord Switch',
    model: 'PCS-BL-001',
    sku: 'SP-PCS-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Safety & Control',
    specifications: {},
    features: [
      'Emergency stop activation',
      'Pull cord mechanism',
      'Weather resistant',
      'Easy reset function'
    ],
    applications: [
      'Emergency shutdown',
      'Safety systems',
      'Barge loader protection',
      'Industrial safety'
    ],
    compatibleEquipment: ['Barge loaders', 'Emergency systems'],
    tags: ['pull chord switch', 'emergency stop', 'barge loader', 'safety'],
    image: '/Products/BARGE_LOADER/PULL_CHORD_SWITCH.jpeg',
    partNumber: 'SP-PCS-BL-001'
  },
  {
    id: 'bl-021',
    title: 'Limit Switch',
    model: 'LS-BL-001',
    sku: 'SP-LS-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Safety & Control',
    specifications: {},
    features: [
      'Position sensing capability',
      'Mechanical actuation',
      'Weather resistant housing',
      'Reliable operation'
    ],
    applications: [
      'Position monitoring',
      'Safety interlocks',
      'Barge loader control',
      'Industrial automation'
    ],
    compatibleEquipment: ['Barge loaders', 'Control systems'],
    tags: ['limit switch', 'position sensing', 'barge loader', 'control'],
    image: '/Products/BARGE_LOADER/LIMIT_SWITCH.jpeg',
    partNumber: 'SP-LS-BL-001'
  },
  {
    id: 'bl-022',
    title: 'Zero Speed Switch',
    model: 'ZSS-BL-001',
    sku: 'SP-ZSS-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Safety & Control',
    specifications: {},
    features: [
      'Speed monitoring capability',
      'Adjustable response time',
      'Fail-safe operation',
      'Weather resistant'
    ],
    applications: [
      'Speed monitoring',
      'Jam detection',
      'Safety systems',
      'Barge loader protection'
    ],
    compatibleEquipment: ['Barge loaders', 'Monitoring systems'],
    tags: ['zero speed switch', 'speed monitoring', 'barge loader', 'safety'],
    image: '/Products/BARGE_LOADER/ZERO_SPEED_SWITCH.jpeg',
    partNumber: 'SP-ZSS-BL-001'
  },
  {
    id: 'bl-023',
    title: 'Animo Meter',
    model: 'AM-BL-001',
    sku: 'SP-AM-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Monitoring Systems',
    specifications: {},
    features: [
      'Load monitoring capability',
      'Digital display',
      'Alarm functions',
      'Data logging'
    ],
    applications: [
      'Load monitoring',
      'Process control',
      'Barge loader operations',
      'Industrial monitoring'
    ],
    compatibleEquipment: ['Barge loaders', 'Monitoring systems'],
    tags: ['animo meter', 'load monitoring', 'barge loader', 'measurement'],
    image: '/Products/BARGE_LOADER/ANIMO_METER.jpeg',
    partNumber: 'SP-AM-BL-001'
  },

  // Cleaning Systems
  {
    id: 'bl-024',
    title: 'External Scraper',
    model: 'ES-BL-001',
    sku: 'SP-ES-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Maintenance & Accessories',
    specifications: {},
    features: [
      'Polyurethane blade construction',
      'Spring loaded adjustment',
      'Easy blade replacement',
      'Effective material removal'
    ],
    applications: [
      'Belt cleaning',
      'Material carryback prevention',
      'Barge loader maintenance',
      'Industrial cleaning'
    ],
    compatibleEquipment: ['Barge loaders', 'Cleaning systems'],
    tags: ['external scraper', 'belt cleaning', 'barge loader', 'maintenance'],
    image: '/Products/BARGE_LOADER/EXTERNAL_SCRAPPER.jpeg',
    partNumber: 'SP-ES-BL-001'
  },
  {
    id: 'bl-025',
    title: 'Internal Scraper',
    model: 'IS-BL-001',
    sku: 'SP-IS-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Maintenance & Accessories',
    specifications: {},
    features: [
      'Tungsten carbide tips',
      'Extreme wear resistance',
      'Adjustable contact pressure',
      'Long service life'
    ],
    applications: [
      'Heavy duty belt cleaning',
      'Sticky material removal',
      'Barge loader maintenance',
      'Industrial cleaning'
    ],
    compatibleEquipment: ['Barge loaders', 'Heavy duty cleaning systems'],
    tags: ['internal scraper', 'tungsten carbide', 'barge loader', 'heavy duty cleaning'],
    image: '/Products/BARGE_LOADER/INTERNAL_SCRAPPER.jpeg',
    partNumber: 'SP-IS-BL-001'
  },

  // Support Components
  {
    id: 'bl-026',
    title: 'Bearings',
    model: 'BRG-BL-001',
    sku: 'SP-BRG-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Support Components',
    specifications: {},
    features: [
      'High quality steel construction',
      'Sealed design',
      'Long service life',
      'Low maintenance'
    ],
    applications: [
      'Barge loader rotating equipment',
      'Pulley systems',
      'Industrial machinery',
      'Port equipment'
    ],
    compatibleEquipment: ['Barge loaders', 'Rotating equipment'],
    tags: ['bearings', 'sealed', 'barge loader', 'rotating equipment'],
    image: '/Products/BARGE_LOADER/BEARINGS.png',
    partNumber: 'SP-BRG-BL-001'
  },
  {
    id: 'bl-027',
    title: 'Plummer Block',
    model: 'PB-BL-001',
    sku: 'SP-PB-BL-001',
    category: ['Material Handling', 'Barge Loader'],
    subcategory: 'Support Components',
    specifications: {},
    features: [
      'Cast iron construction',
      'Self-aligning capability',
      'Easy maintenance access',
      'Heavy duty design'
    ],
    applications: [
      'Shaft support in barge loaders',
      'Bearing housing',
      'Industrial machinery',
      'Port equipment'
    ],
    compatibleEquipment: ['Barge loaders', 'Shaft support systems'],
    tags: ['plummer block', 'bearing housing', 'barge loader', 'shaft support'],
    image: '/Products/BARGE_LOADER/PLUMMER_BLOCK.jpeg',
    partNumber: 'SP-PB-BL-001'
  }
]

export const bargeLoaderData: BrandData = {
  brand: 'Spareng Barge Loader',
  description: 'Comprehensive range of barge loader components and spare parts for efficient port operations and bulk material handling',
  website: 'https://spareng.com',
  products: bargeLoaderProducts
}
