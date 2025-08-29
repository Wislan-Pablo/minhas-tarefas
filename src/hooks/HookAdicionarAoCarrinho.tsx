import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar } from '../store/reducers/carrinho'
import { RootReducer } from '../store'
import { Game } from '../App'

export function useAdicionarCarrinho(game: Game) {
  const dispatch = useDispatch()
  const itensCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )

  const [adicionado, setAdicionado] = useState(false)

  const handleAdicionar = () => {
    dispatch(adicionar(game))
    setAdicionado(true)
  }

  useEffect(() => {
    const existeNoCarrinho = itensCarrinho.some((item) => item.id === game.id)
    setAdicionado(existeNoCarrinho)
  }, [itensCarrinho, game.id])

  return { adicionado, handleAdicionar }
}
