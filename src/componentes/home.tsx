function Home(){
    const login = ()=>{
        localStorage.setItem('token','123')
    }

    const logout = () => {
        localStorage.removeItem('token')
    }
    return(
        <>
          <h2>Home</h2>
          <button onClick={login}>Login</button>
          <button onClick={logout}>Logout</button>
        </>        
    )
}

export default Home