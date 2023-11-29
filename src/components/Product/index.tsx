import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  title: string
  category: string
  description: string
  info: string[]
  image: string
  system: string
}

const Product = ({
  title,
  category,
  description,
  info,
  image,
  system
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {info.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
