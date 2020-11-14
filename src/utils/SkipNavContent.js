import { chakra, forwardRef } from "@chakra-ui/react"

const fallbackId = "chakra-skip-nav"
const SkipNavContent = forwardRef(
  function SkipNavContent(props, ref) {
    const { id = fallbackId, ...rest } = props
    return (
      <chakra.div
        ref={ref}
        id={id}
        tabIndex={-1}
        style={{ outline: 0 }}
        {...rest}
      />
    )
  },
)

export default SkipNavContent