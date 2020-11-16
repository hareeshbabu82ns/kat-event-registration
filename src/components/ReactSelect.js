import React from 'react'
import {
  chakra,
  useStyleConfig,
  useColorModeValue, useToken,
} from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'

import RSelect from 'react-select'

const Select = ({ options, isInvalid, ...props }) => {

  // console.log(props)
  const { field: controlStyles,
    // ...rest
  } = useStyleConfig("Select", {})
  // console.log(controlStyles, rest)
  // const customTheme = mergeWith(theme, { components })

  const customControlStyles = {
    borderColor: useToken('colors', isInvalid ? 'red.300' : controlStyles.borderColor),
    height: useToken('sizes', controlStyles.h),
    paddingLeft: useToken('space', '2'),
    paddingRight: useToken('space', controlStyles.px),
    backgroundColor: useToken('colors', controlStyles.bg),
  }
  const customSingleValueStyles = {
    color: useColorModeValue('black', 'white'),
    transition: 'opacity 300ms',
  }
  const { list: listStyles, item: itemStyles } = useStyleConfig("Menu", {})
  // console.log(listStyles, itemStyles)
  const customMenuStyles = {
    backgroundColor: useToken('colors', listStyles.bg),
  }

  const customOptionStyles = {
    backgroundColor: useToken('colors', listStyles.bg),
    backgroundColorSelected: useToken('colors', useColorModeValue('teal.200', 'teal.700')),
    color: useToken('colors', 'inheret'),
    colorSelected: useToken('colors', 'teal.500'),
    colorActive: useToken('colors', useColorModeValue('teal.400', 'teal.900')),
    transition: useToken('', itemStyles.transition),
    marginLeft: useToken('space', itemStyles.px),
    marginRight: useToken('space', itemStyles.px),
    marginTop: useToken('space', itemStyles.py),
    marginBottom: useToken('space', itemStyles.py),
  }

  const customStyles = {
    control: (provided, state) => {
      return {
        ...provided,
        ...customControlStyles,
      }
    },
    // valueContainer: (provided, state) => {
    //   return {
    //     ...provided,
    //   }
    // },
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      return {
        ...provided,
        opacity,
        ...customSingleValueStyles,
      };
    },
    menu: (provided, state) => {
      return {
        ...provided,
        ...customMenuStyles,
      };
    },
    option: (provided, { data, isDisabled, isFocused, isSelected }) => ({
      ...provided,
      ...customOptionStyles,
      // borderBottom: '1px dotted pink',
      color: isSelected ? customOptionStyles.colorSelected : customOptionStyles.color,
      backgroundColor: !isDisabled && isSelected ? customOptionStyles.backgroundColorSelected : customOptionStyles.backgroundColor,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      ':hover': {
        ...provided[':hover'],
        backgroundColor: !isDisabled && customOptionStyles.colorActive,
      },
      ':active': {
        ...provided[':active'],
        backgroundColor: customOptionStyles.colorActive,
      },
    }),
  }

  return (
    <RSelect options={options}
      {...props}
      styles={customStyles}
      components={{ Option }}
    />
  )
}

const Option = (props) => {
  const {
    children,
    className,
    cx,
    getStyles,
    isDisabled,
    isFocused,
    isSelected,
    innerRef,
    innerProps,
    data,
  } = props;
  return (
    <chakra.div
      d='flex'
      ref={innerRef}
      css={getStyles('option', props)}
      className={cx(
        {
          option: true,
          'option--is-disabled': isDisabled,
          'option--is-focused': isFocused,
          'option--is-selected': isSelected,
        },
        className
      )}
      {...innerProps}
    >
      <><MoonIcon /> {data.key} {children} </>
    </chakra.div>
  );
};

const ReactSelect = chakra(Select)
export default ReactSelect