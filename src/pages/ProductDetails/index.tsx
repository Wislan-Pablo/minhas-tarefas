// pages/ProductDetails/index.tsx
import { useLocation } from 'react-router-dom'
import Hero from '../../components/Hero'
import { Game } from '../../App'
import NotFound404 from '../../components/NotFound404'
import Section from '../../components/Section'
import * as S from './styles'

const ProductDetails = () => {
  const location = useLocation()
  const state = location.state as { game?: Game }

  if (!state?.game) {
    return <NotFound404 />
  }

  return (
    <>
      <S.ContainerDetails>
        <Hero game={state.game} />
        <Section title="Galeria" background="black">
          <p>Fotos</p>
        </Section>
        <Section title="Sobre o jogo" background="gray">
          <S.ContainerDescription>
            <p>
              Hogwarts Legacy é um RPG de ação de mundo aberto ambientado no
              mundo introduzido pela primeira vez nos livros do Harry Potter.
              Explore e descubra animais fantásticos, personalize seu personagem
              e crie poções, domine o lançamento de feitiços, aprimore talentos
              e torne-se o bruxo que deseja ser.
              <br />
              <br /> Experimente Hogwarts da década de 1800. Faça aliados, lute
              contra os bruxos das trevas e, finalmente, decida o destino do
              mundo bruxo. Seu legado é o que você faz dele. Viva o Inesperado.
              <br />
              <br /> A Edição Digital Deluxe de Hogwarts Legacy inclui:
              <br /> -Testrálio Montaria
              <br /> -Arena de Batalha das Artes das Trevas
              <br /> -Conjunto Cosmético das Artes das Trevas
              <br /> -Chapéu Militar das Artes das Trevas
              <br /> -Versões Digitais PS4™ e PS5™
              <br />
              <br />
              Inclui a missão da Loja Assombrada de Hogsmeade, que concede
              acesso a uma masmorra adicional, Conjunto de Cosméticos do
              Lojista, e uma loja de Hogsmeade no jogo
              <br />
              <br /> Novos itens cosméticos agora disponíveis para todos os
              jogadores: Os Óculos que Sobreviveram, Uniforme e Casaco do
              Prisioneiro de Azkaban, Hipogrifo Ônix de Montaria, Receita da
              Poção Felix Felicis, Vassouras do Bruxo das Trevas (2).
            </p>
          </S.ContainerDescription>
        </Section>
        <Section title="Mais Detalhes" background="black">
          <div className="flexDiv">
            <S.DetailsGrid>
              <ul>
                <li>Plataforma</li>
                <li>Lançamento</li>
                <li>Distribuidora:</li>
                <li>Gêneros</li>
                <li>Voz</li>
                <li>Idiomas da tela:</li>
              </ul>
              <ul>
                <li>PS4, PS5</li>
                <li>9/2/2023</li>
                <li>Warner Bros. Interactive</li>
                <li>Original</li>
                <li>
                  Espanhol (México), Francês (França), Inglês, Japonês,
                  Português (Brasil)
                </li>
                <li>
                  Chinês (simplificado), Chinês (tradicional), Coreano, Espanhol
                  (México), Francês (França), Inglês, Japonês, Português
                  (Brasil)
                </li>
              </ul>
            </S.DetailsGrid>
            <div className="content">
              Para jogar esse jogo no PS5, talvez seja preciso atualizar seu
              sistema com o software do sistema mais recente. É possível jogar
              esse jogo no PS5, mas alguns recursos disponíveis no PS4 podem
              estar ausentes. Consulte PlayStation.com/bc para obter mais
              detalhes.
              <br />
              <br />
              É preciso ter uma conta para usar os recursos online, que estão
              sujeitos aos termos de serviço e à política de privacidade
              aplicável (playstationnetwork.com/terms-of-service e
              playstationnetwork.com/privacy-policy).
              <br />
              <br />
              Software sujeito à licença e à garantia limitada
              (us.playstation.com/softwarelicense/br).
              <br />
              <br />
              Você pode baixar esse conteúdo e reproduzi-lo no console PS5
              principal associado à sua conta (pela configuração
              “Compartilhamento do console e Jogo offline”) e em outros consoles
              PS5 ao fazer login com essa conta.
            </div>
          </div>
          <S.LegalText>
            HOGWARTS LEGACY software © 2023 Warner Bros. Entertainment Inc.
            Developed by Avalanche Software. WIZARDING WORLD and HARRY POTTER
            Publishing Rights © J.K. Rowling. PORTKEY GAMES, HOGWARTS LEGACY,
            WIZARDING WORLD AND HARRY POTTER characters, names and related
            indicia © and ™ Warner Bros. Entertainment Inc. WARNER BROS. GAMES
            LOGO, WB SHIELD: ™ & © Warner Bros. Entertainment Inc. (s23)
          </S.LegalText>
        </Section>
      </S.ContainerDetails>
    </>
  )
}

export default ProductDetails
