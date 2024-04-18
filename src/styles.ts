import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#ffffff',
  rosa: '#E66767',
  fundo: '#FFF8F2',
  creme: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:Roboto, sans-serif;
    list-style:none;

  body {
    background-color: ${cores.fundo};
    color: ${cores.rosa};
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }
}
`
