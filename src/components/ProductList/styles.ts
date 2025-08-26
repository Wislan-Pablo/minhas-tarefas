import styled from 'styled-components'
import { Props } from '.'
import { Cores } from '../../styles'
import { Produto } from '../Product/styles'

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  width: 100%;
  padding: 24px 0;
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

  ${Titulo} span {
    padding: 8px 16px;
    background-color: ${(props) =>
      props.background === 'gray' ? Cores.preto : Cores.cinza};
  }
`

export const Produtos = styled.ul`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  row-gap: 48px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const List = styled.div`
  background-color: transparent;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
