import { MoonLoader } from 'react-spinners'
import { ContainerLoader } from './styles'
import { Cores } from '../../styles'

const Loader = () => {
  return (
    <ContainerLoader>
      <MoonLoader color={`${Cores.verde}`} size="120" />
    </ContainerLoader>
  )
}

export default Loader
