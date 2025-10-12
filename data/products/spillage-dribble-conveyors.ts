import { BrandData, Product } from './product-types'

export const spillageDribbleConveyorsProducts: Product[] = [
  {
    id: 'sdc-001',
    title: 'Conveyor Belts',
    model: 'CB-SDC-001',
    sku: 'SP-CB-SDC-001',
    category: ['Conveyor Components', 'Spillage Dribble Conveyors'],
    subcategory: 'Belts',
    specifications: {},
    features: [
      'Spillage collection design',
      'Heavy duty rubber construction',
      'Abrasion resistant',
      'Easy maintenance'
    ],
    applications: [
      'Spillage collection systems',
      'Dribble conveyors',
      'Material handling cleanup',
      'Industrial applications'
    ],
    compatibleEquipment: ['Spillage conveyors', 'Dribble collection systems'],
    tags: ['conveyor belts', 'spillage collection', 'dribble', 'cleanup'],
    image: '/Products/SPILLAGE_DRIBBLE_CONVEYORS-SPARE_PARTS/CONVEYOR_BELTS.jpeg',
    partNumber: 'SP-CB-SDC-001'
  },
  {
    id: 'sdc-002',
    title: 'Head Pulley',
    model: 'HP-SDC-001',
    sku: 'SP-HP-SDC-001',
    category: ['Conveyor Components', 'Spillage Dribble Conveyors'],
    subcategory: 'Pulleys',
    specifications: {},
    features: [
      'Heavy duty cast steel construction',
      'Rubber lagging for grip',
      'Precision machined surface',
      'Balanced for smooth operation'
    ],
    applications: [
      'Spillage conveyor drive',
      'Power transmission',
      'Material handling',
      'Industrial conveyors'
    ],
    compatibleEquipment: ['Spillage conveyors', 'Drive systems'],
    tags: ['head pulley', 'drive pulley', 'spillage conveyor', 'power transmission'],
    image: '/Products/SPILLAGE_DRIBBLE_CONVEYORS-SPARE_PARTS/HEAD_PULLEY.jpeg',
    partNumber: 'SP-HP-SDC-001'
  },
  {
    id: 'sdc-003',
    title: 'Tail Pulley',
    model: 'TP-SDC-001',
    sku: 'SP-TP-SDC-001',
    category: ['Conveyor Components', 'Spillage Dribble Conveyors'],
    subcategory: 'Pulleys',
    specifications: {},
    features: [
      'Smooth machined surface',
      'Self-cleaning design',
      'Heavy duty construction',
      'Corrosion resistant coating'
    ],
    applications: [
      'Belt return and tensioning',
      'Spillage conveyor systems',
      'Material handling',
      'Industrial conveyors'
    ],
    compatibleEquipment: ['Spillage conveyors', 'Tensioning systems'],
    tags: ['tail pulley', 'belt return', 'spillage conveyor', 'tensioning'],
    image: '/Products/SPILLAGE_DRIBBLE_CONVEYORS-SPARE_PARTS/TAIL_PULLEY.jpeg',
    partNumber: 'SP-TP-SDC-001'
  },
  {
    id: 'sdc-004',
    title: 'Impact Idler Roller',
    model: 'IIR-SDC-001',
    sku: 'SP-IIR-SDC-001',
    category: ['Conveyor Components', 'Spillage Dribble Conveyors'],
    subcategory: 'Idlers',
    specifications: {},
    features: [
      'Impact absorbing design',
      'Heavy duty construction',
      'Shock resistance',
      'Extended bearing life'
    ],
    applications: [
      'Loading points in spillage conveyors',
      'Impact zones',
      'Material transfer points',
      'Heavy duty applications'
    ],
    compatibleEquipment: ['Spillage conveyors', 'Loading systems'],
    tags: ['impact idler roller', 'shock absorption', 'spillage conveyor', 'loading points'],
    image: '/Products/SPILLAGE_DRIBBLE_CONVEYORS-SPARE_PARTS/IMPACT_IDLER_ROLLER.jpeg',
    partNumber: 'SP-IIR-SDC-001'
  },
  {
    id: 'sdc-005',
    title: 'Geared Motor',
    model: 'GM-SDC-001',
    sku: 'SP-GM-SDC-001',
    category: ['Conveyor Components', 'Spillage Dribble Conveyors'],
    subcategory: 'Drive Systems',
    specifications: {},
    features: [
      'Integrated motor and gearbox',
      'High torque output',
      'Compact design',
      'Efficient power transmission'
    ],
    applications: [
      'Spillage conveyor drive systems',
      'Material handling equipment',
      'Industrial machinery',
      'Process automation'
    ],
    compatibleEquipment: ['Spillage conveyors', 'Drive systems'],
    tags: ['geared motor', 'drive system', 'spillage conveyor', 'high torque'],
    image: '/Products/SPILLAGE_DRIBBLE_CONVEYORS-SPARE_PARTS/GEARED_MOTOR.jpeg',
    partNumber: 'SP-GM-SDC-001'
  },
  {
    id: 'sdc-006',
    title: 'Skirt Sealing Rubber',
    model: 'SSR-SDC-001',
    sku: 'SP-SSR-SDC-001',
    category: ['Conveyor Components', 'Spillage Dribble Conveyors'],
    subcategory: 'Sealing Components',
    specifications: {},
    features: [
      'High quality rubber construction',
      'Flexible sealing design',
      'Spillage containment',
      'Chemical resistant'
    ],
    applications: [
      'Spillage containment',
      'Dust sealing',
      'Material containment',
      'Industrial sealing'
    ],
    compatibleEquipment: ['Spillage conveyors', 'Sealing systems'],
    tags: ['skirt sealing rubber', 'spillage containment', 'sealing', 'rubber'],
    image: '/Products/SPILLAGE_DRIBBLE_CONVEYORS-SPARE_PARTS/SKIRT_SEALING_RUBBER.jpeg',
    partNumber: 'SP-SSR-SDC-001'
  }
]

export const spillageDribbleConveyorsData: BrandData = {
  brand: 'Spareng Spillage Dribble Conveyors',
  description: 'Specialized components for spillage and dribble conveyor systems designed for material cleanup and collection',
  website: 'https://spareng.com',
  products: spillageDribbleConveyorsProducts
}
