import { useStyletron } from 'baseui';

const fallbackId = "chakra-skip-nav"
const SkipNavContent = (props) => {
  const [css, theme] = useStyletron();

  const { id = fallbackId, ...rest } = props
  return (
    <div
      id={id}
      tabIndex={-1}
      style={{ outline: 0 }}
      {...rest}
      className={css({
        outline: 0,
      })}
    />
  )
}

export default SkipNavContent