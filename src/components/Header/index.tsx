import { Link } from 'react-router-dom'
import { HeaderBar, HeaderText, Imagem } from './styles'
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
      <HeaderBar>
        <div className="container">
          <Button type={'menu'} title={'Ir para lista de restaurantes'}>
            Restaurantes
          </Button>
          <Link to="/">
            <img
              src={logo}
              style={{
                verticalAlign: `middle`,
                paddingLeft: `25%`,
                paddingRight: `25%`
              }}
              alt="Efood"
            />
          </Link>
          <Button onClick={openCart} type={'menu'} title={'Abrir carrinho'}>
            {items.length} produto(s) no carrinho
          </Button>
        </div>
      </HeaderBar>
    </Imagem>
  )
}

export default Header
