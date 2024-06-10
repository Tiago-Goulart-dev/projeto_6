import { Imagem, Titulo, Classificacao, LinkContainer, Cart } from './styles'
import { useParams } from 'react-router-dom'
import { useGetBannerQuery } from '../../services/api'

const Banner = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetBannerQuery(id!)

  return (
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
      </div>
    </Imagem>
  )
}

export default Banner
