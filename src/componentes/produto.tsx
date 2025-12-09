import { Link, useNavigate } from "react-router-dom"

function Produto(){
    const navigate = useNavigate()
    const detalheProduto = ()=>{        
        navigate("/produto/10")
    }
    return(
        <>
           <h2>Produto</h2>
           <button onClick={detalheProduto}>Ver detalhe produto</button>

           <Link to="/produto/20">Produto 20</Link>

           <Link to="/produto/30?cor=azul">Produto cor azul</Link>
        </>
        
    )
}
export default Produto