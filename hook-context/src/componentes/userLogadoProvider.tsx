import { createContext, useState } from "react";

export const UserLogadoContext = createContext({} as any);

export function UserLogadoProvider({ children }: any) {
  const [user, setUser] = useState({
    nome: "ana",
    email: "",
    logado: false,
  });

  const login = (nome: string, email: string) => {
    setUser({
      nome,
      email,
      logado: true,
    });
  };

  const logout = () => {
    setUser({
      nome: "",
      email: "",
      logado: false,
    });
  };

  return (
    <UserLogadoContext.Provider value={{ user, login, logout }}>
      {children}
    </UserLogadoContext.Provider>
  );
}
