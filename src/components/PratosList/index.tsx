import Pratos from '../Pratos'
import { Container, List } from './styles'
import { Cardapio } from '../../pages/Home'

export type Props = {
  pratos: Cardapio[]
}

const PratosList = ({ pratos }: Props) => {
  return (
    <Container pratos={pratos}>
      <div className="container">
        <List>
          {pratos.map((prato) => (
            <Pratos
              key={prato.id}
              descricao={prato.descricao}
              foto={prato.foto}
              nome={prato.nome}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default PratosList
