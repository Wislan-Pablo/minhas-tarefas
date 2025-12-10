import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { clearPersistedData } from '../store/middleware/persistence'
import { esvaziar } from '../store/reducers/carrinho'
import { fecharSidebar } from '../store/reducers/sidebar'
import { RootState } from '../store'

export const usePersistence = () => {
  const dispatch = useDispatch()

  // Função para limpar todos os dados persistidos
  const clearAllData = useCallback(() => {
    // Limpa o localStorage
    clearPersistedData()
    
    // Reseta os estados Redux para os valores iniciais
    dispatch(esvaziar()) // Limpa o carrinho
    dispatch(fecharSidebar()) // Fecha a sidebar
    
    // Recarrega a página para aplicar as mudanças
    window.location.reload()
  }, [dispatch])

  // Função para limpar apenas o carrinho
  const clearCart = useCallback(() => {
    dispatch(esvaziar())
  }, [dispatch])

  // Função para verificar se há dados persistidos
  const hasPersistedData = useCallback(() => {
    try {
      const data = localStorage.getItem('eplay-store')
      return data !== null
    } catch (error) {
      console.error('Erro ao verificar dados persistidos:', error)
      return false
    }
  }, [])

  // Função para obter informações sobre os dados persistidos
  const getPersistedDataInfo = useCallback(() => {
    try {
      const data = localStorage.getItem('eplay-store')
      if (data) {
        const parsed = JSON.parse(data)
        return {
          hasCartItems: parsed.carrinho?.itens?.length > 0,
          cartItemsCount: parsed.carrinho?.itens?.length || 0,
          sidebarOpen: parsed.sidebar?.open || false,
          lastUpdated: new Date().toISOString()
        }
      }
      return null
    } catch (error) {
      console.error('Erro ao obter informações dos dados persistidos:', error)
      return null
    }
  }, [])

  return {
    clearAllData,
    clearCart,
    hasPersistedData,
    getPersistedDataInfo
  }
}
