import { ButtonCTA } from '../../components/Button/styles'
import Cart from '../../components/Carrinho'
import { Row, InputGroup } from './styles'

const Checkout = () => {
  return (
    <>
      <div className="centralizadorVertical">
        <Cart title="Confirme seus pedidos">
          <>
            <div>
              <h2>Sua cesta de produtos</h2>
            </div>
          </>
        </Cart>
        <Cart title="Dados de Cobrança">
          <>
            <Row>
              <InputGroup>
                <label htmlFor="fullName">Nome Completo</label>
                <input type="text" id="fullName" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" />
              </InputGroup>{' '}
            </Row>
            <h3>Dados de entrega - conteúdo digital</h3>
            <Row>
              <InputGroup>
                <label htmlFor="deliveryEmail">E-mail</label>
                <input type="email" id="deliveryEmail" />
              </InputGroup>{' '}
              <InputGroup>
                <label htmlFor="confirmdeliveryEmail">Confirme o E-mail</label>
                <input type="text" id="confirmdeliveryEmail" />
              </InputGroup>
            </Row>
          </>
        </Cart>
        <Cart title="Pagamento">
          <>
            <div>
              <p>
                Ao optar por esta forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas intituições financeiras. Portanto a
                liberação do código de ativação do jogo adiquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            </div>
          </>
        </Cart>
        <ButtonCTA type="submit" title="Clique para finalizar a compra">
          Finalziar Compra
        </ButtonCTA>
      </div>
    </>
  )
}

export default Checkout
