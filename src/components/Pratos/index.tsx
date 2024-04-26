import Button from '../Button'
import { Card, Descricao, Titulo, Container, TituloContainer } from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
}

const Pratos = ({ descricao, foto, nome }: Props) => (
  <Card>
    <img className="img" src={foto} alt={nome} />
    <Container>
      <TituloContainer>
        <Titulo>{nome}</Titulo>
      </TituloContainer>
      <Descricao>{descricao}</Descricao>
      <Button type="button" title={'Clique para ver mais informações'}>
        Saiba mais
      </Button>
    </Container>
  </Card>
)

export default Pratos
