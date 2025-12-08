import { useState } from "react"
import type { IProduto } from "../interfaces/produto.interface"
import ConsultaProduto from "./consultaProduto"

const produtos: IProduto[] = [
    {
        'nome':'Milho',
        'descricao': 'de pipoa',
        'preco': 10.50,    
        'imagem': 'https://m.media-amazon.com/images/I/71RxcmFY4DL._AC_SX679_.jpg'
    },
     {
        'nome':'Farinha',
        'descricao': 'para fazer pão',
        'preco': 10.50,    
        'imagem': 'https://m.media-amazon.com/images/I/71RxcmFY4DL._AC_SX679_.jpg'
    },
     {
        'nome':'feijão',
        'descricao': 'de feijoada',
        'preco': 10.50,    
        'imagem': 'https://m.media-amazon.com/images/I/71RxcmFY4DL._AC_SX679_.jpg'
    }
]

function NovoProduto(){
    const[produto, setProduto] = useState<IProduto>(
        { nome: '', descricao: '', preco: 0, imagem: "https://m.media-amazon.com/images/I/71RxcmFY4DL._AC_SX679_.jpg"}
    )
    const [dados, setDados] = useState<IProduto[]>(produtos)

    function handleSubmit(): void {
        const novo = {...produto}
        setDados([...dados, novo])
        produto.nome = ''
        produto.descricao = ''
        produto.preco = 0
    }

    function salvar_api(): void {
        const novo = {...produto}        
        fetch('http://localhost:3000/produtos',
            { 
                method : 'POST',
                headers: { 'Content-Type':'Application/JSON'},
                body: JSON.stringify(novo)
            }
        )
        produto.nome = ''
        produto.descricao = ''
        produto.preco = 0        
    }

    return(
        <div className="m-5">      
          <label>Informe nome</label>
                <input type="text"
                    className="form-control" 
                    value={produto?.nome}
                    onChange={(e) => setProduto({...produto, nome: e.target.value})}
                />
                 <label>Informe descrição</label>
                <input type="text"
                    className="form-control" 
                    value={produto?.descricao}
                    onChange={(e) => setProduto({...produto, descricao: e.target.value})}
                />
                <label>Informe preço</label>
                <input type="text"
                    className="form-control" 
                    value={produto?.preco}
                    onChange={(e) => setProduto({...produto, preco: parseFloat(e.target.value)})}
                />
                <button className="btn btn-primary mt-3 mb-3" onClick={handleSubmit}>Gravar</button>
                <button className="btn btn-primary mt-3 mb-3" onClick={salvar_api}>Gravar na api</button>                  
            
        </div>
    )
}

export default NovoProduto