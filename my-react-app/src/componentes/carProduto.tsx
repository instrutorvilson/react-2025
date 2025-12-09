import type { IProduto } from "../interfaces/produto.interface"

interface ProdutoCardProps extends IProduto { addCarinho: (produto:IProduto) => void }

function CardProduto({id,nome, descricao, preco,imagem, addCarinho}: ProdutoCardProps){
    const produto = {id,nome, descricao, preco,imagem}
    return(
        <div className="card" style={{'width':'18rem'}}>
            <img src={imagem} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{nome}</h5>
                <h5 className="card-title">{id}</h5>
                <p className="card-text"> {descricao}</p>
                <strong>{preco}</strong>
                <button onClick={() => addCarinho(produto)}> Adicionar ao Carrinho </button>
            </div>
        </div>
    )
}

export default CardProduto