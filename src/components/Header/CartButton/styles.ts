import { styled } from "styled-components"
import { Cores } from "../../../styles"

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
