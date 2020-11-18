
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

import NavBar, { NAV_BAR_HEIGHT } from './NavBar'
import FormExample from './examples/form-hook-example'
import ExAddCard from './examples/AddCard'
import ExAirbnbCard from './examples/AirbnbCard'
import PasswordGen from './examples/password-generator'
import SkipToContent from './utils/SkipNavContent'

function App() {
  const [css, theme] = useStyletron();

  return (
    <>
      <SkipToContent />
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
          <PasswordGen />
          <Block height='scale800' />
          <ExAddCard />
          <Block height='scale800' />
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
    </>
  );
}

export default App;


