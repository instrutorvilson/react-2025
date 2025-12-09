import { useState } from 'react'
import './App.css'
import Car from './componentes/carro'
import Carroca from './componentes/carrocas'
import Cadastro from './componentes/cadastro'
import ConsultaProduto from './componentes/consultaProduto'
import type { IProduto, ItemCarrinho } from './interfaces/produto.interface'
import NovoProduto from './componentes/novoProduto'
import ConsultaProdutoAPI from './componentes/consultaProdutoApi'
import Carrinho from './componentes/carrinho'


function App() {
  // const corContador = {color:'red'}
  //const [count, setCount] = useState(10)
    const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

    const adicionarProduto = (produto:IProduto) => {
      var item: ItemCarrinho = {
        produto, quantidade:1
      }
      setCarrinho([...carrinho, item ]);
    };

    const removerProduto = (id:number) => {
      setCarrinho(carrinho.filter(item => item.produto.id !== id));
    };

    return (
    <>
      <ConsultaProdutoAPI addProduto={adicionarProduto}/>
      <Carrinho itens={carrinho} remover={removerProduto} />

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
      {/*<NovoProduto />
      <ConsultaProdutoAPI />*/}

    </>
  )
}

export default App
