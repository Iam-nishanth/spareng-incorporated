import {
  Box,
  CloseButton,
  Divider,
  Flex,
  HStack,
  IconButton,
  IconButtonProps,
  LinkProps,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useUpdateEffect,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import useRouteChanged from 'hooks/use-route-changed'
import { usePathname } from 'next/navigation'
import { AiOutlineMenu } from 'react-icons/ai'
import { RemoveScroll } from 'react-remove-scroll'

import * as React from 'react'

import { Logo } from '#components/layout/logo'
import siteConfig from '#data/config'

interface NavLinkProps extends LinkProps {
  label: string
  href?: string
  isActive?: boolean
}

function NavLink({ href, children, isActive, ...rest }: NavLinkProps) {
  const pathname = usePathname()
  // CTA-style links (variant="primary") are actions, not nav items — never mark active
  const isCta = (rest as any).variant === 'primary'
  isActive = isActive ?? (!isCta && pathname === href)

  const activeColor = useColorModeValue('primary.600', 'primary.300')
  const defaultColor = useColorModeValue('gray.700', 'gray.200')
  const activeBg = useColorModeValue('primary.50', 'whiteAlpha.100')
  const hoverBg = useColorModeValue('gray.50', 'whiteAlpha.50')
  const hoverColor = useColorModeValue('primary.600', 'primary.300')
  const borderColor = useColorModeValue('gray.100', 'whiteAlpha.100')

  return (
    <Link
      href={href}
      display="flex"
      alignItems="center"
      px="15px"
      py="2"
      fontSize="md"
      fontWeight={isActive ? 'semibold' : 'medium'}
      color={isActive ? activeColor : defaultColor}
      bg={isActive ? activeBg : 'transparent'}
      borderBottomWidth="1px"
      borderColor={borderColor}
      transition="background 0.15s, color 0.15s"
      _hover={{
        bg: isActive ? activeBg : hoverBg,
        color: isActive ? activeColor : hoverColor,
        textDecoration: 'none',
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}

interface MobileNavContentProps {
  isOpen?: boolean
  onClose?: () => void
}

export function MobileNavContent(props: MobileNavContentProps) {
  const { isOpen, onClose = () => {} } = props
  const closeBtnRef = React.useRef<HTMLButtonElement>(null)
  const bgColor = useColorModeValue(
    'rgba(255, 255, 255, 0.97)',
    'rgba(17, 19, 24, 0.97)',
  )
  const borderColor = useColorModeValue('gray.100', 'whiteAlpha.100')

  useRouteChanged(onClose)

  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false })

  React.useEffect(() => {
    if (showOnBreakpoint == false) {
      onClose()
    }
  }, [showOnBreakpoint, onClose])

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus()
      })
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <RemoveScroll forwardProps>
          <Flex
            direction="column"
            w="100%"
            bg={bgColor}
            h="100vh"
            overflow="auto"
            pos="absolute"
            inset="0"
            zIndex="modal"
            backdropFilter="blur(12px)"
          >
            {/* Top bar — matches header layout exactly */}
            <Flex
              justify="space-between"
              align="center"
              px="15px"
              
              borderBottomWidth="1px"
              borderColor={borderColor}
              minH="64px"
            >
              <Logo />
              <CloseButton ref={closeBtnRef} onClick={onClose} size="md" />
            </Flex>

            {/* Nav links */}
            <Stack spacing="0" flex="1">
              {siteConfig.header.links.map(
                ({ href, id, label, ...rest }, i) => (
                  <NavLink
                    href={href || `/${id}`}
                    key={i}
                    label={label}
                    {...(rest as any)}
                  >
                    {label}
                  </NavLink>
                ),
              )}
            </Stack>
          </Flex>
        </RemoveScroll>
      )}
    </>
  )
}

export const MobileNavButton = React.forwardRef(
  (props: IconButtonProps, ref: React.Ref<any>) => {
    return (
      <IconButton
        ref={ref}
        display={{ base: 'flex', md: 'none' }}
        fontSize="20px"
        color={useColorModeValue('gray.800', 'inherit')}
        variant="ghost"
        icon={<AiOutlineMenu />}
        {...props}
        aria-label="Open menu"
      />
    )
  },
)

MobileNavButton.displayName = 'MobileNavButton'
