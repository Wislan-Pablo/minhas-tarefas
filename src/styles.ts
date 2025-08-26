import { createGlobalStyle } from 'styled-components'

export const Cores = {
  branco: '#EEEEEE',
  preto: '#111111',
  cinza: '#333333',
  verde: '#10AC84',
  azul: '#065a60',
  transparent: 'transparent'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  ul, li {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  body{
    background-color: ${Cores.cinza};
    color: ${Cores.branco};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 32px auto;
  }

`
