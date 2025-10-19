import { BrandData, Product } from './product-types'

export const reclaimFeederProducts: Product[] = [
  {
    id: 'rf-001',
    title: 'Chain',
    model: 'CH-RF-001',
    sku: 'SP-CH-RF-001',
    category: ['Material Handling', 'Reclaim Feeder'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'Heavy duty steel construction',
      'High tensile strength',
      'Corrosion resistant coating',
      'Precision manufactured links'
    ],
    applications: [
      'Reclaim feeder drive systems',
      'Material handling conveyors',
      'Heavy duty transport',
      'Industrial applications'
    ],
    compatibleEquipment: ['Reclaim feeders', 'Chain conveyors'],
    tags: ['chain', 'drive system', 'reclaim feeder', 'heavy duty'],
    image: '/Products/RECLAIM_FEEDER/CHAIN.jpeg',
    partNumber: 'SP-CH-RF-001'
  },
  {
    id: 'rf-002',
    title: 'Sprockets',
    model: 'SPR-RF-001',
    sku: 'SP-SPR-RF-001',
    category: ['Material Handling', 'Reclaim Feeder'],
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
      'Reclaim feeder equipment',
      'Material handling systems',
      'Industrial conveyors'
    ],
    compatibleEquipment: ['Reclaim feeders', 'Chain drive systems'],
    tags: ['sprockets', 'chain drive', 'reclaim feeder', 'drive system'],
    image: '/Products/RECLAIM_FEEDER/SPROCKETS.jpeg',
    partNumber: 'SP-SPR-RF-001'
  },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'rf-003',
  //   title: 'Drive Shaft',
  //   model: 'DS-RF-001',
  //   sku: 'SP-DS-RF-001',
  //   category: ['Material Handling', 'Reclaim Feeder'],
  //   subcategory: 'Drive Components',
  //   specifications: {},
  //   features: [
  //     'High strength steel construction',
  //     'Precision machined surfaces',
  //     'Heat treated for durability',
  //     'Balanced for smooth operation'
  //   ],
  //   applications: [
  //     'Reclaim feeder drive systems',
  //     'Power transmission',
  //     'Heavy duty rotating applications',
  //     'Industrial machinery'
  //   ],
  //   compatibleEquipment: ['Reclaim feeders', 'Drive systems'],
  //   tags: ['drive shaft', 'power transmission', 'reclaim feeder', 'rotating equipment'],
  //   image: '/Products/RECLAIM_FEEDER/DRIVE_SHAFT.jpeg',
  //   partNumber: 'SP-DS-RF-001'
  // },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'rf-004',
  //   title: 'Non-Drive Shaft',
  //   model: 'NDS-RF-001',
  //   sku: 'SP-NDS-RF-001',
  //   category: ['Material Handling', 'Reclaim Feeder'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'High strength steel construction',
  //     'Precision machined surfaces',
  //     'Corrosion resistant coating',
  //     'Heavy duty design'
  //   ],
  //   applications: [
  //     'Reclaim feeder support systems',
  //     'Idler shaft applications',
  //     'Heavy duty support',
  //     'Industrial machinery'
  //   ],
  //   compatibleEquipment: ['Reclaim feeders', 'Support systems'],
  //   tags: ['non-drive shaft', 'support', 'reclaim feeder', 'idler shaft'],
  //   image: '/Products/RECLAIM_FEEDER/NON-DRIVE_SHAFT.jpeg',
  //   partNumber: 'SP-NDS-RF-001'
  // },
  // {
  //   id: 'rf-005',
  //   title: 'Flight Bars',
  //   model: 'FB-RF-001',
  //   sku: 'SP-FB-RF-001',
  //   category: ['Material Handling', 'Reclaim Feeder'],
  //   subcategory: 'Conveying Components',
  //   specifications: {},
  //   features: [
  //     'Wear-resistant steel construction',
  //     'Optimized profile for material flow',
  //     'Replaceable design',
  //     'Heavy duty construction'
  //   ],
  //   applications: [
  //     'Material conveying in reclaim feeders',
  //     'Bulk material handling',
  //     'Industrial applications',
  //     'Material transport'
  //   ],
  //   compatibleEquipment: ['Reclaim feeders', 'Material handling systems'],
  //   tags: ['flight bars', 'material conveying', 'reclaim feeder', 'bulk handling'],
  //   image: '/Products/RECLAIM_FEEDER/FLIGHT_BARS.png',
  //   partNumber: 'SP-FB-RF-001'
  // },
  {
    id: 'rf-006',
    title: 'Liners',
    model: 'LIN-RF-001',
    sku: 'SP-LIN-RF-001',
    category: ['Material Handling', 'Reclaim Feeder'],
    subcategory: 'Wear Parts',
    specifications: {},
    features: [
      'High wear-resistant material',
      'Easy replacement design',
      'Abrasion protection',
      'Long service life'
    ],
    applications: [
      'Reclaim feeder wear protection',
      'Abrasive material handling',
      'Industrial wear protection',
      'Material handling systems'
    ],
    compatibleEquipment: ['Reclaim feeders', 'Wear protection systems'],
    tags: ['liners', 'wear protection', 'reclaim feeder', 'abrasion resistant'],
    image: '/Products/RECLAIM_FEEDER/LINERS.jpeg',
    partNumber: 'SP-LIN-RF-001'
  },
  {
    id: 'rf-007',
    title: 'Hydraulic Take-Up',
    model: 'HTU-RF-001',
    sku: 'SP-HTU-RF-001',
    category: ['Material Handling', 'Reclaim Feeder'],
    subcategory: 'Tensioning Systems',
    specifications: {},
    features: [
      'Hydraulic tensioning mechanism',
      'Automatic tension adjustment',
      'Heavy duty construction',
      'Precise control'
    ],
    applications: [
      'Chain tensioning in reclaim feeders',
      'Automatic tension control',
      'Industrial tensioning',
      'Material handling systems'
    ],
    compatibleEquipment: ['Reclaim feeders', 'Tensioning systems'],
    tags: ['hydraulic take-up', 'tensioning', 'reclaim feeder', 'automatic control'],
    image: '/Products/RECLAIM_FEEDER/HYDRAULIC_TAKE_UP.jpeg',
    partNumber: 'SP-HTU-RF-001'
  },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'rf-008',
  //   title: 'Hose Pipes',
  //   model: 'HP-RF-001',
  //   sku: 'SP-HP-RF-001',
  //   category: ['Material Handling', 'Reclaim Feeder'],
  //   subcategory: 'Hydraulic Systems',
  //   specifications: {},
  //   features: [
  //     'High pressure rated',
  //     'Flexible construction',
  //     'Chemical resistant',
  //     'Long service life'
  //   ],
  //   applications: [
  //     'Hydraulic system connections',
  //     'Fluid transfer',
  //     'Reclaim feeder hydraulics',
  //     'Industrial applications'
  //   ],
  //   compatibleEquipment: ['Reclaim feeders', 'Hydraulic systems'],
  //   tags: ['hose pipes', 'hydraulic', 'reclaim feeder', 'fluid transfer'],
  //   image: '/Products/RECLAIM_FEEDER/HOSE_PIPES.jpeg',
  //   partNumber: 'SP-HP-RF-001'
  // },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'rf-009',
  //   title: 'Bearings',
  //   model: 'BRG-RF-001',
  //   sku: 'SP-BRG-RF-001',
  //   category: ['Material Handling', 'Reclaim Feeder'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'High quality steel construction',
  //     'Sealed design',
  //     'Long service life',
  //     'Low maintenance'
  //   ],
  //   applications: [
  //     'Reclaim feeder rotating equipment',
  //     'Shaft support systems',
  //     'Industrial machinery',
  //     'Material handling equipment'
  //   ],
  //   compatibleEquipment: ['Reclaim feeders', 'Rotating equipment'],
  //   tags: ['bearings', 'sealed', 'reclaim feeder', 'rotating equipment'],
  //   image: '/Products/RECLAIM_FEEDER/BEARINGS.png',
  //   partNumber: 'SP-BRG-RF-001'
  // },
  {
    id: 'rf-010',
    title: 'Bearing Housing',
    model: 'BH-RF-001',
    sku: 'SP-BH-RF-001',
    category: ['Material Handling', 'Reclaim Feeder'],
    subcategory: 'Support Components',
    specifications: {},
    features: [
      'Cast iron construction',
      'Precision machined bearing seats',
      'Robust design for heavy loads',
      'Corrosion resistant coating'
    ],
    applications: [
      'Reclaim feeder shaft support',
      'Bearing housing systems',
      'Industrial machinery',
      'Heavy duty applications'
    ],
    compatibleEquipment: ['Reclaim feeders', 'Bearing systems'],
    tags: ['bearing housing', 'cast iron', 'reclaim feeder', 'shaft support'],
    image: '/Products/RECLAIM_FEEDER/BEARING_HOUSING.jpeg',
    partNumber: 'SP-BH-RF-001'
  },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'rf-011',
  //   title: 'Geared Motor',
  //   model: 'GM-RF-001',
  //   sku: 'SP-GM-RF-001',
  //   category: ['Material Handling', 'Reclaim Feeder'],
  //   subcategory: 'Drive Systems',
  //   specifications: {},
  //   features: [
  //     'Integrated motor and gearbox',
  //     'High torque output',
  //     'Compact design',
  //     'Efficient power transmission'
  //   ],
  //   applications: [
  //     'Reclaim feeder drive systems',
  //     'Material handling equipment',
  //     'Industrial machinery',
  //     'Process automation'
  //   ],
  //   compatibleEquipment: ['Reclaim feeders', 'Drive systems'],
  //   tags: ['geared motor', 'drive system', 'reclaim feeder', 'high torque'],
  //   image: '/Products/RECLAIM_FEEDER/GEARED_MOTOR.jpeg',
  //   partNumber: 'SP-GM-RF-001'
  // },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'rf-012',
  //   title: 'Chute Jamming Switch',
  //   model: 'CJS-RF-001',
  //   sku: 'SP-CJS-RF-001',
  //   category: ['Material Handling', 'Reclaim Feeder'],
  //   subcategory: 'Safety & Control',
  //   specifications: {},
  //   features: [
  //     'Jam detection capability',
  //     'Emergency stop function',
  //     'Adjustable sensitivity',
  //     'Weather resistant housing'
  //   ],
  //   applications: [
  //     'Chute blockage detection',
  //     'Safety systems',
  //     'Reclaim feeder protection',
  //     'Industrial safety'
  //   ],
  //   compatibleEquipment: ['Reclaim feeders', 'Safety systems'],
  //   tags: ['chute jamming switch', 'jam detection', 'reclaim feeder', 'safety'],
  //   image: '/Products/RECLAIM_FEEDER/CHUTE_JAMING_SWITCH.jpeg',
  //   partNumber: 'SP-CJS-RF-001'
  // },
  {
    id: 'rf-013',
    title: 'Zero Speed Switch',
    model: 'ZSS-RF-001',
    sku: 'SP-ZSS-RF-001',
    category: ['Material Handling', 'Reclaim Feeder'],
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
      'Reclaim feeder protection'
    ],
    compatibleEquipment: ['Reclaim feeders', 'Monitoring systems'],
    tags: ['zero speed switch', 'speed monitoring', 'reclaim feeder', 'safety'],
    image: '/Products/RECLAIM_FEEDER/ZERO_SPEED_SWITCH.jpeg',
    partNumber: 'SP-ZSS-RF-001'
  }
]

export const reclaimFeederData: BrandData = {
  brand: 'Spareng Reclaim Feeder',
  description: 'Comprehensive range of reclaim feeder components and spare parts for efficient bulk material reclaiming operations',
  website: 'https://spareng.com',
  products: reclaimFeederProducts
}
