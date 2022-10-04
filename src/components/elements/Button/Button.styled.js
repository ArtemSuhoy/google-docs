import styled, { css } from "styled-components"

const BUTTON_SIZE = {
  sm: css`
    font-size: var(--text-caption1-fs);
    line-height: var(--text-caption1-lh);
  `,
  md: css`
    font-size: var(--text-body2-fs);
    line-height: var(--text-body2-lh);
  `
}

const ButtonStyled = styled.button`
  border: none;
  background-color: inherit;
  padding: var(--offset-4) var(--offset-6);
  padding: ${({ p }) => p};
  ${({ variant = "md" }) => BUTTON_SIZE[variant]}

  & svg {
    display: inline-block;
    vertical-align: middle;
  }
  &:hover {
    background-color: #999;
  }
`
export default ButtonStyled
