import TitleStyled from "./Title.styled"

const Title = props => {
  const { children } = props
  return <TitleStyled>{children}</TitleStyled>
}

export default Title
