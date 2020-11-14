import { Link, useColorModeValue } from "@chakra-ui/react"
import React from "react"

function NavLink(props) {
  const { isActive, ...rest } = props

  // const [, group] = href.split("/")

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      display="block"
      py="1" px="3"
      borderRadius="45"
      transition="all 0.3s"
      color={useColorModeValue("whiteAlpha.800", "whiteAlpha.800")}
      fontWeight="normal"
      _hover={{ color: useColorModeValue("teal.200", "teal.200") }}
      _activeLink={{
        fontWeight: "semibold",
        color: "teal.200",
      }}
      {...rest}
    />
  )
}

export default NavLink