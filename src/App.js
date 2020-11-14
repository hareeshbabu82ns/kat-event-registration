import { Box, Image, useColorModeValue } from "@chakra-ui/react"
import NavBar, { NAV_BAR_HEIGHT } from './NavBar'
import FormExample from './form_example'
import SkipNavLink from './utils/SkipNavLink'
import SkipNavContent from './utils/SkipNavContent'

function App() {
  return (
    <>
      <SkipNavLink zIndex={20}>Skip to Content</SkipNavLink>
      <NavBar />
      <div style={{ flex: 1 }}>
        <SkipNavContent />
        <Box mt={NAV_BAR_HEIGHT} p={4} display={{ md: "flex" }} bg={useColorModeValue("gray.200", "gray.800")}>
          <Box flexShrink="0">
            <Image
              rounded="lg"
              width={{ md: 250 }}
              src="https://bit.ly/2jYM25F"
              alt="Woman paying for a purchase"
            />
          </Box>
          <Box mt={{ base: 8, md: 0 }} ml={{ md: 8 }}>
            <FormExample />
          </Box>
        </Box>
      </div>
    </>
  );
}

export default App;


