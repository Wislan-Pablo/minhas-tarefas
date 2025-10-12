import React from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'submit'
  value?: string
  title?: string
  onClick?: () => void
  children?: React.ReactNode
}

const Button = ({ type, children, title, onClick}: Props) => {
  if (type === 'button') {
    return (
      <ButtonLink type="button" title={title} onClick={onClick} >
        {children}
      </ButtonLink>
    )
  }

  return (
    <ButtonContainer type="submit" onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button
