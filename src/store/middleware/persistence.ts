import { Middleware, AnyAction } from '@reduxjs/toolkit'

// Chave para armazenar os dados no localStorage
const PERSISTENCE_KEY = 'eplay-store'

// Tipo para o estado persistido (sem referência circular)
type PersistedState = {
  carrinho?: {
    itens: any[]
  }
  sidebar?: {
    open: boolean
  }
}

// Função para salvar o estado no localStorage
export const saveToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(PERSISTENCE_KEY, serializedState)
  } catch (error) {
    console.error('Erro ao salvar no localStorage:', error)
  }
}

// Função para carregar o estado do localStorage
export const loadFromLocalStorage = (): PersistedState | undefined => {
  try {
    const serializedState = localStorage.getItem(PERSISTENCE_KEY)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    console.error('Erro ao carregar do localStorage:', error)
    return undefined
  }
}

// Middleware para persistir automaticamente as mudanças
export const persistenceMiddleware: Middleware = (store) => (next) => (action: unknown) => {
  // Carrega o estado inicial do localStorage na primeira execução
  if (typeof action === 'object' && action !== null && 'type' in action && 
      typeof action.type === 'string' && action.type === '@@INIT') {
    const persistedState = loadFromLocalStorage()
    if (persistedState) {
      // Aplica o estado persistido
      if (persistedState.carrinho) {
        store.dispatch({ type: 'carrinho/REHYDRATE', payload: persistedState.carrinho })
      }
      if (persistedState.sidebar) {
        store.dispatch({ type: 'sidebar/REHYDRATE', payload: persistedState.sidebar })
      }
    }
  }
  
  const result = next(action)
  
  // Salva o estado após cada ação (exceto para ações internas do Redux)
  if (typeof action === 'object' && action !== null && 'type' in action && 
      typeof action.type === 'string' && !action.type.startsWith('persist/') && 
      !action.type.includes('REHYDRATE')) {
    const state = store.getState()
    saveToLocalStorage(state)
  }
  
  return result
}

// Função para limpar dados persistidos
export const clearPersistedData = () => {
  try {
    localStorage.removeItem(PERSISTENCE_KEY)
  } catch (error) {
    console.error('Erro ao limpar dados persistidos:', error)
  }
}
