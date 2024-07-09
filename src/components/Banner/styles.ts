import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  position: absolute;
  top: 185px;
  width: 100%;
  height: 280px
  display: block;
  font-weight: bold;
  color: ${cores.branco};
  background-repeat: no-repeat;
  background-size: cover;


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
