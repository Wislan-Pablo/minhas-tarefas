// src/components/Header/index.tsx
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { remover } from '../../store/reducers/carrinho'
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
  SidebarOverlay,
  ContainerUserLogin,
  ContainerMenuRight,
  BtnSearch,
  ContainerSearch
} from './styles'
import logo from '../../assets/images/logo2.svg'
import { RootReducer } from '../../store'
import { SideBarCart } from './SideBarCart'

// importa as actions do novo reducer sidebar
import { abrirSidebar, fecharSidebar } from '../../store/reducers/sidebar'

const Header = () => {
  const dispatch = useDispatch()
  const [showCategories, setShowCategories] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  // Mensagens/espaçadores para itens removidos
  const [removedPlaceholders, setRemovedPlaceholders] = useState<
    { id: number; position: number; height: number }[]
  >([])

  // estado do campo de busca
  const [showSearch, setShowSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleMouseEnter = () => setShowCategories(true)
  const handleMouseLeave = () => setShowCategories(false)

  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const valorTotal = itens.reduce((acc: any, item: { preco: any }) => acc + item.preco, 0)

  // pega o estado global da sidebar
  const sidebarOpen = useSelector((state: RootReducer) => state.sidebar.open)

  const [searchVisible, setSearchVisible] = useState(false)
  const searchRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (showSearch) {
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

  // Remove item e cria placeholder
  const handleRemoveItem = (id: number) => {
    // Encontra a posição do item na lista visual
    const position = itens.findIndex((item: { id: number }) => item.id === id)
    const item = itens.find((item: { id: number }) => item.id === id)
    let height = 48 // altura padrão

    // Remove do Redux
    dispatch(remover(id))

    // Insere placeholder para manter o espaço
    setRemovedPlaceholders((prev) => [...prev, { id, position, height }])

    // Remove placeholder após 2s
    setTimeout(() => {
      setRemovedPlaceholders((prev) => prev.filter((p) => p.id !== id))
    }, 2000)
  }

  // Monta uma lista "virtual" que intercala placeholders e itens
  const totalRows = itens.length + removedPlaceholders.length
  const placeholdersSorted = [...removedPlaceholders].sort(
    (a, b) => a.position - b.position
  )

  const rows: Array<
    | { type: 'placeholder'; data: { id: number; height: number } }
    | { type: 'item'; data: (typeof itens)[number] }
  > = []

  let itemIdx = 0
  for (let pos = 0; pos < totalRows; pos++) {
    const ph = placeholdersSorted.find((p) => p.position === pos)
    if (ph) {
      rows.push({ type: 'placeholder', data: { id: ph.id, height: ph.height } })
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

  const location = useLocation()
  const currentPath = location.pathname

  return (
    <>
      <HeaderBar className={isFixed ? 'fixed' : ''}>
        <div className="containerSemMargem">
          <div>
            <Link to="/">
              <img className="logo" src={logo} alt="logo Eplay" />
            </Link>
            <nav>
              <Links>
                <Title active={currentPath === '/'}>
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
                <Title active={currentPath === '/novidades'}>
                  <Link to="/novidades">Novidades</Link>
                </Title>
                <Title active={currentPath === '/promocoes'}>
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
                viewBox="2 2 20 20"
                width="28"
                height="28"
                strokeWidth="1.5"
                stroke="#ffffff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </BtnSearch>
            <ContainerUserLogin>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              {/*
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
              */}
            </ContainerUserLogin>
            <LinkCart onClick={() => dispatch(abrirSidebar())}>
              <ContainerCart>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>
                <span>
                  <div className="NumberBasket">
                    <strong>{itens.length}</strong>
                  </div>
                </span>
              </ContainerCart>
            </LinkCart>
          </ContainerMenuRight>
        </div>
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
        onClick={() => dispatch(fecharSidebar())}
      />

      <SideBarCart
        sidebarOpen={sidebarOpen}
        setSidebarOpen={(open) =>
          open ? dispatch(abrirSidebar()) : dispatch(fecharSidebar())
        }
        rows={rows}
        handleRemoveItem={handleRemoveItem}
        valorTotal={valorTotal}
      />
    </>
  )
}

export default Header
