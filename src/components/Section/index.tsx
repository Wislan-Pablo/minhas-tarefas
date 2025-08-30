import { ReactElement } from 'react'
import { Container, Title } from './styles'

export type Props = {
  title?: string
  background: 'black' | 'gray'
  children?: React.ReactNode
}

const Section = ({ children, title, background }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  )
}

export default Section
