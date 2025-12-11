import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TemaProvider } from './componentes/temaProvider.tsx'
import { UserLogadoProvider } from './componentes/userLogadoProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TemaProvider>
      <UserLogadoProvider>
          <App />
      </UserLogadoProvider>        
    </TemaProvider>
    
  </StrictMode>,
)
