import React from 'react'
import { Image, Box, Text, Spacer } from '@chakra-ui/react'

const ExAddCard = () => {

  return (
    <Box maxW='lg' bg='blue.800' p='1rem' d='flex' >
      <Image
        width='150px'
        src="https://bit.ly/2jYM25F"
        alt="Woman paying for a purchase"
      />
      <Box ml='4' d='flex' flexDir='column'>
        <Text color='gray.200' fontSize='sm'>Ship your code to production in just a few clicks. Get $100 free credit</Text>
        <Spacer />
        <Text color='gray.400' fontSize='.7em'
          textTransform='uppercase'
        >Ads Via Carbon</Text>
      </Box>
    </Box>
  )
}

export default ExAddCard