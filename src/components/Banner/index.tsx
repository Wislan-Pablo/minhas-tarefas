import { Imagem, Precos, Titulo } from './styles'
import BannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
    <div className="containerSemMargem">
      <Tag size="big">Destaque do Dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 e PS5</Titulo>
        <Precos>
          <span>De R$ 250,00</span> <br />
          por apenas <strong>R$ 99,90</strong>
        </Precos>
      </div>
      <Button type="button" title="Clique aqui para aproveitar essa oferta">
        <Link to="/checkout">Aproveitar</Link>
      </Button>
    </div>
  </Imagem>
)

export default Banner
