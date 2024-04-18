import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Italiano from './pages/RestauranteItaliano'
import Japones from './pages/RestauranteJapones'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hiokisushi" element={<Japones />} />
    <Route path="/ladolcevitatrattoria" element={<Italiano />} />
  </Routes>
)

export default Rotas
