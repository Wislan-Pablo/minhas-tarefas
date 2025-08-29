import bannerImg404 from '../../assets/images/404_Not_Found.png'
import styled from 'styled-components'
import { Cores } from '../../styles'

export const NotFound = styled.div`
  min-width: 600px;
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  padding-top: 32px;
  margin: 32px auto;
  text-align: center;
  color: ${Cores.branco};
  border-radius: 16px;

  background-image: url(${bannerImg404});
  background-repeat: non-repeat;
  background-size: 100%;
  backgroun-size: cover;

  a {
    color: #4a4a4a;
    font-size: 28px;
    font-weight: bold;
    text-decoration: underline;

    &:hover {
      color: ${Cores.branco};
    }
  }
`
