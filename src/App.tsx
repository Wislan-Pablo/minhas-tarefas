import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import EmailCaptureSection from './components/EmailCaptureSection'
import ScrollToTop from './auxliares/scrollToTop'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  return (
    <BrowserRouter>
      {/* ScrolToTop faz com que a posição anterior do scroll seja perdida ao trocar para nova página */}
      <ScrollToTop />
      <GlobalCss />
      <Header />
      <Rotas />
      <EmailCaptureSection />
      <Footer />
    </BrowserRouter>
  )
}

export default App
