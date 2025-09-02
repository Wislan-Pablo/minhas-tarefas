import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: 2px solid ${Cores.branco};
  color: ${Cores.branco};
  background: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${Cores.branco};
  color: ${Cores.branco};
  background: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-position 0.3s ease-in-out; /* Transição suave */

  &:hover {
    background-image: linear-gradient(-45deg, ${Cores.verde}, ${Cores.azul});
    background-size: 200%; /* Define o tamanho do gradiente */
    background-position: right center; /* Move o gradiente */
    color: ${Cores.branco}; /* Mantém a cor do texto */
    border: none; /* Remove a borda */
    cursor: pointer;
    padding: 10px 18px; /* Mantém o mesmo tamanho */
  }
`

export const ButtonCTA = styled.a`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 8px;
  background-image: linear-gradient(45deg, ${Cores.azul}, ${Cores.verde});
  background-size: 200%;
  background-position: left;
  transition: background-color 0.3s ease, transform 0.4s ease;

  &:hover {
    background-position: right;
    cursor: pointer;
    transform: scale(1.03);
  }
`
