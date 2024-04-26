import Product from '../Product'
import { Container, List } from './styles'
import { Restaurantes } from '../../pages/Home'

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
            avaliacao={restaurante.avaliacao}
            descricao={restaurante.descricao}
            capa={restaurante.capa}
            tipo={restaurante.tipo}
            titulo={restaurante.titulo}
            destacado={restaurante.destacado}
            id={restaurante.id}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
