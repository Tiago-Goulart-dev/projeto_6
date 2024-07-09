import PratosList from '../../components/PratosList'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { useGetRestauranteQuery } from '../../services/api'
import { useEffect } from 'react'

type CardapioParams = {
  id: string
}

const CardapioRestaurante = () => {
  const { id } = useParams() as CardapioParams
  const { data: restaurante } = useGetRestauranteQuery(id)

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
