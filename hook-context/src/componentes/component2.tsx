import { useContext } from "react";
import { TemaContext } from "../contexts/context";
import { UserLogadoContext } from "./userLogadoProvider";

function Component2() {
const { tema, alternarTema } = useContext(TemaContext);
const { user } = useContext(UserLogadoContext);
return (
    <>
        <h2>Componente 2 Usuario logado: { user.nome }</h2>
        <p>Tema atual: {tema}</p>
        <button onClick={alternarTema}>Alternar Tema</button>
    </>
);
}
export default Component2;