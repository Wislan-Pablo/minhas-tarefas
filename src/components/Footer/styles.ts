import styled from 'styled-components'
import { Cores } from '../../styles'

export const Rodape = styled.footer`
  background-image: linear-gradient(45deg, ${Cores.preto}, ${Cores.azul});
  padding: 16px;
  margin-top: 48px;
  color: ${Cores.branco};
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 28.9%;
    margin-bottom: 40px;
  }

  .logo {
    width: 180px; /* mesma dimensão do Header */
    height: auto;
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
    margin-bottom: 24px;

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
    font-size: 16px;
    text-align: center;
    margin: 0;
    position: absolute;
    bottom: 16px;
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
