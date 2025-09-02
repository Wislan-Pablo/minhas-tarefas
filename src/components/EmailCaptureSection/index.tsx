import { BotaoCTA, ContainerEmailCapture, FormEmailCapture } from './styles'
import { GlobalCss } from '../../styles'
const EmailCaptureSection = () => {
  return (
    <ContainerEmailCapture>
      <h2>Fique por dentro das novidades!</h2>
      <p>Inscreva-se para receber atualizações e ofertas exclusivas.</p>
      <FormEmailCapture>
        <input
          type="email"
          placeholder="Digite o e-mail que você mais utiliza"
          required
          aria-label="Email"
        />
        <br />
        <BotaoCTA type="submit">Inscrever-se</BotaoCTA>
      </FormEmailCapture>
    </ContainerEmailCapture>
  )
}
export default EmailCaptureSection
