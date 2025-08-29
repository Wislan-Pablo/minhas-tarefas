import { useLocation } from 'react-router-dom'
import Hero from '../../Hero'
import { Game } from '../../../App'
import NotFound404 from '../../NotFound404'

const ProductDetails = () => {
  const location = useLocation()
  const state = location.state as { game?: Game }

  if (!state?.game) {
    return <NotFound404 />
  }

  return <Hero game={state.game} />
}

export default ProductDetails
