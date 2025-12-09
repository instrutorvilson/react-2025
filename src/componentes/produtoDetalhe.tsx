import { useParams, useSearchParams } from "react-router-dom"

function ProdutoDetalhe(){
   const { id } = useParams()

   const [query] = useSearchParams();

    return(
       <h2>Detalhe produto ID: {id} {query.get('cor') ? `,Cor:${query.get('cor')}`:''}</h2>
    
    )
}

export default ProdutoDetalhe