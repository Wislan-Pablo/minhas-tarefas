import ProductList from '../../../components/ProductList'
import Section from '../../../components/Section'
import { useGetJogosQuery } from '../../../Services/api'

const CategoriaAcao = () => {
  const { data: lancamentos = [] } = useGetJogosQuery('lancamentos')

  // Filtra apenas jogos da categoria "Ação"
  const jogosAcao = lancamentos.filter((jogo) => jogo.categoria === 'Ação')

  return (
    <Section title="Ação" background="black">
      <ProductList games={jogosAcao} />
    </Section>
  )
}

export default CategoriaAcao
