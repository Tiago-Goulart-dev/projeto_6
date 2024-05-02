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
  ContainerPrato,
  CardPrato
} from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

const Pratos = ({ descricao, foto, nome, porcao, preco }: Props) => {
  const [PratosDetalhes, setPratosDetalhes] = useState(false)

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
              onClick={() => setPratosDetalhes(true)}
            >
              Mais Detalhes
            </Button>
          </ContainerButton>
        </Container>
      </Card>
      <ContainerPrato className={PratosDetalhes ? 'visivel' : ''}>
        <CardPrato className="container">
          <div className="fechar">
            <img
              src={fechar}
              alt="fechar"
              onClick={() => setPratosDetalhes(false)}
            />
          </div>
          <div className="imagem">
            <img src={foto} alt="pizza" />
          </div>
          <div>
            <h4>{nome}</h4>
            <div className="infos">
              <p className="description">{descricao}</p>
              <p>Serve: {porcao}</p>
            </div>
            <div className="button">
              <Button
                onClick={() => setPratosDetalhes(false)}
                type="button"
                title={'Clique para adicionar item ao carrinho'}
              >
                Adicionar ao carrinho - {precoFormatado}
              </Button>
            </div>
          </div>
        </CardPrato>
        <div className="overlay" onClick={() => setPratosDetalhes(false)}></div>
      </ContainerPrato>
    </>
  )
}

export default Pratos
