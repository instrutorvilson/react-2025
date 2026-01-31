import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DetalheContato() {
  const [contato, setContato] = useState({nome:'',email:'',fone:''})
  const { id } = useParams();
  const navigate = useNavigate()

   useEffect(()=>{
        fetch(`http://localhost:3000/contatos/${id}`)
        .then(response => response.json())
        .then(dado => setContato(dado))
    },[])

   async function onExcluir(){
       await fetch(`http://localhost:3000/contatos/${id}`,{ method:'DELETE'}) 
       navigate('/listacontatos')
    }

    return (
        <div className="card m-2">
    
            <div className="card-body pt-0">
                <h5 className="card-title">{contato.nome}</h5>
                <p className="card-text"> {contato.email} </p>
                <p className="card-text"> {contato.fone} </p>
                <button className="btn btn-danger" 
                   onClick={onExcluir}
                >Excluir</button>
            </div>
        </div>
    )
}