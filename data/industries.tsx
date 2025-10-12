export interface Industry {
  title: string
  description: string
  imageSrc: string
  category: string
  benefits: string[]
  solutions: string[]
}

const industries: { [key: string]: Industry } = {
  pharma: {
    title: 'Pharmaceutical',
    description: 'Ensure compliance, contamination control, and operational efficiency in pharmaceutical manufacturing and research facilities.',
    imageSrc: '/products/nergeco/Doors for Clean Processes/Automatic_Nergeco_doors_in_the_pharmaceutical_industry.jpg',
    category: 'Healthcare & Life Sciences',
    benefits: [
      'Clean room compatibility',
      'Temperature-controlled environments',
      'Regulatory compliance (GMP, FDA)',
      'Contamination prevention',
      'Automated access control'
    ],
    solutions: [
      'High-speed clean room doors',
      'Fire-rated pharmaceutical shutters',
      'Temperature-controlled sectional doors',
      'Automated docking systems',
      'Sanitization-friendly materials'
    ]
  },
  beverages: {
    title: 'Food Processing & Beverages',
    description: 'Optimize production flow, maintain hygiene standards, and ensure product quality in beverage manufacturing and bottling facilities.',
    imageSrc: '/products/nergeco/Food Processing Industry/Nergeco_high-speed_doors_forming_air_lock_with_isothermal_doors.jpg',
    category: 'Food & Beverage',
    benefits: [
      'Hygienic design standards',
      'Rapid access for production lines',
      'Temperature regulation',
      'Wash-down resistant materials',
      'Energy-efficient operation'
    ],
    solutions: [
      'Food-grade high-speed doors',
      'Temperature-controlled environments',
      'Automated loading systems',
      'Sanitary dock shelters',
      'Impact-resistant doors for heavy traffic'
    ]
  },
  cold: {
    title: 'Cold Storage',
    description: 'Maintain precise temperature control and energy efficiency in cold storage warehouses and distribution centers.',
    imageSrc: '/products/nergeco/nergeco-onsite/Cold-storage-nergeco.jpeg',
    category: 'Temperature Controlled',
    benefits: [
      'Superior insulation properties',
      'Temperature stability',
      'Energy cost reduction',
      'Frost-resistant operation',
      'Rapid access capabilities'
    ],
    solutions: [
      'Insulated high-speed freezer doors',
      'Temperature-controlled sectional doors',
      'Automated cold storage systems',
      'Energy-efficient loading bays',
      'Climate-controlled dock shelters'
    ]
  },
  warehouse: {
    title: 'Warehouse & Logistics',
    description: 'Enhance operational efficiency, safety, and throughput in modern warehouse and distribution facilities.',
    imageSrc: '/home/DockLeveller.png',
    category: 'Warehousing',
    benefits: [
      'High-traffic durability',
      'Safety compliance',
      'Operational efficiency',
      'Space optimization',
      'Automated systems integration'
    ],
    solutions: [
      'High-speed warehouse doors',
      'Automated docking systems',
      'Vehicle restraint systems',
      'Loading bay equipment',
      'Safety interlock systems'
    ]
  },
  // food: {
  //   title: 'Food Processing',
  //   description: 'Meet strict hygiene requirements while maintaining efficient production processes in food processing facilities.',
  //   imageSrc: '/home/Roller Shutters.png',
  //   category: 'Food & Beverage',
  //   benefits: [
  //     'HACCP compliance',
  //     'Easy-to-clean surfaces',
  //     'Temperature regulation',
  //     'Pest prevention',
  //     'Production efficiency'
  //   ],
  //   solutions: [
  //     'Sanitary processing doors',
  //     'Temperature-controlled environments',
  //     'Wash-down resistant equipment',
  //     'Automated access systems',
  //     'Food-safe materials throughout'
  //   ]
  // },
  cargo: {
    title: 'Cargo & Freight Hubs',
    description: 'Support high-volume cargo terminals with rapid throughput, weather protection, and safe loading operations.',
    imageSrc: '/products/nergeco/nergeco-onsite/cargo-nergeco.jpeg',
    category: 'Logistics',
    benefits: [
      'Fast turnaround at busy docks',
      'Weather-tight sealing for freight',
      'Improved personnel and vehicle safety',
      'Energy-efficient temperature control',
      'Durable solutions for heavy traffic'
    ],
    solutions: [
      'High-speed logistics doors',
      'Telescopic dock levellers',
      'Impact-resistant sectional closures',
      'Automated dock shelters',
      'Integrated traffic management systems'
    ]
  },
  automotive: {
    title: 'Automotive & Mobility',
    description: 'Enable efficient vehicle production, testing, and showroom operations with tailored access and safety solutions.',
    imageSrc: '/home/Industrial Bay Doors.png',
    category: 'Automotive',
    benefits: [
      'Separation of production and display areas',
      'Controlled environments for paint and assembly',
      'Dust and fume mitigation',
      'Safe vehicle and equipment movement',
      'Compliance with safety standards'
    ],
    solutions: [
      'High-speed clean room doors',
      'Fold-up industrial doors',
      'Fire-rated roller shutters',
      'Swing lip dock levellers',
      'Automated access control gates'
    ]
  },
  steel: {
    title: 'Steel & Metal Works',
    description: 'Operate safely around heavy machinery, sparks, and extreme temperatures in steel processing facilities.',
    imageSrc: '/products/nergeco/T-Series/NERGECO-T-ENDURO-2-automatic-flexible-door-with-high-wind-resistance-installed-on-a-mining-maintenance-workshop.jpg',
    category: 'Heavy Industry',
    benefits: [
      'Heat and spark resistant protection',
      'Reliable performance in harsh environments',
      'Coverage for oversized openings',
      'Worker safety and compliance',
      'Maximum equipment uptime'
    ],
    solutions: [
      'Heavy-duty insulated shutters',
      'High-capacity dock levellers',
      'Industrial high-speed doors',
      'Fire-rated containment doors',
      'Custom fold-up barriers'
    ]
  }
}

export default industries
