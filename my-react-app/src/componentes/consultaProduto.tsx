import type { IProduto } from "../interfaces/produto.interface";
import CardProduto from "./carProduto";

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
    },
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

function ConsultaProduto(){
    return(
        <div style={{'display':'flex','flexWrap':'wrap'}}>
           {/* <CardProduto
              nome='Milho'
              descricao='de pipoca'
              preco={10.50}
              imagem='https://m.media-amazon.com/images/I/71RxcmFY4DL._AC_SX679_.jpg'
           /> */}
           {
             produtos.map((p, ind) => (
                <CardProduto key={ind} {...p}/>
             ))            
           }
          
        </div>
    )
}

export default ConsultaProduto