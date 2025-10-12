import { BrandData, Product } from './product-types'

export const conveyorPartsProducts: Product[] = [
  // IDLERS - Carrying Idlers
  {
    id: 'cp-001',
    title: 'Carrying Idlers',
    model: 'CI-001',
    sku: 'SP-CI-001',
    category: ['Conveyor Components'],
    subcategory: 'Idlers',
    specifications: {},
    features: [
      'Heavy duty steel construction',
      'Precision balanced rollers',
      'Sealed for life bearings',
      'Low maintenance design',
      'Corrosion resistant coating'
    ],
    applications: [
      'Belt conveyors in mining',
      'Material handling systems',
      'Bulk material transport',
      'Industrial conveyor systems'
    ],
    compatibleEquipment: ['Belt conveyors', 'Mining conveyors', 'Industrial conveyors'],
    tags: ['idlers', 'carrying', 'heavy duty', 'mining'],
    image: '/Products/CONVEYOR_PARTS/CARYING_IDLERS.jpeg',
    partNumber: 'SP-CI-001'
  },

  // IDLERS - Impact Idlers
  {
    id: 'cp-004',
    title: 'Impact Idlers',
    model: 'II-001',
    sku: 'SP-II-001',
    category: ['Conveyor Components'],
    subcategory: 'Idlers',
    specifications: {},
    features: [
      'Impact absorbing rubber rings',
      'Heavy duty construction',
      'Shock resistance design',
      'Extended bearing life'
    ],
    applications: [
      'Loading points',
      'Transfer chutes',
      'High impact zones',
      'Mining applications'
    ],
    compatibleEquipment: ['Belt conveyors', 'Transfer systems'],
    tags: ['idlers', 'impact', 'shock absorption', 'loading'],
    image: '/Products/CONVEYOR_PARTS/IMPACT_IDLERS.jpeg',
    partNumber: 'SP-II-001'
  },
  {
    id: 'cp-005',
    title: 'Impact Idlers - Heavy Duty',
    model: 'II-002',
    sku: 'SP-II-002',
    category: ['Conveyor Components'],
    subcategory: 'Idlers',
    specifications: {},
    features: [
      'Polyurethane impact rings',
      'Superior shock absorption',
      'Long service life',
      'Maintenance free design'
    ],
    applications: [
      'Heavy impact loading zones',
      'Mining transfer points',
      'Quarry applications'
    ],
    compatibleEquipment: ['Heavy duty conveyors', 'Mining systems'],
    tags: ['idlers', 'impact', 'polyurethane', 'heavy duty'],
    image: '/Products/CONVEYOR_PARTS/IMPACT_IDLERS_1.jpeg',
    partNumber: 'SP-II-002'
  },

  // IDLERS - Return Idlers
  {
    id: 'cp-006',
    title: 'Return Idlers',
    model: 'RI-001',
    sku: 'SP-RI-001',
    category: ['Conveyor Components'],
    subcategory: 'Idlers',
    specifications: {},
    features: [
      'V-return roller configuration',
      'Self-cleaning design',
      'Low friction bearings',
      'Corrosion resistant finish'
    ],
    applications: [
      'Return belt support',
      'Belt conveyors',
      'Material handling systems'
    ],
    compatibleEquipment: ['All types of belt conveyors'],
    tags: ['idlers', 'return', 'v-configuration', 'support'],
    image: '/Products/CONVEYOR_PARTS/RETURN_IDLERS.jpeg',
    partNumber: 'SP-RI-001'
  },
  {
    id: 'cp-007',
    title: 'Self Alignment Return Idlers',
    model: 'RI-002',
    sku: 'SP-RI-002',
    category: ['Conveyor Components'],
    subcategory: 'Idlers',
    specifications: {},
    features: [
      'Adjustable angle configuration',
      'Heavy duty construction',
      'Easy belt tracking',
      'Minimal maintenance'
    ],
    applications: [
      'Long distance conveyors',
      'Heavy duty applications',
      'Mining operations'
    ],
    compatibleEquipment: ['Mining conveyors', 'Long distance systems'],
    tags: ['idlers', 'return', 'adjustable', 'heavy duty'],
    image: '/Products/CONVEYOR_PARTS/RETURN_IDLERS_1.jpeg',
    partNumber: 'SP-RI-002'
  },

  // IDLERS - Self Alignment
  {
    id: 'cp-008',
    title: 'Self Alignment Idlers',
    model: 'SA-001',
    sku: 'SP-SA-001',
    category: ['Conveyor Components'],
    subcategory: 'Idlers',
    specifications: {},
    features: [
      'Automatic belt alignment',
      'Prevents belt damage',
      'Self-correcting mechanism',
      'Reduces maintenance'
    ],
    applications: [
      'Long conveyor systems',
      'Outdoor installations',
      'Critical belt tracking applications'
    ],
    compatibleEquipment: ['Long distance conveyors', 'Outdoor systems'],
    tags: ['idlers', 'self-alignment', 'automatic', 'tracking'],
    image: '/Products/CONVEYOR_PARTS/SELF_ALLIGNMENT.jpeg',
    partNumber: 'SP-SA-001'
  },

  // GUIDE ROLLERS
  {
    id: 'cp-009',
    title: 'Guide Rollers',
    model: 'GR-001',
    sku: 'SP-GR-001',
    category: ['Conveyor Components'],
    subcategory: 'Rollers',
    specifications: {},
    features: [
      'Polyurethane coating for grip',
      'Side mounting design',
      'Belt edge protection',
      'Low noise operation'
    ],
    applications: [
      'Belt edge guidance',
      'Loading chutes',
      'Transfer points'
    ],
    compatibleEquipment: ['All belt conveyor systems'],
    tags: ['guide rollers', 'edge protection', 'polyurethane', 'mounting'],
    image: '/Products/CONVEYOR_PARTS/GUIDE_ROLLER.jpeg',
    partNumber: 'SP-GR-001'
  },

  // PULLEYS - Head Pulleys
  {
    id: 'cp-010',
    title: 'Head Pulley',
    model: 'HP-001',
    sku: 'SP-HP-001',
    category: ['Conveyor Components'],
    subcategory: 'Pulleys',
    specifications: {},
    features: [
      'Diamond pattern rubber lagging',
      'Heavy duty cast steel construction',
      'Precision machined surface',
      'Balanced for smooth operation'
    ],
    applications: [
      'Drive pulleys for belt conveyors',
      'Mining applications',
      'Heavy duty material handling'
    ],
    compatibleEquipment: ['Belt conveyors', 'Mining systems'],
    tags: ['pulleys', 'head', 'drive', 'rubber lagging'],
    image: '/Products/CONVEYOR_PARTS/HEAD_PULLEY.jpeg',
    partNumber: 'SP-HP-001'
  },
  {
    id: 'cp-011',
    title: 'Head Pulley',
    model: 'HP-002',
    sku: 'SP-HP-002',
    category: ['Conveyor Components'],
    subcategory: 'Pulleys',
    specifications: {},
    features: [
      'Ceramic lagging for extreme wear resistance',
      'High alumina ceramic tiles',
      'Extended service life',
      'Superior grip in wet conditions'
    ],
    applications: [
      'Extreme wear conditions',
      'Wet material handling',
      'Abrasive material transport'
    ],
    compatibleEquipment: ['Heavy duty mining conveyors'],
    tags: ['pulleys', 'head', 'ceramic lagging', 'wear resistant'],
    image: '/Products/CONVEYOR_PARTS/HEAD_PULLEY_1.jpeg',
    partNumber: 'SP-HP-002'
  },

  // PULLEYS - Tail Pulleys
  {
    id: 'cp-012',
    title: 'Tail Pulley',
    model: 'TP-001',
    sku: 'SP-TP-001',
    category: ['Conveyor Components'],
    subcategory: 'Pulleys',
    specifications: {},
    features: [
      'Smooth machined surface',
      'Self-cleaning design',
      'Heavy duty spherical roller bearings',
      'Corrosion resistant coating'
    ],
    applications: [
      'Tail end of belt conveyors',
      'Tension adjustment systems',
      'Return belt guidance'
    ],
    compatibleEquipment: ['All belt conveyor systems'],
    tags: ['pulleys', 'tail', 'tension', 'machined'],
    image: '/Products/CONVEYOR_PARTS/TAIL_PULLEY.jpeg',
    partNumber: 'SP-TP-001'
  },

  // PULLEYS - Snub Pulleys
  {
    id: 'cp-013',
    title: 'Snub Pulley',
    model: 'SP-001',
    sku: 'SP-SP-001',
    category: ['Conveyor Components'],
    subcategory: 'Pulleys',
    specifications: {},
    features: [
      'Increases belt wrap angle',
      'Improves traction',
      'Smooth operation',
      'Available in grooved pattern'
    ],
    applications: [
      'Increased belt wrap on drive pulley',
      'Belt tensioning systems',
      'Power transmission enhancement'
    ],
    compatibleEquipment: ['Belt conveyors with drive systems'],
    tags: ['pulleys', 'snub', 'traction', 'wrap angle'],
    image: '/Products/CONVEYOR_PARTS/SNUB_PULLEY.jpeg',
    partNumber: 'SP-SP-001'
  },

  // PULLEYS - Magnetic Pulleys
  {
    id: 'cp-014',
    title: 'Magnetic Pulley',
    model: 'MP-001',
    sku: 'SP-MP-001',
    category: ['Conveyor Components'],
    subcategory: 'Pulleys',
    specifications: {},
    features: [
      'Permanent rare earth magnets',
      'Self-cleaning magnetic separation',
      'Stainless steel construction',
      'High magnetic strength'
    ],
    applications: [
      'Iron separation from bulk materials',
      'Scrap metal recovery',
      'Material purification',
      'Mining operations'
    ],
    compatibleEquipment: ['Belt conveyors', 'Material handling systems'],
    tags: ['pulleys', 'magnetic', 'separation', 'iron removal'],
    image: '/Products/CONVEYOR_PARTS/MAGNETIC_PULLEY.jpeg',
    partNumber: 'SP-MP-001'
  },

  // BELTS - Conveyor Belts
  {
    id: 'cp-015',
    title: 'Conveyor Belt',
    model: 'CB-001',
    sku: 'SP-CB-001',
    category: ['Conveyor Components'],
    subcategory: 'Belts',
    specifications: {},
    features: [
      'Multi-ply textile carcass',
      'Natural rubber covers',
      'Oil and chemical resistant',
      'Long service life'
    ],
    applications: [
      'General material handling',
      'Mining operations',
      'Industrial conveyors',
      'Bulk material transport'
    ],
    compatibleEquipment: ['All types of belt conveyors'],
    tags: ['belts', 'conveyor', 'textile', 'rubber'],
    image: '/Products/CONVEYOR_PARTS/CONVEYOR_BELT.jpeg',
    partNumber: 'SP-CB-001'
  },
  {
    id: 'cp-016',
    title: 'Chevron Belt',
    model: 'CHB-001',
    sku: 'SP-CHB-001',
    category: ['Conveyor Components'],
    subcategory: 'Belts',
    specifications: {},
    features: [
      'V-shaped chevron cleats',
      'Prevents material rollback',
      'High grip on inclines',
      'Flexible cleat design'
    ],
    applications: [
      'Inclined conveyor systems',
      'Steep angle transport',
      'Loose material handling',
      'Agricultural applications'
    ],
    compatibleEquipment: ['Inclined belt conveyors', 'Agricultural systems'],
    tags: ['belts', 'chevron', 'inclined', 'cleats'],
    image: '/Products/CONVEYOR_PARTS/CHEVRON_BELT.jpeg',
    partNumber: 'SP-CHB-001'
  },
  {
    id: 'cp-017',
    title: 'Food Grade Belt',
    model: 'FGB-001',
    sku: 'SP-FGB-001',
    category: ['Conveyor Components'],
    subcategory: 'Belts',
    specifications: {},
    features: [
      'FDA approved materials',
      'Easy to clean surface',
      'Chemical resistant',
      'Non-toxic construction'
    ],
    applications: [
      'Food processing',
      'Pharmaceutical industry',
      'Packaging applications',
      'Clean room environments'
    ],
    compatibleEquipment: ['Food processing conveyors', 'Clean room systems'],
    tags: ['belts', 'food grade', 'FDA approved', 'hygienic'],
    image: '/Products/CONVEYOR_PARTS/FOOD_GRADE_BELT.jpeg',
    partNumber: 'SP-FGB-001'
  },

  // BEARINGS
  {
    id: 'cp-018',
    title: 'Conveyor Bearing',
    model: 'CBR-001',
    sku: 'SP-CBR-001',
    category: ['Conveyor Components'],
    subcategory: 'Bearings',
    specifications: {},
    features: [
      'Double sealed for protection',
      'Pre-lubricated with high grade grease',
      'Chrome steel construction',
      'Long service life'
    ],
    applications: [
      'Idler roller bearings',
      'Pulley shaft bearings',
      'Conveyor drive systems'
    ],
    compatibleEquipment: ['All conveyor components'],
    tags: ['bearings', 'sealed', 'chrome steel', 'lubricated'],
    image: '/Products/CONVEYOR_PARTS/CONVEYOR_BEARING.jpeg',
    partNumber: 'SP-CBR-001'
  },
  {
    id: 'cp-019',
    title: 'Idler Bearing',
    model: 'IBR-001',
    sku: 'SP-IBR-001',
    category: ['Conveyor Components'],
    subcategory: 'Bearings',
    specifications: {},
    features: [
      'Self-aligning capability',
      'Triple lip seal protection',
      'Heavy duty construction',
      'Handles misalignment'
    ],
    applications: [
      'Heavy duty idler rollers',
      'Mining conveyor idlers',
      'Harsh environment applications'
    ],
    compatibleEquipment: ['Heavy duty idlers', 'Mining systems'],
    tags: ['bearings', 'spherical roller', 'self-aligning', 'heavy duty'],
    image: '/Products/CONVEYOR_PARTS/IDLER_BEARING.jpeg',
    partNumber: 'SP-IBR-001'
  },

  // BRACKETS & LOCKING ASSEMBLIES
  {
    id: 'cp-020',
    title: 'Locking Assembly Idler Bracket',
    model: 'LAB-001',
    sku: 'SP-LAB-001',
    category: ['Conveyor Components'],
    subcategory: 'Structural Components',
    specifications: {},
    features: [
      'Quick release locking mechanism',
      'Height and angle adjustment',
      'Galvanized corrosion protection',
      'Easy maintenance access'
    ],
    applications: [
      'Idler mounting systems',
      'Conveyor maintenance',
      'Quick idler replacement'
    ],
    compatibleEquipment: ['All types of conveyor idlers'],
    tags: ['brackets', 'locking assembly', 'adjustable', 'galvanized'],
    image: '/Products/CONVEYOR_PARTS/LOCKING_ASSEMBLY_IDLER_BRACKET.jpeg',
    partNumber: 'SP-LAB-001'
  },

  // SAFETY SWITCHES
  {
    id: 'cp-021',
    title: 'Belt Sway Switch',
    model: 'BSS-001',
    sku: 'SP-BSS-001',
    category: ['Conveyor Components'],
    subcategory: 'Safety & Control',
    specifications: {},
    features: [
      'Detects belt misalignment',
      'Dual contact configuration',
      'Weather proof housing',
      'Manual reset safety feature'
    ],
    applications: [
      'Belt misalignment detection',
      'Conveyor safety systems',
      'Emergency shutdown systems'
    ],
    compatibleEquipment: ['All belt conveyor systems'],
    tags: ['safety switches', 'belt sway', 'misalignment', 'emergency'],
    image: '/Products/CONVEYOR_PARTS/BELT_SWAY_SWITCH.jpeg',
    partNumber: 'SP-BSS-001'
  },
  {
    id: 'cp-022',
    title: 'Pull Cord Switch',
    model: 'PCS-001',
    sku: 'SP-PCS-001',
    category: ['Conveyor Components'],
    subcategory: 'Safety & Control',
    specifications: {},
    features: [
      'Emergency stop via pull cord',
      'Key reset for security',
      'Weather resistant housing',
      'Long cable run capability'
    ],
    applications: [
      'Emergency stop systems',
      'Long conveyor lines',
      'Personnel safety systems'
    ],
    compatibleEquipment: ['Long belt conveyor systems'],
    tags: ['safety switches', 'pull cord', 'emergency stop', 'key reset'],
    image: '/Products/CONVEYOR_PARTS/PULL_CHORD_SWITCH.jpeg',
    partNumber: 'SP-PCS-001'
  },
  {
    id: 'cp-023',
    title: 'Zero Speed Switch',
    model: 'ZSS-001',
    sku: 'SP-ZSS-001',
    category: ['Conveyor Components'],
    subcategory: 'Safety & Control',
    specifications: {},
    features: [
      'Monitors belt/roller speed',
      'Adjustable response time',
      'Multiple output configurations',
      'Fail-safe operation'
    ],
    applications: [
      'Belt speed monitoring',
      'Jam detection systems',
      'Process control',
      'Safety interlocks'
    ],
    compatibleEquipment: ['All conveyor drive systems'],
    tags: ['safety switches', 'zero speed', 'monitoring', 'fail-safe'],
    image: '/Products/CONVEYOR_PARTS/ZERO_SPPED_SWITCH.jpeg',
    partNumber: 'SP-ZSS-001'
  },

  // SCRAPERS
  {
    id: 'cp-024',
    title: 'External Scraper',
    model: 'ES-001',
    sku: 'SP-ES-001',
    category: ['Conveyor Components'],
    subcategory: 'Maintenance & Accessories',
    specifications: {},
    features: [
      'Polyurethane blade for flexibility',
      'Spring loaded automatic adjustment',
      'Easy blade replacement',
      'Effective material removal'
    ],
    applications: [
      'Belt cleaning systems',
      'Material carryback prevention',
      'Conveyor maintenance'
    ],
    compatibleEquipment: ['All belt conveyor systems'],
    tags: ['scrapers', 'external', 'polyurethane', 'cleaning'],
    image: '/Products/CONVEYOR_PARTS/EXTERNAL_SCRAPPER.jpeg',
    partNumber: 'SP-ES-001'
  },
  {
    id: 'cp-025',
    title: 'Internal Scraper',
    model: 'IS-001',
    sku: 'SP-IS-001',
    category: ['Conveyor Components'],
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
      'Mining applications'
    ],
    compatibleEquipment: ['Heavy duty mining conveyors'],
    tags: ['scrapers', 'internal', 'tungsten carbide', 'heavy duty'],
    image: '/Products/CONVEYOR_PARTS/INTERNAL_SCRAPPER.jpeg',
    partNumber: 'SP-IS-001'
  },

  // COUPLINGS
  {
    id: 'cp-026',
    title: 'Fluid Coupling',
    model: 'FC-001',
    sku: 'SP-FC-001',
    category: ['Conveyor Components'],
    subcategory: 'Drive Systems',
    specifications: {},
    features: [
      'Smooth torque transmission',
      'Overload protection',
      'Vibration damping',
      'Maintenance free operation'
    ],
    applications: [
      'Conveyor drive systems',
      'Motor to gearbox coupling',
      'Soft start applications'
    ],
    compatibleEquipment: ['Conveyor drive trains'],
    tags: ['couplings', 'fluid', 'torque transmission', 'soft start'],
    image: '/Products/CONVEYOR_PARTS/FLUID_COUPLING.jpeg',
    partNumber: 'SP-FC-001'
  },
  {
    id: 'cp-027',
    title: 'Pin Bush Coupling',
    model: 'PBC-001',
    sku: 'SP-PBC-001',
    category: ['Conveyor Components'],
    subcategory: 'Drive Systems',
    specifications: {},
    features: [
      'Flexible rubber bushes',
      'Handles misalignment',
      'Easy maintenance',
      'Vibration absorption'
    ],
    applications: [
      'General purpose drives',
      'Motor couplings',
      'Pump drives'
    ],
    compatibleEquipment: ['Standard drive systems'],
    tags: ['couplings', 'pin bush', 'flexible', 'misalignment'],
    image: '/Products/CONVEYOR_PARTS/PIN-BUSH_COUPLING.jpeg',
    partNumber: 'SP-PBC-001'
  },
  {
    id: 'cp-028',
    title: 'Tyre Coupling',
    model: 'TC-001',
    sku: 'SP-TC-001',
    category: ['Conveyor Components'],
    subcategory: 'Drive Systems',
    specifications: {},
    features: [
      'Flexible rubber tyre element',
      'High misalignment tolerance',
      'Shock absorption',
      'Easy tyre replacement'
    ],
    applications: [
      'Mining equipment drives',
      'Heavy duty applications',
      'Shock absorbing requirements'
    ],
    compatibleEquipment: ['Heavy duty drive systems'],
    tags: ['couplings', 'tyre', 'shock absorption', 'heavy duty'],
    image: '/Products/CONVEYOR_PARTS/TYRE_COUPLING.jpeg',
    partNumber: 'SP-TC-001'
  },

  // LAGGING & PROTECTION
  {
    id: 'cp-029',
    title: 'Ceramic Lagging',
    model: 'CL-001',
    sku: 'SP-CL-001',
    category: ['Conveyor Components'],
    subcategory: 'Maintenance & Accessories',
    specifications: {},
    features: [
      '95% alumina ceramic tiles',
      'Superior wear resistance',
      'Chemical inert properties',
      'Long service life'
    ],
    applications: [
      'Extreme wear pulley protection',
      'Abrasive material handling',
      'Chemical resistant applications'
    ],
    compatibleEquipment: ['Drive pulleys', 'Head pulleys'],
    tags: ['lagging', 'ceramic', 'wear resistance', 'alumina'],
    image: '/Products/CONVEYOR_PARTS/CERAMIC_LAGGING.jpeg',
    partNumber: 'SP-CL-001'
  },

  // SEALING SYSTEMS
  {
    id: 'cp-030',
    title: 'Skirt Rubber Sealing',
    model: 'SRS-001',
    sku: 'SP-SRS-001',
    category: ['Conveyor Components'],
    subcategory: 'Maintenance & Accessories',
    specifications: {},
    features: [
      'Flexible SBR rubber construction',
      'Dust containment',
      'Easy installation',
      'Chemical resistant'
    ],
    applications: [
      'Transfer chute sealing',
      'Dust containment',
      'Loading point protection'
    ],
    compatibleEquipment: ['Transfer chutes', 'Loading systems'],
    tags: ['sealing', 'skirt rubber', 'dust containment', 'flexible'],
    image: '/Products/CONVEYOR_PARTS/SKIRT_RUBBER_SEALING.jpeg',
    partNumber: 'SP-SRS-001'
  },

  // DRIVE COMPONENTS
  {
    id: 'cp-031',
    title: 'Gear Box',
    model: 'GB-001',
    sku: 'SP-GB-001',
    category: ['Conveyor Components'],
    subcategory: 'Drive Systems',
    specifications: {},
    features: [
      'Heavy duty cast iron construction',
      'High efficiency gear train',
      'Oil bath lubrication',
      'Multiple ratio options'
    ],
    applications: [
      'Conveyor drive systems',
      'Belt drive applications',
      'Material handling equipment'
    ],
    compatibleEquipment: ['Conveyor drive systems'],
    tags: ['gearbox', 'drive', 'heavy duty', 'efficient'],
    image: '/Products/CONVEYOR_PARTS/GEAR_BOX.jpeg',
    partNumber: 'SP-GB-001'
  },
  {
    id: 'cp-032',
    title: 'Drive Frame',
    model: 'DF-001',
    sku: 'SP-DF-001',
    category: ['Conveyor Components'],
    subcategory: 'Drive Systems',
    specifications: {},
    features: [
      'Heavy duty structural steel',
      'Integrated tensioning system',
      'Bolt-down mounting',
      'Corrosion resistant coating'
    ],
    applications: [
      'Conveyor drive mounting',
      'Motor and gearbox support',
      'Tensioning systems'
    ],
    compatibleEquipment: ['All conveyor drive systems'],
    tags: ['drive frame', 'structural', 'mounting', 'tensioning'],
    image: '/Products/CONVEYOR_PARTS/DRIVE_FRAME.jpeg',
    partNumber: 'SP-DF-001'
  },

  // PLUMMER BLOCKS
  {
    id: 'cp-033',
    title: 'Plummer Block',
    model: 'PB-001',
    sku: 'SP-PB-001',
    category: ['Conveyor Components'],
    subcategory: 'Structural Components',
    specifications: {},
    features: [
      'Cast iron construction',
      'Self-aligning capability',
      'Labyrinth seal protection',
      'Easy maintenance access'
    ],
    applications: [
      'Pulley shaft support',
      'Drive shaft mounting',
      'Heavy duty applications'
    ],
    compatibleEquipment: ['Pulley systems', 'Drive shafts'],
    tags: ['plummer block', 'bearing housing', 'self-aligning', 'heavy duty'],
    image: '/Products/CONVEYOR_PARTS/PLUMMER_BLOCK.jpeg',
    partNumber: 'SP-PB-001'
  },
  {
    id: 'cp-034',
    title: 'Pillow Block',
    model: 'PIB-001',
    sku: 'SP-PIB-001',
    category: ['Conveyor Components'],
    subcategory: 'Structural Components',
    specifications: {},
    features: [
      'Precision machined surfaces',
      'Triple lip seal protection',
      'Standard mounting dimensions',
      'Long service life'
    ],
    applications: [
      'Light to medium duty shafts',
      'Standard conveyor applications',
      'General machinery'
    ],
    compatibleEquipment: ['Standard conveyor systems'],
    tags: ['pillow block', 'bearing housing', 'precision', 'standard'],
    image: '/Products/CONVEYOR_PARTS/PILLOW_BLOCK.jpeg',
    partNumber: 'SP-PIB-001'
  },

  // MAGNETIC SEPARATORS
  {
    id: 'cp-035',
    title: 'Over Band Magnetic Separator',  
    model: 'OBMS-001',
    sku: 'SP-OBMS-001',
    category: ['Conveyor Components'],
    subcategory: 'Separation Systems',
    specifications: {},
    features: [
      'Self-cleaning belt system',
      'Permanent magnet technology',
      'Stainless steel construction',
      'Adjustable suspension height'
    ],
    applications: [
      'Iron removal from bulk materials',
      'Recycling applications',
      'Mining operations',
      'Material purification'
    ],
    compatibleEquipment: ['Belt conveyors', 'Material handling systems'],
    tags: ['magnetic separator', 'over band', 'iron removal', 'self-cleaning'],
    image: '/Products/CONVEYOR_PARTS/OVER_BAND_MAGNETIC_SEPERATOR.jpeg',
    partNumber: 'SP-OBMS-001'
  },
  {
    id: 'cp-036',
    title: 'Suspension Type Separator',
    model: 'STS-001',
    sku: 'SP-STS-001',
    category: ['Conveyor Components'],
    subcategory: 'Separation Systems',
    specifications: {},
    features: [
      'Permanent magnet design',
      'Manual or automatic discharge',
      'No power consumption',
      'High magnetic strength'
    ],
    applications: [
      'Cross belt iron separation',
      'Scrap metal recovery',
      'Material cleaning',
      'Process protection'
    ],
    compatibleEquipment: ['Cross belt systems', 'Material handling'],
    tags: ['magnetic separator', 'suspension', 'permanent magnet', 'iron recovery'],
    image: '/Products/CONVEYOR_PARTS/SUSPENSION_TYPE_SEPERATOR.jpeg',
    partNumber: 'SP-STS-001'
  },

  // METAL DETECTION
  {
    id: 'cp-037',
    title: 'Metal Detector',
    model: 'MD-001',
    sku: 'SP-MD-001',
    category: ['Conveyor Components'],
    subcategory: 'Safety & Control',
    specifications: {},
    features: [
      'Multi-metal detection capability',
      'Digital display and controls',
      'Waterproof construction',
      'Adjustable sensitivity'
    ],
    applications: [
      'Food industry quality control',
      'Pharmaceutical processing',
      'Material contamination detection',
      'Process protection'
    ],
    compatibleEquipment: ['Food processing conveyors', 'Quality control systems'],
    tags: ['metal detector', 'quality control', 'contamination', 'food grade'],
    image: '/Products/CONVEYOR_PARTS/METAL_DETECTOR.jpeg',
    partNumber: 'SP-MD-001'
  },

  // WEIGHING SYSTEMS
  {
    id: 'cp-038',
    title: 'Belt Weigh Scale',
    model: 'BWS-001',
    sku: 'SP-BWS-001',
    category: ['Conveyor Components'],
    subcategory: 'Safety & Control',
    specifications: {},
    features: [
      'High accuracy weighing',
      'Digital display and totalizer',
      'Remote communication capability',
      'Self-diagnostic features'
    ],
    applications: [
      'Material flow measurement',
      'Process control',
      'Inventory management',
      'Production monitoring'
    ],
    compatibleEquipment: ['Belt conveyor systems', 'Process control systems'],
    tags: ['weigh scale', 'measurement', 'process control', 'accuracy'],
    image: '/Products/CONVEYOR_PARTS/BELT_WEIGH_SCALE.jpeg',
    partNumber: 'SP-BWS-001'
  },

  // VULCANIZING EQUIPMENT
  {
    id: 'cp-039',
    title: 'Hot Belt Vulcanizing Machine',
    model: 'HBVM-001',
    sku: 'SP-HBVM-001',
    category: ['Conveyor Components'],
    subcategory: 'Maintenance & Accessories',
    specifications: {},
    features: [
      'Precise temperature control',
      'Uniform heating distribution',
      'PLC based automation',
      'Portable design available'
    ],
    applications: [
      'Belt joint vulcanization',
      'Field repair operations',
      'Belt maintenance',
      'Rubber belt joining'
    ],
    compatibleEquipment: ['All rubber conveyor belts'],
    tags: ['vulcanizing', 'belt joining', 'hot vulcanization', 'repair'],
    image: '/Products/CONVEYOR_PARTS/HOT_BELT_VULCANIZING_MACHINE.jpeg',
    partNumber: 'SP-HBVM-001'
  },
  {
    id: 'cp-040',
    title: 'Cold Vulcanizing Kit',
    model: 'CVK-001',
    sku: 'SP-CVK-001',
    category: ['Conveyor Components'],
    subcategory: 'Maintenance & Accessories',
    specifications: {},
    features: [
      'Room temperature curing',
      'No heat or pressure required',
      'Portable repair solution',
      'Strong bond strength'
    ],
    applications: [
      'Emergency belt repairs',
      'Field splicing operations',
      'Temporary belt joints',
      'Maintenance repairs'
    ],
    compatibleEquipment: ['Rubber conveyor belts'],
    tags: ['vulcanizing', 'cold cure', 'emergency repair', 'field repair'],
    image: '/Products/CONVEYOR_PARTS/COLD_VULCANIZING.jpeg',
    partNumber: 'SP-CVK-001'
  }
]

export const conveyorPartsData: BrandData = {
  brand: 'Spareng Conveyor Parts',
  description: 'Comprehensive range of conveyor components including idlers, pulleys, belts, bearings, safety systems, and maintenance equipment for all types of material handling applications.',
  website: 'https://spareng.com',
  products: conveyorPartsProducts
}