import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

export type Restaurantes = {
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
    id: string
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <ProductsList restaurantes={restaurantes} />
    </>
  )
}
export default Home
