import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  FormLabel,
  FormControl,
  Input,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  HStack,
  Stack,
} from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'

import DropdownSelect from './components/DropdownSelect'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const FormExampleFieldControl = () => {
  const [state, setState] = useState({ quantity: '2', gender: 'other' })
  const { colorMode } = useColorMode()

  const handleQuantityChange = (quantity) => setState({ ...state, quantity })
  const handleGenderChange = (e) => setState({ ...state, gender: e.target.value })

  return (
    <Stack as='form' spacing='3'
      onSubmit={(e) => { console.log(state); e.preventDefault() }}>

      <Stack direction={{ base: "column", md: "row" }} spacing="2">
        <FormControl id="firstName" isRequired>
          <FormLabel>First name</FormLabel>
          <Input type="text" placeholder='First name' />
        </FormControl>

        <FormControl id="lastName">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder='Last name' />
        </FormControl>

        <FormControl id="gender" >
          <FormLabel>Gender</FormLabel>
          <Select placeholder='Gender' value={state.gender} isReadOnly
            onChange={handleGenderChange}>
            {options && options.map(option =>
              (<option key={option.key} value={option.value}>{option.text}</option>))}
          </Select>
        </FormControl>
      </Stack>

      <FormControl id="genderSelect">
        <DropdownSelect items={options} />
      </FormControl>

      <FormControl as='fieldset'>
        <HStack>
          <FormLabel as='legend'>Quantity</FormLabel>
          <RadioGroup
            value={state.quantity} onChange={handleQuantityChange}>
            <HStack spacing="24px">
              <Radio value="1">One</Radio>
              <Radio value="2">Two</Radio>
              <Radio value="3">Three</Radio>
            </HStack>
          </RadioGroup>
        </HStack>
      </FormControl>

      <FormControl id="about">
        <FormLabel>About</FormLabel>
        <Textarea placeholder='Tell us more about you...' />
      </FormControl>

      <FormControl id="agree">
        <Checkbox colorScheme='red'>I agree to the Terms and Conditions</Checkbox>
      </FormControl>

      <Button type='submit' colorScheme='teal'>Submit</Button>

    </Stack>
  )
}

export default FormExampleFieldControl