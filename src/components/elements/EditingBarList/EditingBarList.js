import { Button, Divider, Icon } from "components"

import { EDIT_BUTTONS_LIST } from "__constants__"

// import { ReactComponent as BoldIcon } from "../../../assets/bold.svg"i

const EditingBarList = () => {
  return EDIT_BUTTONS_LIST.map(item => {
    return (
      <>
        <Button icon={item?.icon && <Icon src={item?.icon}></Icon>}>
          {item?.text}
        </Button>
        {item?.divider && <Divider />}
      </>
    )
  })
}

export default EditingBarList
