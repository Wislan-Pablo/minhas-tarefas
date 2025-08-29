import { Link } from 'react-router-dom'
import { NotFound } from './styles'
const NotFound404 = () => (
  <div className="container">
    <NotFound>
      <Link to="/"> Retornar para Home</Link>
    </NotFound>
  </div>
)

export default NotFound404
