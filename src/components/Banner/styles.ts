import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .containerSemMargem {
    max-width: 1024px;
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    border-radius: 8px;
    top: 32px;
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Precos = styled.p`
  margin-top: 24px;
  font-size: 24px;

  span {
    text-decoration: line-through;
    font-size: 20px;
  }
`
