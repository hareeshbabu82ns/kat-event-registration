import React from 'react'
import { useSelect } from 'downshift'
import {
  chakra,
  forwardRef,
  FormLabel,
  Button,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  List,
  ListItem,
  useStyleConfig, omitThemingProps,
  Popover, PopoverTrigger, PopoverContent, PopoverBody,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

const SelectInput = forwardRef(({ ...props }, ref) => {
  return <input {...props} ref={ref} />;
});
const SelectMenu = forwardRef((props, ref) => {
  const styles = useStyleConfig("Select", props)
  // const { id = fallbackId, ...rest } = omitThemingProps(props)
  return <chakra.div  {...props} ref={ref} __css={styles} borderColor='teal.200' />;
});

const SelectMenuList = forwardRef(({ isOpen, ...props }, ref) => {
  const styles = useStyleConfig("MenuList", props)

  return <List display={isOpen ? 'flex' : "none"}
    w='full' flexDir='column'
    {...props} ref={ref} __css={styles} bg='teal.800' />;
});

const SelectMenuItem = forwardRef(
  ({ itemIndex, highlightedIndex, ...props }, ref) => {
    const isActive = itemIndex === highlightedIndex;

    return (
      <ListItem
        transition="background-color 220ms, color 220ms"
        bg={isActive ? "gray.800" : null}
        px={4}
        py={2}
        cursor="pointer"
        {...props}
        ref={ref}
      />
    );
  }
);

// import { items, menuStyles } from './utils'
const DropdownSelect = ({ items }) => {

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    // stateReducer,
    // selectedItem: items[0],
    onSelectedItemChange: ({ selectedItem }) => {
      if (!selectedItem) {
        return
      }
      console.log(selectedItem)
    },
  })

  return (
    <Popover isOpen={isOpen} placement="bottom-end" closeOnEsc={true}>
      <FormLabel {...getLabelProps()}>Choose an element:</FormLabel>
      <PopoverTrigger>
        <Button {...getToggleButtonProps()} aria-label={'toggle menu'} type='button' w='full' variant='outline'>
          {selectedItem?.text || 'Gender'} <Spacer /><ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <SelectMenu {...getMenuProps()}>

          <SelectMenuList isOpen={isOpen}>
            {items.map((item, index) => (
              <SelectMenuItem
                key={`${item.key}${index}`}
                itemIndex={index}
                highlightedIndex={highlightedIndex}
                {...getItemProps({ item: item.value, index })}
              >
                {item.text}
              </SelectMenuItem>
            ))}
          </SelectMenuList>

        </SelectMenu>
      </PopoverContent>
    </Popover>
  )
}
export default DropdownSelect