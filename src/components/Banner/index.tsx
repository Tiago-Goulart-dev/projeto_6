import { Imagem, Titulo, Classificacao, LinkContainer, Cart } from './styles'
import italiana from '../../assets/images/italiana.png'
import japonesa from '../../assets/images/japonesa.png'

const BannerJaponesa = () => (
  <>
    <Imagem
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${japonesa})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`
      }}
    >
      <div className="container">
        <Classificacao>Japonesa</Classificacao>
        <div>
          <Titulo>Hioki Sushi</Titulo>
        </div>
        <LinkContainer to="/" title="Ir para página de restaurantes">
          Restaurantes
        </LinkContainer>
        <Cart>0 produto(s) no carrinho</Cart>
      </div>
    </Imagem>
  </>
)

const BannerItaliana = () => (
  <>
    <Imagem
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${italiana})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`
      }}
    >
      <div className="container">
        <Classificacao>Italiana</Classificacao>
        <div>
          <Titulo>La Dolce Vita Trattoria</Titulo>
        </div>
        <LinkContainer to="/" title="Ir para página de restaurantes">
          Restaurantes
        </LinkContainer>
        <Cart>0 produto(s) no carrinho</Cart>
      </div>
    </Imagem>
  </>
)

export { BannerItaliana, BannerJaponesa }
