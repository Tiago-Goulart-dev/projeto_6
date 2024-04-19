import { Container, FooterSection, LinkA, FooterText } from './styles'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <Link to={'/'}>
          <LinkA href="#">
            <img src={logo} alt="logo" />
          </LinkA>
        </Link>
      </FooterSection>
      <FooterSection>
        <LinkA href="#">
          <img src={instagram} alt="instagram" />
        </LinkA>
        <LinkA href="#">
          <img src={facebook} alt="facebook" />
        </LinkA>
        <LinkA href="#">
          <img src={twitter} alt="twitter" />
        </LinkA>
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
