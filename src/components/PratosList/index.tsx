import { Restaurantes } from '../../pages/Home'
import Pratos from '../Pratos'
import { Container, List } from './styles'

export type Props = {
  pratos: Restaurantes[]
}

const PratosList = ({ pratos }: Props) => (
  <Container pratos={pratos}>
    <div className="container">
      <List>
        {pratos.map((prato) => (
          <Pratos
            key={prato.cardapio.id}
            descricao={prato.cardapio.descricao}
            foto={prato.cardapio.foto}
            nome={prato.cardapio.nome}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default PratosList
