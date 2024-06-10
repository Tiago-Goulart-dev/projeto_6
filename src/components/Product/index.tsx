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
  Estrela,
  ContainerButton
} from './styles'
import estrela from '../../assets/images/estrela.svg'

type Props = {
  id: string
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
}

const Product = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => (
  <Card>
    <img className="imagemcard" src={capa} alt={titulo} />

    <Infos>
      {destacado && <Tag>Destaque da semana</Tag>}
      <Tag>{tipo}</Tag>
    </Infos>
    <Container>
      <TituloContainer>
        <Titulo>{titulo}</Titulo>
        <EstrelaContainer>
          <Titulo>{avaliacao}</Titulo>
          <Estrela src={estrela} alt="estrela" />
        </EstrelaContainer>
      </TituloContainer>
      <Descricao>{descricao}</Descricao>
      <ContainerButton>
        <Button
          type="link"
          title={'Clique para acessar a página do restaurante'}
          to={`/cardapio/${id}`}
        >
          Saiba mais
        </Button>
      </ContainerButton>
    </Container>
  </Card>
)

export default Product
