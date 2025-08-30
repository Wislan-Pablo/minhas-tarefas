import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Section from '../../components/Section'
import { useGetJogosQuery } from '../../Services/api'

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
    <main>
      <Banner />
      <Section title="Promoções" background="gray">
        <ProductList games={promocoes} />
      </Section>
      <Section title="Em breve" background="black">
        <ProductList games={lancamentos} />
      </Section>
      <Section title="Promoções" background="gray">
        <ProductList games={promocoes} />
      </Section>
    </main>
  )
}

export default Home
