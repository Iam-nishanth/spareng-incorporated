import { BrandData, Product } from './product-types'

export const flipFlowScreenProducts: Product[] = [
  {
    id: 'ffs-001',
    title: 'Polyurethane Mats (PU)',
    model: 'PUM-001',
    sku: 'SP-PUM-001',
    category: ['Screening Spares'],
    subcategory: 'Screen Media',
    specifications: {},
    features: [
      'High grade polyurethane construction',
      'Excellent wear resistance',
      'Flexible design for flip flow action',
      'Self-cleaning properties'
    ],
    applications: [
      'Flip flow screen systems',
      'Sticky material screening',
      'Wet screening applications',
      'Fine material separation'
    ],
    compatibleEquipment: ['Flip flow screens', 'Screening Spares',],
    tags: ['PU mats', 'polyurethane', 'flip flow', 'screening'],
    image: '/Products/FLIP_FLOW_SCREEN/POLYURITHIN_MATS_PU.jpeg',
    partNumber: 'SP-PUM-001'
  },
  {
    id: 'ffs-002',
    title: 'Inner Basket Plate',
    model: 'IBP-001',
    sku: 'SP-IBP-001',
    category: ['Screening Spares'],
    subcategory: 'Screen Components',
    specifications: {},
    features: [
      'Robust steel construction',
      'Precision manufactured',
      'Easy installation',
      'Long service life'
    ],
    applications: [
      'Flip flow screen systems',
      'Material containment',
      'Screen support structure',
      'Industrial screening'
    ],
    compatibleEquipment: ['Flip flow screens'],
    tags: ['inner basket', 'steel construction', 'screen support', 'flip flow'],
    image: '/Products/FLIP_FLOW_SCREEN/INNER_BASKET_PLATE.png',
    partNumber: 'SP-IBP-001'
  },
  {
    id: 'ffs-003',
    title: 'Outer Basket Plate',
    model: 'OBP-001',
    sku: 'SP-OBP-001',
    category: ['Screening Spares'],
    subcategory: 'Screen Components',
    specifications: {},
    features: [
      'Heavy duty steel construction',
      'Precision manufactured',
      'Corrosion resistant coating',
      'Easy maintenance access'
    ],
    applications: [
      'Flip flow screen systems',
      'Structural support',
      'Material handling',
      'Industrial screening'
    ],
    compatibleEquipment: ['Flip flow screens'],
    tags: ['outer basket', 'heavy duty', 'structural support', 'flip flow'],
    image: '/Products/FLIP_FLOW_SCREEN/OUTER_BASKET_PLATE.png',
    partNumber: 'SP-OBP-001'
  },
  {
    id: 'ffs-004',
    title: 'Bearing Housing',
    model: 'BH-FFS-001',
    sku: 'SP-BH-FFS-001',
    category: ['Screening Spares'],
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
      'Rotating equipment',
      'Heavy duty applications'
    ],
    compatibleEquipment: ['Flip flow screens', 'Drive systems'],
    tags: ['bearing housing', 'cast iron', 'drive system', 'support'],
    image: '/Products/FLIP_FLOW_SCREEN/BEARING_HOUSING.png',
    partNumber: 'SP-BH-FFS-001'
  },
  {
    id: 'ffs-005',
    title: 'Compression Springs',
    model: 'CS-FFS-001',
    sku: 'SP-CS-FFS-001',
    category: ['Screening Spares'],
    subcategory: 'Support Components',
    specifications: {},
    features: [
      'High grade spring steel',
      'Precision wound coils',
      'High load capacity',
      'Corrosion resistant coating'
    ],
    applications: [
      'Screen suspension systems',
      'Vibration isolation',
      'Shock absorption',
      'Support systems'
    ],
    compatibleEquipment: ['Flip flow screens', 'Screening Spares',],
    tags: ['compression springs', 'suspension', 'vibration isolation', 'support'],
    image: '/Products/FLIP_FLOW_SCREEN/COMPRESSION_SPRINGS.jpeg',
    partNumber: 'SP-CS-FFS-001'
  },
  // {
  //   id: 'ffs-006',
  //   title: 'V-Pulley',
  //   model: 'VP-FFS-001',
  //   sku: 'SP-VP-FFS-001',
  //   category: ['Screening Spares', 'Flip Flow Screen'],
  //   subcategory: 'Drive Components',
  //   specifications: {},
  //   features: [
  //     'Cast iron construction',
  //     'V-groove design for belt grip',
  //     'Precision balanced',
  //     'High power transmission efficiency'
  //   ],
  //   applications: [
  //     'Belt drive systems',
  //     'Power transmission',
  //     'Screen drive applications',
  //     'Industrial machinery'
  //   ],
  //   compatibleEquipment: ['Flip flow screens', 'Belt drive systems'],
  //   tags: ['v-pulley', 'belt drive', 'power transmission', 'cast iron'],
  //   image: '/Products/FLIP_FLOW_SCREEN/V-PULLEY.jpeg',
  //   partNumber: 'SP-VP-FFS-001'
  // },
  // {
  //   id: 'ffs-007',
  //   title: 'V-Belts',
  //   model: 'VB-FFS-001',
  //   sku: 'SP-VB-FFS-001',
  //   category: ['Screening Spares', 'Flip Flow Screen'],
  //   subcategory: 'Drive Components',
  //   specifications: {},
  //   features: [
  //     'High quality rubber construction',
  //     'Excellent power transmission',
  //     'Oil and heat resistant',
  //     'Long service life'
  //   ],
  //   applications: [
  //     'Screen drive systems',
  //     'Power transmission',
  //     'Belt drive applications',
  //     'Industrial machinery'
  //   ],
  //   compatibleEquipment: ['Flip flow screens', 'Belt drive systems'],
  //   tags: ['v-belts', 'rubber', 'power transmission', 'drive system'],
  //   image: '/Products/FLIP_FLOW_SCREEN/V-BELTS.jpeg',
  //   partNumber: 'SP-VB-FFS-001'
  // },
  {
    id: 'ffs-008',
    title: 'Cardan Propeller Shaft',
    model: 'CPS-FFS-001',
    sku: 'SP-CPS-FFS-001',
    category: ['Screening Spares'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'High strength steel construction',
      'Precision balanced',
      'Universal joint design',
      'Smooth power transmission'
    ],
    applications: [
      'Screen drive transmission',
      'Power transfer systems',
      'Flip flow screen drives',
      'Industrial machinery'
    ],
    compatibleEquipment: ['Flip flow screens', 'Drive systems'],
    tags: ['cardan shaft', 'propeller shaft', 'drive transmission', 'universal joint'],
    image: '/Products/FLIP_FLOW_SCREEN/CARDAN_PROPERLER_SHAFT.jpeg',
    partNumber: 'SP-CPS-FFS-001'
  },
  // {
  //   id: 'ffs-009',
  //   title: 'Shaft',
  //   model: 'SH-FFS-001',
  //   sku: 'SP-SH-FFS-001',
  //   category: ['Screening Spares', 'Flip Flow Screen'],
  //   subcategory: 'Drive Components',
  //   specifications: {},
  //   features: [
  //     'High strength steel construction',
  //     'Precision machined surfaces',
  //     'Heat treated for durability',
  //     'Balanced for smooth operation'
  //   ],
  //   applications: [
  //     'Screen drive systems',
  //     'Rotating equipment',
  //     'Power transmission',
  //     'Industrial machinery'
  //   ],
  //   compatibleEquipment: ['Flip flow screens', 'Drive systems'],
  //   tags: ['shaft', 'steel construction', 'precision machined', 'drive system'],
  //   image: '/Products/FLIP_FLOW_SCREEN/SHAFT.png',
  //   partNumber: 'SP-SH-FFS-001'
  // },
  // {
  //   id: 'ffs-010',
  //   title: 'C-Bend Plate',
  //   model: 'CBP-FFS-001',
  //   sku: 'SP-CBP-FFS-001',
  //   category: ['Screening Spares', 'Flip Flow Screen'],
  //   subcategory: 'Structural Components',
  //   specifications: {},
  //   features: [
  //     'Heavy duty steel construction',
  //     'C-shaped bend design',
  //     'Structural reinforcement',
  //     'Corrosion resistant coating'
  //   ],
  //   applications: [
  //     'Screen structural support',
  //     'Frame reinforcement',
  //     'Industrial screening equipment',
  //     'Structural applications'
  //   ],
  //   compatibleEquipment: ['Flip flow screens', 'Structural systems'],
  //   tags: ['c-bend plate', 'structural support', 'reinforcement', 'steel construction'],
  //   image: '/Products/FLIP_FLOW_SCREEN/C-BEND_PLATE.png',
  //   partNumber: 'SP-CBP-FFS-001'
  // }
]

export const flipFlowScreenData: BrandData = {
  brand: 'Spareng Flip Flow Screen',
  description: 'Comprehensive range of flip flow screen components and spare parts',
  website: 'https://spareng.com',
  products: flipFlowScreenProducts
}