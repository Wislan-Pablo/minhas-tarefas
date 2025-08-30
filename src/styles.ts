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
    font-family: "IBM Plex Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings:
    "wdth" 100;
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
    margin-top: 0;
  }

  .container {
    max-width: 1160px;
    width: 100%;
    margin: 48px auto;
  }

  .containerSemMargem {
    max-width: 1160px;
    width: 100%;
    margin: 0 auto;
  }

  .containerBanner {
    width: 100%;
    height: 580px;
    position: relative;
    background-color: ${Cores.preto};
  }

  .flexDiv {
    width: 100%;
    display: flex;
    margin: 0 auto;
    padding: 0;
    justify-content: space-between;
  }

`
