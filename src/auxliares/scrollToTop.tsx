import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0) // sempre volta para o topo
  }, [pathname]) // roda toda vez que a rota (pathname) mudar

  return null
}

export default ScrollToTop
