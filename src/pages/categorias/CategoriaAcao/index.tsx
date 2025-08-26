import ProductList from '../../../components/ProductList'
import { useGetJogosQuery } from '../../../Services/api'

const CategoriaAcao = () => {
  const { data: lancamentos = [] } = useGetJogosQuery('lancamentos')

  // Filtra apenas jogos da categoria "Ação"
  const jogosAcao = lancamentos.filter((jogo) => jogo.categoria === 'Ação')

  return <ProductList games={jogosAcao} title="Ação" background="black" />
}

export default CategoriaAcao
