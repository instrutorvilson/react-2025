import { useEffect, useState } from "react"
import CardContato from "./cardContato"

export default function ListaContatos(){    
    const [contatos, setContatos] = useState([{nome:'',email:'',fone:''}])
    useEffect(()=>{
        fetch('http://localhost:3000/contatos')
        .then(response => response.json())
        .then(dados => setContatos(dados))
    },[])
    return(
        <>
        <h1>Contatos</h1>
        <table className="table">
            <thead>
               <tr>
                  <td>Nome</td>
                  <td>Email</td>
                  <td>Fone</td>
               </tr>
            </thead>
            <tbody>
                {
                    contatos.map(ct => (<tr><td>{ct.nome}</td><td>{ct.email}</td><td>{ct.fone}</td></tr>))
                }
            </tbody>
        </table>
        <hr />
        {
            contatos.map(ct => (<CardContato contato={ct}/>))
        }
        </>
    )
}