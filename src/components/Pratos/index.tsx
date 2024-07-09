import { useState } from 'react'
import Button from '../Button'
import fechar from '../../assets/images/fechar.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

import {
  Card,
  Descricao,
  Titulo,
  Container,
  TituloContainer,
  ContainerButton,
  ContainerPrato,
  CardPrato
} from './styles'

type ModalState = {
  isVisible: boolean
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Pratos = ({ descricao, foto, nome, porcao, preco, id }: Cardapio) => {
  const [modal, setModal] = useState<ModalState>({ isVisible: false })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 199) + '...'
    }
    return descricao
  }

  const precoFormatado = formataPreco(preco)

  const prato = {
    foto,
    nome,
    descricao,
    porcao,
    preco,
    id
  }

  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }

  return (
    <>
      <Card>
        <img className="img" src={foto} alt={nome} />
        <Container>
          <TituloContainer>
            <Titulo>{nome}</Titulo>
          </TituloContainer>
          <Descricao>{getDescricao(descricao)}</Descricao>
          <ContainerButton>
            <Button
              type="button"
              title={'Clique para ver mais informações'}
              onClick={() => {
                setModal({
                  isVisible: true
                })
              }}
            >
              Adicionar ao carrinho
            </Button>
          </ContainerButton>
        </Container>
      </Card>
      <ContainerPrato className={modal.isVisible ? 'visivel' : ''}>
        <CardPrato className="container">
          <div className="fechar">
            <img src={fechar} alt="fechar" onClick={() => closeModal()} />
          </div>
          <div className="imagem">
            <img src={foto} alt="imagem do prato" />
          </div>
          <div>
            <h4>{nome}</h4>
            <div className="infos">
              <p className="description">{descricao}</p>
              <p>Serve: {porcao}</p>
            </div>
            <div className="button">
              <Button
                onClick={addToCart}
                type="button"
                title={'Clique para adicionar item ao carrinho'}
              >
                Adicionar ao carrinho - {precoFormatado}
              </Button>
            </div>
          </div>
        </CardPrato>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </ContainerPrato>
    </>
  )
}

export default Pratos
