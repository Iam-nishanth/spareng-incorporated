import { BrandData, Product } from './product-types'

export const linearMotionScreenProducts: Product[] = [
  {
    id: 'lms-001',
    title: 'Screen Cloth',
    model: 'SC-LMS-001',
    sku: 'SP-SC-LMS-001',
    category: ['Screening Spares'],
    subcategory: 'Screen Media',
    specifications: {},
    features: [
      'High durability woven wire mesh',
      'Available in various aperture sizes',
      'Resistant to wear and tear',
      'Easy installation and replacement'
    ],
    applications: [
      'Linear motion screening',
      'Material separation',
      'Fine particle classification',
      'Industrial screening operations'
    ],
    compatibleEquipment: ['Linear motion screens', 'Screening Spares',],
    tags: ['screen cloth', 'wire mesh', 'linear motion', 'screening'],
    image: '/Products/LINEAR_MOTION_SCREEN/SCREEN_CLOTH.png',
    partNumber: 'SP-SC-LMS-001'
  },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'lms-002',
  //   title: 'Unbalanced Motor',
  //   model: 'UM-LMS-001',
  //   sku: 'SP-UM-LMS-001',
  //   category: ['Screening Spares', 'Linear Motion Screen'],
  //   subcategory: 'Drive Components',
  //   specifications: {},
  //   features: [
  //     'High efficiency vibrating motor',
  //     'Adjustable eccentric weights',
  //     'Robust construction',
  //     'Low maintenance design'
  //   ],
  //   applications: [
  //     'Linear motion screen drives',
  //     'Vibrating equipment',
  //     'Material handling systems',
  //     'Industrial screening'
  //   ],
  //   compatibleEquipment: ['Linear motion screens', 'Vibrating equipment'],
  //   tags: ['unbalanced motor', 'vibrating motor', 'linear motion', 'drive'],
  //   image: '/Products/LINEAR_MOTION_SCREEN/UNBALANED_MOTOR.jpeg',
  //   partNumber: 'SP-UM-LMS-001'
  // },
  // {
  //   id: 'lms-003',
  //   title: 'Compression Springs',
  //   model: 'CS-LMS-001',
  //   sku: 'SP-CS-LMS-001',
  //   category: ['Screening Spares', 'Linear Motion Screen'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'High grade spring steel',
  //     'Precision wound coils',
  //     'High load capacity',
  //     'Corrosion resistant coating'
  //   ],
  //   applications: [
  //     'Screen suspension systems',
  //     'Vibration isolation',
  //     'Shock absorption',
  //     'Linear motion support'
  //   ],
  //   compatibleEquipment: ['Linear motion screens', 'Screening Spares',],
  //   tags: ['compression springs', 'suspension', 'vibration isolation', 'linear motion'],
  //   image: '/Products/LINEAR_MOTION_SCREEN/COMPRESSION_SPRINGS.jpeg',
  //   partNumber: 'SP-CS-LMS-001'
  // }
]

export const linearMotionScreenData: BrandData = {
  brand: 'Spareng Linear Motion Screen',
  description: 'Comprehensive range of linear motion screen components and spare parts',
  website: 'https://spareng.com',
  products: linearMotionScreenProducts
}