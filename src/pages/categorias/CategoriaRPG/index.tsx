import ProductList from '../../../components/ProductList'
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
    <main>
      <ProductList games={jogosRPG} title="RPG" background="black" />
    </main>
  )
}

export default Rpg
