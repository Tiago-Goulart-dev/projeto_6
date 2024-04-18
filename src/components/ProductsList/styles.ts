import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section<Props>`
  padding: 32px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin: 0 171px;
`
