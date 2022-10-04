import { BUTTON_LIST, RIGHT_SIDE_BUTTONS } from "__constants__"
import {
  Box,
  ButtonList,
  EditBarList,
  Icon,
  Title,
  TitleBarButtons
} from "components"

import WrapperStyled from "./Header.styled"

const Header = () => {
  return (
    <WrapperStyled>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Box px={"8px"}>
            <Icon src="logo.svg" height="40px" width="40px" />
          </Box>
          <Box>
            <Box display="flex" alignItems="center">
              <Title>Text</Title>
              <TitleBarButtons />
            </Box>
            <Box>
              <ButtonList list={BUTTON_LIST} />
            </Box>
          </Box>
        </Box>
        <Box display="flex" p="var(--offset-16)">
          <ButtonList isIcon list={RIGHT_SIDE_BUTTONS} iconSize="24px" />
        </Box>
      </Box>
      <Box>
        <EditBarList />
      </Box>
    </WrapperStyled>
  )
}

export default Header
