import { Button, Icon } from "components"

import { TITLE_BAR_BUTTONS } from "__constants__"

const TitleBarButtons = () => {
  return TITLE_BAR_BUTTONS.map(item => (
    <Button>
      <Icon src={item} />
    </Button>
  ))
}

export default TitleBarButtons
