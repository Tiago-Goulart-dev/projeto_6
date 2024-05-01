import { useState } from 'react'
import Button from '../Button'
import fechar from '../../assets/images/fechar.png'

import {
  Card,
  Descricao,
  Titulo,
  Container,
  TituloContainer,
  ContainerButton,
  Modal,
  ModalContent
} from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

const Pratos = ({ descricao, foto, nome, porcao, preco }: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 199) + '...'
    }
    return descricao
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const precoFormatado = formataPreco(preco)

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
              onClick={() => setModalIsVisible(true)}
            >
              Mais Detalhes
            </Button>
          </ContainerButton>
        </Container>
      </Card>
      <Modal className={modalIsVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <div className="close">
            <img
              src={fechar}
              alt="close icon"
              onClick={() => setModalIsVisible(false)}
            />
          </div>
          <div className="modal-image">
            <img src={foto} alt="pizza" />
          </div>
          <div>
            <header>
              <h4>{nome}</h4>
            </header>
            <div className="infos">
              <p className="description">{descricao}</p>
              <p>Serve: {porcao}</p>
            </div>
            <div className="button">
              <Button
                onClick={() => setModalIsVisible(false)}
                type="button"
                title={'Clique para adicionar item ao carrinho'}
              >
                Adicionar ao carrinho - {precoFormatado}
              </Button>
            </div>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsVisible(false)}></div>
      </Modal>
    </>
  )
}

export default Pratos
