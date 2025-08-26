import Product from '../Product'
import * as S from './styles'
import Game from '../../models/Games'
import { ReactNode } from 'react'

export type Props = {
  title?: string
  background?: 'gray' | 'black' | 'transparent'
  games?: Game[]
  children?: ReactNode
}

const ContainerSection = ({ title, background, games }: Props) => {
  return (
    <S.Container background={background}>
      <div className="container">
        <S.List>
          <S.Titulo>
            <span>{title}</span>
          </S.Titulo>
          <S.Produtos>
            {games?.map((game) => (
              <Product key={game.id} game={game} />
            ))}
          </S.Produtos>
        </S.List>
      </div>
    </S.Container>
  )
}

export default ContainerSection
