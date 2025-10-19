import { BrandData, Product } from './product-types'

// Import Spareng product data based on actual PDF content and systematic Task Master execution
import { conveyorPartsData } from './conveyor-parts'
import { crushersData } from './crushers'
import { vibratingScreensData } from './vibrating-screens'
import { flipFlowScreenData } from './flip-flow-screen'
import { linearMotionScreenData } from './linear-motion-screen'
import { grizzlyScreenData } from './grizzly-screen'
import { mechanicalVibroFeederData } from './mechanical-vibro-feeder'
import { sizerSugarGraderData } from './sizer-sugar-grader'
import { screwConveyorData } from './screw-conveyor'
import { rotaryAirLockValveData } from './rotary-air-lock-valve'
import { bulkReceptionUnitData } from './bulk-reception-unit'
import { pipeConveyorData } from './pipe-conveyor'
import { bogieData } from './bogie'
import { mobileHopperData } from './mobile-hopper'
import { bargeLoaderData } from './barge-loader'
import { reclaimFeederData } from './reclaim-feeder'
import { dustExtractionSystemsData } from './dust-extraction-systems'
import { dustSuppressionSystemsData } from './dust-suppression-systems'
import { pneumaticHandlingSystemsData } from './pneumatic-handling-systems'
import { driveBaseAssemblyData } from './drive-base-assembly'
import { steepAngleSidewallConveyorsData } from './steep-angle-sidewall-conveyors'
import { spillageDribbleConveyorsData } from './spillage-dribble-conveyors'
// import { stackerScraperReclaimerData } from './stacker-scraper-reclaimer'
import { prismGateFlowDiverterData } from './prism-gate-flow-diverter'

// Export product types
export * from './product-types'
export * from './conveyor-parts'
export * from './crushers'
export * from './vibrating-screens'
export * from './flip-flow-screen'
export * from './linear-motion-screen'
export * from './grizzly-screen'
export * from './mechanical-vibro-feeder'
export * from './sizer-sugar-grader'
export * from './screw-conveyor'
export * from './rotary-air-lock-valve'
export * from './bulk-reception-unit'
export * from './pipe-conveyor'
export * from './bogie'
export * from './mobile-hopper'
export * from './barge-loader'
export * from './reclaim-feeder'
export * from './dust-extraction-systems'
export * from './dust-suppression-systems'
export * from './pneumatic-handling-systems'
export * from './drive-base-assembly'
export * from './steep-angle-sidewall-conveyors'
export * from './spillage-dribble-conveyors'
// export * from './stacker-scraper-reclaimer'
export * from './prism-gate-flow-diverter'

// Combined product data from all categories - now includes 24 comprehensive product lines
export const allBrands: BrandData[] = [
  conveyorPartsData,
  crushersData,
  vibratingScreensData,
  flipFlowScreenData,
  linearMotionScreenData,
  grizzlyScreenData,
  mechanicalVibroFeederData,
  sizerSugarGraderData,
  screwConveyorData,
  rotaryAirLockValveData,
  bulkReceptionUnitData,
  pipeConveyorData,
  bogieData,
  mobileHopperData,
  bargeLoaderData,
  reclaimFeederData,
  dustExtractionSystemsData,
  dustSuppressionSystemsData,
  pneumaticHandlingSystemsData,
  driveBaseAssemblyData,
  steepAngleSidewallConveyorsData,
  spillageDribbleConveyorsData,
  // stackerScraperReclaimerData,
  prismGateFlowDiverterData,
]

