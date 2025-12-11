import { createContext } from "react";

interface TemaContextType {
  tema: string;
  alternarTema: () => void;
}

export interface ILogin {
    nome:string,
    email: string
}

interface UserLogadoContextType {
  user: {nome:string, email:string};
  login: () => void;
  logout: () => void;
  setUser: (e:ILogin) => void;
}

export const TemaContext = createContext<TemaContextType>(
    {
      tema: "light",
      alternarTema: () => {}
    }
);

export const UserLogadoContext = createContext<UserLogadoContextType>(
    {
      user : { nome:'', email:'' },
      login: () => {},
      logout: () => {},
      setUser: (e) => {}
    }
);