import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'
import { useGetRestaurantesQuery } from '../../services/api'

export type Restaurante = {
  id: string
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantesQuery()

  if (restaurantes) {
    return (
      <>
        <Header type={'home'} />
        <ProductsList restaurantes={restaurantes} />
      </>
    )
  }
  return <h2>Carregando...</h2>
}
export default Home
