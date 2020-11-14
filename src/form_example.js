import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'
import { useColorMode } from '@chakra-ui/react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const FormExampleFieldControl = () => {
  const [state, setState] = useState({ value: '' })
  const { colorMode } = useColorMode()

  const handleChange = (e, { value }) => setState({ value })
  const { value } = state

  return (
    <Form inverted={colorMode === 'dark'}>
      <Form.Group widths='equal'>
        <Form.Field
          control={Input}
          label='First name'
          placeholder='First name'
        />
        <Form.Field
          control={Input}
          label='Last name'
          placeholder='Last name'
        />
        <Form.Field
          control={Select}
          label='Gender'
          options={options}
          placeholder='Gender'
        />
      </Form.Group>
      <Form.Group inline>
        <label>Quantity</label>
        <Form.Field
          control={Radio}
          label='One'
          value='1'
          checked={value === '1'}
          onChange={handleChange}
        />
        <Form.Field
          control={Radio}
          label='Two'
          value='2'
          checked={value === '2'}
          onChange={handleChange}
        />
        <Form.Field
          control={Radio}
          label='Three'
          value='3'
          checked={value === '3'}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label='About'
        placeholder='Tell us more about you...'
      />
      <Form.Field
        control={Checkbox}
        label='I agree to the Terms and Conditions'
      />
      <Form.Field control={Button}>Submit</Form.Field>
    </Form>
  )
}

export default FormExampleFieldControl