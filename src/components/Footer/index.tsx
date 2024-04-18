import { Container, FooterSection, Link, FooterText } from './styles'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import logo from '../../assets/images/logo.svg'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <Link href="#">
          <img src={logo} alt="logo" />
        </Link>
      </FooterSection>
      <FooterSection>
        <Link href="#">
          <img src={instagram} alt="instagram" />
        </Link>
        <Link href="#">
          <img src={facebook} alt="facebook" />
        </Link>
        <Link href="#">
          <img src={twitter} alt="twitter" />
        </Link>
      </FooterSection>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.
      </FooterText>
    </div>
  </Container>
)

export default Footer
