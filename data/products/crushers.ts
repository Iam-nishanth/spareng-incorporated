import { BrandData, Product } from './product-types'

export const crushersProducts: Product[] = [
  // IMPACT BARS
  {
    id: 'cr-001',
    title: 'Impact Bars',
    model: 'IB-001',
    sku: 'SP-IB-001',
    category: [  'Crusher Spares'],
    subcategory: 'Wear Parts',
    specifications: {},
    features: [
      'High chrome white iron construction',
      'Excellent wear resistance',
      'Optimized impact surface',
      'Easy to replace design',
      'Extended operational life'
    ],
    applications: [
      'Primary and secondary crushers',
      'Impact crushers',
      'Recycling applications',
      'Aggregate processing'
    ],
    compatibleEquipment: ['Impact crushers', 'Jaw crushers', 'Cone crushers'],
    tags: ['impact bars', 'crusher spares', 'wear parts', 'high chrome'],
    image: '/Products/CRUSEHRS/IMPACT_BARS.png',
    partNumber: 'SP-IB-001'
  },

  // HAMMERS
  {
    id: 'cr-002',
    title: 'Hammers',
    model: 'HAM-001',
    sku: 'SP-HAM-001',
    category: [  'Crusher Spares'],
    subcategory: 'Wear Parts',
    specifications: {},
    features: [
      'High manganese steel construction',
      'Work hardening properties',
      'Impact resistant design',
      'Multiple attachment options',
      'Long service life'
    ],
    applications: [
      'Hammer mills',
      'Impact crushers',
      'Size reduction applications',
      'Material crushing'
    ],
    compatibleEquipment: ['Hammer mills', 'Impact crushers', 'Shredders'],
    tags: ['hammers', 'manganese steel', 'impact crushing', 'wear parts'],
    image: '/Products/CRUSEHRS/HAMMERS.jpeg',
    partNumber: 'SP-HAM-001'
  },

  // CRUSHING RINGS - PROFILED/PLAIN
  {
    id: 'cr-003',
    title: 'Crushing Rings - Profiled/Plain',
    model: 'CR-001',
    sku: 'SP-CR-001',
    category: [  'Crusher Spares'],
    subcategory: 'Crushing Components',
    specifications: {},
    features: [
      'High quality steel construction',
      'Profiled and plain variants available',
      'Precision machined surfaces',
      'Wear resistant materials',
      'Custom sizing available'
    ],
    applications: [
      'Cone crushers',
      'Gyratory crushers',
      'Size reduction operations',
      'Mineral processing'
    ],
    compatibleEquipment: ['Cone crushers', 'Gyratory crushers'],
    tags: ['crushing rings', 'profiled', 'plain', 'cone crusher parts'],
    image: '/Products/CRUSEHRS/CRUSHING_RINGS-_PROFILED_PLAIN.jpeg',
    partNumber: 'SP-CR-001'
  },

  // LINER FOR BREAKER PLATE
  {
    id: 'cr-004',
    title: 'Liner for Breaker Plate',
    model: 'LBP-001',
    sku: 'SP-LBP-001',
    category: [  'Crusher Spares'],
    subcategory: 'Wear Parts',
    specifications: {},
    features: [
      'High manganese steel construction',
      'Reversible design for extended life',
      'Precision fit and finish',
      'Easy installation',
      'Maximum crushing efficiency'
    ],
    applications: [
      'Jaw crushers',
      'Primary crushing applications',
      'Quarry operations',
      'Mining applications'
    ],
    compatibleEquipment: ['Jaw crushers', 'Primary crushers'],
    tags: ['breaker plate liner', 'manganese steel', 'jaw crusher parts'],
    image: '/Products/CRUSEHRS/LINER_FOR_BRAKER_PLATE.png',
    partNumber: 'SP-LBP-001'
  },

  // BEARING HOUSING
  // {
  //   id: 'cr-005',
  //   title: 'Bearing Housing',
  //   model: 'BH-001',
  //   sku: 'SP-BH-001',
  //   category: [  'Crusher Spares'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'Cast iron construction',
  //     'Precision machined bearing seats',
  //     'Robust design for heavy loads',
  //     'Corrosion resistant coating',
  //     'Easy maintenance access'
  //   ],
  //   applications: [
  //     'Crusher main shafts',
  //     'Heavy duty bearing applications',
  //     'Rotating equipment support',
  //     'Industrial machinery'
  //   ],
  //   compatibleEquipment: ['All types of crushers', 'Heavy machinery'],
  //   tags: ['bearing housing', 'cast iron', 'heavy duty', 'machinery support'],
  //   image: '/Products/CRUSEHRS/BEARING_HOUSING.png',
  //   partNumber: 'SP-BH-001'
  // },

  // BREAKER PLATE ASSEMBLY
  {
    id: 'cr-006',
    title: 'Breaker Plate Assembly',
    model: 'BPA-001',
    sku: 'SP-BPA-001',
    category: [  'Crusher Spares'],
    subcategory: 'Wear Parts',
    specifications: {},
    features: [
      'High strength steel construction',
      'Complete assembly ready to install',
      'Optimized crushing chamber design',
      'Long service life',
      'Easy replacement system'
    ],
    applications: [
      'Jaw crushers',
      'Primary crushing operations',
      'Stone crushing',
      'Mining applications'
    ],
    compatibleEquipment: ['Jaw crushers', 'Primary crushers'],
    tags: ['breaker plate', 'jaw crusher', 'assembly', 'crushing chamber'],
    image: '/Products/CRUSEHRS/BRAKER_PLATE_ASSEMBLY.png',
    partNumber: 'SP-BPA-001'
  },

  // TAKE UP ASSEMBLY
  {
    id: 'cr-007',
    title: 'Take Up Assembly',
    model: 'TUA-001',
    sku: 'SP-TUA-001',
    category: ['Screening Spares'],
    subcategory: 'Support Components',
    specifications: {},
    features: [
      'Heavy duty steel construction',
      'Adjustable design',
      'Precision machined components',
      'Reliable operation',
      'Easy maintenance'
    ],
    applications: [
      'Crusher discharge systems',
      'Belt tensioning applications',
      'Material handling systems',
      'Conveyor applications'
    ],
    compatibleEquipment: ['Crushers', 'Conveyor systems', 'Material handlers'],
    tags: ['take up assembly', 'tensioning', 'heavy duty', 'adjustable'],
    image: '/Products/CRUSEHRS/TAKE_UNIT_ASSEMBLY.png',
    partNumber: 'SP-TUA-001'
  },

  // BODY LINERS - TOP/BOTTOM HOUSINGS
  {
    id: 'cr-008',
    title: 'Body Liners - Top/Bottom Housings',
    model: 'BL-001',
    sku: 'SP-BL-001',
    category: [  'Crusher Spares'],
    subcategory: 'Wear Parts',
    specifications: {},
    features: [
      'High manganese steel construction',
      'Reversible design for extended wear',
      'Precise fit and alignment',
      'Maximum protection',
      'Easy installation'
    ],
    applications: [
      'Cone crushers',
      'Impact crushers',
      'Crusher housing protection',
      'Wear resistant applications'
    ],
    compatibleEquipment: ['Cone crushers', 'Impact crushers'],
    tags: ['body liners', 'manganese steel', 'housing protection', 'wear parts'],
    image: '/Products/CRUSEHRS/BODY_LINERS-_TOPBOTTOM_HOSUINGS.png',
    partNumber: 'SP-BL-001'
  },

  // MAIN SHAFT
  {
    id: 'cr-009',
    title: 'Main Shaft',
    model: 'MS-001',
    sku: 'SP-MS-001',
    category: [  'Crusher Spares'],
    subcategory: 'Crushing Components',
    specifications: {},
    features: [
      'High grade steel construction',
      'Precision machined to tight tolerances',
      'Heat treated for durability',
      'Balanced for smooth operation',
      'Long service life'
    ],
    applications: [
      'Crusher main drive systems',
      'Primary and secondary crushers',
      'Heavy duty rotating applications',
      'Industrial crushing equipment'
    ],
    compatibleEquipment: ['All types of crushers', 'Heavy machinery'],
    tags: ['main shaft', 'precision machined', 'heat treated', 'heavy duty'],
    image: '/Products/CRUSEHRS/MAIN_SHAFT.png',
    partNumber: 'SP-MS-001'
  },

  // IMPACTOR ROTOR ASSEMBLY SIDE COVER LINERS
  {
    id: 'cr-010',
    title: 'Impactor Rotor Assembly Side Cover Liners',
    model: 'IRA-001',
    sku: 'SP-IRA-001',
    category: [  'Crusher Spares'],
    subcategory: 'Crushing Components',
    specifications: {},
    features: [
      'High chrome white iron construction',
      'Optimized for impact crushing',
      'Extended wear life',
      'Precise balancing',
      'Easy replacement design'
    ],
    applications: [
      'Impact crushers',
      'Secondary crushing',
      'Tertiary crushing',
      'Fine crushing applications'
    ],
    compatibleEquipment: ['Impact crushers', 'VSI crushers'],
    tags: ['impactor rotor', 'side cover liners', 'impact crushing', 'wear parts'],
    image: '/Products/CRUSEHRS/IMPACTOR_ROTOR_ASSEMBLY_SIDE_COVER_LINERS.png',
    partNumber: 'SP-IRA-001'
  },

  // CURVED LINER
  {
    id: 'cr-011',
    title: 'Curved Liner',
    model: 'CL-001',
    sku: 'SP-CL-001',
    category: [  'Crusher Spares'],
    subcategory: 'Wear Parts',
    specifications: {},
    features: [
      'High manganese steel construction',
      'Curved design for optimal material flow',
      'Excellent wear resistance',
      'Precision casting',
      'Easy installation'
    ],
    applications: [
      'Cone crushers',
      'Gyratory crushers',
      'Curved crushing chambers',
      'Material flow optimization'
    ],
    compatibleEquipment: ['Cone crushers', 'Gyratory crushers'],
    tags: ['curved liner', 'manganese steel', 'material flow', 'cone crusher'],
    image: '/Products/CRUSEHRS/CURVED_LINER.png',
    partNumber: 'SP-CL-001'
  },

  // CURVED BREAKER PLATE
  {
    id: 'cr-012',
    title: 'Curved Breaker Plate',
    model: 'CBP-001',
    sku: 'SP-CBP-001',
    category: [  'Crusher Spares'],
    subcategory: 'Wear Parts',
    specifications: {},
    features: [
      'High strength steel construction',
      'Curved design for efficient crushing',
      'Wear resistant surface',
      'Optimized crushing angle',
      'Long service life'
    ],
    applications: [
      'Jaw crushers with curved chambers',
      'Primary crushing',
      'Stone crushing',
      'Mining operations'
    ],
    compatibleEquipment: ['Jaw crushers', 'Primary crushers'],
    tags: ['curved breaker plate', 'jaw crusher', 'curved chamber', 'primary crushing'],
    image: '/Products/CRUSEHRS/CURVED_BREAKER_PLATE.png',
    partNumber: 'SP-CBP-001'
  },

  // RG-ROTOR ASSEMBLY
  {
    id: 'cr-013',
    title: 'RG-Rotor Assembly',
    model: 'RGA-001',
    sku: 'SP-RGA-001',
    category: [  'Crusher Spares'],
    subcategory: 'Crushing Components',
    specifications: {},
    features: [
      'High grade steel construction',
      'Precision balanced assembly',
      'Optimized for ring granulator operation',
      'Replaceable wear components',
      'Smooth operation'
    ],
    applications: [
      'Ring granulators',
      'Size reduction equipment',
      'Material processing',
      'Granulation operations'
    ],
    compatibleEquipment: ['Ring granulators', 'Size reduction equipment'],
    tags: ['rg rotor', 'ring granulator', 'rotor assembly', 'granulation'],
    image: '/Products/CRUSEHRS/RG-ROTOR_ASSEMBLY.png',
    partNumber: 'SP-RGA-001'
  },

  // COMPRESSION SPRINGS
  // {
  //   id: 'cr-014',
  //   title: 'Compression Springs',
  //   model: 'CS-001',
  //   sku: 'SP-CS-001',
  //   category: [  'Crusher Spares'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'High grade spring steel',
  //     'Precision wound coils',
  //     'High load capacity',
  //     'Corrosion resistant coating',
  //     'Long service life'
  //   ],
  //   applications: [
  //     'Crusher safety systems',
  //     'Cone crusher adjustment',
  //     'Impact crusher protection',
  //     'Mechanical tension applications'
  //   ],
  //   compatibleEquipment: ['Cone crushers', 'Impact crushers', 'Jaw crushers'],
  //   tags: ['compression springs', 'safety systems', 'crusher protection', 'spring steel'],
  //   image: '/Products/CRUSEHRS/COMPRESION_SPRINGS.png',
  //   partNumber: 'SP-CS-001'
  // },

  // HAMMER MILL ROTOR ASSEMBLY
  {
    id: 'cr-015',
    title: 'Hammer Mill Rotor Assembly',
    model: 'HMRA-001',
    sku: 'SP-HMRA-001',
    category: [  'Crusher Spares'],
    subcategory: 'Machine Types',
    specifications: {},
    features: [
      'Heavy duty steel construction',
      'Precision balanced rotor',
      'Replaceable hammer system',
      'High speed operation capability',
      'Easy maintenance design'
    ],
    applications: [
      'Hammer mills',
      'Fine crushing operations',
      'Material size reduction',
      'Industrial grinding'
    ],
    compatibleEquipment: ['Hammer mills', 'Size reduction equipment'],
    tags: ['hammer mill', 'rotor assembly', 'fine crushing', 'size reduction'],
    image: '/Products/CRUSEHRS/HAMMER_MILL.jpeg',
    partNumber: 'SP-HMRA-001'
  },

  // TOOTHED PROFILE ROLL ROTOR ASSEMBLY
  {
    id: 'cr-016',
    title: 'Toothed Profile Roll Rotor Assembly',
    model: 'TPRRA-001',
    sku: 'SP-TPRRA-001',
    category: [  'Crusher Spares'],
    subcategory: 'Machine Types',
    specifications: {},
    features: [
      'Hardened steel teeth',
      'Precision machined profile',
      'Replaceable tooth system',
      'High crushing efficiency',
      'Durable construction'
    ],
    applications: [
      'Roll crushers',
      'Size reduction applications',
      'Coal crushing',
      'Material processing'
    ],
    compatibleEquipment: ['Roll crushers', 'Toothed roll crushers'],
    tags: ['toothed profile', 'roll crusher', 'hardened teeth', 'size reduction'],
    image: '/Products/CRUSEHRS/TOOTHED_PROFILE_ROLL_ROTOR_ASSEMBLY.jpeg',
    partNumber: 'SP-TPRRA-001'
  }
]

export const crushersData: BrandData = {
  brand: 'Spareng',
  description: 'Premium MHE crusher spare parts and components for all types of crushing equipment including impact crushers, jaw crushers, cone crushers, and hammer mills.',
  website: 'https://spareng.com',
  products: crushersProducts
}