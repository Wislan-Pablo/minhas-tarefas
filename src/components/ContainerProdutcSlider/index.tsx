import * as S from '../ProductList/styles'
import Game from '../../models/Games'
import { ReactNode } from 'react'
import ProductSlider from '../ProductSlider'

export type Props = {
  games?: Game[]
  children?: ReactNode
}

const ContainerProductSlider = ({ children, games }: Props) => {
  return (
    <S.List>
      <S.Produtos>
        {games?.map((game) => (
          <ProductSlider key={game.id} game={game} />
        ))}
      </S.Produtos>
    </S.List>
  )
}

export default ContainerProductSlider
