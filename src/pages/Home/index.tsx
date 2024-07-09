import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'
import { useGetRestaurantesQuery } from '../../services/api'

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
