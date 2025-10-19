import { BrandData, Product } from './product-types'

export const dustSuppressionSystemsProducts: Product[] = [
  {
    id: 'dss-001',
    title: 'Nozzles',
    model: 'NZ-DSS-001',
    sku: 'SP-NZ-DSS-001',
    category: ['Environmental Systems', 'Dust Suppression Systems'],
    subcategory: 'Spray Components',
    specifications: {},
    features: [
      'High pressure spray capability',
      'Adjustable spray pattern',
      'Corrosion resistant material',
      'Easy maintenance design'
    ],
    applications: [
      'Dust suppression systems',
      'Material handling points',
      'Industrial dust control',
      'Environmental protection'
    ],
    compatibleEquipment: ['Dust suppression systems', 'Spray systems'],
    tags: ['nozzles', 'dust suppression', 'spray', 'environmental control'],
    image: '/Products/DUST_SUPPRESSION_SYSTEMS_ITEMS/NOZZLES.jpeg',
    partNumber: 'SP-NZ-DSS-001'
  },
  // {
  //   id: 'dss-002',
  //   title: 'Compressor',
  //   model: 'COMP-DSS-001',
  //   sku: 'SP-COMP-DSS-001',
  //   category: ['Environmental Systems', 'Dust Suppression Systems'],
  //   subcategory: 'Power Systems',
  //   specifications: {},
  //   features: [
  //     'High pressure air generation',
  //     'Reliable operation',
  //     'Energy efficient design',
  //     'Low maintenance requirements'
  //   ],
  //   applications: [
  //     'Dust suppression systems',
  //     'Pneumatic systems',
  //     'Industrial air supply',
  //     'Environmental control'
  //   ],
  //   compatibleEquipment: ['Dust suppression systems', 'Pneumatic systems'],
  //   tags: ['compressor', 'high pressure', 'dust suppression', 'air supply'],
  //   image: '/Products/DUST_SUPPRESSION_SYSTEMS_ITEMS/COMPRESSOR.jpeg',
  //   partNumber: 'SP-COMP-DSS-001'
  // },
  // {
  //   id: 'dss-003',
  //   title: 'High Pressure Hose Pipes',
  //   model: 'HPHP-DSS-001',
  //   sku: 'SP-HPHP-DSS-001',
  //   category: ['Environmental Systems', 'Dust Suppression Systems'],
  //   subcategory: 'Distribution Systems',
  //   specifications: {},
  //   features: [
  //     'High pressure rated construction',
  //     'Flexible and durable',
  //     'Chemical resistant',
  //     'Long service life'
  //   ],
  //   applications: [
  //     'High pressure fluid transfer',
  //     'Dust suppression systems',
  //     'Industrial applications',
  //     'Environmental systems'
  //   ],
  //   compatibleEquipment: ['Dust suppression systems', 'High pressure systems'],
  //   tags: ['high pressure hose', 'fluid transfer', 'dust suppression', 'durable'],
  //   image: '/Products/DUST_SUPPRESSION_SYSTEMS_ITEMS/HIGH_PRESSURE_HOSE-PIPES.jpeg',
  //   partNumber: 'SP-HPHP-DSS-001'
  // }
]

export const dustSuppressionSystemsData: BrandData = {
  brand: 'Spareng Dust Suppression Systems',
  description: 'Comprehensive range of dust suppression system components for effective dust control and environmental protection',
  website: 'https://spareng.com',
  products: dustSuppressionSystemsProducts
}
