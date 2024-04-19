import Restaurantes from '../../models/Restaurantes'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurantes[]
}

const ProductsList = ({ restaurantes }: Props) => (
  <Container restaurantes={restaurantes}>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Product
            key={restaurante.id}
            nota={restaurante.nota}
            description={restaurante.description}
            image={restaurante.image}
            infos={restaurante.infos}
            title={restaurante.title}
            caminho={restaurante.caminho}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
