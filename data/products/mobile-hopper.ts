import { BrandData, Product } from './product-types'

export const mobileHopperProducts: Product[] = [
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'mh-001',
  //   title: 'Bottom Bogie Construction',
  //   model: 'BBC-MH-001',
  //   sku: 'SP-BBC-MH-001',
  //   category: ['Material Handling', 'Mobile Hopper'],
  //   subcategory: 'Structural Components',
  //   specifications: {},
  //   features: [
  //     'Heavy duty steel frame construction',
  //     'Reinforced design for heavy loads',
  //     'Corrosion resistant coating',
  //     'Modular construction'
  //   ],
  //   applications: [
  //     'Mobile hopper base structure',
  //     'Heavy duty material handling',
  //     'Industrial applications',
  //     'Mobile equipment systems'
  //   ],
  //   compatibleEquipment: ['Mobile hoppers', 'Material handling systems'],
  //   tags: ['bottom bogie', 'construction', 'mobile hopper', 'structural'],
  //   image: '/Products/MOBILE_HOPPER/BOTOM_BOGIE_CONSTRUCTION.jpeg',
  //   partNumber: 'SP-BBC-MH-001'
  // },
  // {
  //   id: 'mh-002',
  //   title: 'Wheels',
  //   model: 'WH-MH-001',
  //   sku: 'SP-WH-MH-001',
  //   category: ['Material Handling', 'Mobile Hopper'],
  //   subcategory: 'Rolling Components',
  //   specifications: {},
  //   features: [
  //     'High strength steel construction',
  //     'Precision machined surfaces',
  //     'Heat treated for durability',
  //     'Balanced for smooth operation'
  //   ],
  //   applications: [
  //     'Mobile hopper mobility',
  //     'Material handling systems',
  //     'Industrial mobile equipment',
  //     'Heavy duty transport'
  //   ],
  //   compatibleEquipment: ['Mobile hoppers', 'Mobile equipment'],
  //   tags: ['wheels', 'rolling', 'mobile hopper', 'mobility'],
  //   image: '/Products/MOBILE_HOPPER/WHEELS.jpeg',
  //   partNumber: 'SP-WH-MH-001'
  // },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'mh-003',
  //   title: 'Bearing Housing Assembly',
  //   model: 'BHA-MH-001',
  //   sku: 'SP-BHA-MH-001',
  //   category: ['Material Handling', 'Mobile Hopper'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'Cast iron construction',
  //     'Integrated bearing housing',
  //     'Precision machined surfaces',
  //     'Heavy duty design'
  //   ],
  //   applications: [
  //     'Mobile hopper axle support',
  //     'Bearing housing systems',
  //     'Industrial machinery',
  //     'Heavy duty applications'
  //   ],
  //   compatibleEquipment: ['Mobile hoppers', 'Axle systems'],
  //   tags: ['bearing housing', 'assembly', 'mobile hopper', 'support'],
  //   image: '/Products/MOBILE_HOPPER/BEARING_HOUSING_ASSEMBLY-CATING.jpeg',
  //   partNumber: 'SP-BHA-MH-001'
  // },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'mh-004',
  //   title: 'Drive Shaft',
  //   model: 'DS-MH-001',
  //   sku: 'SP-DS-MH-001',
  //   category: ['Material Handling', 'Mobile Hopper'],
  //   subcategory: 'Drive Components',
  //   specifications: {},
  //   features: [
  //     'High strength steel construction',
  //     'Precision machined surfaces',
  //     'Heat treated for durability',
  //     'Balanced for smooth operation'
  //   ],
  //   applications: [
  //     'Mobile hopper drive systems',
  //     'Power transmission',
  //     'Heavy duty rotating applications',
  //     'Industrial machinery'
  //   ],
  //   compatibleEquipment: ['Mobile hoppers', 'Drive systems'],
  //   tags: ['drive shaft', 'power transmission', 'mobile hopper', 'rotating equipment'],
  //   image: '/Products/MOBILE_HOPPER/DRIVE_SHAFT.jpeg',
  //   partNumber: 'SP-DS-MH-001'
  // },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'mh-005',
  //   title: 'Non-Drive Shaft',
  //   model: 'NDS-MH-001',
  //   sku: 'SP-NDS-MH-001',
  //   category: ['Material Handling', 'Mobile Hopper'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'High strength steel construction',
  //     'Precision machined surfaces',
  //     'Corrosion resistant coating',
  //     'Heavy duty design'
  //   ],
  //   applications: [
  //     'Mobile hopper support systems',
  //     'Idler shaft applications',
  //     'Heavy duty support',
  //     'Industrial machinery'
  //   ],
  //   compatibleEquipment: ['Mobile hoppers', 'Support systems'],
  //   tags: ['non-drive shaft', 'support', 'mobile hopper', 'idler shaft'],
  //   image: '/Products/MOBILE_HOPPER/NON-DRIVE_SHAFT.jpeg',
  //   partNumber: 'SP-NDS-MH-001'
  // },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'mh-006',
  //   title: 'Axle',
  //   model: 'AXL-MH-001',
  //   sku: 'SP-AXL-MH-001',
  //   category: ['Material Handling', 'Mobile Hopper'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'Heavy duty steel construction',
  //     'Precision machined surfaces',
  //     'High load capacity',
  //     'Corrosion resistant coating'
  //   ],
  //   applications: [
  //     'Mobile hopper wheel support',
  //     'Heavy duty axle applications',
  //     'Material handling systems',
  //     'Industrial mobile equipment'
  //   ],
  //   compatibleEquipment: ['Mobile hoppers', 'Wheel systems'],
  //   tags: ['axle', 'wheel support', 'mobile hopper', 'heavy duty'],
  //   image: '/Products/MOBILE_HOPPER/AXLE.jpeg',
  //   partNumber: 'SP-AXL-MH-001'
  // },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'mh-007',
  //   title: 'Equalizer',
  //   model: 'EQ-MH-001',
  //   sku: 'SP-EQ-MH-001',
  //   category: ['Material Handling', 'Mobile Hopper'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'Load distribution mechanism',
  //     'Heavy duty steel construction',
  //     'Smooth operation',
  //     'Maintenance free design'
  //   ],
  //   applications: [
  //     'Load equalization',
  //     'Mobile hopper stability',
  //     'Weight distribution',
  //     'Industrial applications'
  //   ],
  //   compatibleEquipment: ['Mobile hoppers', 'Load distribution systems'],
  //   tags: ['equalizer', 'load distribution', 'mobile hopper', 'stability'],
  //   image: '/Products/MOBILE_HOPPER/EQUALIZER.jpeg',
  //   partNumber: 'SP-EQ-MH-001'
  // },
  {
    id: 'mh-008',
    title: 'Hardox Liners',
    model: 'HL-MH-001',
    sku: 'SP-HL-MH-001',
    category: ['Material Handling', 'Mobile Hopper'],
    subcategory: 'Wear Parts',
    specifications: {},
    features: [
      'Hardox steel construction',
      'Extreme wear resistance',
      'High impact strength',
      'Long service life'
    ],
    applications: [
      'Mobile hopper wear protection',
      'Abrasive material handling',
      'Heavy duty applications',
      'Industrial wear protection'
    ],
    compatibleEquipment: ['Mobile hoppers', 'Wear protection systems'],
    tags: ['hardox liners', 'wear protection', 'mobile hopper', 'abrasion resistant'],
    image: '/Products/MOBILE_HOPPER/LINNERS-HERDOX.jpeg',
    partNumber: 'SP-HL-MH-001'
  },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'mh-009',
  //   title: 'Geared Motor',
  //   model: 'GM-MH-001',
  //   sku: 'SP-GM-MH-001',
  //   category: ['Material Handling', 'Mobile Hopper'],
  //   subcategory: 'Drive Systems',
  //   specifications: {},
  //   features: [
  //     'Integrated motor and gearbox',
  //     'High torque output',
  //     'Compact design',
  //     'Efficient power transmission'
  //   ],
  //   applications: [
  //     'Mobile hopper drive systems',
  //     'Material handling equipment',
  //     'Industrial machinery',
  //     'Process automation'
  //   ],
  //   compatibleEquipment: ['Mobile hoppers', 'Drive systems'],
  //   tags: ['geared motor', 'drive system', 'mobile hopper', 'high torque'],
  //   image: '/Products/MOBILE_HOPPER/GEARED_MOTOR.jpeg',
  //   partNumber: 'SP-GM-MH-001'
  // },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'mh-010',
  //   title: 'Bearing',
  //   model: 'BRG-MH-001',
  //   sku: 'SP-BRG-MH-001',
  //   category: ['Material Handling', 'Mobile Hopper'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'High quality steel construction',
  //     'Sealed design',
  //     'Long service life',
  //     'Low maintenance'
  //   ],
  //   applications: [
  //     'Mobile hopper rotating equipment',
  //     'Axle support systems',
  //     'Industrial machinery',
  //     'Mobile equipment'
  //   ],
  //   compatibleEquipment: ['Mobile hoppers', 'Rotating equipment'],
  //   tags: ['bearing', 'sealed', 'mobile hopper', 'rotating equipment'],
  //   image: '/Products/MOBILE_HOPPER/BEARING.jpeg',
  //   partNumber: 'SP-BRG-MH-001'
  // }
]

export const mobileHopperData: BrandData = {
  brand: 'Spareng Mobile Hopper',
  description: 'Comprehensive range of mobile hopper components and spare parts for mobile material handling systems',
  website: 'https://spareng.com',
  products: mobileHopperProducts
}
