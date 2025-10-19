import { BrandData, Product } from './product-types'

export const screwConveyorProducts: Product[] = [
  {
    id: 'sc-001',
    title: 'Paddle with Liners',
    model: 'PWL-001',
    sku: 'SP-PWL-001',
    category: ['Material Handling', 'Screw Conveyor'],
    subcategory: 'Conveyor Components',
    specifications: {},
    features: [
      'Wear resistant liner material',
      'Optimized paddle design',
      'Easy replacement system',
      'Enhanced material flow'
    ],
    applications: [
      'Material mixing and transport',
      'Abrasive material handling',
      'Industrial mixing systems',
      'Bulk material processing'
    ],
    compatibleEquipment: ['Screw conveyors', 'Mixing systems'],
    tags: ['paddle', 'liner', 'wear resistant', 'material mixing'],
    image: '/Products/SCREW_CONVEYOR/PADDEL_WITH_LINERS.jpeg',
    partNumber: 'SP-PWL-001'
  },
  {
    id: 'sc-002',
    title: 'Spur Gears',
    model: 'SG-SC-001',
    sku: 'SP-SG-SC-001',
    category: ['Material Handling', 'Screw Conveyor'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'High grade steel construction',
      'Precision machined teeth',
      'High load capacity',
      'Long service life'
    ],
    applications: [
      'Conveyor drive systems',
      'Speed reduction applications',
      'Power transmission',
      'Industrial machinery'
    ],
    compatibleEquipment: ['Screw conveyors', 'Drive systems'],
    tags: ['spur gears', 'drive system', 'power transmission', 'speed reduction'],
    image: '/Products/SCREW_CONVEYOR/SPUR_GEARS.jpeg',
    partNumber: 'SP-SG-SC-001'
  },
  {
    id: 'sc-003',
    title: 'Pin-Bush Coupling',
    model: 'PBC-SC-001',
    sku: 'SP-PBC-SC-001',
    category: ['Material Handling', 'Screw Conveyor'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'Flexible rubber bushes',
      'Misalignment tolerance',
      'Easy maintenance',
      'Vibration damping'
    ],
    applications: [
      'Motor to gearbox connection',
      'Drive system coupling',
      'Power transmission',
      'Machinery connections'
    ],
    compatibleEquipment: ['Screw conveyors', 'Drive systems'],
    tags: ['pin-bush coupling', 'flexible', 'drive connection', 'power transmission'],
    image: '/Products/SCREW_CONVEYOR/PIN-BUSH_COUPLING.jpeg',
    partNumber: 'SP-PBC-SC-001'
  },
  {
    id: 'sc-004',
    title: 'Tyre Coupling',
    model: 'TC-SC-001',
    sku: 'SP-TC-SC-001',
    category: ['Material Handling', 'Screw Conveyor'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'Flexible rubber tyre element',
      'High misalignment tolerance',
      'Shock absorption',
      'Easy tyre replacement'
    ],
    applications: [
      'Heavy duty drive coupling',
      'Shock absorbing applications',
      'Industrial machinery',
      'Screw conveyor drives'
    ],
    compatibleEquipment: ['Screw conveyors', 'Heavy duty drives'],
    tags: ['tyre coupling', 'shock absorption', 'heavy duty', 'flexible'],
    image: '/Products/SCREW_CONVEYOR/TYRE_COUPLING.jpeg',
    partNumber: 'SP-TC-SC-001'
  },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'sc-005',
  //   title: 'Geared Motor',
  //   model: 'GM-SC-001',
  //   sku: 'SP-GM-SC-001',
  //   category: ['Material Handling', 'Screw Conveyor'],
  //   subcategory: 'Drive Components',
  //   specifications: {},
  //   features: [
  //     'Integrated gear reduction',
  //     'High efficiency design',
  //     'Compact construction',
  //     'Low maintenance requirements'
  //   ],
  //   applications: [
  //     'Screw conveyor drives',
  //     'Material handling',
  //     'Industrial applications',
  //     'Bulk material transport'
  //   ],
  //   compatibleEquipment: ['Screw conveyors', 'Material handling systems'],
  //   tags: ['geared motor', 'gear reduction', 'drive system', 'compact'],
  //   image: '/Products/SCREW_CONVEYOR/GEARED_MOTOR.jpeg',
  //   partNumber: 'SP-GM-SC-001'
  // },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'sc-006',
  //   title: 'Bearings',
  //   model: 'BRG-SC-001',
  //   sku: 'SP-BRG-SC-001',
  //   category: ['Material Handling', 'Screw Conveyor'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'High quality steel construction',
  //     'Sealed design',
  //     'Long service life',
  //     'Low maintenance'
  //   ],
  //   applications: [
  //     'Screw shaft support',
  //     'Rotating equipment',
  //     'Industrial machinery',
  //     'Material handling systems'
  //   ],
  //   compatibleEquipment: ['Screw conveyors', 'Rotating equipment'],
  //   tags: ['bearings', 'sealed', 'shaft support', 'screw conveyor'],
  //   image: '/Products/SCREW_CONVEYOR/BEARINGS.jpeg',
  //   partNumber: 'SP-BRG-SC-001'
  // },
  {
    id: 'sc-007',
    title: 'Sealing Arrangement',
    model: 'SA-SC-001',
    sku: 'SP-SA-SC-001',
    category: ['Material Handling', 'Screw Conveyor'],
    subcategory: 'Sealing Components',
    specifications: {},
    features: [
      'High performance sealing materials',
      'Dust tight design',
      'Easy replacement',
      'Chemical resistant'
    ],
    applications: [
      'Conveyor sealing',
      'Dust containment',
      'Material handling',
      'Industrial applications'
    ],
    compatibleEquipment: ['Screw conveyors', 'Material handling systems'],
    tags: ['sealing arrangement', 'dust tight', 'containment', 'screw conveyor'],
    image: '/Products/SCREW_CONVEYOR/SEALING_ARRANGEMENT.jpeg',
    partNumber: 'SP-SA-SC-001'
  },
  {
    id: 'sc-008',
    title: 'Zero Speed Switch',
    model: 'ZSS-SC-001',
    sku: 'SP-ZSS-SC-001',
    category: ['Material Handling', 'Screw Conveyor'],
    subcategory: 'Safety & Control',
    specifications: {},
    features: [
      'Speed monitoring capability',
      'Adjustable response time',
      'Fail-safe operation',
      'Weather resistant housing'
    ],
    applications: [
      'Conveyor speed monitoring',
      'Safety systems',
      'Process control',
      'Jam detection'
    ],
    compatibleEquipment: ['Screw conveyors', 'Control systems'],
    tags: ['zero speed switch', 'speed monitoring', 'safety', 'control'],
    image: '/Products/SCREW_CONVEYOR/ZERO_SPEED_SWITCH.jpeg',
    partNumber: 'SP-ZSS-SC-001'
  },
  {
    id: 'sc-009',
    title: 'Nozzles',
    model: 'NOZ-SC-001',
    sku: 'SP-NOZ-SC-001',
    category: ['Material Handling', 'Screw Conveyor'],
    subcategory: 'Conveyor Components',
    specifications: {},
    features: [
      'Precision manufactured',
      'Corrosion resistant materials',
      'Easy installation',
      'Optimized flow design'
    ],
    applications: [
      'Material discharge',
      'Flow control',
      'Conveyor systems',
      'Industrial applications'
    ],
    compatibleEquipment: ['Screw conveyors', 'Material handling systems'],
    tags: ['nozzles', 'discharge', 'flow control', 'screw conveyor'],
    image: '/Products/SCREW_CONVEYOR/NOZZLES.jpeg',
    partNumber: 'SP-NOZ-SC-001'
  }
]

export const screwConveyorData: BrandData = {
  brand: 'Spareng Screw Conveyor',
  description: 'Comprehensive range of screw conveyor components and spare parts',
  website: 'https://spareng.com',
  products: screwConveyorProducts
}