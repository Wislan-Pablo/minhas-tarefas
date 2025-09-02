import styled from 'styled-components'
import { Cores } from '../../styles'

export const ContainerCart = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  border-radius: 16px;

  h1 {
    color: ${Cores.branco};
    font-size: 24px;
  }

  h2,
  h3 {
    font-size: 18px;
    fontweight: bold;
    margin-bottom: 24px;
  }

  p {
    font-size: 16px;
    line-height: 22px;
    text-align: justify;
  }
`
