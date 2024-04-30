import PratosList from '../../components/PratosList'
import { useEffect, useState } from 'react'
import { Cardapio, Restaurantes } from '../Home'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'

const CardapioRestaurante = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res.cardapio))
  }, [id])

  return (
    <>
      <Header type="cardapio" />
      <Banner></Banner>
      <PratosList pratos={cardapio} />
    </>
  )
}

export default CardapioRestaurante
