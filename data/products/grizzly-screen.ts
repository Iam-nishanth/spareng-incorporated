import { BrandData, Product } from './product-types'

export const grizzlyScreenProducts: Product[] = [
  {
    id: 'gs-001',
    title: 'Grizzly Bars',
    model: 'GB-001',
    sku: 'SP-GB-001',
    category: ['Screening Equipment', 'Grizzly Screen'],
    subcategory: 'Screen Media',
    specifications: {},
    features: [
      'High strength steel construction',
      'Wear resistant design',
      'Easy replacement system',
      'Custom spacing available'
    ],
    applications: [
      'Primary screening',
      'Large material separation',
      'Mining operations',
      'Quarry applications'
    ],
    compatibleEquipment: ['Grizzly screens', 'Primary screening equipment'],
    tags: ['grizzly bars', 'steel construction', 'primary screening', 'wear resistant'],
    image: '/Products/GRIZZLY_SCREEN/GRIZZLY_BARS.jpeg',
    partNumber: 'SP-GB-001'
  },
  {
    id: 'gs-002',
    title: 'Screen Cloth',
    model: 'SC-GS-001',
    sku: 'SP-SC-GS-001',
    category: ['Screening Equipment', 'Grizzly Screen'],
    subcategory: 'Screen Media',
    specifications: {},
    features: [
      'Heavy duty wire mesh',
      'High tensile strength',
      'Corrosion resistant',
      'Long service life'
    ],
    applications: [
      'Secondary screening',
      'Fine material separation',
      'Industrial screening',
      'Material classification'
    ],
    compatibleEquipment: ['Grizzly screens', 'Screening equipment'],
    tags: ['screen cloth', 'wire mesh', 'grizzly screen', 'screening'],
    image: '/Products/GRIZZLY_SCREEN/SCREEN_CLOTH.png',
    partNumber: 'SP-SC-GS-001'
  },
  {
    id: 'gs-003',
    title: 'Compression Springs',
    model: 'CS-GS-001',
    sku: 'SP-CS-GS-001',
    category: ['Screening Equipment', 'Grizzly Screen'],
    subcategory: 'Support Components',
    specifications: {},
    features: [
      'High grade spring steel',
      'Heavy duty design',
      'Corrosion resistant coating',
      'High load capacity'
    ],
    applications: [
      'Screen suspension systems',
      'Vibration isolation',
      'Heavy duty support',
      'Shock absorption'
    ],
    compatibleEquipment: ['Grizzly screens', 'Heavy duty equipment'],
    tags: ['compression springs', 'heavy duty', 'suspension', 'grizzly screen'],
    image: '/Products/GRIZZLY_SCREEN/COMPRESSION_SPRINGS.jpeg',
    partNumber: 'SP-CS-GS-001'
  },
  {
    id: 'gs-004',
    title: 'Cardan Propeller Shaft',
    model: 'CPS-GS-001',
    sku: 'SP-CPS-GS-001',
    category: ['Screening Equipment', 'Grizzly Screen'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'High strength steel construction',
      'Precision balanced',
      'Universal joint design',
      'Heavy duty application'
    ],
    applications: [
      'Screen drive transmission',
      'Power transfer systems',
      'Heavy duty drives',
      'Industrial machinery'
    ],
    compatibleEquipment: ['Grizzly screens', 'Drive systems'],
    tags: ['cardan shaft', 'propeller shaft', 'drive transmission', 'heavy duty'],
    image: '/Products/GRIZZLY_SCREEN/CARDANPROPERLER_SHAFT.jpeg',
    partNumber: 'SP-CPS-GS-001'
  },
  {
    id: 'gs-005',
    title: 'Bearing Housing',
    model: 'BH-GS-001',
    sku: 'SP-BH-GS-001',
    category: ['Screening Equipment', 'Grizzly Screen'],
    subcategory: 'Support Components',
    specifications: {},
    features: [
      'Cast iron construction',
      'Precision machined bearing seats',
      'Heavy duty design',
      'Sealed bearing protection'
    ],
    applications: [
      'Screen drive systems',
      'Bearing support',
      'Heavy duty applications',
      'Rotating equipment'
    ],
    compatibleEquipment: ['Grizzly screens', 'Drive systems'],
    tags: ['bearing housing', 'cast iron', 'heavy duty', 'drive system'],
    image: '/Products/GRIZZLY_SCREEN/BEARING_HOUS.jpeg',
    partNumber: 'SP-BH-GS-001'
  },
  {
    id: 'gs-006',
    title: 'Unbalanced Motor',
    model: 'UM-GS-001',
    sku: 'SP-UM-GS-001',
    category: ['Screening Equipment', 'Grizzly Screen'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'High efficiency vibrating motor',
      'Adjustable eccentric weights',
      'Heavy duty construction',
      'Low maintenance design'
    ],
    applications: [
      'Grizzly screen drives',
      'Heavy duty vibrating equipment',
      'Material handling systems',
      'Industrial screening'
    ],
    compatibleEquipment: ['Grizzly screens', 'Vibrating equipment'],
    tags: ['unbalanced motor', 'vibrating motor', 'heavy duty', 'grizzly screen'],
    image: '/Products/GRIZZLY_SCREEN/UN_BALANCED_MOTOR.jpeg',
    partNumber: 'SP-UM-GS-001'
  }
]

export const grizzlyScreenData: BrandData = {
  brand: 'Spareng Grizzly Screen',
  description: 'Comprehensive range of grizzly screen components and spare parts',
  website: 'https://spareng.com',
  products: grizzlyScreenProducts
}