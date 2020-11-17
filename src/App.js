import { Box } from "@chakra-ui/react"

import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

import NavBar, { NAV_BAR_HEIGHT } from './NavBar'
import FormExample from './examples/form-hook-example'
import ExAddCard from './examples/AddCard'
import ExAirbnbCard from './examples/AirbnbCard'

function App() {
  const [css, theme] = useStyletron();

  return (
    <Block
      backgroundColor="backgroundPrimary"
      color="contentPrimary"
      height="100%"
    >
      <NavBar />
      <FlexGrid
        padding='scale600'
        flexGridColumnCount={[1, 1, 1, 2]}
        flexGridColumnGap='scale800'
        marginTop={NAV_BAR_HEIGHT}>
        <FlexGridItem overrides={{
          Block: {
            style: ({ $theme }) => ({
              flexGrow: 0,
            }),
          },
        }}>
          <ExAddCard />
          <ExAirbnbCard />
        </FlexGridItem>
        <FlexGridItem overrides={{
          Block: {
            style: ({ $theme }) => ({
              flexGrow: 1,
            }),
          },
        }}>
          <Block marginTop={['scale800', 'scale800', 'scale800', 0]}>
            <FormExample />
          </Block>
        </FlexGridItem>
      </FlexGrid>
    </Block>
  );
}

export default App;


