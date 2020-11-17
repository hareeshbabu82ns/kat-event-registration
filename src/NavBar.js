import React from "react";
import {
  Box, Heading, Flex, IconButton, useColorMode,
  chakra, useColorModeValue,
} from "@chakra-ui/react";
import { useStyletron } from 'baseui';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { Button, SHAPE } from "baseui/button";
import { Show, Hide } from 'baseui/icon'
import { useRecoilState } from 'recoil'

import NavLink from './components/NavLink'

import { themeMode } from './state/globals'

export const NAV_BAR_HEIGHT = '4.5rem'

function NavBar(props) {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeMode)
  const [css] = useStyletron()
  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem><h3 className={css({ color: 'teal' })}>UberUI</h3></StyledNavigationItem>
      </StyledNavigationList>

      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <StyledLink href="/docs">
            Docs
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="#">
            Examples
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="#">
            Blog
          </StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button shape={SHAPE.round}
            overrides={{
              BaseButton: {
                style: (({ $theme }) => ({
                  color: $theme.colors.primary,
                  backgroundColor: 'transparent'
                }))
              }
            }}
            onClick={() => {
              setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
            }} >
            {currentTheme === 'light' ? <Show /> : <Hide />}
          </Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  )
}

export default NavBar;