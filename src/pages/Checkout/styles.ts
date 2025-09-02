import styled from 'styled-components'
import { Cores } from '../../styles'

export const Row = styled.div`
  text-align: left;
  margin-bottom: 40px;

  display: flex;
  column-gap: 32px;
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    font-size: 16px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${Cores.branco};
    height: 32px;
    padding: 8px;
    border: 1px solid transparent;
    width: 100%;
  }
`
