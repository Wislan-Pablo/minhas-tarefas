import styled from 'styled-components'

export const Produtos = styled.ul`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  row-gap: 48px;

  @media (max-width: 1160px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const List = styled.div`
  background-color: transparent;
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
`
