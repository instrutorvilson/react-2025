import { useEffect, useState } from "react";
import type { IProduto } from "../interfaces/produto.interface";
import CardProduto from "./carProduto";

function ConsultaProdutoAPI(){
   const [dados, setDados] = useState<IProduto[]>([])

   useEffect(()=>{
      fetch('http://localhost:3000/produtos')
      .then(resp => resp.json())
      .then(data => setDados(data))
   },[])

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

export default ConsultaProdutoAPI