import React from 'react'
import styled from 'styled-components'
import { usePersistence } from '../../hooks/usePersistence'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const DebugContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-size: 12px;
  z-index: 9999;
  max-width: 300px;
  display: none; /* Oculto por padrão, pode ser ativado com display: block para debug */

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    right: auto;
    margin: 10px;
    max-width: 100%;
  }
`

const Button = styled.button`
  background: #ff6b35;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin: 2px;
  font-size: 10px;

  &:hover {
    background: #e55a2b;
  }
`

const Info = styled.div`
  margin: 5px 0;
  padding: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
`

const PersistenceDebug: React.FC = () => {
  const { clearAllData, clearCart, hasPersistedData, getPersistedDataInfo } = usePersistence()
  const carrinho = useSelector((state: RootState) => state.carrinho)
  const sidebar = useSelector((state: RootState) => state.sidebar)

  const dataInfo = getPersistedDataInfo()

  return (
    <DebugContainer>
      <h4>Debug Persistência</h4>
      
      <Info>
        <strong>Carrinho:</strong> {carrinho.itens.length} itens
      </Info>
      
      <Info>
        <strong>Sidebar:</strong> {sidebar.open ? 'Aberta' : 'Fechada'}
      </Info>
      
      <Info>
        <strong>Dados no localStorage:</strong> {hasPersistedData() ? 'Sim' : 'Não'}
      </Info>
      
      {dataInfo && (
        <Info>
          <strong>Última atualização:</strong> {new Date(dataInfo.lastUpdated).toLocaleString()}
        </Info>
      )}
      
      <div>
        <Button onClick={clearCart}>
          Limpar Carrinho
        </Button>
        <Button onClick={clearAllData}>
          Limpar Tudo
        </Button>
      </div>
    </DebugContainer>
  )
}

export default PersistenceDebug
