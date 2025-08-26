import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
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
      <ProductList games={promocoes} title="Promoções" background="gray" />
      <ProductList games={lancamentos} title="Em breve" background="black" />
      <ProductList games={promocoes} title="Promoções" background="gray" />
    </main>
  )
}

export default Home
