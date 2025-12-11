import { useContext, useState } from "react"
import { UserLogadoContext } from "./userLogadoProvider";

function Login(){
    const [nome, setNome] = useState('pedro')
    const [email, setEmail] = useState('pedro@gmail.com')

     const { login } = useContext(UserLogadoContext);

        const handleLogin = () => {
            login(nome, email); 
        };

    return(
        <>
          <button onClick={handleLogin}>Login</button>        
        </>
    )
}

export default Login