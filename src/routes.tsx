import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CardapioRestaurante from './pages/Cardapio'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cardapio/:id" element={<CardapioRestaurante />} />
  </Routes>
)

export default Rotas
