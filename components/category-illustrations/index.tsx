import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

interface CategoryIllustrationProps extends Omit<BoxProps, 'children'> {
  category: string
  size?: string
}

export const CategoryIllustration: React.FC<CategoryIllustrationProps> = ({ 
  category, 
  size = '48px',
  color,
  ...props 
}) => {
  const strokeColor = String(color || 'currentColor')
  const fillColor = String(color || 'currentColor')
  
  const illustrations: Record<string, React.ReactNode> = {
    'processing-equipment': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <rect x="8" y="16" width="32" height="24" rx="2" stroke={strokeColor} strokeWidth="2" fill="none"/>
        <path d="M12 16V12C12 10.8954 12.8954 10 14 10H34C35.1046 10 36 10.8954 36 12V16" stroke={strokeColor} strokeWidth="2"/>
        <circle cx="24" cy="28" r="6" stroke={strokeColor} strokeWidth="2"/>
        <path d="M24 22V34M18 28H30" stroke={strokeColor} strokeWidth="2"/>
      </svg>
    ),
    'conveyor-idlers': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <circle cx="16" cy="24" r="8" stroke={strokeColor} strokeWidth="2"/>
        <circle cx="16" cy="24" r="3" stroke={strokeColor} strokeWidth="2"/>
        <circle cx="32" cy="24" r="8" stroke={strokeColor} strokeWidth="2"/>
        <circle cx="32" cy="24" r="3" stroke={strokeColor} strokeWidth="2"/>
        <path d="M24 12V36" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'conveyor-pulleys': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <circle cx="24" cy="24" r="14" stroke={strokeColor} strokeWidth="2"/>
        <circle cx="24" cy="24" r="6" stroke={strokeColor} strokeWidth="2"/>
        <circle cx="24" cy="24" r="2" fill={fillColor}/>
        <path d="M24 10V14M24 34V38M10 24H14M34 24H38" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'crushing-equipment': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <path d="M12 36H36" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 36V20L24 12L32 20V36" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M20 28H28" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 32H28" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'feeding-equipment': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <path d="M8 16H40" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 16V36H40V16" stroke={strokeColor} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 24L24 32L32 24" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 8V16" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 12H28" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    'screening-equipment': (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
        <rect x="8" y="12" width="32" height="24" rx="2" stroke={strokeColor} strokeWidth="2"/>
        <path d="M8 18H40" stroke={strokeColor} strokeWidth="2"/>
        <path d="M8 24H40" stroke={strokeColor} strokeWidth="2"/>
        <path d="M8 30H40" stroke={strokeColor} strokeWidth="2"/>
        <circle cx="24" cy="42" r="2" fill={fillColor}/>
        <path d="M16 42L20 36H28L32 42" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  }

  return (
    <Box {...props}>
      {illustrations[category] || illustrations['processing-equipment']}
    </Box>
  )
}
