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
import { SideBarCart } from './SlideBarCart'

const Header = () => {
  const dispatch = useDispatch()
  const [showCategories, setShowCategories] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
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
  const valorTotal = itens.reduce((acc, item) => acc + item.preco, 0)

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
    const position = itens.findIndex((item) => item.id === id)
    const item = itens.find((item) => item.id === id)

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
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
                </svg>
                <span>
                  {itens.length > 0 ? (
                    <div className="NumberBasket">
                      <strong>{itens.length}</strong>
                    </div>
                  ) : (
                    <div className="NumberBasket">
                      <strong>{itens.length}</strong>
                    </div>
                  )}
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

      {/* Sidebar e overlay - usando o componente SidebarCart */}
      <SidebarOverlay
        open={sidebarOpen}
        onClick={() => setSidebarOpen(false)}
      />

      <SideBarCart
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        rows={rows}
        handleRemoveItem={handleRemoveItem}
        valorTotal={valorTotal}
      />
    </>
  )
}

export default Header
