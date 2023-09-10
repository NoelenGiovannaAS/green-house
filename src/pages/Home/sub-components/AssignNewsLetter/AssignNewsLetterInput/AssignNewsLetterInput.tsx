import { ReactComponent as MailIcon } from '@assets/icons/mail.svg'
import * as Styles from './AssignNewsLetterInput.styles'

export const AssignNewsLetterInput = () => {
  return (
    <Styles.Wrapper>
      <MailIcon />
      <Styles.Input placeholder="Insira seu e-mail" />
      <Styles.Button>Assinar newsletter</Styles.Button>
    </Styles.Wrapper>
  )
}
