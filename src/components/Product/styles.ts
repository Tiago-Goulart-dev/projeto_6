import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  position: relative;
  width: 472px;

  .img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
`

export const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`

export const EstrelaContainer = styled.div`
  display: flex;
`
export const Estrela = styled.img`
  height: 21px;
  padding-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const Container = styled.div`
  margin: 0 8px;
  margin-bottom: 8px;
`
