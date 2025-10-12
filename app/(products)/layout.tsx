import { MarketingLayout } from '#components/layout'
import { Box } from '@chakra-ui/react'

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MarketingLayout noFooter>
      <Box minH="100vh" display="flex" flexDirection="column">
        {children}
      </Box>
    </MarketingLayout>
  )
}
