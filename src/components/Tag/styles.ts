import styled from 'styled-components'
import { Cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.azul};
  color: ${Cores.branco};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px;')};
  display: inline-block;
  margin-right: 16px;
`
