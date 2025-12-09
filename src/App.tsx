import './App.css'
import Home from './componentes/home'
import Produto from './componentes/produto'
import ListaProduto from './componentes/listaProduto'
import Carrinho from './componentes/carrinho'
import Menu from './componentes/menu'
import { Route, Routes } from 'react-router-dom'
import ProdutoDetalhe from './componentes/produtoDetalhe'
import PrivateRoute from './componentes/protegidos/rotaPrivada'
import Dashboard from './componentes/protegidos/dashboard'

function App() {
 
  return (
     <div>           
         <p>Rotas</p>        
            <Menu />
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Produto />} />
                <Route path="/listaprodutos" element={<ListaProduto />} />
                <Route path="/produto/:id" element={<ProdutoDetalhe />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/adm" element={
                  <PrivateRoute>
                     <Dashboard />
                  </PrivateRoute>
                }/>
             </Routes>
       </div> 
  )
}

export default App
