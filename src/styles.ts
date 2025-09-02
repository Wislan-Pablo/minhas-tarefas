import { createGlobalStyle } from 'styled-components'

export const Cores = {
  branco: '#FFFFFF',
  preto: '#111111',
  cinza: '#333333',
  cinzaClaro: '#D8D9D7',
  verde: '#10AC84',
  azul: '#065a60',
  ocre: '#D99414',
  bege: '#FFD169',
  branco2: '#F2F2F0',
  transparent: 'transparent'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 16px;
    font-optical-sizing: auto;
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

  .centralizadorVertical {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    height: auto;
    margin: 0 auto;
  }

  .containerBanner {
    width: 100%;
    height: 580px;
    position: relative;
    background-color: ${Cores.cinza};
  }

  .flexDiv {
    width: 100%;
    display: flex;
    margin: 0 auto;
    padding: 0;
    justify-content: space-between;
  }

`
