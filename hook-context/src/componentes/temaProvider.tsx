import { useState, createContext } from "react";
import { TemaContext } from "../contexts/context";

export function TemaProvider({ children }: any) {
    const [tema, setTema] = useState("light");

    const alternarTema = () => {
         setTema(tema === "light" ? "dark" : "light");
    };

    return (
        <TemaContext.Provider value={{ tema, alternarTema }}>
             {children}
        </TemaContext.Provider>
    );
}
