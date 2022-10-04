import BoxStyled from "./Box.styled"

const Box = props => {
  const { children } = props
  return <BoxStyled {...props}>{children}</BoxStyled>
}
export default Box
