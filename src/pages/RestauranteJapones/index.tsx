import japonesa from '../../assets/images/japonesa.png'
import Pratos from '../../models/Pratos'
import PratosList from '../../components/PratosList'
import { BannerJaponesa } from '../../components/Banner'

const pratos: Pratos[] = [
  {
    id: 1,
    description:
      'Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. ',
    title: 'Sushi',
    image: japonesa
  },
  {
    id: 2,
    description:
      'Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. ',
    title: 'Sushi',
    image: japonesa
  },
  {
    id: 3,
    description:
      'Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. ',
    title: 'Sushi',
    image: japonesa
  },
  {
    id: 4,
    description:
      'Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. ',
    title: 'Sushi',
    image: japonesa
  },
  {
    id: 5,
    description:
      'Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. ',
    title: 'Sushi',
    image: japonesa
  },
  {
    id: 6,
    description:
      'Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. ',
    title: 'Sushi',
    image: japonesa
  }
]

const Italiano = () => (
  <>
    <BannerJaponesa />
    <PratosList pratos={pratos} />
  </>
)
export default Italiano
