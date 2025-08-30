import ProductList from '../../../components/ProductList'
import Section from '../../../components/Section'
import { useGetJogosQuery } from '../../../Services/api'

const Aventura = () => {
  const { data: lancamentos = [], error: lancamentosError } =
    useGetJogosQuery('lancamentos')

  if (lancamentosError) {
    console.error('Erro ao buscar lançamentos:', lancamentosError)
  }

  // Filtra apenas jogos da categoria "Aventura"
  const jogosAventura = lancamentos.filter(
    (jogo) => jogo.categoria === 'Aventura'
  )

  return (
    <Section title="Aventura" background="black">
      <ProductList games={jogosAventura} />
    </Section>
  )
}

export default Aventura
