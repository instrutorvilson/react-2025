import type { IProduto } from "../interfaces/produto.interface";
import CardProduto from "./carProduto";
interface Props { dados:IProduto[] }
function ConsultaProduto({dados}:Props){
    return(
        <div style={{'display':'flex','flexWrap':'wrap'}}>
           {/* <CardProduto
              nome='Milho'
              descricao='de pipoca'
              preco={10.50}
              imagem='https://m.media-amazon.com/images/I/71RxcmFY4DL._AC_SX679_.jpg'
           /> */}
           {
             dados.map((p:any, ind:any) => (
                <CardProduto key={ind} {...p}/>
             ))            
           }
          
        </div>
    )
}

export default ConsultaProduto