import { BrandData, Product } from './product-types'

export const rotaryAirLockValveProducts: Product[] = [
  {
    id: 'ralv-001',
    title: 'Rotary Vanes',
    model: 'RV-001',
    sku: 'SP-RV-001',
    category: ['Material Handling', 'Rotary Air Lock Valve'],
    subcategory: 'Valve Components',
    specifications: {},
    features: [
      'High wear resistant materials',
      'Precision manufactured',
      'Easy replacement design',
      'Excellent sealing properties'
    ],
    applications: [
      'Air lock valve systems',
      'Material flow control',
      'Pneumatic conveying',
      'Dust collection systems'
    ],
    compatibleEquipment: ['Rotary air lock valves', 'Pneumatic systems'],
    tags: ['rotary vanes', 'air lock', 'sealing', 'material flow'],
    image: '/Products/ROTARY_AIR_LOCK_VALVE/ROTARY_VANES.jpeg',
    partNumber: 'SP-RV-001'
  },
  {
    id: 'ralv-002',
    title: 'RAV Housing',
    model: 'RAVH-001',
    sku: 'SP-RAVH-001',
    category: ['Material Handling', 'Rotary Air Lock Valve'],
    subcategory: 'Valve Components',
    specifications: {},
    features: [
      'Cast iron construction',
      'Precision machined surfaces',
      'Corrosion resistant coating',
      'Robust design'
    ],
    applications: [
      'Air lock valve assembly',
      'Material containment',
      'Pneumatic systems',
      'Industrial applications'
    ],
    compatibleEquipment: ['Rotary air lock valves', 'Material handling systems'],
    tags: ['RAV housing', 'cast iron', 'valve assembly', 'air lock'],
    image: '/Products/ROTARY_AIR_LOCK_VALVE/RAV_HOUSING.jpeg',
    partNumber: 'SP-RAVH-001'
  },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'ralv-003',
  //   title: 'Bearings',
  //   model: 'BRG-RALV-001',
  //   sku: 'SP-BRG-RALV-001',
  //   category: ['Material Handling', 'Rotary Air Lock Valve'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'Sealed bearing design',
  //     'High load capacity',
  //     'Long service life',
  //     'Low maintenance'
  //   ],
  //   applications: [
  //     'Valve rotor support',
  //     'Rotating equipment',
  //     'Industrial machinery',
  //     'Material handling systems'
  //   ],
  //   compatibleEquipment: ['Rotary air lock valves', 'Rotating equipment'],
  //   tags: ['bearings', 'sealed', 'rotor support', 'air lock valve'],
  //   image: '/Products/ROTARY_AIR_LOCK_VALVE/BEARINGS.jpeg',
  //   partNumber: 'SP-BRG-RALV-001'
  // },
  // DISCONTINUED - Temporarily not available
  // {
  //   id: 'ralv-004',
  //   title: 'Plummer Blocks',
  //   model: 'PB-RALV-001',
  //   sku: 'SP-PB-RALV-001',
  //   category: ['Material Handling', 'Rotary Air Lock Valve'],
  //   subcategory: 'Support Components',
  //   specifications: {},
  //   features: [
  //     'Cast iron construction',
  //     'Self-aligning capability',
  //     'Easy maintenance access',
  //     'Heavy duty design'
  //   ],
  //   applications: [
  //     'Valve shaft support',
  //     'Bearing housing',
  //     'Industrial machinery',
  //     'Material handling equipment'
  //   ],
  //   compatibleEquipment: ['Rotary air lock valves', 'Industrial machinery'],
  //   tags: ['plummer blocks', 'bearing housing', 'shaft support', 'air lock valve'],
  //   image: '/Products/ROTARY_AIR_LOCK_VALVE/PLUMMER_BLOCKS.jpeg',
  //   partNumber: 'SP-PB-RALV-001'
  // },
  {
    id: 'ralv-005',
    title: 'Sealing Arrangement',
    model: 'SA-RALV-001',
    sku: 'SP-SA-RALV-001',
    category: ['Material Handling', 'Rotary Air Lock Valve'],
    subcategory: 'Sealing Components',
    specifications: {},
    features: [
      'High performance sealing materials',
      'Dust tight design',
      'Easy replacement',
      'Chemical resistant'
    ],
    applications: [
      'Air lock sealing',
      'Dust containment',
      'Pneumatic systems',
      'Material handling'
    ],
    compatibleEquipment: ['Rotary air lock valves', 'Pneumatic systems'],
    tags: ['sealing arrangement', 'dust tight', 'air lock', 'containment'],
    image: '/Products/ROTARY_AIR_LOCK_VALVE/SEALING_ARRANGEMENT.jpeg',
    partNumber: 'SP-SA-RALV-001'
  },
  {
    id: 'ralv-006',
    title: 'Center Shaft',
    model: 'CS-RALV-001',
    sku: 'SP-CS-RALV-001',
    category: ['Material Handling', 'Rotary Air Lock Valve'],
    subcategory: 'Valve Components',
    specifications: {},
    features: [
      'High strength steel construction',
      'Precision machined',
      'Corrosion resistant',
      'Optimized flow design'
    ],
    applications: [
      'Material flow control',
      'Valve assembly',
      'Pneumatic conveying',
      'Industrial applications'
    ],
    compatibleEquipment: ['Rotary air lock valves', 'Material handling systems'],
    tags: ['center shaft', 'material flow', 'valve assembly', 'air lock'],
    image: '/Products/ROTARY_AIR_LOCK_VALVE/CENTER_SHAFT.jpeg',
    partNumber: 'SP-CS-RALV-001'
  }
]

export const rotaryAirLockValveData: BrandData = {
  brand: 'Spareng Rotary Air Lock Valve',
  description: 'Comprehensive range of rotary air lock valve components and spare parts',
  website: 'https://spareng.com',
  products: rotaryAirLockValveProducts
}