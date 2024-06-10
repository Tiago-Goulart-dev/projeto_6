import { ButtonContainer, ButtonLink, ButtonMenu } from './styles'

type Props = {
  type: 'button' | 'link' | 'menu'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  if (type === 'link') {
    return (
      <ButtonLink to={to as string} title={title}>
        {children}
      </ButtonLink>
    )
  }
  return (
    <ButtonMenu onClick={onClick} title={title}>
      {children}
    </ButtonMenu>
  )
}

export default Button
