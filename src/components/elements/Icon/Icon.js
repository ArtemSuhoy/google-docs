const Icon = props => {
  const { src, width = "18px", height = "18px", alt = "logo" } = props

  return <img height={height} width={width} src={src} alt={alt} />
}

export default Icon
