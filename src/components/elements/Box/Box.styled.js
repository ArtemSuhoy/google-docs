import styled, { css } from "styled-components"

const BoxStyled = styled.div`
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding: ${({ p }) => p};
  margin: ${({ m }) => m};

  ${({ px }) => css`
    padding-left: ${px};
    padding-right: ${px};
  `};

  ${({ py }) => css`
    padding-top: ${py};
    padding-bottom: ${py};
  `};

  ${({ mx }) => css`
    margin-left: ${mx};
    margin-right: ${mx};
  `};

  ${({ my }) => css`
    margin-top: ${my};
    margin-bottom: ${my};
  `};

  background: ${({ bg }) => bg};
`
export default BoxStyled
