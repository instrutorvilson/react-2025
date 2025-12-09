import type { ItemCarrinho } from "../interfaces/produto.interface";

interface Props {
    itens:ItemCarrinho[]
    remover: (id:number) => void
}

function Carrinho({ itens, remover } : Props) {
  return (
    <div>
      <h2>Carrinho</h2>

      {itens.length === 0 && <p>Carrinho vazio</p>}

      {itens.map((item) => (
        <div key={item.produto.id}>
          {item.produto.nome} — R${item.produto.preco} 
          <button onClick={() => remover(item.produto.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
}

export default Carrinho