import { useEffect, useState } from "react";
import Componente1 from "../componentes/componente1";
import Componente2 from "../componentes/componente2";
import LoginContext from "../contexts/loginContext";
import { Route, Routes } from "react-router-dom";
import Menu from "../componentes/menu";

export default function Rotas() {
    const [nome, setNome] = useState('')
    
    useEffect(()=>{
       const userLogado = localStorage.getItem('login') 
       setNome(userLogado)
    },[])

    return (
        <LoginContext.Provider value={nome}>
            <Routes>
                <Route path='/' element={<Menu />} />
                <Route path='comp1' element={<Componente1 />} />
                <Route path='comp2' element={<Componente2 />} />
            </Routes>
        </LoginContext.Provider>
    )
}