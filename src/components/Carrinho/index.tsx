import Card from '../Card'
import { ContainerCart } from './styles'
import { Props } from '../Card'

const Cart = ({ children, title }: Props) => (
  <>
    <ContainerCart>
      <Card title={title} children={children} />
    </ContainerCart>
  </>
)

export default Cart
