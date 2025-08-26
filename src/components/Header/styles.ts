import styled, { keyframes } from 'styled-components'
import { Cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const HeaderBar = styled.header`
  background-image: linear-gradient(45deg, ${Cores.preto}, ${Cores.azul});
  padding: 16px 24px;
  border-radius: 16px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 1024px;
  width: 100%;
  z-index: 999;

  &.fixed {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 16px 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    opacity: 0.95;
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

export const Title = styled.li`
  margin-right: 4px;
  padding: 8px 12px;
  border: 2px solid transparent;
`

export const DropdownContainer = styled.div`
  position: relative;
`

export const TitleDropdown = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 4px;
  padding: 8px 12px;
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
  top: 90%;
  left: 0;
  background-color: ${Cores.azul};
  border: 2px solid ${Cores.branco};
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 6px ${Cores.preto};
  list-style: none;
  z-index: 1000;
  width: calc(100% - 4px);

  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`

export const DropdownItem = styled.li`
  height: auto;
  padding: 0;

  a {
    display: block;
    height: 100%;
    padding: 8px 16px;
    text-decoration: none;
    color: ${Cores.branco};
    font-weight: semi-bold;
    transition: color 0.3s ease, background-color 0.3s ease;
  }

  a:hover {
    color: ${Cores.azul};
    background-color: ${Cores.branco};
    font-weight: bold;
  }
`

export const ContainerMenuRight = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const BtnSearch = styled.div`
  svg {
    width: 36px;
    height: 36px;
    transform: rotate(100deg);

    &:hover {
      cursor: pointer;
    }
  }
`

export const ContainerCart = styled.div`
  padding: 8px 16px;
  background-color: ${Cores.azul};
  border-radius: 8px;
  background-image: linear-gradient(45deg, ${Cores.azul}, ${Cores.verde});
  background-size: 200%;
  background-position: left;
  transition: background-position 0.3s ease-in-out;

  &:hover {
    background-position: right;
    transform: scale(1.03);
    transition: transform 0.3s ease-in-out;
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

export const LinkCart = styled.div`
  display: flex;
  align-items: center;

  strong {
    font-size: 16px;
    margin-left: 6px;
  }

  &:hover {
    cursor: pointer;
  }
`
// *** Bloco do campo de busca ***
export const ContainerSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;

  input {
    flex: 1;
    max-width: 600px;
    padding: 8px;
    font-size: 18px;
    border-radius: 8px;
    color: ${Cores.branco};
    border: 2px solid white;
    background: rgba(6, 90, 96, 0.8);

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
  }

  &.fixed {
    position: fixed;
    top: 70px; /* altura do HeaderBar fixo */
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
  background: rgba(0, 0, 0, 0.4);
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
`

export const Sidebar = styled.div<{ open: boolean }>`
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
    margin: 8px 0 16px 24px;
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
    transition: fill 0.4s ease, stroke 0.3s ease;

    &:hover {
      fill: ${Cores.branco};
      stroke: ${Cores.azul};
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
    margin-bottom: 16px;
  }

  p {
    text-align: left;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 16px;
  }

  strong {
    font-size: 18px;
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
