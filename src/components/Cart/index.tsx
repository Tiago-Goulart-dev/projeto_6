import Button from '../Button'
import { CartContainer, Overlay, Sidebar, Preco, CartItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Pratos'
import { useState } from 'react'
import Checkout from '../Checkout'
import { getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [payment, setPayment] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {!payment && items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Preco>
              <p>Valor total</p>
              <p>
                {formataPreco(getTotalPrice(items))}
                {''}
              </p>
            </Preco>
            <Button
              type={'button'}
              title={'Clique aqui para continuar com a entrega'}
              onClick={() => setPayment(true)}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          items.length === 0 && (
            <p className="empty">
              Carrinho vazio, adicione pratos para proseguir com a compra!
            </p>
          )
        )}
        {payment && <Checkout setPayment={setPayment} />}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
