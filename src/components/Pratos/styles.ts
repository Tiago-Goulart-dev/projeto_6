import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  color: ${cores.creme};
  background-color: ${cores.rosa};
  position: relative;
  width: 320px;

  img {
    margin-top: 8px;
    margin-left: 8px;
    width: 304px;
    max-height: 271px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`

export const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
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
