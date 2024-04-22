import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)`
  position: absolute;
  top: -118px;
  left: 171px;
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
`

export const Cart = styled.h2`
  position: absolute;
  top: -118px;
  right: 171px;
  color: ${cores.rosa};
  font-size: 18px;
  font-weight: bold;
`

export const Imagem = styled.div`
  position: absolute;
  top: 185px;
  width: 100%;
  height: 280px
  display: block;
  font-weight: bold;
  color: ${cores.branco};

  .container {
    position: relative;
    padding-top: 214px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  padding-left: 170px;
`

export const Classificacao = styled.h3`
  position: absolute;
  top: 32px;
  padding-left: 170px;
  font-size: 32px;
  font-weight: 100;
`
