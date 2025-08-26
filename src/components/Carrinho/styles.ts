import styled from 'styled-components'
import { Cores } from '../../styles'

export const ContainerCart = styled.div`
  min-width: 600px;
  width: 100%;
  height: 480px;
  background-color: ${Cores.azul};
  margin: 0 auto;
  text-align: center;
  padding: 24px;
  border-radius: 16px;

  h1 {
    color: ${Cores.branco};
    font-size: 24px;
  }
`
