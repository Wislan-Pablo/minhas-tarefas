import { Imagem, Precos, Titulo } from './styles'
import BannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do Dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 e PS5</Titulo>
        <Precos>
          <span>De R$ 250,00</span> <br />
          por apenas <strong>R$ 99,90</strong>
        </Precos>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar essa oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
