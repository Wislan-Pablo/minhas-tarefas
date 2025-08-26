import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Game } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'
import { RootReducer } from '../../store'

type Props = {
  game: Game
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Product = ({ game }: Props) => {
  const dispatch = useDispatch()
  const itensCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )
  const [adicionado, setAdicionado] = useState(false)

  const handleAdicionar = () => {
    dispatch(adicionar(game))
    setAdicionado(true)
  }

  // Sincroniza o botão com o carrinho
  useEffect(() => {
    const existeNoCarrinho = itensCarrinho.some((item) => item.id === game.id)
    setAdicionado(existeNoCarrinho)
  }, [itensCarrinho, game.id])

  return (
    <S.Produto>
      <S.Capa>
        <S.Tag>{game.categoria}</S.Tag>
        <img src={game.imagem} alt={game.titulo} />
      </S.Capa>
      <S.Titulo>{game.titulo}</S.Titulo>
      <S.Plataformas>
        {game.plataformas.map((plat) => (
          <li key={plat}>{plat}</li>
        ))}
      </S.Plataformas>
      <S.Prices>
        {game.precoAntigo && <small>{paraReal(game.precoAntigo)}</small>}
        <strong>{paraReal(game.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={handleAdicionar}
        type="button"
        $adicionado={adicionado}
      >
        {adicionado ? 'Adicionado com sucesso!' : 'Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Product
