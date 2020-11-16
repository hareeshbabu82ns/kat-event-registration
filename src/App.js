import { Box } from "@chakra-ui/react"
import NavBar, { NAV_BAR_HEIGHT } from './NavBar'
import FormExample from './examples/form-hook-example'
// import FormExample from './examples/form-example'
import SkipNavLink from './utils/SkipNavLink'
import SkipNavContent from './utils/SkipNavContent'
import ExAddCard from './examples/AddCard'
import ExAirbnbCard from './examples/AirbnbCard'

function App() {
  return (
    <>
      <SkipNavLink zIndex={20}>Skip to Content</SkipNavLink>
      <NavBar />
      <div style={{ flex: 1 }}>
        <SkipNavContent />
        <Box mt={NAV_BAR_HEIGHT} p={4} display={{ md: "flex" }}>
          <Box flexShrink="0">
            <ExAddCard />
            <ExAirbnbCard />
          </Box>
          <Box flexGrow='1' mt={{ base: 8, md: 0 }} ml={{ md: 8 }}>
            <FormExample />
          </Box>
        </Box>
      </div>
    </>
  );
}

export default App;