// All products combined - comprehensive collection from all 24 categories
export const allProducts: Product[] = [
  ...conveyorPartsData.products,
  ...crushersData.products,
  ...vibratingScreensData.products,
  ...flipFlowScreenData.products,
  ...linearMotionScreenData.products,
  ...grizzlyScreenData.products,
  ...mechanicalVibroFeederData.products,
  ...sizerSugarGraderData.products,
  ...screwConveyorData.products,
  ...rotaryAirLockValveData.products,
  ...bulkReceptionUnitData.products,
  ...pipeConveyorData.products,
  ...bogieData.products,
  ...mobileHopperData.products,
  ...bargeLoaderData.products,
  ...reclaimFeederData.products,
  ...dustExtractionSystemsData.products,
  ...dustSuppressionSystemsData.products,
  ...pneumaticHandlingSystemsData.products,
  ...driveBaseAssemblyData.products,
  ...steepAngleSidewallConveyorsData.products,
  ...spillageDribbleConveyorsData.products,
  // ...stackerScraperReclaimerData.products,
  ...prismGateFlowDiverterData.products,
]

// Get products by category - handles both string and string[] categories
export const getProductsByCategory = (category: string) => {
  return allProducts.filter(product => {
    if (Array.isArray(product.category)) {
      return product.category.some(cat => cat.toLowerCase() === category.toLowerCase())
    }
    return product.category.toLowerCase() === category.toLowerCase()
  })
}

// Get all unique categories - handles both string and string[] categories
export const getAllCategories = () => {
  const categories = new Set<string>()
  
  allProducts.forEach(product => {
    if (Array.isArray(product.category)) {
      product.category.forEach(cat => categories.add(cat))
    } else {
      categories.add(product.category)
    }
  })
  
  return Array.from(categories)
}


// Search products
export const searchProducts = (query: string) => {
  const searchTerm = query.toLowerCase()
  return allProducts.filter(product => {
    const productName = product.title || ''
    const productTags = product.tags || []
    const productFeatures = product.features || []
    const productApplications = product.applications || []
    
    return productName.toLowerCase().includes(searchTerm) ||
      (Array.isArray(product.category) 
        ? product.category.some(cat => cat.toLowerCase().includes(searchTerm))
        : product.category.toLowerCase().includes(searchTerm)) ||
      productFeatures.some(feature => feature.toLowerCase().includes(searchTerm)) ||
      productTags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      (product.subcategory && product.subcategory.toLowerCase().includes(searchTerm)) ||
      (product.model && product.model.toLowerCase().includes(searchTerm)) ||
      (product.sku && product.sku.toLowerCase().includes(searchTerm)) ||
      productApplications.some(app => app.toLowerCase().includes(searchTerm))
  })
}

// Get products by subcategory
export const getProductsBySubcategory = (subcategory: string) => {
  return allProducts.filter(product =>
    product.subcategory && product.subcategory.toLowerCase() === subcategory.toLowerCase()
  )
}

// Get all unique subcategories
export const getAllSubcategories = () => {
  const subcategories = new Set(
    allProducts
      .filter(product => product.subcategory)
      .map(product => product.subcategory!)
  )
  return Array.from(subcategories)
}

// Get featured products (first 3 from each major category)
export const getFeaturedProducts = (): Product[] => {
  const featured: Product[] = []
  for (const brand of allBrands) {
    featured.push(...brand.products.slice(0, 3))
  }
  return featured
}

// Get product by ID
export const getProductById = (id: string) => {
  return allProducts.find(product => product.id === id)
}

// Get related products (same category, different subcategory)
export const getRelatedProducts = (productId: string, limit: number = 4) => {
  const product = getProductById(productId)
  if (!product) return []

  const productCategories = Array.isArray(product.category) ? product.category : [product.category]

  return allProducts
    .filter(p => {
      if (p.id === productId) return false
      
      const pCategories = Array.isArray(p.category) ? p.category : [p.category]
      const hasCommonCategory = productCategories.some(cat => pCategories.includes(cat))
      const hasDifferentSubcategory = p.subcategory !== product.subcategory
      
      return hasCommonCategory && hasDifferentSubcategory
    })
    .slice(0, limit)
}

// Get products statistics
export const getProductStats = () => {
  return {
    totalProducts: allProducts.length,
    totalCategories: getAllCategories().length,
    totalSubcategories: getAllSubcategories().length,
    totalBrands: allBrands.length,
    productsByCategory: getAllCategories().map(category => ({
      category,
      count: getProductsByCategory(category).length
    }))
  }
}