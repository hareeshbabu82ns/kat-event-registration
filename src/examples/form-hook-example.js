import React, { useState } from 'react'
import { useStyletron } from 'baseui';

import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Select } from 'baseui/select';
import { RadioGroup, Radio, ALIGN } from "baseui/radio";
import { Textarea } from "baseui/textarea";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { Button, KIND } from "baseui/button";
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

import { DatePicker } from 'baseui/datepicker';
import { TimePicker } from 'baseui/timepicker';

import { useForm, Controller } from 'react-hook-form'
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
  // genderRSelect: yup.object({
  //   key: yup.string().required(),
  //   value: yup.string().required(),
  // }).required(),
  gender: yup.array().required(),
});

const FormExampleFieldControl = () => {
  const [css, theme] = useStyletron()

  const defaultValues = {
    firstName: 'tests',
    // gender: 'other',
    gender: [options[2]],
    // genderRSelect: '',
    dob: new Date(),
    legend: '2',
    agree: true,
    about: 'test',
  }
  const { register, control, handleSubmit, errors } = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  })

  React.useEffect(() => {
    if (errors) {
      // toast.closeAll()
      // Object.keys(errors).forEach((errField) => {
      //   const err = errors[errField]
      //   toast({
      //     description: err.message,
      //     status: 'error'
      //   })
      // })
    }

    console.log(errors)
  }, [errors])
  const onSubmit = (data) => { console.log(data); }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}>
      <FlexGrid flexGridColumnCount={1}
        flexGridColumnGap="scale800">
        <FlexGridItem>
          <FlexGrid
            flexGridColumnCount={[1, 3]} flexGridColumnGap="scale800">
            <FlexGridItem>
              <FormControl id="firstName"
                error={errors?.firstName?.message}
                label={() => 'First Name'}>
                <Input placeholder='First name'
                  name='firstName' inputRef={register} />
              </FormControl>
            </FlexGridItem>
            <FlexGridItem>
              <FormControl id="lastName"
                error={errors?.lastName?.message}
                label={() => 'Last Name'}>
                <Input placeholder='Last name'
                  name='lastName' inputRef={register} />
              </FormControl>
            </FlexGridItem>
            <FlexGridItem>
              <FormControl id="gender"
                error={errors?.gender?.message}
                label={() => 'Gender'}>
                <Controller
                  name="gender" control={control}
                  render={({ onChange, value }) => (
                    <Select
                      value={value}
                      error={errors?.gender?.message}
                      onChange={({ value }) => onChange(value)}
                      options={options}
                      labelKey='label' valueKey='value'
                    />
                  )}
                />
              </FormControl>
            </FlexGridItem>
          </FlexGrid>
        </FlexGridItem>
        <FlexGridItem>
          <FlexGrid flexGridColumnCount={[1, 1, 2]} flexGridColumnGap="scale800">
            <FlexGridItem>
              <FormControl id="dob" label="Date of Birth">
                <Controller
                  name="dob" control={control}
                  render={({ onChange, value }) => (
                    <DatePicker
                      value={value}
                      timeSelectStart
                      formatString="MM/dd/yyyy HH:mm"
                      onChange={({ date }) => onChange(date)}
                      overrides={{
                        CalendarHeader: {
                          style: ({ $theme }) => ({
                            backgroundColor: $theme.colors.positive,
                          })
                        },
                        MonthHeader: {
                          style: ({ $theme }) => ({
                            backgroundColor: $theme.colors.positive,
                          }),
                        },
                        MonthYearSelectButton: {
                          style: ({ $theme }) => ({
                            ':focus': {
                              backgroundColor: $theme.colors.positive500,
                              outline: 'none',
                            },
                          }),
                        },
                        Day: {
                          style: ({
                            $theme,
                            $selected,
                            $isHovered,
                            $isHighlighted,
                          }) => ({
                            color: $selected
                              ? $theme.colors.white
                              : $theme.colors.calendarForeground,
                            ':after': {
                              backgroundColor: $selected
                                ? $isHovered || $isHighlighted
                                  ? $theme.colors.positive500
                                  : $theme.colors.positive
                                : $isHovered || $isHighlighted
                                  ? $theme.colors.positive200
                                  : 'transparent',
                            },
                          }),
                        },
                      }}
                    />
                  )}
                />
              </FormControl>
            </FlexGridItem>
            <FlexGridItem>
              <FormControl id="dob" label="Date of Birth (Time)">
                <Controller
                  name="dob" control={control}
                  render={({ onChange, value }) => (
                    <TimePicker
                      value={value}
                      format="HH:mm"
                      onChange={onChange}
                    />
                  )}
                />
              </FormControl>
            </FlexGridItem>
          </FlexGrid>
        </FlexGridItem>
        <FlexGridItem>
          <FormControl id='legend' label="Legends">
            <Controller
              name="legend" control={control}
              render={({ onChange, value }) => (
                <RadioGroup
                  value={value}
                  onChange={e => onChange(e.target.value)}
                  align={ALIGN.horizontal}
                >
                  <Radio value="1">One</Radio>
                  <Radio value="2">Two</Radio>
                  <Radio value="3">Three</Radio>
                </RadioGroup>
              )}
            />
          </FormControl>
        </FlexGridItem>
        <FlexGridItem>
          <FormControl id="about" label="About">
            <Controller
              name='about' control={control}
              render={({ onChange, value }) => (
                <Textarea
                  value={value}
                  onChange={e => onChange(e.target.value)}
                  placeholder='Tell us more about you...'
                />
              )}
            />
          </FormControl>
        </FlexGridItem>
        <FlexGridItem>
          <FormControl id="agree" isRequired>
            <Controller
              name='agree' control={control}
              render={({ onChange, value }) => (
                <Checkbox
                  checked={value}
                  onChange={e => onChange(e.target.checked)}
                  labelPlacement={LABEL_PLACEMENT.right}>
                  I agree to the Terms and Conditions</Checkbox>
              )}
            />
          </FormControl>
        </FlexGridItem>
        <FlexGridItem>
          <Button kind={KIND.primary} type='submit'
            overrides={{
              BaseButton: {
                style: ({ $theme }) => {
                  return {
                    // outline: `${$theme.colors.primaryB} solid`,
                    backgroundColor: $theme.colors.green['500']
                  };
                }
              }
            }}
          >Submit</Button>
        </FlexGridItem>
      </FlexGrid>
    </form>
  )
}

export default FormExampleFieldControl