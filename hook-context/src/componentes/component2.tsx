import { useContext } from "react";
import { TemaContext } from "../contexts/context";

function Component2() {
const { tema, alternarTema } = useContext(TemaContext);
return (
    <>
        <h2>Componente 2</h2>
        <p>Tema atual: {tema}</p>
        <button onClick={alternarTema}>Alternar Tema</button>
    </>
);
}
export default Component2;