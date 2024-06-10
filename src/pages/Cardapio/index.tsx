import PratosList from '../../components/PratosList'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { useGetRestauranteQuery } from '../../services/api'
import { useEffect } from 'react'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurantes {
  id: string
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const CardapioRestaurante = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestauranteQuery(id!)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (restaurante) {
    return (
      <>
        <Header type="cardapio" />
        <Banner></Banner>
        <PratosList pratos={restaurante.cardapio} />
      </>
    )
  }
  return <h2>Carregando...</h2>
}

export default CardapioRestaurante
