import Button from '../Button'
import Tag from '../Tag'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Container,
  TituloContainer,
  EstrelaContainer,
  Estrela
} from './styles'
import estrela from '../../assets/images/estrela.svg'

type Props = {
  title: string
  nota: string
  description: string
  infos: string[]
  image: string
  caminho: string
}

const Product = ({
  description,
  image,
  infos,
  title,
  nota,
  caminho
}: Props) => (
  <Card>
    <img className="img" src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Container>
      <TituloContainer>
        <Titulo>{title}</Titulo>
        <EstrelaContainer>
          <Titulo>{nota}</Titulo>
          <Estrela src={estrela} alt="estrela" />
        </EstrelaContainer>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <Button
        type="link"
        title={'Clique para acessar a página do restaurante'}
        to={caminho}
      >
        Saiba mais
      </Button>
    </Container>
  </Card>
)

export default Product
