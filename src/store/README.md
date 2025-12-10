# Sistema de Persistência Local

Este sistema implementa persistência automática dos estados Redux usando localStorage, garantindo que os dados do usuário sejam mantidos mesmo após recarregar a página ou fechar o navegador.

## Como Funciona

### 1. Middleware de Persistência
- **Arquivo**: `src/store/middleware/persistence.ts`
- **Função**: Intercepta todas as ações Redux e salva automaticamente o estado no localStorage
- **Chave de armazenamento**: `eplay-store`

### 2. Carregamento Inicial
- **Arquivo**: `src/store/index.ts`
- **Função**: Carrega o estado persistido do localStorage na inicialização do store
- **Fallback**: Se não houver dados persistidos, usa o estado inicial padrão

### 3. Hook Personalizado
- **Arquivo**: `src/hooks/usePersistence.ts`
- **Função**: Fornece funções utilitárias para gerenciar a persistência

## Estados Persistidos

- **Carrinho**: Lista de itens adicionados pelo usuário
- **Sidebar**: Estado de abertura/fechamento da sidebar do carrinho

## Funcionalidades Disponíveis

### usePersistence Hook

```typescript
const { 
  clearAllData,      // Limpa todos os dados persistidos
  clearCart,         // Limpa apenas o carrinho
  hasPersistedData,  // Verifica se há dados persistidos
  getPersistedDataInfo // Obtém informações sobre os dados
} = usePersistence()
```

### Funções de Persistência

```typescript
import { 
  saveToLocalStorage,    // Salva estado no localStorage
  loadFromLocalStorage,  // Carrega estado do localStorage
  clearPersistedData     // Limpa dados do localStorage
} from '../store/middleware/persistence'
```

## Como Testar

1. **Adicione itens ao carrinho**
2. **Recarregue a página** - os itens devem permanecer
3. **Feche e abra o navegador** - os itens devem permanecer
4. **Use o componente de debug** (opcional) para monitorar o estado

## Componente de Debug

O componente `PersistenceDebug` pode ser usado para desenvolvimento:

```typescript
import PersistenceDebug from '../components/PersistenceDebug'

// Adicione ao seu componente principal (apenas para desenvolvimento)
<PersistenceDebug />
```

Para ativar o debug, altere `display: none` para `display: block` no arquivo de estilos.

## Tratamento de Erros

O sistema inclui tratamento de erros para:
- Falhas ao salvar no localStorage
- Falhas ao carregar do localStorage
- Dados corrompidos no localStorage

## Limitações

- **Tamanho**: localStorage tem limite de ~5-10MB
- **Compatibilidade**: Requer navegadores que suportem localStorage
- **Dados sensíveis**: Não use para dados sensíveis (localStorage é acessível via JavaScript)

## Estrutura de Dados Persistidos

```json
{
  "carrinho": {
    "itens": [
      {
        "id": 1,
        "nome": "Jogo Exemplo",
        "preco": 99.90,
        // ... outros campos do jogo
      }
    ]
  },
  "sidebar": {
    "open": false
  }
}
```
