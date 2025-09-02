import { Banner, InfosProduct } from './styles'
import Tag from '../Tag'
import { useAdicionarCarrinho } from '../../hooks/HookAdicionarAoCarrinho'
import { BtnComprar } from '../Product/styles'
import { Game } from '../../App' // ajuste conforme seu tipo
import { paraReal } from '../Product'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const { adicionado, handleAdicionar } = useAdicionarCarrinho(game)

  return (
    <div className="containerBanner">
      <Banner style={{ backgroundImage: `url(${game.imagem})` }}>
        <div className="container">
          <div>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
          </div>
        </div>
      </Banner>
      <div className="container">
        <InfosProduct>
          <h2>{game.titulo}</h2>
          <p>
            {game.precoAntigo === null ? (
              ''
            ) : (
              <span>De {game.precoAntigo && paraReal(game.precoAntigo)}</span>
            )}
            Por apenas {paraReal(game.preco)}
          </p>
          <BtnComprar
            onClick={handleAdicionar}
            $adicionado={adicionado}
            disabled={adicionado} /* desabilita quando já foi adicionado */
          >
            {adicionado
              ? 'Produto na Cesta :)'
              : 'Adicionar à Cesta de Produtos'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
            </svg>
          </BtnComprar>
        </InfosProduct>
      </div>
    </div>
  )
}

export default Hero
