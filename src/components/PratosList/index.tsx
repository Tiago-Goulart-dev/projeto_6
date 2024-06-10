import Pratos from '../Pratos'
import { Container, List } from './styles'
import { Cardapio } from '../../pages/Cardapio'

export type Props = {
  pratos: Cardapio[]
}

const PratosList = ({ pratos }: Props) => (
  <Container className="container">
    <div>
      <List>
        {pratos.map((prato) => (
          <li key={prato.id}>
            <Pratos
              id={prato.id}
              descricao={prato.descricao}
              foto={prato.foto}
              nome={prato.nome}
              porcao={prato.porcao}
              preco={prato.preco}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default PratosList
