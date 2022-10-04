import ButtonStyled from "./Button.styled"

const Button = props => {
  const { children, icon } = props
  return (
    <ButtonStyled {...props}>
      {icon}
      <span>{children}</span>
    </ButtonStyled>
  )
}

export default Button
