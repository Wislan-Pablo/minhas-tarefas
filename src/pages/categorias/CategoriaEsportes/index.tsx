import ProductList from '../../../components/ProductList'
import Section from '../../../components/Section'
import { useGetJogosQuery } from '../../../Services/api'

const Esportes = () => {
  const { data: lancamentos = [], error: lancamentosError } =
    useGetJogosQuery('lancamentos')

  if (lancamentosError) {
    console.error('Erro ao buscar lançamentos:', lancamentosError)
  }

  // Filtra apenas jogos da categoria "Esportes"
  const jogosEsportes = lancamentos.filter(
    (jogo) => jogo.categoria === 'Esportes'
  )

  return (
    <Section title="Esportes" background="black">
      <ProductList games={jogosEsportes} />
    </Section>
  )
}

export default Esportes
