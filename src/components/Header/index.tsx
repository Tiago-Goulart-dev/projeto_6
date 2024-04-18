import { Link } from 'react-router-dom'
import { HeaderBar, HeaderText, Imagem } from './styles'
import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/background.svg'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${background})` }}>
    <HeaderBar>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="eFood" />
        </Link>
        <HeaderText>
          Viva experiências gastronômicas
          <br /> no conforto da sua casa
        </HeaderText>
      </div>
    </HeaderBar>
  </Imagem>
)

export default Header
