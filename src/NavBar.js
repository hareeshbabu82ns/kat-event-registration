import React from "react";
import {
  Box, Heading, Flex, Button, IconButton, useColorMode,
  chakra, useColorModeValue,
} from "@chakra-ui/react";
import { Show, Hide } from 'baseui/icon'
import { useRecoilState } from 'recoil'

import NavLink from './components/NavLink'

import { themeMode } from './state/globals'

const NavBarContent = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const [currentTheme, setCurrentTheme] = useRecoilState(themeMode)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="md">
          Chakra UI
        </Heading>
      </Flex>

      <Button display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill={useColorModeValue("black", "white")}
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Button>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: 4, md: 0 }}
        alignItems="center"
        flexGrow={1}
      >
        <NavLink href='/docs' isActive>Docs</NavLink>
        <NavLink href='#'>Examples</NavLink>
        <NavLink href='#'>Blog</NavLink>
      </Box>

      <Box
        display={{ base: show ? "flex" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <IconButton icon={currentTheme === 'light' ? <Show /> : <Hide />} bg="transparent"
          onClick={() => {
            setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
          }} />
      </Box>
    </Flex>
  );
};
export const NAV_BAR_HEIGHT = '4.5rem'

function NavBar(props) {
  const bg = useColorModeValue("brand.700", "brand.a100")
  const ref = React.useRef()
  // const [y, setY] = React.useState(0)
  // const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  // const { scrollY } = useViewportScroll()
  // React.useEffect(() => {
  //   return scrollY.onChange(() => setY(scrollY.get()))
  // }, [scrollY])

  return (
    <chakra.header
      ref={ref}
      // shadow={y > height ? "sm" : undefined}
      shadow="sm"
      transition="box-shadow 0.2s"
      pos="fixed"
      top="0"
      zIndex="1"
      bg={bg}
      left="0"
      right="0"
      // borderTop="6px solid"
      // borderTopColor="teal.400"
      width="full"
      {...props}
    >
      <chakra.div height={NAV_BAR_HEIGHT} mx="auto" >
        <NavBarContent bg={bg} />
      </chakra.div>
    </chakra.header>
  )
}

export default NavBar;