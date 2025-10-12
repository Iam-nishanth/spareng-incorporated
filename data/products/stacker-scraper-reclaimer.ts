import { BrandData, Product } from './product-types'

export const stackerScraperReclaimerProducts: Product[] = [
  {
    id: 'ssr-001',
    title: 'Chain',
    model: 'CH-SSR-001',
    sku: 'SP-CH-SSR-001',
    category: ['Material Handling', 'Stacker Scraper Reclaimer'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'Heavy duty steel construction',
      'High tensile strength',
      'Corrosion resistant coating',
      'Precision manufactured links'
    ],
    applications: [
      'Stacker/scraper reclaimer drive systems',
      'Material handling conveyors',
      'Heavy duty transport',
      'Industrial applications'
    ],
    compatibleEquipment: ['Stacker reclaimers', 'Chain drive systems'],
    tags: ['chain', 'drive system', 'stacker reclaimer', 'heavy duty'],
    image: '/Products/STACKER_SCRAPPER_RECLAIMER/CHAIN.jpeg',
    partNumber: 'SP-CH-SSR-001'
  },
  {
    id: 'ssr-002',
    title: 'Pinion',
    model: 'PIN-SSR-001',
    sku: 'SP-PIN-SSR-001',
    category: ['Material Handling', 'Stacker Scraper Reclaimer'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'Precision machined teeth',
      'High strength steel construction',
      'Heat treated for wear resistance',
      'Optimized tooth profile'
    ],
    applications: [
      'Stacker/scraper reclaimer gear systems',
      'Power transmission',
      'Drive applications',
      'Industrial machinery'
    ],
    compatibleEquipment: ['Stacker reclaimers', 'Gear systems'],
    tags: ['pinion', 'gear system', 'stacker reclaimer', 'power transmission'],
    image: '/Products/STACKER_SCRAPPER_RECLAIMER/PINION.jpeg',
    partNumber: 'SP-PIN-SSR-001'
  },
  {
    id: 'ssr-003',
    title: 'Toothed Wheel',
    model: 'TW-SSR-001',
    sku: 'SP-TW-SSR-001',
    category: ['Material Handling', 'Stacker Scraper Reclaimer'],
    subcategory: 'Drive Components',
    specifications: {},
    features: [
      'Large diameter toothed design',
      'High grade steel construction',
      'Precision machined teeth',
      'Heavy load capacity'
    ],
    applications: [
      'Stacker/scraper reclaimer rotation',
      'Heavy duty gear systems',
      'Industrial machinery',
      'Material handling equipment'
    ],
    compatibleEquipment: ['Stacker reclaimers', 'Heavy duty gear systems'],
    tags: ['toothed wheel', 'large gear', 'stacker reclaimer', 'heavy duty'],
    image: '/Products/STACKER_SCRAPPER_RECLAIMER/TOOTHED_WHEEL.jpeg',
    partNumber: 'SP-TW-SSR-001'
  },
  {
    id: 'ssr-004',
    title: 'Scraper Bucket',
    model: 'SB-SSR-001',
    sku: 'SP-SB-SSR-001',
    category: ['Material Handling', 'Stacker Scraper Reclaimer'],
    subcategory: 'Material Handling Components',
    specifications: {},
    features: [
      'Heavy duty steel construction',
      'Wear-resistant design',
      'Optimized scraping profile',
      'Replaceable wear parts'
    ],
    applications: [
      'Material scraping and reclaiming',
      'Bulk material handling',
      'Stockyard operations',
      'Industrial material recovery'
    ],
    compatibleEquipment: ['Stacker reclaimers', 'Scraping systems'],
    tags: ['scraper bucket', 'material scraping', 'stacker reclaimer', 'bulk handling'],
    image: '/Products/STACKER_SCRAPPER_RECLAIMER/SCRAPPER_BUCKET.jpeg',
    partNumber: 'SP-SB-SSR-001'
  }
]

export const stackerScraperReclaimerData: BrandData = {
  brand: 'Spareng Stacker Scraper Reclaimer',
  description: 'Essential components for stacker and scraper reclaimer systems used in bulk material handling and stockyard operations',
  website: 'https://spareng.com',
  products: stackerScraperReclaimerProducts
}
