import { Outlet, Link } from 'react-router-dom'
export default function Dashboard() {
return (
 <>
    <h1>Dashboard</h1>
    <nav style={{ display: 'flex', gap: '20px' }}>
    <Link to="perfil">Perfil</Link>
    <Link to="config">Configurações</Link>
    </nav> 
    <Outlet />
 </>
)
}