import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Game } from '../../App'

type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já foi adicionado.')
      } else {
        state.itens.push(jogo)
      }
    },
    remover: (state, action) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    esvaziar: (state) => {
      state.itens = []
    }
  }
})

export const { adicionar, remover, esvaziar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
