import logo from './logo.svg';
import './App.css';

import { Box, Image, Text, Link } from "@chakra-ui/core"

import NavBar from './NavBar'
import FormExample from './form_example'

function App() {
  return (
    <>
      <NavBar />
      <Box p={4} display={{ md: "flex" }} bg="gray.200">
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
    </>
  );
}

export default App;
