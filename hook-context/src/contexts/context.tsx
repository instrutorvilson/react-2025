import { createContext } from "react";

interface TemaContextType {
  tema: string;
  alternarTema: () => void;
}

export const TemaContext = createContext<TemaContextType>(
    {
      tema: "light",
      alternarTema: () => {}
    }
);
