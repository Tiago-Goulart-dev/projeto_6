import PratosList from '../../components/PratosList'
import { useEffect, useState } from 'react'
import { Restaurantes } from '../Home'
import { useParams } from 'react-router-dom'

const CardapioRestaurante = () => {
  const id = useParams()
  const [cardapio, setCardapio] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

  return (
    <>
      <PratosList pratos={cardapio} />
    </>
  )
}

export default CardapioRestaurante
