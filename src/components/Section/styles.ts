import { styled } from 'styled-components'
import { Cores } from '../../styles'
import { Produto } from '../Product/styles'
import { Props } from './index'

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 40px;
`

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  width: 100%;
  padding: 40px 0;
  background-color: ${(props) =>
    props.background === 'gray'
      ? Cores.cinza
      : props.background === 'black'
      ? Cores.preto
      : Cores.transparent};

  ${Produto} {
    background-color: ${(props) =>
      props.background === 'gray' ? Cores.preto : Cores.cinza};
  }

  ${Title} span {
    padding: 8px 16px;
    background-color: ${(props) =>
      props.background === 'gray' ? Cores.preto : Cores.cinza};
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
