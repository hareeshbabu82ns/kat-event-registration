import React from 'react'
import {
  chakra,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'

import RDatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css';
import './react-date-picker.css'

const CustomInput = ({ inputOptions, value, onClick }) => {
  return inputOptions?.as === 'button' ?
    (
      <Button rightIcon={<CalendarIcon />}
        onClick={onClick}
        sx={inputOptions} {...inputOptions} type='button'>
        {value}
      </Button>
    ) :
    (
      <InputGroup>
        <Input sx={inputOptions} value={value} onClick={onClick}  {...inputOptions} />
        <InputRightElement children={<CalendarIcon />} />
      </InputGroup>
    )
};

const Picker = ({ inputOptions, ...props }) => {
  return (
    <div className='rdate-picker'>
      <RDatePicker
        {...props}
        customInput={<CustomInput inputOptions={inputOptions} />}
      />
    </div>
  )
}

const ReactDatePicker = chakra(Picker)
export default ReactDatePicker