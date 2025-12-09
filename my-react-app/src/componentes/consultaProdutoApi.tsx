import { useEffect, useState } from "react";
import type { IProduto } from "../interfaces/produto.interface";
import CardProduto from "./carProduto";

function ConsultaProdutoAPI({ addProduto}:any){
   const [dados, setDados] = useState<IProduto[]>([])

   useEffect(()=>{
      fetch('http://localhost:3000/produtos')
      .then(resp => resp.json())
      .then(data => setDados(data))
   },[])

    return(
        <div style={{'display':'flex','flexWrap':'wrap'}}>
            {
             dados.map((p:any, ind:any) => (
                <CardProduto key={ind} {...p} addCarinho={addProduto}/>
             ))            
           }
          
        </div>
    )
}

export default ConsultaProdutoAPI