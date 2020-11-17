import { useStyletron } from 'baseui';

const fallbackId = "chakra-skip-nav"

const SkipNavLink = ({ children, ...rest }) => {
  const [css, theme] = useStyletron();

  const { id = fallbackId, ...restAll } = rest

  return (
    <a href={`#${id}`}
      {...restAll}
      className={css({
        textDecoration: 'none',
        color: theme.colors.accent,
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
        zIndex: 20,
        ':focus': {
          clip: "auto",
          width: "auto",
          height: "auto",
        },
      })} >{children}</a>
  )
}

export default SkipNavLink