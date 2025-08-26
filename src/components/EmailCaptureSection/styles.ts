import { styled } from 'styled-components'
import { ButtonCTA } from '../Button/styles'
import { Cores } from '../../styles'

export const ContainerEmailCapture = styled.div`
  background-color: ${Cores.azul};
  padding: 32px;
  border-radius: 16px;
  text-align: center;

  h2,
  p {
    margin-bottom: 24px;
  }
`

export const FormEmailCapture = styled.form`
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  input {
    font-size: 16px;
    padding: 10px;
    border: none;
    border-radius: 4px 0 0 4px;
    width: 100%;
    min-width: 200px; /* Garantir uma largura mínima */
    outline: none; /* remove o contorno ao focar */
  }
`
export const BotaoCTA = styled(ButtonCTA)`
  width: 35%;
  min-width: 48px; /* Garantir uma largura mínima */
  cursor: pointer;
  border: 2px solid: ${Cores.azul};
  border-radius: 0 4px 4px 0;
  transition: background-color 0.4s ease, transform 0.4s ease;

  &: hover {
    transform: scale(1.03);
  }
`
