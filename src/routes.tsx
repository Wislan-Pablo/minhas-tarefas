import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CategoriaAcao from './pages/categorias/CategoriaAcao'
import CategoriaAventura from './pages/categorias/CategoriaAventura'
import Carrinho from './pages/Carrrinho'
import CategoriaRPG from './pages/categorias/CategoriaRPG'
import CategoriaEsportes from './pages/categorias/CategoriaEsportes'
import Novidades from './pages/Novidades'
import Promocoes from './pages/Promocoes'
import ProductDetails from './components/Product/ProductDetails'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias/acao" element={<CategoriaAcao />} />
    <Route path="/categorias/aventura" element={<CategoriaAventura />} />
    <Route path="/categorias/rpg" element={<CategoriaRPG />} />
    <Route path="/categorias/esportes" element={<CategoriaEsportes />} />
    <Route path="/novidades" element={<Novidades />} />
    <Route path="/promocoes" element={<Promocoes />} />
    <Route path="/product-details/:id" element={<ProductDetails />} />
    <Route path="/checkout" element={<Carrinho />} />
  </Routes>
)

export default Rotas
