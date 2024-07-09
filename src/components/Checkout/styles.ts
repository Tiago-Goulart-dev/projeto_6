import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  color: ${cores.creme};
  h3 {
    margin-bottom: 16px;
    font-size: 16px;
  }
  p {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 22px;
  }
  .flex {
    display: flex;
    gap: 40px;
    input {
      width: 100%;
    }
  }
  .margin {
    margin-top: 16px;
  }
  .flex2 {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
  .width {
    max-width: 95px;
    width: 100%;
  }
  input {
    border: 1px solid ${cores.creme};
    background-color: ${cores.creme};
    width: 100%;
    padding: 8px;
    margin: 8px 0;
  }
`

export const Input = styled.div`
  label {
    color: ${cores.creme};
    display: block;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
  }
  .error {
    border: 2px solid red;
  }
`

export const DeliveryButton = styled.button`
  color: ${cores.rosa};
  background-color: ${cores.creme};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  text-decoration: none;
  border: 1px solid ${cores.creme};
  width: 100%;
  margin-top: 8px;

  &:hover {
    color: ${cores.creme};
    background-color: ${cores.rosa};
  }

  &:active {
    color: ${cores.rosa};
    background-color: ${cores.creme};
  }
`
