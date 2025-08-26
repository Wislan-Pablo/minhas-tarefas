import React from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  value?: string
  title?: string
  to?: string
  onClick?: () => void
  children?: React.ReactNode
}

const Button = ({ type, children, title, to, onClick }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  } else if (type === 'submit') {
    return <ButtonContainer type="submit">{children}</ButtonContainer>
  }

  return (
    <ButtonLink as="a" to={to as string} title={title}>
      {children || 'Aproveitar'}
    </ButtonLink>
  )
}

export default Button
