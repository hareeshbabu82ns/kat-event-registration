import {
  chakra, forwardRef, useStyleConfig, omitThemingProps
} from "@chakra-ui/react"

const fallbackId = "chakra-skip-nav"
const baseStyle = {
  userSelect: "none",
  border: "0",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  outline: "0",
  overflow: "hidden",
  position: "absolute",
  clip: "rect(0 0 0 0)",
  _focus: {
    clip: "auto",
    width: "auto",
    height: "auto",
  },
}
const SkipNavLink = forwardRef((props, ref) => {

  const styles = useStyleConfig("SkipLink", props)
  const { id = fallbackId, ...rest } = omitThemingProps(props)

  const linkStyles = Object.assign(baseStyle, styles)
  return (
    <chakra.a {...rest} ref={ref} href={`#${id}`} __css={linkStyles} />
  )
})

export default SkipNavLink