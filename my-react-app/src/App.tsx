import { useState } from 'react'
import './App.css'
import Car from './componentes/carro'
import Carroca from './componentes/carrocas'
import Cadastro from './componentes/cadastro'
import ConsultaProduto from './componentes/consultaProduto'
import type { IProduto } from './interfaces/produto.interface'
import NovoProduto from './componentes/novoProduto'
import ConsultaProdutoAPI from './componentes/consultaProduoApi'


function App() {
  const corContador = {color:'red'}
  const [count, setCount] = useState(10)
    return (
    <>
      {/* <h1>Helo world</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          +
        </button>
        <button onClick={() => setCount(count - 1)}>
          -
        </button>
         <p style={corContador}> {count }</p>
      </div>
      <div>
         <Car placa="Abc-1234" />
         <Car placa="def-1234" />        
      </div>
      <div>
        <Carroca />
      </div>
      <div>
        <Cadastro />
      </div> */}
      <NovoProduto />
      <ConsultaProdutoAPI />
    </>
  )
}

export default App
