import Button from '../Button'
import { Card, Descricao, Titulo, Container, TituloContainer } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Pratos = ({ description, image, title }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Container>
      <TituloContainer>
        <Titulo>{title}</Titulo>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <Button type="button" title={'Clique para adicionar prato ao carrinho'}>
        Adicionar ao carrinho
      </Button>
    </Container>
  </Card>
)

export default Pratos
