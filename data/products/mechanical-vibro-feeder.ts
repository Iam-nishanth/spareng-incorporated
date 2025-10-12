import { BrandData, Product } from './product-types'

export const mechanicalVibroFeederProducts: Product[] = [
  {
    id: 'mvf-001',
    title: 'UHMW Liners',
    model: 'UL-001',
    sku: 'SP-UL-001',
    category: ['Material Handling', 'Mechanical Vibro Feeder'],
    subcategory: 'Wear Parts',
    specifications: {},
    features: [
      'Ultra High Molecular Weight polyethylene',
      'Excellent wear resistance',
      'Low friction coefficient',
      'Chemical resistant'
    ],
    applications: [
      'Feeder trough lining',
      'Wear protection',
      'Material handling',
      'Industrial feeders'
    ],
    compatibleEquipment: ['Vibro feeders', 'Material handling equipment'],
    tags: ['UHMW liners', 'wear protection', 'polyethylene', 'vibro feeder'],
    image: '/Products/MECHANICAL_VIBRO_FEEDER/UHME_LINERS.jpeg',
    partNumber: 'SP-UL-001'
  },
  {
    id: 'mvf-002',
    title: 'Unbalanced Motors',
    model: 'UM-MVF-001',
    sku: 'SP-UM-MVF-001',
    category: ['Material Handling', 'Mechanical Vibro Feeder'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'High efficiency vibrating motor',
      'Adjustable eccentric weights',
      'Robust construction',
      'Variable amplitude control'
    ],
    applications: [
      'Vibro feeder drives',
      'Material feeding systems',
      'Vibrating equipment',
      'Industrial feeders'
    ],
    compatibleEquipment: ['Vibro feeders', 'Feeding systems'],
    tags: ['unbalanced motors', 'vibrating motor', 'feeder drive', 'amplitude control'],
    image: '/Products/MECHANICAL_VIBRO_FEEDER/UN-BALANCED_MOTORS.jpeg',
    partNumber: 'SP-UM-MVF-001'
  },
  {
    id: 'mvf-003',
    title: 'D-Shackles',
    model: 'DS-001',
    sku: 'SP-DS-001',
    category: ['Material Handling', 'Mechanical Vibro Feeder'],
    subcategory: 'Hardware Components',
    specifications: {},
    features: [
      'High strength steel construction',
      'Galvanized finish',
      'Standard lifting hardware',
      'Reliable connection'
    ],
    applications: [
      'Feeder suspension systems',
      'Lifting applications',
      'Rigging hardware',
      'Support connections'
    ],
    compatibleEquipment: ['Vibro feeders', 'Suspension systems'],
    tags: ['d-shackles', 'lifting hardware', 'galvanized', 'suspension'],
    image: '/Products/MECHANICAL_VIBRO_FEEDER/D-SHACKLES.jpeg',
    partNumber: 'SP-DS-001'
  },
  {
    id: 'mvf-004',
    title: 'Turn Buckles',
    model: 'TB-001',
    sku: 'SP-TB-001',
    category: ['Material Handling', 'Mechanical Vibro Feeder'],
    subcategory: 'Hardware Components',
    specifications: {},
    features: [
      'Adjustable length design',
      'High strength steel',
      'Galvanized coating',
      'Easy adjustment mechanism'
    ],
    applications: [
      'Feeder suspension adjustment',
      'Tension adjustment',
      'Rigging applications',
      'Support systems'
    ],
    compatibleEquipment: ['Vibro feeders', 'Suspension systems'],
    tags: ['turn buckles', 'adjustable', 'tension adjustment', 'rigging'],
    image: '/Products/MECHANICAL_VIBRO_FEEDER/TURN_BUCKLES.jpeg',
    partNumber: 'SP-TB-001'
  },
  {
    id: 'mvf-005',
    title: 'Thimbles',
    model: 'TH-001',
    sku: 'SP-TH-001',
    category: ['Material Handling', 'Mechanical Vibro Feeder'],
    subcategory: 'Hardware Components',
    specifications: {},
    features: [
      'Galvanized steel construction',
      'Wire rope protection',
      'Standard rigging hardware',
      'Corrosion resistant'
    ],
    applications: [
      'Wire rope protection',
      'Suspension systems',
      'Rigging applications',
      'Cable management'
    ],
    compatibleEquipment: ['Vibro feeders', 'Wire rope systems'],
    tags: ['thimbles', 'wire rope protection', 'galvanized', 'rigging'],
    image: '/Products/MECHANICAL_VIBRO_FEEDER/THIMBLE.jpeg',
    partNumber: 'SP-TH-001'
  },
  {
    id: 'mvf-006',
    title: 'Bull Dog Grips',
    model: 'BDG-001',
    sku: 'SP-BDG-001',
    category: ['Material Handling', 'Mechanical Vibro Feeder'],
    subcategory: 'Hardware Components',
    specifications: {},
    features: [
      'Drop forged steel construction',
      'Galvanized finish',
      'Secure wire rope clamping',
      'Easy installation'
    ],
    applications: [
      'Wire rope termination',
      'Cable clamping',
      'Suspension systems',
      'Rigging applications'
    ],
    compatibleEquipment: ['Vibro feeders', 'Wire rope systems'],
    tags: ['bull dog grips', 'wire rope clamps', 'galvanized', 'termination'],
    image: '/Products/MECHANICAL_VIBRO_FEEDER/BULL_DOG_GRIPS.jpeg',
    partNumber: 'SP-BDG-001'
  },
  {
    id: 'mvf-007',
    title: 'Compression Springs',
    model: 'CS-MVF-001',
    sku: 'SP-CS-MVF-001',
    category: ['Material Handling', 'Mechanical Vibro Feeder'],
    subcategory: 'Support Components',
    specifications: {},
    features: [
      'High grade spring steel',
      'Precision wound coils',
      'High load capacity',
      'Corrosion resistant coating'
    ],
    applications: [
      'Feeder suspension systems',
      'Vibration isolation',
      'Shock absorption',
      'Support systems'
    ],
    compatibleEquipment: ['Vibro feeders', 'Feeding systems'],
    tags: ['compression springs', 'suspension', 'vibration isolation', 'feeder'],
    image: '/Products/MECHANICAL_VIBRO_FEEDER/COMPRESSION_SPRINGS.jpeg',
    partNumber: 'SP-CS-MVF-001'
  }
]

export const mechanicalVibroFeederData: BrandData = {
  brand: 'Spareng Mechanical Vibro Feeder',
  description: 'Comprehensive range of mechanical vibro feeder components and spare parts',
  website: 'https://spareng.com',
  products: mechanicalVibroFeederProducts
}