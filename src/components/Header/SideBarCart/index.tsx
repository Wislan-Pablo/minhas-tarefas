import { useState, useRef, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { Game } from '../../../App'
import { paraReal } from '../../Product'
import Button from '../../Button'
import { esvaziar } from '../../../store/reducers/carrinho'
import CartEmpity from '../../../assets/images/Cart_Empty_Dark.svg'
import { MoonLoader } from 'react-spinners'
import { motion, AnimatePresence } from 'framer-motion' // 👈 animação

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

// 👉 Novo componente de checkout
type CheckoutSidebarProps = {
  onBack: () => void
}

const CheckoutSidebar = ({ onBack }: CheckoutSidebarProps) => {
  return (
    <S.SidebarContent>
      <h1>Checkout</h1>
      <p>Escolha o método de pagamento:</p>

      <div className="metodo">
        <Button type="button">Cartão de crédito</Button>
        <Button type="button">Pix</Button>
        <Button type="button">Boleto</Button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <Button type="button" onClick={onBack}>
          Voltar para o carrinho
        </Button>
      </div>
    </S.SidebarContent>
  )
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

  // 👉 Estado que controla o "step"
  const [step, setStep] = useState<'cart' | 'checkout'>('cart')

  // 👉 sempre que abrir a sidebar, resetar step para "cart"
  useEffect(() => {
    if (sidebarOpen) {
      setStep('cart')
    }
  }, [sidebarOpen])

  // 👉 Loading entre steps
  const [loading, setLoading] = useState(false)

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

  // 👉 Função para trocar step com loading
  const goToCheckout = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep('checkout')
    }, 1300) // 1.2s de loading fake
  }

  const goBackToCart = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep('cart')
    }, 700) // um pouco mais rápido na volta
  }

  return (
    <S.Sidebar ref={sidebarRef} open={sidebarOpen} scrollable={isScrollable}>
      {/* --- Loading --- */}
      {loading ? (
        <S.LoaderWrapper>
          <MoonLoader size={80} color="#36d7b7" />
        </S.LoaderWrapper>
      ) : (
        // --- Animação entre steps ---
        <AnimatePresence mode="wait">
          {step === 'cart' ? (
            <motion.div
              key="cart"
              initial={{ opacity: 0, x: -100 }} // Começa 100px à esquerda, invisível
              animate={{ opacity: 1, x: 0 }} // Desliza para a posição original, ficando visível
              exit={{ opacity: 0, x: 100 }} // Desliza para 100px à direita, desaparecendo
              transition={{ duration: 0.5 }} // Aumenta a duração para um slide mais suave
            >
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
                      <S.BtnPagamento type="button" onClick={goToCheckout}>
                        <span>Adicionar método de pagamento</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          width="12"
                          height="12"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </S.BtnPagamento>
                    </div>
                  )}
                </S.SidebarContent>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="cart"
              initial={{ opacity: 0, x: 100 }} // Começa 100px à esquerda, invisível
              animate={{ opacity: 1, x: 0 }} // Desliza para a posição original, ficando visível
              exit={{ opacity: 0, x: -100 }} // Desliza para 100px à direita, desaparecendo
              transition={{ duration: 0.3 }} // Aumenta a duração para um slide mais suave
            >
              <CheckoutSidebar onBack={goBackToCart} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </S.Sidebar>
  )
}
