import { useState } from "react"

function Cadastro(){
    const [nome, setNome] = useState('Maria')
    const [email, setEmail] = useState('maria@gnail.com')
    return(
        <>
            <form>
                <label>Informe nome</label>
                <input type="text"
                className="form-control" 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />

                <label>Informe email</label>
                <input type="email" 
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                
            </form>        
            <p>{nome}</p>
            <p>{email}</p>
        </>
    )
}

export default Cadastro