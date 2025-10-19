import { BrandData, Product } from './product-types'

export const bogieProducts: Product[] = [
    // {
    //   id: 'bog-001',
    //   title: 'Wheels',
    //   model: 'WH-BOG-001',
    //   sku: 'SP-WH-BOG-001',
    //   category: ['Material Handling', 'Bogie'],
    //   subcategory: 'Rolling Components',
    //   specifications: {},
    //   features: [
    //     'High strength steel construction',
    //     'Precision machined surfaces',
    //     'Heat treated for durability',
    //     'Balanced for smooth operation'
    //   ],
    //   applications: [
    //     'Bogie systems',
    //     'Mobile equipment',
    //     'Material handling systems',
    //     'Industrial machinery'
    //   ],
    //   compatibleEquipment: ['Bogie systems', 'Mobile equipment'],
    //   tags: ['wheels', 'rolling', 'bogie', 'mobile equipment'],
    //   image: '/Products/BOGIE/WHEELS.jpeg',
    //   partNumber: 'SP-WH-BOG-001'
    // },
  {
    id: 'bog-002',
    title: 'Forged Shaft',
    model: 'FS-BOG-001',
    sku: 'SP-FS-BOG-001',
    category: ['Material Handling', 'Bogie'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'Forged steel construction',
      'High strength and durability',
      'Precision machined surfaces',
      'Heat treated for wear resistance'
    ],
    applications: [
      'Bogie drive systems',
      'Power transmission',
      'Heavy duty rotating applications',
      'Industrial machinery'
    ],
    compatibleEquipment: ['Bogie systems', 'Drive systems'],
    tags: ['forged shaft', 'drive system', 'bogie', 'power transmission'],
    image: '/Products/BOGIE/FORGED_SHAFT.jpeg',
    partNumber: 'SP-FS-BOG-001'
  },
  {
    id: 'bog-003',
    title: 'Spur Gear',
    model: 'SG-BOG-001',
    sku: 'SP-SG-BOG-001',
    category: ['Material Handling', 'Bogie'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'High grade steel construction',
      'Precision machined teeth',
      'High load capacity',
      'Long service life'
    ],
    applications: [
      'Bogie drive systems',
      'Speed reduction applications',
      'Power transmission',
      'Industrial machinery'
    ],
    compatibleEquipment: ['Bogie systems', 'Gear drive systems'],
    tags: ['spur gear', 'drive system', 'bogie', 'speed reduction'],
    image: '/Products/BOGIE/SPUR_GEAR.jpeg',
    partNumber: 'SP-SG-BOG-001'
  },
  {
    id: 'bog-004',
    title: 'Pinion',
    model: 'PIN-BOG-001',
    sku: 'SP-PIN-BOG-001',
    category: ['Material Handling', 'Bogie'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'Precision machined teeth',
      'High strength steel construction',
      'Heat treated for wear resistance',
      'Optimized tooth profile'
    ],
    applications: [
      'Bogie gear systems',
      'Power transmission',
      'Drive applications',
      'Industrial machinery'
    ],
    compatibleEquipment: ['Bogie systems', 'Gear systems'],
    tags: ['pinion', 'gear system', 'bogie', 'power transmission'],
    image: '/Products/BOGIE/PINION.jpeg',
    partNumber: 'SP-PIN-BOG-001'
  },
  // {
  //   id: 'bog-005',
  //   title: 'Bogie Construction',
  //   model: 'BC-BOG-001',
  //   sku: 'SP-BC-BOG-001',
  //   category: ['Material Handling', 'Bogie'],
  //   subcategory: 'Structural Components',
  //   specifications: {},
  //   features: [
  //     'Heavy duty steel frame construction',
  //     'Modular design',
  //     'Corrosion resistant coating',
  //     'Easy maintenance access'
  //   ],
  //   applications: [
  //     'Mobile equipment systems',
  //     'Material handling',
  //     'Industrial applications',
  //     'Heavy duty transport'
  //   ],
  //   compatibleEquipment: ['Mobile equipment', 'Material handling systems'],
  //   tags: ['bogie construction', 'structural', 'mobile equipment', 'frame'],
  //   image: '/Products/BOGIE/BOGIE_CONSTRUCTION.jpeg',
  //   partNumber: 'SP-BC-BOG-001'
  // },
  // {
  //   id: 'bog-006',
  //   title: 'Bearing',
  //   model: 'BRG-BOG-001',
  //   sku: 'SP-BRG-BOG-001',
  //   category: ['Material Handling', 'Bogie'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'High quality steel construction',
  //     'Sealed design',
  //     'Long service life',
  //     'Low maintenance'
  //   ],
  //   applications: [
  //     'Bogie rotating equipment',
  //     'Wheel support systems',
  //     'Industrial machinery',
  //     'Mobile equipment'
  //   ],
  //   compatibleEquipment: ['Bogie systems', 'Rotating equipment'],
  //   tags: ['bearing', 'sealed', 'bogie', 'rotating equipment'],
  //   image: '/Products/BOGIE/BEARING.jpeg',
  //   partNumber: 'SP-BRG-BOG-001'
  // }
]

export const bogieData: BrandData = {
  brand: 'Spareng Bogie',
  description: 'Comprehensive range of bogie components and spare parts for mobile material handling equipment',
  website: 'https://spareng.com',
  products: bogieProducts
}
