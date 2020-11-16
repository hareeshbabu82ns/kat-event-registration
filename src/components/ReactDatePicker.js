import React from 'react'
import {
  chakra,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'

import RDatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css';
import './react-date-picker.css'

const CustomInput = ({ inputOptions, value, onClick }) => (
  <InputGroup>
    <Input {...inputOptions} value={value} onClick={onClick} />
    <InputRightElement children={<CalendarIcon />} />
  </InputGroup>
);

const Picker = ({ ...props }) => {
  return (
    <div className='rdate-picker'>
      <RDatePicker
        {...props}
        customInput={<CustomInput />}
      />
    </div>
  )
}

const ReactDatePicker = chakra(Picker)
export default ReactDatePicker