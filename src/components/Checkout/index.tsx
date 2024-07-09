import { useState } from 'react'
import { Input, DeliveryButton, Container } from './styles'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { formataPreco } from '../Pratos'
import { getTotalPrice } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

const Checkout = ({ setPayment }: { setPayment: (value: boolean) => void }) => {
  const [userAdress, setUserAdress] = useState(false)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  //const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      adress: '',
      city: '',
      cep: '',
      number: '',
      adressComplement: '',
      nameOwner: '',
      numberOwner: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres.')
        .required('O campo é obrigatório.'),
      adress: Yup.string()
        .min(5, 'Endereço inválido!')
        .required('Campo obrigatório!'),
      city: Yup.string()
        .min(5, 'Cidade inválida!')
        .required('Campo obrigatório!'),
      cep: Yup.string().min(5, 'Cep inválido!').required('Campo obrigatório!'),
      number: Yup.string()
        .min(1, 'Número inválido')
        .required('Campo obrigatório!'),
      nameOwner: Yup.string()
        .min(5, 'Nome inválido')
        .required('Campo obrigatório!'),
      numberOwner: Yup.string()
        .min(16, 'Cartão inválido')
        .required('Campo obrigatório!'),
      cardCode: Yup.string()
        .min(2, 'CVV inválido!')
        .required('Campo obrigatório!'),
      expiresMonth: Yup.string()
        .min(2, 'Mês inválido!')
        .required('Campo obrigatório!'),
      expiresYear: Yup.string()
        .min(2, 'Ano inválido')
        .required('Campo obrigatório!')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          fullName: values.fullName,
          adress: {
            description: values.adress,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.adressComplement
          }
        },
        payment: {
          card: {
            name: values.nameOwner,
            number: values.numberOwner,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const formAdressIsValid = () => {
    const isValid =
      !form.errors.fullName &&
      !form.errors.adress &&
      !form.errors.city &&
      !form.errors.cep &&
      !form.errors.number &&
      form.touched.adress

    if (isValid) {
      setUserAdress(true)
    } else {
      alert('Por favor, complete os dados de entrega corretamente.')
    }
  }

  const checkoutInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const confirmPayment = () => {
    form.handleSubmit()
    console.log('passou', form, isSuccess, data)
  }

  const finishPayment = () => {
    navigate('/')
    window.location.reload()
  }

  return (
    <Container>
      <form onSubmit={form.handleSubmit}>
        {userAdress && !isSuccess && (
          <>
            <h3>
              Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}
            </h3>
            <Input>
              <label htmlFor="nameOwner">Nome no cartão</label>
              <input
                id="nameOwner"
                type="text"
                value={form.values.nameOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('nameOwner') ? 'error' : ''}
              />
            </Input>
            <div className="flex2">
              <Input>
                <label htmlFor="numberOwner">Número do cartão</label>
                <InputMask
                  id="numberOwner"
                  type="text"
                  value={form.values.numberOwner}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkoutInputHasError('numberOwner') ? 'error' : ''
                  }
                  mask="9999 9999 9999 9999"
                />
              </Input>
              <Input className="width">
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  id="cardCode"
                  type="text"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkoutInputHasError('cardCode') ? 'error' : ''}
                  mask="999"
                />
              </Input>
            </div>
            <div className="flex2">
              <Input>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <InputMask
                  id="expiresMonth"
                  type="text"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkoutInputHasError('expiresMonth') ? 'error' : ''
                  }
                  mask="99"
                />
              </Input>
              <Input>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <InputMask
                  id="expiresYear"
                  type="text"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkoutInputHasError('expiresYear') ? 'error' : ''
                  }
                  mask="99"
                />
              </Input>
            </div>
            <div>
              <DeliveryButton
                className="margin"
                type="button"
                title="clique aqui para finalizar a compra"
                onClick={confirmPayment}
              >
                Finalizar pagamento
              </DeliveryButton>
              <DeliveryButton
                type="button"
                onClick={() => setUserAdress(false)}
              >
                Voltar para edição de endereço
              </DeliveryButton>
            </div>
          </>
        )}
        {!userAdress && !isSuccess && (
          <>
            <h3>Entrega</h3>
            <Input>
              <label htmlFor="fullName">Quem irá receber</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('fullName') ? 'error' : ''}
              />
            </Input>
            <Input>
              <label htmlFor="adress">Endereço</label>
              <input
                id="adress"
                type="text"
                name="adress"
                value={form.values.adress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('adress') ? 'error' : ''}
              />
            </Input>
            <Input>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkoutInputHasError('city') ? 'error' : ''}
              />
            </Input>
            <div className="flex">
              <Input>
                <label htmlFor="cep">CEP</label>
                <InputMask
                  id="cep"
                  type="text"
                  name="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkoutInputHasError('cep') ? 'error' : ''}
                  mask="99999-999"
                />
              </Input>
              <Input>
                <label htmlFor="number">Número</label>
                <input
                  id="number"
                  type="text"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkoutInputHasError('number') ? 'error' : ''}
                />
              </Input>
            </div>
            <Input>
              <label htmlFor="adressComplement">Complemento (opcional)</label>
              <input
                id="adressComplement"
                type="text"
                name="adressComplement"
                value={form.values.adressComplement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </Input>
            <div className="margin">
              <DeliveryButton onClick={() => formAdressIsValid()}>
                Continuar com o pagamento
              </DeliveryButton>
              <DeliveryButton onClick={() => setPayment(false)}>
                Voltar para o carrinho
              </DeliveryButton>
            </div>
          </>
        )}
      </form>
      {isSuccess && data && userAdress && (
        <Container>
          <h3>Pedido Realizado - {data?.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <DeliveryButton
            type="button"
            title="clique aqui para concluir sua compra"
            onClick={finishPayment}
          >
            Concluir
          </DeliveryButton>
        </Container>
      )}
    </Container>
  )
}

export default Checkout
