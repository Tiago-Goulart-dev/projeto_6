import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  color: ${cores.creme};
  background-color: ${cores.rosa};
  position: relative;
  width: 320px;

  .img {
    margin-top: 8px;
    margin-left: 8px;
    width: 95%;
    height: 250px;
    object-fit: cover;
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
  margin-bottom: 32px;
  padding-bottom: 22px;
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

export const ContainerButton = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  width: 95%;
`

export const ContainerPrato = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  &.visivel {
    display: flex;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const CardPrato = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 280px auto;
  column-gap: 24px;
  background-color: ${cores.rosa};
  padding: 32px;
  position: relative;
  z-index: 1;
  color: ${cores.branco};
  .imagem {
    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }
  }
  h4 {
    font-size: 18px;
    font-weight: 900;
  }
  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    height: 176px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
  }
  .button {
    padding-top: 16px;
    display: inline-block;
  }
  .fechar {
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }
`
