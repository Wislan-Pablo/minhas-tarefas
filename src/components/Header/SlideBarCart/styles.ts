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

export const ContainerRetornar = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 8px 0 0 24px;
  }

  svg {
    width: 32px;
    height: 32px;
    margin-right: 8px;
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
  border-radius: 6px;
  padding-top: 2px;
  border: 1px solid ${Cores.branco};
  margin-bottom: 12px;
  text-decoration: none;

  button {
    padding: 0 4px;
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
    margin-right: 4px;
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
  padding: 24px;

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

  .TitleSideBarContent {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 16px;
  }

  .NumberBasket {
    background-color: ${Cores.branco};
    color: ${Cores.azul};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    z-index: 1000;
  }

  .NumberBasket strong {
    font-size: 16px;
    color: ${Cores.azul};
    margin: 0; /* remove o margin-left do strong padrão */
  }

  strong {
    font-size: 20px;
    font-weight: semi-bold;
    margin-top: 16px;
    margin-bottom: 24px;
    display: block;
  }

  ${ButtonLink} {
    max-width: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;

    &:hover {
      transform: scale(1.03);
    }

    svg {
      width: 32px;
      height: 32px;
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
