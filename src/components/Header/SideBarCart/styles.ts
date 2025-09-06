import styled, { keyframes } from 'styled-components'
import { Cores } from '../../../styles'
import { ButtonLink } from '../../Button/styles'

export const Sidebar = styled.div<{ open: boolean; scrollable: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 380px;
  padding: 24px;
  height: 100vh;
  background: ${Cores.azul};
  color: ${Cores.branco};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  /* Wireframe scrollável automático */
  overflow-y: ${({ scrollable }) => (scrollable ? 'auto' : 'hidden')};
`

export const HeaderCart = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
  }

  div {
    padding: 4px;
    cursor: pointer;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

export const ContainerVoidCart = styled.div`
  width: 100%;
  display: block;

  img {
    width: 200px;
    height: auto;
    margin: 24px auto;
  }

  a {
    color: ${Cores.branco};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`
export const BtnEsvaziarCesta = styled.div`
  a {
    font-size: 16px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

export const SidebarContent = styled.div`
  padding: 0;

  h1 {
    font-size: 24px;
    margin-right: 8px;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 20px;
    margin-right: 8px;
    font-weight: normal;
  }

  p {
    text-align: left;
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 16px;
  }

  .prices {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .codigoCupom {
    width: 100%;
    display: block;
    margin-top: 48px;

    label {
      font-size: 16px;
      font-weight: semi-bold;
    }

    input {
      width: 100%;
      heigth: 48px;
      padding: 8px 16px;
      border-radius: 24px;
      border: 1px solid ${Cores.azul};
      color: ${Cores.branco};
      background-color: rgba(6, 6, 6, 0.3);
      margin-top: 16px;

      &::active {
        border: 1px solid ${Cores.branco};
      }
    }
  }

  strong {
    font-size: 16px;
    font-weight: semi-bold;
    margin-top: 16px;
    display: block;
  }

  b {
    font-size: 14px;
  }

  .btnMetodoPag {
    width: 100%;
    display: block;
    margin-top: 24px;

    span {
      font-weight: semi-bold;
    }
  }
`

export const BtnPagamento = styled.button`
  width: 100%;
  display: flex;
  padding: 12px;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
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
    transform: scale(1.03);
  }

  svg {
    display: block;
    width: 24px;
    height: 24px;
    view-box: auto;
  }
}
`

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const Wireframe = styled.div`
  border: 1px dashed #999;
  padding: 8px;
  border-radius: 6px;
  background: rgba(240, 240, 240, 0.4);
  margin-bottom: 8px;
`
