import React from "react";
import { useStyletron } from 'baseui';
import { Layer } from 'baseui/layer';

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import {
  ChevronDown,
  Delete,
  Overflow,
  Upload
} from "baseui/icon";
import {
  AppNavBar,
  setItemActive
} from "baseui/app-nav-bar";
import { StyledLink } from "baseui/link";
import { Button, SHAPE } from "baseui/button";
import { Show, Hide } from 'baseui/icon'
import { useRecoilState } from 'recoil'

import NavLink from './components/NavLink'

import { themeMode } from './state/globals'

export const NAV_BAR_HEIGHT = '4.5rem'




const CAppNavBar = () => {
  const [mainItems, setMainItems] = React.useState([
    { icon: Upload, label: "Main A" },
    {
      active: true,
      icon: ChevronDown,
      label: "Main B",
      navExitIcon: Delete,
      children: [
        { icon: Upload, label: "Secondary A" },
        { icon: Upload, label: "Secondary B" }
      ]
    }
  ]);
  return (
    <AppNavBar
      title="Title"
      mainItems={mainItems}
      onMainItemSelect={item => {
        setMainItems(prev => setItemActive(prev, item));
      }}
      username="Hareesh Polla"
      usernameSubtitle="5 Stars"
      userItems={[
        { icon: Overflow, label: "User A" },
        { icon: Overflow, label: "User B" }
      ]}
      onUserItemSelect={item => console.log(item)}
      overrides={{
        Root: {
          style: ({ $theme }) => {
            return {
              outline: `${$theme.colors.warning600} solid`,
              backgroundColor: $theme.colors.backgroundSecondary,
              height: NAV_BAR_HEIGHT
            };
          }
        },
      }}
    />
  );
}

function NavBar(props) {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeMode)
  const [css] = useStyletron()
  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: ({ $theme }) => {
            return {
              outline: `${$theme.colors.warning600} solid`,
              backgroundColor: $theme.colors.backgroundSecondary,
              height: NAV_BAR_HEIGHT
            };
          }
        },
      }}>
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

const StickyNavBar = () => {
  const [css] = useStyletron();

  return (
    <Layer>
      <div
        id='test'
        className={css({
          boxSizing: 'border-box',
          width: '100vw',
          position: 'fixed',
          top: '0',
          left: '0',
        })}
      >
        {/* <CAppNavBar /> */}
        <NavBar />
      </div>
    </Layer>
  )
}

export default StickyNavBar;