import ProductList from '../../../components/ProductList'
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
    <main>
      <ProductList games={jogosEsportes} title="Esportes" background="black" />
    </main>
  )
}

export default Esportes
