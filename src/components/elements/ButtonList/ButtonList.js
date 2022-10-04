import { Button, Icon } from "components"

const ButtonList = props => {
  const { list, isIcon, iconSize } = props
  return list.map(item => {
    const computedItem = isIcon ? (
      <Icon height={iconSize} width={iconSize} src={item} />
    ) : (
      item
    )
    return <Button>{computedItem}</Button>
  })
}

export default ButtonList
