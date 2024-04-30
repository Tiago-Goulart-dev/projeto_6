import Button from '../Button'
import {
  Card,
  Descricao,
  Titulo,
  Container,
  TituloContainer,
  ContainerButton
} from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
}

const Pratos = ({ descricao, foto, nome }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 199) + '...'
    }
    return descricao
  }
  return (
    <Card>
      <img className="img" src={foto} alt={nome} />
      <Container>
        <TituloContainer>
          <Titulo>{nome}</Titulo>
        </TituloContainer>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <ContainerButton>
          <Button type="button" title={'Clique para ver mais informações'}>
            Saiba mais
          </Button>
        </ContainerButton>
      </Container>
    </Card>
  )
}

export default Pratos
