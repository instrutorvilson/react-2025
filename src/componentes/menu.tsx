import { Link } from "react-router-dom";

function Menu(){
    return(
        <>
         <Link to= "/">Home</Link>
         <Link to="/produtos">Produto</Link>
         <Link to="/listaprodutos">Produtos</Link>
         <Link to="/carrinho">Carrinho</Link>
         <Link to="/adm">Adm</Link>
        </>
       
    )
}

export default Menu