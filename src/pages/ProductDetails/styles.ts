// pages/ProductDetails/styles.ts
import styled from 'styled-components'
import { Cores } from '../../styles'

export const ContainerDetails = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 32px;
  }

  .flexDiv {
    max-width: 800px;
    align-items: top;
    padding: 0 32px;
  }

  .content {
    max-width: 300px;
    width: 100%;
    font-size: 14px;
    margin-left: 16px;
  }
`

export const ContainerDescription = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 32px;
  background-color: ${Cores.preto};
  margin: 0 auto;
  text-align: justify;
`

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  max-width: 100%;
  max-width: 800px;
  height: 400px;
  margin: 0 auto;
  gap: 16px; /* espaço entre colunas, opcional */

  ul {
    font-size: 14px;
    list-style: none;
    padding: 0 16px;
    margin: 0;
    width: fit-content;
    heigth: auto;
    overflow: hidden;
    text-align: left;
  }

  li {
    font-size: 14px;
    width: 100%;
    height: 64px;
  }
`

export const LegalText = styled.p`
  position: relative;
  text-align: center;
  margin-top: 48px;
`
