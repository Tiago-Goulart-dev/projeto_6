import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonLink = styled(Link)`
  color: ${cores.creme};
  background-color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`

export const ButtonContainer = styled.button`
  color: ${cores.rosa};
  background-color: ${cores.creme};
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  border: 1px solid ${cores.creme};

  &:hover {
    color: ${cores.creme};
    background-color: ${cores.rosa};
    cursor: pointer;
  }

  &:active {
    color: ${cores.rosa};
    background-color: ${cores.creme};
  }
`
