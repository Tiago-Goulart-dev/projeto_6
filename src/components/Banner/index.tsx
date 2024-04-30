import { useEffect, useState } from 'react'
import { Restaurantes } from '../../pages/Home'
import { Imagem, Titulo, Classificacao, LinkContainer, Cart } from './styles'
import { useParams } from 'react-router-dom'

const Banner = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  return (
    <>
      <Imagem
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${restaurante?.capa})`
        }}
      >
        <div className="container">
          <Classificacao>{restaurante?.tipo}</Classificacao>
          <div>
            <Titulo>{restaurante?.titulo}</Titulo>
          </div>
          <LinkContainer to="/" title="Ir para página de restaurantes">
            Restaurantes
          </LinkContainer>
          <Cart>0 produto(s) no carrinho</Cart>
        </div>
      </Imagem>
    </>
  )
}

export default Banner
