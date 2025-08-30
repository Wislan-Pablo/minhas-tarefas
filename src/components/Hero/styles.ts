import styled from 'styled-components'

import { Cores } from '../../styles'

export const Banner = styled.div`
  display: block;
  position: relative;
  height: 447px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  overflow: hidden;

  &::after {
    position: absolute;
    background-color: ${Cores.preto};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0;
  }

  .container {
    z-index: 1;
    height: 100%;
    margin: 0 auto;

    div {
      margin-top: 16px;
    }
  }
`
export const InfosProduct = styled.div`
  padding: 32px;
  background-color: ${Cores.preto};
  position: absolute;
  bottom: 48px;
  width: fit-content;
  font-weight: bold;
  opacity: 0.9;
  z-index: 1;

  h2 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      font-size: 16px;
      text-decoration: line-through;
    }
  }
`
