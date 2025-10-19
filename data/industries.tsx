export interface Industry {
  title: string
  description: string
  imageSrc: string
  category: string
  benefits: string[]
  solutions: string[]
}

const industries: { [key: string]: Industry } = {
  // Machine Cards - Built using Spareng MHE Spare Parts
  beltConveyor: {
    title: 'Conveyor Systems',
    description: 'Troughed belt conveyors with impact idlers, return idlers, and drive systems for efficient material transport.',
    imageSrc: '/images/machines/heavy-duty-conveyor-belt.jpg',
    category: 'Material Handling',
    benefits: [
      'Heavy-duty troughed belt design',
      'Impact idlers with rubber rings',
      'Self-aligning return idlers',
      'Variable speed drive systems',
      'Modular design for easy installation'
    ],
    solutions: [
      'Troughed Conveyors',
      'Impact Idlers',
      'Drive Systems',
      'Return Idlers',
      'Belt Tracking Systems'
    ]
  },
  screeningEquipment: {
    title: 'Screening Equipment',
    description: 'Circular motion screens, flip flow screens, and linear motion screens for material separation and grading.',
    imageSrc: '/images/machines/Screening-Washing-Plant-Titanium-Vibrating-Screen-for-River-Sand.avif',
    category: 'Processing Equipment',
    benefits: [
      'Circular motion screens for efficient separation',
      'Flip flow screens for difficult materials',
      'Linear motion screens for fine processing',
      'Heavy-duty vibratory motors',
      'Modular screen deck design'
    ],
    solutions: [
      'CMS Screens',
      'Flip Flow Screens',
      'Linear Motion Screens',
      'Vibratory Motors',
      'Screen Decks'
    ]
  },
  crushingSystems: {
    title: 'Crushing Systems',
    description: 'Impact mills, hammer mills, and ring granulators for material size reduction and processing.',
    imageSrc: '/images/machines/impact-crusher-1.jpg',
    category: 'Processing Equipment',
    benefits: [
      'High-impact crushing efficiency',
      'Reversible hammer design',
      'Adjustable discharge gap',
      'Heavy-duty rotor construction',
      'Easy access for maintenance'
    ],
    solutions: [
      'Impact Mills',
      'Hammer Mills',
      'Ring Granulators',
      'Crusher Hammers',
      'Rotor Assemblies'
    ]
  },
  // portHandling: {
  //   title: 'Port Handling Equipment',
  //   description: 'Barge loaders, bulk reception units, and mobile hoppers for port and terminal operations.',
  //   imageSrc: '/images/machines/port-handling.jpg',
  //   category: 'Port Equipment',
  //   benefits: [
  //     'High-capacity barge loading systems',
  //     'Mobile hopper units for flexibility',
  //     'Bulk reception with multiple discharge points',
  //     'Weather-resistant marine construction',
  //     'Automated control systems'
  //   ],
  //   solutions: [
  //     'Barge Loaders',
  //     'Bulk Reception Units',
  //     'Mobile Hoppers',
  //     'Port Conveyors',
  //     'Marine Equipment'
  //   ]
  // },
  // stackerReclaimer: {
  //   title: 'Stacker Reclaimer Systems',
  //   description: 'Complete stacker and reclaimer systems for bulk material storage and retrieval operations.',
  //   imageSrc: '/images/machines/stacker-reclaimer.jpg',
  //   category: 'Storage Equipment',
  //   benefits: [
  //     'Combined stacker and reclaimer functionality',
  //     'High-capacity stacking and reclaiming',
  //     'Automated boom positioning',
  //     'Weather-resistant construction',
  //     'Remote monitoring and control'
  //   ],
  //   solutions: [
  //     'Stackers',
  //     'Reclaimers',
  //     'Combined Systems',
  //     'Boom Assemblies',
  //     'Control Systems'
  //   ]
  // },
  // specializedConveyors: {
  //   title: 'Specialized Conveyors',
  //   description: 'Steep angle conveyors, pipe conveyors, and screw conveyors for challenging material handling applications.',
  //   imageSrc: '/images/machines/specialized-conveyor.webp',
  //   category: 'Specialized Equipment',
  //   benefits: [
  //     'Steep angle conveyors up to 45°',
  //     'Pipe conveyors for enclosed transport',
  //     'Screw conveyors for fine materials',
  //     'Corrugated sidewalls for steep applications',
  //     'Flexible design for various applications'
  //   ],
  //   solutions: [
  //     'Steep Angle Conveyors',
  //     'Pipe Conveyors',
  //     'Screw Conveyors',
  //     'Sidewall Systems',
  //     'Specialized Components'
  //   ]
  // }
}

export default industries
