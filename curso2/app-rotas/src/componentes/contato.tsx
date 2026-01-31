import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Contato() {
  const [nome, setNome] = useState('')
  const [fone, setFone] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e){
     e.preventDefault()

     const contato = { nome, fone, email}
     fetch('http://localhost:3000/contatos',{
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(contato)
     })
     .then( response => navigate('/listacontatos'))
     
     setNome('')
     setEmail('')
     setFone('')

  }

  

  return (
    <>
      <h2 className="textcenter">Novo contato</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Ex: Ana"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="form-control mt-3"
          required
        />
        <input type="email" placeholder="Ex: ana@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mt-3"
          required
        />
        <input type='tel' placeholder="Ex: (47)9090-2345"
          value={fone}
          onChange={(e) => setFone(e.target.value)}
          className="form-control mt-3"
        />
        <button className="btn btn-primary mt-2">Gravar</button>
       
      </form>
    </>
  )
}