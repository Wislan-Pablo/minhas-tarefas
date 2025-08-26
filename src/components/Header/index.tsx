import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { remover, esvaziar } from '../../store/reducers/carrinho'
import {
  HeaderBar,
  LinkCart,
  Links,
  Title,
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  TitleDropdown,
  ContainerCart,
  Sidebar,
  SidebarOverlay,
  SidebarContent,
  ContainerRetornar,
  ContainerProductCart,
  ContainerUserLogin,
  ContainerMenuRight,
  BtnSearch,
  BtnEsvaziarCesta,
  ContainerSearch
} from './styles'
import logo from '../../assets/images/logo2.svg'
import { RootReducer } from '../../store'

import { paraReal } from '../Product'
import Button from '../Button'

type RemovedPlaceholder = {
  id: number
  position: number // posição visual na <ul> no momento da remoção
  height: number // altura medida para manter o layout
}

const Header = () => {
  const dispatch = useDispatch()
  const [showCategories, setShowCategories] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  const [clearedMessage, setClearedMessage] = useState(false)

  // Mensagens/espaçadores para itens removidos
  const [removedPlaceholders, setRemovedPlaceholders] = useState<
    RemovedPlaceholder[]
  >([])

  // Refs dos nós de cada item para medir altura e posição visual
  const itemRefs = useRef<Map<number, HTMLDivElement | null>>(new Map())

  // estado do campo de busca
  const [showSearch, setShowSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleMouseEnter = () => setShowCategories(true)
  const handleMouseLeave = () => setShowCategories(false)

  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const valorTotal = itens.reduce((acc, item) => acc + item.preco, 0)

  const [searchVisible, setSearchVisible] = useState(false)
  const searchRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (showSearch) {
      // espera o elemento montar e aplica a classe para disparar a animação
      setTimeout(() => setSearchVisible(true), 10)
    } else {
      setSearchVisible(false)
    }
  }, [showSearch])

  // Header fixo ao rolar
  useEffect(() => {
    const header = document.querySelector('header')
    if (!header) return

    const headerBottom = header.getBoundingClientRect().bottom + window.scrollY

    const handleScroll = () => {
      setIsFixed(window.scrollY >= headerBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Remove item e cria placeholder na MESMA posição visual
  const handleRemoveItem = (id: number) => {
    const node = itemRefs.current.get(id)
    let position = 0
    let height = 0

    if (node) {
      const parent = node.parentElement
      if (parent) {
        const children = Array.from(parent.children)
        position = children.indexOf(node) // posição visual atual na <ul>
      }
      height = node.getBoundingClientRect().height // altura do item
    }

    // Remove do Redux
    dispatch(remover(id))

    // Insere placeholder para manter o espaço e exibir a mensagem
    setRemovedPlaceholders((prev) => [...prev, { id, position, height }])

    // Remove placeholder após 2s
    setTimeout(() => {
      setRemovedPlaceholders((prev) => prev.filter((p) => p.id !== id))
    }, 2000)
  }

  const handleClearAll = () => {
    dispatch(esvaziar())
    setClearedMessage(true)

    // some a mensagem após 2s
    setTimeout(() => setClearedMessage(false), 2000)
  }

  // Monta uma lista "virtual" que intercala placeholders e itens
  const totalRows = itens.length + removedPlaceholders.length
  const placeholdersSorted = [...removedPlaceholders].sort(
    (a, b) => a.position - b.position
  )

  const rows: Array<
    | { type: 'placeholder'; data: RemovedPlaceholder }
    | { type: 'item'; data: (typeof itens)[number] }
  > = []

  let itemIdx = 0
  for (let pos = 0; pos < totalRows; pos++) {
    const ph = placeholdersSorted.find((p) => p.position === pos)
    if (ph) {
      rows.push({ type: 'placeholder', data: ph })
    } else {
      const item = itens[itemIdx++]
      if (item) {
        rows.push({ type: 'item', data: item })
      }
    }
  }

  const toggleSearch = () => {
    setShowSearch((prev) => !prev)
  }

  return (
    <>
      <HeaderBar className={isFixed ? 'fixed' : ''}>
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="logo Eplay" />
          </Link>
          <nav>
            <Links>
              <Title>
                <Link to="/">Home</Link>
              </Title>
              <DropdownContainer
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="dropdown-container"
              >
                <TitleDropdown
                  className={showCategories ? 'active' : ''}
                  aria-haspopup="true"
                  aria-expanded={showCategories}
                >
                  <a href="#">Categorias</a>
                </TitleDropdown>
                <DropdownMenu
                  className={showCategories ? 'active' : ''}
                  role="menu"
                  aria-hidden={!showCategories}
                >
                  <DropdownItem role="menuitem">
                    <Link to="/categorias/acao">Ação</Link>
                  </DropdownItem>
                  <DropdownItem role="menuitem">
                    <Link to="/categorias/aventura">Aventura</Link>
                  </DropdownItem>
                  <DropdownItem role="menuitem">
                    <Link to="/categorias/rpg">RPG</Link>
                  </DropdownItem>
                  <DropdownItem role="menuitem">
                    <Link to="/categorias/esportes">Esportes</Link>
                  </DropdownItem>
                </DropdownMenu>
              </DropdownContainer>
              <Title>
                <Link to="/novidades">Novidades</Link>
              </Title>
              <Title>
                <Link to="/promocoes">Promoções</Link>
              </Title>
            </Links>
          </nav>
        </div>
        <ContainerMenuRight>
          <BtnSearch onClick={toggleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </BtnSearch>
          <ContainerUserLogin>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
            <span>
              Olá,{' '}
              <Link to="/login">
                <a title="ir para tela de Login">Entre</a>
              </Link>{' '}
              ou
              <br />{' '}
              <Link to="/register">
                <a title="Ir para tela de Cadastro">Cadastre-se</a>
              </Link>
            </span>
          </ContainerUserLogin>
          <LinkCart onClick={() => setSidebarOpen(true)}>
            <ContainerCart>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
              </svg>
              <span>
                {itens.length > 0 ? (
                  <strong>{itens.length}</strong>
                ) : (
                  <strong>0</strong>
                )}
              </span>
            </ContainerCart>
          </LinkCart>
        </ContainerMenuRight>
      </HeaderBar>

      {showSearch && (
        <ContainerSearch
          ref={searchRef}
          className={`${isFixed ? 'fixed' : ''} ${searchVisible ? 'show' : ''}`}
        >
          <input
            type="search"
            placeholder="Pesquisar..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={toggleSearch}>X</button>
        </ContainerSearch>
      )}

      {/* Sidebar e overlay */}
      <SidebarOverlay
        open={sidebarOpen}
        onClick={() => setSidebarOpen(false)}
      />
      <Sidebar open={sidebarOpen}>
        <ContainerRetornar onClick={() => setSidebarOpen(false)}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
            <span>Retornar</span>
          </div>
        </ContainerRetornar>
        <SidebarContent>
          <h2>Sua Cesta de Produtos</h2>

          {rows.length === 0 ? (
            <p>
              {' '}
              A sua cesta está vazia. <br />
              Adicione produtos para continuar.{' '}
            </p>
          ) : (
            <>
              <ul>
                {rows.map((row) => {
                  if (row.type === 'placeholder') {
                    // Elemento FORA do ContainerProductCart, ocupando a mesma altura
                    return (
                      <div
                        key={`placeholder-${row.data.id}`}
                        style={{
                          height: row.data.height || 48,
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: 8 // mantenha igual ao ContainerProductCart
                        }}
                      >
                        <span>Item removido com sucesso!</span>
                      </div>
                    )
                  }

                  const item = row.data
                  return (
                    <ContainerProductCart
                      key={item.id}
                      ref={(el) => {
                        if (el) {
                          itemRefs.current.set(item.id, el)
                        } else {
                          itemRefs.current.delete(item.id)
                        }
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                        aria-label={`Remover ${item.titulo}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                          <title>Remover Este Item</title>
                        </svg>
                      </button>
                      <li>
                        {item.titulo} - {paraReal(item.preco)}
                      </li>
                    </ContainerProductCart>
                  )
                })}
              </ul>
              <BtnEsvaziarCesta onClick={handleClearAll}>
                <a title="Remove todos os items da cesta">Esvaziar Cesta</a>
              </BtnEsvaziarCesta>
            </>
          )}

          <strong>Total: {paraReal(valorTotal)}</strong>
          {itens.length > 0 && (
            <Link to="/checkout" onClick={() => setSidebarOpen(false)}>
              <Button type="link" to="/checkout">
                <span>Finalizar Compra</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          )}
        </SidebarContent>
      </Sidebar>
    </>
  )
}

export default Header
