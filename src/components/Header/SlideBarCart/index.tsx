import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as S from './styles'
import { Game } from '../../../App'
import { paraReal } from '../../Product'
import Button from '../../Button'
import { esvaziar } from '../../../store/reducers/carrinho'

type Props = {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  rows: Array<
    | { type: 'placeholder'; data: { id: number; height: number } }
    | { type: 'item'; data: Game }
  >
  handleRemoveItem: (id: number) => void
  valorTotal: number
}

export const SideBarCart = ({
  sidebarOpen,
  setSidebarOpen,
  rows,
  handleRemoveItem,
  valorTotal
}: Props) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const [isScrollable, setIsScrollable] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const checkOverflow = () => {
      if (sidebarRef.current) {
        const el = sidebarRef.current
        setIsScrollable(el.scrollHeight > el.clientHeight)
      }
    }

    checkOverflow()
    window.addEventListener('resize', checkOverflow)
    return () => window.removeEventListener('resize', checkOverflow)
  }, [rows])

  const handleClearAll = () => {
    const confirmar = window.confirm(
      'Tem certeza que deseja remover todos os itens da Cesta de Produtos?'
    )

    if (confirmar) {
      dispatch(esvaziar())
    }
  }

  return (
    <S.Sidebar ref={sidebarRef} open={sidebarOpen} scrollable={isScrollable}>
      <S.ContainerRetornar onClick={() => setSidebarOpen(false)}>
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
      </S.ContainerRetornar>

      <S.SidebarContent>
        <div className="TitleSideBarContent">
          <h2>Sua Cesta de Produtos</h2>
          <span>
            <div className="NumberBasket">
              <strong>
                {rows.filter((row) => row.type === 'item').length}
              </strong>
            </div>
          </span>
        </div>

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
                  return (
                    <div
                      key={`placeholder-${row.data.id}`}
                      style={{
                        height: row.data.height || 48,
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 8
                      }}
                    >
                      <span>Item removido com sucesso!</span>
                    </div>
                  )
                }

                const item = row.data
                return (
                  <S.ContainerProductCart key={item.id}>
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
                      </svg>
                      <title>Remover Este Item</title>
                    </button>
                    <li>
                      <Link
                        to={`/product-details/${item.id}`}
                        state={{ game: item }}
                      >
                        {item.titulo} - {paraReal(item.preco)}
                      </Link>
                    </li>
                  </S.ContainerProductCart>
                )
              })}
            </ul>
            <S.BtnEsvaziarCesta onClick={handleClearAll}>
              <a title="Remove todos os items da cesta">Esvaziar Cesta</a>
            </S.BtnEsvaziarCesta>
          </>
        )}

        <strong>Total: {paraReal(valorTotal)}</strong>
        {rows.filter((row) => row.type === 'item').length > 0 && (
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
      </S.SidebarContent>
    </S.Sidebar>
  )
}
