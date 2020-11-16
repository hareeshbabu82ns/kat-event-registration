import React, { useState } from "react";
import { useCombobox } from "downshift";
import {
  Input, List, ListItem, Flex, FormLabel,
  InputGroup, InputRightAddon, InputRightElement,
  IconButton, Popover, PopoverTrigger, PopoverContent, ButtonGroup,
} from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon, SmallCloseIcon } from '@chakra-ui/icons'

const items = ["Seattle", "San Francisco", "Springfield", "New York", "Boston"];

const ComboboxInput = React.forwardRef(({ ...props }, ref) => {
  return <Input {...props} ref={ref} />;
});

const ComboboxList = React.forwardRef(({ isOpen, ...props }, ref) => {
  return <List display={isOpen ? null : "none"} py={2} {...props} ref={ref} />;
});

const ComboboxItem = React.forwardRef(
  ({ itemIndex, highlightedIndex, ...props }, ref) => {
    const isActive = itemIndex === highlightedIndex;

    return (
      <ListItem
        transition="background-color 220ms, color 220ms"
        bg={isActive ? "teal.100" : null}
        px={4}
        py={2}
        cursor="pointer"
        {...props}
        ref={ref}
      />
    );
  }
);

export default function Combobox() {
  const [inputItems, setInputItems] = useState(items);
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) =>
          item.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    }
  });

  return (
    <Popover isOpen={isOpen} placement="bottom-end" closeOnEsc={true}>
      <FormLabel {...getLabelProps()}>
        Choose a city
      </FormLabel>
      <div {...getComboboxProps()}>
        <PopoverTrigger>
          <InputGroup>
            <ComboboxInput
              {...getInputProps()}
              placeholder="Search..."
            />
            <InputRightElement w='5rem'>
              <ButtonGroup isAttached variant="outline">
                <IconButton
                  aria-label={"clear text"}
                  icon={<SmallCloseIcon />}
                />

                <IconButton
                  {...getToggleButtonProps()}
                  aria-label={"toggle menu"}
                  icon={isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                />
              </ButtonGroup>
            </InputRightElement>
          </InputGroup>
        </PopoverTrigger>
      </div>
      <PopoverContent>
        <ComboboxList
          isOpen={isOpen}
          {...getMenuProps()}
        >
          {inputItems.map((item, index) => (
            <ComboboxItem
              {...getItemProps({ item, index })}
              itemIndex={index}
              highlightedIndex={highlightedIndex}
              key={index}
            >
              {item}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </PopoverContent>

    </Popover>
  );
}
