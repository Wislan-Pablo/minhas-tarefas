import { Link } from 'react-router-dom'
import { Game } from '../../App'
import * as S from './styles'
type Props = {
  game: Game
}

const ProductSlider = ({ game }: Props) => {
  return (
    <S.Produto>
      <Link to={`/product-details/${game.id}`} state={{ game }}>
        <div className="linkProduto">
          <S.Capa>
            <S.Tag>{game.categoria}</S.Tag>
            <img src={game.imagem} alt={game.titulo} />
          </S.Capa>
          <S.Titulo>
            <a>{game.titulo}</a>
          </S.Titulo>
        </div>
      </Link>

      <S.Plataformas>
        {game.plataformas.map((plat) => (
          <li key={plat}>{plat}</li>
        ))}
      </S.Plataformas>
    </S.Produto>
  )
}

export default ProductSlider
