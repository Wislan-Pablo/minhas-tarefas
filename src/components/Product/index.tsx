import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '../../store'
import { Game } from '../../App'
import * as S from './styles'
import { abrirSidebar, fecharSidebar } from '../../store/reducers/sidebar'
import { useAdicionarCarrinho } from '../../hooks/HookAdicionarAoCarrinho'

type Props = {
  game: Game
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Product = ({ game }: Props) => {
  const { adicionado, handleAdicionar } = useAdicionarCarrinho(game)
  const dispatch = useDispatch()
  return (
    <S.Produto>
      <Link to={`/product-details/${game.id}`} state={{ game }}>
        <div className="linkProduto">
          <S.Capa>
            <S.Tag>{game.categoria}</S.Tag>
            <img src={game.imagem} alt={game.titulo} />
          </S.Capa>
          <S.Titulo>
            <a>{game.titulo}</a>
          </S.Titulo>
        </div>
      </Link>

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
        onClick={() => {
          handleAdicionar()
          dispatch(abrirSidebar()) // abre a sidebar global
        }}
        $adicionado={adicionado}
        disabled={adicionado}
      >
        {adicionado ? 'Produto no carrinho :)' : 'Adicionar ao carrinho'}
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Product
