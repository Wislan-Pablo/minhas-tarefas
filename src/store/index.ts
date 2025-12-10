import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import sidebarReducer from './reducers/sidebar'
import api from '../Services/api'
import { persistenceMiddleware } from './middleware/persistence'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    sidebar: sidebarReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, persistenceMiddleware)
})

// Tipo para o estado raiz
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
