import { Imagem, Titulo, Classificacao, LinkContainer, Cart } from './styles'
import italiana from '../../assets/images/italiana.png'
import japonesa from '../../assets/images/japonesa.png'

const BannerJaponesa = () => (
  <>
    <Imagem
      style={{
        backgroundImage: `url(${japonesa})`
      }}
    >
      <div className="container">
        <Classificacao>Japonesa</Classificacao>
        <div>
          <Titulo>Hioki Sushi</Titulo>
        </div>
      </div>
    </Imagem>
    <LinkContainer to="/" title="Ir para página de restaurantes">
      Restaurantes
    </LinkContainer>
    <Cart>0 produto(s) no carrinho</Cart>
  </>
)

const BannerItaliana = () => (
  <>
    <Imagem
      style={{
        backgroundImage: `url(${italiana})`
      }}
    >
      <div className="container">
        <Classificacao>Italiana</Classificacao>
        <div>
          <Titulo>La Dolce Vita Trattoria</Titulo>
        </div>
      </div>
    </Imagem>
    <LinkContainer to="/" title="Ir para página de restaurantes">
      Restaurantes
    </LinkContainer>
    <Cart>0 produto(s) no carrinho</Cart>
  </>
)

export { BannerItaliana, BannerJaponesa }
