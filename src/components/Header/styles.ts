import styled, { css } from 'styled-components'
import { Cores } from '../../styles'

export const HeaderBar = styled.header`
  background-image: linear-gradient(45deg, ${Cores.preto}, ${Cores.azul});
  padding: 16px 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 999;

  &.fixed {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    opacity: 0.95;
  }

  .containerSemMargem {
    display: flex;
    justify-content: space-between;
  }

  a {
    color: ${Cores.branco};
    text-decoration: none;
    font-weight: semi-bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  .logo {
    height: 40px;
    width: auto;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 24px;
`

interface TitleProps {
  active?: boolean
}

export const Title = styled.li<TitleProps>`
  margin-right: 4px;
  padding: 8px 12px;
  border: 2px solid transparent;

  &:hover {
    text-decoration: underline;
  }

  ${({ active }) =>
    active &&
    css`
      a {
        font-weight: bold;
      }
    `}
`

export const DropdownContainer = styled.div`
  position: relative;
`

export const TitleDropdown = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 4px;
  padding: 6px 12px;
  border: 2px solid transparent;
  width: fit-content;

  &.active {
    background-color: ${Cores.azul};
    border-top: 2px solid ${Cores.branco};
    border-right: 2px solid ${Cores.branco};
    border-left: 2px solid ${Cores.branco};
    border-radius: 4px 4px 0 0;
  }

  a {
    color: ${Cores.branco};
  }
`

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 88%;
  left: 0;
  background-color: ${Cores.azul};
  border: 2px solid ${Cores.branco};
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 6px ${Cores.preto};
  list-style: none;
  z-index: 1000;
  width: calc(100% - 4px);

  /* Estado inicial: invisível e sem interações */
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;

  /* Transições suaves de opacidade e posição */
  transition: opacity 0.3s ease, transform 0.3s ease;

  &.active {
    /* Quando ativo: visível e interativo */
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`

export const DropdownItem = styled.li`
  height: auto;
  padding: 0;

  a {
    display: block;
    height: 100%;
    padding: 6px 16px;
    text-decoration: none;
    color: ${Cores.branco};
    font-weight: semi-bold;
    transition: color 0.2s ease, background-color 0.2s ease;
  }

  a:hover {
    color: ${Cores.azul};
    background-color: ${Cores.branco};
    font-weight: bold;
  }
`

export const ContainerMenuRight = styled.div`
  max-width: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 16px;
  justify-content: space-between;
`

export const BtnSearch = styled.div`
  padding: 0;

  svg {
    margin: auto;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05) rotate(90deg);
      cursor: pointer;
    }
  }
`
export const LinkCart = styled.div`
  &:hover {
    cursor: pointer;
  }
`

export const ContainerCart = styled.div`
  width: 40px;
  height: 40px;
  position: relative;

  .NumberBasket {
    position: absolute;
    top: 1px; /* sobe a bolinha */
    right: 3px; /* desloca levemente para a esquerda */
    background-color: ${Cores.branco};
    color: ${Cores.azul};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    z-index: 1000;
  }

  .NumberBasket strong {
    font-size: 12px;
    color: ${Cores.azul};
    margin: 0; /* remove o margin-left do strong padrão */
  }
`

export const ContainerUserLogin = styled.div`
  span {
    font-size: 14px;
    margin-left: 4px;
  }

  a:hover {
    text-decoration: underline;
  }
`
// *** Bloco do campo de busca ***
export const ContainerSearch = styled.div`
  position: absolute;
  top: 74px; /* altura do HeaderBar fixo */
  left: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.4s ease-in-out;

  input {
    flex: 1;
    max-width: 46%;
    padding: 8px;
    font-size: 18px;
    border-radius: 8px;
    color: ${Cores.branco};
    border: 2px solid white;
    background: rgba(6, 90, 96, 0.9);

    /* Placeholder branco */
    &::placeholder {
      color: ${Cores.branco};
    }

    /* Não alterar nada ao focar/digitar */
    &:focus {
      outline: none; /* remove o contorno azul padrão */
      border: 2px solid white; /* mantém a borda original */
    }

    /* Mostra o X nativo e altera cor para branco */
    &::-webkit-search-cancel-button {
      -webkit-appearance: none; /* garante que podemos estilizar */
      height: 16px;
      width: 16px;
      background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='white' fill='none' stroke-width='3'><line x1='18' y1='6' x2='6' y2='18'/><line x1='6' y1='6' x2='18' y2='18'/></svg>")
        no-repeat center;
      background-size: contain;
      cursor: pointer;
    }
  }

  button {
    margin-left: 8px;
    padding: 10px 12px;
    font-size: 16px;
    border-radius: 8px;
    color: ${Cores.branco};
    border: 2px solid white;
    background: rgba(6, 90, 96, 0.8);
    cursor: pointer;
    margin-left: 16px;
  }

  &.fixed {
    position: fixed;
    top: 74px; /* altura do HeaderBar fixo */
    left: 0;
    z-index: 999;
  }

  &.show {
    opacity: 1;
  }
`

export const SidebarOverlay = styled.div<{ open: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(50, 50, 50, 0.99);
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
`
