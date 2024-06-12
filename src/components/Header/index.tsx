import { Link } from 'react-router-dom'
import { HeaderBar, HeaderText, Imagem, Menu1, Menu2 } from './styles'
import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/background.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import Button from '../Button'

type Props = {
  type: 'home' | 'cardapio'
}

const Header = ({ type }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (type === 'home') {
    return (
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
  }
  return (
    <Imagem style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <HeaderBar>
          <Menu1>
            <Button type={'menu'} title={'Ir para lista de restaurantes'}>
              Restaurantes
            </Button>
          </Menu1>
          <Menu2>
            <Button onClick={openCart} type={'menu'} title={'Abrir carrinho'}>
              {items.length} produto(s) no carrinho
            </Button>
          </Menu2>
          <Link to="/">
            <img
              src={logo}
              style={{
                verticalAlign: `middle`
              }}
              alt="Efood"
            />
          </Link>
        </HeaderBar>
      </div>
    </Imagem>
  )
}

export default Header
