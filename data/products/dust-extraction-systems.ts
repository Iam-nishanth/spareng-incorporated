import { BrandData, Product } from './product-types'

export const dustExtractionSystemsProducts: Product[] = [
  {
    id: 'des-001',
    title: 'Cage with Venturi',
    model: 'CV-DES-001',
    sku: 'SP-CV-DES-001',
    category: ['Environmental Systems', 'Dust Extraction Systems'],
    subcategory: 'Filter Components',
    specifications: {},
    features: [
      'Venturi jet cleaning system',
      'Wire cage support structure',
      'High efficiency dust removal',
      'Easy maintenance design'
    ],
    applications: [
      'Dust extraction systems',
      'Air filtration',
      'Industrial dust control',
      'Environmental protection'
    ],
    compatibleEquipment: ['Dust extraction systems', 'Air filtration systems'],
    tags: ['cage venturi', 'dust extraction', 'air filtration', 'jet cleaning'],
    image: '/Products/DUST_EXTRACTION_SYSTEMS_ITEMS/CAGE_WITH_VENTURE.jpeg',
    partNumber: 'SP-CV-DES-001'
  },
  {
    id: 'des-002',
    title: 'Bag Filter',
    model: 'BF-DES-001',
    sku: 'SP-BF-DES-001',
    category: ['Environmental Systems', 'Dust Extraction Systems'],
    subcategory: 'Filter Media',
    specifications: {},
    features: [
      'High efficiency filtration',
      'Durable filter fabric',
      'Easy replacement design',
      'Long service life'
    ],
    applications: [
      'Dust collection systems',
      'Air purification',
      'Industrial dust control',
      'Environmental compliance'
    ],
    compatibleEquipment: ['Bag filter systems', 'Dust collectors'],
    tags: ['bag filter', 'dust collection', 'air purification', 'filtration'],
    image: '/Products/DUST_EXTRACTION_SYSTEMS_ITEMS/BAG_FILTTER.jpeg',
    partNumber: 'SP-BF-DES-001'
  },
  {
    id: 'des-003',
    title: 'Rectangular Filter',
    model: 'RF-DES-001',
    sku: 'SP-RF-DES-001',
    category: ['Environmental Systems', 'Dust Extraction Systems'],
    subcategory: 'Filter Media',
    specifications: {},
    features: [
      'Rectangular frame design',
      'High surface area',
      'Efficient dust capture',
      'Rigid construction'
    ],
    applications: [
      'Industrial air filtration',
      'Dust extraction systems',
      'HVAC applications',
      'Environmental control'
    ],
    compatibleEquipment: ['Air handling units', 'Dust extraction systems'],
    tags: ['rectangular filter', 'air filtration', 'dust extraction', 'HVAC'],
    image: '/Products/DUST_EXTRACTION_SYSTEMS_ITEMS/RECTANGULAR_FILTER.jpeg',
    partNumber: 'SP-RF-DES-001'
  },
  {
    id: 'des-004',
    title: 'Cartridge Filter',
    model: 'CF-DES-001',
    sku: 'SP-CF-DES-001',
    category: ['Environmental Systems', 'Dust Extraction Systems'],
    subcategory: 'Filter Media',
    specifications: {},
    features: [
      'Pleated filter design',
      'High filtration efficiency',
      'Compact size',
      'Easy installation'
    ],
    applications: [
      'Dust collection systems',
      'Air purification',
      'Industrial filtration',
      'Environmental protection'
    ],
    compatibleEquipment: ['Cartridge dust collectors', 'Air filtration systems'],
    tags: ['cartridge filter', 'pleated design', 'dust collection', 'air purification'],
    image: '/Products/DUST_EXTRACTION_SYSTEMS_ITEMS/CATRIDGE_FILTER.jpeg',
    partNumber: 'SP-CF-DES-001'
  }
]

export const dustExtractionSystemsData: BrandData = {
  brand: 'Spareng Dust Extraction Systems',
  description: 'Comprehensive range of dust extraction and air filtration components for environmental control and industrial dust management',
  website: 'https://spareng.com',
  products: dustExtractionSystemsProducts
}
