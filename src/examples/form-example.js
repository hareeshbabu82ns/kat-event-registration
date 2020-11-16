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
// import { useColorMode } from '@chakra-ui/react'

// import DropdownSelect from './components/DropdownSelect'
// import ComboboxSelect from './components/ComboboxSelect'
import ReactSelect from '../components/ReactSelect'
import ReactDatePicker from '../components/ReactDatePicker'


// const options = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
//   { key: 'o', text: 'Other', value: 'other' },
// ]
const options = [
  { key: 'm', text: 'Male', value: 'male', label: 'Male' },
  { key: 'f', text: 'Female', value: 'female', label: 'Female' },
  { key: 'o', text: 'Other', value: 'other', label: 'Other' },
]
// const options = Array(10).fill('').map((_, index) => ({ key: `${index}`, text: `Item ${index}`, value: `item_${index}`, label: `Item ${index}` }))


const FormExampleFieldControl = () => {
  const [state, setState] = useState({ quantity: '2', gender: 'other', dob: new Date() })
  // const { colorMode } = useColorMode()

  const handleQuantityChange = (quantity) => setState({ ...state, quantity })
  const handleGenderChange = (e) => setState({ ...state, gender: e.target.value })
  const handleRGenderChange = (d) => setState({ ...state, gender: d.value })
  const handleDobChange = (d) => setState({ ...state, dob: d })

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
      <Stack direction={{ base: "column", md: "row" }} spacing="2">
        <FormControl id="genderRSelect">
          <FormLabel>Gender</FormLabel>
          <ReactSelect options={options} value={options.find((el) => (el.value === state.gender))} onChange={handleRGenderChange} />
        </FormControl>
        <FormControl id="dob">
          <FormLabel>Date Of Birth</FormLabel>
          <ReactDatePicker selected={state.dob}
            showTimeSelect
            dateFormat="MM/dd/yyyy HH:mm"
            onChange={handleDobChange} />
        </FormControl>
      </Stack>

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