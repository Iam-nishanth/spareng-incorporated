'use client'

import { Box } from '@chakra-ui/react'

import { useEffect } from 'react'

import { Header } from '#components/layout/header'

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <Box
      h="100dvh"
      display="flex"
      flexDir="column"
      overflow="hidden"
      position="relative"
      bg="white"
      _dark={{ bg: 'gray.900' }}
    >
      <Header />
      <Box as="main" flex="1" overflow="hidden">
        {children}
      </Box>
    </Box>
  )
}
