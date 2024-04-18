import PratosModel from '../../models/Pratos'
import Pratos from '../Pratos'
import { Container, List } from './styles'

export type Props = {
  pratos: PratosModel[]
}

const PratosList = ({ pratos }: Props) => (
  <Container pratos={pratos}>
    <List>
      {pratos.map((restaurante) => (
        <Pratos
          key={restaurante.id}
          description={restaurante.description}
          image={restaurante.image}
          title={restaurante.title}
        />
      ))}
    </List>
  </Container>
)

export default PratosList
