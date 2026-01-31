import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './componentes/home'
import About from './componentes/about'
import Contato from './componentes/contato'
import Info from './componentes/info'
import Produtos from './componentes/produtos'
import CarProdutos from './componentes/cardProdutos'
import BikeProdutos from './componentes/cardBike'
import ListaContatos from './componentes/listaContatos'
import DetalheContato from './componentes/detalheContato'

function App() {
  return (
    <div className='container'>
      <BrowserRouter>      
        <nav>
          <Link to='/'>Home</Link>
          <Link to='about'>About</Link>
          <Link to='contato'>Contato</Link>
          <Link to='listacontatos'>Consulta contatos</Link>

          <Link to='info/maria'>Maria</Link>
          <Link to='info/joao'>João</Link>

           <Link to='produtos'>Produtos</Link>
          
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contato' element={<Contato />} />
          <Route path='listacontatos' element={<ListaContatos />}/>
          <Route path='/contato/detalhes/:id' element={<DetalheContato />}/>

          <Route path='info/:firstname' element={<Info />}/>   
          <Route path='produtos' element={<Produtos />}>
             <Route path='car' element={<CarProdutos />}/>
             <Route path='bike' element={<BikeProdutos />}/>
          </Route>      
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
