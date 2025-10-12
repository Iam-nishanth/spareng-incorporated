import { BrandData, Product } from './product-types'

export const bulkReceptionUnitProducts: Product[] = [
  {
    id: 'bru-001',
    title: 'Chain',
    model: 'CH-BRU-001',
    sku: 'SP-CH-BRU-001',
    category: ['Material Handling', 'Bulk Reception Unit'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'Heavy duty steel construction',
      'High tensile strength',
      'Corrosion resistant coating',
      'Precision manufactured links'
    ],
    applications: [
      'Bulk reception systems',
      'Material handling conveyors',
      'Heavy duty transport',
      'Industrial applications'
    ],
    compatibleEquipment: ['Bulk reception units', 'Chain conveyors'],
    tags: ['chain', 'drive system', 'bulk reception', 'heavy duty'],
    image: '/Products/BULK_RECEPTION_UNIT/CHAIN.jpeg',
    partNumber: 'SP-CH-BRU-001'
  },
  {
    id: 'bru-002',
    title: 'Drive Shaft',
    model: 'DS-BRU-001',
    sku: 'SP-DS-BRU-001',
    category: ['Material Handling', 'Bulk Reception Unit'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'High strength steel construction',
      'Precision machined surfaces',
      'Heat treated for durability',
      'Balanced for smooth operation'
    ],
    applications: [
      'Bulk reception drive systems',
      'Power transmission',
      'Heavy duty rotating applications',
      'Industrial machinery'
    ],
    compatibleEquipment: ['Bulk reception units', 'Drive systems'],
    tags: ['drive shaft', 'power transmission', 'bulk reception', 'rotating equipment'],
    image: '/Products/BULK_RECEPTION_UNIT/DRIVE_SHAFT.jpeg',
    partNumber: 'SP-DS-BRU-001'
  },
  {
    id: 'bru-003',
    title: 'Non-Drive Shaft',
    model: 'NDS-BRU-001',
    sku: 'SP-NDS-BRU-001',
    category: ['Material Handling', 'Bulk Reception Unit'],
    subcategory: 'Support Components',
    specifications: {},
    features: [
      'High strength steel construction',
      'Precision machined surfaces',
      'Corrosion resistant coating',
      'Heavy duty design'
    ],
    applications: [
      'Bulk reception support systems',
      'Idler shaft applications',
      'Heavy duty support',
      'Industrial machinery'
    ],
    compatibleEquipment: ['Bulk reception units', 'Support systems'],
    tags: ['non-drive shaft', 'support', 'bulk reception', 'idler shaft'],
    image: '/Products/BULK_RECEPTION_UNIT/NON-DRIVE_SHAFT.jpeg',
    partNumber: 'SP-NDS-BRU-001'
  },
  {
    id: 'bru-004',
    title: 'Head Tail Sprocket',
    model: 'HTS-BRU-001',
    sku: 'SP-HTS-BRU-001',
    category: ['Material Handling', 'Bulk Reception Unit'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'Precision machined teeth',
      'High grade steel construction',
      'Heat treated for wear resistance',
      'Optimized tooth profile'
    ],
    applications: [
      'Chain drive systems',
      'Bulk reception equipment',
      'Material handling systems',
      'Industrial conveyors'
    ],
    compatibleEquipment: ['Bulk reception units', 'Chain drive systems'],
    tags: ['sprocket', 'head tail', 'chain drive', 'bulk reception'],
    image: '/Products/BULK_RECEPTION_UNIT/HEAD_TAIL_SPROCKET.jpeg',
    partNumber: 'SP-HTS-BRU-001'
  },
  {
    id: 'bru-005',
    title: 'Pan',
    model: 'PAN-BRU-001',
    sku: 'SP-PAN-BRU-001',
    category: ['Material Handling', 'Bulk Reception Unit'],
    subcategory: 'Structural Components',
    specifications: {},
    features: [
      'Heavy duty steel construction',
      'Reinforced design',
      'Corrosion resistant coating',
      'Easy maintenance access'
    ],
    applications: [
      'Material collection',
      'Bulk reception systems',
      'Material handling',
      'Industrial applications'
    ],
    compatibleEquipment: ['Bulk reception units', 'Material handling systems'],
    tags: ['pan', 'collection', 'bulk reception', 'structural'],
    image: '/Products/BULK_RECEPTION_UNIT/PAN.jpeg',
    partNumber: 'SP-PAN-BRU-001'
  },
  {
    id: 'bru-006',
    title: 'Skirt Rubber Sealing',
    model: 'SRS-BRU-001',
    sku: 'SP-SRS-BRU-001',
    category: ['Material Handling', 'Bulk Reception Unit'],
    subcategory: 'Sealing Components',
    specifications: {},
    features: [
      'High quality rubber construction',
      'Flexible sealing design',
      'Dust containment',
      'Chemical resistant'
    ],
    applications: [
      'Dust sealing',
      'Material containment',
      'Bulk reception systems',
      'Industrial sealing'
    ],
    compatibleEquipment: ['Bulk reception units', 'Sealing systems'],
    tags: ['skirt rubber', 'sealing', 'dust containment', 'bulk reception'],
    image: '/Products/BULK_RECEPTION_UNIT/SKIRT_RUBBER_SEALING.jpeg',
    partNumber: 'SP-SRS-BRU-001'
  }
]

export const bulkReceptionUnitData: BrandData = {
  brand: 'Spareng Bulk Reception Unit',
  description: 'Comprehensive range of bulk reception unit components and spare parts',
  website: 'https://spareng.com',
  products: bulkReceptionUnitProducts
}
