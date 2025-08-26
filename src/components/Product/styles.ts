import styled from 'styled-components'
import { Cores } from '../../styles'

export const Produto = styled.div`
  padding: 8px;
  border-radius: 8px;
`

export const Titulo = styled.h3``

export const Capa = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    margin-bottom: 8px;
  }
`

export const Prices = styled.div`
  margin: 16px 0;
  color: ${Cores.branco};

  small {
    font-size: 16px;
    text-decoration: line-through;
    margin-right: 8px;
    opacity: 0.7;
  }

  strong {
    font-size: 18px;
  }
`

export const Tag = styled.span`
  background-color: ${Cores.azul};
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 8px;
  font-size: 12px;
  font-weight: 700;
  color: ${Cores.branco};
`
export const Plataformas = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0 0;

  li {
    background-color: ${Cores.azul};
    padding: 8px;
    font-size: 10px;
    white-space: nowrap;
    margin-right: 8px;
    margin-bottom: 8px;
    color: ${Cores.branco};
    font-weight: bold;
  }
`
interface BtnProps {
  $adicionado?: boolean
}

export const BtnComprar = styled.button<BtnProps>`
  display: block;
  width: 100%;
  background-color: ${Cores.azul};
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: ${Cores.branco};
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$adicionado ? Cores.verde : Cores.azul};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`
