import { useState } from "react";
function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [erros, setErros] = useState({nome:'',email:''});

    function validar() {
        const novosErros = {nome:'',email:''};
        if (!nome.trim()) {
         novosErros.nome = "O nome é obrigatório.";
        }

        if (!email.trim()) {
            novosErros.email = "O email é obrigatório.";
        } else if (!email.includes("@")) {
            novosErros.email = "Formato de email inválido.";
        }
        setErros(novosErros);
        return Object.keys(novosErros).length === 0;
    }

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!validar()) return;
        console.log("Formulário válido:", { nome, email });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome</label>
                <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
                {erros.nome && <p style={{ color: "red" }}>{erros.nome}</p>}
            </div>
            <div>
                <label>Email</label>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                {erros.email && <p style={{ color: "red" }}>{erros.email}</p>}
            </div>
        <button type="submit">Enviar</button>
    </form>
    );
    }
export default Formulario