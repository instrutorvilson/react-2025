import { useContext, useState } from "react"
import { UserLogadoContext } from "./userLogadoProvider"


function Logout(){
     const { logout} = useContext(UserLogadoContext)
     return(
        <>
          <button onClick={logout}>Desconectar</button>        
        </>
    )
}
export default Logout