import styled, { keyframes } from 'styled-components'
import { Cores } from '../../../styles'
import { ButtonLink } from '../../Button/styles'

export const Sidebar = styled.div<{ open: boolean; scrollable: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 380px;
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
  padding: 24px;
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

const fadeOut = keyframes`
  0% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
`

export const ContainerProductCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 2px 4px;
  border: 1px solid ${Cores.branco};
  margin-bottom: 12px;
  text-decoration: none;

  button {
    display: flex;
    vertical-align: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  .removed-message {
    color: ${Cores.branco};
    font-weight: bold;
    animation: ${fadeOut} 2s forwards;
  }

  svg {
    width: 28px;
    height: 28px;
    transition: fill 0.4s ease, stroke 0.3s ease;

    &:hover {
      fill: ${Cores.branco};
      stroke: ${Cores.azul};
    }
  }

  li {
    a {
      color: ${Cores.branco};

      &:hover {
        text-decoration: underline;
      }
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
  padding: 0 24px;

  h2 {
    font-size: 20px;
    margin-right: 8px;
    font-weight: normal;
  }

  p {
    text-align: left;
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

  ${ButtonLink} {
    width: 100%;
    display: flex;
    padding: 12px;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;

    &:hover {
      transform: scale(1.03);
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`

export const Wireframe = styled.div`
  border: 1px dashed #999;
  padding: 8px;
  border-radius: 6px;
  background: rgba(240, 240, 240, 0.4);
  margin-bottom: 8px;
`
