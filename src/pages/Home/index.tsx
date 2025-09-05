import ProductList from '../../components/ProductList'
import Section from '../../components/Section'
import { useGetJogosQuery } from '../../Services/api'
import HeroSlider from '../../components/HeroSlider'
import SliderExpo from '../../components/SliderExpo'

const Home = () => {
  const { data: promocoes = [], error: promocoesError } =
    useGetJogosQuery('promocoes')
  const { data: lancamentos = [], error: lancamentosError } =
    useGetJogosQuery('lancamentos')

  if (promocoesError) {
    console.error('Erro ao buscar promoções:', promocoesError)
  }
  if (lancamentosError) {
    console.error('Erro ao buscar lançamentos:', lancamentosError)
  }

  return (
    <>
      <HeroSlider />
      <Section title="Promoções" background="gray">
        <ProductList games={promocoes} />
      </Section>
      <Section title="Em breve" background="black">
        <SliderExpo games={lancamentos} />
      </Section>
      <Section title="Promoções" background="gray">
        <ProductList games={promocoes} />
      </Section>
    </>
  )
}

export default Home
