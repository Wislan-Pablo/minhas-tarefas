import Product from '../Product'
import * as S from './styles'
import Game from '../../models/Games'
import { ReactNode } from 'react'

export type Props = {
  games?: Game[]
  children?: ReactNode
}

const ProductList = ({ children, games }: Props) => {
  console.log(games)
  return (
    <S.List>
      <S.Produtos>
        {games?.map((game) => (
          <Product key={game.id} game={game} />
        ))}
      </S.Produtos>
    </S.List>
  )
}

export default ProductList
