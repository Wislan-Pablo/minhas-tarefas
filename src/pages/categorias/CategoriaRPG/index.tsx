import ProductList from '../../../components/ProductList'
import Section from '../../../components/Section'
import { useGetJogosQuery } from '../../../Services/api'

const Rpg = () => {
  const { data: lancamentos = [], error: lancamentosError } =
    useGetJogosQuery('lancamentos')

  if (lancamentosError) {
    console.error('Erro ao buscar lançamentos:', lancamentosError)
  }

  // Filtra apenas jogos da categoria "RPG"
  const jogosRPG = lancamentos.filter((jogo) => jogo.categoria === 'RPG')

  return (
    <Section title="RPG" background="black">
      <ProductList games={jogosRPG} />
    </Section>
  )
}

export default Rpg
