import { useState, useRef, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as S from './styles'
import { Game } from '../../../App'
import { paraReal } from '../../Product'
import Button from '../../Button'
import { esvaziar } from '../../../store/reducers/carrinho'
import CartEmpity from '../../../assets/images/Cart_Empty_Dark.svg'
import MoonLoader from '../../Loader'

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

  const isEmpty = rows.filter((row) => row.type === 'item').length === 0

  // Subtotal calculado a partir dos itens
  const subtotal = useMemo(() => {
    return rows.reduce((acc, row) => {
      if (row.type === 'item') {
        return acc + row.data.preco
      }
      return acc
    }, 0)
  }, [rows])

  // Quantidade de itens no carrinho
  const itemCount = useMemo(() => {
    return rows.filter((row) => row.type === 'item').length
  }, [rows])

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

  // Remove todos os itens do carrinho
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
      {/* Header muda dependendo se está vazio ou não */}
      <S.HeaderCart>
        <h1>{isEmpty ? 'Seu Carrinho' : 'Continuar Compra'}</h1>
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

      {/* Se estiver vazio → mostra mensagem */}
      {isEmpty ? (
        <S.ContainerVoidCart>
          <span>O carrinho está vazio.</span>
          <br />
          <div className="centralizadorVertical">
            <img src={CartEmpity} alt="Cart Empity Icon" />
            <a
              onClick={() => setSidebarOpen(false)}
              title="fechar e continuar comprando"
            >
              Continuar comprando
            </a>
          </div>
        </S.ContainerVoidCart>
      ) : (
        // Se NÃO estiver vazio → renderiza conteúdo
        <S.SidebarContent>
          <div>
            <div className="prices">
              <strong>SubTotal</strong>
              <strong>{paraReal(subtotal)}</strong>
            </div>
            <div className="prices">
              <strong>
                Total ({itemCount} {itemCount === 1 ? 'item' : 'itens'})
              </strong>
              <strong>{paraReal(valorTotal)}</strong>
            </div>
          </div>

          {/* Botão Esvaziar Carrinho
          <div className="clearCart" style={{ marginTop: '1rem' }}>
            <Button type="button" onClick={handleClearAll}>
              Esvaziar carrinho
            </Button>
          </div>
          */}

          <div className="codigoCupom">
            <label htmlFor="codigoCupom">Resgatar código:</label>
            <input
              type="text"
              id="codigoCupom"
              placeholder="Inserir o código de desconto"
            />
          </div>

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
                      fillRule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                  <span>Adicionar método de pagamento</span>
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
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          )}
        </S.SidebarContent>
      )}
    </S.Sidebar>
  )
}
