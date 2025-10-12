// Product specifications interface for MHE spare parts
export interface ProductSpecifications {
  // Physical dimensions
  dimensions?: string
  thickness?: string
  weight?: string
  
  // Material properties
  material?: string
  hardness?: string
  density?: string
  
  // Mechanical properties
  load_capacity?: string
  tensile_strength?: string
  bearing_type?: string
  operating_speed?: string
  
  // Operating conditions
  temperature_range?: string
  operating_cycles?: string
  pressure_resistance?: string
  
  // Performance characteristics
  wear_resistance?: string
  chemical_resistance?: string
  impact_resistance?: string
  
  // Electrical (for switches and controls)
  voltage?: string
  current_rating?: string
  contact_rating?: string
  protection_class?: string
  
  // Belt specific
  belt_width?: string
  plies?: string
  cover_grade?: string
  cover_material?: string
  
  // Mounting and installation
  mounting_type?: string
  mounting_holes?: string
  finish?: string
  installation?: string
  surface_finish?: string
  
  // Additional wire and power specifications
  wire_diameter?: string
  power_requirements?: string
  
  // Quality and compliance
  certifications?: string[]
  standards?: string[]
  
  // Additional specifications
  rubber_hardness?: string
  rubber_thickness?: string
  steel_cord_diameter?: string
  blade_thickness?: string
  blade_segments?: string
  tip_hardness?: string
  segments?: string
  capacity_range?: string
  screen_opening?: string
  vibration_frequency?: string
  
  // Roller and pulley specifications
  roller_diameter?: string
  shaft_diameter?: string
  pulley_diameter?: string
  face_width?: string
  lagging_type?: string
  shaft_size?: string
  
  // Control and sensor specifications
  sensing_range?: string
  output_type?: string
  power_supply?: string
  response_time?: string
  operating_temperature?: string
  actuation_force?: string
  reset_type?: string
  cable_length?: string
  cable_tension?: string
  control_voltage?: string
  display_type?: string
  communication?: string
  safety_rating?: string
  
  // Material and surface properties
  blade_material?: string
  blade_width?: string
  surface_type?: string
  tile_size?: string
  width?: string
  angle_adjustment?: string
  cleat_height?: string
  
  // Magnetic and detection properties
  magnetic_strength?: string
  magnet_type?: string
  detection_capability?: string
  accuracy?: string
  
  // Housing and construction
  housing_material?: string
  housing_type?: string
  bore_diameter?: string
  diameter?: string
  
  // Chain and coupling specifications
  chain_type?: string
  coupling_type?: string
  torque_capacity?: string
  misalignment_capability?: string
  
  // Feeder and handling specifications
  trough_width?: string
  trough_length?: string
  drive_type?: string
  amplitude?: string
  frequency?: string
  capacity?: string
  
  // Material properties
  impact_strength?: string
  coefficient_of_friction?: string
  attachment_type?: string
  pressure_differential?: string
  efficiency?: string
  
  // Switch and control types
  switch_types?: string
  voltage_rating?: string
  contact_configuration?: string
  
  // Power specifications
  power_range?: string
  speed_rating?: string
  
  // Additional material and construction specifications
  shell_material?: string
  compatibility?: string
  cleat_angle?: string
  adhesive?: string
  adjustment?: string
  profile?: string
  shaft_material?: string
  angle_capability?: string
  deflection_angle?: string
  wall_thickness?: string
  lagging_thickness?: string
  lagging_pattern?: string
  ceramic_type?: string
  suspension_height?: string
  separation_width?: string
  suspension_type?: string
  aperture_size?: string
  belt_speed?: string
  load_cell_type?: string
  edge_reinforcement?: string  
  pitch?: string
  lubrication?: string
  rotor_material?: string
  gear_ratio?: string
  sensitivity?: string
  output_signals?: string
  output_speed?: string
  rubber_type?: string
  tile_thickness?: string
  cleaning_method?: string
  cleaning_system?: string
  filtration_area?: string
  air_volume?: string
  filtration_efficiency?: string
  bag_material?: string
  media_type?: string
  pressure_drop?: string
  cartridge_area?: string
  venturi_diameter?: string
  wire_spacing?: string
  air_consumption?: string
  pulse_pressure?: string
  construction?: string
  connection_size?: string
  flow_rate?: string
  spray_angle?: string
  droplet_size?: string
  compressor_type?: string
  cooling_system?: string
  control_system?: string
  noise_level?: string
  pressure_rating?: string
  hose_diameter?: string
  length?: string
  end_fittings?: string
  valve_size?: string
  body_material?: string
  ball_material?: string
  actuator_type?: string
  bore_size?: string
  piston_rod?: string
  cylinder_body?: string
  seals?: string
  mounting?: string
  hopper_capacity?: string
  construction_material?: string
  mobility?: string
  discharge_system?: string
  power_source?: string
  hydraulic_system?: string
  operating_weight?: string
  loading_capacity?: string
  boom_length?: string
  conveyor_width?: string
  slewing_range?: string
  lifting_capacity?: string
  ultimate_strength?: string
  flight_thickness?: string
  sealing?: string
  inlet_outlet_size?: string
  working_load?: string
}

// Main product interface for MHE spare parts
export interface Product {
  id: string
  title: string
  model: string
  sku: string
  category: string | string[] // Can be single category or array for multiple categories
  subcategory?: string
  specifications?: ProductSpecifications
  features: string[]
  applications: string[]
  compatibleEquipment?: string[]
  tags: string[]
  image: string | string[]
  imageFit?: 'cover' | 'contain' | 'fill' | 'none'
  brand?: string
  heading?: string
  description?: string
  technicalDrawing?: string
  dataSheet?: string
  partNumber?: string
}

// Brand data structure
export interface BrandData {
  brand: string
  description: string
  website: string
  products: Product[]
}

// MHE Categories enumeration
export enum MHECategory {
  CONVEYOR_COMPONENTS = "Conveyor Components",
  PULLEYS_DRUMS = "Pulleys & Drums",
  SAFETY_CONTROL = "Safety & Control Systems", 
  CRUSHING_SCREENING = "Crushing & Screening",
  MATERIAL_HANDLING = "Material Handling"
}
