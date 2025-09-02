import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { data, Link } from 'react-router-dom'
import * as S from './styles'
import { Game } from '../../../App'
import { paraReal } from '../../Product'
import Button from '../../Button'
import { esvaziar } from '../../../store/reducers/carrinho'

export type Props = {
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
      <S.HeaderCart>
        <h1>Continuar Compra</h1>
        <div onClick={() => setSidebarOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
      </S.HeaderCart>

      <S.SidebarContent>
        <div className="prices">
          <strong>Total:</strong>
          <strong>{paraReal(valorTotal)}</strong>
        </div>
        <div className="codigoCupom">
          <label htmlFor="codigoCupom">Resgatar código:</label>
          <input
            type="text"
            id="codigoCupom"
            placeholder="Inserir o código de desconto"
          />
        </div>

        {
          rows.length === 0 ? (
            <p>
              {' '}
              A sua cesta está vazia. <br />
              Adicione produtos para continuar.{' '}
            </p>
          ) : null /*
          <>
            <ul>
              {rows.map((row) => {
                if (row.type === 'placeholder') {
                  return (
                    <div key={`placeholder-${row.data.id}`}>
                      <span>Item removido com sucesso!</span>
                    </div>
                  )
                }

                const item = row.data
                return (
                  <S.ContainerProductCart key={item.id}>
                    <li>
                      <Link
                        to={`/product-details/${item.id}`}
                        state={{ game: item }}
                      >
                        {item.titulo} - {paraReal(item.preco)}
                      </Link>
                    </li>
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
                  </S.ContainerProductCart>
                )
              })}
            </ul>
          </>
          */
        }

        {rows.filter((row) => row.type === 'item').length > 0 && (
          <div className="btnMetodoPag">
            <span>Método de pagamento:</span>
            <Link to="/checkout" onClick={() => setSidebarOpen(false)}>
              <Button type="link" to="/checkout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                  />
                </svg>
                <span>Adicionar método de pagamento</span>
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
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        )}
      </S.SidebarContent>
    </S.Sidebar>
  )
}
