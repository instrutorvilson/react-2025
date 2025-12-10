import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './componentes/formvalido'
import FormularioYup from './componentes/form-yup'

function App() {
 

  return (
    <>
      <Formulario />
      <FormularioYup />
    </>
  )
}

export default App
