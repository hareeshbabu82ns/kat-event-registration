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
  useToast,
} from '@chakra-ui/react'
// import { useColorMode } from '@chakra-ui/react'
import { useForm, Controller } from 'react-hook-form'
// import DropdownSelect from './components/DropdownSelect'
// import ComboboxSelect from './components/ComboboxSelect'
import ReactSelect from '../components/ReactSelect'
import ReactDatePicker from '../components/ReactDatePicker'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const options = [
  { key: 'm', value: 'male', label: 'Male' },
  { key: 'f', value: 'female', label: 'Female' },
  { key: 'o', value: 'other', label: 'Other' },
]
// const options = Array(10).fill('').map((_, index) => ({ key: `${index}`, text: `Item ${index}`, value: `item_${index}`, label: `Item ${index}` }))

const schema = yup.object().shape({
  firstName: yup.string().required().min(5),
  dob: yup.date().required(),
  genderRSelect: yup.object({
    key: yup.string().required(),
    value: yup.string().required(),
  }).required(),
});

const FormExampleFieldControl = () => {
  const toast = useToast()
  const defaultValues = {
    firstName: 'test',
    gender: 'other',
    // genderRSelect: options[2],
    genderRSelect: '',
    dob: new Date(),
    legend: '1',
  }
  const { register, control, handleSubmit, errors } = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  })

  React.useEffect(() => {
    if (errors) {
      toast.closeAll()
      Object.keys(errors).forEach((errField) => {
        const err = errors[errField]
        toast({
          description: err.message,
          status: 'error'
        })
      })
    }

    console.log(errors)
  }, [errors])
  const onSubmit = (data) => { console.log(data); }

  return (
    <Stack as='form' spacing='3'
      onSubmit={handleSubmit(onSubmit)}>

      <Stack direction={{ base: "column", md: "row" }} spacing="2">
        <FormControl id="firstName" isRequired
          isInvalid={errors.firstName}>
          <FormLabel>First name</FormLabel>
          <Input type="text" placeholder='First name'
            name='firstName' ref={register} />
        </FormControl>

        <FormControl id="lastName">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder='Last name'
            name='lastName' ref={register} />
        </FormControl>

        <FormControl id="gender" >
          <FormLabel>Gender</FormLabel>
          <Select placeholder='Select Gender...'
            name='gender' ref={register}>
            {options && options.map(option =>
              (<option key={option.key} value={option.value}>{option.label}</option>))}
          </Select>
        </FormControl>
      </Stack>
      <Stack direction={{ base: "column", md: "row" }} spacing="2">
        <FormControl id="genderRSelect"
          isInvalid={errors.genderRSelect}>
          <FormLabel>Gender</FormLabel>
          <Controller as={ReactSelect} options={options}
            defaultValue={defaultValues.genderRSelect}
            isInvalid={errors.genderRSelect}
            name='genderRSelect' control={control} />
        </FormControl>
        <FormControl id="dob">
          <FormLabel>Date Of Birth</FormLabel>
          <Controller
            name="dob" control={control}
            render={({ onChange, value }) => (
              <ReactDatePicker
                defaultValue={defaultValues.dob}
                selected={value}
                showTimeSelect
                dateFormat="MM/dd/yyyy HH:mm"
                onChange={onChange}
                inputOptions={{
                  as: 'button',
                  w: 'full',
                  variant: 'outline',
                  colorScheme: "teal",
                  inInvalid: errors.genderRSelect
                  // borderColor: errors.genderRSelect ? 'red.500' : 'inherit',
                }} />
            )}
          />
        </FormControl>
      </Stack>

      <FormControl as='fieldset'>
        <HStack>
          <FormLabel as='legend'>Quantity</FormLabel>
          <RadioGroup
            defaultValue={defaultValues.legend}
          >
            <HStack spacing="24px">
              <Radio value="1" name='legend' ref={register}>One</Radio>
              <Radio value="2" name='legend' ref={register}>Two</Radio>
              <Radio value="3" name='legend' ref={register}>Three</Radio>
            </HStack>
          </RadioGroup>
        </HStack>
      </FormControl>

      <FormControl id="about">
        <FormLabel>About</FormLabel>
        <Textarea placeholder='Tell us more about you...'
          name='about' ref={register}
        />
      </FormControl>

      <FormControl id="agree" isRequired>
        <Checkbox colorScheme='red' isRequired
          name='agree' ref={register}>I agree to the Terms and Conditions</Checkbox>
      </FormControl>

      <Button type='submit' colorScheme='teal'>Submit</Button>

    </Stack>
  )
}

export default FormExampleFieldControl