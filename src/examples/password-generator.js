import React from 'react'

import { Button, KIND, SHAPE } from "baseui/button";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Slider } from "baseui/slider";
import { Input } from "baseui/input";
import { Block } from "baseui/block";
import { Checkbox } from "baseui/checkbox";
import { Accordion, Panel } from "baseui/accordion";
import { useStyletron } from "baseui";
import { FormControl } from "baseui/form-control";

import { BsFillCursorFill, BsLockFill } from 'react-icons/bs'

import { useForm, Controller } from 'react-hook-form'
import { log, LOG_LEVEL_INFO } from '../utils/logger'

const C_NUMBERS = '0123456789'
const C_SYMBOLS = '!@#$%^&*()?><+_'
const C_ABC_SMALL = 'abcdefghijklmnopqrstuvwxyz'
const C_ABC_BIG = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


const defaultValues = {
  password: '',
  length: 15,
  numbers: true,
  lowerCase: true,
  upperCase: false,
  symbols: false,
  strength: null
}

const PasswordGen = ({ props }) => {

  const [css, theme] = useStyletron()

  const { handleSubmit, register, errors, control, getValues, setValue } = useForm({
    defaultValues
  })

  const onSubmit = (data) => {
    // console.log(data)
    setValue('password', generatePassword(data), { shouldDirty: true })
  }

  return (
    <Card
      overrides={{
        Root: {
          style: {
            maxWidth: '30rem',
            // width: '95vw',
          }
        }
      }}
    >
      <StyledBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl label='Password'>
            <Input size='large' name='password' inputRef={register}
              overrides={{
                InputContainer: {
                  style: {
                    ...theme.borders.border100,
                    borderColor: theme.colors.warning400,
                  }
                },
                Before: (props) => {
                  log({
                    key: 'Input:Before component',
                    level: LOG_LEVEL_INFO, data: props
                  })
                  return <Button
                    kind={KIND.minimal}
                    shape={SHAPE.square}
                    {...props}
                    $style={{ backgroundColor: theme.colors.gray[700] }}
                  >
                    <BsLockFill
                      color={theme.colors.yellow[500]}
                    />
                  </Button>
                },
                After: (props) => (
                  <Button
                    kind={KIND.minimal}
                    shape={SHAPE.square}
                    onClick={() => onSubmit(getValues())}
                    {...props}
                  >
                    <BsFillCursorFill
                      color={theme.colors.yellow[500]}
                    />
                  </Button>
                )
              }}
            />
          </FormControl>
          <FormControl label='Characters'>
            <div className={css({
              display: 'flex', gap: '1rem',
              flexWrap: 'wrap'
            })}>
              <Controller
                name='numbers'
                control={control}
                render={({ onChange, value }) => <Checkbox
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                >0..9</Checkbox>}
              />

              <Controller
                name='lowerCase'
                control={control}
                render={({ onChange, value }) => <Checkbox
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                >a..z</Checkbox>}
              />
              <Controller
                name='upperCase'
                control={control}
                render={({ onChange, value }) => <Checkbox
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                >A..Z</Checkbox>}
              />

              <Controller
                name='symbols'
                control={control}
                render={({ onChange, value }) => <Checkbox
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                >!@#</Checkbox>}
              />
            </div>
          </FormControl>
          <FormControl label='Length'>
            <Controller
              name='length'
              control={control}
              render={
                ({ onChange, value }) =>
                  <Slider min={5} max={50}
                    value={[value]}
                    onChange={({ value }) => onChange(value[0])}
                  />
              }
            />
          </FormControl>
          <StyledAction>
            <Button type='submit'
              $style={{
                width: '100%',
                color: theme.colors.whiteAlpha[800],
                backgroundColor: theme.colors.green[800]
              }}
            >Generate</Button>
          </StyledAction>
        </form>

      </StyledBody>
    </Card>
  )
}

export default PasswordGen



function generatePassword({ length, numbers, lowerCase, upperCase, symbols }) {

  const charSet = []
  if (lowerCase) charSet.push(C_ABC_SMALL)
  if (numbers) charSet.push(C_NUMBERS)
  if (upperCase) charSet.push(C_ABC_BIG)
  if (symbols) charSet.push(C_SYMBOLS)
  if (!charSet.length) return ''

  const rand = Array(length).fill('').map((_, index) => {
    const randCharSet = charSet[Math.ceil(Math.random() * 100) % charSet.length]
    return randCharSet[Math.ceil(Math.random() * 100) % randCharSet.length]
  })
  return rand.join('').slice(0, length)

}