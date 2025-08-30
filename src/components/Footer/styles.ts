import styled from 'styled-components'
import { Cores } from '../../styles'
import { GlobalCss } from '../../styles'

export const Rodape = styled.footer`
  background-image: linear-gradient(45deg, ${Cores.preto}, ${Cores.azul});
  padding: 32px 32px 8px 32px;
  margin-top: 48px;
  color: ${Cores.branco};
  position: relative;

  .footer-top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
  }

  .logo {
    width: 179px; /* mesma dimensão do Header */
    height: 59px;
  }

  .footer-menu,
  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .footer-menu a,
  .footer-links a {
    color: ${Cores.branco};
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  .social {
    gap: 16px;
    margin: 32px 0;

    .social-links {
      text-align: center;

      span {
        display: block;
        margin-bottom: 16px;
      }

      li {
        display: inline;
        margin: 0 8px;
      }

      a {
        svg {
          fill: ${Cores.branco};
          width: 24px;
          height: 24px;
          transition: transform 0.2s ease;

          &:hover {
            transform: scale(1.3);
          }
        }
      }
    }
  }

  p {
    position: relative;
    text-align: center;
  }

  @media (max-width: 768px) {
    .footer-top {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .footer-menu,
    .footer-links {
      align-items: center;
    }
  }
`
